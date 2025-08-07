Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./39.js");
var c = require("./21.js");
var u = require("./4.js");
var d = require("./27.js");
var p = require("./42.js");
var h = function (e) {
  function CastleVIPMessageDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleVIPMessageDialog.NAME) || this;
  }
  n.__extends(CastleVIPMessageDialog, e);
  CastleVIPMessageDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.dialogDisp.mc_addVIPTime.btn_addVIPTime.txt_label.defaultCacheScale = m.CastleLayoutManager.UI_SCALE_FACTOR;
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.mc_addVIPTime.btn_addVIPTime]);
    this.setTexts();
  };
  CastleVIPMessageDialog.prototype.setTexts = function () {
    this.itxt_title = this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.LocalizedTextVO("dialog_VipBonus_message_header_v2"));
    this.itxt_title.verticalAlign = o.GGSVerticalAlign.MIDDLE;
    this.itxt_level = this.textFieldManager.registerTextField(this.dialogDisp.txt_level, new s.LocalizedTextVO("dialog_VipScreen_vipLevel_v2"));
    this.itxt_time = this.textFieldManager.registerTextField(this.dialogDisp.mc_runtime.txt_value, new r.TextVO(""));
    this.itxt_bonusList = this.textFieldManager.registerTextField(this.dialogDisp.txt_bonusList, new r.TextVO(""));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_addVIPTime.btn_addVIPTime.txt_label, new s.LocalizedTextVO("dialog_VipScreen_showVIP_tooltip")).verticalAlign = o.GGSVerticalAlign.MIDDLE;
    this.dialogDisp.setChildIndex(this.dialogDisp.mc_addVIPTime, this.dialogDisp.numChildren - 1);
  };
  CastleVIPMessageDialog.prototype.applyPropertiesLoaded = function (t = null) {
    e.prototype.applyPropertiesLoaded.call(this, t);
    if (this.vipLevelToDisplay == CastleVIPMessageDialog.MAX_VIP_LEVEL) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new s.LocalizedTextVO("dialog_VipBonus_message_topLevel_copy", [this.vipLevelToDisplay]));
    } else {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new s.LocalizedTextVO("dialog_VipBonus_message_copy_v2", [this.vipLevelToDisplay]));
    }
    this.textFieldManager.registerTextField(this.dialogDisp.mc_runtime.txt_runtime, new s.LocalizedTextVO(l.ClientConstTextIds.RESTTIME)).verticalAlign = p.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.itxt_title.textContentVO.textReplacements = [this.vipLevelToDisplay];
    this.itxt_level.textContentVO.textReplacements = [this.vipLevelToDisplay];
    this.itxt_bonusList.textContentVO.stringValue = C.CastleVIPLevelInfoTextComposer.generateBonusText(u.CastleModel.vipData.getVIPLevelInfoVOByLevel(this.vipLevelToDisplay));
    this.onTimerUpdate(null);
    this.adjustHeightToBonusListLength();
  };
  CastleVIPMessageDialog.prototype.adjustHeightToBonusListLength = function () {
    var e = (CastleVIPMessageDialog.DEFAULT_BONUS_BG_HEIGHT_BEFORE_TEXT_FIELD + this.itxt_bonusList.textHeight + CastleVIPMessageDialog.DEFAULT_BONUS_BG_HEIGHT_AFTER_TEXT_FIELD) / CastleVIPMessageDialog.DEFAULT_TOTAL_BONUS_BG_HEIGHT;
    this.dialogDisp.mc_bonus_bg.scaleY = Math.max(e, CastleVIPMessageDialog.BONUS_BG_HEIGHT_MIN_SCALE);
    this.dialogDisp.mc_dialog_bg.height = this.dialogDisp.mc_bonus_bg.y + this.dialogDisp.mc_bonus_bg.height + CastleVIPMessageDialog.DIALOG_BG_Y_OFFSET;
    this.dialogDisp.mc_addVIPTime.y = this.dialogDisp.mc_bonus_bg.y + this.dialogDisp.mc_bonus_bg.height + CastleVIPMessageDialog.ADD_TIME_BTN_Y_OFFSET_REGARDING_BONUS_BG;
  };
  CastleVIPMessageDialog.prototype.addEventListenerOnShow = function () {
    e.prototype.addEventListenerOnShow.call(this);
    u.CastleModel.timerData.addEventListener(c.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  CastleVIPMessageDialog.prototype.removeEventListenerOnHide = function () {
    e.prototype.removeEventListenerOnHide.call(this);
    u.CastleModel.timerData.removeEventListener(c.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  CastleVIPMessageDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.mc_addVIPTime.btn_addVIPTime:
        g.CastleDialogHandler.getInstance().registerDefaultDialogs(_.CastlePremiumMarketPlaceDialog);
        break;
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  CastleVIPMessageDialog.prototype.onTimerUpdate = function (e) {
    this.itxt_time.textContentVO.stringValue = d.CastleTimeStringHelper.getEventTimeString(u.CastleModel.vipData.remainingVIPTimeInSeconds);
  };
  Object.defineProperty(CastleVIPMessageDialog.prototype, "vipLevelToDisplay", {
    get: function () {
      return this.dialogProperties.vipLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleVIPMessageDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleVIPMessageDialog.__initialize_static_members = function () {
    CastleVIPMessageDialog.NAME = "CastleVIPMessage";
    CastleVIPMessageDialog.DEFAULT_BONUS_BG_HEIGHT_BEFORE_TEXT_FIELD = 26.95;
    CastleVIPMessageDialog.DEFAULT_BONUS_BG_HEIGHT_AFTER_TEXT_FIELD = 40;
    CastleVIPMessageDialog.BONUS_BG_HEIGHT_MIN_SCALE = 0.95;
    CastleVIPMessageDialog.DEFAULT_TOTAL_BONUS_BG_HEIGHT = 200.6;
    CastleVIPMessageDialog.DIALOG_BG_Y_OFFSET = 20;
    CastleVIPMessageDialog.MAX_VIP_LEVEL = 10;
  };
  CastleVIPMessageDialog.ADD_TIME_BTN_Y_OFFSET_REGARDING_BONUS_BG = -8.9;
  return CastleVIPMessageDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleVIPMessageDialog = h;
var g = require("./9.js");
var C = require("./1429.js");
var _ = require("./315.js");
var m = require("./17.js");
a.classImplementsInterfaces(h, "ICollectableRendererList");
h.__initialize_static_members();