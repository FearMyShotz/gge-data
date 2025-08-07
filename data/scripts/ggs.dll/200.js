Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = function (e) {
  function RuntimeLoadedFontConfigVO(t) {
    var n = e.call(this) || this;
    n.ggsLanguageCode = t;
    n.debugColor = "0xFF0000";
    return n;
  }
  i.__extends(RuntimeLoadedFontConfigVO, e);
  RuntimeLoadedFontConfigVO.prototype.setTextFormat = function (t) {
    if (isNaN(this.fontSizeMinimum) || this.fontScale == 1) {
      e.prototype.setTextFormat.call(this, t);
    } else if (Number(t.size) < this.fontSizeMinimum) {
      e.prototype.setTextFormat.call(this, t);
    } else {
      t.size = Number(t.size) * this.fontScale;
      if (t.size < this.fontSizeMinimum) {
        t.size = this.fontSizeMinimum;
      }
      e.prototype.setTextFormat.call(this, t);
    }
  };
  RuntimeLoadedFontConfigVO.prototype.toString = function () {
    return "ggsLanguageCode: " + this.ggsLanguageCode + ", " + e.prototype.toString.call(this);
  };
  return RuntimeLoadedFontConfigVO;
}(require("./119.js").FontConfigVO);
exports.RuntimeLoadedFontConfigVO = a;