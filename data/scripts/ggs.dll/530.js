Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./2.js");
var a = require("./16.js");
var s = i.getLogger(a.CREATEJS_UTILITIES_LOGGER + ".spritesheets");
createjs.SpriteSheetUtils.extractFrame = function (e, t) {
  var n;
  var i = e._cachedCanvas = e._cachedCanvas || new Map();
  var a = t;
  if (n = i.get(t)) {
    return n;
  }
  if (isNaN(t)) {
    t = e.getAnimation(t).frames[0];
  }
  var s = e.getFrame(t);
  if (!s) {
    return null;
  }
  var r = s.rect;
  (n = document.createElement("canvas")).width = r.width;
  n.height = r.height;
  n.getContext("2d").drawImage(s.image, r.x, r.y, r.width, r.height, 0, 0, r.width, r.height);
  i.set(a, n);
  return n;
};
createjs.SpriteSheet.prototype._parseData = function (e) {
  var t;
  var n;
  var i;
  var a;
  if (e != null) {
    this.framerate = e.framerate || 0;
    if (e.images && (n = e.images.length) > 0) {
      a = this._images = [];
      function r() {
        var n = undefined;
        var i = e.images[t];
        if (typeof i == "string") {
          n = i;
          (i = document.createElement("img")).src = n;
        } else if (i instanceof ArrayBuffer) {
          var r = window.BPGDecoder;
          if (r) {
            var l = document.createElement("canvas");
            var u = l.getContext("2d");
            var c = new r(u);
            var _ = "bpg-" + e.sourceSize.w + "-" + e.sourceSize.h;
            var d = performance.now();
            c._onload({
              response: i
            });
            l.width = c.imageData.width;
            l.height = c.imageData.height;
            u.putImageData(c.imageData, 0, 0);
            var m = performance.now() - d;
            window.bpgTotal = window.bpgTotal || 0;
            window.bpgTotal += m;
            s.info(_, "single " + m + "ms", "total " + window.bpgTotal / 1000 + "s");
            i = l;
          }
        }
        a.push(i);
        if (!i.getContext && !i.naturalWidth) {
          o._loadCount++;
          o.complete = false;
          (function (e, t) {
            i.onload = function () {
              e._handleImageLoad(t);
            };
          })(o, n);
          (function (e, t) {
            i.onerror = function () {
              e._handleImageError(t);
            };
          })(o, n);
        }
      }
      var o = this;
      for (t = 0; t < n; t++) {
        r();
      }
    }
    if (e.frames == null) ;else if (Array.isArray(e.frames)) {
      this._frames = [];
      a = e.frames;
      t = 0;
      n = a.length;
      for (; t < n; t++) {
        var l = a[t];
        this._frames.push({
          image: this._images[l[4] ? l[4] : 0],
          rect: new createjs.Rectangle(l[0], l[1], l[2], l[3]),
          regX: l[5] || 0,
          regY: l[6] || 0
        });
      }
    } else {
      i = e.frames;
      this._frameWidth = i.width;
      this._frameHeight = i.height;
      this._regX = i.regX || 0;
      this._regY = i.regY || 0;
      this._spacing = i.spacing || 0;
      this._margin = i.margin || 0;
      this._numFrames = i.count;
      if (this._loadCount == 0) {
        this._calculateFrames();
      }
    }
    var u;
    this._animations = [];
    if ((i = e.animations) != null) {
      this._data = {};
      for (u in i) {
        var c = {
          name: u
        };
        var _ = i[u];
        if (typeof _ == "number") {
          a = c.frames = [_];
        } else if (Array.isArray(_)) {
          if (_.length == 1) {
            c.frames = [_[0]];
          } else {
            c.speed = _[3];
            c.next = _[2];
            a = c.frames = [];
            t = _[0];
            for (; t <= _[1]; t++) {
              a.push(t);
            }
          }
        } else {
          c.speed = _.speed;
          c.next = _.next;
          var d = _.frames;
          a = c.frames = typeof d == "number" ? [d] : d.slice(0);
        }
        if (c.next === true || c.next === undefined) {
          c.next = u;
        }
        if (c.next === false || a.length < 2 && c.next == u) {
          c.next = null;
        }
        c.speed ||= 1;
        this._animations.push(u);
        this._data[u] = c;
      }
    }
  }
};