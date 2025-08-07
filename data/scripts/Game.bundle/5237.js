Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./30.js");
var s = function (e) {
  function IsoCommandObjectsTriggerUpdateModel(t, i) {
    var n = e.call(this, t) || this;
    n._objectsType = i;
    return n;
  }
  n.__extends(IsoCommandObjectsTriggerUpdateModel, e);
  IsoCommandObjectsTriggerUpdateModel.prototype.execute = function () {
    var e = a.CachedTimer.getCachedTimer();
    for (var t = 0, i = this.isoData.objects.provider.getObjectsByListType(this._objectsType); t < i.length; t++) {
      i[t].update(e);
    }
  };
  return IsoCommandObjectsTriggerUpdateModel;
}(require("./310.js").AIsoCommandModel);
exports.IsoCommandObjectsTriggerUpdateModel = s;
o.classImplementsInterfaces(s, "ICollectableRendererList");