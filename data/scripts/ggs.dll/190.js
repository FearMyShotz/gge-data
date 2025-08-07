Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./82.js");
var s = function (e) {
  function AbstractGoodgameClip() {
    var t = e !== null && e.apply(this, arguments) || this;
    t.onLoopEnd = new a.NoneValueSignal();
    t._currentFrame = 1;
    t.expiredAnimationTime = 0;
    t._startFrame = 0;
    t._loops = AbstractGoodgameClip.LOOPS_INFINITE;
    t._paused = false;
    t._playOnPause = false;
    return t;
  }
  i.__extends(AbstractGoodgameClip, e);
  Object.defineProperty(AbstractGoodgameClip.prototype, "currentFrame", {
    get: function () {
      return this._currentFrame;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AbstractGoodgameClip.prototype, "numFrames", {
    get: function () {
      return this._numFrames;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AbstractGoodgameClip.prototype, "targetFps", {
    set: function (e) {
      this._tagetFps = e;
      this.timePerFrame = 1000 / this._tagetFps;
      this.animationLength = this.timePerFrame * this._numFrames;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AbstractGoodgameClip.prototype, "startFrame", {
    get: function () {
      return this._startFrame;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AbstractGoodgameClip.prototype, "endFrame", {
    get: function () {
      return this._endFrame;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AbstractGoodgameClip.prototype, "playedLoops", {
    get: function () {
      return this._playedLoops;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AbstractGoodgameClip.prototype, "paused", {
    get: function () {
      return this._paused;
    },
    enumerable: true,
    configurable: true
  });
  AbstractGoodgameClip.prototype.togglePause = function () {
    this._paused = !this._paused;
  };
  Object.defineProperty(AbstractGoodgameClip.prototype, "playOnPause", {
    get: function () {
      return this._playOnPause;
    },
    set: function (e) {
      this._playOnPause = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AbstractGoodgameClip.prototype, "running", {
    get: function () {
      return this._running;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AbstractGoodgameClip.prototype, "clipSizeComponent", {
    get: function () {
      return this._clipSizeComponent;
    },
    set: function (e) {
      this._clipSizeComponent = e;
    },
    enumerable: true,
    configurable: true
  });
  AbstractGoodgameClip.prototype.play = function () {
    if (this._tagetFps < 1) {
      this.jumpToFrame(1);
    } else {
      this._running = true;
      this._numFrames = this.endFrame - this.startFrame + 1;
      this.animationLength = this.timePerFrame * this._numFrames;
      this.animationManager.register(this);
    }
  };
  AbstractGoodgameClip.prototype.stop = function () {
    this._running = false;
    this.expiredAnimationTime = 0;
    this.animationManager.unregister(this);
  };
  AbstractGoodgameClip.prototype.gotoAndPlay = function (e, t = -1, n = -1) {
    this.stop();
    this._loops = n;
    if (t === -1) {
      t = this.numFrames;
    }
    this.setStartAndEndFrame(e, t);
    if (e !== t) {
      this.play();
    } else {
      this.stop();
    }
  };
  AbstractGoodgameClip.prototype.gotoAndStop = function (e) {
    this.stop();
    this.setStartAndEndFrame(e, e);
    if (e !== this._currentFrame) {
      this.jumpToFrame(e);
    }
  };
  AbstractGoodgameClip.prototype.setStartAndEndFrame = function (e, t) {
    this._startFrame = e;
    this._endFrame = t;
  };
  AbstractGoodgameClip.prototype.updateFrame = function (e) {
    if (!this._paused) {
      this.expiredAnimationTime += e;
      this._playedLoops = Math.floor(this.expiredAnimationTime / this.animationLength);
      var t = Math.max(1, Math.ceil((this.expiredAnimationTime - this.animationLength * this._playedLoops) / this.timePerFrame) + this.startFrame - 1);
      if (this._loops !== AbstractGoodgameClip.LOOPS_INFINITE && this._playedLoops >= this._loops) {
        this.stop();
        this.onLoopEnd.signal();
      } else if (t !== this._currentFrame) {
        this.jumpToFrame(t);
      }
    }
  };
  AbstractGoodgameClip.prototype.jumpToFrame = function (e) {};
  AbstractGoodgameClip.prototype.asDisplayObject = function () {
    return this;
  };
  AbstractGoodgameClip.prototype.dispose = function () {};
  AbstractGoodgameClip.prototype.once = function (e, t, n, i, a) {};
  AbstractGoodgameClip.LOOPS_INFINITE = -1;
  return AbstractGoodgameClip;
}(createjs.Container);
exports.AbstractGoodgameClip = s;