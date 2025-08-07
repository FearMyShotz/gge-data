Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function IsoCommandObjectsInitModel(t, i) {
    var n = e.call(this, t) || this;
    n._objectsType = i;
    return n;
  }
  n.__extends(IsoCommandObjectsInitModel, e);
  IsoCommandObjectsInitModel.prototype.execute = function () {
    var e = this.isoData.objects.getGroupByType(this._objectsType);
    if (e) {
      e.initObjects();
      this.isoData.objects.invalidateCompleteObjectsList();
    }
  };
  return IsoCommandObjectsInitModel;
}(require("./310.js").AIsoCommandModel);
exports.IsoCommandObjectsInitModel = a;
o.classImplementsInterfaces(a, "ICollectableRendererList");