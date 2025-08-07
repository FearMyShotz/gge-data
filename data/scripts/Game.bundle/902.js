Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = createjs.Rectangle;
var a = function () {
  function SimpleLayoutStrategyHorizontal(e = SimpleLayoutStrategyHorizontal.ALIGNMENT_LEFT) {
    this._alignment = 0;
    this._alignment = e;
  }
  SimpleLayoutStrategyHorizontal.prototype.apply = function (e, t) {
    if (e.length == 0) {
      return new o();
    }
    var i = this.calculateTotalWidth(e);
    var n = 0;
    switch (this._alignment) {
      case SimpleLayoutStrategyHorizontal.ALIGNMENT_LEFT:
        n = t.x;
        break;
      case SimpleLayoutStrategyHorizontal.ALIGNMENT_RIGHT:
        n = t.x + t.width - i;
        break;
      case SimpleLayoutStrategyHorizontal.ALIGNMENT_CENTER:
        n = t.x + (t.width - i) / 2;
        break;
      default:
        n = t.x;
    }
    var a = new o();
    a.left = n;
    if (e != null) {
      for (var s = 0, r = e; s < r.length; s++) {
        var l = r[s];
        if (l !== undefined && l && l.isLayoutEnabled) {
          if (this._alignment == SimpleLayoutStrategyHorizontal.ALIGNMENT_CENTER) {
            l.disp.x = n - l.disp.getBounds().x + l.margin.left;
            n = l.disp.x + l.disp.getBounds().x + l.width + l.margin.right;
          } else {
            l.disp.x = n + l.margin.left;
            n = l.disp.x + l.width + l.margin.right;
          }
        }
      }
    }
    a.right = n - a.x;
    return a;
  };
  SimpleLayoutStrategyHorizontal.prototype.calculateTotalWidth = function (e) {
    var t = 0;
    if (e != null) {
      for (var i = 0, n = e; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && o && o.isLayoutEnabled) {
          t += o.width + o.margin.left + o.margin.right;
        }
      }
    }
    return t;
  };
  Object.defineProperty(SimpleLayoutStrategyHorizontal.prototype, "alignment", {
    get: function () {
      return this._alignment;
    },
    set: function (e) {
      this._alignment = e;
    },
    enumerable: true,
    configurable: true
  });
  SimpleLayoutStrategyHorizontal.__initialize_static_members = function () {
    SimpleLayoutStrategyHorizontal.ALIGNMENT_LEFT = 0;
    SimpleLayoutStrategyHorizontal.ALIGNMENT_CENTER = 1;
    SimpleLayoutStrategyHorizontal.ALIGNMENT_RIGHT = 2;
  };
  return SimpleLayoutStrategyHorizontal;
}();
exports.SimpleLayoutStrategyHorizontal = a;
n.classImplementsInterfaces(a, "ISimpleLayoutStrategy");
a.__initialize_static_members();