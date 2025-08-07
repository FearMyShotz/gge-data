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
var u = require("./1099.js");
var d = require("./21.js");
var p = require("./183.js");
var h = require("./4.js");
var g = require("./8.js");
var C = require("./35.js");
var _ = require("./3757.js");
var m = function (e) {
  function CastleStartSeasonEventDialogSupport(t) {
    var i = e.call(this, t) || this;
    g.ButtonHelper.initBasicButtons([i.subLayerDisp.btn_enterWorld, i.subLayerDisp.btn_sendTroops, i.subLayerDisp.btn_sendResources, i.subLayerDisp.info_sendResources.btn_fullSkip, i.subLayerDisp.info_sendTroops.btn_fullSkip, i.subLayerDisp.info_sendResources.btn_minuteSkip, i.subLayerDisp.info_sendTroops.btn_minuteSkip]);
    i.i_sRess_txt_remainingTime = i.textFieldManager.registerTextField(i.subLayerDisp.info_sendResources.txt_remainingTime, new c.TextVO(""));
    i.i_sTroop_txt_remainingTime = i.textFieldManager.registerTextField(i.subLayerDisp.info_sendTroops.txt_remainingTime, new c.TextVO(""));
    return i;
  }
  n.__extends(CastleStartSeasonEventDialogSupport, e);
  CastleStartSeasonEventDialogSupport.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this.seasonEventVO = t;
    if (this.treasureMapVO) {
      this.subLayerDisp.btn_enterWorld.icon.gotoAndStop(this.buttonFrame);
      this.subLayerDisp.btn_sendTroops.gotoAndStop(this.buttonFrame);
      this.subLayerDisp.btn_sendResources.gotoAndStop(this.buttonFrame);
      this.subLayerDisp.info_sendResources.btn_fullSkip.gotoAndStop(1);
      this.subLayerDisp.info_sendResources.mc_icon.gotoAndStop(this.buttonFrame);
      this.subLayerDisp.info_sendResources.btn_fullSkip.enabled = true;
      this.subLayerDisp.info_sendResources.mc_icon.mouseChildren = false;
      this.subLayerDisp.info_sendTroops.btn_fullSkip.gotoAndStop(1);
      this.subLayerDisp.info_sendTroops.mc_icon.gotoAndStop(this.buttonFrame);
      this.subLayerDisp.info_sendTroops.btn_fullSkip.enabled = true;
      this.subLayerDisp.info_sendTroops.mc_icon.mouseChildren = false;
      if (this.layoutManager.isInEventState) {
        switch (h.CastleModel.specialEventData.activeSeasonVO.eventId) {
          case r.EventConst.EVENTTYPE_CRUSADE_THORNKING:
            this.subLayerDisp.btn_enterWorld.toolTipText = "dialog_thornkingOverview_alreadyEntered_tooltip";
            break;
          default:
            this.subLayerDisp.btn_enterWorld.toolTipText = "alert_not_available";
        }
      } else {
        this.subLayerDisp.btn_enterWorld.toolTipText = "dialog_season_changeWorlds";
      }
      this.subLayerDisp.btn_sendTroops.toolTipText = "dialog_season_sendTroops";
      this.subLayerDisp.btn_sendResources.toolTipText = "dialog_season_sendResources";
      this.subLayerDisp.info_sendResources.btn_fullSkip.toolTipText = {
        t: "dialog_season_skipTransfer",
        p: [h.CastleModel.costsData.getFinalCostsStringC2(this.treasureMapVO.skipCostC2)]
      };
      this.subLayerDisp.info_sendTroops.btn_fullSkip.toolTipText = {
        t: "dialog_season_skipTransfer",
        p: [h.CastleModel.costsData.getFinalCostsStringC2(this.treasureMapVO.skipCostC2)]
      };
      this.subLayerDisp.info_sendResources.btn_minuteSkip.toolTipText = "timeSkipButton_tooltip";
      this.subLayerDisp.info_sendTroops.btn_minuteSkip.toolTipText = "timeSkipButton_tooltip";
      g.ButtonHelper.enableButton(this.subLayerDisp.btn_sendTroops, true);
      this.refreshTransfers();
      h.CastleModel.timerData.addEventListener(d.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateTransfer));
      h.CastleModel.treasureMapData.addEventListener(p.CastleTreasureMapEvent.UNIT_TRANSFER_DATA_UPDATED, this.bindFunction(this.onUnitTransferDataUpdated));
      h.CastleModel.treasureMapData.addEventListener(p.CastleTreasureMapEvent.UNIT_TRANSFER_WERE_SEND, this.bindFunction(this.onUnitTransferWereSend));
      h.CastleModel.treasureMapData.addEventListener(p.CastleTreasureMapEvent.RESOURCE_TRANSFER_DATA_UPDATED, this.bindFunction(this.onResourceTransferDataUpdated));
      h.CastleModel.treasureMapData.addEventListener(p.CastleTreasureMapEvent.RESOURCE_TRANSFER_WERE_SEND, this.bindFunction(this.onResourceTransferWereSend));
      g.ButtonHelper.enableButton(this.subLayerDisp.btn_enterWorld, !this.layoutManager.isInEventState);
    } else {
      this.hide();
    }
  };
  CastleStartSeasonEventDialogSupport.prototype.onUpdateTransfer = function (e) {
    this.refreshTransfers();
  };
  CastleStartSeasonEventDialogSupport.prototype.hide = function () {
    h.CastleModel.timerData.removeEventListener(d.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateTransfer));
    h.CastleModel.treasureMapData.removeEventListener(p.CastleTreasureMapEvent.UNIT_TRANSFER_DATA_UPDATED, this.bindFunction(this.onUnitTransferDataUpdated));
    h.CastleModel.treasureMapData.removeEventListener(p.CastleTreasureMapEvent.UNIT_TRANSFER_WERE_SEND, this.bindFunction(this.onUnitTransferWereSend));
    h.CastleModel.treasureMapData.removeEventListener(p.CastleTreasureMapEvent.RESOURCE_TRANSFER_DATA_UPDATED, this.bindFunction(this.onResourceTransferDataUpdated));
    h.CastleModel.treasureMapData.removeEventListener(p.CastleTreasureMapEvent.RESOURCE_TRANSFER_WERE_SEND, this.bindFunction(this.onResourceTransferWereSend));
    e.prototype.hide.call(this);
  };
  CastleStartSeasonEventDialogSupport.prototype.onUnitTransferDataUpdated = function (e) {
    g.ButtonHelper.enableButton(this.subLayerDisp.btn_sendTroops, true);
    this.refreshTransfers();
  };
  CastleStartSeasonEventDialogSupport.prototype.onUnitTransferWereSend = function (e) {
    g.ButtonHelper.enableButton(this.subLayerDisp.btn_sendTroops, false);
  };
  CastleStartSeasonEventDialogSupport.prototype.onResourceTransferDataUpdated = function (e) {
    g.ButtonHelper.enableButton(this.subLayerDisp.btn_sendResources, true);
    this.refreshTransfers();
  };
  CastleStartSeasonEventDialogSupport.prototype.onResourceTransferWereSend = function (e) {
    g.ButtonHelper.enableButton(this.subLayerDisp.btn_sendResources, false);
  };
  CastleStartSeasonEventDialogSupport.prototype.refreshTransfers = function () {
    if (this.treasureMapVO) {
      this.subLayerDisp.info_sendTroops.visible = this.treasureMapVO.isTroopsTransferActive;
      this.subLayerDisp.info_sendResources.visible = this.treasureMapVO.isGoodsTransferActive;
      this.subLayerDisp.btn_sendTroops.visible = !this.treasureMapVO.isTroopsTransferActive;
      this.subLayerDisp.btn_sendResources.visible = !this.treasureMapVO.isGoodsTransferActive;
      this.subLayerDisp.info_sendResources.mc_icon.toolTipText = this.toolTipTextGoodsTransfer;
      this.subLayerDisp.info_sendTroops.mc_icon.toolTipText = this.toolTipTextUnitTransfer;
      this.refreshGoodsTransfer();
      this.refreshToopsTransfer();
    }
  };
  Object.defineProperty(CastleStartSeasonEventDialogSupport.prototype, "toolTipTextGoodsTransfer", {
    get: function () {
      if (this.treasureMapVO && this.treasureMapVO.isGoodsTransferActive) {
        return this.treasureMapVO.goods.getShortTooltip();
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStartSeasonEventDialogSupport.prototype, "toolTipTextUnitTransfer", {
    get: function () {
      if (!this.treasureMapVO || !this.treasureMapVO.isTroopsTransferActive) {
        return null;
      }
      var e = "";
      for (var t = 0, i = this.treasureMapVO.troops.getUnits(null); t < i.length; t++) {
        var n = i[t];
        e += n.inventoryAmount + "x " + l.Localize.text(n.getNameString()) + "\n";
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  CastleStartSeasonEventDialogSupport.prototype.refreshGoodsTransfer = function () {
    this.subLayerDisp.info_sendResources.mc_bar.scaleX = this.treasureMapVO.goodsTransferProgress;
    this.i_sRess_txt_remainingTime.textContentVO.stringValue = a.TimeStringHelper.getShortTimeStringBySeconds(this.treasureMapVO.remainingGoodsTransferTimeInSeconds, a.TimeStringHelper.TWO_TIME_FORMAT);
  };
  CastleStartSeasonEventDialogSupport.prototype.refreshToopsTransfer = function () {
    this.subLayerDisp.info_sendTroops.mc_bar.scaleX = this.treasureMapVO.troopsTransferProgress;
    this.i_sTroop_txt_remainingTime.textContentVO.stringValue = a.TimeStringHelper.getShortTimeStringBySeconds(this.treasureMapVO.remainingTroopsTransferTimeInSeconds, a.TimeStringHelper.TWO_TIME_FORMAT);
  };
  CastleStartSeasonEventDialogSupport.prototype.onMouseUp = function (e) {
    if (g.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.subLayerDisp.btn_enterWorld:
          if (this.seasonEventVO) {
            this.seasonEventVO.loadTreasureMapAssets(this.bindFunction(this.enterSeasonMap));
          }
          break;
        case this.subLayerDisp.btn_sendTroops:
          C.CastleDialogSubLayer.dialogHandler.registerDefaultDialogs(y.CastleTransferTroopsDialog, new b.CastleTransferTroopsToSeasonProperties());
          break;
        case this.subLayerDisp.btn_sendResources:
          C.CastleDialogSubLayer.dialogHandler.registerDefaultDialogs(v.CastleTransferResourcesDialog, new _.CastleTransferResToSeasonProperties());
          break;
        case this.subLayerDisp.info_sendResources.btn_fullSkip:
          h.CastleModel.smartfoxClient.sendCommandVO(new u.C2STreasuremapSkipTransferVO(this.seasonEventVO.eventId, this.treasureMapVO.mapID, 2));
          this.subLayerDisp.info_sendResources.btn_fullSkip.enabled = false;
          break;
        case this.subLayerDisp.info_sendTroops.btn_fullSkip:
          h.CastleModel.smartfoxClient.sendCommandVO(new u.C2STreasuremapSkipTransferVO(this.seasonEventVO.eventId, this.treasureMapVO.mapID, 1));
          this.subLayerDisp.info_sendTroops.btn_fullSkip.enabled = false;
          break;
        case this.subLayerDisp.info_sendResources.btn_minuteSkip:
          C.CastleDialogSubLayer.dialogHandler.registerDefaultDialogs(D.CastleMinuteSkipDialog, new I.SeasonTravelGoodsMinuteSkipProperties(this.treasureMapVO, this.seasonEventVO));
          break;
        case this.subLayerDisp.info_sendTroops.btn_minuteSkip:
          C.CastleDialogSubLayer.dialogHandler.registerDefaultDialogs(D.CastleMinuteSkipDialog, new T.SeasonTravelUnitsMinuteSkipProperties(this.treasureMapVO, this.seasonEventVO));
      }
    }
  };
  CastleStartSeasonEventDialogSupport.prototype.enterSeasonMap = function () {
    if (this.layoutManager.currentState == E.CastleLayoutManager.STATE_SEASON_WORLDMAP || this.layoutManager.isInTreasureCamp) {
      o.CommandController.instance.executeCommand(f.IngameClientCommands.JOIN_MAIN_CASTLE_COMMAND);
    } else {
      this.layoutManager.state = E.CastleLayoutManager.STATE_SEASON_WORLDMAP;
    }
  };
  Object.defineProperty(CastleStartSeasonEventDialogSupport.prototype, "treasureMapVO", {
    get: function () {
      if (this.seasonEventVO) {
        return this.seasonEventVO.treasureMapVO;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStartSeasonEventDialogSupport.prototype, "buttonFrame", {
    get: function () {
      switch (this.seasonEventVO.eventId) {
        case r.EventConst.EVENTTYPE_CRUSADE_THORNKING:
          return 5;
        case r.EventConst.EVENTTYPE_CRUSADE_SEAQUEEN:
          return 7;
        case r.EventConst.EVENTTYPE_CRUSADE_UNDERWORLD:
          return 9;
      }
      return 1;
    },
    enumerable: true,
    configurable: true
  });
  CastleStartSeasonEventDialogSupport.prototype.showHelp = function () {
    O.CastleDialogHandler.getInstance().showHelper("", l.Localize.text("help_" + this.seasonEventVO.eventType + "_start"));
  };
  return CastleStartSeasonEventDialogSupport;
}(C.CastleDialogSubLayer);
exports.CastleStartSeasonEventDialogSupport = m;
var f = require("./29.js");
var O = require("./9.js");
var E = require("./17.js");
var y = require("./664.js");
var b = require("./1755.js");
var D = require("./208.js");
var I = require("./3759.js");
var T = require("./3760.js");
var v = require("./1091.js");
s.classImplementsInterfaces(m, "ICollectableRendererList", "ISublayer");