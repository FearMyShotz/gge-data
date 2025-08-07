Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function WallAppearanceItem(e, t) {
    this._disp = e;
    this._nodePositions = t;
  }
  WallAppearanceItem.prototype.updateVisibility = function (e) {
    if (this._nodePositions != null) {
      for (var t = 0, i = this._nodePositions; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && e != null) {
          for (var o = 0, a = e; o < a.length; o++) {
            var s = a[o];
            if (s !== undefined && s.pos == n && s.isDefeated) {
              this._disp.visible = false;
              return;
            }
          }
        }
      }
    }
    this._disp.visible = true;
  };
  return WallAppearanceItem;
}();
exports.WallAppearanceItem = n;