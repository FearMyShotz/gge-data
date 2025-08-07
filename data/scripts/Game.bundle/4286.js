Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastleLegendSkillData(e) {
    this._availablePoints = 0;
    this._totalSkillPoints = 0;
    this._lastResetTimeStamp = 0;
    this._newResetTimeStamp = 0;
    this._waitingForServer = false;
    this._resetsCounter = 0;
    this.parseXML(e);
  }
  CastleLegendSkillData.prototype.parseXML = function (e) {
    if (!this._skills) {
      this._skills = new Map();
      this._userSkills = [];
    }
    if (!this._sceatSkills) {
      this._sceatSkills = new Map();
      this._sceatUserSkills = [];
    }
    var t = e.legendskills;
    this._skillTree = new C.CastleLegendSkillTreeRoot(0);
    if (t != null) {
      for (var i = 0, n = t; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          var a = new _.CastleLegendSkillVO();
          a.parseXML(o);
          this._skills.set(a.id, a);
          this._skillTree.insertSkill(a);
        }
      }
    }
    var s = e.sceatSkills;
    if (s != null) {
      for (var r = 0, l = s; r < l.length; r++) {
        var c = l[r];
        var u = new E.CastleSceatSkillVO();
        u.parseXML(c);
        this._sceatSkills.set(u.id, u);
        this._skillTree.insertSkill(u);
      }
    }
    this._sceatTreeTabMap = new Map();
    var d = e.sceatSkillTrees;
    if (d != null) {
      for (var p = 0, h = d; p < h.length; p++) {
        var g = h[p];
        if ((v = parseInt(m.CastleXMLUtils.getValueOrDefault("skillTreeID", g, "-1"))) >= 0) {
          var O = parseInt(m.CastleXMLUtils.getValueOrDefault("tabID", g, "-1")) + 1;
          if (this._sceatTreeTabMap.has(O)) {
            this._sceatTreeTabMap.get(O).push(v);
          } else {
            this._sceatTreeTabMap.set(O, [v]);
          }
          this.parseUnlockRequirementsForNode(this.getSkillTreeNode(v), g);
        }
      }
    }
    var b = e.sceatSkillTiers;
    if (b != null) {
      for (var D = 0, I = b; D < I.length; D++) {
        var T = I[D];
        var v = parseInt(m.CastleXMLUtils.getValueOrDefault("skillTreeID", T, "-1"));
        var S = parseInt(m.CastleXMLUtils.getValueOrDefault("tier", T, "-1"));
        var A = parseInt(m.CastleXMLUtils.getValueOrDefault("requirePreviousTierUnlocked", T, "1")) == 1;
        if (v >= 0 && S > 0) {
          var L = this.getSkillTreeNode(v, S);
          if (!L) {
            continue;
          }
          this.parseUnlockRequirementsForNode(L, T);
          if (A) {
            L.addUnlockRequirement(new y.TreeNodeUnlockRequirementUnlockPreviousTier(v, S));
            L.addUnlockRequirement(new f.TreeNodeUnlockRequirementActivateAllPreviousSkills(v, S));
          }
        }
      }
    }
  };
  CastleLegendSkillData.prototype.parseUnlockRequirementsForNode = function (e, t) {
    if (e) {
      for (var i = 0, n = O.TreeNodeUnlockRequirementsCreator.createUnlockRequirements(t); i < n.length; i++) {
        var o = n[i];
        e.addUnlockRequirement(o);
      }
    }
  };
  CastleLegendSkillData.prototype.parse_SKL = function (e) {
    this._userSkills = [];
    this._skillIDArray = [];
    var t = e.SID;
    if (t) {
      for (var i = 0, n = t; i < n.length; i++) {
        if ((_ = n[i]) !== undefined) {
          var a = this.getSkillByID(_);
          this._userSkills.push(a);
          this._skillIDArray.push(_);
        }
      }
    }
    this._sceatUserSkills = [];
    if (t = e.SIDS) {
      for (var r = 0, l = t; r < l.length; r++) {
        if ((_ = l[r]) !== undefined) {
          var d = this.getSceatSkillByID(_);
          this._sceatUserSkills.push(d);
        }
      }
    }
    this._totalSkillPoints = parseInt(e.SP);
    this._availablePoints = this._totalSkillPoints - this.getSpentPoints();
    this._newResetTimeStamp = u.CachedTimer.getCachedTimer() + e.RS * s.ClientConstTime.SEC_2_MILLISEC;
    this._lastResetTimeStamp = this._newResetTimeStamp - o.LegendSkillConst.RESET_COOLDOWN_IN_SECONDS * s.ClientConstTime.SEC_2_MILLISEC;
    this._resetsCounter = parseInt(e.RC);
    this._sceatSkillsInProgress = [];
    var p = e.SSA;
    if (p != null) {
      for (var h = 0, g = p; h < g.length; h++) {
        var C = g[h];
        if (C !== undefined) {
          var _ = C.ID;
          var m = C.RS;
          d = this.getSceatSkillByID(_);
          this._sceatSkillsInProgress.push(d);
          d.setRemainingActivationTime(m);
        }
      }
    }
    this.controller.dispatchEvent(new c.LegendSkillsDataEvent(c.LegendSkillsDataEvent.LEGEND_SKILLS_UPDATED));
    this._waitingForServer = false;
  };
  CastleLegendSkillData.prototype.parse_SKP = function (e) {
    if (e.IDS) {
      var t = e.IDS;
      if (t != null) {
        for (var i = 0, n = t; i < n.length; i++) {
          var o = n[i];
          var s = a.int(o);
          if (s !== undefined) {
            var r = this.getSkillByID(s);
            var l = this.getSkillByID(r.previousID);
            if (l && this._userSkills.indexOf(l) > -1) {
              this._userSkills.splice(this._userSkills.indexOf(l), 1);
            }
            if (this._userSkills.indexOf(r) < 0) {
              this._userSkills.push(r);
              this._availablePoints -= r.cost;
            }
          }
        }
      }
      this.controller.dispatchEvent(new c.LegendSkillsDataEvent(c.LegendSkillsDataEvent.LEGEND_SKILL_ADDED));
      this.controller.dispatchEvent(new c.LegendSkillsDataEvent(c.LegendSkillsDataEvent.LEGEND_SKILLS_UPDATED));
    }
    this._waitingForServer = false;
  };
  CastleLegendSkillData.prototype.isSkillActive = function (e) {
    if (e instanceof E.CastleSceatSkillVO) {
      return this._sceatUserSkills.some(function (t) {
        return t.skillGroupID == e.skillGroupID && t.level >= e.level;
      });
    } else {
      return this._userSkills.indexOf(e) > -1;
    }
  };
  CastleLegendSkillData.prototype.getSkillByID = function (e) {
    if (this._skills.get(e)) {
      return this._skills.get(e);
    } else {
      return null;
    }
  };
  CastleLegendSkillData.prototype.getSceatSkillByID = function (e) {
    if (this._sceatSkills.get(e)) {
      return this._sceatSkills.get(e);
    } else {
      return null;
    }
  };
  CastleLegendSkillData.prototype.getTotalValueOfLegendSkillEffect = function (e) {
    var t = 0;
    if (this._userSkills != null) {
      for (var i = 0, n = this._userSkills; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && o.effectType == e) {
          t += o.totalEffectValue;
        }
      }
    }
    return t;
  };
  CastleLegendSkillData.prototype.getTotalSkillValue = function (e) {
    var t = 0;
    for (var i = 0, n = this.getSkillTreeNode(e.skillTreeID, e.tier, e.skillGroupID).childs; i < n.length; i++) {
      var o = n[i];
      if (o !== undefined && (t += o.legendSkillVO.effectValue, o.legendSkillVO.id == e.id)) {
        break;
      }
    }
    return t;
  };
  CastleLegendSkillData.prototype.getSpentPoints = function (e = -1, t = -1) {
    var i = 0;
    if (this._userSkills != null) {
      for (var n = 0, o = this._userSkills; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined) {
          if ((e == -1 || a.skillTreeID == e) && (t == -1 || a.tier == t)) {
            i += a.totalSkillPointsCost;
          }
        }
      }
    }
    return i;
  };
  CastleLegendSkillData.prototype.resetSkills = function () {
    this._userSkills = [];
    this._sceatUserSkills = [];
    this.requestSkillsListFromServer();
    this.controller.dispatchEvent(new c.LegendSkillsDataEvent(c.LegendSkillsDataEvent.LEGEND_SKILLS_RESET));
    this.controller.dispatchEvent(new c.LegendSkillsDataEvent(c.LegendSkillsDataEvent.LEGEND_SKILLS_UPDATED));
  };
  CastleLegendSkillData.prototype.isTierUnlocked = function (e, t) {
    return this.isNodeUnlocked(e, t);
  };
  CastleLegendSkillData.prototype.isTierUnlockedBySkillsSelectable = function (e, t) {
    var i = this.getSkillTreeNode(e, t);
    if (!i.isUnlocked()) {
      return false;
    }
    for (var n = 0; n < i.childs.length; n++) {
      for (var o = i.childs[n], a = 0; a < o.childs.length; a++) {
        var s = o.childs[a];
        if (s.legendSkillVO.level == 1 && s.legendSkillVO.isUnlocked() || s.legendSkillVO.isActive) {
          console.log("skillTreeID: " + e + ", tier: " + t + ", skillGroupID: " + o.id + ", skillLevelID: " + s.id + ", isUnlocked: " + s.isUnlocked());
          return true;
        }
      }
    }
    return false;
  };
  CastleLegendSkillData.prototype.isNodeUnlocked = function (e, t = 0) {
    var i = this.getSkillTreeNode(e);
    return (!i || !!i.isUnlocked()) && (!(t > 0) || !(i = this.getSkillTreeNode(e, t)) || !!i.isUnlocked());
  };
  CastleLegendSkillData.prototype.getNodeUnlockText = function (e, t = 0) {
    var i = this.getSkillTreeNode(e);
    if (i.getUnlockText() != "") {
      return i.getUnlockText();
    } else if (t > 0 && (i = this.getSkillTreeNode(e, t)).getUnlockText() != "") {
      return i.getUnlockText();
    } else {
      return "";
    }
  };
  CastleLegendSkillData.prototype.pointsLeftToUnlockTier = function (e, t) {
    return a.int(o.LegendSkillConst.pointsNeededForTier(t) - this.getSpentPoints(e, t - 1));
  };
  Object.defineProperty(CastleLegendSkillData.prototype, "skillPointsLeft", {
    get: function () {
      return this._availablePoints;
    },
    enumerable: true,
    configurable: true
  });
  CastleLegendSkillData.prototype.getMaxSkillLevelInGroup = function (e, t, i) {
    return a.int(this.getSkillTreeNode(e, t, i).childs.length);
  };
  CastleLegendSkillData.prototype.getCurrentSkillInGroup = function (e, t, i) {
    var n;
    var o = this.getSkillTreeNode(e, t, i);
    for (var a = 0, s = o.childs; a < s.length; a++) {
      var r = s[a];
      if (r !== undefined && (!n || (r.legendSkillVO.isActive || this.isSceatSkillInProgress(r.legendSkillVO)) && r.legendSkillVO.level > n.level)) {
        n = r.legendSkillVO;
      }
    }
    if (n) {
      return n;
    }
    return o.getChildNode(1).legendSkillVO;
  };
  CastleLegendSkillData.prototype.getNextLevel = function (e) {
    return this.getSkillTreeNode(e.skillTreeID, e.tier, e.skillGroupID, e.level + 1).legendSkillVO;
  };
  CastleLegendSkillData.prototype.getSkillTreeNode = function (e, t, i, n) {
    var o;
    if (t === undefined) {
      t = 0;
    }
    if (i === undefined) {
      i = 0;
    }
    if (n === undefined) {
      n = 0;
    }
    o = this._skillTree.getChildNode(e);
    if (t > 0) {
      o = o.getChildNode(t);
      if (i > 0) {
        o = o.getChildNode(i);
        if (n > 0) {
          o = o.getChildNode(n);
        }
      }
    }
    return o;
  };
  Object.defineProperty(CastleLegendSkillData.prototype, "userSkills", {
    get: function () {
      return this._userSkills;
    },
    enumerable: true,
    configurable: true
  });
  CastleLegendSkillData.prototype.requestSkillsListFromServer = function () {
    p.CastleModel.smartfoxClient.sendCommandVO(new r.C2SGetSkillListVO());
  };
  CastleLegendSkillData.prototype.requestSkillReset = function () {
    p.CastleModel.smartfoxClient.sendCommandVO(new l.C2SSkillsResetVO());
  };
  CastleLegendSkillData.prototype.buySkill = function (e) {
    if (!this._waitingForServer) {
      this._waitingForServer = true;
      e.buySkill();
    }
  };
  CastleLegendSkillData.prototype.hasLegendTemple = function () {
    return this._totalSkillPoints > 0;
  };
  Object.defineProperty(CastleLegendSkillData.prototype, "availablePoints", {
    get: function () {
      return this._availablePoints;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillData.prototype, "lastResetTimeStamp", {
    get: function () {
      return this._lastResetTimeStamp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillData.prototype, "newResetTimeStamp", {
    get: function () {
      return this._newResetTimeStamp;
    },
    enumerable: true,
    configurable: true
  });
  CastleLegendSkillData.prototype.stopWaitingForServer = function () {
    this._waitingForServer = false;
  };
  Object.defineProperty(CastleLegendSkillData.prototype, "totalSkillPoints", {
    get: function () {
      return this._totalSkillPoints;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillData.prototype, "skillIDArray", {
    get: function () {
      return this._skillIDArray;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillData.prototype, "controller", {
    get: function () {
      return d.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillData.prototype, "resetsCounter", {
    get: function () {
      return this._resetsCounter;
    },
    enumerable: true,
    configurable: true
  });
  CastleLegendSkillData.prototype.canAffordNextLevel = function (e) {
    if (e instanceof E.CastleSceatSkillVO) {
      var t = e.costCurrencyID;
      return p.CastleModel.currencyData.getAmountById(t) >= e.cost;
    }
    return this.availablePoints >= e.cost;
  };
  CastleLegendSkillData.prototype.isSceatSkillInProgress = function (e) {
    return this._sceatSkillsInProgress.indexOf(e) > -1;
  };
  CastleLegendSkillData.prototype.isAnyOtherSkillInProgress = function (e) {
    var t = [];
    for (var i = 0, n = Array.from(this._sceatTreeTabMap.values()); i < n.length; i++) {
      var o = n[i];
      if (o.indexOf(e.skillTreeID) > -1) {
        t = o;
        break;
      }
    }
    for (var a = 0, s = this._sceatSkillsInProgress; a < s.length; a++) {
      var r = s[a];
      if (t.indexOf(r.skillTreeID) > -1) {
        return true;
      }
    }
    return false;
  };
  Object.defineProperty(CastleLegendSkillData.prototype, "sceatTreeTabMap", {
    get: function () {
      return this._sceatTreeTabMap;
    },
    enumerable: true,
    configurable: true
  });
  CastleLegendSkillData.prototype.getSceatSkillEffectsByType = function (e, t = null) {
    t = t || g.CastleEffectConditionVO.NULL_CONDITION;
    var i = [];
    this._sceatUserSkills.forEach(function (n) {
      n.boni.forEach(function (n) {
        if (n.matchesConditions(e, t.areaType, t.spaceId, t.wodId, t.otherPlayer)) {
          i.push(n);
        }
      });
    });
    return i;
  };
  CastleLegendSkillData.prototype.getSceatSkillEffectValue = function (e, t = -1, i = -1, n = -1, o = null) {
    var a = h.CastleEffectsHelper.getTotalEffectValue(this.getSceatSkillEffectsByType(e, new g.CastleEffectConditionVO(t, i, n, o)), true);
    return a || new e.valueClass();
  };
  Object.defineProperty(CastleLegendSkillData.prototype, "meadUnitsUnlocked", {
    get: function () {
      return p.CastleModel.userData.userLegendLevel >= p.CastleModel.wodData.getBuildingVOById(1938).requiredLegendLevel;
    },
    enumerable: true,
    configurable: true
  });
  CastleLegendSkillData.prototype.isTreeMaxedOut = function (e) {
    for (var t = this.getSkillTreeNode(e), i = 0; i < t.childs.length; i++) {
      for (var n = t.childs[i], o = 0; o < n.childs.length; o++) {
        var a = n.childs[o];
        var s = a.childs[a.childs.length - 1];
        if (!this.isSkillActive(s.legendSkillVO)) {
          return false;
        }
      }
    }
    return true;
  };
  Object.defineProperty(CastleLegendSkillData.prototype, "sceatSkillsInProgress", {
    get: function () {
      return this._sceatSkillsInProgress;
    },
    enumerable: true,
    configurable: true
  });
  CastleLegendSkillData.prototype.canUpgradeAnySceatSkill = function () {
    var e = [];
    for (var t = 0, i = Array.from(this._sceatTreeTabMap.values()); t < i.length; t++) {
      var n = i[t];
      e = e.concat(n);
    }
    for (var o = 0; o < e.length; o++) {
      var a = e[o];
      var s = this.getSkillTreeNode(a);
      if (s.isUnlocked()) {
        for (var r = 0; r < s.childs.length; r++) {
          var l = s.childs[r];
          if (!l.isUnlocked()) {
            break;
          }
          for (var c = 0; c < l.childs.length; c++) {
            var u = l.childs[c];
            var d = this.getCurrentSkillInGroup(s.id, l.id, u.id);
            var p = d.isMaxLevel() ? d : this.getSceatSkillByID(d.nextID);
            if (!this.isSkillActive(p) && !this.isSceatSkillInProgress(d) && this.canAffordNextLevel(p) && p.isUnlocked()) {
              return true;
            }
          }
        }
      }
    }
    return false;
  };
  CastleLegendSkillData.prototype.getTabBySkillId = function (e) {
    var t = 0;
    var i = this.getSceatSkillByID(e);
    this._sceatTreeTabMap.forEach(function (e, n) {
      if (i && e.indexOf(i.skillTreeID) > -1) {
        t = n;
      }
    });
    if (t < 0) {
      return 0;
    } else {
      return t;
    }
  };
  return CastleLegendSkillData;
}();
exports.CastleLegendSkillData = n;
var o = require("./5.js");
var a = require("./6.js");
var s = require("./28.js");
var r = require("./4287.js");
var l = require("./4288.js");
var c = require("./529.js");
var u = require("./30.js");
var d = require("./15.js");
var p = require("./4.js");
var h = require("./110.js");
var g = require("./142.js");
var C = require("./4289.js");
var _ = require("./1454.js");
var m = require("./22.js");
var f = require("./4295.js");
var O = require("./1456.js");
var E = require("./628.js");
var y = require("./1889.js");