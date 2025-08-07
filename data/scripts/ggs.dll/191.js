Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = createjs.Bitmap;
var a = createjs.Rectangle;
var s = createjs.MovieClip;
var r = function () {
  function ClipSourceOptimizer() {}
  ClipSourceOptimizer.findFlattenedImageInfo = function (e, t) {
    return {
      maxWidth: Math.max(e.maxWidth, t.width),
      maxHeight: Math.max(e.maxHeight, t.height),
      totalWidth: e.totalWidth + Math.ceil(t.width) + 1
    };
  };
  ClipSourceOptimizer.flattenedImagesToBitmaps = function (e, t = 1) {
    if (e.length === 0) {
      return [];
    }
    var n;
    var s = [];
    if (e.length === 1) {
      var r = e[0];
      (n = new i(r.canvas)).sourceRect = new a(0, 0, n.width, n.height);
      n.x = -r.registrationPointX;
      n.y = -r.registrationPointY;
      s.push(n);
    } else {
      var o = Math.ceil(e.length / t);
      var l = [];
      for (; e.length > 0;) {
        l.push(e.splice(0, o));
      }
      l.forEach(function (e) {
        var t = e.reduce(ClipSourceOptimizer.findFlattenedImageInfo, {
          maxWidth: 0,
          maxHeight: 0,
          totalWidth: 0
        });
        t.maxWidth;
        var r = t.maxHeight;
        var o = t.totalWidth;
        var l = document.createElement("canvas");
        l.height = Math.ceil(r) + 1;
        l.width = o;
        var u = l.getContext("2d");
        var c = 0;
        e.forEach(function (e) {
          u.drawImage(e.canvas, 0, 0, e.width, e.height, c, 0, e.width, e.height);
          (n = new i(l)).sourceRect = new a(c, 0, e.width, e.height);
          n.x = -e.registrationPointX;
          n.y = -e.registrationPointY;
          s.push(n);
          c += Math.ceil(e.width) + 1;
          e.dispose();
        });
      });
    }
    return s;
  };
  ClipSourceOptimizer.maxSublayerMCFramesReducer = function (e, t) {
    if (t instanceof s) {
      if (e >= t.totalFrames) {
        return e;
      } else {
        return t.totalFrames;
      }
    } else {
      return e;
    }
  };
  ClipSourceOptimizer.ClipMCToBitmaps = function (e, t, n) {
    var a;
    var r = [];
    if (t.hasSubLayer) {
      var o = e.subLayerMaxFrame || 0;
      var l = undefined;
      if (!o) {
        e.subLayerMaxFrame = o = e.children.reduce(ClipSourceOptimizer.maxSublayerMCFramesReducer, o);
      }
      for (var u = 1; u < o + 1; u++) {
        for (var c = 0; c < e.children.length; c++) {
          if ((l = e.children[c]) instanceof s) {
            l.gotoAndStop(u);
          }
        }
        r.push(n.call(t, e));
      }
    } else {
      a = [];
      if (e.totalFrames === 1 && e.children.length === 1) {
        var _ = e.children[0];
        if (_ instanceof i) {
          a.push(_.clone());
          return a;
        }
        if (_ instanceof s && _.totalFrames === 1 && _.children.length === 1 && _.children[0] instanceof i && !_.filters && !_.mask && _.scaleX === 1 && _.scaleY === 1 && !_.skewX && !_.skewY && !_.rotation) {
          var d = _.children[0].clone();
          d.x += _.x;
          d.y += _.y;
          a.push(d);
          return a;
        }
      }
      var m = true;
      for (var h = 1; h < e.totalFrames + 1; h++) {
        e.gotoAndStop(h);
        if (m && e.children.length === 1 && e.children[0] instanceof i) {
          a.push(e.children[0].clone());
        } else {
          m = false;
        }
        r.push(n.call(t, e));
      }
      if (m) {
        r.forEach(function (e) {
          return e.dispose();
        });
        e.uncache();
        return a;
      }
    }
    e.uncache();
    return ClipSourceOptimizer.flattenedImagesToBitmaps(r);
  };
  return ClipSourceOptimizer;
}();
exports.ClipSourceOptimizer = r;