Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastleDefenceData() {
    this._unitPercentLeft = 0;
    this._unitPercentMiddle = 0;
    this._unitPercentRight = 0;
    this._wallUnitCount = 0;
    this._wallUnitSlotCount = 0;
    this._unitCompositionLeft = 0;
    this._unitCompositionMiddle = 0;
    this._unitCompositionRight = 0;
    this._unitCompositionKeep = 0;
    this._keepUnitCount = 0;
    this._keepUnitSlotCount = 0;
    this._allianceUnitYardLimit = 0;
    this._remainingSupportUnits = 0;
    this._wallDefence = 0;
    this._moatDefence = 0;
    this._gateDefence = 0;
    this._lordID = -1;
    this._minAttackUnitsToConsumeTools = 0;
    this._unitInventory = new c.UnitInventoryDictionary();
  }
  CastleDefenceData.prototype.parse_DFC = function (e) {
    if (e) {
      this._unitInventory.clear();
      this._unitInventory.fillFromWodAmountArray(e.gui.I);
      this._areaInfo = r.WorldmapObjectFactory.parseWorldMapArea(e.A);
      if (!this._areaInfo) {
        console.error("Area Info is null. Server Object:\n" + JSON.stringify(e));
      }
      this._homeDWorkshopLevel = e.HDWL;
      this._itemsKeep = new l.CastleFightItemContainer(d.DefenseConst.ITEMS_KEEP, d.DefenseConst.LEVELS_KEEP, this._areaInfo.keepLevel);
      if (!o.EnvGlobalsHandler.globals.isCrossplay) {
        this._itemsKeepSupport = new l.CastleFightItemContainer(d.DefenseConst.ITEMS_SUPPORT_TOOLS, d.DefenseConst.LEVELS_SUPPORT_TOOLS_HOME_DWORKSHOP, this._homeDWorkshopLevel);
      }
      var t = d.DefenseConst.ITEMS_LEFTWALL;
      var i = d.DefenseConst.ITEMS_MIDDLEWALL;
      var n = d.DefenseConst.ITEMS_RIGHTWALL;
      var a = d.DefenseConst.LEVELS_LEFTWALL;
      var s = d.DefenseConst.LEVELS_MIDDLEWALL;
      var c = d.DefenseConst.LEVELS_RIGHTWALL;
      if (this.areaInfo.kingdomID == p.FactionConst.KINGDOM_ID) {
        t = d.DefenseConst.ITEMS_LEFTWALL_FACTION;
        i = d.DefenseConst.ITEMS_MIDDLEWALL_FACTION;
        n = d.DefenseConst.ITEMS_RIGHTWALL_FACTION;
        a = d.DefenseConst.LEVELS_LEFTWALL_FACTION;
        s = d.DefenseConst.LEVELS_MIDDLEWALL_FACTION;
        c = d.DefenseConst.LEVELS_RIGHTWALL_FACTION;
      }
      this._itemsLeftWall = new l.CastleFightItemContainer(t, a, this._areaInfo.wallLevel, Number.MAX_VALUE, d.DefenseConst.ITEMS_SKILLS_LEFTWALL, d.DefenseConst.LEVELS_SKILLS_LEFTWALL);
      this._itemsMiddleWall = new l.CastleFightItemContainer(i, s, this._areaInfo.wallLevel + this._areaInfo.gateLevel);
      this._itemsRightWall = new l.CastleFightItemContainer(n, c, this._areaInfo.wallLevel, Number.MAX_VALUE, d.DefenseConst.ITEMS_SKILLS_RIGHTWALL, d.DefenseConst.LEVELS_SKILLS_RIGHTWALL);
      this._itemsLeftMoat = new l.CastleFightItemContainer(d.DefenseConst.ITEMS_LEFTMOAT, d.DefenseConst.LEVELS_LEFTMOAT, this._areaInfo.moatLevel);
      this._itemsMiddleMoat = new l.CastleFightItemContainer(d.DefenseConst.ITEMS_MIDDLEMOAT, d.DefenseConst.LEVELS_MIDDLEMOAT, this._areaInfo.moatLevel);
      this._itemsRightMoat = new l.CastleFightItemContainer(d.DefenseConst.ITEMS_RIGHTMOAT, d.DefenseConst.LEVELS_RIGHTMOAT, this._areaInfo.moatLevel);
      this.parse_DFW(e.dfw);
      this.parse_DFK(e.dfk);
      this.parse_DFM(e.dfm);
      this._prioRange = e.PR;
      this._prioMelee = e.PM;
      this._gateDefence = h.int(e.GD);
      if (e.L) {
        this._lordID = h.int(e.L.ID);
        var g = C.CastleModel.lordData.getLordByID(this._lordID);
        if (g) {
          g.parseLord(e.L);
        }
      }
      this.controller.dispatchEvent(new u.CastleDefenceDataEvent(u.CastleDefenceDataEvent.GET_DEFENCE_INFOS));
    }
  };
  CastleDefenceData.prototype.parse_DFW = function (e) {
    if (e && this._itemsLeftWall) {
      this._itemsLeftWall.fillFromParamArray(e.L.S);
      this._itemsMiddleWall.fillFromParamArray(e.M.S);
      this._itemsRightWall.fillFromParamArray(e.R.S);
      this._unitPercentLeft = h.int(e.L.UP);
      this._unitPercentMiddle = h.int(e.M.UP);
      this._unitPercentRight = h.int(e.R.UP);
      this._unitCompositionLeft = h.int(e.L.UC);
      this._unitCompositionMiddle = h.int(e.M.UC);
      this._unitCompositionRight = h.int(e.R.UC);
      this._wallUnitCount = h.int(e.U);
      this._wallUnitSlotCount = h.int(e.US);
      this._wallDefence = h.int(e.D);
      this.controller.dispatchEvent(new u.CastleDefenceDataEvent(u.CastleDefenceDataEvent.DEFENCELIST_CHANGED));
    }
  };
  CastleDefenceData.prototype.parse_DFK = function (e) {
    if (e) {
      this._itemsKeep.fillFromParamArray(e.S);
      if (this._itemsKeepSupport) {
        this._itemsKeepSupport.fillFromParamArray(e.STS);
      }
      this._allianceUnitYardLimit = h.int(e.AUYL);
      this._keepUnitSlotCount = h.int(e.UYL) - this._allianceUnitYardLimit;
      this._keepUnitCount = Math.min(this._keepUnitSlotCount, h.int(e.U));
      this._unitCompositionKeep = h.int(e.UC);
      this._remainingSupportUnits = Math.max(0, h.int(e.U) - this._keepUnitSlotCount);
      this._minAttackUnitsToConsumeTools = h.int(e.MAUCT);
      if (s.SpecialServerHelper.isOnSpecialServer || this.areaInfo.areaType == a.WorldConst.AREA_TYPE_DAIMYO_TOWNSHIP) {
        this._keepUnitSlotCount = Number.POSITIVE_INFINITY;
      }
      this.controller.dispatchEvent(new u.CastleDefenceDataEvent(u.CastleDefenceDataEvent.DEFENCELIST_CHANGED));
    }
  };
  CastleDefenceData.prototype.parse_DFM = function (e) {
    if (e) {
      this._itemsLeftMoat.fillFromParamArray(e.LS);
      this._itemsMiddleMoat.fillFromParamArray(e.MS);
      this._itemsRightMoat.fillFromParamArray(e.RS);
      this._moatDefence = h.int(e.D);
      this.controller.dispatchEvent(new u.CastleDefenceDataEvent(u.CastleDefenceDataEvent.DEFENCELIST_CHANGED));
    }
  };
  CastleDefenceData.prototype.getAmountOfEquippedUnits = function (e) {
    var t = C.CastleModel.wodData.getUnitVOByWodId(e);
    return h.int(this._itemsKeep.getTotalAmountOfUntit(t) + this._itemsLeftMoat.getTotalAmountOfUntit(t) + this._itemsLeftWall.getTotalAmountOfUntit(t) + this._itemsMiddleMoat.getTotalAmountOfUntit(t) + this._itemsMiddleWall.getTotalAmountOfUntit(t) + this._itemsRightMoat.getTotalAmountOfUntit(t) + this._itemsRightWall.getTotalAmountOfUntit(t));
  };
  CastleDefenceData.prototype.getDefenceCastleName = function () {
    if (this._areaInfo) {
      return this._areaInfo.areaNameString;
    } else {
      return "";
    }
  };
  CastleDefenceData.prototype.getLevelKeep = function () {
    return this._areaInfo.keepLevel;
  };
  CastleDefenceData.prototype.getLevelGate = function () {
    return this._areaInfo.gateLevel;
  };
  CastleDefenceData.prototype.getLevelWall = function () {
    return this._areaInfo.wallLevel;
  };
  CastleDefenceData.prototype.getLevelWallGate = function () {
    return this._areaInfo.wallLevel + this._areaInfo.gateLevel;
  };
  CastleDefenceData.prototype.getLevelTower = function () {
    return this._areaInfo.towerLevel;
  };
  Object.defineProperty(CastleDefenceData.prototype, "itemsKeep", {
    get: function () {
      return this._itemsKeep;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDefenceData.prototype, "itemsKeepSupport", {
    get: function () {
      return this._itemsKeepSupport;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDefenceData.prototype, "itemsLeftWall", {
    get: function () {
      return this._itemsLeftWall;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDefenceData.prototype, "itemsMiddleWall", {
    get: function () {
      return this._itemsMiddleWall;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDefenceData.prototype, "itemsRightWall", {
    get: function () {
      return this._itemsRightWall;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDefenceData.prototype, "unitPercentLeft", {
    get: function () {
      return this._unitPercentLeft;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDefenceData.prototype, "unitPercentMiddle", {
    get: function () {
      return this._unitPercentMiddle;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDefenceData.prototype, "unitPercentRight", {
    get: function () {
      return this._unitPercentRight;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDefenceData.prototype, "unitCompositionLeft", {
    get: function () {
      return this._unitCompositionLeft;
    },
    set: function (e) {
      this._unitCompositionLeft = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDefenceData.prototype, "unitCompositionMiddle", {
    get: function () {
      return this._unitCompositionMiddle;
    },
    set: function (e) {
      this._unitCompositionMiddle = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDefenceData.prototype, "unitCompositionRight", {
    get: function () {
      return this._unitCompositionRight;
    },
    set: function (e) {
      this._unitCompositionRight = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDefenceData.prototype, "unitCompositionKeep", {
    get: function () {
      return this._unitCompositionKeep;
    },
    set: function (e) {
      this._unitCompositionKeep = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDefenceData.prototype, "keepUnitCount", {
    get: function () {
      return this._keepUnitCount;
    },
    set: function (e) {
      this._keepUnitCount = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDefenceData.prototype, "keepUnitSlotCount", {
    get: function () {
      return this._keepUnitSlotCount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDefenceData.prototype, "wallDefence", {
    get: function () {
      return this._wallDefence;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDefenceData.prototype, "gateDefence", {
    get: function () {
      return this._gateDefence;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDefenceData.prototype, "wallUnitCount", {
    get: function () {
      return Math.ceil(this._wallUnitCount);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDefenceData.prototype, "wallUnitSlotCount", {
    get: function () {
      return Math.ceil(this._wallUnitSlotCount);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDefenceData.prototype, "unitInventory", {
    get: function () {
      return this._unitInventory;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDefenceData.prototype, "moatDefence", {
    get: function () {
      return this._moatDefence;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDefenceData.prototype, "itemsLeftMoat", {
    get: function () {
      return this._itemsLeftMoat;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDefenceData.prototype, "itemsMiddleMoat", {
    get: function () {
      return this._itemsMiddleMoat;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDefenceData.prototype, "itemsRightMoat", {
    get: function () {
      return this._itemsRightMoat;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDefenceData.prototype, "areaInfo", {
    get: function () {
      return this._areaInfo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDefenceData.prototype, "prioRange", {
    get: function () {
      return this._prioRange;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDefenceData.prototype, "prioMelee", {
    get: function () {
      return this._prioMelee;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDefenceData.prototype, "lordID", {
    get: function () {
      return this._lordID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDefenceData.prototype, "controller", {
    get: function () {
      return g.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDefenceData.prototype, "minAttackUnitsToConsumeTools", {
    get: function () {
      return this._minAttackUnitsToConsumeTools;
    },
    set: function (e) {
      this._minAttackUnitsToConsumeTools = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDefenceData.prototype, "homeDWorkshopLevel", {
    get: function () {
      return this._homeDWorkshopLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDefenceData.prototype, "allianceUnitYardLimit", {
    get: function () {
      return this._allianceUnitYardLimit;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDefenceData.prototype, "remainingSupportUnits", {
    get: function () {
      return this._remainingSupportUnits;
    },
    enumerable: true,
    configurable: true
  });
  return CastleDefenceData;
}();
exports.CastleDefenceData = n;
var o = require("./2.js");
var a = require("./5.js");
var s = require("./44.js");
var r = require("./147.js");
var l = require("./552.js");
var c = require("./156.js");
var u = require("./707.js");
var d = require("./5.js");
var p = require("./5.js");
var h = require("./6.js");
var g = require("./15.js");
var C = require("./4.js");