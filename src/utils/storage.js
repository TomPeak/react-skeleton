import localforage from 'localforage';

export const getItem =
  key =>
    console.log('getItem', { key }) ||
    localforage.getItem(key);

export const setItem =
  (key, value) =>
    console.log('setItem', { key, value }) ||
    localforage.setItem(key, value);
