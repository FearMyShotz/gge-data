Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./86.js");
var a = require("./50.js");
var s = require("./22.js");
var r = function () {
  function DaimyoXmlVO() {
    this._id = 0;
    this._rank = 0;
    this._level = 0;
    this._coolDown = 0;
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
  }
  DaimyoXmlVO.prototype.parseXML = function (e) {
    this._id = parseInt(s.CastleXMLUtils.getValueOrDefault("id", e, "0"));
    this._rank = parseInt(s.CastleXMLUtils.getValueOrDefault("rank", e, "0"));
    this._level = parseInt(s.CastleXMLUtils.getValueOrDefault("level", e, "0"));
    this._coolDown = parseInt(s.CastleXMLUtils.getValueOrDefault("coolDown", e, "0"));
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
  };
  DaimyoXmlVO.prototype.getId = function () {
    return this._id;
  };
  Object.defineProperty(DaimyoXmlVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoXmlVO.prototype, "rank", {
    get: function () {
      return this._rank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoXmlVO.prototype, "level", {
    get: function () {
      return this._level;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoXmlVO.prototype, "coolDown", {
    get: function () {
      return this._coolDown;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoXmlVO.prototype, "cooldownIncrease", {
    get: function () {
      return this._cooldownIncrease;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoXmlVO.prototype, "cooldownIncreaseCap", {
    get: function () {
      return this._cooldownIncreaseCap;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoXmlVO.prototype, "skipCost", {
    get: function () {
      return this._skipCost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoXmlVO.prototype, "skipCostIncrease", {
    get: function () {
      return this._skipCostIncrease;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoXmlVO.prototype, "skipCostIncreaseCap", {
    get: function () {
      return this._skipCostIncreaseCap;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoXmlVO.prototype, "wallBonus", {
    get: function () {
      return this._wallBonus;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoXmlVO.prototype, "gateBonus", {
    get: function () {
      return this._gateBonus;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoXmlVO.prototype, "moatBonus", {
    get: function () {
      return this._moatBonus;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoXmlVO.prototype, "unitCapacity", {
    get: function () {
      return this._unitCapacity;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoXmlVO.prototype, "rewards", {
    get: function () {
      return this._rewards;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoXmlVO.prototype, "shogunPointsNeededForLevelUp", {
    get: function () {
      return this._shogunPointsNeededForLevelUp;
    },
    enumerable: true,
    configurable: true
  });
  return DaimyoXmlVO;
}();
exports.DaimyoXmlVO = r;
n.classImplementsInterfaces(r, "ICastleXmlNode");