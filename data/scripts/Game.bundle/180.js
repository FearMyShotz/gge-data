Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastleTextScrollVO(e, t = null, i = null, n = null, o = null, a = null) {
    this.txt_content = e;
    this.btn_scrollUp = t;
    this.btn_scrollDown = i;
    this.btn_slider = n;
    this.mc_sliderLine = o;
    this.visibilityItems = a;
    if (!this.txt_content) {
      throw new Error("--> Error - CastleTextScrollVO(): There is no Textfield to scroll. (txt_content is null)");
    }
    if (this.btn_slider && !this.mc_sliderLine) {
      throw new Error("--> Error - CastleTextScrollVO(): There is a SliderButton but no SliderLine.");
    }
  }
  Object.defineProperty(CastleTextScrollVO.prototype, "stage", {
    get: function () {
      if (this.txt_content) {
        return this.txt_content.stage;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  return CastleTextScrollVO;
}();
exports.CastleTextScrollVO = n;