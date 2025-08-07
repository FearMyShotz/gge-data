Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./5.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./18.js");
var c = require("./106.js");
var u = require("./112.js");
var d = require("./318.js");
var p = require("./181.js");
var h = require("./4.js");
var g = require("./35.js");
var C = require("./346.js");
var _ = function () {
  function CastleFightItemContainer(e, t, i, n = r.int(Number.MAX_VALUE), o = null, a = null) {
    this.unlockLevel = 0;
    this._maxItems = 0;
    this._highlighted = false;
    this._itemTypes = e;
    this._itemLevel = t;
    this._maxItems = n;
    this._items = [];
    this._serverItems = [];
    this.requiredIDs = a;
    this.unlockLevel = i;
    this.additionalItemTypes = o;
    this.addItemstoList(true, true);
    this.addItemstoList(false);
  }
  CastleFightItemContainer.prototype.addItemstoList = function (e, t = false) {
    var i;
    var n = 0;
    for (n = 0; n < this._itemTypes.length; n++) {
      (i = new C.CastleFightItemVO()).slotType = r.int(this._itemTypes[n]);
      i.itemLevel = r.int(this._itemLevel[n]);
      i.unlockLevel = this.unlockLevel;
      if (t) {
        this._serverItems.push(i);
      }
      if (i.isUnlocked() == e) {
        this._items.push(i);
      }
    }
    if (this.additionalItemTypes && this.requiredIDs) {
      for (n = 0; n < this.additionalItemTypes.length; n++) {
        (i = new C.CastleFightItemVO()).slotType = r.int(this.additionalItemTypes[n]);
        i.unlockSkillID = r.int(this.requiredIDs[n]);
        if (t) {
          this._serverItems.push(i);
        }
        if (i.isUnlocked() == e) {
          this._items.push(i);
        }
      }
    }
  };
  CastleFightItemContainer.prototype.fillFromParamArray = function (e) {
    this.clearAll();
    for (var t = 0; t < e.length; t++) {
      var i = e[t];
      var n = r.int(i.shift());
      var o = r.int(i.shift());
      if (n != -1) {
        this.addToItems(n, o, t);
      }
    }
  };
  CastleFightItemContainer.prototype.clearAll = function () {
    for (var e = 0; e < this._items.length; e++) {
      this._items[e].unitVO = null;
    }
  };
  CastleFightItemContainer.prototype.addToItems = function (e, t, i = -1) {
    var n = h.CastleModel.wodData.createVObyWOD(e, f.CastleWodData.TYPE_UNIT);
    for (var o = 0; o < this._items.length; o++) {
      var a = this._items[o];
      if (!a.unitVO && n.isToolForSlotType(a.slotType) && (o == i || i == -1)) {
        a.unitVO = n;
        a.unitVO.inventoryAmount = t;
        a.outline = r.int(C.CastleFightItemVO.OUTLINE_NONE);
        break;
      }
    }
  };
  Object.defineProperty(CastleFightItemContainer.prototype, "items", {
    get: function () {
      return this._items;
    },
    enumerable: true,
    configurable: true
  });
  CastleFightItemContainer.prototype.getSlotList = function (e = false) {
    var t = [];
    for (var i = e ? this._serverItems : this._items, n = 0; n < i.length; n++) {
      var o = i[n];
      t.push([o.getWodId(), o.getAmount()]);
    }
    return t;
  };
  Object.defineProperty(CastleFightItemContainer.prototype, "sumOfItems", {
    get: function () {
      var e = 0;
      for (var t = 0; t < this._items.length; t++) {
        e += this._items[t].getAmount();
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  CastleFightItemContainer.prototype.getLootAmount = function (e = null) {
    var t;
    var i = 0;
    for (var n = 0; n < this._items.length; n++) {
      if ((t = this._items[n]).unitVO) {
        var o = 1 + (e ? e.getEffectValue(g.EffectTypeEnum.EFFECT_TYPE_LOOT_VALUE_BOOST_UNIT, -1, -1, t.unitVO.wodId) / 100 : 0);
        i += r.int(t.unitVO.lootValue * o * t.unitVO.inventoryAmount);
      }
    }
    return i;
  };
  CastleFightItemContainer.prototype.getFoodConsumption = function () {
    var e = 0;
    for (var t = 0; t < this._items.length; ++t) {
      var i = this._items[t];
      if (i && i.unitVO) {
        e += r.int(i.unitVO.foodSupply * i.unitVO.inventoryAmount);
      }
    }
    return e;
  };
  CastleFightItemContainer.prototype.getMeadConsumption = function () {
    var e = 0;
    for (var t = 0; t < this._items.length; ++t) {
      var i = this._items[t];
      if (i && i.unitVO) {
        e += r.int(i.unitVO.meadSupply * i.unitVO.inventoryAmount);
      }
    }
    return e;
  };
  CastleFightItemContainer.prototype.getBeefConsumption = function () {
    var e = 0;
    for (var t = 0; t < this._items.length; ++t) {
      var i = this._items[t];
      if (i && i.unitVO) {
        e += r.int(i.unitVO.beefSupply * i.unitVO.inventoryAmount);
      }
    }
    return e;
  };
  CastleFightItemContainer.prototype.getAttackRangeValue = function (e = null, t = null, i = false, o = false, a = false) {
    var s;
    var r;
    var l;
    var d;
    var p;
    var C = 0;
    var _ = function () {
      s = m._items[f];
      if (n.instanceOfClass(s.unitVO, "SoldierUnitVO")) {
        r = s.unitVO;
        l = e ? e.getEffectValue(g.EffectTypeEnum.EFFECT_TYPE_ATTACK_BONUS_UNIT, -1, -1, r.wodId) : 0;
        var _ = 0;
        var O = undefined;
        var E = 0;
        O = e ? e.getUniqueBoni(false, g.EffectTypeEnum.EFFECT_TYPE_OFFENSIVE_RANGE_BONUS, -1, null, true) : null;
        E = 0;
        if (O) {
          O.forEach(function (e) {
            E += e.strength;
          });
        }
        _ += E;
        if (i) {
          O = e ? e.getUniqueBoni(false, g.EffectTypeEnum.EFFECT_TYPE_ATTACK_BOOST_YARD, -1, null, true) : null;
          E = 0;
          if (O) {
            O.forEach(function (e) {
              E += e.strength;
            });
          }
          _ += E;
        }
        if (o) {
          O = e ? e.getUniqueBoni(false, g.EffectTypeEnum.EFFECT_TYPE_ATTACK_BOOST_FLANK, -1, null, true) : null;
          E = 0;
          if (O) {
            O.forEach(function (e) {
              E += e.strength;
            });
          }
          _ += E;
        }
        if (a) {
          O = e ? e.getUniqueBoni(false, g.EffectTypeEnum.EFFECT_TYPE_ATTACK_BOOST_FLANK, -1, null, true) : null;
          E = 0;
          if (O) {
            O.forEach(function (e) {
              E += e.strength;
            });
          }
          _ += E;
        }
        _ = 1 + _ / 100;
        d = 0;
        p = 1;
        if (t) {
          d = h.CastleModel.officerSchoolData.getBonusByEffectType(g.EffectTypeEnum.EFFECT_TYPE_ATTACK_BONUS_UNIT, t.areaType, t.spaceID, r.wodId);
          p += c.CastleTitleSystemHelper.getAttackBoost(u.PlayerHelper.isNPCPlayer(t.ownerInfo.playerID), t.areaType, t.spaceID) / 100;
        }
        if (r.buffedRangeAttack > 0) {
          C += (r.buffedRangeAttack + l + d) * s.getAmount() * _ * p;
        }
      }
    };
    var m = this;
    for (var f = 0; f < this._items.length; f++) {
      _();
    }
    return C;
  };
  CastleFightItemContainer.prototype.getAttackMeleeValue = function (e = null, t = null, i = false, o = false, a = false) {
    var s;
    var r;
    var l;
    var d;
    var p;
    var C = 0;
    var _ = function () {
      s = m._items[f];
      if (n.instanceOfClass(s.unitVO, "SoldierUnitVO")) {
        r = s.unitVO;
        l = e ? e.getEffectValue(g.EffectTypeEnum.EFFECT_TYPE_ATTACK_BONUS_UNIT, -1, -1, r.wodId) : 0;
        var _ = 0;
        var O = undefined;
        var E = 0;
        O = e ? e.getUniqueBoni(false, g.EffectTypeEnum.EFFECT_TYPE_OFFENSIVE_MELEE_BONUS, -1, null, true) : null;
        E = 0;
        if (O) {
          O.forEach(function (e) {
            E += e.strength;
          });
        }
        _ += E;
        if (i) {
          O = e ? e.getUniqueBoni(false, g.EffectTypeEnum.EFFECT_TYPE_ATTACK_BOOST_YARD, -1, null, true) : null;
          E = 0;
          if (O) {
            O.forEach(function (e) {
              E += e.strength;
            });
          }
          _ += E;
        }
        if (o) {
          O = e ? e.getUniqueBoni(false, g.EffectTypeEnum.EFFECT_TYPE_ATTACK_BOOST_FLANK, -1, null, true) : null;
          E = 0;
          if (O) {
            O.forEach(function (e) {
              E += e.strength;
            });
          }
          _ += E;
        }
        if (a) {
          O = e ? e.getUniqueBoni(false, g.EffectTypeEnum.EFFECT_TYPE_ATTACK_BOOST_FRONT, -1, null, true) : null;
          E = 0;
          if (O) {
            O.forEach(function (e) {
              E += e.strength;
            });
          }
          _ += E;
        }
        _ = 1 + _ / 100;
        d = 0;
        p = 1;
        if (t) {
          d = h.CastleModel.officerSchoolData.getBonusByEffectType(g.EffectTypeEnum.EFFECT_TYPE_ATTACK_BONUS_UNIT, t.areaType, t.spaceID, r.wodId);
          p += c.CastleTitleSystemHelper.getAttackBoost(u.PlayerHelper.isNPCPlayer(t.ownerInfo.playerID), t.areaType, t.spaceID) / 100;
        }
        if (r.buffedMeleeAttack > 0) {
          C += (r.buffedMeleeAttack + l + d) * s.getAmount() * _ * p;
        }
      }
    };
    var m = this;
    for (var f = 0; f < this._items.length; f++) {
      _();
    }
    return C;
  };
  CastleFightItemContainer.prototype.getAllianceDefenceBoost = function (e) {
    var t;
    var i;
    if (h.CastleModel.userData.isUserInMyAlliance(e.controllerWorldMapOwnerInfoVO) && e.kingdomID != a.FactionConst.KINGDOM_ID && h.CastleModel.allianceData && h.CastleModel.allianceData.myAllianceVO && (t = h.CastleModel.allianceData.myAllianceVO, (i = h.CastleModel.allianceBuffData.getAllianceBuffVoBySeriesIDAndLevel(o.AllianceConst.TYPE_TEMP_DEFENSE_POWER_BOOST, t.getBoostLevel(o.AllianceConst.TYPE_TEMP_DEFENSE_POWER_BOOST)).getBonusVOByEffectType(g.EffectTypeEnum.EFFECT_TYPE_DEFENSE_BONUS)) && i.effect.isForAreaType(e.areaType))) {
      return i.strength / 100;
    } else {
      return 0;
    }
  };
  CastleFightItemContainer.prototype.getDefenceRangeValue = function (e, t) {
    var i = 0;
    var o = e ? m.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(e, g.EffectTypeEnum.EFFECT_TYPE_RANGE_BONUS, t.areaType).strength / 100 : 0;
    var a = this.getAllianceDefenceBoost(t);
    for (var s = 0; s < this._items.length; s++) {
      var l = this._items[s];
      if (n.instanceOfClass(l.unitVO, "SoldierUnitVO")) {
        var c = l.unitVO;
        i += r.int(c.rangeDefence * l.getAmount() * (1 + o) * (1 + a));
      }
    }
    return i;
  };
  CastleFightItemContainer.prototype.getDefenceMeleeValue = function (e, t) {
    var i = 0;
    var o = e ? m.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(e, g.EffectTypeEnum.EFFECT_TYPE_MELEE_BONUS, t.areaType).strength / 100 + 1 : 1;
    var a = this.getAllianceDefenceBoost(t);
    for (var s = 0; s < this._items.length; s++) {
      var l = this._items[s];
      if (n.instanceOfClass(l.unitVO, "SoldierUnitVO")) {
        var c = l.unitVO;
        i += r.int(c.meleeDefence * l.getAmount() * (o + a));
      }
    }
    return i;
  };
  CastleFightItemContainer.prototype.getAttackMeleeBonus = function () {
    var e = 0;
    for (var t = 0; t < this._items.length; t++) {
      var i = this._items[t];
      if (n.instanceOfClass(i.unitVO, "ToolUnitVO")) {
        var o = i.unitVO;
        e += o.offMeleeBonus * i.getAmount();
        e += o.getBonusByEffect(d.ToolEffectType.ATTACK_BONUS) * i.getAmount();
      }
    }
    return e;
  };
  CastleFightItemContainer.prototype.getAttackRangeBonus = function () {
    var e = 0;
    for (var t = 0; t < this._items.length; t++) {
      var i = this._items[t];
      if (n.instanceOfClass(i.unitVO, "ToolUnitVO")) {
        var o = i.unitVO;
        e += o.offRangeBonus * i.getAmount();
        e += o.getBonusByEffect(d.ToolEffectType.ATTACK_BONUS) * i.getAmount();
      }
    }
    return e;
  };
  CastleFightItemContainer.prototype.getDefenceRangeBonus = function () {
    var e = 0;
    for (var t = 0; t < this._items.length; t++) {
      var i = this._items[t];
      if (n.instanceOfClass(i.unitVO, "ToolUnitVO")) {
        e += i.unitVO.defRangeBonus * i.getAmount();
      }
    }
    return e;
  };
  CastleFightItemContainer.prototype.getDefenceMeleeBonus = function () {
    var e = 0;
    for (var t = 0; t < this._items.length; t++) {
      var i = this._items[t];
      if (n.instanceOfClass(i.unitVO, "ToolUnitVO")) {
        e += i.unitVO.defMeleeBonus * i.getAmount();
      }
    }
    return e;
  };
  CastleFightItemContainer.prototype.getAmountOfToolInContainer = function (e) {
    var t = 0;
    for (var i = 0; i < this._items.length; ++i) {
      if (this._items[i].unitVO && this._items[i].unitVO.type == e.type) {
        t += r.int(this._items[i].unitVO.inventoryAmount);
      }
    }
    return t;
  };
  CastleFightItemContainer.prototype.getLowestTravelSpeed = function (e = false, t = null) {
    var i = r.int(Number.MAX_VALUE);
    for (var n = 0; n < this._items.length; n++) {
      var o = this._items[n];
      if (o.unitVO && (!e || o.unitVO.unitCategory != l.ClientConstCastle.UNIT_CATEGORY_TOOLS)) {
        var a = t ? t.getEffectValue(g.EffectTypeEnum.EFFECT_TYPE_SPEED_BOOST_UNIT, -1, -1, o.unitVO.wodId) : 0;
        var s = Math.ceil(o.unitVO.unitSpeed * ((100 + a) / 100));
        i = r.int(Math.min(i, s));
      }
    }
    return i;
  };
  Object.defineProperty(CastleFightItemContainer.prototype, "maxItems", {
    get: function () {
      return this._maxItems;
    },
    set: function (e) {
      this._maxItems = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightItemContainer.prototype, "freeItems", {
    get: function () {
      return this._maxItems - this.sumOfItems;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightItemContainer.prototype, "isFull", {
    get: function () {
      return this.freeItems <= 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightItemContainer.prototype, "countString", {
    get: function () {
      return s.Localize.numberForArabic(this.sumOfItems) + " / " + s.Localize.numberForArabic(this.maxItems);
    },
    enumerable: true,
    configurable: true
  });
  CastleFightItemContainer.prototype.containsUnit = function (e) {
    for (var t = 0, i = this._items; t < i.length; t++) {
      if (i[t].unitVO == e) {
        return true;
      }
    }
    return false;
  };
  CastleFightItemContainer.prototype.getTotalAmountOfUntit = function (e) {
    var t;
    var i = 0;
    for (var n = 0, o = this._items; n < o.length; n++) {
      if ((t = o[n]).getWodId() == e.wodId) {
        i += t.getAmount();
      }
    }
    return i;
  };
  CastleFightItemContainer.prototype.containsUnitType = function (e) {
    if (this.items != null) {
      for (var t = 0, i = this.items; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.isSameType(e)) {
          return true;
        }
      }
    }
    return false;
  };
  CastleFightItemContainer.prototype.getFirstSlotWithUnit = function (e) {
    if (this.items != null) {
      for (var t = 0, i = this.items; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.getWodId() == e.wodId) {
          return n;
        }
      }
    }
    return null;
  };
  CastleFightItemContainer.prototype.getAllSlotsWithUnit = function (e) {
    var t = [];
    if (this.items != null) {
      for (var i = 0, n = this.items; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && o.getWodId() == e.wodId) {
          t.push(o);
        }
      }
    }
    return t;
  };
  CastleFightItemContainer.prototype.hasFreeSlotsForUnit = function (e) {
    if (this.items != null) {
      for (var t = 0, i = this.items; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.isFree() && e.isToolForSlotType(n.slotType) && n.isUnlocked() && !this.exceedsSupportToolSlotLimit(n, e)) {
          return true;
        }
      }
    }
    return false;
  };
  CastleFightItemContainer.prototype.exceedsSupportToolSlotLimit = function (e, t) {
    return (!!e.isFree() || !e.isSameType(t)) && !!(t instanceof p.ToolUnitVO) && !!t.isSupportTool && !!this.containsUnitType(t);
  };
  Object.defineProperty(CastleFightItemContainer.prototype, "highlighted", {
    get: function () {
      return this._highlighted;
    },
    set: function (e) {
      this._highlighted = e;
    },
    enumerable: true,
    configurable: true
  });
  CastleFightItemContainer.prototype.getTotalBonusByToolEffect = function (e) {
    var t = 0;
    for (var i = 0; i < this._items.length; i++) {
      var o = this._items[i];
      if (n.instanceOfClass(o.unitVO, "ToolUnitVO")) {
        var a = o.unitVO;
        if (a.isDefensive) {
          t += a.getBonusByEffect(e);
        } else {
          t += a.getBonusByEffect(e) * o.getAmount();
        }
      }
    }
    return t;
  };
  CastleFightItemContainer.prototype.exceedsLimit = function () {
    return this.freeItems < 0;
  };
  return CastleFightItemContainer;
}();
exports.CastleFightItemContainer = _;
var m = require("./111.js");
var f = require("./56.js");