Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./495.js");
var a = createjs.Rectangle;
var s = function () {
  function AbstractClipSource() {
    this._framesStrip = new i.FrameStrip();
    this._clipBounds = new a();
  }
  Object.defineProperty(AbstractClipSource.prototype, "cacheId", {
    get: function () {
      return this._cacheId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AbstractClipSource.prototype, "frameStrip", {
    get: function () {
      return this._framesStrip;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AbstractClipSource.prototype, "colorID", {
    get: function () {
      if (this._colorData && this._colorData.length > 0) {
        var e = "";
        for (var t = 0; t < this._colorData.length; t++) {
          e += this._colorData[t].colorID;
        }
        return e;
      }
      return null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AbstractClipSource.prototype, "clipBounds", {
    get: function () {
      return this._clipBounds;
    },
    enumerable: true,
    configurable: true
  });
  AbstractClipSource.prototype.addToClipBounds = function (e) {
    this._clipBounds ||= new a();
    this._clipBounds = this._clipBounds.union(e);
  };
  AbstractClipSource.prototype.destroy = function () {
    if (this._framesStrip) {
      this._framesStrip.destroy();
      this._framesStrip = null;
    }
  };
  return AbstractClipSource;
}();
exports.AbstractClipSource = s;