Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./28.js");
var a = require("./141.js");
var s = require("./607.js");
exports.calculateLatestLayoutType = function calculateLatestLayoutType(e, t, n, r, o) {
  var l;
  var u;
  if (t.autoSize === a.TextFieldAutoSize.NONE) {
    l = t.lineWidth || t.width;
    u = t.height;
  } else {
    l = t.wordWrap ? t.width : "textWidth";
    u = 9999;
  }
  var c;
  var _;
  var d;
  var m;
  var h = s.layOutTokens(e, r, n, l, o, t.multiline, t.wordWrap, u, t.firstVisibleLineIndex, t.verticalAlign);
  var p = h.metrics;
  var g = t.wordWrap ? t.width : p.textWithGutterWidth;
  var E = p.textWithGutterHeight;
  if (t.autoSize === a.TextFieldAutoSize.NONE || t.autoSize === undefined || t.wordWrap) {
    d = t.x;
    m = t.y;
    c = t.width;
    _ = t.autoSize === a.TextFieldAutoSize.NONE ? t.height : E;
  } else {
    switch (t.autoSize) {
      case a.TextFieldAutoSize.LEFT:
        d = t.x;
        m = t.y;
        c = g;
        _ = E;
        break;
      case a.TextFieldAutoSize.RIGHT:
        d = t.previousX + t.previousWidth - g;
        m = t.y;
        c = g;
        _ = E;
        break;
      case a.TextFieldAutoSize.CENTER:
        d = t.previousX + t.previousWidth / 2 - g / 2;
        m = t.y;
        c = g;
        _ = E;
        break;
      default:
        throw new Error("unexpect autosize property");
    }
  }
  return i.__assign({}, h, {
    autoSizeBehavior: t.autoSize,
    bounds: new createjs.Rectangle(0, 0, c, _),
    position: {
      x: d,
      y: m
    },
    size: {
      width: c,
      height: _
    }
  });
};