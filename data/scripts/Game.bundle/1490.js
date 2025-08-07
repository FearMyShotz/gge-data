Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function IsoCommandPackageObjectRemoveByVO(t) {
    return e.call(this, t) || this;
  }
  n.__extends(IsoCommandPackageObjectRemoveByVO, e);
  IsoCommandPackageObjectRemoveByVO.prototype.createCommandList = function () {
    if (!this.vo) {
      return null;
    }
    var e = [];
    e.push(new a.IsoCommandObjectRemoveModel(this.vo.isoData, this.vo));
    if (this.vo.objectType.groupType.needsAdvancedUpdates) {
      e.push(new r.IsoCommandAreaDataUpdated(this.vo.isoData));
    }
    e.push(new s.IsoCommandObjectRemoveView(this.vo));
    return e;
  };
  return IsoCommandPackageObjectRemoveByVO;
}(require("./633.js").AIsoCommandPackageObject);
exports.IsoCommandPackageObjectRemoveByVO = o;
var a = require("./1491.js");
var s = require("./1492.js");
var r = require("./484.js");