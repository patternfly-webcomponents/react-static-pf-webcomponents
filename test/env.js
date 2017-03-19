import $ from 'jquery';
global.$ = global.jQuery = $;

const localStorageMock = (function () {
  let store = {};
  return {
    getItem(key) {
      return store[key];
    },
    setItem(key, value) {
      store[key] = value.toString();
    },
    clear() {
      store = {};
    },
  };
}());
Object.defineProperty(window, 'localStorage', { value: localStorageMock });
