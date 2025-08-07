Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function IsoCommandPackageObjectsInit(t, i) {
    var n = e.call(this) || this;
    n._isoData = t;
    n._objectsType = i;
    return n;
  }
  n.__extends(IsoCommandPackageObjectsInit, e);
  IsoCommandPackageObjectsInit.prototype.createCommandList = function () {
    var e = [];
    e.push(new a.IsoCommandObjectsInitModel(this._isoData, this._objectsType));
    if (this._objectsType.needsAdvancedUpdates) {
      e.push(new r.IsoCommandGridUpdate(this._isoData));
    }
    e.push(new s.IsoCommandObjectsInitView(this._objectsType));
    return e;
  };
  return IsoCommandPackageObjectsInit;
}(require("./485.js").AIsoCommandPackage);
exports.IsoCommandPackageObjectsInit = o;
var a = require("./5234.js");
var s = require("./5235.js");
var r = require("./864.js");