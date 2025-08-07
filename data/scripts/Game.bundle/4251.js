Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastleAllianceInvasionCampNodeVO() {
    this._allianceInvasionCampID = 0;
    this._eventID = 0;
    this._dungeonlevel = 0;
    this._rageNeededForLevelUp = 0;
    this._playerRageCap = 0;
    this._wallBonus = 0;
    this._gateBonus = 0;
    this._countVictory = 0;
  }
  CastleAllianceInvasionCampNodeVO.prototype.parseXML = function (e) {
    this._allianceInvasionCampID = parseInt(a.CastleXMLUtils.getValueOrDefault("allianceInvasionCampID", e, "0"));
    this._eventID = parseInt(a.CastleXMLUtils.getValueOrDefault("eventID", e, "0"));
    this._dungeonlevel = parseInt(a.CastleXMLUtils.getValueOrDefault("dungeonlevel", e, "0"));
    this._rageNeededForLevelUp = parseInt(a.CastleXMLUtils.getValueOrDefault("rageNeededForLevelUp", e, "0"));
    this._playerRageCap = parseInt(a.CastleXMLUtils.getValueOrDefault("playerRageCap", e, "0"));
    this._wallBonus = parseInt(a.CastleXMLUtils.getValueOrDefault("wallBonus", e, "0"));
    this._gateBonus = parseInt(a.CastleXMLUtils.getValueOrDefault("gateBonus", e, "0"));
    this._countVictory = parseInt(a.CastleXMLUtils.getValueOrDefault("countVictory", e, "0"));
  };
  CastleAllianceInvasionCampNodeVO.prototype.getId = function () {
    return this._allianceInvasionCampID;
  };
  Object.defineProperty(CastleAllianceInvasionCampNodeVO.prototype, "allianceInvasionCampID", {
    get: function () {
      return this._allianceInvasionCampID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceInvasionCampNodeVO.prototype, "eventID", {
    get: function () {
      return this._eventID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceInvasionCampNodeVO.prototype, "dungeonlevel", {
    get: function () {
      return this._dungeonlevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceInvasionCampNodeVO.prototype, "rageNeededForLevelUp", {
    get: function () {
      return this._rageNeededForLevelUp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceInvasionCampNodeVO.prototype, "playerRageCap", {
    get: function () {
      return this._playerRageCap;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceInvasionCampNodeVO.prototype, "wallBonus", {
    get: function () {
      return this._wallBonus;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceInvasionCampNodeVO.prototype, "gateBonus", {
    get: function () {
      return this._gateBonus;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceInvasionCampNodeVO.prototype, "isMaxLevel", {
    get: function () {
      return this._rageNeededForLevelUp == -1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceInvasionCampNodeVO.prototype, "countVictory", {
    get: function () {
      return this._countVictory;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceInvasionCampNodeVO.prototype, "rank", {
    get: function () {
      return -1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceInvasionCampNodeVO.prototype, "level", {
    get: function () {
      return this.dungeonlevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceInvasionCampNodeVO.prototype, "coolDown", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceInvasionCampNodeVO.prototype, "cooldownIncrease", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceInvasionCampNodeVO.prototype, "cooldownIncreaseCap", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceInvasionCampNodeVO.prototype, "skipCost", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceInvasionCampNodeVO.prototype, "skipCostIncrease", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceInvasionCampNodeVO.prototype, "skipCostIncreaseCap", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceInvasionCampNodeVO.prototype, "moatBonus", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceInvasionCampNodeVO.prototype, "unitCapacity", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceInvasionCampNodeVO.prototype, "rewards", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceInvasionCampNodeVO.prototype, "shogunPointsNeededForLevelUp", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  return CastleAllianceInvasionCampNodeVO;
}();
exports.CastleAllianceInvasionCampNodeVO = n;
var o = require("./1.js");
var a = require("./22.js");
o.classImplementsInterfaces(n, "ICastleXmlNode");