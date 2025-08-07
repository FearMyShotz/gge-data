Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./22.js");
var o = require("./44.js");
var a = function () {
  function CastleKingdomVO() {
    this._kID = 0;
    this._unitTravelTime = 0;
    this._ressourceTravelTime = 0;
    this._minLevel = 0;
    this._minPremiumUnlockLevel = 0;
    this._numMaxVillages = 0;
    this._unlocked = false;
    this._skipUnitTravelC2Cost = 0;
    this._skipResourceTravelC2Cost = 0;
    this._unitTravelTaxRate = 0;
    this._resourceTravelTaxRate = 0;
    this._noobProtectionTime = 0;
    this._requiredKingdomID = 0;
    this._hasContor = false;
    this._villageCapWood = 0;
    this._villageCapFood = 0;
    this._villageCapStone = 0;
    this._villageCapCoal = 0;
    this._villageCapOliveoil = 0;
    this._villageCapGlass = 0;
    this._villageCapIron = 0;
    this.slumVOs = [];
    this._activeSlumLevel = 0;
    this._kingdomResetTimestamp = 0;
    this._rewardSet = 0;
  }
  Object.defineProperty(CastleKingdomVO.prototype, "isPaid", {
    get: function () {
      return this._unlocked;
    },
    enumerable: true,
    configurable: true
  });
  CastleKingdomVO.prototype.fillFromParamXML = function (e) {
    this._kID = parseInt(e.kID || "");
    this._kingdomName = e.kingdomName || "";
    this._unitTravelTime = parseInt(e.unitTravelTime || "");
    this._ressourceTravelTime = parseInt(e.resourceTravelTime || "");
    this._minLevel = parseInt(e.minLevel || "0");
    this._minPremiumUnlockLevel = parseInt(e.minC2Level || "0");
    this._numMaxVillages = parseInt(e.numMaxVillages || "");
    this._skipUnitTravelC2Cost = parseInt(e.skipUnitTravelC2Cost || "");
    this._skipResourceTravelC2Cost = parseInt(e.skipResourceTravelC2Cost || "");
    this._unitTravelTaxRate = parseInt(e.unitTravelTaxRate || "");
    this._resourceTravelTaxRate = parseInt(e.resourceTravelTaxRate || "");
    this._noobProtectionTime = parseInt(e.noobProtectionTime || "");
    this._requiredKingdomID = parseInt(e.requiredKingdomID || "");
    this._villageCapWood = parseInt(e.villageCapWood || "");
    this._villageCapFood = parseInt(e.villageCapFood || "");
    this._villageCapStone = parseInt(e.villageCapStone || "");
    this._villageCapCoal = parseInt(n.CastleXMLUtils.getValueOrDefault("villageCapCoal", e, "0"));
    this._villageCapOliveoil = parseInt(n.CastleXMLUtils.getValueOrDefault("villageCapOil", e, "0"));
    this._villageCapGlass = parseInt(n.CastleXMLUtils.getValueOrDefault("villageCapGlass", e, "0"));
    this._villageCapIron = parseInt(n.CastleXMLUtils.getValueOrDefault("villageCapIron", e, "0"));
  };
  CastleKingdomVO.prototype.parseUnlockInfo = function (e) {
    this._unlocked = e.U == 1;
    this._hasContor = e.C == 1;
    this._activeSlumLevel = C.int(e.SL);
    if (this._activeSlumLevel <= 4) {
      CastleKingdomVO.updateSlumLevel(this._activeSlumLevel, e.KID);
    }
    var t = this.getSlumVOByLevel(e.SL + 1);
    if (t) {
      t.payedGoods = s.CollectableManager.parser.createGoodsListSave(new u.CollectableItemWoodVO(e.SPW), new c.CollectableItemStoneVO(e.SPS), new l.CollectableItemFoodVO(e.SPF), new r.CollectableItemC1VO(e.SPC1));
    }
    if (e.KRS) {
      this._kingdomResetTimestamp = _.CachedTimer.getCachedTimer() + e.KRS * d.ClientConstTime.SEC_2_MILLISEC;
    } else {
      this._kingdomResetTimestamp = 0;
    }
    if (e.CRS) {
      this._rewardSet = e.CRS;
    } else {
      this._rewardSet = 0;
    }
  };
  CastleKingdomVO.updateSlumLevel = function (e, t) {
    var i = m.CastleModel.areaData.activeArea;
    if (i && i.areaInfo.kingdomID == t && i.slum) {
      i.slum.setSlumLevel(e);
    }
  };
  CastleKingdomVO.prototype.getSlumVOByLevel = function (e) {
    for (var t = 0; t < this.slumVOs.length; t++) {
      if (this.slumVOs[t].level === e) {
        return this.slumVOs[t];
      }
    }
    return null;
  };
  Object.defineProperty(CastleKingdomVO.prototype, "kID", {
    get: function () {
      return this._kID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKingdomVO.prototype, "isBlockedByServer", {
    get: function () {
      return this.kID == 4 && this.resetTime < 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKingdomVO.prototype, "kingdomName", {
    get: function () {
      return this._kingdomName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKingdomVO.prototype, "kingdomNameString", {
    get: function () {
      return g.Localize.text(o.SpecialServerHelper.checkTextIDForSkinText("kingdomName_" + this.kingdomName));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKingdomVO.prototype, "minNonPremiumUnlockLevel", {
    get: function () {
      return this._minLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKingdomVO.prototype, "minLevel", {
    get: function () {
      if (this._minPremiumUnlockLevel) {
        return Math.min(this._minPremiumUnlockLevel, this._minLevel);
      } else {
        return this._minLevel;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKingdomVO.prototype, "minPremiumUnlockLevel", {
    get: function () {
      return this._minPremiumUnlockLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKingdomVO.prototype, "canBeUnlockedEarlyWithC2", {
    get: function () {
      return this._minPremiumUnlockLevel > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKingdomVO.prototype, "unitTravelTime", {
    get: function () {
      var e = m.CastleModel.researchData.getResearchEffectValue(f.EffectTypeEnum.EFFECT_TYPE_TRAVEL_KINGDOM_TROOP_TIME_BOOST).strength;
      return this._unitTravelTime * (100 + e) / 100;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKingdomVO.prototype, "ressourceTravelTime", {
    get: function () {
      var e = m.CastleModel.researchData.getResearchEffectValue(f.EffectTypeEnum.EFFECT_TYPE_TRAVEL_KINGDOM_MARKET_TIME_BOOST).strength;
      return this._ressourceTravelTime * (100 + e) / 100;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKingdomVO.prototype, "skipUnitTravelC2Cost", {
    get: function () {
      return this._skipUnitTravelC2Cost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKingdomVO.prototype, "skipResourceTravelC2Cost", {
    get: function () {
      return this._skipResourceTravelC2Cost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKingdomVO.prototype, "resourceTravelTaxRate", {
    get: function () {
      return this._resourceTravelTaxRate;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKingdomVO.prototype, "unitTravelTaxRate", {
    get: function () {
      return this._unitTravelTaxRate;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKingdomVO.prototype, "requiredKingdomID", {
    get: function () {
      return this._requiredKingdomID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKingdomVO.prototype, "hasContor", {
    get: function () {
      return this._hasContor;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKingdomVO.prototype, "villageCapWood", {
    get: function () {
      return this._villageCapWood;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKingdomVO.prototype, "villageCapFood", {
    get: function () {
      return this._villageCapFood;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKingdomVO.prototype, "villageCapStone", {
    get: function () {
      return this._villageCapStone;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKingdomVO.prototype, "activeSlumLevel", {
    get: function () {
      return this._activeSlumLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKingdomVO.prototype, "hasTimer", {
    get: function () {
      return this._kingdomResetTimestamp > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKingdomVO.prototype, "resetTime", {
    get: function () {
      return (this._kingdomResetTimestamp - _.CachedTimer.getCachedTimer()) / d.ClientConstTime.SEC_2_MILLISEC;
    },
    enumerable: true,
    configurable: true
  });
  CastleKingdomVO.prototype.resetUnlockData = function () {
    this._unlocked = false;
  };
  Object.defineProperty(CastleKingdomVO.prototype, "boostedResourceTravelTaxRate", {
    get: function () {
      var e = C.int(m.CastleModel.researchData.getResearchEffectValue(f.EffectTypeEnum.EFFECT_TYPE_TRANSPORT_TAX_DECREASE_BOOST, -1, this.kID).strength);
      var t = m.CastleModel.subscriptionData.getEffectValue(f.EffectTypeEnum.EFFECT_TYPE_TRANSPORT_TAX_DECREASE_BOOST, -1, this.kID) / 100;
      return Math.max((this.resourceTravelTaxRate - e) * (1 - t), 0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKingdomVO.prototype, "isSubscriptionBuffed", {
    get: function () {
      return m.CastleModel.subscriptionData.getEffectValue(f.EffectTypeEnum.EFFECT_TYPE_TRANSPORT_TAX_DECREASE_BOOST, -1, this.kID) > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKingdomVO.prototype, "dungeonType", {
    get: function () {
      if (this._kID == h.WorldIsland.KINGDOM_ID) {
        return p.WorldConst.AREA_TYPE_ISLE_DUNGEON;
      } else {
        return p.WorldConst.AREA_TYPE_DUNGEON;
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleKingdomVO.prototype.isVillageTypeAvailable = function (e) {
    return this.getVillageCapByType(e) > 0;
  };
  CastleKingdomVO.prototype.getVillageCapByType = function (e) {
    switch (e) {
      case p.WorldConst.VILLAGE_TYPE_WOOD:
        return this._villageCapWood;
      case p.WorldConst.VILLAGE_TYPE_STONE:
        return this._villageCapStone;
      case p.WorldConst.VILLAGE_TYPE_FOOD:
        return this._villageCapFood;
      case p.WorldConst.VILLAGE_TYPE_COAL:
        return this._villageCapCoal;
      case p.WorldConst.VILLAGE_TYPE_OIL:
        return this._villageCapOliveoil;
      case p.WorldConst.VILLAGE_TYPE_GLASS:
        return this._villageCapGlass;
      case p.WorldConst.VILLAGE_TYPE_IRON:
        return this._villageCapIron;
      default:
        return 0;
    }
  };
  CastleKingdomVO.prototype.hasAccessToPrivateResourceVillages = function () {
    return this._villageCapWood + this._villageCapStone + this._villageCapFood + this._villageCapCoal + this._villageCapOliveoil + this._villageCapGlass + this._villageCapIron > 0;
  };
  Object.defineProperty(CastleKingdomVO.prototype, "kingdomResetTimestamp", {
    get: function () {
      return this._kingdomResetTimestamp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKingdomVO.prototype, "rewardSet", {
    get: function () {
      return this._rewardSet;
    },
    enumerable: true,
    configurable: true
  });
  return CastleKingdomVO;
}();
exports.CastleKingdomVO = a;
var s = require("./50.js");
var r = require("./234.js");
var l = require("./453.js");
var c = require("./268.js");
var u = require("./269.js");
var d = require("./28.js");
var p = require("./5.js");
var h = require("./5.js");
var g = require("./3.js");
var C = require("./6.js");
var _ = require("./30.js");
var m = require("./4.js");
var f = require("./35.js");