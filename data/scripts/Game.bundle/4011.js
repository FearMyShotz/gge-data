Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./663.js");
var c = require("./21.js");
var u = require("./192.js");
var d = require("./4.js");
var p = require("./8.js");
var h = require("./1764.js");
var g = require("./14.js");
var C = function (e) {
  function CastleSupportKingdomControls(t, i) {
    var n = e.call(this, t) || this;
    n.kingdomVO = i;
    n.i_resources_txt_remainingTime = g.CastleComponent.textFieldManager.registerTextField(n.disp.mc_sendTroops_InProgress.mc_sendTroops_progress.txt_time, new s.TextVO(""));
    n.i_troops_txt_remainingTime = g.CastleComponent.textFieldManager.registerTextField(n.disp.mc_sendResources_InProgress.mc_sendResources_progress.txt_time, new s.TextVO(""));
    g.CastleComponent.textFieldManager.registerTextField(n.disp.mc_sendTroops.txt_sendTroops, new r.LocalizedTextVO("dialog_season_sendTroops"));
    g.CastleComponent.textFieldManager.registerTextField(n.disp.mc_sendResources.txt_sendResources, new r.LocalizedTextVO("dialog_season_sendResources"));
    p.ButtonHelper.initButtons([n.disp.mc_sendTroops_InProgress.btn_minuteSkip, n.disp.mc_sendTroops_InProgress.btn_rubySkip, n.disp.mc_sendTroops.btn_sendTroops, n.disp.mc_sendResources_InProgress.btn_minuteSkip, n.disp.mc_sendResources_InProgress.btn_rubySkip, n.disp.mc_sendResources.btn_sendResources], y.ClickFeedbackButtonHover);
    n.disp.mc_sendTroops_InProgress.btn_minuteSkip.toolTipText = "timeSkipButton_tooltip";
    n.disp.mc_sendTroops_InProgress.mc_sendTroops_progress.toolTipText = "resttime";
    n.disp.mc_sendTroops_InProgress.mc_sendTroops_progress.mouseEnabled = false;
    n.disp.mc_sendResources_InProgress.btn_minuteSkip.toolTipText = "timeSkipButton_tooltip";
    n.disp.mc_sendResources_InProgress.mc_sendResources_progress.toolTipText = "resttime";
    n.disp.mc_sendResources_InProgress.mc_sendResources_progress.mouseEnabled = false;
    return n;
  }
  n.__extends(CastleSupportKingdomControls, e);
  CastleSupportKingdomControls.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    this.disp.mc_sendTroops_InProgress.btn_rubySkip.toolTipText = {
      t: "dialog_season_skipTransfer",
      p: [d.CastleModel.costsData.getFinalCostsStringC2(this.kingdomVO.skipUnitTravelC2Cost)]
    };
    p.ButtonHelper.enableButton(this.disp.mc_sendTroops_InProgress.btn_rubySkip, true);
    this.disp.mc_sendResources_InProgress.btn_rubySkip.toolTipText = {
      t: "dialog_season_skipTransfer",
      p: [d.CastleModel.costsData.getFinalCostsStringC2(this.kingdomVO.skipResourceTravelC2Cost)]
    };
    p.ButtonHelper.enableButton(this.disp.mc_sendResources_InProgress.btn_rubySkip, true);
    this.refreshTransfers();
    d.CastleModel.timerData.addEventListener(c.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateTransfer));
    d.CastleModel.kingdomData.addEventListener(u.CastleKingdomEvent.KINGDOMDATA_ARRIVED, this.bindFunction(this.onKingdomDataUpdated));
  };
  CastleSupportKingdomControls.prototype.onKingdomDataUpdated = function (e) {
    this.refreshTransfers();
    p.ButtonHelper.enableButton(this.disp.mc_sendTroops_InProgress.btn_rubySkip, true);
    p.ButtonHelper.enableButton(this.disp.mc_sendResources_InProgress.btn_rubySkip, true);
  };
  CastleSupportKingdomControls.prototype.onUpdateTransfer = function (e) {
    this.refreshTransfers();
  };
  CastleSupportKingdomControls.prototype.onHide = function () {
    d.CastleModel.timerData.removeEventListener(c.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateTransfer));
    d.CastleModel.kingdomData.removeEventListener(u.CastleKingdomEvent.KINGDOMDATA_ARRIVED, this.bindFunction(this.onKingdomDataUpdated));
    e.prototype.onHide.call(this);
  };
  CastleSupportKingdomControls.prototype.refreshTransfers = function () {
    this._kingdomGoodsTransfer = d.CastleModel.kingdomData.getIncomingGoodsTransferByKingdomID(this.kingdomVO.kID);
    this._kingdomUnitTransfer = d.CastleModel.kingdomData.getIncomingUnitsTransferByKingdomID(this.kingdomVO.kID);
    var e = !!this._kingdomUnitTransfer && this._kingdomUnitTransfer.remainingTimeInSeconds > 0;
    var t = !!this._kingdomGoodsTransfer && this._kingdomGoodsTransfer.remainingTimeInSeconds > 0;
    var i = this.sendButtonsAreEnabled();
    this.disp.mc_sendTroops.visible = !e;
    this.disp.mc_sendTroops.btn_sendTroops.toolTipText = i ? null : "dialog_season_sendTroops_notAvailable";
    p.ButtonHelper.enableButton(this.disp.mc_sendTroops.btn_sendTroops, i);
    this.disp.mc_sendResources.visible = !t;
    this.disp.mc_sendResources.btn_sendResources.toolTipText = i ? null : "dialog_season_sendResources_notAvailable";
    p.ButtonHelper.enableButton(this.disp.mc_sendResources.btn_sendResources, i);
    this.disp.mc_sendTroops_InProgress.visible = e;
    this.disp.mc_sendTroops_InProgress.mc_icon.toolTipText = this._kingdomUnitTransfer ? this._kingdomUnitTransfer.toolTipText : null;
    this.disp.mc_sendResources_InProgress.visible = t;
    this.disp.mc_sendResources_InProgress.mc_icon.toolTipText = this._kingdomGoodsTransfer ? this._kingdomGoodsTransfer.toolTipText : null;
    this.refreshGoodsTransfer();
    this.refreshToopsTransfer();
  };
  CastleSupportKingdomControls.prototype.sendButtonsAreEnabled = function () {
    return d.CastleModel.kingdomData.numUnlockedKingdoms > 1 && d.CastleModel.userData.castleList.getMainCastlesInKingdoms([this.kingdomVO.kID]).length > 0 && !!d.CastleModel.userData.castleList.getMainCastleByKingdomID(this.kingdomVO.kID);
  };
  CastleSupportKingdomControls.prototype.refreshGoodsTransfer = function () {
    if (this._kingdomGoodsTransfer) {
      this.disp.mc_sendResources_InProgress.mc_sendResources_progress.progress.scaleX = this._kingdomGoodsTransfer.progressPercent;
      this.i_troops_txt_remainingTime.textContentVO.stringValue = o.TimeStringHelper.getShortTimeStringBySeconds(this._kingdomGoodsTransfer.remainingTimeInSeconds, o.TimeStringHelper.TWO_TIME_FORMAT);
    }
  };
  CastleSupportKingdomControls.prototype.refreshToopsTransfer = function () {
    if (this._kingdomUnitTransfer) {
      this.disp.mc_sendTroops_InProgress.mc_sendTroops_progress.progress.scaleX = this._kingdomUnitTransfer.progressPercent;
      this.i_resources_txt_remainingTime.textContentVO.stringValue = o.TimeStringHelper.getShortTimeStringBySeconds(this._kingdomUnitTransfer.remainingTimeInSeconds, o.TimeStringHelper.TWO_TIME_FORMAT);
    }
  };
  CastleSupportKingdomControls.prototype.onClick = function (e) {
    if (p.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.disp.mc_sendTroops.btn_sendTroops:
          _.CastleDialogHandler.getInstance().registerDefaultDialogs(b.CastleTransferTroopsDialog, new D.CastleTransferTroopsToKingdomProperties(this.kingdomVO));
          break;
        case this.disp.mc_sendResources.btn_sendResources:
          _.CastleDialogHandler.getInstance().registerDefaultDialogs(E.CastleTransferResourcesDialog, new h.CastleTransferResToKingdomProperties(this.kingdomVO));
          break;
        case this.disp.mc_sendResources_InProgress.btn_rubySkip:
          if (this._kingdomGoodsTransfer.remainingTimeInSeconds >= 1) {
            p.ButtonHelper.enableButton(this.disp.mc_sendResources_InProgress.btn_rubySkip, false);
            d.CastleModel.smartfoxClient.sendCommandVO(new l.C2SKingdomSkipTransferVO(this._kingdomGoodsTransfer.targetKingdomID, 2));
          }
          break;
        case this.disp.mc_sendTroops_InProgress.btn_rubySkip:
          if (this._kingdomUnitTransfer.remainingTimeInSeconds >= 1) {
            p.ButtonHelper.enableButton(this.disp.mc_sendTroops_InProgress.btn_rubySkip, false);
            d.CastleModel.smartfoxClient.sendCommandVO(new l.C2SKingdomSkipTransferVO(this._kingdomUnitTransfer.targetKingdomID, 1));
          }
          break;
        case this.disp.mc_sendResources_InProgress.btn_minuteSkip:
          _.CastleDialogHandler.getInstance().registerDefaultDialogs(m.CastleMinuteSkipDialog, new f.KingdomGoodsTravelMinuteSkipProperties(this.kingdomVO.kID));
          break;
        case this.disp.mc_sendTroops_InProgress.btn_minuteSkip:
          _.CastleDialogHandler.getInstance().registerDefaultDialogs(m.CastleMinuteSkipDialog, new O.KingdomUnitsTravelMinuteSkipProperties(this.kingdomVO.kID));
      }
    }
  };
  return CastleSupportKingdomControls;
}(require("./40.js").CastleItemRenderer);
exports.CastleSupportKingdomControls = C;
var _ = require("./9.js");
var m = require("./208.js");
var f = require("./1765.js");
var O = require("./1074.js");
var E = require("./1091.js");
var y = require("./20.js");
var b = require("./664.js");
var D = require("./1072.js");
a.classImplementsInterfaces(C, "ICollectableRendererList");