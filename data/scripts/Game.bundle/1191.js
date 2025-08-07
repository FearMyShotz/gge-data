Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./55.js");
var r = require("./1192.js");
var l = createjs.Container;
var c = createjs.Point;
var u = function (e) {
  function IsoExplodeEffectVE(t) {
    var i = this;
    i._directions = [];
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this)._screenPos = t;
    return i;
  }
  n.__extends(IsoExplodeEffectVE, e);
  IsoExplodeEffectVE.prototype.createDisp = function () {
    for (var e = 0; e < IsoExplodeEffectVE.PART_AMOUNT; ++e) {
      var t = new l();
      t.graphics.beginFill(16711680);
      t.graphics.drawRect(-4, -4, 4, 4);
      t.graphics.endFill();
      this.dispComponent.addDisp(t);
      t.x = s.ClientConstUtils.getRandomFloat(-5, 5);
      t.y = s.ClientConstUtils.getRandomFloat(0, -30);
      t.rotation = s.ClientConstUtils.getRandomInt(0, 360);
      this.directions.push(new c(s.ClientConstUtils.getRandomFloat(-6, 6), s.ClientConstUtils.getRandomFloat(-0.5, -10)));
    }
  };
  IsoExplodeEffectVE.prototype.start = function () {
    e.prototype.start.call(this);
    this.updateDisp();
  };
  IsoExplodeEffectVE.prototype.update = function (e) {
    if (this.isRunning) {
      var t = a.int(s.ClientConstUtils.getRandomFloat(30, 0));
      for (var i = 0; i < IsoExplodeEffectVE.PART_AMOUNT; ++i) {
        var n = this.disp.getChildAt(i);
        var o = this.directions[i];
        if (n.y > t) {
          n.visible = false;
        } else {
          n.x += o.x;
          n.y += o.y;
          o.x *= 0.99;
          o.y += 0.25;
          n.rotation += 1;
        }
      }
      var r = true;
      for (var l = 0; l < IsoExplodeEffectVE.PART_AMOUNT; ++l) {
        if ((n = this.disp.getChildAt(l)).visible) {
          r = false;
        }
      }
      if (r) {
        this.onEffectDone();
      }
    }
  };
  IsoExplodeEffectVE.prototype.getScreenPos = function () {
    return this._screenPos;
  };
  Object.defineProperty(IsoExplodeEffectVE.prototype, "directions", {
    get: function () {
      return this._directions;
    },
    enumerable: true,
    configurable: true
  });
  IsoExplodeEffectVE.__initialize_static_members = function () {
    IsoExplodeEffectVE.PART_AMOUNT = 400;
  };
  return IsoExplodeEffectVE;
}(r.AIsoEffectVE);
exports.IsoExplodeEffectVE = u;
o.classImplementsInterfaces(u, "ICollectableRendererList", "IIngameUICapable");
u.__initialize_static_members();