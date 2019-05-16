import localForage from 'localforage';

localForage.config({
  name: 'ReduxPersist',
  storeName: 'github-light',
});

export default localForage;
