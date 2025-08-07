Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./16.js");
var u = require("./28.js");
var d = require("./30.js");
var p = require("./4.js");
var h = require("./127.js");
var g = require("./562.js");
var C = function (e) {
  function BasicEquipmentVO() {
    var t = e.call(this) || this;
    t._boni = [];
    t._id = NaN;
    t._uniqueID = 0;
    t._rareID = 0;
    t._visualRareID = 0;
    t._enchantmentLevel = 0;
    t._durationEndTimestamp = NaN;
    t._totalDuration = 0;
    t._canSlotGem = true;
    t._isPermanent = true;
    t._starRarity = -1;
    t._starLevel = -1;
    t._reuseAssetOfEquipmentID = -1;
    t._skinID = -1;
    t._equipmentTypeID = -1;
    t._sellPriceOverride = -1;
    return t;
  }
  n.__extends(BasicEquipmentVO, e);
  BasicEquipmentVO.prototype.parseCustomPrivateOfferEquipment = function (e) {
    var t = e[4].split(",");
    var i = [];
    if (t != null) {
      for (var n = 0, o = t; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined) {
          i.push([parseInt(a.split("&")[0]), parseInt(a.split("&")[1])]);
        }
      }
    }
    this.parseEquipFromArray([0, e[0], e[1], e[2], e[3], i, -1, -1, 0, 0, BasicEquipmentVO.NO_GEM_ID]);
  };
  BasicEquipmentVO.prototype.parseEquipFromArray = function (e) {
    if (!(e.length < 3)) {
      this._id = e[0];
      this._slotTypeId = e[1];
      this._slotType = h.BasicEquippableVO.getSlotType(this._slotTypeId);
      this._lordTypeId = e[2];
      this._lordType = h.BasicEquippableVO.getLordType(this._lordTypeId);
      this.rareID = e[3];
      this._rarity = BasicEquipmentVO.parseRarityID(this._visualRareID);
      this._graphicString = e[4];
      this._uniqueID = l.int(e[6]);
      this._setID = e[7];
      this._enchantmentLevel = l.int(e[8]);
      this._durationEndTimestamp = d.CachedTimer.getCachedTimer() + e[9] * u.ClientConstTime.SEC_2_MILLISEC;
      this._isPermanent = e[9] < 1;
      if (!_.instanceOfClass(this, "RelicEquipmentVO")) {
        this._boni = this.parseBonuses(e[5]);
      }
      var t = l.int(e[10]);
      if (e.length > 10 && t != BasicEquipmentVO.NO_GEM_ID) {
        this._gemVO = p.CastleModel.gemData.getGemVO(t);
      }
      var i = p.CastleModel.equipData.getEquipmentByUniqueID(this._uniqueID);
      if (i) {
        this._canSlotGem = i.canSlotGem;
        this._starLevel = i.starLevel;
        this._starRarity = i.starRarity;
        this._reuseAssetOfEquipmentID = i.reuseAssetOfEquipmentID;
        this._skinID = i.skinID;
        this._sellPriceOverride = i.sellPriceOverride;
      }
      this._equipmentTypeID = l.int(e.length >= 12 ? e[11] : s.EquipmentConst.EQUIPMENT_TYPE_ID_GENERATED);
      if (!_.instanceOfClass(this, "RelicEquipmentVO")) {
        this._visClassName = this.setVisClassName();
      }
    }
  };
  BasicEquipmentVO.prototype.parseXML = function (e) {
    this._id = parseInt(e.equipmentID || "");
    this._slotTypeId = parseInt(e.slotID || "");
    this._slotType = h.BasicEquippableVO.getSlotType(this._slotTypeId);
    this._lordTypeId = parseInt(e.wearerID || "");
    this._lordType = h.BasicEquippableVO.getLordType(this._lordTypeId);
    this._rareID = parseInt(e.unique || "0") == 1 ? -1 : parseInt(e.rarenessID || "0");
    this.rareID = this._rareID;
    this._rarity = BasicEquipmentVO.parseRarityID(this._visualRareID);
    this._enchantmentLevel = 0;
    this._graphicString = m.CastleXMLUtils.getValueOrDefault("picID", e, "-1");
    this._totalDuration = parseInt(e.duration || "0") * u.ClientConstTime.HOURES_2_SEC;
    this._durationEndTimestamp = d.CachedTimer.getCachedTimer() + this._totalDuration * u.ClientConstTime.SEC_2_MILLISEC;
    this._isPermanent = this._totalDuration < 1;
    var t = e.effects || "";
    var i = [];
    if (t.length > 0) {
      i = t.split(",");
    }
    var n = [];
    if (i != null) {
      for (var o = 0, a = i; o < a.length; o++) {
        var r = a[o];
        if (r !== undefined) {
          if (r.split("&")[1].indexOf("+") >= 0) {
            var l = r.split("&")[1];
            n.push([parseInt(r.split("&")[0]), [parseInt(l.split("+")[0]), parseInt(l.split("+")[1])]]);
          } else {
            n.push([parseInt(r.split("&")[0]), [parseInt(r.split("&")[1])]]);
          }
        }
      }
    }
    if (!_.instanceOfClass(this, "RelicEquipmentVO")) {
      this._boni = this.parseBonuses(n);
    }
    this._uniqueID = parseInt(e.equipmentID || "");
    this._setID = parseInt(m.CastleXMLUtils.getValueOrDefault("setID", e, "-1"));
    this._sellPriceOverride = parseInt(m.CastleXMLUtils.getValueOrDefault("sellPriceOverride", e, "-1"));
    var c = m.CastleXMLUtils.getValueOrDefault("AlienHeroEffectString", e, "");
    this._equipmentTypeID = c != "" ? parseInt(c) : s.EquipmentConst.EQUIPMENT_TYPE_ID_GENERATED;
    this._canSlotGem = !!parseInt(m.CastleXMLUtils.getValueOrDefault("canSlotGem", e, "1"));
    this._starLevel = parseInt(m.CastleXMLUtils.getValueOrDefault("starLevel", e, "-1"));
    this._starRarity = parseInt(m.CastleXMLUtils.getValueOrDefault("starRarity", e, "-1"));
    this._reuseAssetOfEquipmentID = parseInt(m.CastleXMLUtils.getValueOrDefault("reuseAssetOfEquipmentID", e, "-1"));
    this._skinID = parseInt(m.CastleXMLUtils.getValueOrDefault("skinID", e, "-1"));
    if (!_.instanceOfClass(this, "RelicEquipmentVO")) {
      this._visClassName = this.setVisClassName();
    }
  };
  BasicEquipmentVO.prototype.parseBonus = function (e, t) {
    return new g.EquipmentBonusVO().parseEquipmentFromValueArray(e, [t]);
  };
  BasicEquipmentVO.prototype.parseBonuses = function (e) {
    var t = [];
    for (var i = 0; i < e.length; i++) {
      var n = e[i];
      t.push(this.parseBonus(n[0], Array.isArray(n[1]) ? n[1] : [n[1]]));
    }
    return t;
  };
  BasicEquipmentVO.prototype.setVisClassName = function () {
    if (this._rarity == BasicEquipmentVO.RARITY_UNIQUE) {
      return "Item_Unique_" + this.reuseAssetOfEquipmentID;
    } else {
      return "Item_" + this._slotType + "0" + this.graphicsSuffix + "_LV" + this._rareID;
    }
  };
  BasicEquipmentVO.parseRarityID = function (e) {
    switch (e) {
      case s.EquipmentConst.RARENESS_COMMON:
      case s.EquipmentConst.RARENESS_HERO_COMMON:
        return BasicEquipmentVO.RARITY_COMMON;
      case s.EquipmentConst.RARENESS_RARE:
      case s.EquipmentConst.RARENESS_HERO_RARE:
        return BasicEquipmentVO.RARITY_RARE;
      case s.EquipmentConst.RARENESS_EPIC:
      case s.EquipmentConst.RARENESS_HERO_EPIC:
        return BasicEquipmentVO.RARITY_EPIC;
      case s.EquipmentConst.RARENESS_LEGENDARY:
      case s.EquipmentConst.RARENESS_HERO_LEGENDARY:
        return BasicEquipmentVO.RARITY_LEGENDARY;
      case s.EquipmentConst.RARENESS_RELIC:
        return BasicEquipmentVO.RARITY_RELIC;
      default:
        return BasicEquipmentVO.RARITY_UNIQUE;
    }
  };
  Object.defineProperty(BasicEquipmentVO.prototype, "visClassName", {
    get: function () {
      return this._visClassName;
    },
    enumerable: true,
    configurable: true
  });
  BasicEquipmentVO.prototype.getFilePath = function () {
    return o.BasicModel.basicLoaderData.getVersionedItemAssetUrl(this._visClassName);
  };
  Object.defineProperty(BasicEquipmentVO.prototype, "rarity", {
    get: function () {
      return this._rarity;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquipmentVO.prototype, "boni", {
    get: function () {
      return this._boni;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquipmentVO.prototype, "graphicsSuffix", {
    get: function () {
      return String(Math.min(l.int(this._graphicString) + 1, 4));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquipmentVO.prototype, "nameString", {
    get: function () {
      var e;
      if (this.rarity == BasicEquipmentVO.RARITY_UNIQUE) {
        e = r.Localize.text("equipment_unique_" + this.reuseAssetOfEquipmentID);
        if (this._enchantmentLevel > 0) {
          e = r.Localize.text("equipment_name_enchanted", [e, this._enchantmentLevel]);
        }
        if (e.length <= 1) {
          return this.typeDescriptionText;
        } else {
          return e;
        }
      } else {
        e = r.Localize.text("equip_name_rarity_" + this.rarity.toLowerCase() + "_slottype_" + this.slotType.toLowerCase(), [this.effectSuffix]);
        if (this._enchantmentLevel > 0) {
          e = r.Localize.text("equipment_name_enchanted", [e, this._enchantmentLevel]);
        }
        if (e.length <= 1) {
          return this.typeDescriptionText;
        } else {
          return e;
        }
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(h.BasicEquippableVO.prototype, "nameString").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquipmentVO.prototype, "effectSuffix", {
    get: function () {
      if (this._boni.length <= 0) {
        return "";
      } else {
        return r.Localize.text("equip_name_effect_" + this._boni[0].effect.name);
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquipmentVO.prototype, "nameColor", {
    get: function () {
      var e = 0;
      switch (this.rarity) {
        case BasicEquipmentVO.RARITY_COMMON:
          e = c.ClientConstColor.EQUIPMENT_COLOR_RARITY_COMMON;
          break;
        case BasicEquipmentVO.RARITY_RARE:
          e = c.ClientConstColor.EQUIPMENT_COLOR_RARITY_RARE;
          break;
        case BasicEquipmentVO.RARITY_EPIC:
          e = c.ClientConstColor.EQUIPMENT_COLOR_RARITY_EPIC;
          break;
        case BasicEquipmentVO.RARITY_LEGENDARY:
          e = c.ClientConstColor.EQUIPMENT_COLOR_RARITY_LEGENDARY;
          break;
        case BasicEquipmentVO.RARITY_UNIQUE:
          e = c.ClientConstColor.EQUIPMENT_COLOR_RARITY_UNIQUE;
      }
      return e;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(h.BasicEquippableVO.prototype, "nameColor").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquipmentVO.prototype, "isUseableForTripleCraft", {
    get: function () {
      if (this._slotType == h.BasicEquippableVO.SLOT_TYPE_SKIN) {
        return false;
      }
      switch (this._rarity) {
        case BasicEquipmentVO.RARITY_COMMON:
        case BasicEquipmentVO.RARITY_EPIC:
        case BasicEquipmentVO.RARITY_LEGENDARY:
        case BasicEquipmentVO.RARITY_RARE:
          return true;
      }
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquipmentVO.prototype, "isUseableForSextupleCraft", {
    get: function () {
      if (this._slotType == h.BasicEquippableVO.SLOT_TYPE_SKIN) {
        return false;
      }
      switch (this._rarity) {
        case BasicEquipmentVO.RARITY_COMMON:
        case BasicEquipmentVO.RARITY_EPIC:
        case BasicEquipmentVO.RARITY_RARE:
          return true;
      }
      return false;
    },
    enumerable: true,
    configurable: true
  });
  BasicEquipmentVO.prototype.isSkinItem = function () {
    return this._slotType == h.BasicEquippableVO.SLOT_TYPE_SKIN;
  };
  Object.defineProperty(BasicEquipmentVO.prototype, "bonusDescriptionText", {
    get: function () {
      var e = "";
      if (this._boni != null) {
        for (var t = 0, i = this._boni; t < i.length; t++) {
          var n = i[t];
          if (n !== undefined) {
            if (e.length > 0) {
              e += "\n";
            }
            if (p.CastleModel.settingsData.showEffectValuesActive) {
              e += n.effect.name + ": " + n.strength;
            } else {
              e += n.descriptionText;
            }
          }
        }
      }
      return e;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(h.BasicEquippableVO.prototype, "bonusDescriptionText").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquipmentVO.prototype, "typeDescriptionText", {
    get: function () {
      return (this.lordType ? r.Localize.text("equipment_itemType_" + this.lordType.toLowerCase()) + " - " : "") + (this.slotType ? r.Localize.text("equipment_slotType_" + this.slotType.toLowerCase()) + " - " : "") + (this.rarity ? r.Localize.text("equipment_rarity_" + this.rarity.toLowerCase()) : "") + (this.isPermanent ? " - " + r.Localize.text("permanent") : " - " + r.Localize.text("temporary"));
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(h.BasicEquippableVO.prototype, "typeDescriptionText").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquipmentVO.prototype, "typeDescriptionStarLevelText", {
    get: function () {
      if (!this.hasStar) {
        return "";
      }
      var e = "";
      switch (this.starRarity) {
        case BasicEquipmentVO.STAR_RARITY_COMMON:
          e = r.Localize.text("starSystem_rarity_ordinary");
          break;
        case BasicEquipmentVO.STAR_RARITY_UNIQUE:
          e = r.Localize.text("starSystem_rarity_unique");
          break;
        case BasicEquipmentVO.STAR_RARITY_RARE:
          e = r.Localize.text("starSystem_rarity_rare");
          break;
        case BasicEquipmentVO.STAR_RARITY_EPIC:
          e = r.Localize.text("starSystem_rarity_epic");
          break;
        case BasicEquipmentVO.STAR_RARITY_LEGENDARY:
          e = r.Localize.text("starSystem_rarity_legendary");
      }
      var t = r.Localize.text("starSystem_rarity", [e]);
      var i = r.Localize.text("starSystem_level", [this.starLevel]);
      return r.Localize.text("value_dash_split", [i, t]);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(h.BasicEquippableVO.prototype, "typeDescriptionStarLevelText").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquipmentVO.prototype, "hasSetbonus", {
    get: function () {
      return this._setID != -1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquipmentVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(h.BasicEquippableVO.prototype, "id").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquipmentVO.prototype, "extraText", {
    get: function () {
      if (this._rareID == s.EquipmentConst.RARENESS_UNIQUE) {
        return r.Localize.text("equipment_unique_" + this._uniqueID + "_desc");
      } else {
        return "";
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(h.BasicEquippableVO.prototype, "extraText").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquipmentVO.prototype, "extraTextId", {
    get: function () {
      if (this._rareID == s.EquipmentConst.RARENESS_UNIQUE) {
        return "equipment_unique_" + this._uniqueID + "_desc";
      } else {
        return "";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquipmentVO.prototype, "extraTextAppearanceTarget", {
    get: function () {
      if (this.isSkinItem()) {
        if (this.lordType == BasicEquipmentVO.LORD_TYPE_BARON) {
          if (this.skinInfoObject.increasedSize) {
            return r.Localize.text("equip_effect_description_appearance_baron_transformationTarget_increasedSizeLTPE");
          } else {
            return r.Localize.text("equip_effect_description_appearance_baron_transformationTarget");
          }
        } else {
          return r.Localize.text("equip_effect_description_appearance_commander_transformationTarget");
        }
      } else {
        return "";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquipmentVO.prototype, "skinInfoObject", {
    get: function () {
      return p.CastleModel.equipData.equipmentXml.getWorldmapSkin(this._skinID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquipmentVO.prototype, "skinAssetID", {
    get: function () {
      return String(this.skinInfoObject.name);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquipmentVO.prototype, "skinDefinesOutpostResourceAssets", {
    get: function () {
      return this.skinInfoObject.definesResources;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquipmentVO.prototype, "skinDefinesAssetForAllCastleLevels", {
    get: function () {
      return this.skinInfoObject.definesAllCastleLevels;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquipmentVO.prototype, "skinDefinesAssetForMoat", {
    get: function () {
      return this.skinInfoObject.definesMoat;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquipmentVO.prototype, "skinDefinesIncreasedAsset", {
    get: function () {
      return this.skinInfoObject.increasedSize;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquipmentVO.prototype, "uniqueID", {
    get: function () {
      return this._uniqueID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquipmentVO.prototype, "enchantmentLevel", {
    get: function () {
      return this._enchantmentLevel;
    },
    set: function (e) {
      this._enchantmentLevel = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquipmentVO.prototype, "isEnchantable", {
    get: function () {
      return this._slotType != h.BasicEquippableVO.SLOT_TYPE_SKIN;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquipmentVO.prototype, "remainingDuration", {
    get: function () {
      return Math.max(this._durationEndTimestamp - d.CachedTimer.getCachedTimer(), 0) * u.ClientConstTime.MILLISEC_2_SEC;
    },
    enumerable: true,
    configurable: true
  });
  BasicEquipmentVO.prototype.setRemainingTime = function (e) {
    this._durationEndTimestamp = d.CachedTimer.getCachedTimer() + e * u.ClientConstTime.SEC_2_MILLISEC;
  };
  Object.defineProperty(BasicEquipmentVO.prototype, "totalDuration", {
    get: function () {
      return this._totalDuration;
    },
    set: function (e) {
      this._totalDuration = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquipmentVO.prototype, "gemVO", {
    get: function () {
      return this._gemVO;
    },
    set: function (e) {
      this._gemVO = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquipmentVO.prototype, "isHeroBonus", {
    get: function () {
      return this.slotType == h.BasicEquippableVO.SLOT_TYPE_HERO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquipmentVO.prototype, "rareID", {
    get: function () {
      return this._rareID;
    },
    set: function (e) {
      this._rareID = e;
      this.visualRareID = e;
      this._rarity = BasicEquipmentVO.parseRarityID(this._visualRareID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquipmentVO.prototype, "isPermanent", {
    get: function () {
      return this._isPermanent;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(h.BasicEquippableVO.prototype, "isPermanent").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquipmentVO.prototype, "visualRareID", {
    get: function () {
      return this._visualRareID;
    },
    set: function (e) {
      switch (e) {
        case s.EquipmentConst.RARENESS_COMMON:
        case s.EquipmentConst.RARENESS_HERO_COMMON:
          this._visualRareID = l.int(s.EquipmentConst.RARENESS_COMMON);
          break;
        case s.EquipmentConst.RARENESS_RARE:
        case s.EquipmentConst.RARENESS_HERO_RARE:
          this._visualRareID = l.int(s.EquipmentConst.RARENESS_RARE);
          break;
        case s.EquipmentConst.RARENESS_EPIC:
        case s.EquipmentConst.RARENESS_HERO_EPIC:
          this._visualRareID = l.int(s.EquipmentConst.RARENESS_EPIC);
          break;
        case s.EquipmentConst.RARENESS_LEGENDARY:
        case s.EquipmentConst.RARENESS_HERO_LEGENDARY:
          this._visualRareID = l.int(s.EquipmentConst.RARENESS_LEGENDARY);
          break;
        case s.EquipmentConst.RARENESS_RELIC:
        case s.EquipmentConst.RARENESS_HERO_RELIC:
          this._visualRareID = l.int(s.EquipmentConst.RARENESS_RELIC);
          break;
        default:
          this._visualRareID = l.int(s.EquipmentConst.RARENESS_UNIQUE);
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquipmentVO.prototype, "sellPriceOverride", {
    get: function () {
      return this._sellPriceOverride;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquipmentVO.prototype, "canSlotGem", {
    get: function () {
      return this._canSlotGem;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquipmentVO.prototype, "starRarity", {
    get: function () {
      return this._starRarity;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquipmentVO.prototype, "starLevel", {
    get: function () {
      return this._starLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquipmentVO.prototype, "hasStar", {
    get: function () {
      return this.starLevel > -1 && this.starRarity > -1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquipmentVO.prototype, "reuseAssetOfEquipmentID", {
    get: function () {
      if (this._reuseAssetOfEquipmentID > 0) {
        return this._reuseAssetOfEquipmentID;
      } else {
        return this._uniqueID;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquipmentVO.prototype, "durationEndTimestamp", {
    get: function () {
      return this._durationEndTimestamp;
    },
    set: function (e) {
      this._durationEndTimestamp = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquipmentVO.prototype, "skinID", {
    get: function () {
      return this._skinID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquipmentVO.prototype, "equipmentTypeID", {
    get: function () {
      return this._equipmentTypeID;
    },
    enumerable: true,
    configurable: true
  });
  BasicEquipmentVO.RARITY_COMMON = "Common";
  BasicEquipmentVO.RARITY_RARE = "Rare";
  BasicEquipmentVO.RARITY_EPIC = "Epic";
  BasicEquipmentVO.RARITY_LEGENDARY = "Legendary";
  BasicEquipmentVO.RARITY_UNIQUE = "Unique";
  BasicEquipmentVO.RARITY_RELIC = "Relic";
  BasicEquipmentVO.STAR_RARITY_COMMON = 0;
  BasicEquipmentVO.STAR_RARITY_RARE = 1;
  BasicEquipmentVO.STAR_RARITY_EPIC = 2;
  BasicEquipmentVO.STAR_RARITY_LEGENDARY = 3;
  BasicEquipmentVO.STAR_RARITY_UNIQUE = 4;
  BasicEquipmentVO.NO_GEM_ID = -1;
  return BasicEquipmentVO;
}(h.BasicEquippableVO);
exports.BasicEquipmentVO = C;
a.classImplementsInterfaces(C, "IEquippableVO");
var _ = require("./1.js");
var m = require("./22.js");