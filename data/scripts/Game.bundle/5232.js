Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function IsoCommandPackageObjectChangePos(t, i) {
    var n = e.call(this, t) || this;
    n._newPos = i;
    return n;
  }
  n.__extends(IsoCommandPackageObjectChangePos, e);
  IsoCommandPackageObjectChangePos.prototype.createCommandList = function () {
    var e = [];
    e.push(new a.IsoCommandObjectChangePosModel(this.vo.isoData, this.vo, this.newPos), new s.IsoCommandObjectChangePosView(this.vo), new r.IsoCommandZSortObject(this.vo));
    return e;
  };
  Object.defineProperty(IsoCommandPackageObjectChangePos.prototype, "newPos", {
    get: function () {
      return this._newPos;
    },
    enumerable: true,
    configurable: true
  });
  return IsoCommandPackageObjectChangePos;
}(require("./634.js").AIsoCommandPackageObject);
exports.IsoCommandPackageObjectChangePos = o;
var a = require("./5233.js");
var s = require("./5234.js");
var r = require("./487.js");