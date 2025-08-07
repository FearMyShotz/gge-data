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
var u = require("./663.js");
var d = require("./159.js");
var p = require("./21.js");
var h = require("./192.js");
var g = require("./4.js");
var C = require("./8.js");
var _ = require("./35.js");
var m = require("./1764.js");
var f = function (e) {
  function CastleHandleKingdomDialogSupport(t) {
    var i = e.call(this, t) || this;
    i.i_troops_txt_remainingTime = i.textFieldManager.registerTextField(i.subLayerDisp.info_sendResources.txt_remainingTime, new c.TextVO(""));
    i.i_resources_txt_remainingTime = i.textFieldManager.registerTextField(i.subLayerDisp.info_sendTroops.txt_remainingTime, new c.TextVO(""));
    C.ButtonHelper.initBasicButtons([i.subLayerDisp.btn_enterWorld, i.subLayerDisp.btn_sendTroops, i.subLayerDisp.btn_sendResources, i.subLayerDisp.info_sendResources.btn_fullSkip, i.subLayerDisp.info_sendTroops.btn_fullSkip, i.subLayerDisp.info_sendResources.btn_minuteSkip, i.subLayerDisp.info_sendTroops.btn_minuteSkip]);
    i.subLayerDisp.btn_enterWorld.toolTipText = "dialog_season_changeWorlds";
    i.subLayerDisp.btn_sendTroops.toolTipText = "dialog_season_sendTroops";
    i.subLayerDisp.info_sendTroops.btn_minuteSkip.toolTipText = "timeSkipButton_tooltip";
    i.subLayerDisp.info_sendTroops.progressTooltipCover.toolTipText = "resttime";
    i.subLayerDisp.btn_sendResources.toolTipText = "dialog_season_sendResources";
    i.subLayerDisp.info_sendResources.btn_minuteSkip.toolTipText = "timeSkipButton_tooltip";
    i.subLayerDisp.info_sendResources.progressTooltipCover.toolTipText = "resttime";
    return i;
  }
  n.__extends(CastleHandleKingdomDialogSupport, e);
  CastleHandleKingdomDialogSupport.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this.kingdomVO = t;
    this.subLayerDisp.info_sendTroops.btn_fullSkip.toolTipText = {
      t: "dialog_season_skipTransfer",
      p: [g.CastleModel.costsData.getFinalCostsStringC2(this.kingdomVO.skipUnitTravelC2Cost)]
    };
    this.subLayerDisp.info_sendTroops.btn_fullSkip.gotoAndStop(1);
    this.subLayerDisp.info_sendTroops.mc_icon.gotoAndStop(this.buttonframe);
    this.subLayerDisp.info_sendTroops.mc_icon.mouseChildren = false;
    C.ButtonHelper.enableButton(this.subLayerDisp.info_sendTroops.btn_fullSkip, true);
    this.subLayerDisp.info_sendResources.btn_fullSkip.toolTipText = {
      t: "dialog_season_skipTransfer",
      p: [g.CastleModel.costsData.getFinalCostsStringC2(this.kingdomVO.skipResourceTravelC2Cost)]
    };
    this.subLayerDisp.info_sendResources.btn_fullSkip.gotoAndStop(1);
    this.subLayerDisp.info_sendResources.mc_icon.gotoAndStop(this.buttonframe);
    this.subLayerDisp.info_sendResources.mc_icon.mouseChildren = false;
    C.ButtonHelper.enableButton(this.subLayerDisp.info_sendResources.btn_fullSkip, true);
    this.subLayerDisp.btn_enterWorld.icon.gotoAndStop(this.buttonframe);
    this.subLayerDisp.btn_sendTroops.gotoAndStop(this.buttonframe);
    this.subLayerDisp.btn_sendResources.gotoAndStop(this.buttonframe);
    this.refreshTransfers();
    g.CastleModel.timerData.addEventListener(p.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateTransfer));
    g.CastleModel.kingdomData.addEventListener(h.CastleKingdomEvent.KINGDOMDATA_ARRIVED, this.bindFunction(this.onKingdomDataUpdated));
  };
  CastleHandleKingdomDialogSupport.prototype.onKingdomDataUpdated = function (e) {
    this.refreshTransfers();
    C.ButtonHelper.enableButton(this.subLayerDisp.info_sendTroops.btn_fullSkip, true);
    C.ButtonHelper.enableButton(this.subLayerDisp.info_sendResources.btn_fullSkip, true);
  };
  Object.defineProperty(CastleHandleKingdomDialogSupport.prototype, "buttonframe", {
    get: function () {
      if (this.kingdomVO.kID == r.WorldIsland.KINGDOM_ID) {
        return 8;
      } else {
        return this.kingdomVO.kID + 1;
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleHandleKingdomDialogSupport.prototype.onUpdateTransfer = function (e) {
    this.refreshTransfers();
  };
  CastleHandleKingdomDialogSupport.prototype.hide = function () {
    g.CastleModel.timerData.removeEventListener(p.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateTransfer));
    g.CastleModel.kingdomData.removeEventListener(h.CastleKingdomEvent.KINGDOMDATA_ARRIVED, this.bindFunction(this.onKingdomDataUpdated));
    e.prototype.hide.call(this);
  };
  CastleHandleKingdomDialogSupport.prototype.refreshTransfers = function () {
    this._kingdomGoodsTransfer = g.CastleModel.kingdomData.getIncomingGoodsTransferByKingdomID(this.kingdomVO.kID);
    this._kingdomUnitTransfer = g.CastleModel.kingdomData.getIncomingUnitsTransferByKingdomID(this.kingdomVO.kID);
    var e = !!this._kingdomUnitTransfer && this._kingdomUnitTransfer.remainingTimeInSeconds > 0;
    var t = !!this._kingdomGoodsTransfer && this._kingdomGoodsTransfer.remainingTimeInSeconds > 0;
    var i = this.sendButtonsAreEnabled();
    this.subLayerDisp.btn_sendTroops.visible = !e;
    this.subLayerDisp.btn_sendTroops.toolTipText = i ? "dialog_season_sendTroops" : "dialog_season_sendTroops_notAvailable";
    C.ButtonHelper.enableButton(this.subLayerDisp.btn_sendTroops, i);
    this.subLayerDisp.btn_sendResources.visible = !t;
    this.subLayerDisp.btn_sendResources.toolTipText = i ? "dialog_season_sendResources" : "dialog_season_sendResources_notAvailable";
    C.ButtonHelper.enableButton(this.subLayerDisp.btn_sendResources, i);
    this.subLayerDisp.info_sendTroops.visible = e;
    this.subLayerDisp.info_sendTroops.mc_icon.toolTipText = this._kingdomUnitTransfer ? this._kingdomUnitTransfer.toolTipText : null;
    this.subLayerDisp.info_sendResources.visible = t;
    this.subLayerDisp.info_sendResources.mc_icon.toolTipText = this._kingdomGoodsTransfer ? this._kingdomGoodsTransfer.toolTipText : null;
    this.refreshGoodsTransfer();
    this.refreshToopsTransfer();
  };
  CastleHandleKingdomDialogSupport.prototype.sendButtonsAreEnabled = function () {
    return g.CastleModel.kingdomData.numUnlockedKingdoms > 1 && g.CastleModel.userData.castleList.getMainCastlesInKingdoms([this.kingdomVO.kID]).length > 0 && !!g.CastleModel.userData.castleList.getMainCastleByKingdomID(this.kingdomVO.kID);
  };
  CastleHandleKingdomDialogSupport.prototype.refreshGoodsTransfer = function () {
    if (this._kingdomGoodsTransfer) {
      this.subLayerDisp.info_sendResources.mc_bar.scaleX = this._kingdomGoodsTransfer.progressPercent;
      this.i_troops_txt_remainingTime.textContentVO.stringValue = a.TimeStringHelper.getShortTimeStringBySeconds(this._kingdomGoodsTransfer.remainingTimeInSeconds, a.TimeStringHelper.TWO_TIME_FORMAT);
    }
  };
  CastleHandleKingdomDialogSupport.prototype.refreshToopsTransfer = function () {
    if (this._kingdomUnitTransfer) {
      this.subLayerDisp.info_sendTroops.mc_bar.scaleX = this._kingdomUnitTransfer.progressPercent;
      this.i_resources_txt_remainingTime.textContentVO.stringValue = a.TimeStringHelper.getShortTimeStringBySeconds(this._kingdomUnitTransfer.remainingTimeInSeconds, a.TimeStringHelper.TWO_TIME_FORMAT);
    }
  };
  CastleHandleKingdomDialogSupport.prototype.onClick = function (e) {
    if (C.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.subLayerDisp.btn_enterWorld:
          var t = g.CastleModel.userData.castleList.getMainCastleByKingdomID(this.kingdomVO.kID);
          if (t && O.FlashBlockHelper.checkFlashBlock(t.spaceID)) {
            return;
          }
          if (t) {
            o.CommandController.instance.executeCommand(E.IngameClientCommands.JOIN_AREA_AND_SAVE_POSITION_COMMAND, t);
          } else {
            if (g.CastleModel.worldmapData) {
              g.CastleModel.worldmapData.allowGAARequests = false;
            }
            g.CastleModel.smartfoxClient.sendCommandVO(new d.C2SJoinCastleVO(0, this.kingdomVO.kID));
          }
          break;
        case this.subLayerDisp.btn_sendTroops:
          y.CastleDialogHandler.getInstance().registerDefaultDialogs(v.CastleTransferTroopsDialog, new S.CastleTransferTroopsToKingdomProperties(this.kingdomVO));
          break;
        case this.subLayerDisp.btn_sendResources:
          y.CastleDialogHandler.getInstance().registerDefaultDialogs(T.CastleTransferResourcesDialog, new m.CastleTransferResToKingdomProperties(this.kingdomVO));
          break;
        case this.subLayerDisp.info_sendResources.btn_fullSkip:
          if (this._kingdomGoodsTransfer.remainingTimeInSeconds >= 1) {
            C.ButtonHelper.enableButton(this.subLayerDisp.info_sendResources.btn_fullSkip, false);
            g.CastleModel.smartfoxClient.sendCommandVO(new u.C2SKingdomSkipTransferVO(this._kingdomGoodsTransfer.targetKingdomID, 2));
          }
          break;
        case this.subLayerDisp.info_sendTroops.btn_fullSkip:
          if (this._kingdomUnitTransfer.remainingTimeInSeconds >= 1) {
            C.ButtonHelper.enableButton(this.subLayerDisp.info_sendTroops.btn_fullSkip, false);
            g.CastleModel.smartfoxClient.sendCommandVO(new u.C2SKingdomSkipTransferVO(this._kingdomUnitTransfer.targetKingdomID, 1));
          }
          break;
        case this.subLayerDisp.info_sendResources.btn_minuteSkip:
          y.CastleDialogHandler.getInstance().registerDefaultDialogs(b.CastleMinuteSkipDialog, new D.KingdomGoodsTravelMinuteSkipProperties(this.kingdomVO.kID));
          break;
        case this.subLayerDisp.info_sendTroops.btn_minuteSkip:
          y.CastleDialogHandler.getInstance().registerDefaultDialogs(b.CastleMinuteSkipDialog, new I.KingdomUnitsTravelMinuteSkipProperties(this.kingdomVO.kID));
      }
    }
  };
  CastleHandleKingdomDialogSupport.prototype.showHelp = function () {
    y.CastleDialogHandler.getInstance().showHelper("", l.Localize.text("help_" + this.kingdomVO.kingdomName + "_start"));
  };
  return CastleHandleKingdomDialogSupport;
}(_.CastleDialogSubLayer);
exports.CastleHandleKingdomDialogSupport = f;
var O = require("./160.js");
var E = require("./29.js");
var y = require("./9.js");
var b = require("./208.js");
var D = require("./1765.js");
var I = require("./1074.js");
var T = require("./1091.js");
var v = require("./664.js");
var S = require("./1072.js");
s.classImplementsInterfaces(f, "ICollectableRendererList", "ISublayer");