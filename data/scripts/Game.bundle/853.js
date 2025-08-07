Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./3.js");
var a = require("./228.js");
var s = createjs.Point;
var r = function () {
  function TextDarkTooltip() {}
  Object.defineProperty(TextDarkTooltip, "textDarkTooltip", {
    get: function () {
      if (a.isUndefined(this._textDarkTooltip)) {
        this._textDarkTooltip = new Library.CastleInterfaceElements.TextDark_Tooltip();
      }
      return this._textDarkTooltip;
    },
    enumerable: true,
    configurable: true
  });
  TextDarkTooltip.prototype.showTooltip = function (e, t) {
    this._itxt_text = TextDarkTooltip.textFieldManager.registerTextField(this.disp.txt_text, new o.TextVO(t));
    var i = this._itxt_text.textHeight;
    this.disp.bg.height = i + TextDarkTooltip.TEXT_MARGIN * 2;
    this._itxt_text.y = -(i + TextDarkTooltip.TEXT_MARGIN);
    var n = e.localToGlobal(new s(0, 0));
    this.disp.x = n.x;
    this.disp.y = Math.max(this.disp.bg.height, n.y) - e.height / 2;
    if (this.disp.y - this.disp.bg.height < 0) {
      this.disp.y = n.y + e.height / 2 + this.disp.bg.height;
    }
    this.disp.visible = true;
  };
  TextDarkTooltip.prototype.hideTooltip = function () {
    this.disp.visible = false;
  };
  Object.defineProperty(TextDarkTooltip, "textFieldManager", {
    get: function () {
      return n.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TextDarkTooltip.prototype, "disp", {
    get: function () {
      return TextDarkTooltip.textDarkTooltip;
    },
    enumerable: true,
    configurable: true
  });
  TextDarkTooltip.getInstance = function () {
    this._instance ||= new TextDarkTooltip();
    return this._instance;
  };
  TextDarkTooltip.TEXT_MARGIN = 5;
  return TextDarkTooltip;
}();
exports.TextDarkTooltip = r;