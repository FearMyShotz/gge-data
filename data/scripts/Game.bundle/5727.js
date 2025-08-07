Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./6.js");
var o = require("./22.js");
var a = require("./4.js");
var s = require("./5728.js");
var r = require("./5729.js");
var l = require("./5730.js");
var c = require("./5731.js");
var u = require("./5732.js");
var d = function () {
  function EquipmentXml() {
    this._equipmentEffects = new Map();
    this._equipmentSets = new Map();
    this._equipmentRareness = new Map();
    this._equipmentGroups = new Map();
    this._worldmapSkins = new Map();
  }
  EquipmentXml.prototype.parseXml = function (e) {
    this._equipmentEffects = o.CastleXMLUtils.createDicFromXmlNode(e, "equipment_effects", s.XmlEquipmentEffectVO);
    this.parseEquipmentSets(e);
    this._equipmentRareness = o.CastleXMLUtils.createDicFromXmlNode(e, "equipment_rarenesses", l.XmlEquipmentRarenessVO);
    this._equipmentGroups = o.CastleXMLUtils.createDicFromXmlNode(e, "equipment_groups", r.XmlEquipmentGroupVO);
    this._worldmapSkins = o.CastleXMLUtils.createDicFromXmlNode(e, "worldmapskins", u.XmlWorldmapSkinVO);
  };
  EquipmentXml.prototype.parseEquipmentSets = function (e) {
    this._equipmentSets = new Map();
    var t = e.equipment_sets;
    if (t != null) {
      for (var i = 0, n = t; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          var a = parseInt(o.setID || "");
          if (this._equipmentSets.get(a)) {
            this._equipmentSets.get(a).addEffect(o);
          } else {
            this._equipmentSets.set(a, new c.XmlEquipmentSetVO(a, o));
          }
        }
      }
    }
  };
  EquipmentXml.prototype.getEquipmentSet = function (e) {
    return this._equipmentSets.get(e);
  };
  EquipmentXml.prototype.getEquipmentEffect = function (e) {
    return this._equipmentEffects.get(e);
  };
  EquipmentXml.prototype.getEquipmentRareness = function (e) {
    return this._equipmentRareness.get(e);
  };
  EquipmentXml.prototype.getEquipmentGroup = function (e) {
    return this._equipmentGroups.get(e);
  };
  EquipmentXml.prototype.getWorldmapSkin = function (e) {
    return this._worldmapSkins.get(e);
  };
  EquipmentXml.prototype.getEquippableEffectByEquipmentEffect = function (e) {
    return a.CastleModel.effectsData.getEffectByID(this.getEquipmentEffect(e) ? this.getEquipmentEffect(e).effectId : e);
  };
  EquipmentXml.prototype.getEffectGroupIdByEffectId = function (e) {
    return n.int(this.getEquipmentEffect(e).getItemGroupIdSafe());
  };
  EquipmentXml.prototype.getEnchantmentFactor = function (e, t) {
    var i = this.getEquipmentEffect(e);
    if (t) {
      return i.enchantmentPrimaryBonus;
    } else {
      return i.enchantmentSecondaryBonus;
    }
  };
  Object.defineProperty(EquipmentXml.prototype, "equipmentEffects", {
    get: function () {
      return this._equipmentEffects;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EquipmentXml.prototype, "equipmentSets", {
    get: function () {
      return this._equipmentSets;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EquipmentXml.prototype, "equipmentRareness", {
    get: function () {
      return this._equipmentRareness;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EquipmentXml.prototype, "equipmentGroups", {
    get: function () {
      return this._equipmentGroups;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EquipmentXml.prototype, "worldmapSkins", {
    get: function () {
      return this._worldmapSkins;
    },
    enumerable: true,
    configurable: true
  });
  return EquipmentXml;
}();
exports.EquipmentXml = d;