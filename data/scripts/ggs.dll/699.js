Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./700.js");
var a = require("./701.js");
var s = require("./702.js");
var r = require("./3.js");
var o = function () {
  function LocalStorageFactory() {}
  LocalStorageFactory.isWindowLocalStorageAvailable = function () {
    var e;
    var t;
    try {
      e = window.localStorage;
      t = "__storage_test__";
      e.setItem(t, t);
      e.getItem(t);
      e.removeItem(t);
      return true;
    } catch (e) {
      return false;
    }
  };
  LocalStorageFactory.createLocalStorage = function (e) {
    if (r.ExternalInterface.available) {
      return new i.LandinPageStorage(e);
    } else if (LocalStorageFactory.isWindowLocalStorageAvailable()) {
      return new s.WindowLocalStorage(e);
    } else {
      return new a.MemoryStorage(e);
    }
  };
  return LocalStorageFactory;
}();
exports.LocalStorageFactory = o;