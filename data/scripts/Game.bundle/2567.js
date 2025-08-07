Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./16.js");
var d = require("./31.js");
var p = require("./19.js");
var h = require("./8.js");
var g = function (e) {
  function CastleMinuteSkipScrollItem(t) {
    return e.call(this, t) || this;
  }
  n.__extends(CastleMinuteSkipScrollItem, e);
  CastleMinuteSkipScrollItem.prototype.customFillItem = function () {
    var t;
    e.prototype.customFillItem.call(this);
    C.CollectableRenderHelper.displaySingleItem(new d.CollectableRenderClips(this.disp.mc_item), this.minuteSkipVO, new p.CollectableRenderOptions(p.CollectableRenderOptions.SET_ICON));
    var i = 0;
    if (this.minuteSkipVO.xmlCurrencyVO.minutesSkipValue > 5 && this.minuteSkipVO.amount > 30) {
      t = new c.LocalizedTextVO(o.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [this.minuteSkipVO.amount, this.minuteSkipVO.xmlCurrencyVO.softCap]);
      i = this.minuteSkipVO.amount >= this.minuteSkipVO.xmlCurrencyVO.softCap ? u.ClientConstColor.GENERIC_RED : u.ClientConstColor.FONT_DEFAULT_COLOR;
    } else {
      t = new l.LocalizedNumberVO(this.minuteSkipVO.amount);
      i = u.ClientConstColor.FONT_DEFAULT_COLOR;
    }
    if (this.minuteSkipVO.amount > 0) {
      this.disp.btn_skip.toolTipText = "dialog_timeSkip_timeSkipButton_tooltip";
      if (!h.ButtonHelper.isEnablingDelayed(this.disp.btn_skip)) {
        h.ButtonHelper.enableButton(this.disp.btn_skip, true);
      }
    } else {
      this.disp.btn_skip.toolTipText = "dialog_timeSkip_timeSkipButton_disabled_tooltip";
      h.ButtonHelper.delayEnableButton(this.disp.btn_skip, false);
    }
    this.itxt_amount = a.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.txt_amount, t);
    this.itxt_amount.color = i;
    this.itxt_amount.autoFitToBounds = true;
  };
  Object.defineProperty(CastleMinuteSkipScrollItem.prototype, "minuteSkipVO", {
    get: function () {
      return this.scrollItemVO.minuteSkipVO;
    },
    enumerable: true,
    configurable: true
  });
  return CastleMinuteSkipScrollItem;
}(s.ScrollItem);
exports.CastleMinuteSkipScrollItem = g;
var C = require("./25.js");
r.classImplementsInterfaces(g, "MovieClip");