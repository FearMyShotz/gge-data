Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = createjs.ColorTransform;
var a = createjs.ColorFilter;
var s = createjs.MovieClip;
var r = function () {
  function ClipColor(e, t, n = "c") {
    this._colorChangeLayerName = e;
    this._colors = t;
    this._singleColorPrefix = n;
    this.initColorID();
  }
  Object.defineProperty(ClipColor.prototype, "colors", {
    get: function () {
      return this._colors;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ClipColor.prototype, "colorID", {
    get: function () {
      return this._colorID;
    },
    enumerable: true,
    configurable: true
  });
  ClipColor.prototype.initColorID = function () {
    this._colorID = null;
    if (this._colors && this._colors.length > 0) {
      this._colorID = "";
      for (var e = 0; e < this._colors.length; e++) {
        this._colorID += String(this._colors[e]);
      }
    }
  };
  ClipColor.prototype.colorClip = function (e) {
    var t;
    this.colorLayer(e);
    var n = 0;
    do {
      t = e[this._colorChangeLayerName + n];
      n++;
      this.colorLayer(t);
    } while (t);
  };
  ClipColor.prototype.colorLayer = function (e) {
    if (e) {
      for (var t = 0; t < this.colors.length; t++) {
        var n = e[this._singleColorPrefix + String(t + 1)];
        ClipColor.ct.color = this.colors[t];
        if (!n) {
          break;
        }
        var i = ClipColor.ct;
        if (n instanceof s && n.children.length === 0) {
          n.gotoAndStop(1);
        }
        if (isNaN(this.filterCache)) {
          n.useFilters([new a(i.redMultiplier, i.greenMultiplier, i.blueMultiplier, i.alphaMultiplier, i.redOffset, i.greenOffset, i.blueOffset, i.alphaOffset)]);
        } else {
          n.useFilters([new a(i.redMultiplier, i.greenMultiplier, i.blueMultiplier, i.alphaMultiplier, i.redOffset, i.greenOffset, i.blueOffset, i.alphaOffset)], false, this.filterCache);
        }
      }
    }
  };
  Object.defineProperty(ClipColor.prototype, "filterCache", {
    get: function () {
      if (this._filterCache) {
        return this._filterCache;
      } else {
        return NaN;
      }
    },
    set: function (e) {
      this._filterCache = e;
    },
    enumerable: true,
    configurable: true
  });
  ClipColor.ct = new i();
  return ClipColor;
}();
exports.ClipColor = r;