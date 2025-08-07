Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = createjs.Rectangle;
var o = function () {
  function SimpleLayoutStrategyVerticalGrid() {}
  SimpleLayoutStrategyVerticalGrid.prototype.apply = function (e, t) {
    if (e.length == 0) {
      return new n();
    }
    var i = t.left;
    var o = t.top;
    var a = new n();
    a.left = i;
    a.top = o;
    t.width = t.width;
    var s = 0;
    var r = 0;
    for (var l = 0; l < e.length; l++) {
      var c = e[l];
      var u = c.width + c.margin.left + c.margin.right;
      if (s + u > t.width) {
        o += r;
        s = 0;
        r = 0;
      }
      var d = c.disp.getBounds();
      c.disp.x = i + c.margin.left + s - d.left;
      c.disp.y = o + c.margin.top - d.top;
      s += u;
      r = Math.max(r, c.height + c.margin.top + c.margin.bottom);
    }
    a.height = o + r;
    return a;
  };
  return SimpleLayoutStrategyVerticalGrid;
}();
exports.SimpleLayoutStrategyVerticalGrid = o;