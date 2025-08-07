Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = function () {
  function FrameStrip() {
    this._frames = [];
  }
  FrameStrip.prototype.addFrame = function (e) {
    this._frames.push(e);
  };
  FrameStrip.prototype.getFrame = function (e) {
    if (e >= 0 && e < this._frames.length) {
      return this._frames[e];
    } else {
      return null;
    }
  };
  FrameStrip.prototype.setFrame = function (e, t) {
    if (e < this._frames.length) {
      this._frames[e] = t;
    }
  };
  Object.defineProperty(FrameStrip.prototype, "frameAmount", {
    get: function () {
      return this._frames.length;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FrameStrip.prototype, "hasMultipleFrames", {
    get: function () {
      return this._frames.length > 1;
    },
    enumerable: true,
    configurable: true
  });
  FrameStrip.prototype.removeLastFrames = function (e) {
    if (this._frames.length >= e) {
      for (var t = 0; t < e; t++) {
        this._frames.pop();
      }
    }
  };
  FrameStrip.prototype.destroy = function () {
    for (var e = 0, t = this._frames; e < t.length; e++) {
      var n = t[e];
      if (n.image instanceof HTMLCanvasElement) {
        n.image.width = n.image.height = 0;
      }
    }
    this._frames = [];
  };
  return FrameStrip;
}();
exports.FrameStrip = i;