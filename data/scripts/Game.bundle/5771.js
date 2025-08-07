Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./86.js");
var a = require("./50.js");
var s = require("./22.js");
var r = function () {
  function DifficultyScalingCampXmlVO() {
    this._id = 0;
    this._rank = 0;
    this._level = 0;
    this._coolDown = 0;
    this._eventID = 0;
    this._cooldownIncrease = 0;
    this._cooldownIncreaseCap = 0;
    this._skipCost = 0;
    this._skipCostIncrease = 0;
    this._skipCostIncreaseCap = 0;
    this._wallBonus = 0;
    this._gateBonus = 0;
    this._moatBonus = 0;
    this._unitCapacity = 0;
    this._shogunPointsNeededForLevelUp = 0;
    this._normalDiffDefStrengthBoostMinDefense = 0;
    this._normalDiffDefStrengthBoostMaxDefense = 0;
    this._premiumDiffDefStrengthBoostMinDefense = 0;
    this._premiumDiffDefStrengthBoostMaxDefense = 0;
  }
  DifficultyScalingCampXmlVO.prototype.parseXML = function (e) {
    this._id = parseInt(s.CastleXMLUtils.getValueOrDefault("eventAutoScalingCampID", e, "0"));
    this._rank = parseInt(s.CastleXMLUtils.getValueOrDefault("rank", e, "0"));
    this._level = parseInt(s.CastleXMLUtils.getValueOrDefault("camplevel", e, "0"));
    this._coolDown = parseInt(s.CastleXMLUtils.getValueOrDefault("coolDown", e, "0"));
    this._eventID = parseInt(s.CastleXMLUtils.getValueOrDefault("eventID", e, "0"));
    this._cooldownIncrease = parseInt(s.CastleXMLUtils.getValueOrDefault("cooldownIncrease", e, "0"));
    this._cooldownIncreaseCap = parseInt(s.CastleXMLUtils.getValueOrDefault("cooldownIncreaseCap", e, "0"));
    this._skipCost = parseInt(s.CastleXMLUtils.getValueOrDefault("skipCosts", e, "0"));
    this._skipCostIncrease = parseInt(s.CastleXMLUtils.getValueOrDefault("skipCostIncrease", e, "0"));
    this._skipCostIncreaseCap = parseInt(s.CastleXMLUtils.getValueOrDefault("skipCostIncreaseCap", e, "0"));
    this._wallBonus = parseInt(s.CastleXMLUtils.getValueOrDefault("wallBonus", e, "0"));
    this._gateBonus = parseInt(s.CastleXMLUtils.getValueOrDefault("gateBonus", e, "0"));
    this._moatBonus = parseInt(s.CastleXMLUtils.getValueOrDefault("moatBonus", e, "0"));
    this._unitCapacity = parseInt(s.CastleXMLUtils.getValueOrDefault("unitCapacity", e, "0"));
    this._rewards = a.CollectableManager.parser.x2cList.createList(e, o.ClientConstCollectable.XML_PREFIX_ADD);
    this._shogunPointsNeededForLevelUp = parseInt(s.CastleXMLUtils.getValueOrDefault("shogunPointsNeededForLevelUp", e, "-1"));
    this._playerRageCap = parseInt(s.CastleXMLUtils.getValueOrDefault("playerRageCap", e, "-1"));
    this._rageNeededForLevelUp = parseInt(s.CastleXMLUtils.getValueOrDefault("rageNeededForLevelUp", e, "-1"));
    this._normalDiffDefStrengthBoostMinDefense = parseInt(s.CastleXMLUtils.getValueOrDefault("normalDiffDefStrengthBoostMinDefense", e, "0"));
    this._normalDiffDefStrengthBoostMaxDefense = parseInt(s.CastleXMLUtils.getValueOrDefault("normalDiffDefStrengthBoostMaxDefense", e, "0"));
    this._premiumDiffDefStrengthBoostMinDefense = parseInt(s.CastleXMLUtils.getValueOrDefault("premiumDiffDefStrengthBoostMinDefense", e, "0"));
    this._premiumDiffDefStrengthBoostMaxDefense = parseInt(s.CastleXMLUtils.getValueOrDefault("premiumDiffDefStrengthBoostMaxDefense", e, "0"));
  };
  DifficultyScalingCampXmlVO.prototype.getId = function () {
    return this._id;
  };
  Object.defineProperty(DifficultyScalingCampXmlVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DifficultyScalingCampXmlVO.prototype, "rank", {
    get: function () {
      return this._rank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DifficultyScalingCampXmlVO.prototype, "level", {
    get: function () {
      return this._level;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DifficultyScalingCampXmlVO.prototype, "coolDown", {
    get: function () {
      return this._coolDown;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DifficultyScalingCampXmlVO.prototype, "cooldownIncrease", {
    get: function () {
      return this._cooldownIncrease;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DifficultyScalingCampXmlVO.prototype, "cooldownIncreaseCap", {
    get: function () {
      return this._cooldownIncreaseCap;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DifficultyScalingCampXmlVO.prototype, "skipCost", {
    get: function () {
      return this._skipCost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DifficultyScalingCampXmlVO.prototype, "skipCostIncrease", {
    get: function () {
      return this._skipCostIncrease;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DifficultyScalingCampXmlVO.prototype, "skipCostIncreaseCap", {
    get: function () {
      return this._skipCostIncreaseCap;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DifficultyScalingCampXmlVO.prototype, "wallBonus", {
    get: function () {
      return this._wallBonus;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DifficultyScalingCampXmlVO.prototype, "gateBonus", {
    get: function () {
      return this._gateBonus;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DifficultyScalingCampXmlVO.prototype, "moatBonus", {
    get: function () {
      return this._moatBonus;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DifficultyScalingCampXmlVO.prototype, "unitCapacity", {
    get: function () {
      return this._unitCapacity;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DifficultyScalingCampXmlVO.prototype, "rewards", {
    get: function () {
      return this._rewards;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DifficultyScalingCampXmlVO.prototype, "shogunPointsNeededForLevelUp", {
    get: function () {
      return this._shogunPointsNeededForLevelUp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DifficultyScalingCampXmlVO.prototype, "camplevel", {
    get: function () {
      return this._camplevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DifficultyScalingCampXmlVO.prototype, "playerRageCap", {
    get: function () {
      return this._playerRageCap;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DifficultyScalingCampXmlVO.prototype, "rageNeededForLevelUp", {
    get: function () {
      return this._rageNeededForLevelUp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DifficultyScalingCampXmlVO.prototype, "isMaxLevel", {
    get: function () {
      return this._rageNeededForLevelUp == -1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DifficultyScalingCampXmlVO.prototype, "eventID", {
    get: function () {
      return this._eventID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DifficultyScalingCampXmlVO.prototype, "normalDiffDefStrengthBoostMinDefense", {
    get: function () {
      return this._normalDiffDefStrengthBoostMinDefense;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DifficultyScalingCampXmlVO.prototype, "normalDiffDefStrengthBoostMaxDefense", {
    get: function () {
      return this._normalDiffDefStrengthBoostMaxDefense;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DifficultyScalingCampXmlVO.prototype, "premiumDiffDefStrengthBoostMinDefense", {
    get: function () {
      return this._premiumDiffDefStrengthBoostMinDefense;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DifficultyScalingCampXmlVO.prototype, "premiumDiffDefStrengthBoostMaxDefense", {
    get: function () {
      return this._premiumDiffDefStrengthBoostMaxDefense;
    },
    enumerable: true,
    configurable: true
  });
  return DifficultyScalingCampXmlVO;
}();
exports.DifficultyScalingCampXmlVO = r;
n.classImplementsInterfaces(r, "ICastleXmlNode");