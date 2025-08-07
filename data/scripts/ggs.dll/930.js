Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./20.js");
var a = function () {
  function ClipSizeComponent(e, t, n = -1, a = -1) {
    this._clipSizeChanged = new i.Signal();
    this._maxWidth = e;
    this._maxHeight = t;
    this._maxScale = n;
    this._minScale = a;
  }
  Object.defineProperty(ClipSizeComponent.prototype, "offsetX", {
    get: function () {
      return this._offsetX;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ClipSizeComponent.prototype, "offsetY", {
    get: function () {
      return this._offsetY;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ClipSizeComponent.prototype, "clipSizeChanged", {
    get: function () {
      return this._clipSizeChanged;
    },
    enumerable: true,
    configurable: true
  });
  ClipSizeComponent.prototype.setImageSize = function (e, t) {
    this._scaleFactor = this.getScaleFactor(t, e);
    if (this._maxScale != -1) {
      this._scaleFactor = Math.min(this._maxScale, this._scaleFactor);
    }
    if (this._minScale != -1) {
      this._scaleFactor = Math.max(this._minScale, this._scaleFactor);
    }
    this._offsetX = -(t.width * this._scaleFactor / 2 + t.left * this._scaleFactor);
    this._offsetY = -(t.height * this._scaleFactor / 2 + t.top * this._scaleFactor);
    e.scaleX = e.scaleY = this._scaleFactor;
  };
  ClipSizeComponent.prototype.getScaleFactor = function (e, t) {
    var n = e.width != 0 ? e.width : t.width;
    var i = e.height != 0 ? e.height : t.height;
    var a = this._maxWidth / n;
    if (i * a > this._maxHeight) {
      a = this._maxHeight / i;
    }
    return a;
  };
  ClipSizeComponent.prototype.destroy = function () {
    this._clipSizeChanged.removeAll();
  };
  return ClipSizeComponent;
}();
exports.ClipSizeComponent = a;