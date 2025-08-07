Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./723.js");
var o = function () {
  function LordVO() {
    this._rawLordEffects = [];
    this._areaEffects = [];
    this._id = -1;
    this._picID = 0;
    this._wins = 0;
    this._defeats = 0;
    this._winSpree = 0;
    this._isLocked = false;
    this._assignedGeneralVO = null;
    this._equipmentSlots = {};
  }
  Object.defineProperty(LordVO.prototype, "canUseEquipmentWarningIcon", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LordVO.prototype, "helmetSlotVO", {
    get: function () {
      return this._equipmentSlots[m.BasicEquippableVO.SLOT_TYPE_HELMET];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LordVO.prototype, "armorSlotVO", {
    get: function () {
      return this._equipmentSlots[m.BasicEquippableVO.SLOT_TYPE_ARMOR];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LordVO.prototype, "weaponSlotVO", {
    get: function () {
      return this._equipmentSlots[m.BasicEquippableVO.SLOT_TYPE_WEAPON];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LordVO.prototype, "artifactSlotVO", {
    get: function () {
      return this._equipmentSlots[m.BasicEquippableVO.SLOT_TYPE_ARTIFACT];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LordVO.prototype, "skinSlotVO", {
    get: function () {
      return this._equipmentSlots[m.BasicEquippableVO.SLOT_TYPE_SKIN];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LordVO.prototype, "alienDummySlotVO", {
    get: function () {
      return this._equipmentSlots[m.BasicEquippableVO.SLOT_TYPE_ALL];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LordVO.prototype, "heroSlotVO", {
    get: function () {
      if (this._equipmentSlots) {
        return this._equipmentSlots[m.BasicEquippableVO.SLOT_TYPE_HERO];
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LordVO.prototype, "everyEquipmentSlotIsUsed", {
    get: function () {
      var e = 0;
      if (this._equipmentSlots != null) {
        for (var t in this._equipmentSlots) {
          var i = this._equipmentSlots[t];
          if (i !== undefined && i.slotType != m.BasicEquippableVO.SLOT_TYPE_SKIN && i.equipmentVO != null) {
            e++;
          }
        }
      }
      return e >= 5;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LordVO.prototype, "hasTemporaryItemsEquipped", {
    get: function () {
      var e = false;
      if (this._equipmentSlots != null) {
        for (var t in this._equipmentSlots) {
          var i = this._equipmentSlots[t];
          if (i !== undefined && i.slotType != m.BasicEquippableVO.SLOT_TYPE_SKIN && i.equipmentVO && !i.equipmentVO.isPermanent) {
            e = true;
          }
        }
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LordVO.prototype, "amountOfEquipmentItems", {
    get: function () {
      var e = 0;
      if (this._equipmentSlots != null) {
        for (var t in this._equipmentSlots) {
          var i = this.equipmentSlots[t];
          if (i !== undefined && i.equipmentVO != null) {
            e++;
          }
        }
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  LordVO.prototype.parseAllianceTowerBuffInfo = function (e, t = true) {
    this._rawLordEffects = [];
    if (e && (!t || e.isActive)) {
      for (var i = 0, n = e.currentEffects; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && o.currentLevel > 0) {
          this._rawLordEffects.push(o.currentBonusVO.clone());
        }
      }
    }
  };
  LordVO.prototype.parseLord = function (e, t = false, i = false) {
    if (e) {
      this._id = p.int(e.ID);
      this._equipmentSlots = {};
      this._equipmentSlots[m.BasicEquippableVO.SLOT_TYPE_HELMET] = new f.CastleEquipmentSlotVO(m.BasicEquippableVO.SLOT_TYPE_HELMET);
      this._equipmentSlots[m.BasicEquippableVO.SLOT_TYPE_ARMOR] = new f.CastleEquipmentSlotVO(m.BasicEquippableVO.SLOT_TYPE_ARMOR);
      this._equipmentSlots[m.BasicEquippableVO.SLOT_TYPE_WEAPON] = new f.CastleEquipmentSlotVO(m.BasicEquippableVO.SLOT_TYPE_WEAPON);
      this._equipmentSlots[m.BasicEquippableVO.SLOT_TYPE_ARTIFACT] = new f.CastleEquipmentSlotVO(m.BasicEquippableVO.SLOT_TYPE_ARTIFACT);
      this._equipmentSlots[m.BasicEquippableVO.SLOT_TYPE_SKIN] = new f.CastleEquipmentSlotVO(m.BasicEquippableVO.SLOT_TYPE_SKIN);
      this._equipmentSlots[m.BasicEquippableVO.SLOT_TYPE_HERO] = new f.CastleEquipmentSlotVO(m.BasicEquippableVO.SLOT_TYPE_HERO);
      this._rawLordEffects = this.parseRawEffects(e.E);
      this.areaEffects = this.parseRawEffects(e.AE);
      this._wins = p.int(e.W);
      this._defeats = p.int(e.D);
      this._winSpree = p.int(e.SPR);
      var n = e.AIE ? e.AIE : e.TAE ? e.TAE : null;
      if (e.EQ && e.EQ.length > 0 && !i) {
        for (var o = 0, a = e.EQ; o < a.length; o++) {
          var s = a[o];
          if (s !== undefined) {
            var r = g.CastleEquipmentFactory.createEquipmentVO(s);
            switch (s[1]) {
              case c.EquipmentConst.SLOT_ARMOR:
                this.armorSlotVO.equipmentVO = r;
                break;
              case c.EquipmentConst.SLOT_ARTIFACT:
                this.artifactSlotVO.equipmentVO = r;
                break;
              case c.EquipmentConst.SLOT_HELMET:
                this.helmetSlotVO.equipmentVO = r;
                break;
              case c.EquipmentConst.SLOT_SKIN:
                this.skinSlotVO.equipmentVO = r;
                break;
              case c.EquipmentConst.SLOT_WEAPON:
                this.weaponSlotVO.equipmentVO = r;
                break;
              case c.EquipmentConst.SLOT_HERO:
                this.heroSlotVO.equipmentVO = r;
            }
          }
        }
      } else if (n && !i) {
        var l;
        var u = [];
        if (n.length != 2 || n[0].length != 0 && !Array.isArray(n[0][0]) || n[1].length != 0 && !Array.isArray(n[1][0])) {
          l = n;
        } else {
          u = n[0];
          l = n[1];
        }
        if (u.length > 0) {
          this._equipmentSlots[m.BasicEquippableVO.SLOT_TYPE_HERO] = new f.CastleEquipmentSlotVO(m.BasicEquippableVO.SLOT_TYPE_HERO);
          var d = new _.AlienLordHeroVO();
          d.parseAlienBoniData(u);
          this.heroSlotVO.equipmentVO = d;
        }
        this._equipmentSlots[m.BasicEquippableVO.SLOT_TYPE_ALL] = new f.CastleEquipmentSlotVO(m.BasicEquippableVO.SLOT_TYPE_ALL);
        var h = new C.AlienLordEquipmentVO();
        h.parseAlienBoniData(l);
        h.parseGemBoniData(e.GEM);
        this.alienDummySlotVO.equipmentVO = h;
      }
      this._picID = p.int(e.VIS);
      this._name = e.N;
      this.parseGeneral(e, t);
    }
  };
  LordVO.prototype.parseGeneral = function (e, t = false) {
    var i = e.GID;
    if (i > 0 && t) {
      if (h.CastleModel.generalsData.generalXmlVOs.has(i)) {
        this.assignedGeneralVO = new n.GeneralVO(i);
        this.assignedGeneralVO.parseData(e);
        this.assignedGeneralVO.assignedLord = this;
      }
    } else {
      this.assignedGeneralVO = h.CastleModel.generalsData.playerGenerals.get(i);
    }
  };
  LordVO.prototype.parseRawEffects = function (e) {
    var t = [];
    if (e) {
      for (var i = 0; i < e.length; ++i) {
        var n = e[i];
        var o = h.CastleModel.effectsData.getEffectByID(n[0]);
        if (o) {
          var a = new O.RawLordEffectBonusVO();
          a.parseFromValueArray(o, n[1], n[2]);
          if (a.effect) {
            t.push(a);
          }
        } else {
          console.log("unknown effectID: " + n[0]);
        }
      }
    }
    return t;
  };
  LordVO.prototype.createUnknownLord = function () {
    this._id = -1;
    this._equipmentSlots = {};
    this._equipmentSlots[m.BasicEquippableVO.SLOT_TYPE_HELMET] = new f.CastleEquipmentSlotVO(m.BasicEquippableVO.SLOT_TYPE_HELMET);
    this._equipmentSlots[m.BasicEquippableVO.SLOT_TYPE_ARMOR] = new f.CastleEquipmentSlotVO(m.BasicEquippableVO.SLOT_TYPE_ARMOR);
    this._equipmentSlots[m.BasicEquippableVO.SLOT_TYPE_WEAPON] = new f.CastleEquipmentSlotVO(m.BasicEquippableVO.SLOT_TYPE_WEAPON);
    this._equipmentSlots[m.BasicEquippableVO.SLOT_TYPE_ARTIFACT] = new f.CastleEquipmentSlotVO(m.BasicEquippableVO.SLOT_TYPE_ARTIFACT);
    this._equipmentSlots[m.BasicEquippableVO.SLOT_TYPE_SKIN] = new f.CastleEquipmentSlotVO(m.BasicEquippableVO.SLOT_TYPE_SKIN);
    this._equipmentSlots[m.BasicEquippableVO.SLOT_TYPE_HERO] = new f.CastleEquipmentSlotVO(m.BasicEquippableVO.SLOT_TYPE_HERO);
    this._wins = 0;
    this._defeats = 0;
    this._winSpree = 0;
    this._picID = -1;
    this._name = u.Localize.text("Unknown_name");
  };
  LordVO.prototype.copyFromLord = function (e) {
    this.createUnknownLord();
    this._id = e._id;
    this._wins = e._wins;
    this._defeats = e._defeats;
    this._winSpree = e._winSpree;
    this._picID = e._picID;
    this._name = e._name;
    if (e._equipmentSlots) {
      this._equipmentSlots[m.BasicEquippableVO.SLOT_TYPE_HELMET] = e._equipmentSlots[m.BasicEquippableVO.SLOT_TYPE_HELMET];
      this._equipmentSlots[m.BasicEquippableVO.SLOT_TYPE_ARMOR] = e._equipmentSlots[m.BasicEquippableVO.SLOT_TYPE_ARMOR];
      this._equipmentSlots[m.BasicEquippableVO.SLOT_TYPE_WEAPON] = e._equipmentSlots[m.BasicEquippableVO.SLOT_TYPE_WEAPON];
      this._equipmentSlots[m.BasicEquippableVO.SLOT_TYPE_ARTIFACT] = e._equipmentSlots[m.BasicEquippableVO.SLOT_TYPE_ARTIFACT];
      this._equipmentSlots[m.BasicEquippableVO.SLOT_TYPE_SKIN] = e._equipmentSlots[m.BasicEquippableVO.SLOT_TYPE_SKIN];
      this._equipmentSlots[m.BasicEquippableVO.SLOT_TYPE_HERO] = e._equipmentSlots[m.BasicEquippableVO.SLOT_TYPE_HERO];
    }
    this._rawLordEffects = e._rawLordEffects;
    this._areaEffects = e._areaEffects;
    this.assignedGeneralVO = e.assignedGeneralVO;
  };
  Object.defineProperty(LordVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  LordVO.prototype.getUniqueBoni = function (e = false, t = null, i = -1, n = null, o = false, a = true) {
    var s = [];
    if (this.equipmentSlots && a) {
      for (var c in this.equipmentSlots) {
        var u = r.castAs(this.equipmentSlots[c], "CastleEquipmentSlotVO");
        if (u && u.equipmentVO) {
          s = s.concat(this.checkConditions(u.equipmentVO.boni, t, i, n));
          if (l.instanceOfClass(u.equipmentVO, "RelicEquipmentVO")) {
            var d = u.equipmentVO;
            s = s.concat(this.checkConditions(d.relicInfoVO.relicBoni, t, i, n));
          }
          if (u.equipmentVO.gemVO) {
            s = l.instanceOfClass(u.equipmentVO.gemVO, "CastleGemVO") ? s.concat(this.checkConditions(u.equipmentVO.gemVO.boni, t, i, n)) : s.concat(this.checkConditions(u.equipmentVO.gemVO.relicInfoVO.relicBoni, t, i, n));
          }
          if (l.instanceOfClass(u.equipmentVO, "AlienLordEquipmentVO")) {
            var g = u.equipmentVO.alienGems;
            if (g != null) {
              for (var C = 0, _ = g; C < _.length; C++) {
                var m = _[C];
                if (m !== undefined) {
                  s = s.concat(this.checkConditions(m.boni, t, i, n));
                }
              }
            }
          }
        }
      }
    }
    s = (s = s.concat(this.checkConditions(this._rawLordEffects, t, i, n))).concat(this.checkConditions(this._areaEffects, t, i, n));
    var f = this.setCounts;
    var O = [];
    if (f != null) {
      for (var E = 0, y = Array.from(f.keys()); E < y.length; E++) {
        var b = c = y[E];
        if (b !== undefined) {
          var D = h.CastleModel.equipData.equipmentXml.getEquipmentSet(b);
          if (D) {
            var I = p.int(f.get(b));
            for (var T = 0; T < D.neededItemThresholds.length; T++) {
              if (D.neededItemThresholds[T] <= I) {
                O.push(D.effects[T].clone());
              }
            }
          }
        }
      }
    }
    s = s.concat(this.checkConditions(O, t, i, n));
    if (o && this.assignedGeneralVO) {
      s = s.concat(this.checkConditions(this.assignedGeneralVO.getPassiveEffects(), t, i, n));
    }
    return this.mergeBoni(s, e);
  };
  LordVO.prototype.checkConditions = function (e, t, i, n) {
    n ||= a.LordEffectHelper.STRATEGY_FULL_ACTIVE;
    var o = [];
    for (var s = p.int(e.length), r = 0; r < s; r++) {
      if (n.isEffectTypeIncluded(e[r].effect.effectType) && e[r].matchesConditions(t, i)) {
        if (n != a.LordEffectHelper.STRATEGY_FULL_ACTIVE && n != a.LordEffectHelper.STRATEGY_FULL_PASSIVE) {
          if (this.isFilterStrategyPVE(n) && e[r].effect.isPvPFight) {
            continue;
          }
          if (!this.isFilterStrategyPVE(n) && e[r].effect.isPvEFight) {
            continue;
          }
        }
        o.push(e[r]);
      }
    }
    return o;
  };
  LordVO.prototype.isFilterStrategyPVE = function (e) {
    return e == a.LordEffectHelper.STRATEGY_DEFENCE_PVE || e == a.LordEffectHelper.STRATEGY_ATTACK_PVE;
  };
  LordVO.prototype.mergeBoni = function (e, t) {
    var i = new Map();
    var n = new Map();
    var o = [];
    if (e != null) {
      for (var a = 0, r = e; a < r.length; a++) {
        var c = r[a];
        if (c !== undefined) {
          if (l.instanceOfClass(c, "GemBonusVO") && c.triggerChance != 100) {
            o.push(c);
          } else if (c.maxValueStrength == Number.MAX_VALUE) {
            if (!s.DictionaryUtil.containsKey(n, c.effect.effectID)) {
              n.set(c.effect.effectID, []);
            }
            n.get(c.effect.effectID).push(c);
          } else {
            if (!s.DictionaryUtil.containsKey(i, c.effect.effectID)) {
              i.set(c.effect.effectID, []);
            }
            i.get(c.effect.effectID).push(c);
          }
        }
      }
    }
    if (i != null) {
      for (var u = 0, d = Array.from(i.keys()); u < d.length; u++) {
        var p = d[u];
        if (p !== undefined) {
          var g = i.get(p);
          var C = null;
          if (g != null) {
            for (var _ = 0, m = g; _ < m.length; _++) {
              var f = m[_];
              if (f !== undefined) {
                if (C) {
                  if (t) {
                    C.effectValue.add(f.effectValue, null);
                  } else {
                    C.effectValue.add(f.effectValue, [h.CastleModel.effectsData.getEffectCap(C.effect.capId).maxTotalBonus]);
                  }
                  f.effectSources.forEach(function (e) {
                    C.addEffectSource(e);
                  });
                } else {
                  C = f.clone();
                }
              }
            }
          }
          if (C) {
            o.push(C);
          }
        }
      }
    }
    if (n != null) {
      for (var O = 0, E = Array.from(n.keys()); O < E.length; O++) {
        var y = E[O];
        if (y !== undefined) {
          var b = n.get(y);
          var D = null;
          if (b != null) {
            for (var I = 0, T = b; I < T.length; I++) {
              var v = T[I];
              if (v !== undefined) {
                if (D) {
                  D.effectValue.add(v.effectValue, null);
                  v.effectSources.forEach(function (e) {
                    D.addEffectSource(e);
                  });
                } else {
                  D = v.clone();
                }
              }
            }
          }
          if (D) {
            o.push(D);
          }
        }
      }
    }
    return o;
  };
  LordVO.prototype.getEffectValue = function (e, t = -1, i = -1, n = -1) {
    var o = [];
    var a = p.int(t < 0 && h.CastleModel.areaData.activeArea.areaInfo ? h.CastleModel.areaData.activeArea.areaInfo.areaType : t);
    var s = p.int(i < 0 && h.CastleModel.areaData.activeArea ? h.CastleModel.areaData.activeArea.spaceId : i);
    if (this.equipmentSlots != null) {
      for (var r in this.equipmentSlots) {
        var c = this.equipmentSlots[r];
        if (c !== undefined) {
          var u = c.equipmentVO;
          if (u) {
            if (l.instanceOfClass(u, "RelicEquipmentVO")) {
              this.addRelevantEffectsToList(o, u.relicInfoVO.relicBoni, e, a, s, n);
            } else {
              this.addRelevantEffectsToList(o, u.boni, e, a, s, n);
            }
            var d = u.gemVO;
            if (d) {
              if (l.instanceOfClass(d, "RelicGemVO")) {
                this.addRelevantEffectsToList(o, d.relicInfoVO.relicBoni, e, a, s, n);
              } else if (l.instanceOfClass(d, "CastleGemVO")) {
                this.addRelevantEffectsToList(o, d.boni, e, a, s, n);
              }
            }
          }
        }
      }
    }
    if (this.assignedGeneralVO) {
      this.addRelevantEffectsToList(o, this.assignedGeneralVO.getPassiveEffects(), e, a, s, n);
    }
    if (o.length > 0) {
      var g = o[0].clone();
      if (o.length > 1) {
        for (var C = 1; C < o.length; ++C) {
          g.effectValue.add(o[C].effectValue, [g.maxValueStrength]);
        }
      }
      return g.effectValue.strength;
    }
    return 0;
  };
  LordVO.prototype.addRelevantEffectsToList = function (e, t, i, n, o, a) {
    if (t != null) {
      for (var s = 0, r = t; s < r.length; s++) {
        var l = r[s];
        if (l !== undefined && l.matchesConditions(i, n, o, a)) {
          e.push(l);
        }
      }
    }
  };
  Object.defineProperty(LordVO.prototype, "setCounts", {
    get: function () {
      var e = new Map();
      var t = [];
      var i = 0;
      if (this.equipmentSlots != null) {
        for (var n in this.equipmentSlots) {
          var o = this.equipmentSlots[n];
          if (o !== undefined && o.equipmentVO) {
            if (o.equipmentVO.hasSetbonus) {
              i = p.int(o.equipmentVO.setID);
              e.set(i, e.get(i) ? e.get(i) + 1 : 1);
            }
            if (o.equipmentVO.gemVO && o.equipmentVO.gemVO.setID > 0 && t.indexOf(o.equipmentVO.gemVO.id) == -1) {
              t.push(o.equipmentVO.gemVO.id);
              i = p.int(o.equipmentVO.gemVO.setID);
              e.set(i, e.get(i) ? e.get(i) + 1 : 1);
            }
          }
        }
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  LordVO.prototype.setEquipment = function (e) {
    switch (e.slotType) {
      case m.BasicEquippableVO.SLOT_TYPE_ARMOR:
        this.armorSlotVO.equipmentVO = e;
        break;
      case m.BasicEquippableVO.SLOT_TYPE_ARTIFACT:
        this.artifactSlotVO.equipmentVO = e;
        break;
      case m.BasicEquippableVO.SLOT_TYPE_HELMET:
        this.helmetSlotVO.equipmentVO = e;
        break;
      case m.BasicEquippableVO.SLOT_TYPE_SKIN:
        this.skinSlotVO.equipmentVO = e;
        break;
      case m.BasicEquippableVO.SLOT_TYPE_WEAPON:
        this.weaponSlotVO.equipmentVO = e;
        break;
      case m.BasicEquippableVO.SLOT_TYPE_HERO:
        this.heroSlotVO.equipmentVO = e;
    }
  };
  LordVO.prototype.getCountOfSetId = function (e) {
    if (this.setCounts.get(e)) {
      return p.int(this.setCounts.get(e));
    } else {
      return 0;
    }
  };
  LordVO.prototype.hasUniqueItemEquipped = function (e) {
    if (this.equipmentSlots != null) {
      for (var t in this.equipmentSlots) {
        var i = this.equipmentSlots[t];
        if (i !== undefined && i.equipmentVO && e) {
          if (l.instanceOfClass(e, "CastleGemVO") && i.equipmentVO.gemVO) {
            if (e.id == i.equipmentVO.gemVO.id) {
              return true;
            }
          } else if (l.instanceOfClass(e, "BasicEquipmentVO") && e.uniqueID == i.equipmentVO.uniqueID) {
            return true;
          }
        }
      }
    }
    return false;
  };
  Object.defineProperty(LordVO.prototype, "equipmentSlots", {
    get: function () {
      return this._equipmentSlots;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LordVO.prototype, "picID", {
    get: function () {
      return this._picID;
    },
    set: function (e) {
      this._picID = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LordVO.prototype, "heroPicVisClassName", {
    get: function () {
      return this.heroSlotVO.equipmentVO.visClassName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LordVO.prototype, "heroPicAssetURL", {
    get: function () {
      return this.heroSlotVO.equipmentVO.visClassName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LordVO.prototype, "isAvailableForMovement", {
    get: function () {
      if (this._isLocked) {
        return true;
      }
      for (var e = 0, t = Array.from(h.CastleModel.armyData.mapMovements.values()); e < t.length; e++) {
        var i = t[e];
        if (i.isMyMovement && i.lordVO && i.lordVO.id == this.id) {
          return false;
        }
      }
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LordVO.prototype, "isAvailableForEquip", {
    get: function () {
      if (this._isLocked) {
        return false;
      }
      for (var e = 0, t = Array.from(h.CastleModel.armyData.mapMovements.values()); e < t.length; e++) {
        var i = t[e];
        if (i.isMyMovement && i.lordVO && i.lordVO.id == this.id) {
          return false;
        }
      }
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LordVO.prototype, "isAvailableForGeneralAssignement", {
    get: function () {
      return this.isAvailableForEquip;
    },
    enumerable: true,
    configurable: true
  });
  LordVO.prototype.getFeatherClassName = function () {
    return null;
  };
  LordVO.prototype.getFeatherAsset = function () {
    return "Lord_Icons";
  };
  LordVO.prototype.getVisClassName = function () {
    return "";
  };
  LordVO.prototype.getVisAsset = function () {
    return "";
  };
  Object.defineProperty(LordVO.prototype, "isHero", {
    get: function () {
      return !!this.heroSlotVO && this.heroSlotVO.equipmentVO != null && (!l.instanceOfClass(this.heroSlotVO.equipmentVO, "AlienLordHeroVO") || this.heroSlotVO.equipmentVO.itemGroupID != 0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LordVO.prototype, "rareID", {
    get: function () {
      return this.heroSlotVO.equipmentVO.visualRareID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LordVO.prototype, "wins", {
    get: function () {
      return this._wins;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LordVO.prototype, "defeats", {
    get: function () {
      return this._defeats;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LordVO.prototype, "winSpree", {
    get: function () {
      return this._winSpree;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LordVO.prototype, "name", {
    get: function () {
      if (this._name) {
        return new d.TextVO(this._name);
      } else {
        return new d.TextVO("");
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LordVO.prototype, "defaultName", {
    get: function () {
      return this.name;
    },
    enumerable: true,
    configurable: true
  });
  LordVO.prototype.lock = function () {
    this._isLocked = true;
  };
  LordVO.prototype.unlock = function () {
    this._isLocked = false;
  };
  Object.defineProperty(LordVO.prototype, "label", {
    get: function () {
      return this.name.compose();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LordVO.prototype, "isBaron", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LordVO.prototype, "rawLordEffects", {
    get: function () {
      return this._rawLordEffects;
    },
    set: function (e) {
      this._rawLordEffects = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LordVO.prototype, "areaEffects", {
    get: function () {
      return this._areaEffects;
    },
    set: function (e) {
      var t = [];
      if (e && e.length > 0) {
        this._areaEffects = e.filter(function (e) {
          return !!e.effect && t.indexOf(e.effect.effectType.type) == -1;
        });
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LordVO.prototype, "assignedGeneralVO", {
    get: function () {
      return this._assignedGeneralVO;
    },
    set: function (e) {
      this._assignedGeneralVO = e;
    },
    enumerable: true,
    configurable: true
  });
  return LordVO;
}();
exports.LordVO = o;
var a = require("./133.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./1.js");
var c = require("./5.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./6.js");
var h = require("./4.js");
var g = require("./484.js");
var C = require("./2353.js");
var _ = require("./2354.js");
var m = require("./127.js");
var f = require("./928.js");
var O = require("./934.js");