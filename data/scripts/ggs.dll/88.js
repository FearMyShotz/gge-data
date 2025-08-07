Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = createjs.ColorFilter;
var a = require("./221.js");
var s = function () {
  function ColorTransform(e = 1, t = 1, n = 1, i = 1, a = 0, s = 0, r = 0, o = 0) {
    this._redMultiplier = e;
    this._greenMultiplier = t;
    this._blueMultiplier = n;
    this._alphaMultiplier = i;
    this._redOffset = a;
    this._greenOffset = s;
    this._blueOffset = r;
    this._alphaOffset = o;
    this._color = "";
    this._color = ColorTransform.rgbToHex(a, s, r, true);
  }
  Object.defineProperty(ColorTransform.prototype, "color", {
    get: function () {
      return this._color;
    },
    set: function (e) {
      e = ColorTransform.colorNumToString(e);
      this._redMultiplier = this._greenMultiplier = this._blueMultiplier = 0;
      var t = ColorTransform.hexToRgb(e);
      this._redOffset = t.r;
      this._greenOffset = t.g;
      this._blueOffset = t.b;
      this.updateColor();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ColorTransform.prototype, "displayObject", {
    get: function () {
      return this._displayObject;
    },
    set: function (e) {
      this._displayObject = e;
    },
    enumerable: true,
    configurable: true
  });
  ColorTransform.ensureBetween = function (e, t, n) {
    return Math.max(e, Math.min(n, t)) | 0;
  };
  ColorTransform.prototype.setChannelOffset = function (e, t) {
    t = ColorTransform.ensureBetween(-255, 255, t);
    var n = this.getMultiplier(e);
    var i = this.getOffset(e);
    var a = ColorTransform.ensureBetween(0, 255, (i | n * 0) + t | 0);
    switch (e) {
      case "red":
        this._redOffset = a;
        break;
      case "green":
        this._greenOffset = a;
        break;
      case "blue":
        this._blueOffset = a;
        break;
      case "alpha":
        this._alphaOffset = a;
    }
  };
  ColorTransform.prototype.getMultiplier = function (e) {
    switch (e) {
      case "red":
        return this.redMultiplier;
      case "green":
        return this.greenMultiplier;
      case "blue":
        return this.blueMultiplier;
      case "alpha":
        return this.alphaMultiplier;
      default:
        throw new Error("No multiplier for \"" + e + "\"");
    }
  };
  ColorTransform.prototype.getOffset = function (e) {
    switch (e) {
      case "red":
        return this.redOffset;
      case "green":
        return this.greenOffset;
      case "blue":
        return this.blueOffset;
      case "alpha":
        return this.alphaOffset;
      default:
        throw new Error("No offset for \"" + e + "\"");
    }
  };
  Object.defineProperty(ColorTransform.prototype, "alphaOffset", {
    get: function () {
      return this._alphaOffset;
    },
    set: function (e) {
      this.setChannelOffset("alpha", e);
      this.updateColor();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ColorTransform.prototype, "blueMultiplier", {
    get: function () {
      return this._blueMultiplier;
    },
    set: function (e) {
      this._blueMultiplier = e;
      this.updateColor();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ColorTransform.prototype, "blueOffset", {
    get: function () {
      return this._blueOffset;
    },
    set: function (e) {
      this.setChannelOffset("blue", e);
      this.updateColor();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ColorTransform.prototype, "greenMultiplier", {
    get: function () {
      return this._greenMultiplier;
    },
    set: function (e) {
      this._greenMultiplier = e;
      this.updateColor();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ColorTransform.prototype, "greenOffset", {
    get: function () {
      return this._greenOffset;
    },
    set: function (e) {
      this.setChannelOffset("green", e);
      this.updateColor();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ColorTransform.prototype, "redMultiplier", {
    get: function () {
      return this._redMultiplier;
    },
    set: function (e) {
      this._redMultiplier = e;
      this.updateColor();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ColorTransform.prototype, "redOffset", {
    get: function () {
      return this._redOffset;
    },
    set: function (e) {
      this.setChannelOffset("red", e);
      this.updateColor();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ColorTransform.prototype, "alphaMultiplier", {
    get: function () {
      return this._alphaMultiplier;
    },
    set: function (e) {
      this._alphaMultiplier = e;
      this.updateColor();
    },
    enumerable: true,
    configurable: true
  });
  ColorTransform.prototype.updateColor = function () {
    this._color = ColorTransform.rgbToHex(this._redOffset, this._greenOffset, this._blueOffset, true);
    if (this._displayObject) {
      this._displayObject.filters = [new i(this._redMultiplier, this._greenMultiplier, this._blueMultiplier, this._alphaMultiplier, this._redOffset, this._greenOffset, this._blueOffset, this._alphaOffset)];
    }
  };
  ColorTransform.rgbToHex = function (e, t, n, i = false) {
    return (i ? "#" : "") + ColorTransform.uint32toHex(((e & 255) << 16) + ((t & 255) << 8) + ((n & 255) << 0));
  };
  ColorTransform.uint32toHex = function (e) {
    return ColorTransform.uint8toHex((e & 16711680) >> 16) + ColorTransform.uint8toHex((e & 65280) >> 8) + ColorTransform.uint8toHex((e & 255) >> 0);
  };
  ColorTransform.hexToRgb = a(function (e) {
    e = e.replace(/[^0-9A-F]/gi, "");
    var t = new ArrayBuffer(4);
    new DataView(t).setUint32(0, parseInt(e, 16), false);
    var n = new Uint8Array(t);
    return {
      r: n[1],
      g: n[2],
      b: n[3]
    };
  });
  ColorTransform.colorNumToString = a(function (e) {
    if (typeof e != "number") {
      return e;
    } else {
      return "#" + ColorTransform.uint32toHex(e);
    }
  });
  ColorTransform.uint8toHex = a(function (e) {
    var t = Number(e & 255).toString(16).toUpperCase();
    if (e < 16) {
      t = "0" + t;
    }
    return t;
  });
  return ColorTransform;
}();
exports.ColorTransform = s;
window.rgbToHex = s.rgbToHex;