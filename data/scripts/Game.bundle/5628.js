Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastleIsleBlueprintVO(e) {
    this._isleID = 0;
    this._dungeonLevel = 0;
    this._maxVictories = 0;
    this._lootWood = 0;
    this._lootStone = 0;
    this._lootFood = 0;
    this._lootAquamarine = 0;
    this._fixedLootWood = 0;
    this._fixedLootStone = 0;
    this._fixedLootFood = 0;
    this._fixedLootAquamarine = 0;
    this._occupationTime = 0;
    this._baseWallBonus = 0;
    this._baseGateBonus = 0;
    this._baseMoatBonus = 0;
    this._wallLevel = 0;
    this._gateLevel = 0;
    this._moatLevel = 0;
    this._towerLevel = 0;
    this.fillFromParamXML(e);
  }
  CastleIsleBlueprintVO.prototype.fillFromParamXML = function (e) {
    this._isleID = parseInt(a.CastleXMLUtils.getValueOrDefault("IsleID", e, "0"));
    this._type = a.CastleXMLUtils.getValueOrDefault("type", e, "UNKNOWN");
    this._dungeonLevel = parseInt(a.CastleXMLUtils.getValueOrDefault("dungeonlevel", e, "0"));
    this._maxVictories = parseInt(a.CastleXMLUtils.getValueOrDefault("maxCountVictories", e, "-1"));
    this._lootWood = parseInt(a.CastleXMLUtils.getValueOrDefault("lootWood", e, "-1"));
    this._lootStone = parseInt(a.CastleXMLUtils.getValueOrDefault("lootStone", e, "-1"));
    this._lootFood = parseInt(a.CastleXMLUtils.getValueOrDefault("lootFood", e, "-1"));
    this._lootAquamarine = parseInt(a.CastleXMLUtils.getValueOrDefault("lootAquamarine", e, "-1"));
    this._fixedLootWood = parseInt(a.CastleXMLUtils.getValueOrDefault("fixedLootWood", e, "-1"));
    this._fixedLootStone = parseInt(a.CastleXMLUtils.getValueOrDefault("fixedLootStone", e, "-1"));
    this._fixedLootFood = parseInt(a.CastleXMLUtils.getValueOrDefault("fixedLootFood", e, "-1"));
    this._fixedLootAquamarine = parseInt(a.CastleXMLUtils.getValueOrDefault("fixedLootAquamarine", e, "-1"));
    this._occupationTime = parseInt(a.CastleXMLUtils.getValueOrDefault("occupationTime", e, "0"));
    this._baseWallBonus = parseInt(a.CastleXMLUtils.getValueOrDefault("wallBonus", e, "0"));
    this._baseGateBonus = parseInt(a.CastleXMLUtils.getValueOrDefault("gateBonus", e, "0"));
    this._baseMoatBonus = parseInt(a.CastleXMLUtils.getValueOrDefault("moatBonus", e, "0"));
    this._wallLevel = parseInt(a.CastleXMLUtils.getValueOrDefault("wallLevel", e, "0"));
    this._gateLevel = parseInt(a.CastleXMLUtils.getValueOrDefault("gateLevel", e, "0"));
    this._moatLevel = parseInt(a.CastleXMLUtils.getValueOrDefault("moatLevel", e, "0"));
    this._towerLevel = parseInt(a.CastleXMLUtils.getValueOrDefault("towerLevel", e, "0"));
  };
  CastleIsleBlueprintVO.prototype.getVillageResourceType = function () {
    if (r.int(this._type.indexOf("VILLAGE")) < 0) {
      return r.int(s.WorldConst.VILLAGE_TYPE_WOOD);
    }
    var e = this._type.substr("VILLAGE".length).toLowerCase();
    switch (o.CollectableEnum.getTypeByXmlKey(e)) {
      case o.CollectableEnum.WOOD:
        return r.int(s.WorldConst.VILLAGE_TYPE_WOOD);
      case o.CollectableEnum.STONE:
        return r.int(s.WorldConst.VILLAGE_TYPE_STONE);
      case o.CollectableEnum.FOOD:
        return r.int(s.WorldConst.VILLAGE_TYPE_FOOD);
      case o.CollectableEnum.AQUAMARINE:
        return r.int(s.WorldConst.VILLAGE_TYPE_AQUAMARINE);
    }
    return r.int(s.WorldConst.VILLAGE_TYPE_WOOD);
  };
  Object.defineProperty(CastleIsleBlueprintVO.prototype, "isleID", {
    get: function () {
      return this._isleID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleIsleBlueprintVO.prototype, "type", {
    get: function () {
      return this._type;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleIsleBlueprintVO.prototype, "dungeonLevel", {
    get: function () {
      return this._dungeonLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleIsleBlueprintVO.prototype, "maxVictories", {
    get: function () {
      return this._maxVictories;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleIsleBlueprintVO.prototype, "lootWood", {
    get: function () {
      return this._lootWood;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleIsleBlueprintVO.prototype, "lootStone", {
    get: function () {
      return this._lootStone;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleIsleBlueprintVO.prototype, "lootFood", {
    get: function () {
      return this._lootFood;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleIsleBlueprintVO.prototype, "lootAquamarine", {
    get: function () {
      return this._lootAquamarine;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleIsleBlueprintVO.prototype, "fixedLootWood", {
    get: function () {
      return this._fixedLootWood;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleIsleBlueprintVO.prototype, "fixedLootStone", {
    get: function () {
      return this._fixedLootStone;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleIsleBlueprintVO.prototype, "fixedLootFood", {
    get: function () {
      return this._fixedLootFood;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleIsleBlueprintVO.prototype, "fixedLootAquamarine", {
    get: function () {
      return this._fixedLootAquamarine;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleIsleBlueprintVO.prototype, "occupationTime", {
    get: function () {
      return this._occupationTime;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleIsleBlueprintVO.prototype, "baseWallBonus", {
    get: function () {
      return this._baseWallBonus;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleIsleBlueprintVO.prototype, "baseGateBonus", {
    get: function () {
      return this._baseGateBonus;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleIsleBlueprintVO.prototype, "baseMoatBonus", {
    get: function () {
      return this._baseMoatBonus;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleIsleBlueprintVO.prototype, "wallLevel", {
    get: function () {
      return this._wallLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleIsleBlueprintVO.prototype, "gateLevel", {
    get: function () {
      return this._gateLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleIsleBlueprintVO.prototype, "moatLevel", {
    get: function () {
      return this._moatLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleIsleBlueprintVO.prototype, "towerLevel", {
    get: function () {
      return this._towerLevel;
    },
    enumerable: true,
    configurable: true
  });
  return CastleIsleBlueprintVO;
}();
exports.CastleIsleBlueprintVO = n;
var o = require("./12.js");
var a = require("./22.js");
var s = require("./5.js");
var r = require("./6.js");