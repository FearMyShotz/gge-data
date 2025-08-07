Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./2.js");
var a = require("./227.js");
var s = require("./16.js");
var r = i.getLogger(s.CREATEJS_UTILITIES_LOGGER + ".Bitmap");
Object.defineProperty(createjs.Bitmap.prototype, "pixelSnapping", {
  value: a.PixelSnapping.AUTO,
  enumerable: true,
  configurable: true,
  writable: true
});
Object.defineProperty(createjs.Bitmap.prototype, "smoothing", {
  value: false,
  enumerable: true,
  configurable: true,
  writable: true
});
Object.defineProperty(createjs.Bitmap.prototype, "bitmapData", {
  get: function () {
    if (!this.$bitmapData) {
      if (!this.cacheCanvas) {
        this.cache(this.x, this.y, this.image.width, this.image.height);
      }
      this.$bitmapData = createjs.BitmapData.getBitmapData(this);
    }
    return this.$bitmapData;
  },
  set: function (e) {
    this.$bitmapData = e;
    this.image = e.canvas;
    this.setBounds(0, 0, this.$bitmapData.width, this.$bitmapData.height);
  },
  enumerable: true,
  configurable: true
});
var o = createjs.Bitmap.prototype;
var l = createjs.Bitmap.prototype.constructor;
var u = createjs.Bitmap.suppressCrossDomainErrors;
createjs.Bitmap = function (e, t = a.PixelSnapping.AUTO, n = false) {
  this.smoothing = n;
  this.pixelSnapping = t;
  if (e && e.canvas) {
    l.call(this, e.canvas, t, n);
  } else {
    l.call(this, e, t, n);
  }
};
createjs.Bitmap.prototype = o;
createjs.Bitmap.suppressCrossDomainErrors = u;
createjs.Bitmap.prototype.draw = function (e, t) {
  if (this.DisplayObject_draw(e, t) || !this.image) {
    return true;
  }
  var n = this.image;
  var i = this.sourceRect;
  if (n instanceof HTMLCanvasElement && (n.width === 0 || n.height === 0)) {
    var a = window.bugsnagClient;
    if (a) {
      r.error("try to draw bitmap whose image is size 0 canvas.");
      a.notify(new Error("Bitmap image is size 0 canvas, ignore drawing..."), {
        severity: "warning"
      });
    }
    return true;
  }
  if (i) {
    var s = i.x;
    var o = i.y;
    var l = s + i.width;
    var u = o + i.height;
    var c = 0;
    var _ = 0;
    var d = n.width;
    var m = n.height;
    if (s < 0) {
      c -= s;
      s = 0;
    }
    if (l > d) {
      l = d;
    }
    if (o < 0) {
      _ -= o;
      o = 0;
    }
    if (u > m) {
      u = m;
    }
    e.drawImage(n, s, o, l - s, u - o, c, _, l - s, u - o);
  } else {
    e.drawImage(n, 0, 0);
  }
  return true;
};