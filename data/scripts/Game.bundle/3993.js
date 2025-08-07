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
var u = require("./3994.js");
var d = require("./21.js");
var p = require("./31.js");
var h = require("./19.js");
var g = require("./4.js");
var C = require("./8.js");
var _ = function (e) {
  function AllianceGiftScrollItem(t) {
    return e.call(this, t) || this;
  }
  n.__extends(AllianceGiftScrollItem, e);
  AllianceGiftScrollItem.prototype.customFillItem = function () {
    e.prototype.customFillItem.call(this);
    this.setTexts();
    this.setGiftIcon();
    this.updateCollectButton();
  };
  AllianceGiftScrollItem.prototype.setTexts = function () {
    this.remainingTime = o.GoodgameTextFieldManager.getInstance().registerTextField(this._disp.txt_remainingTime, new c.TextVO(this.remainingSecondsText));
    o.GoodgameTextFieldManager.getInstance().registerTextField(this._disp.btn_collect.txt_label, new l.LocalizedTextVO("dialog_allianceGift_collect"));
    this._disp.mc_giftTimerTooltip.toolTipText = "resttime";
  };
  Object.defineProperty(AllianceGiftScrollItem.prototype, "remainingSecondsText", {
    get: function () {
      return s.TimeStringHelper.getHoureMinuteSecondTimeString(this.giftVO.remainingTimeInSeconds);
    },
    enumerable: true,
    configurable: true
  });
  AllianceGiftScrollItem.prototype.setGiftIcon = function () {
    if (this._giftIcon) {
      this._giftIcon.destroy();
    }
    this._giftIcon = m.CollectableRenderHelper.displaySingleItem(new p.CollectableRenderClips(this._disp.mc_item), this.giftVO.reward, new h.CollectableRenderOptions(h.CollectableRenderOptions.SET_ICON));
  };
  AllianceGiftScrollItem.prototype.onMouseClick = function (t) {
    e.prototype.onMouseClick.call(this, t);
    if (C.ButtonHelper.isButtonEnabled(t.target) && t.target == this._disp.btn_collect) {
      this.giftVO.collectInProgress = true;
      this.updateCollectButton();
      g.CastleModel.smartfoxClient.sendCommandVO(new u.C2SAllianceGiftCollect(this.giftVO.id));
    }
  };
  AllianceGiftScrollItem.prototype.updateCollectButton = function () {
    C.ButtonHelper.enableButton(this._disp.btn_collect, !this.giftVO.collectInProgress);
  };
  AllianceGiftScrollItem.prototype.show = function () {
    e.prototype.show.call(this);
    this._giftIcon.update();
    g.CastleModel.timerData.addEventListener(d.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  AllianceGiftScrollItem.prototype.onTimerUpdate = function (e) {
    if (this.remainingTime && this.remainingTime.textContentVO) {
      this.remainingTime.textContentVO.stringValue = this.remainingSecondsText;
    } else {
      g.CastleModel.timerData.removeEventListener(d.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    }
  };
  AllianceGiftScrollItem.prototype.hide = function () {
    e.prototype.hide.call(this);
    if (this._giftIcon) {
      this._giftIcon.destroy();
    }
    g.CastleModel.timerData.removeEventListener(d.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  AllianceGiftScrollItem.prototype.reset = function () {
    e.prototype.reset.call(this);
    g.CastleModel.timerData.removeEventListener(d.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  Object.defineProperty(AllianceGiftScrollItem.prototype, "giftVO", {
    get: function () {
      return this._scrollItemVO.giftVO;
    },
    enumerable: true,
    configurable: true
  });
  return AllianceGiftScrollItem;
}(a.ScrollItem);
exports.AllianceGiftScrollItem = _;
var m = require("./25.js");
r.classImplementsInterfaces(_, "MovieClip");