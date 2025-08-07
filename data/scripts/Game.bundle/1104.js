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
var u = require("./18.js");
var d = require("./51.js");
var p = require("./3779.js");
var h = require("./4.js");
var g = require("./97.js");
var C = require("./35.js");
var _ = require("./107.js");
var m = require("./736.js");
var f = require("./106.js");
var O = function (e) {
  function CastlePostSpyDialog(t = null) {
    return e.call(this, t || CastlePostSpyDialog.NAME) || this;
  }
  n.__extends(CastlePostSpyDialog, e);
  CastlePostSpyDialog.prototype.showLoaded = function (t = null) {
    _.CharacterHelper.createCharacterBig(d.ClientConstCharacter.CHAR_ID_SPY, this.dialogDisp.mc_char, 169, 147);
    e.prototype.showLoaded.call(this, t);
  };
  CastlePostSpyDialog.prototype.spyCastle = function () {
    var e = this.spyVO.worldmapObjectVO;
    if (this.hasEnoughEventTime(e)) {
      var t = this.selectedHorse;
      var i = c.int(t ? t.wodId : -1);
      h.CastleModel.smartfoxClient.sendCommandVO(new p.C2SCreateSpyMovementVO(this.spyVO.startCastleId, e.absAreaPosX, e.absAreaPosY, this.spyVO.spiesInUse, this.spyVO.spyType, this.spyVO.spyType == u.ClientConstCastle.SPYTYPE_SABOTAGE ? this.spyVO.damage : this.spyVO.accuracy, i, e.kingdomID, this.checkForHorsePayedWithPegasusTickets(), this.getSlowDownOffsetInSeconds()));
      if (this.dialogProperties.hideFunction) {
        this.dialogProperties.hideFunction();
      }
      this.hide();
    }
  };
  Object.defineProperty(CastlePostSpyDialog.prototype, "spyVO", {
    get: function () {
      return this.dialogProperties.startSpyVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePostSpyDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastlePostSpyDialog.prototype.startTravelAction = function () {
    this.spyCastle();
  };
  Object.defineProperty(CastlePostSpyDialog.prototype, "distance", {
    get: function () {
      return this.spyVO.distance;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(m.ACastlePostActionDialog.prototype, "distance").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePostSpyDialog.prototype, "cost", {
    get: function () {
      return this.spyVO.cost;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(m.ACastlePostActionDialog.prototype, "cost").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePostSpyDialog.prototype, "unlockedHorses", {
    get: function () {
      var e = h.CastleModel.permanentCastleData.getCastleByWorldAreaId(this.spyVO.startCastleId, this.spyVO.worldmapObjectVO.kingdomID);
      if (e && e.horsesVO) {
        return e.horsesVO.horses;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  CastlePostSpyDialog.prototype.getTravelBoost = function (e) {
    return c.int(e.spyBoost);
  };
  CastlePostSpyDialog.prototype.getBoostCostC1 = function (e) {
    return c.int(h.CastleModel.costsData.getFinalCostsC1(a.SpyConst.getHorseCostC1(this.distance, this.spyVO.spiesInUse, e.costFactorC1, this.spyVO.risk)));
  };
  CastlePostSpyDialog.prototype.getBoostCostC2 = function (e) {
    if (e.isPayedWithPegasusTickets) {
      return 0;
    } else {
      return c.int(h.CastleModel.costsData.getFinalCostsC2(a.SpyConst.getHorseCostC2(this.distance, this.spyVO.spiesInUse, e.costFactorC2)));
    }
  };
  Object.defineProperty(CastlePostSpyDialog.prototype, "normalTravelTime", {
    get: function () {
      return this.spyVO.getTravelTime(this.spyVO.spyType, this.dialogProperties.startSpyVO.worldmapObjectVO.areaType == r.WorldConst.AREA_TYPE_DUNGEON);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(m.ACastlePostActionDialog.prototype, "normalTravelTime").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastlePostSpyDialog.prototype.getBoostedTravelTime = function (e) {
    var t = 0;
    t = this.spyVO.spyType == u.ClientConstCastle.SPYTYPE_SABOTAGE ? a.SpyConst.TRAVELSPEED_SABOTAGE : a.SpyConst.TRAVELSPEED_SPY;
    var i = 1 + h.CastleModel.researchData.getResearchEffectValue(C.EffectTypeEnum.EFFECT_TYPE_ESPIONAGE_SPEED_BOOST).strength / 100;
    i += h.CastleModel.userData.getGlobalConstructionItemEffectByType(g.CastleEffectEnum.ESPIONAGESPEEDBOOST) / 100;
    i += f.CastleTitleSystemHelper.returnTitleEffectValue(C.EffectTypeEnum.EFFECT_TYPE_SPEED_BONUS, -1, this.dialogProperties.startSpyVO.worldmapObjectVO.areaType, this.dialogProperties.startSpyVO.worldmapObjectVO.spaceID).strength / 100;
    i += h.CastleModel.globalEffectData.getBonusByEffectType(C.EffectTypeEnum.EFFECT_TYPE_SPEED_BONUS, this.dialogProperties.startSpyVO.worldmapObjectVO.areaType, this.dialogProperties.startSpyVO.worldmapObjectVO.spaceID) / 100;
    return c.int(s.TravelConst.getTravelTimeWithHorse(t, this.distance, i, e, 0, this.distance, false));
  };
  Object.defineProperty(CastlePostSpyDialog.prototype, "shipsInsteadOfHorses", {
    get: function () {
      return this.spyVO.worldmapObjectVO.kingdomID == l.WorldIsland.KINGDOM_ID;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(m.ACastlePostActionDialog.prototype, "shipsInsteadOfHorses").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastlePostSpyDialog.NAME = "CastlePostSpy";
  return CastlePostSpyDialog;
}(m.ACastlePostActionDialog);
exports.CastlePostSpyDialog = O;
o.classImplementsInterfaces(O, "ICollectableRendererList");