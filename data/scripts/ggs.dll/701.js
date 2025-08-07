Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./150.js");
var s = require("./2.js").getLogger("LocalStorage.MemoryStorage");
var r = function (e) {
  function MemoryStorage() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i.__extends(MemoryStorage, e);
  MemoryStorage.prototype.read = function () {
    s.warn("using memory as fail back, no data will be persisted.");
    this._data = {};
    return Promise.resolve(this._data);
  };
  MemoryStorage.prototype.write = function () {
    s.warn("keeping data on memory as fail back, no data will be persisted.");
  };
  return MemoryStorage;
}(a.AbstractLocalStorage);
exports.MemoryStorage = r;