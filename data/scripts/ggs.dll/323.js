Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./80.js");
var a = function () {
  function InlineDurationFormat() {}
  InlineDurationFormat.prototype.parse = function (e) {
    if (e && e.length !== 0) {
      var t = e.match(InlineDurationFormat.REGEXP_FORMAT);
      if (t == null) {
        throw new Error("format:" + e);
      }
      this._fill = t[InlineDurationFormat.REGEXP_FORMAT_GROUP_FILL] || t[InlineDurationFormat.REGEXP_FORMAT_GROUP_ZERO] || "";
      this._align = t[InlineDurationFormat.REGEXP_FORMAT_GROUP_ALIGN];
      this._sign = t[InlineDurationFormat.REGEXP_FORMAT_GROUP_SIGN];
      this._precision = t[InlineDurationFormat.REGEXP_FORMAT_GROUP_PRECISION];
      this._width = t[InlineDurationFormat.REGEXP_FORMAT_GROUP_WIDTH];
      this._type = t[InlineDurationFormat.REGEXP_FORMAT_GROUP_TYPE] || (this._precision ? InlineDurationFormat.TYPE_FLOAT[0] : InlineDurationFormat.TYPE_DECIMAL[0]);
    } else {
      this._fill = undefined;
      this._align = undefined;
      this._sign = undefined;
      this._precision = undefined;
      this._width = undefined;
      this._type = InlineDurationFormat.TYPE_DECIMAL[0];
    }
    return this;
  };
  InlineDurationFormat.prototype.apply = function (e, t, n) {
    var a = t[n];
    var s = String(a);
    var r = i.TimeType.values;
    if (InlineDurationFormat.TYPE_FLOAT.indexOf(this._type) !== -1) {
      if (this._precision && n !== 0) {
        var o = r[n].milliseconds / r[n - 1].milliseconds;
        s = (a + t[n - 1] / o).toFixed(parseFloat(this._precision));
      }
      var l = s.match(InlineDurationFormat.REGEXP_NUMBER);
      var u = l[InlineDurationFormat.REGEXP_NUMBER_GROUP_INTEGER];
      var c = l[InlineDurationFormat.REGEXP_NUMBER_GROUP_FRACTION];
      s = u + (c.length ? e("generic_comma") + c : "");
    }
    if (this._width) {
      for (var _ = Number(this._width) - s.length; _-- > 0;) {
        s = this._fill + s;
      }
    }
    return s;
  };
  Object.defineProperty(InlineDurationFormat.prototype, "width", {
    get: function () {
      return this._width;
    },
    set: function (e) {
      this._width = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InlineDurationFormat.prototype, "fill", {
    get: function () {
      return this._fill;
    },
    set: function (e) {
      this._fill = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InlineDurationFormat.prototype, "precision", {
    get: function () {
      return this._precision;
    },
    set: function (e) {
      this._precision = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InlineDurationFormat.prototype, "type", {
    get: function () {
      return this._type;
    },
    enumerable: true,
    configurable: true
  });
  InlineDurationFormat.REGEXP_FORMAT = /(?:(.)?(<|>|=|^){1})?(\+|-)?(0)?(\d+)?(?:\.(\d+))?(b|c|d|e|E|f|F|g|G|n|o|x|X|%)?/;
  InlineDurationFormat.REGEXP_FORMAT_GROUP_FILL = 1;
  InlineDurationFormat.REGEXP_FORMAT_GROUP_ALIGN = 2;
  InlineDurationFormat.REGEXP_FORMAT_GROUP_SIGN = 3;
  InlineDurationFormat.REGEXP_FORMAT_GROUP_ZERO = 4;
  InlineDurationFormat.REGEXP_FORMAT_GROUP_WIDTH = 5;
  InlineDurationFormat.REGEXP_FORMAT_GROUP_PRECISION = 6;
  InlineDurationFormat.REGEXP_FORMAT_GROUP_TYPE = 7;
  InlineDurationFormat.REGEXP_NUMBER = /(\d+)(?:\.(\d+))?/;
  InlineDurationFormat.REGEXP_NUMBER_GROUP_INTEGER = 1;
  InlineDurationFormat.REGEXP_NUMBER_GROUP_FRACTION = 2;
  InlineDurationFormat.TYPE_DECIMAL = ["d"];
  InlineDurationFormat.TYPE_FLOAT = ["f", "F"];
  return InlineDurationFormat;
}();
exports.InlineDurationFormat = a;