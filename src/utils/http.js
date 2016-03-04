const log =
  startTime =>
    console.log(
      'request took',
      (new Date().getTime() - startTime) / 1000,
      'seconds'
    );

export const fetchJSON =
  ({ url, method = 'GET' }) =>
    fetch({
      url,
      method,
      json: true,
    });

export const fetch =
  ({ url, method = 'GET', json = false }) =>
    new Promise((resolve, reject) => {
      const requestStart = new Date().getTime();
      console.log('fetching', { url, method, json });
      const req = new window.XMLHttpRequest();

      req.timeout = 10000;
      req.open(method, url);

      req.onload =
        () => {
          log(requestStart);

          if (req.status === 200) {
            if (json) {
              const parsed = parseJSONResult(req.response || req.responseText);
              if (typeof parsed === 'string') {
                reject(parsed);
              } else {
                resolve(parsed);
              }
            } else {
              resolve(req);
            }
            return;
          }

          reject(req.statusText || 'Unkown Error');
        };

      req.onerror =
        () => {
          log(requestStart);
          reject('Network Error');
        };

      req.ontimeout =
        () => {
          log(requestStart);
          reject('Request timed out');
        };

      req.send();
    });

export const parseJSONResult =
  res => {
    let parsed = new Error('Response JSON payload invalid');
    try {
      parsed = JSON.parse(res);
    } catch (e) {
      console.error('JSON parsing error', e);
    }

    return parsed;
  };
