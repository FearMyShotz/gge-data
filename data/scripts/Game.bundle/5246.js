Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = function (e) {
  function IsoCommandObjectUpdateView(t) {
    var i = e.call(this) || this;
    i._vo = t;
    return i;
  }
  n.__extends(IsoCommandObjectUpdateView, e);
  IsoCommandObjectUpdateView.prototype.execute = function () {
    if (a.instanceOfClass(this._vo, "CastlewallDefenceVO")) {
      this.viewObjects.defenceObjects.updateWalls();
      this.viewObjects.defenceObjects.updateTowers();
    } else {
      var e = this.isoRenderer.objects.provider.getObjectByVO(this._vo);
      if (e) {
        e.updateDisp();
      }
    }
  };
  return IsoCommandObjectUpdateView;
}(require("./311.js").AIsoCommandView);
exports.IsoCommandObjectUpdateView = s;
o.classImplementsInterfaces(s, "ICollectableRendererList");