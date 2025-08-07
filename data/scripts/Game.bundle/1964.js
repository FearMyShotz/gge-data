Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./6.js");
var a = require("./22.js");
var s = require("./86.js");
var r = require("./4.js");
var l = require("./165.js");
var c = require("./97.js");
var u = require("./35.js");
var d = function (e) {
  function AResearchVO() {
    var t = e !== null && e.apply(this, arguments) || this;
    t.researchID = 0;
    t.groupID = 0;
    t.level = 0;
    t.prerequisiteIDs = [];
    t._researchDuration = 0;
    t._tempServerResearchDuration = 0;
    t._minResearchTowerLevel = 1;
    t._requiredLevel = 0;
    t._requiredLegendLevel = 0;
    t.onlyWithResearchExpert = false;
    t._isComplete = false;
    return t;
  }
  n.__extends(AResearchVO, e);
  AResearchVO.prototype.fillFromParamXML = function (e) {
    this.researchID = parseInt(a.CastleXMLUtils.getValueOrDefault("researchID", e, "-1", true));
    this.groupID = parseInt(a.CastleXMLUtils.getValueOrDefault("groupID", e, "-1", true));
    this.level = parseInt(a.CastleXMLUtils.getValueOrDefault("level", e, "-1", true));
    var t = a.CastleXMLUtils.getValueOrDefault("prerequisiteIDs", e, "");
    var i = t == "" ? [] : t.split(",");
    this.prerequisiteIDs = [];
    for (var n = 0; n < i.length; n++) {
      var o = parseInt(i[n]);
      if (o > 0) {
        this.prerequisiteIDs.push(o);
      }
    }
    this._minResearchTowerLevel = parseInt(a.CastleXMLUtils.getValueOrDefault("minResearchTowerLevel", e, "1"));
    this._requiredLevel = parseInt(a.CastleXMLUtils.getValueOrDefault("requiredLevel", e, "0"));
    this._requiredLegendLevel = parseInt(a.CastleXMLUtils.getValueOrDefault("requiredLegendLevel", e, "0"));
    this._researchDuration = parseInt(a.CastleXMLUtils.getValueOrDefault("researchDuration", e, "0", true));
    this._tempServerResearchDuration = parseInt(a.CastleXMLUtils.getValueOrDefault("globalServerResearchDuration", e, "0", true));
    this._costs = p.CollectableManager.parser.x2cList.createList(e, s.ClientConstCollectable.XML_PREFIX_COST);
    this._tempServerCosts = p.CollectableManager.parser.x2cList.createList(e, "globalServerCost");
    this.onlyWithResearchExpert = parseInt(a.CastleXMLUtils.getValueOrDefault("onlyWithResearchExpert", e, "0")) == 1;
    var c = a.CastleXMLUtils.getValueOrDefault("effects", e, "");
    if (c != "") {
      for (var u = 0, d = c.split(","); u < d.length; u++) {
        var h = d[u];
        if (h.length > 0) {
          var g = h.split("&");
          var C = parseInt(g[0]);
          var _ = g[1] || "";
          var m = r.CastleModel.effectsData.getEffectByID(C);
          var f = new l.BonusVO().parseFromValueString(m, _);
          this._boni.push(f);
        }
      }
    }
  };
  AResearchVO.prototype.setupPrerequisites = function (e) {
    this._prerequisites = [];
    if (this.prerequisiteIDs != null) {
      for (var t = 0, i = this.prerequisiteIDs; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          var o = e.get(n);
          this._prerequisites.push(o);
          this.groupVO.addPrerequisite(o.groupVO);
          if (!o._nextResearch || o._nextResearch.researchID < this.researchID) {
            o._nextResearch = this;
          }
        }
      }
    }
  };
  Object.defineProperty(AResearchVO.prototype, "baseResearchDuration", {
    get: function () {
      if (_.SpecialServerHelper.isOnSpecialServer) {
        return this._tempServerResearchDuration;
      } else {
        return this._researchDuration;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AResearchVO.prototype, "researchDuration", {
    get: function () {
      var e = r.CastleModel.researchData.researchBoost + r.CastleModel.researchData.getResearchEffectValue(u.EffectTypeEnum.EFFECT_TYPE_RESEARCH_BOOST).strength;
      e += r.CastleModel.subscriptionData.getEffectValue(u.EffectTypeEnum.EFFECT_TYPE_RESEARCH_BOOST);
      e += r.CastleModel.lordData.getTotalBaronEffectValue(u.EffectTypeEnum.EFFECT_TYPE_RESEARCH_BOOST);
      return o.int(this.baseResearchDuration / (1 + e / 100)) + o.int(r.CastleModel.researchData.getResearchEffectValue(u.EffectTypeEnum.EFFECT_TYPE_RESEARCH_BONUS).strength);
    },
    enumerable: true,
    configurable: true
  });
  AResearchVO.prototype.getBaseCosts = function () {
    if (_.SpecialServerHelper.isOnSpecialServer) {
      return this._tempServerCosts;
    } else {
      return this._costs;
    }
  };
  AResearchVO.prototype.getFinalCosts = function () {
    var e = this.getBaseCosts().clone();
    e.combineDuplicatedItems();
    var t = g.castAs(e.getItemByType(h.CollectableEnum.C1), "CollectableItemC1VO");
    if (t) {
      t.amount = r.CastleModel.costsData.getFinalCostsC1(t.amount);
    }
    var i = g.castAs(e.getItemByType(h.CollectableEnum.C2), "CollectableItemC2VO");
    if (i) {
      i.amount = r.CastleModel.costsData.getFinalCostsC1(i.amount);
    }
    var n = 0;
    for (n = 0; n < e.list.length; n++) {
      if (g.castAs(this._costs.list[n], "ACollectableItemResourceVO")) {
        e.list[n].amount *= 1 - r.CastleModel.userData.getGlobalConstructionItemEffectByType(c.CastleEffectEnum.REDUCERESEARCHRESOURCECOSTS) / 100;
      }
      if (!C.instanceOfClass(e.getItemByIndex(n), "CollectableItemC2VO")) {
        e.getItemByIndex(n).isSubscriptionBuffed = r.CastleModel.subscriptionData.isEffectTypeActive(u.EffectTypeEnum.EFFECT_TYPE_RESEARCH_COST_BONUS);
      }
      if (e.getItemByIndex(n).isSubscriptionBuffed) {
        e.getItemByIndex(n).amount *= 1 + r.CastleModel.subscriptionData.getEffectValue(u.EffectTypeEnum.EFFECT_TYPE_RESEARCH_COST_BONUS) / 100;
        e.getItemByIndex(n).useSubscriptionStar = true;
      }
    }
    return e;
  };
  Object.defineProperty(AResearchVO.prototype, "minResearchTowerLevel", {
    get: function () {
      return this._minResearchTowerLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AResearchVO.prototype, "isLocked", {
    get: function () {
      if (this._minResearchTowerLevel > r.CastleModel.researchData.researchTowerLevel) {
        return true;
      }
      if (this._prerequisites != null) {
        for (var e = 0, t = this._prerequisites; e < t.length; e++) {
          var i = t[e];
          if (i !== undefined && !i.isComplete) {
            return true;
          }
        }
      }
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AResearchVO.prototype, "isComplete", {
    get: function () {
      return this._isComplete;
    },
    set: function (e) {
      this._isComplete = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AResearchVO.prototype, "isResearchable", {
    get: function () {
      return !this.isComplete && !this.isLocked && !this.isLockedByLevel();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AResearchVO.prototype, "groupVO", {
    get: function () {
      return this._groupVO;
    },
    set: function (e) {
      this._groupVO = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AResearchVO.prototype, "totalEffectiveBonus", {
    get: function () {
      return this._groupVO.getValueOnLevel(this.level);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AResearchVO.prototype, "prerequisites", {
    get: function () {
      return this._prerequisites;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AResearchVO.prototype, "nextResearch", {
    get: function () {
      return this._nextResearch;
    },
    enumerable: true,
    configurable: true
  });
  AResearchVO.prototype.isBlockedBy = function (e) {
    if (this.prerequisites != null) {
      for (var t = 0, i = this.prerequisites; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && !n.isComplete && n.groupID == e.id) {
          return true;
        }
      }
    }
    return false;
  };
  AResearchVO.prototype.getBonusText = function (e) {
    return "";
  };
  Object.defineProperty(AResearchVO.prototype, "effectText", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AResearchVO.prototype, "descriptionTextId", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AResearchVO.prototype, "descriptionTextReplacements", {
    get: function () {
      return [];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AResearchVO.prototype, "nameTextId", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AResearchVO.prototype, "fullNameText", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  AResearchVO.prototype.icon = function () {
    return null;
  };
  Object.defineProperty(AResearchVO.prototype, "showEffectValue", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AResearchVO.prototype, "showInfoBtn", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  AResearchVO.prototype.onMouseOverResearchIcon = function (e) {};
  AResearchVO.prototype.onMouseOutResearchIcon = function () {};
  AResearchVO.prototype.isEmptyResearch = function () {
    return this.boni.length == 0 && !this.hasEffects();
  };
  Object.defineProperty(AResearchVO.prototype, "requiredLegendLevel", {
    get: function () {
      return this._requiredLegendLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AResearchVO.prototype, "requiredLevel", {
    get: function () {
      return this._requiredLevel;
    },
    enumerable: true,
    configurable: true
  });
  AResearchVO.prototype.isLockedByLevel = function () {
    return r.CastleModel.userData.userLevel < this.requiredLevel || r.CastleModel.userData.userLegendLevel < this.requiredLegendLevel;
  };
  return AResearchVO;
}(require("./686.js").EffectsHandlerVO);
exports.AResearchVO = d;
var p = require("./50.js");
var h = require("./12.js");
var g = require("./1.js");
var C = require("./1.js");
var _ = require("./44.js");