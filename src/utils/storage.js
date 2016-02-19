import localforage from 'localforage';


export const getItem =
(item) =>
  localforage.getItem(item);

export const setItem =
(item, value) =>
  localforage.setItem(item, value);
