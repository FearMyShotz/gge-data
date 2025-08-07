Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function IsoCommandObjectUpdateModel(t, i) {
    var n = e.call(this, t) || this;
    n._vo = i;
    return n;
  }
  n.__extends(IsoCommandObjectUpdateModel, e);
  IsoCommandObjectUpdateModel.prototype.execute = function () {
    if (this._vo) {
      this._vo.updateData();
      this.isoData.grid.updateBuildingPos(this._vo);
    }
  };
  return IsoCommandObjectUpdateModel;
}(require("./310.js").AIsoCommandModel);
exports.IsoCommandObjectUpdateModel = a;
o.classImplementsInterfaces(a, "ICollectableRendererList");