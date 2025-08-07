Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./6.js");
var l = require("./18.js");
var c = require("./28.js");
var u = require("./22.js");
var d = require("./531.js");
var p = require("./30.js");
var h = require("./72.js");
var g = require("./4.js");
var C = require("./110.js");
var _ = require("./142.js");
var m = require("./33.js");
var f = require("./5573.js");
var O = require("./5574.js");
var E = require("./5575.js");
var y = function (e) {
  function CastleResearchData(t) {
    var i = e.call(this) || this;
    i._boughtResearches = [];
    i._currentResearchId = -1;
    i._actResearchEndTime = 0;
    i._hasResearchTower = false;
    i._tabs = [];
    i.showResearchIDs = false;
    i.showResearchGrid = false;
    i.editingEnabled = false;
    i._researchVOs = new Map();
    i._groupVOs = new Map();
    i._hasResearchTower = false;
    var n = t.researches;
    if (n != null) {
      for (var o = 0, a = n; o < a.length; o++) {
        var s = a[o];
        if (s !== undefined) {
          var r = i.createResearchVO(s);
          i._researchVOs.set(r.researchID, r);
          var l = i._groupVOs.get(r.groupID);
          if (l == null) {
            l = new O.ResearchGroupVO();
            i._groupVOs.set(r.groupID, l);
            l.fillFromParamXML(s);
            var c = i._tabs[l.tabId];
            if (c == null) {
              (c = i._tabs[l.tabId] = new E.ResearchTabVO()).fillFromParamXML(s);
            }
            c.addGroup(l);
            c.checkRootResearch(r);
          }
          l.addResearch(r);
        }
      }
    }
    if (i._researchVOs != null) {
      for (var u = 0, d = Array.from(i._researchVOs.values()); u < d.length; u++) {
        if ((r = d[u]) !== undefined) {
          r.setupPrerequisites(i._researchVOs);
        }
      }
    }
    if (i._tabs) {
      i._tabs.forEach(function (e) {
        return e.setupConnections();
      });
    }
    return i;
  }
  n.__extends(CastleResearchData, e);
  CastleResearchData.prototype.reset = function () {
    if (this._researchVOs != null) {
      for (var e = 0, t = Array.from(this._researchVOs.values()); e < t.length; e++) {
        t[e].isComplete = false;
      }
    }
    this._boughtResearches = [];
    this._currentResearchId = -1;
    this._actResearchEndTime = 0;
    this._hasResearchTower = false;
    this._researchBuildingVO = null;
    this._researchBoosterBuildingVO = null;
  };
  CastleResearchData.prototype.createResearchVO = function (e) {
    var t;
    var i = parseInt(u.CastleXMLUtils.getValueOrDefault("effects", e, "").split(/[&,#]/)[0]);
    switch (i ? r.int(g.CastleModel.effectsData.getEffectByID(i).effectTypeID) : -1) {
      case m.EffectTypeEnum.EFFECT_TYPE_ENABLE_CONSTRUCTIONITEM_RECIPE_ID.id:
        t = new D.BlueprintResearchVO();
        break;
      case m.EffectTypeEnum.EFFECT_TYPE_ENABLE_CRAFTINGRECIPE.id:
        t = new f.CraftingRecipeResearchVO();
        break;
      default:
        t = new I.ResearchVO();
    }
    t.fillFromParamXML(e);
    return t;
  };
  CastleResearchData.prototype.parse_REI = function (e) {
    if (e) {
      this._boughtResearches = e.BR;
      this._currentResearchId = r.int(e.ARID);
      this._actResearchEndTime = p.CachedTimer.getCachedTimer() + e.ARRT * c.ClientConstTime.SEC_2_MILLISEC;
      if (this._boughtResearches != null) {
        for (var t = 0, i = this._boughtResearches; t < i.length; t++) {
          var n = i[t];
          if (n !== undefined && this._researchVOs.get(n)) {
            this._researchVOs.get(n).isComplete = true;
          }
        }
      }
      this.dispatchEvent(new d.CastleResearchEvent(d.CastleResearchEvent.RESEARCH_INFO_UPDATE));
    }
  };
  Object.defineProperty(CastleResearchData.prototype, "researchTowerLevel", {
    get: function () {
      if (this._researchBuildingVO) {
        return this._researchBuildingVO.level;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleResearchData.prototype.remainingResearchTimeInSeconds = function () {
    return r.int(Math.max((this._actResearchEndTime - p.CachedTimer.getCachedTimer()) * c.ClientConstTime.MILLISEC_2_SEC, 0));
  };
  Object.defineProperty(CastleResearchData.prototype, "isSomeResearchActive", {
    get: function () {
      return this._currentResearchId != -1 && this.remainingResearchTimeInSeconds() > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleResearchData.prototype, "currentResearchVO", {
    get: function () {
      if (this._currentResearchId != -1) {
        return this._researchVOs.get(this._currentResearchId);
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleResearchData.prototype.getResearchEffectsByType = function (e, t = null) {
    t = t || new _.CastleEffectConditionVO();
    var i = [];
    if (!this._boughtResearches) {
      return i;
    }
    if (this._researchVOs != null) {
      for (var n = 0, o = this._boughtResearches; n < o.length; n++) {
        var a = o[n];
        var s = this.getResearchById(a);
        if (s !== undefined) {
          for (var r = 0, l = s.boni; r < l.length; r++) {
            var c = l[r];
            if (c !== undefined && c.matchesConditions(e, t.areaType, t.spaceId, t.wodId, t.otherPlayer)) {
              i.push(c);
            }
          }
        }
      }
    }
    return i;
  };
  CastleResearchData.prototype.getResearchEffectValue = function (e, t = -1, i = -1, n = -1, o = null) {
    var a = C.CastleEffectsHelper.getTotalEffectValue(this.getResearchEffectsByType(e, new _.CastleEffectConditionVO(t, i, n, o)), true);
    return a || new e.valueClass();
  };
  Object.defineProperty(CastleResearchData.prototype, "isResearchTowerBuilt", {
    get: function () {
      return this._hasResearchTower;
    },
    enumerable: true,
    configurable: true
  });
  CastleResearchData.prototype.setResearchBuildingData = function (e) {
    this._researchBuildingVO = e;
    this._hasResearchTower = !!e && e.objectType == b.IsoObjectEnum.RESEARCH_TOWER && e.buildingState.isFunctionally;
  };
  CastleResearchData.prototype.setResearchBoostBuildingData = function (e) {
    this._researchBoosterBuildingVO = e;
  };
  Object.defineProperty(CastleResearchData.prototype, "researchBoost", {
    get: function () {
      if (this._researchBuildingVO) {
        if (this._researchBoosterBuildingVO) {
          return this._researchBuildingVO.researchBoost + this._researchBoosterBuildingVO.researchBoost;
        } else {
          return this._researchBuildingVO.researchBoost;
        }
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleResearchData.prototype.getAbsoluteProductionBoost = function (e, t, i, n) {
    if (t > l.ClientConstCastle.MINIMUM_RECRUITEMENT_TIME * i && n.areaType == s.WorldConst.AREA_TYPE_CASTLE && n.kingdomID == a.WorldClassic.KINGDOM_ID) {
      var o = r.int(i * this.getResearchEffectValue(e.getAbsoluteBoostEffectType()).strength);
      return t - r.int(Math.max(t + o, l.ClientConstCastle.MINIMUM_RECRUITEMENT_TIME * i));
    }
    return 0;
  };
  CastleResearchData.prototype.getNextResearch = function (e) {
    var t = null;
    if (this._researchVOs != null) {
      for (var i = 0, n = Array.from(this._researchVOs.values()); i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && o.isResearchable) {
          var a = o.prerequisiteIDs;
          if (a != null) {
            for (var s = 0, r = a; s < r.length; s++) {
              var l = r[s];
              if (l !== undefined && l == e.researchID) {
                if (o.groupID != e.groupID) {
                  return o;
                }
                t = o;
              }
            }
          }
        }
      }
    }
    return t;
  };
  CastleResearchData.prototype.getResearchById = function (e) {
    return this._researchVOs.get(e);
  };
  Object.defineProperty(CastleResearchData.prototype, "researchVOs", {
    get: function () {
      return this._researchVOs;
    },
    enumerable: true,
    configurable: true
  });
  CastleResearchData.prototype.getGroupById = function (e) {
    return this._groupVOs.get(e);
  };
  Object.defineProperty(CastleResearchData.prototype, "groupVOs", {
    get: function () {
      return this._groupVOs;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleResearchData.prototype, "tabsCount", {
    get: function () {
      return this._tabs.length;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleResearchData.prototype, "tabs", {
    get: function () {
      return this._tabs;
    },
    enumerable: true,
    configurable: true
  });
  return CastleResearchData;
}(h.CastleEventDispatcher);
exports.CastleResearchData = y;
o.classImplementsInterfaces(y, "ICastleBasicData");
var b = require("./80.js");
var D = require("./5578.js");
var I = require("./1964.js");