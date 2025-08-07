Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./5.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./6.js");
var d = require("./21.js");
var p = require("./4.js");
var h = require("./33.js");
var g = require("./68.js");
var C = require("./8.js");
var _ = require("./1386.js");
var m = function (e) {
  function CastleAllianceDialogTreasuryBoosterItemTemp(t, i, n = null) {
    return e.call(this, t, i, n || _.CastleAllianceDialogTreasuryBoosterItem_OneEffect.ASSET_CLIP_NAME) || this;
  }
  n.__extends(CastleAllianceDialogTreasuryBoosterItemTemp, e);
  CastleAllianceDialogTreasuryBoosterItemTemp.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    p.CastleModel.timerData.addEventListener(d.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
  };
  CastleAllianceDialogTreasuryBoosterItemTemp.prototype.removeEventListener = function () {
    p.CastleModel.timerData.removeEventListener(d.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
    e.prototype.removeEventListener.call(this);
  };
  CastleAllianceDialogTreasuryBoosterItemTemp.prototype.getBoosterAmountText = function () {
    if (f.AllianceBuffData.CUSTOMIZABLE_BUFFS.indexOf(this.buffVO.seriesID) > -1 && !this.allianceInfoVO.isTemporaryBoosterActive(this.buffVO.seriesID)) {
      var t = c.Localize.text(s.GenericTextIds.VALUE_PERCENTAGE_ADD, [this.allianceInfoVO.getBoostValue(this.buffVO.seriesID, 1, h.EffectTypeEnum.EFFECT_TYPE_UNKNOWN)]);
      var i = c.Localize.text(s.GenericTextIds.VALUE_PERCENTAGE, [this.allianceInfoVO.getBoostValue(this.buffVO.seriesID, this.buffVO.maxLevel, h.EffectTypeEnum.EFFECT_TYPE_UNKNOWN)]);
      return new l.LocalizedTextVO("value_dash_split_paragraph", [t, i]);
    }
    return e.prototype.getBoosterAmountText.call(this);
  };
  CastleAllianceDialogTreasuryBoosterItemTemp.prototype.update = function () {
    e.prototype.update.call(this);
    this.updateCountdown();
  };
  CastleAllianceDialogTreasuryBoosterItemTemp.prototype.updateIcon = function () {
    e.prototype.updateIcon.call(this);
    this.itemMc.mc_icon.filters = this.allianceInfoVO.isTemporaryBoosterActive(this.buffVO.seriesID) ? g.BitmapFilterHelper.NO_FILTER : g.BitmapFilterHelper.FILTER_DESATURATED_BUTTON_COLOR_MATRIX;
  };
  CastleAllianceDialogTreasuryBoosterItemTemp.prototype.updateCountdown = function () {
    var e = u.int(this.allianceInfoVO.getRemainingBoostDuration(this.buffVO.seriesID));
    O.CastleComponent.textFieldManager.registerTextField(this.itemMc.mc_progress.txt_countdown_name_middle, new l.LocalizedTextVO("timeLimit_01", [""])).visible = e > 0;
    this.itemMc.mc_progress.txt_countdown_name_full.visible = false;
    O.CastleComponent.textFieldManager.registerTextField(this.itemMc.mc_progress.txt_countdown_middle, new l.TextVO(a.TimeStringHelper.getHoureMinuteSecondTimeString(e))).visible = e > 0;
    this.itemMc.mc_progress.txt_countdown_full.visible = false;
    O.CastleComponent.textFieldManager.registerTextField(this.itemMc.mc_progress.txt_empty, new l.LocalizedTextVO("dialog_alliance_effect_notActive")).visible = e <= 0;
  };
  CastleAllianceDialogTreasuryBoosterItemTemp.prototype.updateButton = function () {
    var e;
    var t = 2;
    var i = true;
    if (p.CastleModel.allianceData.hasRight(p.CastleModel.userData.allianceRank, r.AllianceConst.RIGHT_UPGRADE)) {
      if (this.allianceInfoVO.canTemporaryBoostBeActivated(this.buffVO.seriesID)) {
        if (this.allianceInfoVO.isTemporaryBoosterActive(this.buffVO.seriesID)) {
          i = true;
          e = "dialog_alliance_prolongEffect";
          t = 3;
        } else {
          i = true;
          e = "dialog_alliance_activateEffect";
        }
      } else {
        i = false;
        var n = u.int(p.CastleModel.allianceBuffData.getRequiredBuffID(this.buffVO.seriesID, this.allianceInfoVO.getBoostLevel(this.buffVO.seriesID) + 1));
        var o = u.int(p.CastleModel.allianceBuffData.getBuffLevelByBuffID(n));
        var a = u.int(p.CastleModel.allianceBuffData.getBuffSeriesIDByBuffID(n));
        var s = p.CastleModel.allianceBuffData.getAllianceBuffVoBySeriesIDAndLevel(a, o).getBonusVOByEffectType(h.EffectTypeEnum.EFFECT_TYPE_UNKNOWN);
        e = {
          t: "dialog_alliance_effectNotAvailable",
          p: [u.int(s ? s.strength : 0).toString()]
        };
      }
    } else {
      i = false;
      e = "dialog_alliance_rankToLow";
    }
    this.itemMc.btn_add.mc_icon.gotoAndStop(t);
    C.ButtonHelper.enableButton(this.itemMc.btn_add, i);
    this.itemMc.btn_add.toolTipText = e;
  };
  CastleAllianceDialogTreasuryBoosterItemTemp.prototype.updateProgressBar = function () {
    var e = u.int(this.allianceInfoVO.getRemainingBoostDuration(this.buffVO.seriesID));
    this.itemMc.mc_progress.mc_bar_low.scaleX = 1;
    this.itemMc.mc_progress.mc_bar_full.visible = false;
    this.itemMc.mc_progress.mc_bar_middle.visible = false;
    this.itemMc.mc_progress.mc_bar_low.visible = e > 0;
  };
  CastleAllianceDialogTreasuryBoosterItemTemp.prototype.onTimer = function (e) {
    this.updateCountdown();
    this.updateProgressBar();
    this.updateButton();
  };
  return CastleAllianceDialogTreasuryBoosterItemTemp;
}(_.CastleAllianceDialogTreasuryBoosterItem_OneEffect);
exports.CastleAllianceDialogTreasuryBoosterItemTemp = m;
var f = require("./749.js");
var O = require("./14.js");
o.classImplementsInterfaces(m, "ICollectableRendererList");