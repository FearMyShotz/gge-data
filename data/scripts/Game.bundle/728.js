Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./16.js");
var r = require("./4.js");
var l = require("./127.js");
var c = require("./1314.js");
var u = function (e) {
  function CastleGemVO(t = null) {
    var i = e.call(this) || this;
    i._id = 0;
    i._upgradeId = 0;
    i._boni = [];
    i._maxLevel = -1;
    i._starRarity = -1;
    i._starLevel = -1;
    i._reuseAssetOfGemID = -1;
    i._sellPriceOverride = -1;
    if (t) {
      i.parseXML(t);
    }
    return i;
  }
  n.__extends(CastleGemVO, e);
  CastleGemVO.prototype.parseXML = function (e) {
    this._id = parseInt(e.gemID || "");
    this._upgradeId = parseInt(p.CastleXMLUtils.getValueOrDefault("followingGemID", e, "-1"));
    var t = parseInt(e.gemLevelID || "");
    this._levelInfos = r.CastleModel.gemData.getLevelInfo(t);
    this._setID = parseInt(p.CastleXMLUtils.getValueOrDefault("setID", e, "-1"));
    this._lordTypeId = parseInt(e.wearerID || "");
    this._lordType = l.BasicEquippableVO.getLordType(this._lordTypeId);
    this._slotTypeId = parseInt(p.CastleXMLUtils.getValueOrDefault("slotID", e, "0"));
    this._slotType = l.BasicEquippableVO.getSlotType(this._slotTypeId);
    this._sellPriceOverride = parseInt(p.CastleXMLUtils.getValueOrDefault("sellPriceOverride", e, "-1"));
    this._boni = [];
    var i = p.CastleXMLUtils.getValueOrDefault("effects", e, "");
    var n = parseInt(p.CastleXMLUtils.getValueOrDefault("triggerChance", e, "100"));
    this._starLevel = parseInt(p.CastleXMLUtils.getValueOrDefault("starLevel", e, "-1"));
    this._starRarity = parseInt(p.CastleXMLUtils.getValueOrDefault("starRarity", e, "-1"));
    this._reuseAssetOfGemID = parseInt(p.CastleXMLUtils.getValueOrDefault("reuseAssetOfGemID", e, "-1"));
    for (var o = 0, a = i.split(","); o < a.length; o++) {
      var s = a[o];
      if (s.length > 0) {
        var u = s.split("&");
        var d = r.CastleModel.effectsData.getEffectByID(parseInt(u[0]));
        var h = new c.GemBonusVO().parseGemBonusFromValueString(d, u[1], n);
        this._boni.push(h);
      }
    }
  };
  Object.defineProperty(CastleGemVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.BasicEquippableVO.prototype, "id").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGemVO.prototype, "level", {
    get: function () {
      return this._levelInfos.levelID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGemVO.prototype, "maxLevel", {
    get: function () {
      if (this._maxLevel < 0) {
        this._maxLevel = this.level;
        for (var e = this; e && e.upgradeId >= 0;) {
          e = r.CastleModel.gemData.getGemVO(e.upgradeId);
          this._maxLevel = e.level;
        }
      }
      return this._maxLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGemVO.prototype, "levelInfos", {
    get: function () {
      return this._levelInfos;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGemVO.prototype, "isUpgradable", {
    get: function () {
      return this.upgradeId >= 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGemVO.prototype, "sellPriceOverride", {
    get: function () {
      return this._sellPriceOverride;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGemVO.prototype, "upgradeId", {
    get: function () {
      return this._upgradeId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGemVO.prototype, "nameString", {
    get: function () {
      if (this.isUnique) {
        return a.Localize.text("gem_unique_" + this.reuseAssetOfGemID);
      } else if (this.boni[0].triggerChance == 100) {
        return a.Localize.text("gem_effect_name_" + this.boni[0].gemTypeString + "_100", [this.level]);
      } else {
        return a.Localize.text("gem_effect_name_" + this.boni[0].gemTypeString, [this.level]);
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.BasicEquippableVO.prototype, "nameString").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGemVO.prototype, "isUnique", {
    get: function () {
      return this.level == 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGemVO.prototype, "nameColor", {
    get: function () {
      if (this.isUnique) {
        return s.ClientConstColor.EQUIPMENT_COLOR_RARITY_UNIQUE;
      } else {
        return s.ClientConstColor.EQUIPMENT_COLOR_GEM;
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.BasicEquippableVO.prototype, "nameColor").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGemVO.prototype, "typeDescriptionText", {
    get: function () {
      var e = a.Localize.text("equipment_itemType_" + this.lordType.toLowerCase());
      if (this.isUnique) {
        var t = a.Localize.text("equipment_rarity_unique");
        return e + " - " + a.Localize.text("gem_slotType_" + this.slotType) + " - " + t;
      }
      return e;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.BasicEquippableVO.prototype, "typeDescriptionText").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGemVO.prototype, "typeDescriptionStarLevelText", {
    get: function () {
      if (!this.hasStar) {
        return "";
      }
      var e = "";
      switch (this.starRarity) {
        case d.BasicEquipmentVO.STAR_RARITY_COMMON:
          e = a.Localize.text("starSystem_rarity_ordinary");
          break;
        case d.BasicEquipmentVO.STAR_RARITY_UNIQUE:
          e = a.Localize.text("starSystem_rarity_unique");
          break;
        case d.BasicEquipmentVO.STAR_RARITY_RARE:
          e = a.Localize.text("starSystem_rarity_rare");
          break;
        case d.BasicEquipmentVO.STAR_RARITY_EPIC:
          e = a.Localize.text("starSystem_rarity_epic");
          break;
        case d.BasicEquipmentVO.STAR_RARITY_LEGENDARY:
          e = a.Localize.text("starSystem_rarity_legendary");
      }
      var t = a.Localize.text("starSystem_rarity", [e]);
      var i = a.Localize.text("starSystem_level", [this.starLevel]);
      return a.Localize.text("value_dash_split", [i, t]);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.BasicEquippableVO.prototype, "typeDescriptionStarLevelText").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGemVO.prototype, "bonusDescriptionText", {
    get: function () {
      var e = "";
      if (this._boni != null) {
        for (var t = 0, i = this._boni; t < i.length; t++) {
          var n = i[t];
          if (n !== undefined) {
            if (e.length > 0) {
              e += "\n";
            }
            e += n.descriptionText;
          }
        }
      }
      return e;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.BasicEquippableVO.prototype, "bonusDescriptionText").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGemVO.prototype, "extraText", {
    get: function () {
      if (this.isUnique) {
        return a.Localize.text("gem_unique_" + this.reuseAssetOfGemID + "_desc");
      } else {
        return "";
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.BasicEquippableVO.prototype, "extraText").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGemVO.prototype, "boni", {
    get: function () {
      return this._boni;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGemVO.prototype, "isPermanent", {
    get: function () {
      return true;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.BasicEquippableVO.prototype, "isPermanent").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGemVO.prototype, "starRarity", {
    get: function () {
      return this._starRarity;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGemVO.prototype, "starLevel", {
    get: function () {
      return this._starLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGemVO.prototype, "hasStar", {
    get: function () {
      return this.starLevel > -1 && this.starRarity > -1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGemVO.prototype, "reuseAssetOfGemID", {
    get: function () {
      if (this._reuseAssetOfGemID > 0) {
        return this._reuseAssetOfGemID;
      } else {
        return this._id;
      }
    },
    enumerable: true,
    configurable: true
  });
  return CastleGemVO;
}(l.BasicEquippableVO);
exports.CastleGemVO = u;
var d = require("./198.js");
var p = require("./22.js");
o.classImplementsInterfaces(u, "IEquippableVO");