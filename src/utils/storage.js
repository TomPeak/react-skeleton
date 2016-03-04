import localforage from 'localforage';

export const getItem =
  key =>
    localforage.getItem(key);

export const setItem =
  (key, value) =>
    localforage.setItem (key, value);