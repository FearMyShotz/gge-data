Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./6.js");
var h = require("./16.js");
var g = require("./39.js");
var C = require("./568.js");
var _ = require("./21.js");
var m = require("./32.js");
var f = require("./4.js");
var O = require("./569.js");
var E = require("./52.js");
var y = require("./8.js");
var b = require("./11.js");
var D = createjs.Shape;
var I = function (e) {
  function RubyWishingWellDialog() {
    var t = this;
    t.timeoutRunning = false;
    t.buttonCurrentlyEnabled = true;
    t.currentAction = r.WishingWellConst.OPTION_START_RUBY_WISHING_WELL;
    CONSTRUCTOR_HACK;
    return t = e.call(this, RubyWishingWellDialog.NAME) || this;
  }
  n.__extends(RubyWishingWellDialog, e);
  RubyWishingWellDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    y.ButtonHelper.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.btn_huge]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new u.LocalizedTextVO(RubyWishingWellDialog.TITLE)).verticalAlign = o.GGSVerticalAlign.MIDDLE;
    this.dialogDisp.btn_help.toolTipText = RubyWishingWellDialog.HELP_TOOLTIP;
    this.currentVO = f.CastleModel.rubyWishingWellData.getCurrentNode();
    this.rect = new D();
    this.rect.graphics.beginFill(0);
    this.rect.graphics.drawRect(0, -RubyWishingWellDialog.ARROW_HEIGHT / 2, RubyWishingWellDialog.ARROW_WIDTH, RubyWishingWellDialog.ARROW_HEIGHT);
    this.rect.x = RubyWishingWellDialog.ARROW_OFFSET_X + this.dialogDisp.arrow.filling.x;
    this.rect.setBounds(RubyWishingWellDialog.ARROW_OFFSET_X, RubyWishingWellDialog.ARROW_HEIGHT / 2, RubyWishingWellDialog.ARROW_WIDTH, RubyWishingWellDialog.ARROW_HEIGHT);
    this.dialogDisp.arrow.addChild(this.rect);
    this.dialogDisp.arrow.filling.mask = this.rect;
    this.updateArrow();
  };
  RubyWishingWellDialog.prototype.updateTexts = function () {
    var e = p.int(f.CastleModel.currencyData.getAmountById(E.ClientConstCurrency.ID_WISHING_WELL_COIN));
    var t = this.textFieldManager.registerTextField(this.dialogDisp.ownedCoins.txt_currentCoins, new c.LocalizedNumberVO(e));
    this.dialogDisp.ownedCoins.toolTipText = RubyWishingWellDialog.TOOLTIP_OWNED_COINS;
    this.dialogDisp.ownedCoins.mouseChildren = false;
    this.dialogDisp.info_hourglass.toolTipText = RubyWishingWellDialog.TOOLTIP_WAITINGTIME;
    this.dialogDisp.info_hourglass.mouseChildren = false;
    this.dialogDisp.manyRubies.toolTipText = RubyWishingWellDialog.TOOLTIP_MANY_RUBIES;
    this.dialogDisp.manyRubies.mouseChildren = false;
    this.dialogDisp.littleRubies.toolTipText = g.ClientConstTextIds.C2;
    this.dialogDisp.littleRubies.mouseChildren = false;
    this.dialogDisp.equation.neededCoins.toolTipText = RubyWishingWellDialog.TOOLTIP_OWNED_COINS;
    this.dialogDisp.equation.neededCoins.mouseChildren = false;
    if (this.currentVO) {
      this.textFieldManager.registerTextField(this.dialogDisp.littleRubies.txt_littleRubies, new c.LocalizedNumberVO(this.currentVO.entryCosts));
      this.textFieldManager.registerTextField(this.dialogDisp.manyRubies.txt_manyRubies, new c.LocalizedNumberVO(this.currentVO.entryCosts * O.CastleRubyWishingWellData.MULTIPLIER));
      this.textFieldManager.registerTextField(this.dialogDisp.equation.neededCoins.txt_neededCoins, new c.LocalizedNumberVO(this.currentVO.neededWishingWellCoins));
      this.textFieldManager.registerTextField(this.dialogDisp.info_hourglass.txt_hourglass, new d.TextVO(a.TimeStringHelper.getHoureMinuteSecondTimeString(this.currentVO.waitingTime)));
      t.color = f.CastleModel.currencyData.getAmountById(E.ClientConstCurrency.ID_WISHING_WELL_COIN) < this.currentVO.neededWishingWellCoins ? h.ClientConstColor.FONT_INSUFFICIENT_COLOR : h.ClientConstColor.FONT_DEFAULT_COLOR;
    }
  };
  RubyWishingWellDialog.prototype.updateArrow = function (e = null) {
    var t;
    var i = p.int(f.CastleModel.rubyWishingWellData.getRemainingSecondsCalculated());
    var n = false;
    var s = 1;
    this.dialogDisp.btn_huge.gotoAndStop(1);
    if (this.currentVO) {
      var l = "";
      if (f.CastleModel.rubyWishingWellData.isReadyToStart()) {
        this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new u.LocalizedTextVO(RubyWishingWellDialog.DESCRIPTION_GENERAL, [this.currentVO.entryCosts])).verticalAlign = o.GGSVerticalAlign.MIDDLE;
        this.currentAction = r.WishingWellConst.OPTION_START_RUBY_WISHING_WELL;
        this.textFieldManager.registerTextField(this.dialogDisp.btn_huge.label, new u.LocalizedTextVO(RubyWishingWellDialog.HUGE_BUTTON_START)).verticalAlign = o.GGSVerticalAlign.MIDDLE;
        if (this.currentVO.neededWishingWellCoins > f.CastleModel.currencyData.getAmountById(E.ClientConstCurrency.ID_WISHING_WELL_COIN)) {
          this.dialogDisp.btn_huge.toolTipText = RubyWishingWellDialog.BUTTON_TOOLTIP_NOT_ENOUGH_COINS;
          this.enableMainButton(false);
        } else {
          this.dialogDisp.btn_huge.toolTipText = "";
          this.enableMainButton(true);
        }
      } else if (f.CastleModel.rubyWishingWellData.isReadyToCollect() || i == 0) {
        this.enableMainButton(true);
        this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new u.LocalizedTextVO(RubyWishingWellDialog.DESCRIPTION_READY)).verticalAlign = o.GGSVerticalAlign.MIDDLE;
        this.dialogDisp.btn_huge.gotoAndStop(2);
        this.textFieldManager.registerTextField(this.dialogDisp.btn_huge.label, new u.LocalizedTextVO(RubyWishingWellDialog.HUGE_BUTTON_COLLECT)).verticalAlign = o.GGSVerticalAlign.MIDDLE;
        this.dialogDisp.btn_huge.toolTipText = "";
        n = true;
        t = new u.LocalizedTextVO(RubyWishingWellDialog.ARROW_DONE);
        this.currentAction = r.WishingWellConst.OPTION_COLLECT_RUBY_WISHING_WELL;
      } else {
        this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new u.LocalizedTextVO(RubyWishingWellDialog.DESCRIPTION_WORKING)).verticalAlign = o.GGSVerticalAlign.MIDDLE;
        s = f.CastleModel.rubyWishingWellData.getPercentageFinished();
        this.textFieldManager.registerTextField(this.dialogDisp.btn_huge.label, new u.LocalizedTextVO(RubyWishingWellDialog.HUGE_BUTTON_COLLECT_NOW)).verticalAlign = o.GGSVerticalAlign.MIDDLE;
        this.dialogDisp.btn_huge.toolTipText = {
          t: RubyWishingWellDialog.BUTTON_TOOLTIP_COLLECT_NOW,
          p: [p.int(Math.max(0, r.WishingWellConst.calculateWishingWellSkipCost(i)))]
        };
        this.enableMainButton(true);
        this.currentAction = r.WishingWellConst.OPTION_SKIP_RUBY_WISHING_WELL;
        l = RubyWishingWellDialog.TOOLTIP_ARROW;
        n = true;
        t = new u.LocalizedTextVO(a.TimeStringHelper.getHoureMinuteSecondTimeString(i));
      }
      if (n) {
        this.dialogDisp.equation.visible = false;
        this.dialogDisp.info_hourglass.visible = false;
        this.dialogDisp.arrow.visible = true;
        this.dialogDisp.arrow.toolTipText = l;
        this.dialogDisp.arrow.mouseChildren = false;
        this.rect.width = RubyWishingWellDialog.ARROW_WIDTH * s;
        if (t) {
          this.textFieldManager.registerTextField(this.dialogDisp.arrow.txt_time, t);
        }
      } else {
        this.dialogDisp.equation.visible = true;
        this.dialogDisp.info_hourglass.visible = true;
        this.dialogDisp.arrow.visible = false;
      }
    }
  };
  RubyWishingWellDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.currentVO = f.CastleModel.rubyWishingWellData.getCurrentNode();
    this.updateArrow();
    this.updateTexts();
    f.CastleModel.timerData.addEventListener(_.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.updateArrow));
    this.controller.addEventListener(m.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onUpdate));
    f.CastleModel.rubyWishingWellData.addEventListener(O.CastleRubyWishingWellData.UPDATE, this.bindFunction(this.onUpdate));
  };
  RubyWishingWellDialog.prototype.hide = function () {
    f.CastleModel.timerData.removeEventListener(_.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.updateArrow));
    this.controller.removeEventListener(m.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onUpdate));
    f.CastleModel.rubyWishingWellData.removeEventListener(O.CastleRubyWishingWellData.UPDATE, this.bindFunction(this.onUpdate));
    e.prototype.hide.call(this);
  };
  RubyWishingWellDialog.prototype.enableMainButton = function (e, t) {
    var i = this;
    if (t === undefined) {
      t = false;
    }
    if (this.timeoutRunning) {
      this.buttonCurrentlyEnabled = e;
    } else if (t) {
      this.timeoutRunning = true;
      y.ButtonHelper.enableButton(this.dialogDisp.btn_huge, false);
      window.setTimeout(function () {
        i.timeoutRunning = false;
        y.ButtonHelper.enableButton(i.dialogDisp.btn_huge, i.buttonCurrentlyEnabled);
      }, RubyWishingWellDialog.BUTTON_COOLDOWN);
    } else {
      y.ButtonHelper.enableButton(this.dialogDisp.btn_huge, e);
    }
  };
  RubyWishingWellDialog.prototype.onClick = function (e) {
    if (y.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_huge:
          this.enableMainButton(true, true);
          f.CastleModel.smartfoxClient.sendCommandVO(new C.C2SWishingWellCommandVO(this.currentAction));
          break;
        case this.dialogDisp.btn_help:
          T.CastleDialogHandler.getInstance().showHelper("", l.Localize.text("help_rubyWishingWell"));
      }
    }
  };
  RubyWishingWellDialog.prototype.onUpdate = function (e) {
    this.currentVO = f.CastleModel.rubyWishingWellData.getCurrentNode();
    this.updateArrow();
    this.updateTexts();
  };
  RubyWishingWellDialog.NAME = "RubyWishingWell";
  RubyWishingWellDialog.TITLE = "dialog_rubyWishingWell_header";
  RubyWishingWellDialog.DESCRIPTION_GENERAL = "dialog_rubyWishingWell_desc_general";
  RubyWishingWellDialog.DESCRIPTION_WORKING = "dialog_rubyWishingWell_desc_working";
  RubyWishingWellDialog.DESCRIPTION_READY = "dialog_rubyWishingWell_desc_done";
  RubyWishingWellDialog.HUGE_BUTTON_START = "dialog_rubyWishingWell_button";
  RubyWishingWellDialog.HUGE_BUTTON_COLLECT_NOW = "dialog_rubyWishingWell_button_collectNow";
  RubyWishingWellDialog.HUGE_BUTTON_COLLECT = "dialog_rubyWishingWell_button_collect";
  RubyWishingWellDialog.TOOLTIP_MANY_RUBIES = "rubyWishingWell_totalamount";
  RubyWishingWellDialog.TOOLTIP_ARROW = "resttime";
  RubyWishingWellDialog.TOOLTIP_WAITINGTIME = "rubyWishingWell_waitingtime";
  RubyWishingWellDialog.TOOLTIP_OWNED_COINS = "rubyWishingWell_Coin";
  RubyWishingWellDialog.BUTTON_TOOLTIP_NOT_ENOUGH_COINS = "dialog_rubyWishingWell_noCoin_tt";
  RubyWishingWellDialog.BUTTON_TOOLTIP_COLLECT_NOW = "dialog_rubyWishingWell_button_collectNow_tt";
  RubyWishingWellDialog.HELP_TOOLTIP = "generic_help";
  RubyWishingWellDialog.ARROW_DONE = "dialog_finish";
  RubyWishingWellDialog.BUTTON_COOLDOWN = 1000;
  RubyWishingWellDialog.ARROW_WIDTH = 203;
  RubyWishingWellDialog.ARROW_HEIGHT = 60;
  RubyWishingWellDialog.ARROW_OFFSET_X = -121;
  RubyWishingWellDialog.ARROW_OFFSET_Y = -10;
  return RubyWishingWellDialog;
}(b.CastleExternalDialog);
exports.RubyWishingWellDialog = I;
var T = require("./9.js");
s.classImplementsInterfaces(I, "ICollectableRendererList");