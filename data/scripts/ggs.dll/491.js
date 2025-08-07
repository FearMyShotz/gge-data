Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = createjs.Ticker;
var a = function () {
  function AnimationManager() {
    this.clips = new Map();
    this._pause = false;
  }
  AnimationManager.prototype.dispose = function () {
    this.clips = new Map();
    i.removeEventListener("tick", this.bindFunction(this.handleEnterFrame));
  };
  AnimationManager.prototype.register = function (e) {
    if (!this.isPlaying) {
      i.addEventListener("tick", this.bindFunction(this.handleEnterFrame));
      this.preTime = Date.now();
      this.isPlaying = true;
    }
    this.clips.set(e, e);
  };
  AnimationManager.prototype.unregister = function (e) {
    if (this.clips.get(e)) {
      this.clips.delete(e);
      var t = 0;
      for (var n = 0, a = Array.from(this.clips.values()); n < a.length; n++) {
        a[n];
        t++;
      }
      if (t <= 0 && this.isPlaying) {
        i.removeEventListener("tick", this.bindFunction(this.handleEnterFrame));
        this.isPlaying = false;
      }
    }
  };
  Object.defineProperty(AnimationManager.prototype, "pause", {
    set: function (e) {
      this._pause = e;
    },
    enumerable: true,
    configurable: true
  });
  AnimationManager.prototype.handleEnterFrame = function (e) {
    this.lastFrameTime = Date.now() - this.preTime;
    if (!e.paused) {
      for (var t = 0, n = Array.from(this.clips.values()); t < n.length; t++) {
        var i = n[t];
        var a = i.asDisplayObject().stage;
        if (a && a.tickEnabled && i.visible && (!this._pause || this._pause && i.playOnPause)) {
          i.updateFrame(this.lastFrameTime);
        }
      }
    }
    this.preTime = Date.now();
  };
  return AnimationManager;
}();
exports.AnimationManager = a;