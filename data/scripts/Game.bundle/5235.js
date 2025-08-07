Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function IsoCommandPackageObjectRemoveById(t, i = -1) {
    var n = this;
    n._objectId = -1;
    CONSTRUCTOR_HACK;
    (n = e.call(this, null) || this)._isoData = t;
    n._objectId = i;
    return n;
  }
  n.__extends(IsoCommandPackageObjectRemoveById, e);
  IsoCommandPackageObjectRemoveById.prototype.createCommandList = function () {
    this.vo = this.isoData.objects.provider.getObjectById(this.objectId);
    if (!this.vo) {
      return null;
    }
    var e = [];
    e.push(new a.IsoCommandObjectRemoveModel(this.isoData, this.vo));
    if (this.vo.objectType.groupType.needsAdvancedUpdates) {
      e.push(new r.IsoCommandAreaDataUpdated(this.isoData));
    }
    e.push(new s.IsoCommandObjectRemoveView(this.vo));
    return e;
  };
  Object.defineProperty(IsoCommandPackageObjectRemoveById.prototype, "objectId", {
    get: function () {
      return this._objectId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoCommandPackageObjectRemoveById.prototype, "isoData", {
    get: function () {
      return this._isoData;
    },
    enumerable: true,
    configurable: true
  });
  return IsoCommandPackageObjectRemoveById;
}(require("./634.js").AIsoCommandPackageObject);
exports.IsoCommandPackageObjectRemoveById = o;
var a = require("./1491.js");
var s = require("./1492.js");
var r = require("./485.js");