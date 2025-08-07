Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = createjs.Point;
var o = function () {
  function WodPicHelperUnitFramePerfectCallbackWrapper() {}
  WodPicHelperUnitFramePerfectCallbackWrapper.callback4SmallPic = function (e, t, i) {
    return WodPicHelperUnitFramePerfectCallbackWrapper.callback(e, t, i, false, true, 3);
  };
  WodPicHelperUnitFramePerfectCallbackWrapper.callback = function (e, t, i, o = false, r = false, l = 0, c = false) {
    if (e) {
      return function (u) {
        if (a.instanceOfClass(u, "CastleGoodgameExternalClip") && (a.instanceOfClass(e, "SoldierUnitVO") || a.instanceOfClass(e, "UnknownUnitVO") && e.type != "Tools")) {
          var d = u;
          var p = u.parent.getChildAt(1);
          if (c) {
            var h = new n(d.width, d.height);
            var g = d.getBounds(d);
            var C = h.subtract(g.topLeft.add(h));
            var _ = d.scaleX;
            d.scaleX = d.scaleY = Math.min(1, Math.min(d._cacheScale, d.height / C.y));
            var m = d.scaleX / _;
            s.CastleMovieClipHelper.scaleWithAntiAliasing(d, t * m, i * m);
            if (p) {
              s.CastleMovieClipHelper.scaleWithAntiAliasing(p, p.width * m, p.height * m);
            }
          }
          if (d) {
            if (o) {
              var f = d.x - (t - d.width) / 2;
              d.x = -(t - d.width) / 2;
              if (p) {
                p.x = -f;
              }
            } else {
              if (p) {
                p.x = -d.x;
              }
              d.x = 0;
            }
            if (r) {
              var O = d.getBounds();
              var E = d.y - Math.round(O.bottom * d.scaleY);
              d.y = -Math.round(O.bottom * d.scaleY);
              if (p) {
                p.y = -E;
              }
            } else {
              if (p) {
                p.y = -d.y;
              }
              d.y = 0;
            }
          }
        } else if (a.instanceOfClass(u, "DisplayObject")) {
          u.x = -Math.round(t / 2) + l;
          u.y = -Math.round(i / 2) + l;
        }
      };
    } else {
      return null;
    }
  };
  return WodPicHelperUnitFramePerfectCallbackWrapper;
}();
exports.WodPicHelperUnitFramePerfectCallbackWrapper = o;
var a = require("./1.js");
var s = require("./41.js");