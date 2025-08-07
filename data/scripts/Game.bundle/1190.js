Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function IsoCommandSpawnEffect(t) {
    var i = e.call(this) || this;
    i._ve = t;
    return i;
  }
  n.__extends(IsoCommandSpawnEffect, e);
  IsoCommandSpawnEffect.prototype.execute = function () {
    if (this.ve) {
      this.isoRenderer.objects.effects.addObject(this.ve);
      this.ve.start();
    }
  };
  Object.defineProperty(IsoCommandSpawnEffect.prototype, "ve", {
    get: function () {
      return this._ve;
    },
    enumerable: true,
    configurable: true
  });
  return IsoCommandSpawnEffect;
}(require("./311.js").AIsoCommandView);
exports.IsoCommandSpawnEffect = a;
o.classImplementsInterfaces(a, "ICollectableRendererList");