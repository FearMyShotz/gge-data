Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function EffectVO(e = null) {
    this._effectID = 0;
    this._effectTypeID = 0;
    this._isPvPFight = false;
    this._isPvEFight = false;
    this._capId = 0;
    if (e) {
      this.parseXML(e);
    }
  }
  EffectVO.prototype.parseXML = function (e) {
    this._effectID = parseInt(e.effectID || "");
    this._name = e.name || "";
    this._effectTypeID = a.int(e.effectTypeID || "");
    this._areaTypes = s.CastleXMLUtils.getIntArrayFromString(s.CastleXMLUtils.getValueOrDefault("areaTypeID", e, ""), ",");
    this._playerRelation = s.CastleXMLUtils.getValueOrDefault("playerRelation", e, "");
    this._spaceIDs = s.CastleXMLUtils.getIntArrayFromString(s.CastleXMLUtils.getValueOrDefault("spaceIDs", e, ""), ",");
    this._isPvPFight = parseInt(s.CastleXMLUtils.getValueOrDefault("isPvPFight", e, "0")) == 1;
    this._isPvEFight = parseInt(s.CastleXMLUtils.getValueOrDefault("isPvEFight", e, "0")) == 1;
    this._capId = a.int(s.CastleXMLUtils.getIntAttribute("capID", e, -1));
  };
  EffectVO.prototype.isForAreaType = function (e) {
    return this.areaTypes.length == 0 || this.areaTypes.indexOf(e) > -1;
  };
  EffectVO.prototype.isForSpaceID = function (e) {
    return this.spaceIDs.length == 0 || this.spaceIDs.indexOf(e) > -1;
  };
  Object.defineProperty(EffectVO.prototype, "effectID", {
    get: function () {
      return this._effectID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EffectVO.prototype, "effectType", {
    get: function () {
      return r.CastleModel.effectsData.getEffectTypeByID(this._effectTypeID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EffectVO.prototype, "areaTypes", {
    get: function () {
      return this._areaTypes;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EffectVO.prototype, "spaceIDs", {
    get: function () {
      return this._spaceIDs;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EffectVO.prototype, "name", {
    get: function () {
      return this._name;
    },
    enumerable: true,
    configurable: true
  });
  EffectVO.prototype.getEnhancedName = function (e) {
    if (this.effectType.type == l.EffectTypeEnum.CRAFTING_QUEUE_PRODUCTION_BOOST) {
      return this._name + "_" + e.rawValues[0];
    } else {
      return this.name;
    }
  };
  Object.defineProperty(EffectVO.prototype, "effectTypeID", {
    get: function () {
      return this._effectTypeID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EffectVO.prototype, "playerRelation", {
    get: function () {
      return this._playerRelation;
    },
    enumerable: true,
    configurable: true
  });
  EffectVO.prototype.checkPlayerRelation = function (e) {
    switch (this._playerRelation) {
      case EffectVO.RELATION_ALLIANCE_IN_WAR:
        return r.CastleModel.allianceData.getStatusByAlliance(e.allianceID) == o.AllianceConst.DIPLOMACY_IN_WAR;
      case EffectVO.RELATION_SAME_ALLIANCE:
        return r.CastleModel.userData.isUserInMyAlliance(e) && !e.isOwnOwnerInfo;
      case EffectVO.RELATION_SAME_PLAYER:
        return e.isOwnOwnerInfo;
    }
    return true;
  };
  Object.defineProperty(EffectVO.prototype, "effectCategory", {
    get: function () {
      return this.effectType.effectCategory;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EffectVO.prototype, "effectGroup", {
    get: function () {
      return this.effectType.effectGroup;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EffectVO.prototype, "isPvPFight", {
    get: function () {
      return this._isPvPFight;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EffectVO.prototype, "isPvEFight", {
    get: function () {
      return this._isPvEFight;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EffectVO.prototype, "capId", {
    get: function () {
      return this._capId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EffectVO.prototype, "defaultTextID", {
    get: function () {
      return "effect_description_" + this.name;
    },
    enumerable: true,
    configurable: true
  });
  EffectVO.CATEGORY_NO_CATEGORY = 99;
  EffectVO.RELATION_SAME_ALLIANCE = "sameAlliance";
  EffectVO.RELATION_ALLIANCE_IN_WAR = "allianceInWar";
  EffectVO.RELATION_SAME_PLAYER = "samePlayer";
  return EffectVO;
}();
exports.EffectVO = n;
var o = require("./5.js");
var a = require("./6.js");
var s = require("./22.js");
var r = require("./4.js");
var l = require("./35.js");