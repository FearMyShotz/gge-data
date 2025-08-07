Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./119.js");
var a = require("./200.js");
var s = function () {
  function FontConfigUtil() {}
  FontConfigUtil.getDeepCopy = function (e) {
    var t = FontConfigUtil.createFontConfigVO(e);
    t.fontName = e.fontName;
    t.yOffset = e.yOffset;
    t.fontStyle = e.fontStyle;
    t.fontScale = e.fontScale;
    t.fontSizeMinimum = e.fontSizeMinimum;
    return t;
  };
  FontConfigUtil.createFontConfigVO = function (e) {
    if (e instanceof a.RuntimeLoadedFontConfigVO) {
      return new a.RuntimeLoadedFontConfigVO(e.ggsLanguageCode);
    } else {
      return new i.FontConfigVO();
    }
  };
  return FontConfigUtil;
}();
exports.FontConfigUtil = s;