Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./126.js");
var s = require("./59.js");
var r = function (e) {
  function GoodgameDisplayObjectClip(t, n, i = 24, a = true, r = false, o = false) {
    var l = e.call(this) || this;
    l.animationManager = s.GoodgameBitmapEngine.instance.animationManager;
    l.clipColor = n;
    l.targetFps = i;
    l._running = a;
    l.hasSubLayer = r;
    l.animationColorChange = o;
    l._startFrame = 1;
    l.initCurrentClip(t);
    return l;
  }
  i.__extends(GoodgameDisplayObjectClip, e);
  GoodgameDisplayObjectClip.prototype.once = function (e, t, n, i, a) {};
  GoodgameDisplayObjectClip.prototype.dispose = function () {
    e.prototype.dispose.call(this);
  };
  return GoodgameDisplayObjectClip;
}(a.AbstractDisplayObjectClip);
exports.GoodgameDisplayObjectClip = r;