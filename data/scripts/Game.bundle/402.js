Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./3.js");
var c = require("./6.js");
var u = require("./760.js");
var d = require("./685.js");
var p = require("./1032.js");
var h = require("./220.js");
var g = require("./15.js");
var C = require("./54.js");
var _ = require("./4.js");
var m = require("./3355.js");
var f = require("./3356.js");
var O = require("./3357.js");
var E = function (e) {
  function CastlePremiumBoostData(t) {
    var i = this;
    i._boughtUnitSlots = 0;
    i._boughtToolSlots = 0;
    i._permanentUnitSlots = 0;
    i._permanentToolSlots = 0;
    i._caravanBoostAndCosts = new Map();
    i._returningSpeedBoostAndCosts = new Map();
    i._xpBoostValues = new Map();
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).init();
    i.parseXML(t);
    new l.LocalizedTextVO();
    return i;
  }
  n.__extends(CastlePremiumBoostData, e);
  CastlePremiumBoostData.prototype.parseXML = function (e) {
    var t = e.levelBoosters;
    if (t != null) {
      for (var i = 0, n = t; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          parseInt(o.boosterID || "");
          var a = parseInt(o.boosterType || "");
          var r = parseInt(o.level || "");
          var l = parseInt(o.costC2 || "");
          var c = parseInt(o.boostPercentage || "");
          if (a == s.BoosterConst.CARAVAN_OVERLOADER) {
            this._caravanBoostAndCosts.set(r, [c, l]);
          } else if (a == s.BoosterConst.RETURNING_SPEED) {
            this._returningSpeedBoostAndCosts.set(r, [c, l]);
          } else if (a == s.BoosterConst.XP_BUILDING_BOOSTER_ID) {
            this._xpBoostValues.set(r, c);
          }
        }
      }
    }
  };
  CastlePremiumBoostData.prototype.reset = function () {
    this.init();
  };
  CastlePremiumBoostData.prototype.init = function () {
    this._festivalVO = new m.FestivalVO();
    this.overseerFoodVO = new S.CastleOverseerFoodPremiumShopVO();
    this.overseerStoneVO = new A.CastleOverseerStonePremiumShopVO();
    this.overseerWoodVO = new L.CastleOverseerWoodPremiumShopVO();
    this.overseerMeadVO = new x.CastleOverseerMeadPremiumShopVO();
    this.overseerBeefVO = new O.CastleOverseerBeefPremiumShopVO();
    this.overseerHoneyVO = new w.CastleOverseerHoneyPremiumShopVO();
    this.marauderVO = new v.CastleMarauderPremiumShopVO();
    this.taxBribeVO = new R.CastleTaxCollectorPremiumShopVO();
    this.instructorVO = new T.CastleInstructorPremiumShopVO();
    this.premiumAccountVO = new f.PremiumAccountVO();
    this.caravanOverloaderVO = new I.CastleCaravanOverloaderPremiumShopVO();
    this.returnSpeedBoosterVO = new M.CastleReturnSpeedBoosterPremiumShopVO();
    this.privateOfferFameBoosterVO = new P.CastlePointBoosterShopVO(s.BoosterConst.GLORY_BOOST_ID);
    this.personalFameBoosterVO = new P.CastlePointBoosterShopVO(s.BoosterConst.PERSONAL_GLORY_BOOST_ID);
    this.xpBoosterVO = new P.CastlePointBoosterShopVO(s.BoosterConst.XP_BOOSTER_ID);
    this.gallantryBoosterVO = new P.CastlePointBoosterShopVO(s.BoosterConst.GALLANTRY_POINTS_BOOST_ID);
    this.factionInvasionBoosterVO = new P.CastlePointBoosterShopVO(s.BoosterConst.REPUTATION_POINT_BOOST_ID);
    this.rageBoosterVO = new P.CastlePointBoosterShopVO(s.BoosterConst.RAGE_POINT_BOOST_ID);
    this.khanMedalBoosterVO = new P.CastlePointBoosterShopVO(s.BoosterConst.KHAN_MEDAL_BOOST_ID);
    this.khanTabletBoosterVO = new P.CastlePointBoosterShopVO(s.BoosterConst.KHAN_BOOST_ID);
    this.samuraiBoosterVO = new V.SamuraiBoosterShopVO();
    this.longTermPointEventBoosterVO = new D.LongTermPointEventShopVO();
    this.allianceCoinsBoosterVO = new b.AllianceCoinBoosterShopVO();
    this._boosterList = new Map();
    this._boosterList.set(this.overseerWoodVO.id, this.overseerWoodVO);
    this._boosterList.set(this.overseerStoneVO.id, this.overseerStoneVO);
    this._boosterList.set(this.overseerFoodVO.id, this.overseerFoodVO);
    this._boosterList.set(this.overseerMeadVO.id, this.overseerMeadVO);
    this._boosterList.set(this.overseerBeefVO.id, this.overseerBeefVO);
    this._boosterList.set(this.overseerHoneyVO.id, this.overseerHoneyVO);
    this._boosterList.set(this.marauderVO.id, this.marauderVO);
    this._boosterList.set(this.taxBribeVO.id, this.taxBribeVO);
    this._boosterList.set(this.instructorVO.id, this.instructorVO);
    this._boosterList.set(this.privateOfferFameBoosterVO.id, this.privateOfferFameBoosterVO);
    this._boosterList.set(this.personalFameBoosterVO.id, this.personalFameBoosterVO);
    this._boosterList.set(this.khanTabletBoosterVO.id, this.khanTabletBoosterVO);
    this._boosterList.set(this.samuraiBoosterVO.id, this.samuraiBoosterVO);
    this._boosterList.set(this.longTermPointEventBoosterVO.id, this.longTermPointEventBoosterVO);
    this._boosterList.set(this.allianceCoinsBoosterVO.id, this.allianceCoinsBoosterVO);
    this._boosterList.set(this.xpBoosterVO.id, this.xpBoosterVO);
    this._boosterList.set(this.gallantryBoosterVO.id, this.gallantryBoosterVO);
    this._boosterList.set(this.factionInvasionBoosterVO.id, this.factionInvasionBoosterVO);
    this._boosterList.set(this.caravanOverloaderVO.id, this.caravanOverloaderVO);
    this._boosterList.set(this.returnSpeedBoosterVO.id, this.returnSpeedBoosterVO);
    this._boosterList.set(this.rageBoosterVO.id, this.rageBoosterVO);
    this._boosterList.set(this.khanMedalBoosterVO.id, this.khanMedalBoosterVO);
    this._activeBoosterList = new Map();
  };
  CastlePremiumBoostData.prototype.executeUpdate = function (e) {
    var t = false;
    if (this._activeBoosterList != null) {
      for (var i = 0, n = Array.from(this._activeBoosterList.keys()); i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          if (!this._activeBoosterList.get(o).isPermanentBooster && !this._activeBoosterList.get(o).isActive) {
            this.removeActiveBooster(this._activeBoosterList.get(o));
            t = true;
          }
        }
      }
    }
    if (t) {
      _.CastleModel.smartfoxClient.sendCommandVO(new u.C2SBoosterInfoVO());
    }
    if (this.premiumAccountVO.isOutrun) {
      this.premiumAccountVO.isOutrun = false;
      this.removeActiveBooster(this.premiumAccountVO);
      t = true;
    }
    if (t) {
      this.controller.sendCommandVOAndWait(new d.C2SGetCastleProductionDataVO());
    }
  };
  CastlePremiumBoostData.prototype.removeActiveBooster = function (e) {
    if (this._activeBoosterList.get(e) !== undefined) {
      this._activeBoosterList.set(e, null);
      this._activeBoosterList.delete(e);
      this.dispatchEvent(new h.CastleResourceBoosterEvent(h.CastleResourceBoosterEvent.BOOSTERDATA_REFRESHED, e));
    }
  };
  CastlePremiumBoostData.prototype.addActiveBooster = function (e) {
    if (this._activeBoosterList.get(e) === undefined) {
      this._activeBoosterList.set(e, e);
    }
  };
  CastlePremiumBoostData.prototype.parse_BOI = function (e) {
    if (e) {
      var t = 0;
      var i = false;
      for (t = 0; t < e.BO.length; t++) {
        if (this._boosterList.get(e.BO[t].ID) !== undefined) {
          i = this._boosterList.get(e.BO[t].ID).isActive;
          this._boosterList.get(e.BO[t].ID).parseServerInfo(e.BO[t]);
          if (i && !this._boosterList.get(e.BO[t].ID).isActive) {
            this.removeActiveBooster(this._boosterList.get(e.BO[t].ID));
          } else if (!i && this._boosterList.get(e.BO[t].ID).isActive) {
            this.addActiveBooster(this._boosterList.get(e.BO[t].ID));
          }
        }
      }
      i = this.premiumAccountVO.isActive;
      this.premiumAccountVO.parseServerInfo(e);
      this.premiumAccountVO.premiumAccountType = e.PT;
      if (i && !this.premiumAccountVO.isActive) {
        this.removeActiveBooster(this.premiumAccountVO);
      } else if (!i && this.premiumAccountVO.isActive) {
        this.addActiveBooster(this.premiumAccountVO);
      }
      this._boughtUnitSlots = 0;
      this._permanentUnitSlots = 0;
      for (var n = 0, o = e.SU; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined) {
          if (a > 0) {
            this._boughtUnitSlots++;
          } else if (a < 0) {
            this._permanentUnitSlots++;
          }
        }
      }
      this._boughtToolSlots = 0;
      this._permanentToolSlots = 0;
      for (var s = 0, r = e.ST; s < r.length; s++) {
        var l = r[s];
        if (l !== undefined) {
          if (l > 0) {
            this._boughtToolSlots++;
          } else if (l < 0) {
            this._permanentToolSlots++;
          }
        }
      }
      this.parse_bfs(e.bfs);
      this.dispatchEvent(new h.CastleResourceBoosterEvent(h.CastleResourceBoosterEvent.BOOSTERDATA_REFRESHED, null));
    }
  };
  CastlePremiumBoostData.prototype.parse_bfs = function (e) {
    if (e) {
      this._festivalVO.fillFromParamObject(e);
      this.dispatchEvent(new h.CastleResourceBoosterEvent(h.CastleResourceBoosterEvent.FESTIVAL_UPDATED, null));
      this.dispatchEvent(new h.CastleResourceBoosterEvent(h.CastleResourceBoosterEvent.BOOSTERDATA_REFRESHED, null));
      g.CastleBasicController.getInstance().dispatchEvent(new p.UnitPackageListEvent(p.UnitPackageListEvent.PACKAGE_UPDATE));
    }
  };
  CastlePremiumBoostData.prototype.getTempBoostOverseerVOByID = function (e) {
    switch (e) {
      case CastlePremiumBoostData.BOOST_WOOD:
        return this.overseerWoodVO;
      case CastlePremiumBoostData.BOOST_STONE:
        return this.overseerStoneVO;
      case CastlePremiumBoostData.BOOST_FOOD:
        return this.overseerFoodVO;
      case CastlePremiumBoostData.BOOST_MEAD:
        return this.overseerMeadVO;
      case CastlePremiumBoostData.BOOST_BEEF:
        return this.overseerBeefVO;
      case CastlePremiumBoostData.BOOST_HONEY:
        return this.overseerHoneyVO;
      case s.BoosterConst.TAX:
        return this.taxBribeVO;
      case s.BoosterConst.INSTRUCTOR:
        return this.instructorVO;
      case s.BoosterConst.MARAUDER:
        return this.marauderVO;
      default:
        return null;
    }
  };
  CastlePremiumBoostData.prototype.getOverseerVOByID = function (e) {
    switch (e) {
      case CastlePremiumBoostData.BOOST_WOOD:
        return this.overseerWoodVO;
      case CastlePremiumBoostData.BOOST_STONE:
        return this.overseerStoneVO;
      case CastlePremiumBoostData.BOOST_FOOD:
        return this.overseerFoodVO;
      case CastlePremiumBoostData.BOOST_MEAD:
        return this.overseerMeadVO;
      case CastlePremiumBoostData.BOOST_BEEF:
        return this.overseerBeefVO;
      case CastlePremiumBoostData.BOOST_HONEY:
        return this.overseerHoneyVO;
      case s.BoosterConst.TAX:
        return this.taxBribeVO;
      case s.BoosterConst.INSTRUCTOR:
        return this.instructorVO;
      case s.BoosterConst.MARAUDER:
        return this.marauderVO;
      case s.BoosterConst.RETURNING_SPEED:
        return this.returnSpeedBoosterVO;
      case s.BoosterConst.CARAVAN_OVERLOADER:
        return this.caravanOverloaderVO;
      default:
        return null;
    }
  };
  CastlePremiumBoostData.prototype.getCaravanBoosterMaxLevel = function () {
    return c.int(o.DictionaryUtil.getDictionaryLength(this._caravanBoostAndCosts) - 1);
  };
  CastlePremiumBoostData.prototype.getReturningSpeedBoosterMaxLevel = function () {
    return c.int(o.DictionaryUtil.getDictionaryLength(this._returningSpeedBoostAndCosts) - 1);
  };
  CastlePremiumBoostData.prototype.getCostsForNextReturningSpeedLevel = function (e) {
    var t = c.int(o.DictionaryUtil.getDictionaryLength(this._returningSpeedBoostAndCosts));
    if (t > 0 && t >= e + 1) {
      return c.int(this._returningSpeedBoostAndCosts.get(e + 1)[1]);
    } else {
      return -1;
    }
  };
  CastlePremiumBoostData.prototype.getBoostForReturningSpeedLevel = function (e) {
    var t = c.int(o.DictionaryUtil.getDictionaryLength(this._returningSpeedBoostAndCosts));
    if (t > 0 && t >= e) {
      return c.int(this._returningSpeedBoostAndCosts.get(e)[0]);
    } else {
      return 0;
    }
  };
  CastlePremiumBoostData.prototype.getCarriagesNeededToTransport = function (e, t, i, n) {
    return c.int(Math.ceil(e * 1 / this.getResourcesTransportablePerCarriage(t, i, n)));
  };
  CastlePremiumBoostData.prototype.getResourcesTransportablePerCarriage = function (e, t, i) {
    var n = 1 + this._caravanBoostAndCosts.get(e)[0] * 0.01;
    var a = r.MarketConst.RESOURCES_PER_CARRIAGE * (t * 0.01) * n + i;
    var s = o.MathBase.round(a, 1);
    return 1 + Math.round(s);
  };
  CastlePremiumBoostData.prototype.getResourcesTransportablePerCarriageIgnoringResearch = function (e) {
    var t = parseFloat((1 + this._caravanBoostAndCosts.get(e)[0] * 0.01).toFixed(2));
    var i = parseFloat((r.MarketConst.RESOURCES_PER_CARRIAGE * t).toFixed(2));
    return 1 + Math.ceil(i);
  };
  CastlePremiumBoostData.prototype.getCostsForNextCaravanLevel = function (e) {
    if (o.DictionaryUtil.getDictionaryLength(this._caravanBoostAndCosts) > e + 1) {
      return c.int(this._caravanBoostAndCosts.get(e + 1)[1]);
    } else {
      return -1;
    }
  };
  Object.defineProperty(CastlePremiumBoostData.prototype, "xpBoostValues", {
    get: function () {
      return this._xpBoostValues;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePremiumBoostData.prototype, "caravanBoostAndCosts", {
    get: function () {
      return this._caravanBoostAndCosts;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePremiumBoostData.prototype, "boughtUnitSlots", {
    get: function () {
      return this._boughtUnitSlots;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePremiumBoostData.prototype, "boughtToolSlots", {
    get: function () {
      return this._boughtToolSlots;
    },
    enumerable: true,
    configurable: true
  });
  CastlePremiumBoostData.prototype.getBoosterByID = function (e) {
    if (this._boosterList.get(e) !== undefined) {
      return this._boosterList.get(e);
    } else {
      return null;
    }
  };
  Object.defineProperty(CastlePremiumBoostData.prototype, "festivalVO", {
    get: function () {
      return this._festivalVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePremiumBoostData.prototype, "permanentUnitSlots", {
    get: function () {
      return this._permanentUnitSlots;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePremiumBoostData.prototype, "permanentToolSlots", {
    get: function () {
      return this._permanentToolSlots;
    },
    enumerable: true,
    configurable: true
  });
  CastlePremiumBoostData.prototype.getOverseer = function (e) {
    switch (e) {
      case y.CollectableEnum.WOOD:
        return this.overseerWoodVO;
      case y.CollectableEnum.FOOD:
        return this.overseerFoodVO;
      case y.CollectableEnum.STONE:
        return this.overseerStoneVO;
      case y.CollectableEnum.MEAD:
        return this.overseerMeadVO;
      case y.CollectableEnum.BEEF:
        return this.overseerBeefVO;
      case y.CollectableEnum.HONEY:
        return this.overseerHoneyVO;
    }
    return null;
  };
  CastlePremiumBoostData.BOOST_WOOD = 0;
  CastlePremiumBoostData.BOOST_STONE = 1;
  CastlePremiumBoostData.BOOST_FOOD = 2;
  CastlePremiumBoostData.BOOST_HONEY = 3;
  CastlePremiumBoostData.BOOST_MEAD = 4;
  CastlePremiumBoostData.BOOST_BEEF = 5;
  return CastlePremiumBoostData;
}(C.CastleBasicData);
exports.CastlePremiumBoostData = E;
var y = require("./12.js");
var b = require("./3359.js");
var D = require("./3360.js");
var I = require("./3361.js");
var T = require("./3362.js");
var v = require("./3364.js");
var S = require("./3366.js");
var A = require("./3367.js");
var L = require("./3368.js");
var P = require("./3369.js");
var M = require("./3370.js");
var R = require("./3373.js");
var V = require("./3375.js");
var x = require("./3376.js");
var w = require("./3377.js");
a.classImplementsInterfaces(E, "IUpdatable");