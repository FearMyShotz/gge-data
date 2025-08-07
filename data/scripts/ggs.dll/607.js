Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./28.js");
var a = require("./140.js");
var s = require("./144.js");
var r = require("./240.js");
require("./608.js");
require("./609.js");
var o = true;
var l = new Set([".", ":", ";", ",", "!", "?", ")", "。", "！", "？"]);
var u = require("./242.js");
function lineTextWidth(e) {
  return e.reduce(function (e, t) {
    if (t.type === "plain") {
      return e + t.width;
    } else {
      return e;
    }
  }, 0);
}
exports.layOutTokens = function layOutTokens(e, t, n, c, _, d, m, h, p, g) {
  var E = (n.size || 12) - 1;
  var C = d && n.leading || 0;
  var f = Math.round((E + 1) * 1.2 + C);
  var T = -(Math.max(p, 1) - 1) * f;
  var S = [];
  var y = [S];
  if (c !== "textWidth") {
    c -= s.TEXT_GUTTER_WIDTH;
  }
  h -= s.TEXT_GUTTER_WIDTH * 2;
  var I = 0;
  var v = n;
  var A = [];
  for (var O = 0, L = t; O < L.length; O++) {
    var D = L[O];
    switch (D.type) {
      case "newline":
        S.push({
          type: "plain",
          text: "\n",
          width: 0
        });
        S = [];
        y.push(S);
        I = 0;
        break;
      case "plain":
        r.applyFormat(e, v, _);
        var b = D.text;
        var N = e.measureText(b).width;
        if (m && typeof c == "number" && I + N > c) {
          var R = b.split(/([ \t\n\x0B\f\r-])/);
          R = R.filter(function (e) {
            return e != "";
          });
          if (o) {
            R = R.reduce(function (t, n) {
              if (e.measureText(n).width > c) {
                var i = n.split("").reduce(function (e, t) {
                  if (l.has(t) && e.length > 0) {
                    e[e.length - 1] += t;
                  } else {
                    e.push(t);
                  }
                  return e;
                }, []);
                t.push.apply(t, i);
              } else {
                t.push(n);
              }
              return t;
            }, []);
          }
          for (var P = 0, B = R; P < B.length; P++) {
            var M = B[P];
            var F = e.measureText(M).width;
            if (I + F > c && M != " ") {
              S = [];
              y.push(S);
              I = 0;
            }
            var U = {
              type: "plain",
              text: M,
              width: F
            };
            S.push(U);
            I += U.width;
          }
        } else {
          S.push({
            type: "plain",
            text: b,
            width: N
          });
          I += N;
        }
        break;
      case "push-format-augmentation":
        A = A.concat([v]);
        v = i.__assign({}, v, D.partialFormat);
        S.push({
          type: "switch-to-format",
          format: v
        });
        break;
      case "pop-last-format-augmentation":
        v = A[A.length - 1];
        A = A.slice(0, A.length - 1);
        S.push({
          type: "switch-to-format",
          format: v
        });
        break;
      default:
        S.push(D);
    }
  }
  var G = Math.max.apply(Math, y.map(lineTextWidth));
  var w = (c = typeof c == "number" ? c : G) + s.TEXT_GUTTER_WIDTH * 2;
  var k = y.map(function (e, t) {
    var n;
    if (v.align === a.TextFormatAlign.CENTER) {
      var i = lineTextWidth(e);
      n = (w - i) / 2;
    } else if (v.align === a.TextFormatAlign.RIGHT) {
      i = lineTextWidth(e);
      n = w - i - s.TEXT_GUTTER_WIDTH;
    } else {
      n = s.TEXT_GUTTER_WIDTH;
    }
    var r = e.slice();
    r.unshift({
      type: "set-x-y",
      x: n,
      y: T + t * f + s.TEXT_GUTTER_WIDTH
    });
    return r;
  });
  var x = k.map(function (e) {
    return e.map(function (e) {
      if (e.type === "plain") {
        return e.text;
      } else {
        return "";
      }
    }).join("");
  });
  var W = Math.max.apply(Math, k.map(function (e) {
    return e.reduce(function (e, t) {
      if (t.type === "plain") {
        return e + t.width;
      } else if (t.type === "advance-x") {
        return e + t.amount;
      } else if (t.type === "set-x-y") {
        return t.x;
      } else {
        return e;
      }
    }, 0);
  }));
  var V = Math.ceil(G);
  var H = Math.ceil(x.length * f);
  var j = {
    textWidth: V,
    textHeight: H,
    totalNumberOfTextLines: x.length,
    maximumNumberOfVisibleLines: h / f,
    drawnLines: x,
    lineHeight: f,
    distanceToBaseline: E,
    leading: C,
    widthUntilEndOfText: W,
    textWithGutterWidth: V + s.TEXT_GUTTER_WIDTH * 2,
    textWithGutterHeight: H + s.TEXT_GUTTER_WIDTH * 2
  };
  return {
    drawingTokens: u(k).reduce(function (e, t) {
      var n = e[e.length - 1];
      if (n && n.type === "plain" && t.type === "plain") {
        e[e.length - 1] = {
          type: "plain",
          text: n.text + t.text,
          width: n.width + t.width
        };
      } else {
        e.push(t);
      }
      return e;
    }, []).map(function () {
      if (g === "middle") {
        var e = h - H;
        if (e > 0) {
          return function (t) {
            switch (t.type) {
              case "set-x-y":
                return i.__assign({}, t, {
                  y: t.y + e / 2
                });
              default:
                return t;
            }
          };
        }
      } else if (g === "bottom") {
        var t = h - H;
        if (t > 0) {
          return function (e) {
            switch (e.type) {
              case "set-x-y":
                return i.__assign({}, e, {
                  y: e.y + t
                });
              default:
                return e;
            }
          };
        }
      }
      return function (e) {
        return e;
      };
    }()).map(function (e) {
      switch (e.type) {
        case "advance-x":
          return i.__assign({}, e, {
            amount: Math.round(e.amount)
          });
        case "set-x-y":
          return i.__assign({}, e, {
            x: Math.round(e.x),
            y: Math.round(e.y)
          });
        case "plain":
          return i.__assign({}, e, {
            width: Math.round(e.width)
          });
      }
      return e;
    }),
    metrics: j
  };
};