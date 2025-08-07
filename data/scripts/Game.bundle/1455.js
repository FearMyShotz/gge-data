Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./3.js");
var a = require("./3.js");
var s = function (e) {
  function ColoredHTMLTextReplacementVO(t, i) {
    var n = e.call(this) || this;
    var o = t.compose();
    n.addLocalizedTextVO(new a.LocalizedTextVO("[color=" + i + "]" + o + "[/color]"));
    return n;
  }
  n.__extends(ColoredHTMLTextReplacementVO, e);
  ColoredHTMLTextReplacementVO.prototype.compose = function () {
    var t = new RegExp(/<.?p>/g);
    return e.prototype.compose.call(this).replace(t, "");
  };
  return ColoredHTMLTextReplacementVO;
}(o.HTMLTextCustomVO);
exports.ColoredHTMLTextReplacementVO = s;