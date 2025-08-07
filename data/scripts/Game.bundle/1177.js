Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./4.js");
var u = require("./198.js");
var d = function (e) {
  function CastleHeroVO() {
    var t = this;
    t._itemGroupID = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(CastleHeroVO, e);
  CastleHeroVO.prototype.setVisClassName = function () {
    if (this.rarity == u.BasicEquipmentVO.RARITY_UNIQUE) {
      return "Hero_Unique_" + this.reuseAssetOfEquipmentID;
    } else {
      return "Hero_Generic_" + this._graphicString;
    }
  };
  CastleHeroVO.prototype.parseEquipFromArray = function (t) {
    e.prototype.parseEquipFromArray.call(this, t);
    this.alienString = t[11];
  };
  CastleHeroVO.prototype.getFilePath = function () {
    return o.BasicModel.basicLoaderData.getVersionedItemAssetUrl(this.setVisClassName());
  };
  CastleHeroVO.prototype.parseBonuses = function (t) {
    if (t && t.length > 0) {
      this.setGroupID(t[0][0]);
    }
    return e.prototype.parseBonuses.call(this, t);
  };
  Object.defineProperty(CastleHeroVO.prototype, "nameString", {
    get: function () {
      var e = "";
      if (this._uniqueID > 0) {
        e += r.Localize.text("hero_unique_" + this.reuseAssetOfEquipmentID);
      } else {
        e += r.Localize.text("hero_generic_" + this._graphicString);
      }
      if (this.enchantmentLevel > 0) {
        e = r.Localize.text("equipment_name_enchanted", [e, this.enchantmentLevel]);
      }
      return e;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.BasicEquipmentVO.prototype, "nameString").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleHeroVO.prototype, "extraText", {
    get: function () {
      if (this.visualRareID == s.EquipmentConst.RARENESS_UNIQUE) {
        return r.Localize.text("hero_unique_" + this.reuseAssetOfEquipmentID + "_desc");
      } else {
        return "";
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.BasicEquipmentVO.prototype, "extraText").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleHeroVO.prototype, "extraTextId", {
    get: function () {
      if (this.visualRareID == s.EquipmentConst.RARENESS_UNIQUE) {
        return "hero_unique_" + this.reuseAssetOfEquipmentID + "_desc";
      } else {
        return "";
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.BasicEquipmentVO.prototype, "extraTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleHeroVO.prototype, "isEnchantable", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.BasicEquipmentVO.prototype, "isEnchantable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleHeroVO.prototype.setGroupID = function (e) {
    this._itemGroupID = l.int(c.CastleModel.equipData.equipmentXml.getEffectGroupIdByEffectId(e));
  };
  Object.defineProperty(CastleHeroVO.prototype, "itemGroupID", {
    get: function () {
      return this._itemGroupID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleHeroVO.prototype, "canSlotGem", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  return CastleHeroVO;
}(u.BasicEquipmentVO);
exports.CastleHeroVO = d;
a.classImplementsInterfaces(d, "IEquippableVO");