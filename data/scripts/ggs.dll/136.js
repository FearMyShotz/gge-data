Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = createjs.Graphics;
var a = createjs.Shape;
var s = createjs.DisplayObject;
exports.GAME_STAGE = "gamestage";
exports.UI_STAGE = "uiStage";
exports.BG_STAGE = "bgStage";
exports.STATIC_STAGE = "staticStage";
exports.TUTORIAL_STAGE = "tutorialStage";
exports.objectsUnderPoint = function objectsUnderPoint(e, n, r, o, l, u, c, _, d) {
  _ = _ || 0;
  d = d || Date.now();
  var m = 1;
  var h = 1;
  if (e.stage) {
    m = 1 / e.stage.scaleX;
    h = 1 / e.stage.scaleY;
  }
  if (!_ && !e._testMask(e, r, o)) {
    return null;
  }
  c = c || u && e._hasMouseEventListener();
  var p = e.children;
  for (var g = p.length - 1; g >= 0; g--) {
    var E = p[g];
    var C = E.hitArea;
    if (E.visible && (!u || E.mouseEnabled) && (C || E.isVisible()) && (C || e._testMask(E, r, o))) {
      if (!C && E instanceof createjs.Container) {
        var f = undefined;
        if (_ > 0) {
          var T = E.getHitTestBounds(d, e.stage);
          if (r >= T.x && r <= T.right && o >= T.y && o <= T.y + T.height) {
            f = E.__getObjectsUnderPoint(r, o, l, u, c, _ + 1, d);
          }
        } else {
          f = E.__getObjectsUnderPoint(r, o, l, u, c, _ + 1, d);
        }
        if (!l && f) {
          if (u && !e.mouseChildren) {
            return e;
          } else {
            return f;
          }
        }
      } else {
        if (u && !c && !E._hasMouseEventListener()) {
          continue;
        }
        if (E.stage && E.stage.name === exports.BG_STAGE) {
          if (u && !e.mouseChildren) {
            return e;
          } else {
            return E;
          }
        }
        var S = E.width / E.scaleX;
        var y = E.height / E.scaleY;
        var I = E.getConcatenatedDisplayProps(E._props);
        var v = I.matrix;
        if (C) {
          v.appendMatrix(C.getMatrix(C._props.matrix));
          I.alpha = C.alpha;
        }
        v.scale(m, h);
        v.tx = v.tx * m;
        v.ty = v.ty * h;
        if (Math.abs(v.b) < 0.01 && Math.abs(v.c) < 0.01) {
          var A = C || E;
          var O = true;
          var L = false;
          if (A instanceof a) {
            for (var D = A.graphics, b = 0; b < D.instructions.length; b++) {
              if (b > 20) {
                O = false;
                break;
              }
              var N = D.instructions[b];
              if (N instanceof i.QuadraticCurveTo || N instanceof i.BezierCurveTo) {
                O = false;
                break;
              }
            }
            if (O && D.bounds) {
              S = D.bounds.width;
              y = D.bounds.height;
            }
          }
          if (O) {
            S *= Math.abs(v.a);
            y *= Math.abs(v.d);
            var R;
            var P;
            var B = E.customCenterHittestArea !== undefined ? E.customCenterHittestArea : s.defaultCenterHittestArea;
            R = Math.abs(v.tx + S * 0.5 * Math.sign(v.a) - r);
            P = Math.abs(v.ty + y * 0.5 * Math.sign(v.d) - o);
            L = R < S * B && P < y * B;
            if (!(R < S * 0.5) || !(P < y * 0.5)) {
              continue;
            }
            if (!window.restrictedInteractiveArea && (E.stage.name === exports.UI_STAGE || L)) {
              if (u && !e.mouseChildren) {
                return e;
              } else {
                return E;
              }
            }
          }
        }
        n.globalAlpha = I.alpha;
        n.setTransform(v.a, v.b, v.c, v.d, v.tx - r, v.ty - o);
        (C || E).draw(n);
        if (!e._testHit(n)) {
          continue;
        }
        n.setTransform(1, 0, 0, 1, 0, 0);
        n.clearRect(0, 0, 2, 2);
        if (!l) {
          if (u && !e.mouseChildren) {
            return e;
          } else {
            return E;
          }
        }
        l.push(E);
      }
    }
  }
  return null;
};