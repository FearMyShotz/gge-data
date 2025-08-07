Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./150.js");
var s = require("./3.js");
var r = require("./2.js").getLogger("LocalStorage.LandinPageStorage");
var o = function (e) {
  function LandinPageStorage() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i.__extends(LandinPageStorage, e);
  LandinPageStorage.prototype.read = function () {
    var e = this;
    return new Promise(function (t, n) {
      r.info("reading data from landing page using ggsGetStoredGameData.");
      s.ExternalInterface.asyncCall("ggsGetStoredGameData", e._section).then(function (n) {
        r.info("got data from ggsGetStoredGameData.");
        r.info(n);
        e._data = n || {};
        t(e._data);
      }).catch(function (n) {
        r.error("failed to read data from ggsGetStoredGameData.");
        e._data = {};
        t(e._data);
      });
    });
  };
  LandinPageStorage.prototype.write = function () {
    try {
      r.info("writing data on landing page using ggsStoreGameData.");
      s.ExternalInterface.call("ggsStoreGameData", this._section, this._data);
    } catch (e) {
      r.error("failed to store data using ggsStoreGameData.");
    }
  };
  return LandinPageStorage;
}(a.AbstractLocalStorage);
exports.LandinPageStorage = o;