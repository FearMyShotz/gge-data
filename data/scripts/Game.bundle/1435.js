Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./5.js");
var o = require("./3.js");
var a = require("./16.js");
var s = require("./28.js");
var r = require("./55.js");
var l = require("./22.js");
var c = require("./86.js");
var u = require("./50.js");
var d = require("./46.js");
var p = require("./30.js");
var h = require("./239.js");
var g = require("./628.js");
var C = require("./176.js");
var _ = require("./4.js");
var m = require("./165.js");
var f = require("./56.js");
var O = require("./2683.js");
var E = function () {
  function ConstructionItemVO(e = null) {
    this._id = 0;
    this._groupId = 0;
    this._effectGroupId = 0;
    this._level = 0;
    this._rarity = 0;
    this._slotType = 0;
    this._applicableBuildings = [];
    this._removalCostC1 = 0;
    this._isPremium = false;
    this._disassemblingTombolaID = -1;
    this._expirationTimestamp = 0;
    if (e) {
      this.fillFromParamXML(e);
    }
  }
  ConstructionItemVO.prototype.fillFromParamXML = function (e) {
    this.parseBasicValues(e);
    this.parseEffects(e);
    this.parseBoni(e);
  };
  ConstructionItemVO.prototype.parseBasicValues = function (e) {
    this._id = parseInt(l.CastleXMLUtils.getValueOrDefault("constructionItemID", e, "0"));
    this._groupId = parseInt(l.CastleXMLUtils.getValueOrDefault("constructionItemGroupID", e, "0"));
    this._effectGroupId = parseInt(l.CastleXMLUtils.getValueOrDefault("constructionItemEffectGroupID", e, "0"));
    this._level = parseInt(l.CastleXMLUtils.getValueOrDefault("level", e, "0"));
    this._rarity = parseInt(l.CastleXMLUtils.getValueOrDefault("rarenessID", e, "0"));
    this._slotType = parseInt(l.CastleXMLUtils.getValueOrDefault("slotTypeID", e, "0"));
    this._removalCostC1 = parseInt(l.CastleXMLUtils.getValueOrDefault("removalCostC1", e, "0"));
    this._name = l.CastleXMLUtils.getValueOrDefault("name", e, "");
    this._lockRemoval = l.CastleXMLUtils.getValueOrDefault("lockRemoval", e, "");
    this._isPremium = !!l.CastleXMLUtils.getValueOrDefault("isPremium", e, "");
    this._duration = parseInt(l.CastleXMLUtils.getValueOrDefault("duration", e, "0"));
    this._disassemblingTombolaID = parseInt(l.CastleXMLUtils.getValueOrDefault("disassemblingTombolaID", e, "-1"));
    this._disassembleMaterials = u.CollectableManager.parser.x2cList.createList(e, c.ClientConstCollectable.XML_PREFIX_ADD);
  };
  ConstructionItemVO.prototype.parseEffects = function (e) {
    this._effects = O.CastleEffectVO.createFromXML(e);
  };
  ConstructionItemVO.prototype.parseBoni = function (e) {
    this._boni = [];
    var t = l.CastleXMLUtils.getValueOrDefault("effects", e, "");
    if (t != "") {
      for (var i = 0, n = t.split(","); i < n.length; i++) {
        var o = n[i];
        if (o.length > 0) {
          var a = o.split("&");
          var s = _.CastleModel.effectsData.getEffectByID(parseInt(a[0]));
          var r = new m.BonusVO().parseFromValueString(s, a[1]);
          this._boni.push(r);
        }
      }
    }
  };
  Object.defineProperty(ConstructionItemVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemVO.prototype, "name", {
    get: function () {
      return this._name;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemVO.prototype, "groupId", {
    get: function () {
      return this._groupId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemVO.prototype, "level", {
    get: function () {
      return this._level;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemVO.prototype, "rarity", {
    get: function () {
      return this._rarity;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemVO.prototype, "slotType", {
    get: function () {
      return this._slotType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemVO.prototype, "disassembleMaterials", {
    get: function () {
      return this._disassembleMaterials;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemVO.prototype, "isPrimaryItem", {
    get: function () {
      return this._slotType == n.ConstructionItemConst.PRIMARY_SLOT_TYPE;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemVO.prototype, "isSecondaryItem", {
    get: function () {
      return this._slotType == n.ConstructionItemConst.SECONDARY_SLOT_TYPE;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemVO.prototype, "isAppearanceItem", {
    get: function () {
      return this._slotType == n.ConstructionItemConst.APPEARANCE_SLOT_TYPE;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemVO.prototype, "skin", {
    get: function () {
      return this._name;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemVO.prototype, "effectGroupId", {
    get: function () {
      return this._effectGroupId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemVO.prototype, "buildingIconClass", {
    get: function () {
      if (!this._applicableBuildings) {
        return null;
      }
      var e = [];
      if (this._applicableBuildings != null) {
        for (var t = 0, i = this._applicableBuildings; t < i.length; t++) {
          var n = i[t];
          if (n !== undefined) {
            var o = d.IsoHelper.view.createIsoObjectVEFromVO(n).buildingGroundIconClass;
            if (e.indexOf(o) == -1) {
              e.push(d.IsoHelper.view.createIsoObjectVEFromVO(n).buildingGroundIconClass);
            }
            if (e.length > 1) {
              return null;
            }
          }
        }
      }
      return e[0];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemVO.prototype, "visClassName", {
    get: function () {
      return "ConstructionItem_" + r.ClientConstUtils.capitalizeFirstLetter(this.name);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemVO.prototype, "effectText", {
    get: function () {
      var e = "";
      this._effects.forEach(function (t) {
        if (e != "") {
          e += "\n";
        }
        e += o.Localize.text(t.constructionItemTextId, [t.value]) + (C.CastleDataHolder.instance.showEffectTypeIDs ? "  || Type: " + t.type.name + " ||" : "");
      });
      this._boni.forEach(function (t) {
        if (e != "") {
          e += "\n";
        }
        var i = "ci_effect_" + t.effect.getEnhancedName(t.effectValue);
        var n = t.effectValue.textReplacements;
        e += o.Localize.text(i, n) + (C.CastleDataHolder.instance.showEffectTypeIDs ? "  || TypeID: " + t.effect.effectTypeID + " ||" : "");
      });
      if (e == "") {
        return o.Localize.text("ci_effect_NA");
      } else {
        return e;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemVO.prototype, "removalCostC1", {
    get: function () {
      return this._removalCostC1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemVO.prototype, "rarityColor", {
    get: function () {
      var e = 0;
      switch (this.rarity) {
        case n.ConstructionItemConst.RARENESS_COMMON:
          e = a.ClientConstColor.EQUIPMENT_COLOR_RARITY_COMMON;
          break;
        case n.ConstructionItemConst.RARENESS_RARE:
          e = a.ClientConstColor.EQUIPMENT_COLOR_RARITY_RARE;
          break;
        case n.ConstructionItemConst.RARENESS_EPIC:
          e = a.ClientConstColor.EQUIPMENT_COLOR_RARITY_EPIC;
          break;
        case n.ConstructionItemConst.RARENESS_LEGENDARY:
          e = a.ClientConstColor.EQUIPMENT_COLOR_RARITY_LEGENDARY;
          break;
        case n.ConstructionItemConst.RARENESS_UNIQUE:
          e = a.ClientConstColor.EQUIPMENT_COLOR_RARITY_UNIQUE;
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemVO.prototype, "slotNameTextId", {
    get: function () {
      return h.ConstructionItemsHelper.getSlotNameTextId(this.slotType);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemVO.prototype, "rarityTextId", {
    get: function () {
      return ConstructionItemVO.rarityText(this.rarity);
    },
    enumerable: true,
    configurable: true
  });
  ConstructionItemVO.rarityText = function (e) {
    var t = "equipment_rarity_";
    switch (e) {
      case n.ConstructionItemConst.RARENESS_COMMON:
        return t + "common";
      case n.ConstructionItemConst.RARENESS_RARE:
        return t + "rare";
      case n.ConstructionItemConst.RARENESS_EPIC:
        return t + "epic";
      case n.ConstructionItemConst.RARENESS_LEGENDARY:
        return t + "legendary";
      case n.ConstructionItemConst.RARENESS_UNIQUE:
        return t + "unique";
    }
    return "";
  };
  Object.defineProperty(ConstructionItemVO.prototype, "skinnedBuildingVO", {
    get: function () {
      if (!this.isAppearanceItem || !this._applicableBuildings || this._applicableBuildings.length < 1) {
        return null;
      }
      var e = _.CastleModel.wodData.createVObyWOD(this._applicableBuildings[0].wodId, f.CastleWodData.TYPE_BUILDING);
      e.appearanceItem = this;
      return e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemVO.prototype, "applicableBuildingsString", {
    get: function () {
      if (!this._applicableBuildings) {
        return "";
      }
      var e = [];
      if (this._applicableBuildings != null) {
        for (var t = 0, i = this._applicableBuildings; t < i.length; t++) {
          var n = i[t];
          if (n !== undefined) {
            var a = o.Localize.text(n.getNameString());
            if (e.indexOf(a) == -1) {
              e.push(a);
            }
          }
        }
      }
      return e.join(", ");
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemVO.prototype, "nameTextId", {
    get: function () {
      return h.ConstructionItemsHelper.getBaseNameTextId(this.slotType) + "_" + this.name + (this.isPremium ? "_premium" : "");
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemVO.prototype, "flavourTextId", {
    get: function () {
      if (this.rarity == n.ConstructionItemConst.RARENESS_UNIQUE || this.isAppearanceItem) {
        if (o.Localize.text(this.nameTextId + "_flavour") != this.nameTextId + "_flavour" && o.Localize.text(this.nameTextId + "_flavour") != "") {
          return this.nameTextId + "_flavour";
        } else {
          return this.nameTextId + "_flavor";
        }
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemVO.prototype, "descriptionTextId", {
    get: function () {
      switch (this.slotType) {
        case n.ConstructionItemConst.APPEARANCE_SLOT_TYPE:
          if (this.isTemporary) {
            return "ci_short_info_temporaryAppearance";
          } else {
            return "ci_short_info_appearance";
          }
        case n.ConstructionItemConst.PRIMARY_SLOT_TYPE:
          return "ci_short_info_primary";
        case n.ConstructionItemConst.SECONDARY_SLOT_TYPE:
          return "ci_short_info_secondary";
      }
      return null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemVO.prototype, "applicableBuildings", {
    get: function () {
      return this._applicableBuildings;
    },
    set: function (e) {
      this._applicableBuildings = e;
    },
    enumerable: true,
    configurable: true
  });
  ConstructionItemVO.prototype.compareTo = function (e) {
    if (this.rarity != e.rarity) {
      if (this.rarity == n.ConstructionItemConst.RARENESS_UNIQUE || this.rarity > e.rarity && e.rarity != n.ConstructionItemConst.RARENESS_UNIQUE) {
        return -1;
      } else {
        return 1;
      }
    }
    if (this.level != e.level) {
      return e.level - this.level;
    }
    if (this._applicableBuildings && e._applicableBuildings && this._applicableBuildings.length > 0 && e._applicableBuildings.length > 0) {
      var t = o.Localize.text(this._applicableBuildings[0].getNameString());
      var i = o.Localize.text(e._applicableBuildings[0].getNameString());
      if (t < i) {
        return -1;
      }
      if (t > i) {
        return 1;
      }
    }
    if (this.id != e.id) {
      return this.id - e.id;
    } else {
      return 0;
    }
  };
  Object.defineProperty(ConstructionItemVO.prototype, "upgradeRecipe", {
    get: function () {
      var e = _.CastleModel.constructionItemData.getNextLevelItem(this);
      if (e) {
        return _.CastleModel.constructionItemBlueprintData.findRecipeFor(e);
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemVO.prototype, "areaLimit", {
    get: function () {
      return _.CastleModel.constructionItemData.getLimitByEffectGroup(this.effectGroupId);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemVO.prototype, "isRemovalLocked", {
    get: function () {
      return !!this._lockRemoval && (this._lockRemoval == ConstructionItemVO.RECRUIT_LOCKED && g.RecruitmentHelper.isRecruitingUnits() || this._lockRemoval == ConstructionItemVO.TOOL_PRODUCTION_LOCKED && g.RecruitmentHelper.isProducingTools());
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemVO.prototype, "isPremium", {
    get: function () {
      return this._isPremium;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemVO.prototype, "duration", {
    get: function () {
      return this._duration;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemVO.prototype, "isTemporary", {
    get: function () {
      return this._duration > 0;
    },
    enumerable: true,
    configurable: true
  });
  ConstructionItemVO.prototype.clone = function () {
    var e = new ConstructionItemVO();
    e.fillFromOther(this);
    return e;
  };
  ConstructionItemVO.prototype.fillFromOther = function (e) {
    this._id = e._id;
    this._groupId = e._groupId;
    this._effectGroupId = e._effectGroupId;
    this._level = e._level;
    this._rarity = e._rarity;
    this._slotType = e._slotType;
    this._removalCostC1 = e._slotType;
    this._name = e._name;
    this._lockRemoval = e._lockRemoval;
    this._isPremium = e._isPremium;
    this._duration = e._duration;
    this._disassembleMaterials = e._disassembleMaterials;
    this._effects = e._effects;
    this._boni = e._boni;
    this._applicableBuildings = e._applicableBuildings;
  };
  ConstructionItemVO.prototype.getRemainingTime = function () {
    if (this.isExpiring()) {
      return Math.max(this._expirationTimestamp - p.CachedTimer.getCachedTimer(), 0) * s.ClientConstTime.MILLISEC_2_SEC;
    } else {
      return this._duration;
    }
  };
  ConstructionItemVO.prototype.isExpiring = function () {
    return this._expirationTimestamp > 0;
  };
  Object.defineProperty(ConstructionItemVO.prototype, "disassemblingTombolaID", {
    get: function () {
      return this._disassemblingTombolaID;
    },
    enumerable: true,
    configurable: true
  });
  ConstructionItemVO.prototype.setRemainingTime = function (e) {
    this._expirationTimestamp = p.CachedTimer.getCachedTimer() + e * s.ClientConstTime.SEC_2_MILLISEC;
  };
  Object.defineProperty(ConstructionItemVO.prototype, "effectsAmount", {
    get: function () {
      var e = 0;
      if (this._effects) {
        e += this._effects.length;
      }
      if (this._boni) {
        e += this._boni.length;
      }
      return Math.max(1, e);
    },
    enumerable: true,
    configurable: true
  });
  ConstructionItemVO.prototype.getBluePrintEffectName = function (e) {
    if (e < this._effects.length) {
      return o.Localize.text(this._effects[e].constructionItemTextId + "_tt");
    }
    if (e < this.effectsAmount) {
      var t = this._boni[e - this._effects.length];
      return o.Localize.text("ci_effect_" + t.effect.getEnhancedName(t.effectValue) + "_tt");
    }
    return "";
  };
  ConstructionItemVO.prototype.getBlueprintEffectValueText = function (e) {
    if (e < this._effects.length) {
      return o.Localize.text(this._effects[e].type.valueTextID, [this._effects[e].value]);
    }
    if (e < this.effectsAmount) {
      var t = this._boni[e - this._effects.length];
      return o.Localize.text(t.effect.effectType.type.simpleValueTextID, t.effectValue.textReplacements);
    }
    return "";
  };
  Object.defineProperty(ConstructionItemVO.prototype, "boni", {
    get: function () {
      return this._boni;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemVO.prototype, "effects", {
    get: function () {
      return this._effects;
    },
    enumerable: true,
    configurable: true
  });
  ConstructionItemVO.RECRUIT_LOCKED = "SOLDIER_RECRUITMENT";
  ConstructionItemVO.TOOL_PRODUCTION_LOCKED = "TOOL_PRODUCTION";
  return ConstructionItemVO;
}();
exports.ConstructionItemVO = E;