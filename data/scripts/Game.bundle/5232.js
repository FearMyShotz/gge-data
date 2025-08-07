Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function IsoCommandObjectChangePosView(t) {
    var i = e.call(this) || this;
    i._vo = t;
    return i;
  }
  n.__extends(IsoCommandObjectChangePosView, e);
  IsoCommandObjectChangePosView.prototype.execute = function () {
    var e = this.isoRenderer.objects.provider.getObjectByVO(this._vo);
    if (e) {
      e.updatePosition();
    }
  };
  return IsoCommandObjectChangePosView;
}(require("./311.js").AIsoCommandView);
exports.IsoCommandObjectChangePosView = a;
o.classImplementsInterfaces(a, "ICollectableRendererList");