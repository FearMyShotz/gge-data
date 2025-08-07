Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./6.js");
var a = require("./22.js");
var s = function () {
  function XmlEquipmentEffectVO() {
    this._id = 0;
    this._dropRate = 0;
    this._wearerId = 0;
    this._enchantmentPrimaryBonus = NaN;
    this._enchantmentSecondaryBonus = NaN;
    this._bonus = 0;
    this._effectId = 0;
    this._excludedMali = 0;
    this._ignoreCap = false;
  }
  XmlEquipmentEffectVO.prototype.parseXml = function (e) {
    this._id = o.int(a.CastleXMLUtils.getIntAttribute("equipmentEffectID", e, -1));
    this._dropRate = o.int(a.CastleXMLUtils.getIntAttribute("dropRate", e));
    this._wearerId = o.int(a.CastleXMLUtils.getIntAttribute("wearerID", e, -1));
    this._itemGroupIds = a.CastleXMLUtils.createIntListFromAttribute("itemGroupID", e);
    this._enchantmentPrimaryBonus = a.CastleXMLUtils.getNumberAttribute("enchantmentPrimaryBonus", e);
    this._enchantmentSecondaryBonus = a.CastleXMLUtils.getNumberAttribute("enchantmentSecondaryBonus", e);
    this._bonus = o.int(a.CastleXMLUtils.getIntAttribute("bonus", e));
    this._effectId = o.int(a.CastleXMLUtils.getIntAttribute("effectID", e, -1));
    this._excludedMali = o.int(a.CastleXMLUtils.getIntAttribute("excludedMali", e));
    this._ignoreCap = a.CastleXMLUtils.getBooleanAttribute("ignoreCap", e);
  };
  XmlEquipmentEffectVO.prototype.getItemGroupIdSafe = function () {
    return o.int(this.itemGroupIds.length > 0 ? this.itemGroupIds[0] : 0);
  };
  Object.defineProperty(XmlEquipmentEffectVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlEquipmentEffectVO.prototype, "dropRate", {
    get: function () {
      return this._dropRate;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlEquipmentEffectVO.prototype, "wearerId", {
    get: function () {
      return this._wearerId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlEquipmentEffectVO.prototype, "itemGroupIds", {
    get: function () {
      return this._itemGroupIds;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlEquipmentEffectVO.prototype, "enchantmentPrimaryBonus", {
    get: function () {
      return this._enchantmentPrimaryBonus;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlEquipmentEffectVO.prototype, "enchantmentSecondaryBonus", {
    get: function () {
      return this._enchantmentSecondaryBonus;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlEquipmentEffectVO.prototype, "bonus", {
    get: function () {
      return this._bonus;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlEquipmentEffectVO.prototype, "effectId", {
    get: function () {
      return this._effectId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlEquipmentEffectVO.prototype, "excludedMali", {
    get: function () {
      return this._excludedMali;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlEquipmentEffectVO.prototype, "ignoreCap", {
    get: function () {
      return this._ignoreCap;
    },
    enumerable: true,
    configurable: true
  });
  return XmlEquipmentEffectVO;
}();
exports.XmlEquipmentEffectVO = s;
n.classImplementsInterfaces(s, "IXmlElementVO");