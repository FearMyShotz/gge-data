Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./23.js");
var s = require("./23.js");
var r = require("./1192.js");
var l = createjs.Point;
var c = function (e) {
  function AIsoFadeEffectVE(t) {
    var i = this;
    i._startScreenPos = new l();
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this)._startScreenPos = t;
    return i;
  }
  n.__extends(AIsoFadeEffectVE, e);
  AIsoFadeEffectVE.prototype.updateDisp = function () {
    this.destroyDisp();
    this.createDisp();
  };
  AIsoFadeEffectVE.prototype.start = function () {
    e.prototype.start.call(this);
    this.updateDisp();
    this.elementContainer.x = this.startScreenPos.x - 75;
    this.elementContainer.y = this.startScreenPos.y;
    s.TweenMax.fromTo(this.elementContainer, 3, {
      alpha: 1,
      y: this.startScreenPos.y
    }, {
      alpha: 0,
      y: this.startScreenPos.y - 150,
      ease: a.Linear.easeInOut,
      onComplete: this.bindFunction(this.onEffectDone)
    });
  };
  Object.defineProperty(AIsoFadeEffectVE.prototype, "startScreenPos", {
    get: function () {
      return this._startScreenPos;
    },
    enumerable: true,
    configurable: true
  });
  return AIsoFadeEffectVE;
}(r.AIsoEffectVE);
exports.AIsoFadeEffectVE = c;
o.classImplementsInterfaces(c, "ICollectableRendererList", "IIngameUICapable");