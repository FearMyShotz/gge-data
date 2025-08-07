Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastleChatVO(e, t = null, i = null, n = null, a = null, s = null, r = null, l = null, c = null) {
    this.txt_chat = e;
    this.txt_chat.textColor = o.ClientConstColor.FONT_DEFAULT_COLOR;
    this.txt_inputField = t;
    this.btn_submit = i;
    this.mc_inputBlocker = n;
    this.btn_scrollUp = a;
    this.btn_scrollDown = s;
    this.btn_slider = r;
    this.mc_sliderLine = l;
    this.visibilityItems = c;
    if (!this.txt_chat) {
      throw new Error("--> Error - CastleTextScrollVO(): There is no chatTextfield. (txt_chat is null)");
    }
    if (this.btn_slider && !this.mc_sliderLine) {
      throw new Error("--> Error - CastleTextScrollVO(): There is a SliderButton but no SliderLine.");
    }
  }
  CastleChatVO.prototype.getScrollVO = function () {
    return new a.CastleTextScrollVO(this.txt_chat, this.btn_scrollUp, this.btn_scrollDown, this.btn_slider, this.mc_sliderLine, this.visibilityItems);
  };
  Object.defineProperty(CastleChatVO.prototype, "stage", {
    get: function () {
      if (this.txt_chat) {
        return this.txt_chat.stage;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  return CastleChatVO;
}();
exports.CastleChatVO = n;
var o = require("./16.js");
var a = require("./180.js");