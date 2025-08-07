Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./28.js");
var l = require("./2668.js");
var c = require("./22.js");
var u = require("./50.js");
var d = require("./155.js");
var p = require("./30.js");
var h = require("./24.js");
var g = require("./181.js");
var C = require("./4.js");
var _ = require("./165.js");
var m = require("./52.js");
var f = require("./33.js");
var O = function (e) {
  function CastleSceatSkillVO() {
    var t = e !== null && e.apply(this, arguments) || this;
    t._activeActivationTimestamp = -1;
    t._sortOrder = 0;
    return t;
  }
  n.__extends(CastleSceatSkillVO, e);
  CastleSceatSkillVO.prototype.parseXML = function (t) {
    e.prototype.parseXML.call(this, t);
    this._costList = u.CollectableManager.parser.x2cList.createList(t, "cost");
    this._cost = this._costList.list[0].amount;
    this._activationTime = parseInt(c.CastleXMLUtils.getValueOrDefault("activationTime", t, "0"));
    this._sortOrder = parseInt(c.CastleXMLUtils.getValueOrDefault("sortOrder", t, "0"));
    this.parseBoni(t);
  };
  CastleSceatSkillVO.prototype.parseBoni = function (e) {
    this._boni = [];
    var t = c.CastleXMLUtils.getValueOrDefault("effect", e, "") || c.CastleXMLUtils.getValueOrDefault("effects", e, "");
    if (t != "") {
      for (var i = 0, n = t.split(","); i < n.length; i++) {
        var o = n[i];
        if (o.length > 0) {
          var a = o.split("&");
          var s = C.CastleModel.effectsData.getEffectByID(parseInt(a[0]));
          var r = new _.BonusVO().parseFromValueString(s, a[1]);
          this._boni.push(r);
        }
      }
    }
  };
  CastleSceatSkillVO.prototype.getEffectValueByType = function (e, t = -1, i = -1, n = -1, o = null) {
    var a = new e.valueClass();
    if (this._boni != null) {
      for (var s = 0, r = this._boni; s < r.length; s++) {
        var l = r[s];
        if (l !== undefined && l.matchesConditions(e, t, i, n, o)) {
          a.add(l.effectValue, null);
        }
      }
    }
    return a;
  };
  CastleSceatSkillVO.prototype.getUnlockLevel = function () {
    var e = -1;
    var t = this.getCurrentEffectValue;
    var i = this.boni[0].effect.effectType.type;
    if (t) {
      var n = this.getCurrentEffectValue.strength;
      if (i == f.EffectTypeEnum.EFFECT_ENABLE_BUILDINGS) {
        var o = undefined;
        var a = undefined;
        for (var s = 0, r = this.boni; s < r.length; s++) {
          var l = r[s].effectValue;
          var c = C.CastleModel.wodData.getBuildingVOById(l.strength);
          a ||= c;
          if (c && c.sceatSkillLocked == this.id) {
            o = c;
          }
        }
        e = o ? o.level : a ? a.level : -1;
      } else {
        var u = C.CastleModel.wodData.getUnitVOByWodId(n);
        e = u ? u.level : -1;
      }
    }
    return e;
  };
  Object.defineProperty(CastleSceatSkillVO.prototype, "getCurrentEffectValue", {
    get: function () {
      return this._boni[0].effectValue;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSceatSkillVO.prototype, "getCurrentEffectTypeId", {
    get: function () {
      return this._boni[0].effect.effectTypeID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSceatSkillVO.prototype, "hasBuildingEffect", {
    get: function () {
      return this.getCurrentEffectTypeId == f.EffectTypeEnum.EFFECT_ENABLE_BUILDINGS.id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSceatSkillVO.prototype, "hasUnitEffect", {
    get: function () {
      return this.getCurrentEffectTypeId == f.EffectTypeEnum.EFFECT_TYPE_ENABLE_UNITS.id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSceatSkillVO.prototype, "nameTextID", {
    get: function () {
      return "dialog_legendTemple_sceat_" + this._skillGroupID + "_name";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSceatSkillVO.prototype, "descriptionTextID", {
    get: function () {
      return "dialog_legendTemple_sceat_" + this._skillGroupID + "_desc";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSceatSkillVO.prototype, "shortDescriptionTextID", {
    get: function () {
      return "dialog_legendTemple_sceat_" + this._skillGroupID + "_desc_short";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSceatSkillVO.prototype, "costTextID", {
    get: function () {
      switch (this.costCurrencyID) {
        case m.ClientConstCurrency.ID_SCEAT_TOKEN:
          return "dialog_legendTemple_sceatCosts";
        case m.ClientConstCurrency.ID_IMPERIAL_DUCAT:
          return "dialog_legendTemple_imperialDucatCosts";
      }
      return "dialog_legendTemple_sceatCosts";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSceatSkillVO.prototype, "costCurrencyID", {
    get: function () {
      var e = this._costList.list[0];
      if (e instanceof d.CollectableItemGenericCurrencyVO) {
        return e.xmlCurrencyVO.id;
      } else {
        return m.ClientConstCurrency.ID_SCEAT_TOKEN;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSceatSkillVO.prototype, "previewText", {
    get: function () {
      var e = this.boni.some(function (e) {
        return e.effect.effectType.type == f.EffectTypeEnum.EFFECT_TYPE_ENABLE_UNITS;
      });
      if (this.boni.some(function (e) {
        return e.effect.effectType.type == f.EffectTypeEnum.EFFECT_ENABLE_BUILDINGS;
      })) {
        return s.Localize.text("dialog_legendTemple_sceat_preview_buildings");
      }
      if (e) {
        var t = this.boni.find(function (e) {
          return e.effect.effectType.type == f.EffectTypeEnum.EFFECT_TYPE_ENABLE_UNITS;
        }).effectValue.strength;
        var i = C.CastleModel.wodData.getUnitVOByWodId(t);
        if (i) {
          if (i instanceof g.ToolUnitVO) {
            return s.Localize.text("dialog_legendTemple_sceat_preview_tools");
          } else {
            return s.Localize.text("dialog_legendTemple_sceat_preview_units");
          }
        }
      }
      return "";
    },
    enumerable: true,
    configurable: true
  });
  CastleSceatSkillVO.prototype.createSkillIcon = function () {
    if (this.isPreview) {
      var t = this.boni.some(function (e) {
        return e.effect.effectType.type == f.EffectTypeEnum.EFFECT_TYPE_ENABLE_UNITS;
      });
      var i = "";
      if (this.boni.some(function (e) {
        return e.effect.effectType.type == f.EffectTypeEnum.EFFECT_ENABLE_BUILDINGS;
      })) {
        i = "Skill_UnlockBuilding";
      } else if (t) {
        var n = this.boni.find(function (e) {
          return e.effect.effectType.type == f.EffectTypeEnum.EFFECT_TYPE_ENABLE_UNITS;
        }).effectValue.strength;
        var a = C.CastleModel.wodData.getUnitVOByWodId(n);
        if (a) {
          i = a instanceof g.ToolUnitVO ? "Skill_UnlockTool" : "Skill_UnlockUnit";
        }
      }
      var s = new h.CastleGoodgameExternalClip(i, o.BasicModel.basicLoaderData.getVersionedItemAssetUrl(i), null, 0, false);
      s.recycleAsset = false;
      return s;
    }
    return e.prototype.createSkillIcon.call(this);
  };
  Object.defineProperty(CastleSceatSkillVO.prototype, "skillIconClassName", {
    get: function () {
      return "SceatSkill_" + this._skillGroupID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSceatSkillVO.prototype, "activationTime", {
    get: function () {
      return this._activationTime;
    },
    enumerable: true,
    configurable: true
  });
  CastleSceatSkillVO.prototype.setRemainingActivationTime = function (e) {
    this._activeActivationTimestamp = p.CachedTimer.getCachedTimer() + e * r.ClientConstTime.SEC_2_MILLISEC;
  };
  CastleSceatSkillVO.prototype.getRemainingActivationTime = function () {
    return (this._activeActivationTimestamp - p.CachedTimer.getCachedTimer()) * r.ClientConstTime.MILLISEC_2_SEC;
  };
  CastleSceatSkillVO.prototype.buySkill = function () {
    C.CastleModel.smartfoxClient.sendCommandVO(new l.C2SBuySceatSkillVO(this.id));
  };
  CastleSceatSkillVO.prototype.getSkipCosts = function () {
    return a.SceatSkillConst.getFastCompleteCostC2(this.getRemainingActivationTime(), C.CastleModel.userData.userLevel);
  };
  Object.defineProperty(CastleSceatSkillVO.prototype, "sortOrder", {
    get: function () {
      return this._sortOrder;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSceatSkillVO.prototype, "boni", {
    get: function () {
      return this._boni;
    },
    enumerable: true,
    configurable: true
  });
  return CastleSceatSkillVO;
}(require("./1454.js").CastleLegendSkillVO);
exports.CastleSceatSkillVO = O;