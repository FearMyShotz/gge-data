Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./6.js");
var u = require("./51.js");
var d = require("./2394.js");
var p = require("./4.js");
var h = require("./142.js");
var g = require("./33.js");
var C = require("./106.js");
var _ = require("./738.js");
var m = function (e) {
  function CastlePostSendGoodsDialog(t = null) {
    return e.call(this, t || CastlePostSendGoodsDialog.NAME) || this;
  }
  n.__extends(CastlePostSendGoodsDialog, e);
  CastlePostSendGoodsDialog.prototype.showLoaded = function (t = null) {
    C.CharacterHelper.createCharacterBig(u.ClientConstCharacter.CHAR_ID_MERCHANT, this.dialogDisp.mc_char, 190, 135);
    e.prototype.showLoaded.call(this, t);
  };
  CastlePostSendGoodsDialog.prototype.sendGoods = function () {
    var e = this.selectedHorse;
    var t = c.int(e ? e.wodId : -1);
    p.CastleModel.smartfoxClient.sendCommandVO(new d.C2SCreateMarketMovementVO(p.CastleModel.userData.castleList.getKingdomIdByCastleId(this.tradeVO.startCastleID), this.tradeVO.startCastleID, this.tradeVO.targetCastlePosX, this.tradeVO.targetCastlePosY, t, this.tradeVO.goods, this.checkForHorsePayedWithPegasusTickets(), this.getSlowDownOffsetInSeconds()));
    this.callHideFunction();
    this.hide();
  };
  CastlePostSendGoodsDialog.prototype.callHideFunction = function () {
    if (this.dialogProperties.hideFunction != null) {
      this.dialogProperties.hideFunction();
    }
  };
  Object.defineProperty(CastlePostSendGoodsDialog.prototype, "tradeVO", {
    get: function () {
      return this.dialogProperties.castleTraveVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePostSendGoodsDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastlePostSendGoodsDialog.prototype.startTravelAction = function () {
    this.sendGoods();
  };
  Object.defineProperty(CastlePostSendGoodsDialog.prototype, "distance", {
    get: function () {
      return this.tradeVO.travelDistance;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(_.ACastlePostActionDialog.prototype, "distance").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePostSendGoodsDialog.prototype, "cost", {
    get: function () {
      return this.tradeVO.costs;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(_.ACastlePostActionDialog.prototype, "cost").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePostSendGoodsDialog.prototype, "unlockedHorses", {
    get: function () {
      return p.CastleModel.permanentCastleData.getCastleByWorldAreaId(this.tradeVO.startCastleID, this.tradeVO.kingdomId).horsesVO.horses;
    },
    enumerable: true,
    configurable: true
  });
  CastlePostSendGoodsDialog.prototype.getTravelBoost = function (e) {
    return c.int(e.marketBoost);
  };
  CastlePostSendGoodsDialog.prototype.getBoostCostC1 = function (e) {
    return c.int(p.CastleModel.costsData.getFinalCostsC1(s.MarketConst.getHorseCostC1(this.distance, this.tradeVO.unitCount, e.costFactorC1)));
  };
  CastlePostSendGoodsDialog.prototype.getBoostCostC2 = function (e) {
    return c.int(p.CastleModel.costsData.getFinalCostsC2(s.MarketConst.getHorseCostC2(this.distance, this.tradeVO.unitCount, e.isPayedWithPegasusTickets ? 0 : e.costFactorC2)));
  };
  Object.defineProperty(CastlePostSendGoodsDialog.prototype, "normalTravelTime", {
    get: function () {
      return this.tradeVO.travelTime;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(_.ACastlePostActionDialog.prototype, "normalTravelTime").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastlePostSendGoodsDialog.prototype.getBoostedTravelTime = function (e) {
    var t;
    var i;
    var n = 1;
    if (this.tradeVO.targetOwner.isOwnOwnerInfo) {
      n = 1 + p.CastleModel.researchData.getResearchEffectValue(g.EffectTypeEnum.EFFECT_TYPE_MARKET_SPEED_BONUS, -1, -1, -1, this.tradeVO.targetOwner).strength / 100;
    } else if (p.CastleModel.allianceData && p.CastleModel.allianceData.myAllianceVO) {
      t = p.CastleModel.allianceData.myAllianceVO;
      if ((i = p.CastleModel.allianceBuffData.getAllianceBuffVoBySeriesIDAndLevel(a.AllianceConst.TYPE_MARKET_SPEED_BOOST, t.getBoostLevel(a.AllianceConst.TYPE_MARKET_SPEED_BOOST)).getBonusVOByEffectType(g.EffectTypeEnum.EFFECT_TYPE_MARKET_SPEED_BONUS)) && i.effect.isForAreaType(this.tradeVO.targetAreaType) && i.effect.checkPlayerRelation(this.tradeVO.targetOwner)) {
        n += i.strength / 100;
      }
    }
    if (this.isTravelTimeSubscriptionBoosted) {
      n += p.CastleModel.subscriptionData.getEffectValue(g.EffectTypeEnum.EFFECT_TYPE_MARKET_SPEED_BONUS, this.tradeVO.targetAreaType, this.tradeVO.kingdomId) / 100;
    }
    n += p.CastleModel.globalEffectData.getBonusByEffectType(g.EffectTypeEnum.EFFECT_TYPE_SPEED_BONUS, this.tradeVO.targetAreaType, this.tradeVO.kingdomId) / 100;
    n += this.tradeVO.getAreaSpeedBoostModifier(this.effectCondition) / 100;
    n += f.CastleTitleSystemHelper.returnTitleEffectValues([g.EffectTypeEnum.EFFECT_TYPE_MARKET_SPEED_BONUS, g.EffectTypeEnum.EFFECT_TYPE_SPEED_BONUS], -1, -1, this.tradeVO.kingdomId).strength / 100;
    return c.int(r.TravelConst.getTravelTimeWithHorse(s.MarketConst.MARKET_TRAVEL_SPEED, this.distance, n, e, 0, this.distance, false));
  };
  Object.defineProperty(CastlePostSendGoodsDialog.prototype, "effectCondition", {
    get: function () {
      return new h.CastleEffectConditionVO(this.tradeVO.targetAreaType, this.tradeVO.kingdomId, -1, this.tradeVO.targetOwner);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePostSendGoodsDialog.prototype, "isTravelTimeSubscriptionBoosted", {
    get: function () {
      return this.tradeVO.isTravelTimeSubscriptionBoosted;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(_.ACastlePostActionDialog.prototype, "isTravelTimeSubscriptionBoosted").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePostSendGoodsDialog.prototype, "shipsInsteadOfHorses", {
    get: function () {
      return this.tradeVO.kingdomId == l.WorldIsland.KINGDOM_ID;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(_.ACastlePostActionDialog.prototype, "shipsInsteadOfHorses").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastlePostSendGoodsDialog.NAME = "CastlePostSendGoods";
  return CastlePostSendGoodsDialog;
}(_.ACastlePostActionDialog);
exports.CastlePostSendGoodsDialog = m;
var f = require("./117.js");
o.classImplementsInterfaces(m, "ICollectableRendererList");