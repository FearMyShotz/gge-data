Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./150.js");
var s = require("./5.js");
var r = require("./2.js").getLogger("LocalStorage.WindowLocalStorage");
var o = function (e) {
  function WindowLocalStorage() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i.__extends(WindowLocalStorage, e);
  Object.defineProperty(WindowLocalStorage.prototype, "localStorageKey", {
    get: function () {
      return ["ggs.gameData", s.EnvGlobalsHandler.globals.gameId, s.EnvGlobalsHandler.globals.networkId, this._section].join("_");
    },
    enumerable: true,
    configurable: true
  });
  WindowLocalStorage.prototype.read = function () {
    var e = JSON.parse(window.localStorage.getItem(this.localStorageKey));
    r.info("reading data from window.localStorage.");
    r.info(e);
    this._data = e || {};
    return Promise.resolve(this._data);
  };
  WindowLocalStorage.prototype.write = function () {
    r.info("writing data on window.localStorage.");
    window.localStorage.setItem(this.localStorageKey, JSON.stringify(this._data));
  };
  return WindowLocalStorage;
}(a.AbstractLocalStorage);
exports.WindowLocalStorage = o;