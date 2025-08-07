Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./562.js");
var s = require("./5231.js");
var r = function (e) {
  function IsoData() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(IsoData, e);
  IsoData.prototype.init = function (t) {
    e.prototype.init.call(this, t);
    this._objects = new c.IsoDataObjects(this);
    this._grid = new l.IsoDataGrid(this);
    this._updater = new s.IsoUpdaterData(this);
    this._updater.init();
  };
  IsoData.prototype.destroy = function () {
    e.prototype.destroy.call(this);
    this._updater.destroy();
    this._updater = null;
  };
  Object.defineProperty(IsoData.prototype, "updater", {
    get: function () {
      return this._updater;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoData.prototype, "objects", {
    get: function () {
      return this._objects;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoData.prototype, "grid", {
    get: function () {
      return this._grid;
    },
    enumerable: true,
    configurable: true
  });
  return IsoData;
}(a.AAreaDataComponent);
exports.IsoData = r;
var l = require("./5249.js");
var c = require("./5252.js");
o.classImplementsInterfaces(r, "ICollectableRendererList", "IAreaDataComponent");