Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./113.js");
var s = function (e) {
  function AIsoEffectVE() {
    var t = this;
    t._isRunning = false;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(AIsoEffectVE, e);
  AIsoEffectVE.prototype.start = function () {
    this._isRunning = true;
  };
  AIsoEffectVE.prototype.getVELayerType = function () {
    return a.IsoLayerEnum.EFFECT;
  };
  AIsoEffectVE.prototype.onEffectDone = function () {
    this._isRunning = false;
    if (this.effectObjects.containsObject(this)) {
      this.effectObjects.removeObjectByVE(this);
    }
  };
  Object.defineProperty(AIsoEffectVE.prototype, "effectObjects", {
    get: function () {
      return this.isoRenderer.objects.effects;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoEffectVE.prototype, "isRunning", {
    get: function () {
      return this._isRunning;
    },
    enumerable: true,
    configurable: true
  });
  return AIsoEffectVE;
}(require("./313.js").AIsoObjectVE);
exports.AIsoEffectVE = s;
o.classImplementsInterfaces(s, "ICollectableRendererList", "IIngameUICapable");