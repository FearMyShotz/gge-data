Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function IsoCommandPackageObjectsTriggerUpdate(t, i) {
    var n = e.call(this) || this;
    n._isoData = t;
    n._objectsType = i;
    return n;
  }
  n.__extends(IsoCommandPackageObjectsTriggerUpdate, e);
  IsoCommandPackageObjectsTriggerUpdate.prototype.createCommandList = function () {
    var e = [];
    e.push(new a.IsoCommandObjectsTriggerUpdateModel(this._isoData, this._objectsType), new s.IsoCommandObjectsTriggerUpdateView(this._objectsType));
    return e;
  };
  return IsoCommandPackageObjectsTriggerUpdate;
}(require("./486.js").AIsoCommandPackage);
exports.IsoCommandPackageObjectsTriggerUpdate = o;
var a = require("./5239.js");
var s = require("./5240.js");