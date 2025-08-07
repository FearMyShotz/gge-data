Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function ResearchGroupVO() {
    this.id = 0;
    this.tabId = 0;
    this.researchTypeId = 0;
    this._advancement = -1;
    this.researches = [];
    this._prerequisites = [];
    this._prerequisitesPaths = new Map();
  }
  ResearchGroupVO.prototype.addResearch = function (e) {
    this.researches.push(e);
    e.groupVO = this;
    this.researches.sort(function (e, t) {
      return e.level - t.level;
    });
  };
  ResearchGroupVO.prototype.addPrerequisite = function (e) {
    if (e != this) {
      if (this._prerequisites != null) {
        for (var t = 0, i = this._prerequisites; t < i.length; t++) {
          var n = i[t];
          if (n !== undefined && n == e) {
            return;
          }
        }
      }
      this._prerequisites.push(e);
    }
  };
  ResearchGroupVO.prototype.addPrerequisitePath = function (e, t) {
    if (e && t) {
      this._prerequisitesPaths.set(e, t);
    }
  };
  Object.defineProperty(ResearchGroupVO.prototype, "isLocked", {
    get: function () {
      return this.topResearch.isLocked;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResearchGroupVO.prototype, "isFullyResearched", {
    get: function () {
      return this.lastResearch.isComplete;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResearchGroupVO.prototype, "maxLevel", {
    get: function () {
      return this.researches.length;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResearchGroupVO.prototype, "currentLevel", {
    get: function () {
      for (var e = 0; e < this.researches.length; e++) {
        if (!this.researches[e].isComplete) {
          return e;
        }
      }
      return this.maxLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResearchGroupVO.prototype, "activeResearch", {
    get: function () {
      for (var e = 0; e < this.researches.length; e++) {
        var t = this.researches[e];
        if (!t.isComplete) {
          return t;
        }
      }
      return null;
    },
    enumerable: true,
    configurable: true
  });
  ResearchGroupVO.prototype.getResearchByLevel = function (e) {
    for (var t = 0; t < this.researches.length; t++) {
      if (this.researches[t].level == e) {
        return this.researches[t];
      }
    }
    return this.activeResearch;
  };
  Object.defineProperty(ResearchGroupVO.prototype, "lastResearch", {
    get: function () {
      return this.researches[this.researches.length - 1];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResearchGroupVO.prototype, "firstResearch", {
    get: function () {
      return this.researches[0];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResearchGroupVO.prototype, "topResearch", {
    get: function () {
      return this.activeResearch || this.lastResearch;
    },
    enumerable: true,
    configurable: true
  });
  ResearchGroupVO.prototype.fillFromParamXML = function (e) {
    this.id = parseInt(s.CastleXMLUtils.getValueOrDefault("groupID", e, "-1", true));
    this.researchTypeId = parseInt(s.CastleXMLUtils.getValueOrDefault("researchTypeID", e, "0", false));
    this.tabId = parseInt(s.CastleXMLUtils.getValueOrDefault("tabID", e, "1", true)) - 1;
    this._x = parseInt(s.CastleXMLUtils.getValueOrDefault("x", e, "1", true));
    this._y = parseInt(s.CastleXMLUtils.getValueOrDefault("y", e, "1", true));
    this._predecessorX1 = parseInt(s.CastleXMLUtils.getValueOrDefault("predecessorX1", e, "1", true));
    this._predecessorY1 = parseInt(s.CastleXMLUtils.getValueOrDefault("predecessorY1", e, "1", true));
    this._categoryID = parseInt(s.CastleXMLUtils.getValueOrDefault("categoryID", e, "0", false));
  };
  ResearchGroupVO.prototype.getValueOnLevel = function (e) {
    var t;
    for (var i = 0; i < this.researches.length && i < e; i++) {
      var n = this.researches[i].getBonusVOByEffectType(l.EffectTypeEnum.EFFECT_TYPE_UNKNOWN);
      t ||= new n.effect.effectType.valueClass();
      t.add(n.effectValue, null);
    }
    return t || new c.EffectValueSimple();
  };
  Object.defineProperty(ResearchGroupVO.prototype, "prerequisites", {
    get: function () {
      return this._prerequisites;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResearchGroupVO.prototype, "prerequisitePaths", {
    get: function () {
      return this._prerequisitesPaths;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResearchGroupVO.prototype, "isResearchable", {
    get: function () {
      return !this.isLocked && !this.isFullyResearched && !this.isEmptyGroup();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResearchGroupVO.prototype, "advancement", {
    get: function () {
      if (this._advancement == -1) {
        var e = -1;
        if (this._prerequisites != null) {
          for (var t = 0, i = this._prerequisites; t < i.length; t++) {
            var n = i[t];
            if (n !== undefined && n.advancement > e) {
              e = n.advancement;
            }
          }
        }
        this._advancement = e + 1;
      }
      return this._advancement;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResearchGroupVO.prototype, "toolTip", {
    get: function () {
      var e = this.topResearch;
      var t = e.fullNameText;
      if (this.currentLevel > 0 && e.showEffectValue) {
        t += "\n " + e.getBonusText(this.getValueOnLevel(this.currentLevel).textReplacements);
      }
      var i = this.requirementsText;
      if (i) {
        t += "\n" + i;
      }
      return t;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResearchGroupVO.prototype, "requirementsText", {
    get: function () {
      var e = this.topResearch;
      var t = [];
      if (this.isLocked) {
        if (e.minResearchTowerLevel > r.CastleModel.researchData.researchTowerLevel) {
          var i = o.Localize.text("researchtower_name");
          var n = o.Localize.text("building_with_level", [i, e.minResearchTowerLevel]);
          t.push(n);
        } else {
          for (var s = 0; s < e.prerequisites.length; s++) {
            t.push(e.prerequisites[s].fullNameText);
          }
        }
      }
      if (e.isLockedByLevel()) {
        if (r.CastleModel.userData.level < e.requiredLevel) {
          t.push(o.Localize.text("level_placeholder", [e.requiredLevel]));
        } else {
          t.push(o.Localize.text("legendaryLevel_placeholder", [e.requiredLegendLevel]));
        }
      }
      var l = "";
      if (t.length > 0) {
        var c = a.int(Math.min(t.length - 1, ResearchGroupVO.TEXT_IDS_TOOLTIP_PREREQUISITES.length - 1));
        var u = ResearchGroupVO.TEXT_IDS_TOOLTIP_PREREQUISITES[c];
        l = o.Localize.text(u, t);
      }
      return l;
    },
    enumerable: true,
    configurable: true
  });
  ResearchGroupVO.prototype.icon = function () {
    return this.researches[0].icon();
  };
  Object.defineProperty(ResearchGroupVO.prototype, "predecessorX1", {
    get: function () {
      return this._predecessorX1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResearchGroupVO.prototype, "predecessorY1", {
    get: function () {
      return this._predecessorY1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResearchGroupVO.prototype, "x", {
    get: function () {
      return this._x;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResearchGroupVO.prototype, "y", {
    get: function () {
      return this._y;
    },
    enumerable: true,
    configurable: true
  });
  ResearchGroupVO.prototype.isEmptyGroup = function () {
    return this.firstResearch.isEmptyResearch();
  };
  Object.defineProperty(ResearchGroupVO.prototype, "categoryID", {
    get: function () {
      return this._categoryID;
    },
    enumerable: true,
    configurable: true
  });
  ResearchGroupVO.__initialize_static_members = function () {
    ResearchGroupVO.RESEARCH_TYPE_CORE = 0;
    ResearchGroupVO.RESEARCH_TYPE_ECONOMY = 1;
    ResearchGroupVO.RESEARCH_TYPE_MILITARY = 2;
    ResearchGroupVO.TEXT_IDS_TOOLTIP_PREREQUISITES = ["research_need_one", "research_need_two", "research_need_three", "research_need_four"];
  };
  return ResearchGroupVO;
}();
exports.ResearchGroupVO = n;
var o = require("./3.js");
var a = require("./6.js");
var s = require("./22.js");
var r = require("./4.js");
var l = require("./33.js");
var c = require("./409.js");
n.__initialize_static_members();