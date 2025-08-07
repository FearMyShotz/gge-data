Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = createjs.Rectangle;
var a = function () {
  function SimpleLayoutStrategyVertical(e = SimpleLayoutStrategyVertical.ALIGNMENT_TOP) {
    this._alignment = 0;
    this._alignment = e;
  }
  SimpleLayoutStrategyVertical.prototype.apply = function (e, t) {
    if (e.length == 0) {
      return new o();
    }
    var i = this.calculateTotalHeight(e);
    var n = 0;
    switch (this._alignment) {
      case SimpleLayoutStrategyVertical.ALIGNMENT_TOP:
        n = t.y;
        break;
      case SimpleLayoutStrategyVertical.ALIGNMENT_BOTTOM:
        n = t.y + t.height - i;
        break;
      case SimpleLayoutStrategyVertical.ALIGNMENT_CENTER:
        n = t.y + (t.height - i) / 2;
        break;
      default:
        n = t.y;
    }
    var a = new o();
    a.top = n;
    if (e != null) {
      var s = 0;
      for (var r = 0, l = e; r < l.length; r++) {
        var c = l[r];
        if (c !== undefined && c && c.isLayoutEnabled) {
          c.disp.y = n + c.margin.top;
          n = s + 1 == e.length ? c.disp.y + c.height : c.disp.y + c.height + c.margin.bottom;
          s++;
        }
      }
    }
    a.bottom = n - a.y;
    return a;
  };
  SimpleLayoutStrategyVertical.prototype.calculateTotalHeight = function (e) {
    var t = 0;
    if (e != null) {
      for (var i = 0, n = e; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && o && o.isLayoutEnabled) {
          t += o.height + o.margin.top + o.margin.bottom;
        }
      }
    }
    return t;
  };
  Object.defineProperty(SimpleLayoutStrategyVertical.prototype, "alignment", {
    get: function () {
      return this._alignment;
    },
    set: function (e) {
      this._alignment = e;
    },
    enumerable: true,
    configurable: true
  });
  SimpleLayoutStrategyVertical.__initialize_static_members = function () {
    SimpleLayoutStrategyVertical.ALIGNMENT_TOP = 0;
    SimpleLayoutStrategyVertical.ALIGNMENT_CENTER = 1;
    SimpleLayoutStrategyVertical.ALIGNMENT_BOTTOM = 2;
  };
  return SimpleLayoutStrategyVertical;
}();
exports.SimpleLayoutStrategyVertical = a;
n.classImplementsInterfaces(a, "ISimpleLayoutStrategy");
a.__initialize_static_members();