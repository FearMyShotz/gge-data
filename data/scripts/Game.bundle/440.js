Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./2.js");
var c = require("./2.js");
var u = require("./1.js");
var d = require("./1.js");
var p = require("./5.js");
var h = require("./5.js");
var g = require("./5.js");
var C = require("./5.js");
var _ = require("./5.js");
var m = require("./5.js");
var f = require("./3.js");
var O = require("./3.js");
var E = require("./3.js");
var y = require("./3.js");
var b = require("./3.js");
var D = require("./6.js");
var I = require("./18.js");
var T = require("./16.js");
var v = require("./28.js");
var S = require("./374.js");
var A = require("./243.js");
var L = require("./21.js");
var P = require("./389.js");
var M = require("./423.js");
var R = require("./221.js");
var V = require("./580.js");
var x = require("./15.js");
var w = require("./4.js");
var B = require("./269.js");
var F = require("./142.js");
var N = require("./33.js");
var k = require("./1345.js");
var U = require("./223.js");
var G = require("./24.js");
var H = require("./42.js");
var j = require("./8.js");
var W = require("./117.js");
var Y = require("./185.js");
var K = require("./11.js");
var z = require("./351.js");
var q = createjs.Point;
var X = function (e) {
  function CastleSendGoodsDialog() {
    var t = this;
    t._dataReceived = false;
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastleSendGoodsDialog.NAME) || this;
  }
  n.__extends(CastleSendGoodsDialog, e);
  CastleSendGoodsDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this._sourceCastleSelector ||= new $.CastleSelectorComponent(this.dialogDisp.mc_sourceCastle);
    this._targetCastleSelector ||= new $.CastleSelectorComponent(this.dialogDisp.mc_targetCastle);
    this.charMerchantIcon = new G.CastleGoodgameExternalClip(CastleSendGoodsDialog.CHAR_ICON_ASSET_NAME, a.BasicModel.basicLoaderData.getVersionedItemAssetUrl(CastleSendGoodsDialog.CHAR_ICON_ASSET_NAME), null, 0, false);
    if (this.charMerchantIcon.isLoaded) {
      this.onClipLoaded(this.charMerchantIcon);
    } else {
      this.charMerchantIcon.clipLoaded.add(this.bindFunction(this.onClipLoaded));
    }
    this.setTexts();
    this._dataReceived = false;
    x.CastleBasicController.getInstance().addEventListener(A.CastleEilandEvent.EILAND_RESET, this.bindFunction(this.handleIslandsReset));
    this.initBasicButtons([this.dialogDisp.mc_bubble.btn_booster, this.dialogDisp.mc_bubble, this.dialogDisp.btn_cancle, this.dialogDisp.btn_close, this.dialogDisp.btn_ok]);
  };
  CastleSendGoodsDialog.prototype.handleIslandsReset = function (e) {
    this.hide();
  };
  CastleSendGoodsDialog.prototype.setTexts = function () {
    this.i_booster_txt_booster = this.textFieldManager.registerTextField(this.dialogDisp.mc_bubble.txt_booster, new y.LocalizedTextVO(""));
    this.i_booster_txt_booster.verticalAlign = H.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    var e = w.CastleModel.boostData.caravanOverloaderVO.bonusValueDifference;
    this.i_txt_booster = this.textFieldManager.registerTextField(this.dialogDisp.mc_bubble.btn_booster.tfAmount, new E.LocalizedNumberVO(e));
    this.i_icarriage_txt_info = this.textFieldManager.registerTextField(this.dialogDisp.info_carriges.txt_info, new y.LocalizedTextVO(l.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [0]));
    this.i_icarriage_txt_info.autoFitToBounds = true;
    this.i_storage_txt_info = this.textFieldManager.registerTextField(this.dialogDisp.info_storage.txt_info, new y.LocalizedTextVO(l.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [0]));
    this.i_storage_txt_info.autoFitToBounds = true;
    this.i_tcost_txt_info = this.textFieldManager.registerTextField(this.dialogDisp.info_travelCost.txt_info, new b.TextVO(""));
    this.i_tcost_txt_info.autoFitToBounds = true;
    this.i_txt_date = this.textFieldManager.registerTextField(this.dialogDisp.txt_date, new b.TextVO(""));
    this.i_txt_time = this.textFieldManager.registerTextField(this.dialogDisp.txt_time, new b.TextVO(""));
    this.i_tTime_txt_info = this.textFieldManager.registerTextField(this.dialogDisp.mc_travelTime.txt_info, new b.TextVO(""));
    this.i_tTime_txt_info.autoFitToBounds = true;
    this.i_dist_txt_info = this.textFieldManager.registerTextField(this.dialogDisp.mc_distance.txt_info, new b.TextVO(""));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new y.LocalizedTextVO("dialog_sendGoods_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_arrival, new y.LocalizedTextVO(l.GenericTextIds.VALUE_COLON, [O.Localize.text("dialog_postAttack_arrival")]));
    this.dialogDisp.info_carriges.toolTipText = "dialog_sendGoods_avalibleCarriges";
    this.dialogDisp.info_storage.toolTipText = "dialog_sendGoods_avalibleStorage";
    this.dialogDisp.info_storage.autoFitToBounds = true;
    this.dialogDisp.info_travelCost.toolTipText = "travelCost";
    this.dialogDisp.mc_travelTime.toolTipText = "travelTime";
    this.dialogDisp.mc_distance.toolTipText = "distance";
  };
  CastleSendGoodsDialog.prototype.onClipLoaded = function (e) {
    this.dialogDisp.charHolder.addChild(e.currentshownDisplayObject);
  };
  CastleSendGoodsDialog.prototype.manageBoosterText = function () {
    if (w.CastleModel.boostData.caravanOverloaderVO.isMaxLevel) {
      if (this.i_booster_txt_booster.textContentVO) {
        this.i_booster_txt_booster.textContentVO.textId = "dialog_caravanGuy_fullCapacity_copy";
      }
      this.dialogDisp.mc_bubble.toolTipText = null;
      this.dialogDisp.mc_bubble.mc_discount.visible = false;
      this.i_txt_booster.textContentVO = new b.TextVO("-");
      j.ButtonHelper.enableButton(this.dialogDisp.mc_bubble, false);
    } else {
      if (this.i_booster_txt_booster.textContentVO) {
        this.i_booster_txt_booster.textContentVO.textId = "dialog_caravanGuy_capacity_copy";
      }
      j.ButtonHelper.enableButton(this.dialogDisp.mc_bubble, true);
      if (this.i_txt_booster.textContentVO) {
        this.i_txt_booster.textContentVO.numberValue = w.CastleModel.boostData.caravanOverloaderVO.bonusValueDifference;
      }
      this.dialogDisp.mc_bubble.toolTipText = "dialog_sendGoods_BuyCapacity_tooltip";
    }
    var e = D.int(w.CastleModel.boosterSaleData.getDiscount(g.BoosterConst.CARAVAN_OVERLOADER));
    if (!w.CastleModel.boostData.caravanOverloaderVO.isMaxLevel && e > 0) {
      this.dialogDisp.mc_bubble.mc_discount.visible = true;
      this.textFieldManager.registerTextField(this.dialogDisp.mc_bubble.mc_discount.txt_value, new y.LocalizedTextVO(l.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT, [e]));
    } else {
      this.dialogDisp.mc_bubble.mc_discount.visible = false;
    }
  };
  CastleSendGoodsDialog.prototype.setBoosterItem = function () {
    if (this._tradeCastleVO && this._tradeComponent) {
      this.manageBoosterText();
      var e = this._tradeComponent.getSelectedSum();
      this.i_storage_txt_info.textContentVO.textReplacements = [this._tradeCastleVO.getMaxCapacityForCurrentLevel(this.effectCondition) - e, this._tradeCastleVO.getMaxCapacityForCurrentLevel(this.effectCondition)];
      this.i_icarriage_txt_info.textContentVO.textReplacements = [this._tradeCastleVO.availableCarriages - w.CastleModel.boostData.getCarriagesNeededToTransport(e, w.CastleModel.boostData.caravanOverloaderVO.level, this.capacityBoost, this.baronFixBonus), this._tradeCastleVO.availableCarriages];
    }
  };
  Object.defineProperty(CastleSendGoodsDialog.prototype, "capacityBoost", {
    get: function () {
      return this._tradeCastleVO.getCapacityBoost(this.effectCondition);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSendGoodsDialog.prototype, "baronFixBonus", {
    get: function () {
      return this._tradeCastleVO.getCapacityBonus(this.effectCondition);
    },
    enumerable: true,
    configurable: true
  });
  CastleSendGoodsDialog.prototype.receiveDestinationCastles = function () {
    this.dialogDisp.tradeComponent.visible = false;
    j.ButtonHelper.enableButton(this.dialogDisp.btn_ok, false);
    x.CastleBasicController.getInstance().addEventListener(P.CastlePlayerInfoEvent.GET_PLAYERINFO, this.bindFunction(this.handleCastlesList));
    w.CastleModel.smartfoxClient.sendCommandVO(new S.C2SGetDetailPlayerInfo(this.targetPlayerId));
  };
  CastleSendGoodsDialog.prototype.handleCastlesList = function (e) {
    var t = e.params[0];
    var i = w.CastleModel.userData.isInAlliance && t.list[0] && t.list[0].ownerInfo.allianceID == w.CastleModel.userData.allianceID;
    if (t.ownerID == this.targetPlayerId) {
      var n = new Z.CastleListVO();
      for (var a = 0, s = t.list; a < s.length; a++) {
        var r = s[a];
        if (r !== undefined && (!d.instanceOfClass(r, "MonumentMapobjectVO") || i || r.isOwnMapobject) && (!d.instanceOfClass(r, "LaboratoryMapobjectVO") || i || r.isOwnMapobject)) {
          if (!d.instanceOfClass(r, "KingstowerMapobjectVO")) {
            n.addCastle(r, r.kingdomID);
          }
        }
      }
      this._dataReceived = true;
      x.CastleBasicController.getInstance().removeEventListener(P.CastlePlayerInfoEvent.GET_PLAYERINFO, this.bindFunction(this.handleCastlesList));
      this._targetCastleList = n;
      var l = this._sourceCastleList.list;
      var c = this._targetCastleList.list;
      var u = this.getKingdomsSet(l);
      var p = this.getKingdomsSet(c);
      var h = [];
      var g = [];
      var _ = [];
      var m = [];
      this.checkKingdoms(l, p, "dialog_sendGoods_unlockCastleReceiver_tooltip", h, g);
      this.checkKingdoms(c, u, "dialog_sendGoods_unlockCastlePlayer_tooltip", _, m);
      this.checkMarkets(l, "dialog_sendGoods_buildMarket_tooltip", h, g);
      this._sourceCastleSelector.initComponent(w.CastleModel.otherPlayerData.getOwnInfoVO(), this._sourceCastleList, w.CastleModel.worldmapCameraData.currentSelectedCastleInActionPanel, null, -1, h, g);
      this._targetCastleSelector.initComponent(this.dialogProperties.worldmapObjectVO.ownerInfo, this._targetCastleList, null, null, -1, _, m);
      this._sourceCastleSelector.castleList.disp.addEventListener(o.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onSelectSourceCastle));
      this._targetCastleSelector.castleList.disp.addEventListener(o.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onSelectTargetCastle));
      var f = w.CastleModel.worldmapCameraData.currentSelectedCastleInActionPanel;
      var O = D.int(l.indexOf(f));
      if (O < 0 || !h[O]) {
        if ((O = D.int(h.indexOf(true))) < 0) {
          O = 0;
        }
        f = l[O];
      }
      this.dialogDisp.tradeComponent.visible = true;
      var E = this._tradeCastleVO.kingdomId == C.FactionConst.KINGDOM_ID && this.dialogProperties.worldmapObjectVO && this.dialogProperties.worldmapObjectVO.kingdomID == C.FactionConst.KINGDOM_ID;
      this._tradeComponent = new ee.CastleSendGoodsComponent(this.dialogDisp.tradeComponent, this.getSendGoodsFromTradeVO(this._tradeCastleVO), this.bindFunction(this.updateTextfields), E);
      this.setBoosterItem();
      this._sourceCastleSelector.changeSelectedCastle(f);
      if (this._targetCastleSelector.castleIsEnabled(this.dialogProperties.worldmapObjectVO)) {
        this._targetCastleSelector.changeSelectedCastle(this.dialogProperties.worldmapObjectVO);
      }
      this.updateButtons();
    }
  };
  CastleSendGoodsDialog.prototype.checkMarkets = function (e, t, i, n) {
    var o = new Map();
    for (var a = 0, s = this.dialogProperties.tradeDataInfoVO.castleList; a < s.length; a++) {
      var r = s[a];
      if (r !== undefined) {
        o.set(r.kingdomId + "_" + r.startCastleID, r.totalCarriages);
      }
    }
    for (var l = 0; l < e.length; l++) {
      if (i[l]) {
        var c = e[l];
        if (o.get(c.kingdomID + "_" + c.objectId) == 0) {
          i[l] = false;
          n[l] = {
            t: t,
            p: this.getKingdomNameById(c.kingdomID)
          };
        }
      }
    }
  };
  CastleSendGoodsDialog.prototype.checkKingdoms = function (e, t, i, n, o) {
    for (var a = 0; a < e.length; a++) {
      var s = e[a];
      if (t.get(s.kingdomID)) {
        n[a] = true;
        o[a] = "";
      } else {
        n[a] = false;
        o[a] = {
          t: i,
          p: this.getKingdomNameById(s.kingdomID)
        };
      }
    }
  };
  CastleSendGoodsDialog.prototype.getKingdomNameById = function (e) {
    return w.CastleModel.kingdomData.getKingdomVOByID(e).kingdomNameString;
  };
  CastleSendGoodsDialog.prototype.getKingdomsSet = function (e) {
    var t = new Map();
    if (e != null) {
      for (var i = 0, n = e; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          t.set(o.kingdomID, true);
        }
      }
    }
    return t;
  };
  Object.defineProperty(CastleSendGoodsDialog.prototype, "targetPlayerId", {
    get: function () {
      return this.dialogProperties.worldmapObjectVO.ownerInfo.playerID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSendGoodsDialog.prototype, "effectCondition", {
    get: function () {
      return new F.CastleEffectConditionVO(this.targetCastleVO.areaType, this.targetCastleVO.spaceID, -1, this.targetCastleVO.ownerInfo);
    },
    enumerable: true,
    configurable: true
  });
  CastleSendGoodsDialog.prototype.getSendGoodsFromTradeVO = function (e) {
    return new k.CastleSendGoodsVO(e.getResourcesAsCollectableList(), e.getMaxCapacityForCurrentLevel(this.effectCondition), this.targetCastleVO);
  };
  CastleSendGoodsDialog.prototype.updateTextfields = function () {
    if (this._tradeComponent) {
      var e = this._tradeComponent.getSelectedSum();
      var t = D.int(w.CastleModel.costsData.getFinalCostsC1(_.MarketConst.getMarketTravelCostC1(this.getDistance(), w.CastleModel.boostData.getCarriagesNeededToTransport(this._tradeComponent.getSelectedSum(), w.CastleModel.boostData.caravanOverloaderVO.level, this.capacityBoost, this.baronFixBonus))));
      var i = this._tradeCastleVO.availableCarriages;
      var n = D.int(w.CastleModel.boostData.getCarriagesNeededToTransport(e, w.CastleModel.boostData.caravanOverloaderVO.level, this.capacityBoost, this.baronFixBonus));
      if (this.i_icarriage_txt_info && this.i_icarriage_txt_info.textContentVO) {
        this.i_icarriage_txt_info.textContentVO.textReplacements = [i - n, i];
      }
      if (this.i_storage_txt_info && this.i_storage_txt_info.textContentVO) {
        this.i_storage_txt_info.textContentVO.textReplacements = [this._tradeCastleVO.getMaxCapacityForCurrentLevel(this.effectCondition) - e, this._tradeCastleVO.getMaxCapacityForCurrentLevel(this.effectCondition)];
        Y.SubscriptionHelper.showSubscriptionStarToTextField(this.i_storage_txt_info, this._tradeCastleVO.isSubscriptionBuffActive, 17, new q(-2, 0));
      }
      if (this.i_tcost_txt_info && this.i_tcost_txt_info.textContentVO) {
        this.i_tcost_txt_info.textContentVO.stringValue = String(t);
        this.i_tcost_txt_info.color = t > w.CastleModel.currencyData.c1Amount ? T.ClientConstColor.FONT_INSUFFICIENT_COLOR : T.ClientConstColor.FONT_DEFAULT_COLOR;
      }
    }
  };
  CastleSendGoodsDialog.prototype.onMonumentUpdated = function (e) {
    if (!e.target.canBeUpgradedByMe()) {
      this.layoutManager.hideDialog(oe.CastlePostSendGoodsDialog);
      this.layoutManager.hideDialog(ae.CastlePostSendGoodsHorseDialog);
      this.hide();
    }
  };
  CastleSendGoodsDialog.prototype.onLaboratoryUpdated = function (e) {
    if (!e.target.canBeUpgradedByMe()) {
      this.layoutManager.hideDialog(oe.CastlePostSendGoodsDialog);
      this.layoutManager.hideDialog(ae.CastlePostSendGoodsHorseDialog);
      this.hide();
    }
  };
  CastleSendGoodsDialog.prototype.showLoaded = function (t = null) {
    this._dataReceived = false;
    this._sourceCastleList = w.CastleModel.userData.castleList;
    if (this._sourceCastleList.castleAmount < 1) {
      this.hide();
    } else {
      if (this._tradeComponent) {
        this._tradeComponent.hide();
      }
      this._tradeInfoVO = this.dialogProperties.tradeDataInfoVO;
      this._tradeCastleVO = this._tradeInfoVO.getCastleInfoById(w.CastleModel.worldmapCameraData.currentSelectedCastleInActionPanel.objectId);
      this._tradeCastleVO ||= this._tradeInfoVO.getCastleInfoById(w.CastleModel.userData.castleList.getMainCastleByKingdomID(w.CastleModel.kingdomData.activeKingdomID).objectId);
      if (d.instanceOfClass(this.dialogProperties.worldmapObjectVO, "MonumentMapobjectVO")) {
        this.controller.addEventListener(V.MonumentEvent.MONUMENTS_RESET_WARNING, this.bindFunction(this.onMonumentReset));
        this.dialogProperties.worldmapObjectVO.addEventListener(V.MonumentEvent.MONUMENT_UPDATED, this.bindFunction(this.onMonumentUpdated));
      }
      if (d.instanceOfClass(this.dialogProperties.worldmapObjectVO, "LaboratoryMapobjectVO")) {
        this.controller.addEventListener(M.LaboratoryEvent.LABORATORY_RESET_WARNING, this.bindFunction(this.onLaboratoryReset));
        this.dialogProperties.worldmapObjectVO.addEventListener(M.LaboratoryEvent.LABORATORY_UPDATED, this.bindFunction(this.onLaboratoryUpdated));
      }
      w.CastleModel.boostData.addEventListener(R.CastleResourceBoosterEvent.BOOSTERDATA_REFRESHED, this.bindFunction(this.onBoosterDataChanges));
      w.CastleModel.boosterSaleData.addEventListener(B.CastleBoosterSaleData.BOOSTER_SALE_UPDATE, this.bindFunction(this.onBoosterDataChanges));
      this._tradeInfoVO = this.dialogProperties.tradeDataInfoVO;
      this.receiveDestinationCastles();
      this.manageBoosterText();
      w.CastleModel.timerData.addEventListener(L.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
      if (this._sourceCastleList.castleAmount > 0) {
        e.prototype.showLoaded.call(this, t);
      } else {
        this.hide();
      }
    }
  };
  CastleSendGoodsDialog.prototype.onTimerUpdate = function (e) {
    if (this._dataReceived && this.targetCastleVO) {
      var t = this.getDistance();
      this.setArrivalDateAndTime(this.getTravelTime(t, this.targetCastleVO, this.isTravelTimeSubscriptionBoosted));
    }
  };
  CastleSendGoodsDialog.prototype.onMonumentReset = function (e) {
    if (this.dialogProperties.worldmapObjectVO.areaType == m.WorldConst.AREA_TYPE_MONUMENT) {
      this.hide();
    }
  };
  CastleSendGoodsDialog.prototype.onLaboratoryReset = function (e) {
    if (this.dialogProperties.worldmapObjectVO.areaType == m.WorldConst.AREA_TYPE_LABORATORY) {
      this.hide();
    }
  };
  CastleSendGoodsDialog.prototype.onBoosterDataChanges = function (e) {
    this.setBoosterItem();
    this.updateTextfields();
    if (this._tradeComponent) {
      this._tradeComponent.initResourceCollectors();
    }
    this.onSelectSourceCastle();
  };
  CastleSendGoodsDialog.prototype.onSelectSourceCastle = function (e = null) {
    if (this._targetCastleList && (!this.targetCastleVO || this.sourceCastleVO && this.sourceCastleVO.kingdomID != this.targetCastleVO.kingdomID)) {
      var t = this._targetCastleList.getFilteredList(this.sourceCastleVO.kingdomID);
      if (t && t.length > 0) {
        this._targetCastleSelector.changeSelectedCastle(t[0]);
      }
    }
    this.updateDistanceAndTime();
    this.updateTextfields();
    this.updateButtons();
    this.updateTradeComponent();
  };
  CastleSendGoodsDialog.prototype.updateButtons = function () {
    j.ButtonHelper.enableButton(this.dialogDisp.btn_ok, this.sourceCastleVO && this.targetCastleVO && this.sourceCastleVO.objectId != this.targetCastleVO.objectId && this._sourceCastleSelector.castleIsEnabled(this._sourceCastleSelector.selectedCastleVO));
    this.dialogDisp.btn_ok.toolTipText = null;
    if (this.sourceCastleVO && this.targetCastleVO) {
      if (this.sourceCastleVO.objectId == this.targetCastleVO.objectId) {
        this.dialogDisp.btn_ok.toolTipText = "alert_trade_locationsIdentical_tt";
      } else if (!this._sourceCastleSelector.castleIsEnabled(this._sourceCastleSelector.selectedCastleVO)) {
        this.dialogDisp.btn_ok.toolTipText = "alert_trade_locationsDifferentKingdom_tt";
      }
    }
  };
  CastleSendGoodsDialog.prototype.onSelectTargetCastle = function (e = null) {
    if (this.sourceCastleVO.kingdomID != this.targetCastleVO.kingdomID) {
      this._sourceCastleSelector.changeSelectedCastle(this._sourceCastleList.getFilteredList(this.targetCastleVO.kingdomID)[0]);
    }
    this.updateDistanceAndTime();
    this.updateTextfields();
    this.updateButtons();
    this.updateTradeComponent();
  };
  CastleSendGoodsDialog.prototype.updateTradeComponent = function () {
    if (this._tradeInfoVO && this.sourceCastleVO) {
      var e = this._tradeInfoVO.getCastleInfoById(this.sourceCastleVO.objectId);
      this._tradeCastleVO = e;
      if (this._tradeCastleVO && this._tradeComponent) {
        this._tradeComponent.changeCastle(this.getSendGoodsFromTradeVO(this._tradeCastleVO));
        this.updateDistanceAndTime();
      }
    }
  };
  CastleSendGoodsDialog.prototype.updateDistanceAndTime = function () {
    if (this._tradeInfoVO && this.targetCastleVO) {
      var e = this.getDistance();
      this.setArrivalDateAndTime(this.getTravelTime(e, this.targetCastleVO, this.isTravelTimeSubscriptionBoosted));
      this.i_dist_txt_info.textContentVO.stringValue = String(e);
    }
  };
  Object.defineProperty(CastleSendGoodsDialog.prototype, "isTravelTimeSubscriptionBoosted", {
    get: function () {
      return w.CastleModel.userData.isInAlliance && this.targetCastleVO.ownerInfo.allianceID == w.CastleModel.userData.allianceID && w.CastleModel.subscriptionData.getEffectValue(N.EffectTypeEnum.EFFECT_TYPE_MARKET_SPEED_BONUS, this.targetCastleVO.areaType, this.targetCastleVO.kingdomID) > 0;
    },
    enumerable: true,
    configurable: true
  });
  CastleSendGoodsDialog.prototype.getDistance = function () {
    if (this._dataReceived && this.sourceCastleVO && this.targetCastleVO) {
      return U.MapHelper.getDistanceByMapobjects(this.sourceCastleVO, this.targetCastleVO);
    } else {
      return 0;
    }
  };
  CastleSendGoodsDialog.prototype.getTravelTime = function (e, t, i) {
    var n;
    var o;
    var a = 1;
    var s = t.ownerInfo;
    if (s.isOwnOwnerInfo) {
      a = 1 + w.CastleModel.researchData.getResearchEffectValue(N.EffectTypeEnum.EFFECT_TYPE_MARKET_SPEED_BONUS, -1, -1, -1, s).strength / 100;
    } else if (w.CastleModel.allianceData && w.CastleModel.allianceData.myAllianceVO) {
      n = w.CastleModel.allianceData.myAllianceVO;
      if ((o = w.CastleModel.allianceBuffData.getAllianceBuffVoBySeriesIDAndLevel(h.AllianceConst.TYPE_MARKET_SPEED_BOOST, n.getBoostLevel(h.AllianceConst.TYPE_MARKET_SPEED_BOOST)).getBonusVOByEffectType(N.EffectTypeEnum.EFFECT_TYPE_MARKET_SPEED_BONUS)) && o.effect.isForAreaType(t.areaType) && o.effect.checkPlayerRelation(s)) {
        a += o.strength / 100;
      }
    }
    if (i) {
      a += w.CastleModel.subscriptionData.getEffectValue(N.EffectTypeEnum.EFFECT_TYPE_MARKET_SPEED_BONUS, t.areaType, t.kingdomID) / 100;
    }
    a += w.CastleModel.globalEffectData.getBonusByEffectType(N.EffectTypeEnum.EFFECT_TYPE_SPEED_BONUS, t.areaType, t.kingdomID) / 100;
    a += this._tradeCastleVO.getAreaSpeedBoostModifier(this.effectCondition) / 100;
    var r = this.targetCastleVO.spaceID;
    var l = W.CastleTitleSystemHelper.returnTitleEffectValues([N.EffectTypeEnum.EFFECT_TYPE_MARKET_SPEED_BONUS, N.EffectTypeEnum.EFFECT_TYPE_SPEED_BONUS], -1, -1, r).strength;
    return D.int(p.TravelConst.getTravelTimeWithTitle(_.MarketConst.MARKET_TRAVEL_SPEED, e, a, 0, l, false));
  };
  Object.defineProperty(CastleSendGoodsDialog.prototype, "sourceCastleVO", {
    get: function () {
      return this._sourceCastleSelector.castleList.selectedData;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSendGoodsDialog.prototype, "targetCastleVO", {
    get: function () {
      return this._targetCastleSelector.castleList.selectedData;
    },
    enumerable: true,
    configurable: true
  });
  CastleSendGoodsDialog.prototype.onClick = function (t) {
    if (!this.isLocked && j.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_ok:
          this.sendGoodsCastle();
          break;
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancle:
          this.hide();
          break;
        case this.dialogDisp.mc_bubble:
        case this.dialogDisp.mc_bubble.btn_booster:
          if (this.dialogDisp.mc_bubble.btn_booster.enabled) {
            K.CastleExternalDialog.dialogHandler.registerDefaultDialogs(te.CastleBuyCaravanOverloaderDialog);
          }
      }
    }
  };
  CastleSendGoodsDialog.prototype.sendGoodsCastle = function () {
    var e;
    if (this._tradeComponent && (e = D.int(w.CastleModel.costsData.getFinalCostsC1(_.MarketConst.getMarketTravelCostC1(this.getDistance(), w.CastleModel.boostData.getCarriagesNeededToTransport(this._tradeComponent.getSelectedSum(), w.CastleModel.boostData.caravanOverloaderVO.level, this.capacityBoost, this.baronFixBonus))))) > w.CastleModel.currencyData.c1Amount) {
      K.CastleExternalDialog.dialogHandler.registerDefaultDialogs(ie.CastleNoMoneyC1Dialog, new z.CastleNoMoneyC1DialogProperties());
    } else if (this._tradeCastleVO.availableCarriages == 0) {
      K.CastleExternalDialog.dialogHandler.registerDefaultDialogs(ne.CastleStandardOkDialog, new s.BasicStandardOkDialogProperties(O.Localize.text("generic_alert_information"), O.Localize.text("dialog_sendGoods_noCarrige")));
    } else if (this._tradeComponent && this._tradeComponent.getSelectedSum() == 0) {
      K.CastleExternalDialog.dialogHandler.registerDefaultDialogs(ne.CastleStandardOkDialog, new s.BasicStandardOkDialogProperties(O.Localize.text("generic_alert_information"), O.Localize.text("dialog_sendGoods_noGoods")));
    } else {
      this._tradeCastleVO.targetCastlePosX = D.int(this.targetCastleVO.absAreaPosX);
      this._tradeCastleVO.targetCastlePosY = D.int(this.targetCastleVO.absAreaPosY);
      this._tradeCastleVO.targetOwner = this.targetCastleVO.ownerInfo;
      this._tradeCastleVO.goods = this.createC2SRewardList();
      this._tradeCastleVO.costs = e;
      this._tradeCastleVO.travelTime = D.int(this.getTravelTime(this.getDistance(), this.targetCastleVO, this.isTravelTimeSubscriptionBoosted));
      this._tradeCastleVO.isTravelTimeSubscriptionBoosted = this.isTravelTimeSubscriptionBoosted;
      this._tradeCastleVO.travelDistance = this.getDistance();
      if (this._tradeComponent) {
        this._tradeCastleVO.unitCount = D.int(w.CastleModel.boostData.getCarriagesNeededToTransport(this._tradeComponent.getSelectedSum(), w.CastleModel.boostData.caravanOverloaderVO.level, this.capacityBoost, this.baronFixBonus));
      }
      this._tradeCastleVO.targetAreaType = D.int(this.targetCastleVO.areaType);
      r.CommandController.instance.executeCommand(J.IngameClientCommands.OPEN_POSTATTACK_DIALOG_COMMAND, [I.ClientConstCastle.ACTION_TYPE_SENDGOODS, this.bindFunction(this.hide), this._tradeCastleVO, null]);
    }
  };
  CastleSendGoodsDialog.prototype.createC2SRewardList = function () {
    return Q.CollectableManager.parser.c2SCosts.createCostsListForServer(Q.CollectableManager.parser.createGoodsListSavefromList(this._tradeComponent.rewardList()));
  };
  CastleSendGoodsDialog.prototype.onMouseOut = function (t) {
    if (!this.isLocked) {
      e.prototype.onMouseOut.call(this, t);
    }
  };
  CastleSendGoodsDialog.prototype.onMouseOver = function (t) {
    if (!this.isLocked) {
      e.prototype.onMouseOver.call(this, t);
    }
  };
  CastleSendGoodsDialog.prototype.setArrivalDateAndTime = function (e) {
    var t = new Date();
    t.setTime(t.getTime() + e * v.ClientConstTime.SEC_2_MILLISEC);
    this.i_txt_date.textContentVO.stringValue = O.Localize.datetime(t, f.DateTimeStyle.SHORT, f.DateTimeStyle.NONE);
    this.i_txt_time.textContentVO.stringValue = O.Localize.datetime(t, f.DateTimeStyle.NONE, f.DateTimeStyle.SHORT);
    this.i_tTime_txt_info.textContentVO.stringValue = c.TimeStringHelper.getShortTimeStringBySeconds(e);
    Y.SubscriptionHelper.showSubscriptionStarToTextField(this.i_tTime_txt_info, this.isTravelTimeSubscriptionBoosted, 15, new q(-3, 0));
  };
  CastleSendGoodsDialog.prototype.hideLoaded = function (t = null) {
    if (this._tradeComponent != null) {
      this._tradeComponent.hide();
      this._tradeComponent = null;
    }
    w.CastleModel.boosterSaleData.removeEventListener(B.CastleBoosterSaleData.BOOSTER_SALE_UPDATE, this.bindFunction(this.onBoosterDataChanges));
    w.CastleModel.boostData.removeEventListener(R.CastleResourceBoosterEvent.BOOSTERDATA_REFRESHED, this.bindFunction(this.onBoosterDataChanges));
    w.CastleModel.timerData.removeEventListener(L.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    x.CastleBasicController.getInstance().removeEventListener(P.CastlePlayerInfoEvent.GET_PLAYERINFO, this.bindFunction(this.handleCastlesList));
    if (d.instanceOfClass(this.dialogProperties.worldmapObjectVO, "MonumentMapobjectVO")) {
      this.controller.removeEventListener(V.MonumentEvent.MONUMENTS_RESET_WARNING, this.bindFunction(this.onMonumentReset));
      this.dialogProperties.worldmapObjectVO.removeEventListener(V.MonumentEvent.MONUMENT_UPDATED, this.bindFunction(this.onMonumentUpdated));
    }
    if (d.instanceOfClass(this.dialogProperties.worldmapObjectVO, "LaboratoryMapobjectVO")) {
      this.controller.removeEventListener(M.LaboratoryEvent.LABORATORY_RESET_WARNING, this.bindFunction(this.onLaboratoryReset));
      this.dialogProperties.worldmapObjectVO.removeEventListener(M.LaboratoryEvent.LABORATORY_UPDATED, this.bindFunction(this.onLaboratoryUpdated));
    }
    this._sourceCastleSelector.castleList.disp.removeEventListener(o.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onSelectSourceCastle));
    this._targetCastleSelector.castleList.disp.removeEventListener(o.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onSelectTargetCastle));
    this._tradeInfoVO = null;
    e.prototype.hideLoaded.call(this, t);
  };
  Object.defineProperty(CastleSendGoodsDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleSendGoodsDialog.NAME = "CastleSendGoods_R";
  CastleSendGoodsDialog.CHAR_ICON_ASSET_NAME = "CharMerchantIcon";
  return CastleSendGoodsDialog;
}(K.CastleExternalDialog);
exports.CastleSendGoodsDialog = X;
var Q = require("./50.js");
var J = require("./29.js");
var Z = require("./373.js");
var $ = require("./321.js");
var ee = require("./1347.js");
var te = require("./1348.js");
var ie = require("./352.js");
var ne = require("./38.js");
var oe = require("./945.js");
var ae = require("./1353.js");
u.classImplementsInterfaces(X, "ICollectableRendererList");