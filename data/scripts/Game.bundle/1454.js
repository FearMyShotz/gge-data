Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastleLegendSkillVO() {
    this._id = 0;
    this._requiredSkillID = 0;
    this._skillTreeID = 0;
    this._tier = 0;
    this._skillGroupID = 0;
    this._level = 0;
    this._cost = 0;
    this._totalSkillPointsCost = 0;
    this._effectValue = 0;
    this._totalEffectValue = 0;
    this._previousID = 0;
    this._nextID = 0;
    this._isPreview = false;
    this._isActive = false;
  }
  CastleLegendSkillVO.prototype.parseXML = function (e) {
    this._id = parseInt(d.CastleXMLUtils.getValueOrDefault("skillID", e, "0"));
    this._requiredSkillID = parseInt(d.CastleXMLUtils.getValueOrDefault("requiredSkillID", e, "0"));
    this._skillTreeID = parseInt(d.CastleXMLUtils.getValueOrDefault("skillTreeID", e, "-1"));
    this._tier = parseInt(d.CastleXMLUtils.getValueOrDefault("tier", e, "0"));
    this._skillGroupID = parseInt(d.CastleXMLUtils.getValueOrDefault("skillGroupID", e, "0"));
    this._level = parseInt(d.CastleXMLUtils.getValueOrDefault("level", e, "0"));
    this._cost = parseInt(d.CastleXMLUtils.getValueOrDefault("costSkillPoints", e, "0"));
    this._totalSkillPointsCost = parseInt(d.CastleXMLUtils.getValueOrDefault("totalCostSkillPoints", e, "0"));
    this._effectType = C.CastleLegendSkillEffectsEnum.getTypeByName(d.CastleXMLUtils.getValueOrDefault("effectType", e, ""));
    this._effectValue = parseFloat(d.CastleXMLUtils.getValueOrDefault("effectValue", e, "0"));
    this._totalEffectValue = parseFloat(d.CastleXMLUtils.getValueOrDefault("totalEffectValue", e, "0"));
    this._specialType = d.CastleXMLUtils.getValueOrDefault("specialType", e, CastleLegendSkillVO.SPECIAL_TYPE_NONE);
    this._previousID = parseInt(d.CastleXMLUtils.getValueOrDefault("previousSkillID", e, this._requiredSkillID.toString()));
    this._nextID = parseInt(d.CastleXMLUtils.getValueOrDefault("followingSkillID", e, "0"));
    this._isPreview = parseInt(d.CastleXMLUtils.getValueOrDefault("isPreview", e, "0")) == 1;
    this._unlockRequirements = _.TreeNodeUnlockRequirementsCreator.createUnlockRequirements(e);
    this._isActive = false;
  };
  Object.defineProperty(CastleLegendSkillVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillVO.prototype, "skillGroupID", {
    get: function () {
      return this._skillGroupID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillVO.prototype, "level", {
    get: function () {
      return this._level;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillVO.prototype, "skillTreeID", {
    get: function () {
      return this._skillTreeID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillVO.prototype, "tier", {
    get: function () {
      return this._tier;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillVO.prototype, "cost", {
    get: function () {
      return this._cost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillVO.prototype, "effectType", {
    get: function () {
      return this._effectType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillVO.prototype, "effectValue", {
    get: function () {
      return this._effectValue;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillVO.prototype, "nameTextID", {
    get: function () {
      return "dialog_legendTemple_" + this._skillGroupID + "_name";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillVO.prototype, "descriptionTextID", {
    get: function () {
      return "dialog_legendTemple_" + this._skillGroupID + "_desc";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillVO.prototype, "shortDescriptionTextID", {
    get: function () {
      return "dialog_legendTemple_" + this._skillGroupID + "_desc_short";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillVO.prototype, "costTextID", {
    get: function () {
      return "dialog_legendTemple_skillCost";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillVO.prototype, "effectText", {
    get: function () {
      return l.Localize.text(this.shortDescriptionTextID, [this.effectValue]);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillVO.prototype, "previewText", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  CastleLegendSkillVO.prototype.isSpecialSkill = function () {
    return this._specialType == CastleLegendSkillVO.SPECIAL_TYPE_SPECIAL || this._specialType == CastleLegendSkillVO.SPECIAL_TYPE_ULTIMATE;
  };
  Object.defineProperty(CastleLegendSkillVO.prototype, "requiredSkillID", {
    get: function () {
      return this._requiredSkillID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillVO.prototype, "specialType", {
    get: function () {
      return this._specialType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillVO.prototype, "isActive", {
    get: function () {
      return g.CastleModel.legendSkillData.isSkillActive(this);
    },
    set: function (e) {
      this._isActive = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillVO.prototype, "skillIconClassName", {
    get: function () {
      return "LegendSkill_" + this._skillGroupID;
    },
    enumerable: true,
    configurable: true
  });
  CastleLegendSkillVO.prototype.getFilePath = function () {
    return o.BasicModel.basicLoaderData.getVersionedItemAssetUrl(this.skillIconClassName);
  };
  Object.defineProperty(CastleLegendSkillVO.prototype, "skillIcon", {
    get: function () {
      this._legendSkillClip ||= this.createSkillIcon();
      return this._legendSkillClip.asDisplayObject();
    },
    enumerable: true,
    configurable: true
  });
  CastleLegendSkillVO.prototype.createSkillIcon = function () {
    var e;
    if (o.BasicModel.basicLoaderData.isItemAssetVersioned(this.skillIconClassName)) {
      (e = new p.CastleGoodgameExternalClip(this.skillIconClassName, this.getFilePath(), null, 0, false)).recycleAsset = false;
      return e;
    } else if (o.BasicModel.basicLoaderData.isItemAssetVersioned(CastleLegendSkillVO.ICON_DEFAULT)) {
      (e = new p.CastleGoodgameExternalClip(CastleLegendSkillVO.ICON_DEFAULT, o.BasicModel.basicLoaderData.getVersionedItemAssetUrl(CastleLegendSkillVO.ICON_DEFAULT), null, 0, false)).recycleAsset = false;
      return e;
    } else {
      return null;
    }
  };
  Object.defineProperty(CastleLegendSkillVO.prototype, "isPreview", {
    get: function () {
      return this._isPreview || !o.BasicModel.basicLoaderData.isItemAssetVersioned(this.skillIconClassName);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillVO.prototype, "totalSkillPointsCost", {
    get: function () {
      return this._totalSkillPointsCost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillVO.prototype, "totalEffectValue", {
    get: function () {
      return this._totalEffectValue;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillVO.prototype, "previousID", {
    get: function () {
      return this._previousID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillVO.prototype, "nextID", {
    get: function () {
      return this._nextID;
    },
    enumerable: true,
    configurable: true
  });
  CastleLegendSkillVO.__initialize_static_members = function () {
    CastleLegendSkillVO.SPECIAL_TYPE_NONE = "none";
    CastleLegendSkillVO.SPECIAL_TYPE_SPECIAL = "special";
    CastleLegendSkillVO.SPECIAL_TYPE_ULTIMATE = "ultimate";
  };
  CastleLegendSkillVO.prototype.isUnlocked = function () {
    if (this.isActive) {
      return true;
    }
    for (var e = 0; e < this._unlockRequirements.length; e++) {
      if (!this._unlockRequirements[e].isUnlocked()) {
        return false;
      }
    }
    return true;
  };
  CastleLegendSkillVO.prototype.getUnlockText = function () {
    var e = "";
    for (var t = 0; t < this._unlockRequirements.length; t++) {
      var i = this._unlockRequirements[t];
      if (!i.isUnlocked() && (e += e != "" ? "\n" : "", e += i.getUnlockRequirementText(), !i.showFollowingRequirements)) {
        break;
      }
    }
    return e;
  };
  CastleLegendSkillVO.prototype.composeSkillTextVO = function (e, t = -1) {
    var i;
    var n = new r.HTMLTextCustomVO();
    var o = new s.LocalizedNumberVO(this.totalEffectValue, false, 2);
    var l = c.ClientConstLegendSkills.getGenericTextReplacementIDForEffectType(this.effectType);
    i = t != -1 ? new s.LocalizedNumberVO(t) : l ? new a.LocalizedTextVO(l, [o]) : o;
    n.addLocalizedTextVO(new a.LocalizedTextVO(this.descriptionTextID, [new h.ColoredHTMLTextReplacementVO(i, c.ClientConstLegendSkills.getBBColorCode(e))]));
    return n;
  };
  CastleLegendSkillVO.prototype.buySkill = function () {
    g.CastleModel.smartfoxClient.sendCommandVO(new u.C2SAddSkillPointVO(this.id));
  };
  CastleLegendSkillVO.prototype.isMaxLevel = function () {
    return this._nextID == 0;
  };
  CastleLegendSkillVO.ICON_DEFAULT = "Skill_Undefined";
  return CastleLegendSkillVO;
}();
exports.CastleLegendSkillVO = n;
var o = require("./2.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./478.js");
var u = require("./2668.js");
var d = require("./22.js");
var p = require("./24.js");
var h = require("./1455.js");
var g = require("./4.js");
var C = require("./230.js");
var _ = require("./1456.js");
n.__initialize_static_members();