Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./4324.js");
var s = require("./22.js");
var r = require("./179.js");
var l = require("./72.js");
var c = require("./4.js");
var u = require("./35.js");
var d = require("./4325.js");
var p = require("./4326.js");
var h = require("./4327.js");
var g = require("./4328.js");
var C = require("./1268.js");
var _ = require("./4329.js");
var m = require("./721.js");
var f = require("./903.js");
var O = require("./4330.js");
var E = require("./4335.js");
var y = require("./4337.js");
var b = function (e) {
  function GeneralsData() {
    var t = e.call(this) || this;
    t.requestedHubQuestUpdate = false;
    t._generalXmlVOs = new Map();
    t._playerGenerals = new Map();
    t._npcGenerals = new Map();
    t._hubQuests = new Map();
    t._generalAbilitiesByID = new Map();
    t._generalAbilitiesByGroupID = new Map();
    t._generalAbilityEffects = new Map();
    t._generalSlots = new Map();
    t._generalSkills = new Map();
    t._generalRarity = new Map();
    t._generalXPItems = new Map();
    return t;
  }
  n.__extends(GeneralsData, e);
  GeneralsData.prototype.init = function (e) {
    var t = e.generals;
    if (t != null) {
      for (var i = 0, n = t; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          var a = new f.GeneralXmlVO(o);
          this._generalXmlVOs.set(a.generalID, a);
          var r = new m.GeneralVO(a.generalID);
          if (r.isNPCGeneral) {
            this._npcGenerals.set(r.generalID, r);
          } else {
            this._playerGenerals.set(r.generalID, r);
          }
        }
      }
    }
    for (var l = 0, c = e.characters; l < c.length; l++) {
      var u = c[l];
      if (u !== undefined) {
        var b = new C.GeneralsHubQuestVO(u);
        this._hubQuests.set(b.characterID, b);
      }
    }
    for (var D = 0, I = e.generalAbilities; D < I.length; D++) {
      var T = I[D];
      if (T !== undefined) {
        var v = new p.GeneralAbilityXmlVO(T);
        if (!this._generalAbilitiesByGroupID.get(v.abilityGroupID)) {
          this._generalAbilitiesByGroupID.set(v.abilityGroupID, []);
        }
        this._generalAbilitiesByID.set(v.abilityID, v);
        this._generalAbilitiesByGroupID.get(v.abilityGroupID).push(v);
      }
    }
    for (var S = 0, A = e.generalSlots; S < A.length; S++) {
      var L = A[S];
      if (L !== undefined) {
        var P = new h.GeneralGeneralSlotXmlVO(L);
        this._generalSlots.set(P.slotID, P);
      }
    }
    for (var M = 0, R = e.generalAbilityEffects; M < R.length; M++) {
      var V = R[M];
      if (V !== undefined) {
        var x = new d.GeneralAbilityEffectXmlVO(V);
        this._generalAbilityEffects.set(x.abilityEffectID, x);
      }
    }
    for (var w = 0, B = e.generalRarities; w < B.length; w++) {
      var F = B[w];
      if (F !== undefined) {
        var N = new g.GeneralRarityXmlVO(F);
        this._generalRarity.set(N.generalRarityID, N);
      }
    }
    for (var k = 0, U = e.generalXpItems; k < U.length; k++) {
      var G = U[k];
      if (G !== undefined) {
        var H = new _.GeneralsXPItemVO(G);
        this._generalXPItems.set(H.currencyID, H);
      }
    }
    var j = e.generalSkills;
    this._generalSkillTrees = new O.GeneralSkillTreeRoot(0);
    if (j != null) {
      for (var W = 0, Y = j; W < Y.length; W++) {
        var K = Y[W];
        var z = new E.GeneralSkillVO();
        z.parseXML(K);
        this._generalSkills.set(z.id, z);
        this._generalSkillTrees.insertSkill(z);
      }
    }
    var q = e.generalSkillTiers;
    if (q != null) {
      for (var X = 0, Q = q; X < Q.length; X++) {
        var J = Q[X];
        var Z = parseInt(s.CastleXMLUtils.getValueOrDefault("generalID", J, "-1"));
        var $ = parseInt(s.CastleXMLUtils.getValueOrDefault("tier", J, "-1"));
        var ee = parseInt(s.CastleXMLUtils.getValueOrDefault("hidden", J, "0")) == 1;
        var te = parseInt(s.CastleXMLUtils.getValueOrDefault("previousTierRequiredSkillPoints", J, "-1"));
        var ie = parseInt(s.CastleXMLUtils.getValueOrDefault("minGeneralStarTier", J, "-1"));
        if (Z >= 0 && $ > 0 && te > 0) {
          var ne = this.getSkillTreeNode(Z, $);
          if (ne) {
            ne.isHidden = ee;
            var oe = new y.GeneralUnlockRequirementSpentPointsInTier(Z, $ - 1, te, ie);
            ne.addUnlockRequirement(oe);
          }
        }
        if (ee) {
          var ae = this.getSkillTreeNode(Z);
          if (ae) {
            ae.isIncomplete = true;
          }
        }
      }
    }
  };
  GeneralsData.prototype.getGeneralXMLVOByTokenID = function (e) {
    var t = null;
    this._generalXmlVOs.forEach(function (i) {
      if (i.unlockCurrencyID == e) {
        t = i;
      }
    });
    return t;
  };
  GeneralsData.prototype.getGeneralsHubQuestVOByCharacterID = function (e) {
    return this._hubQuests.get(e);
  };
  GeneralsData.prototype.parse_GIE = function (e) {
    var t = this;
    e.G.forEach(function (e) {
      return t._playerGenerals.get(e.GID).parseData(e);
    });
    this.dispatchEvent(new r.GeneralsEvent(r.GeneralsEvent.GENERALS_UPDATED));
  };
  GeneralsData.prototype.parse_SCT = function (e) {
    var t = this.getGeneralsHubQuestVOByCharacterID(e.CH.CID);
    t.parseServerObject(e.CH);
    var i = e.LTR;
    this.dispatchEvent(new r.GeneralsEvent(r.GeneralsEvent.GENERALS_HUB_REWARDS, [t, i]));
  };
  GeneralsData.prototype.updateAssignedLords = function () {
    this._playerGenerals.forEach(function (e) {
      return e.assignedLord = c.CastleModel.lordData.getAssignedLord(e);
    });
    this.dispatchEvent(new r.GeneralsEvent(r.GeneralsEvent.GENERALS_UPDATED));
  };
  GeneralsData.prototype.requestQuestUpdateData = function () {
    if (!this.requestedHubQuestUpdate) {
      o.BasicModel.smartfoxClient.sendCommandVO(new a.C2SGeneralsHUBStatusVO());
    }
    this.requestedHubQuestUpdate = true;
  };
  GeneralsData.prototype.parse_GCS = function (e) {
    for (var t = 0; t < e.CHR.length; t++) {
      this.getGeneralsHubQuestVOByCharacterID(e.CHR[t].CID).parseServerObject(e.CHR[t]);
    }
    this.requestedHubQuestUpdate = false;
    this.dispatchEvent(new r.GeneralsEvent(r.GeneralsEvent.GENERALS_HUB_UPDATED));
  };
  GeneralsData.prototype.getAllGeneralsHubQuestIDs = function () {
    var e = [];
    this._hubQuests.forEach(function (t) {
      e.push(t.characterID);
    });
    return e;
  };
  GeneralsData.prototype.getSkillById = function (e) {
    return this._generalSkills.get(e);
  };
  GeneralsData.prototype.getSkillTreeNode = function (e, t, i, n) {
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
    o = this._generalSkillTrees.getChildNode(e);
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
  GeneralsData.prototype.getSkillPointsSpent = function (e) {
    var t = this;
    var i = this.playerGenerals.get(e);
    if (i) {
      return i.unlockedSkillIDs.map(function (e) {
        return t._generalSkills.get(e);
      }).map(function (e) {
        return e.totalCostSkillPoints;
      }).reduce(function (e, t) {
        return e + t;
      }, 0);
    } else {
      return 0;
    }
  };
  GeneralsData.prototype.isTierCompleted = function (e, t) {
    var i = this;
    if (t === undefined) {
      t = 0;
    }
    var n = this.getSkillTreeNode(e, t);
    return !!n && n.childs.every(function (n) {
      return i.isGroupCompleted(e, t, n.id);
    });
  };
  GeneralsData.prototype.isGroupCompleted = function (e, t, i) {
    var n = this.playerGenerals.get(e);
    var o = this.getSkillTreeNode(e, t, i);
    return !!o && o.childs.every(function (e) {
      var t = n.getActiveSkillInGroup(o);
      return t && t.isMaxLevel;
    });
  };
  GeneralsData.prototype.isTierInProgress = function (e, t) {
    var i = this;
    if (t === undefined) {
      t = 0;
    }
    var n = this.getSkillTreeNode(e, t);
    return !!n && n.childs.some(function (n) {
      return i.isGroupInProgress(e, t, n.id);
    });
  };
  GeneralsData.prototype.isGroupInProgress = function (e, t, i) {
    var n = this.playerGenerals.get(e);
    var o = this.getSkillTreeNode(e, t, i);
    return !!o && o.childs.some(function (e) {
      var t = n.getActiveSkillInGroup(o);
      return t && t.level > 0 && !t.isMaxLevel;
    });
  };
  GeneralsData.prototype.reset = function () {
    var e = this;
    this.requestedHubQuestUpdate = false;
    this._playerGenerals.forEach(function (t) {
      e._playerGenerals.set(t.generalID, new m.GeneralVO(t.generalID));
    });
  };
  Object.defineProperty(GeneralsData.prototype, "generalXmlVOs", {
    get: function () {
      return this._generalXmlVOs;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralsData.prototype, "playerGenerals", {
    get: function () {
      return this._playerGenerals;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralsData.prototype, "npcGenerals", {
    get: function () {
      return this._npcGenerals;
    },
    enumerable: true,
    configurable: true
  });
  GeneralsData.prototype.getGeneralSlotsByIDs = function (e) {
    var t = [];
    for (var i = 0; i < e.length; i++) {
      t.push(this._generalSlots.get(e[i]));
    }
    return t;
  };
  GeneralsData.prototype.isGeneralAbilityUnlocked = function (e, t) {
    var i = this._playerGenerals.get(t);
    if (!i) {
      return false;
    }
    var n = [];
    this._generalSkills.forEach(function (e) {
      n.push(e);
    });
    for (var o = 0, a = n; o < a.length; o++) {
      var s = a[o];
      if (s && s.generalID == t && s.hasOneOrMoreEffectTypes([u.EffectTypeEnum.EFFECT_TYPE_UNLOCK_ABILITY])) {
        if (s.getEffectValueByType(u.EffectTypeEnum.EFFECT_TYPE_UNLOCK_ABILITY).rawValues[0] != e) {
          continue;
        }
        return i.unlockedSkillIDs.indexOf(s.id) >= 0;
      }
    }
    return true;
  };
  GeneralsData.prototype.getAbilityByID = function (e) {
    return this._generalAbilitiesByID.get(e);
  };
  GeneralsData.prototype.getAbilityGroupByID = function (e) {
    return this._generalAbilitiesByGroupID.get(e);
  };
  GeneralsData.prototype.getAbilityEffectByID = function (e) {
    return this._generalAbilityEffects.get(e);
  };
  GeneralsData.prototype.getGeneralRarityByID = function (e) {
    return this._generalRarity.get(e);
  };
  GeneralsData.prototype.getAllXPCurrencies = function () {
    var e = [];
    this._generalXPItems.forEach(function (t) {
      e.push(t.currencyID);
    });
    return e;
  };
  GeneralsData.prototype.getXPItemByCurrencyID = function (e) {
    return this._generalXPItems.get(e);
  };
  GeneralsData.prototype.getTotalAmountOfAvailableDraws = function () {
    var e = 0;
    this._hubQuests.forEach(function (t) {
      e += t.availableQuests;
      e += Math.floor(c.CastleModel.currencyData.getAmountById(t.getCostVOForPayQuest().id / t.getCostVOForPayQuest().amount));
    });
    return e;
  };
  GeneralsData.prototype.checkHubQuestCooldowns = function () {
    this._hubQuests.forEach(function (e) {
      return e.remainingCoolDownInSeconds;
    });
  };
  GeneralsData.prototype.getAmountOfUnlockOrUpgradeableGeneral = function () {
    var e = 0;
    this.playerGenerals.forEach(function (t) {
      if (t.canBeUnlocked || t.hasEnoughShardsToUpgradeStarLevel) {
        e++;
      }
    });
    return e;
  };
  return GeneralsData;
}(l.CastleEventDispatcher);
exports.GeneralsData = b;