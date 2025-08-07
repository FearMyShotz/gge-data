Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./30.js");
var s = function (e) {
  function IsoCommandObjectsTriggerUpdateView(t) {
    var i = e.call(this) || this;
    i._objectsType = t;
    return i;
  }
  n.__extends(IsoCommandObjectsTriggerUpdateView, e);
  IsoCommandObjectsTriggerUpdateView.prototype.execute = function () {
    var e = a.CachedTimer.getCachedTimer();
    for (var t = 0, i = this.isoRenderer.objects.provider.getObjectsByGroupType(this._objectsType); t < i.length; t++) {
      i[t].update(e);
    }
  };
  return IsoCommandObjectsTriggerUpdateView;
}(require("./311.js").AIsoCommandView);
exports.IsoCommandObjectsTriggerUpdateView = s;
o.classImplementsInterfaces(s, "ICollectableRendererList");