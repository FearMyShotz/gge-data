Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./6.js");
var o = require("./22.js");
var a = require("./5722.js");
var s = require("./5723.js");
var r = require("./5724.js");
var l = require("./5725.js");
var c = require("./495.js");
var u = require("./5726.js");
var d = require("./5727.js");
var p = require("./5728.js");
var h = function () {
  function RelicEquipmentXml() {
    this._relicEffects = new Map();
    this._relicEffectLists = new Map();
    this._relicBluePrints = new Map();
    this._relicTypes = new Map();
    this._relicPowerDistributions = new Map();
    this._relicCategories = new Map();
    this._relicEffectPowerRatings = new Map();
    this._relicEnchanters = new Map();
    this._maxRelicEnchanterLevel = 0;
  }
  RelicEquipmentXml.prototype.parseXml = function (e) {
    this._relicEffects = o.CastleXMLUtils.createDicFromXmlNode(e, "relicEffects", c.XmlRelicEffectVO);
    this._relicEffectLists = o.CastleXMLUtils.createDicFromXmlNode(e, "relicEffectLists", r.XmlRelicEffectListVO);
    this._relicBluePrints = o.CastleXMLUtils.createDicFromXmlNode(e, "relicBluePrints", a.XmlRelicBluePrintVO);
    this._relicTypes = o.CastleXMLUtils.createDicFromXmlNode(e, "relicTypes", p.XmlRelicTypeVO);
    this._relicPowerDistributions = o.CastleXMLUtils.createDicFromXmlNode(e, "relicPowerDistributions", d.XmlRelicPowerDistributionVO, "power");
    this._relicCategories = o.CastleXMLUtils.createDicFromXmlNode(e, "relicCategories", s.XmlRelicCategoryVO);
    this._relicEffectPowerRatings = o.CastleXMLUtils.createDicFromXmlNode(e, "relicEffectPowerRatings", l.XmlRelicEffectPowerRatingVO);
    this._relicEnchanters = o.CastleXMLUtils.createDicFromXmlNode(e, "relicEnchanters", u.XmlRelicEnchanterVO, "level");
    this._sortedPowerRatings = [];
    if (this._relicEffectPowerRatings != null) {
      for (var t = 0, i = Array.from(this._relicEffectPowerRatings.values()); t < i.length; t++) {
        var n = i[t];
        this._sortedPowerRatings.push(n.threshold);
      }
    }
    this._sortedPowerRatings.sort(function (e, t) {
      return t - e;
    });
    this._maxRelicEnchanterLevel = this.getMaxRelicEnchanterLevel();
  };
  RelicEquipmentXml.prototype.getBluePrint = function (e) {
    return this._relicBluePrints.get(e);
  };
  RelicEquipmentXml.prototype.getRelicType = function (e) {
    return this._relicTypes.get(e);
  };
  RelicEquipmentXml.prototype.getRelicEffect = function (e) {
    return this._relicEffects.get(e);
  };
  RelicEquipmentXml.prototype.getRelicEffectList = function (e) {
    return this._relicEffectLists.get(e);
  };
  RelicEquipmentXml.prototype.getStarRating = function (e) {
    var t = 0;
    if (this._sortedPowerRatings != null) {
      for (var i = 0, n = this._sortedPowerRatings; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && e >= o) {
          t++;
        }
      }
    }
    return t;
  };
  RelicEquipmentXml.prototype.getRelicEnchanter = function (e) {
    return this._relicEnchanters.get(e);
  };
  RelicEquipmentXml.prototype.getMaxRelicEnchanterLevel = function () {
    var e = 0;
    if (this._relicEnchanters != null) {
      for (var t = 0, i = Array.from(this._relicEnchanters.values()); t < i.length; t++) {
        var o = i[t];
        e = n.int(Math.max(e, o.level));
      }
    }
    return e;
  };
  Object.defineProperty(RelicEquipmentXml.prototype, "relicEffects", {
    get: function () {
      return this._relicEffects;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RelicEquipmentXml.prototype, "relicBluePrints", {
    get: function () {
      return this._relicBluePrints;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RelicEquipmentXml.prototype, "relicTypes", {
    get: function () {
      return this._relicTypes;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RelicEquipmentXml.prototype, "relicEffectLists", {
    get: function () {
      return this._relicEffectLists;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RelicEquipmentXml.prototype, "relicPowerDistributions", {
    get: function () {
      return this._relicPowerDistributions;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RelicEquipmentXml.prototype, "relicCategories", {
    get: function () {
      return this._relicCategories;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RelicEquipmentXml.prototype, "relicEffectPowerRatings", {
    get: function () {
      return this._relicEffectPowerRatings;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RelicEquipmentXml.prototype, "relicEnchanters", {
    get: function () {
      return this._relicEnchanters;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RelicEquipmentXml.prototype, "maxRelicEnchanterLevel", {
    get: function () {
      return this._maxRelicEnchanterLevel;
    },
    enumerable: true,
    configurable: true
  });
  return RelicEquipmentXml;
}();
exports.RelicEquipmentXml = h;