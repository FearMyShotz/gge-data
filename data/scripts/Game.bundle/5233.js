Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./92.js");
var s = function (e) {
  function IsoCommandObjectChangePosModel(t, i, n) {
    var o = e.call(this, t) || this;
    o._vo = i;
    o._newPos = n;
    return o;
  }
  n.__extends(IsoCommandObjectChangePosModel, e);
  IsoCommandObjectChangePosModel.prototype.execute = function () {
    if (this._vo) {
      this._vo.x = this._newPos.x;
      this._vo.y = this._newPos.y;
      this._vo.updateData();
      this.isoData.grid.updateBuildingPos(this._vo);
      r.CastleComponent.controller.dispatchEvent(new a.IsoEvent(a.IsoEvent.ON_OBJECT_POS_CHANGED, [this._vo]));
    }
  };
  return IsoCommandObjectChangePosModel;
}(require("./310.js").AIsoCommandModel);
exports.IsoCommandObjectChangePosModel = s;
var r = require("./14.js");
o.classImplementsInterfaces(s, "ICollectableRendererList");