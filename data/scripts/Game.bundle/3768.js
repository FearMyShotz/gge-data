Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./6.js");
var r = require("./4.js");
var l = require("./214.js");
var c = require("./829.js");
var u = function (e) {
  function CastleTroopSupportVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CastleTroopSupportVO, e);
  CastleTroopSupportVO.prototype.fillFromParamObject = function (t) {
    this._sourceArea = r.CastleModel.userData.getOwnCastle(t.SCID, t.KID);
    this._sourceOwner = r.CastleModel.otherPlayerData.getOwnInfoVO();
    this._targetArea = d.WorldmapObjectFactory.parseWorldMapArea(t.gaa.AI);
    this._targetOwner = r.CastleModel.otherPlayerData.parseOwnerInfo(t.gaa.OI);
    this._unitInventory = new C.UnitInventoryDictionary();
    this._unitInventory.fillFromWodAmountArray(t.gui.I);
    this._strongholdUnitInventory = new g.StrongholdUnitInventory();
    this._strongholdUnitInventory.fillFromWodAmountArray(t.gui.SHI);
    this._supportUnits = new h.CastleFightItemContainer(CastleTroopSupportVO.ITEM_TYPES, CastleTroopSupportVO.ITEM_LEVELS, 99);
    this._supportTools = new h.CastleFightItemContainer(CastleTroopSupportVO.ITEM_TYPES_1, CastleTroopSupportVO.ITEM_LEVELS_1, 99);
    e.prototype.fillFromParamObject.call(this, t);
  };
  CastleTroopSupportVO.prototype.getArmy = function () {
    var e = [];
    for (var t = 0, i = this._supportUnits.getSlotList(); t < i.length; t++) {
      var n = i[t];
      if (n[0] != -1) {
        e.push([n[0], n[1]]);
      }
    }
    for (var o = 0, a = this._supportTools.getSlotList(); o < a.length; o++) {
      var s = a[o];
      if (s[0] != -1) {
        e.push([s[0], s[1]]);
      }
    }
    return e;
  };
  CastleTroopSupportVO.prototype.getSumOfItems = function () {
    return this._supportUnits.sumOfItems + this._supportTools.sumOfItems;
  };
  CastleTroopSupportVO.prototype.getSumOfTools = function () {
    return this._supportTools.sumOfItems;
  };
  CastleTroopSupportVO.prototype.getSumOfUnits = function () {
    return this._supportUnits.sumOfItems;
  };
  CastleTroopSupportVO.prototype.getLowestTravelSpeed = function (e = null) {
    return s.int(Math.min(this._supportUnits.getLowestTravelSpeed(false, e), this._supportTools.getLowestTravelSpeed(false, e)));
  };
  Object.defineProperty(CastleTroopSupportVO.prototype, "supportUnits", {
    get: function () {
      return this._supportUnits;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTroopSupportVO.prototype, "supportTools", {
    get: function () {
      return this._supportTools;
    },
    enumerable: true,
    configurable: true
  });
  CastleTroopSupportVO.prototype.getTravelCost = function (e) {
    return s.int(a.TravelConst.getRedeployTravelCostC1(this.distance, this.getSumOfItems(), e ? p.CastleEffectsHelper.getTravelCostBonusForAreaType(e, this.targetArea.areaType, this.targetActionType) : 0, r.CastleModel.legendSkillData.getTotalValueOfLegendSkillEffect(l.CastleLegendSkillEffectsEnum.TRAVEL_COST_REDUCTION)));
  };
  CastleTroopSupportVO.prototype.getTravelTime = function (e, t) {
    return s.int(this.getBoostedTravelTime(e, 0, t));
  };
  CastleTroopSupportVO.prototype.getBoostedTravelTime = function (e, t, i) {
    if (this.getSumOfItems() == 0) {
      return 0;
    }
    var n = a.TravelConst.calculateLowLevelBoost(r.CastleModel.userData.userLevel, _.SpecialServerHelper.isOnSpecialServer) + 1;
    var o = i ? this.getActionTravelTimeBonusForAreaType(i, null) : 0;
    return s.int(a.TravelConst.getTravelTimeWithHorse(this.getLowestTravelSpeed(i), this.distance, n, t, o, this.distance, false));
  };
  Object.defineProperty(CastleTroopSupportVO.prototype, "hasUnlockedTools", {
    get: function () {
      return true;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.CastleFightScreenVO.prototype, "hasUnlockedTools").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTroopSupportVO.prototype, "unlockedTools", {
    get: function () {
      return this._unlockedTools;
    },
    enumerable: true,
    configurable: true
  });
  CastleTroopSupportVO.ITEM_TYPES = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  CastleTroopSupportVO.ITEM_TYPES_1 = [9, 9, 9, 9, 9, 9, 9, 9, 9];
  CastleTroopSupportVO.ITEM_LEVELS = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  CastleTroopSupportVO.ITEM_LEVELS_1 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  return CastleTroopSupportVO;
}(c.CastleFightScreenVO);
exports.CastleTroopSupportVO = u;
var d = require("./147.js");
var p = require("./110.js");
var h = require("./552.js");
var g = require("./553.js");
var C = require("./156.js");
var _ = require("./44.js");
o.classImplementsInterfaces(u, "IFightScreenVO");