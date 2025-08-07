Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./6.js");
var r = require("./18.js");
var l = require("./75.js");
var c = require("./4.js");
var u = require("./56.js");
var d = require("./33.js");
var p = require("./346.js");
var h = require("./214.js");
var g = require("./110.js");
var C = require("./896.js");
var _ = require("./318.js");
var m = require("./181.js");
var f = require("./1106.js");
var O = require("./250.js");
var E = require("./119.js");
var y = require("./376.js");
var b = require("./115.js");
var D = require("./838.js");
var I = require("./554.js");
var T = function () {
  function AttackDialogHelper() {}
  AttackDialogHelper.canUseSupportTools = function () {
    if (n.EnvGlobalsHandler.globals.isCrossplay) {
      return false;
    }
    var e = this.attackInfoVO.homeWorkshopLevel >= a.CombatConst.LEVELS_SUPPORT_TOOLS_HOME_AWORKSHOP[0];
    var t = this.getFilteredArray(y.CastleFightDialog.SHOP_CATEGORY_SUPPORT_TOOLS).length > 0;
    var i = b.AttackDialogController.getInstance().attackVO.supportItemContainer && b.AttackDialogController.getInstance().attackVO.supportItemContainer.sumOfItems > 0;
    return e && t || i;
  };
  AttackDialogHelper.getFilterArray_Complete = function (e) {
    return this.getFilteredArray(e);
  };
  AttackDialogHelper.getFilteredArray = function (e) {
    var t = [];
    switch (e) {
      case y.CastleFightDialog.SHOP_CATEGORY_UNITS_ATT:
        t = this.attackInfoVO.unitInventory.getOffensiveSoldiers(this.attackInfoVO.isOccupyConquerAttack);
        break;
      case y.CastleFightDialog.SHOP_CATEGORY_UNITS_DEF:
        t = this.attackInfoVO.unitInventory.getDefensiveSoldiers(false);
        break;
      case y.CastleFightDialog.SHOP_CATEGORY_UNITS:
        t = this.attackInfoVO.unitInventory.getOffensiveSoldiers(this.attackInfoVO.isOccupyConquerAttack);
        for (var i = 0, n = this.attackInfoVO.unitInventory.getDefensiveSoldiers(false); i < n.length; i++) {
          var o = n[i];
          if (!(t.indexOf(o) > -1)) {
            t.push(o);
          }
        }
        break;
      case y.CastleFightDialog.SHOP_CATEGORY_TOOLS:
        t = this.getToolsList(function (e) {
          return !e.isOffenseSupportTool;
        });
        break;
      case y.CastleFightDialog.SHOP_CATEGORY_SUPPORT_TOOLS:
        t = this.getToolsList(function (e) {
          return e.isOffenseSupportTool;
        });
        break;
      case AttackDialogHelper.CUSTOM_CATEGORY_ATTACK_TOOLS:
        t = this.getToolsList(function (e) {
          var t = true;
          if (b.AttackDialogController.getInstance().isWaveDetailView) {
            t = b.AttackDialogController.getInstance().getIsWaveSelectedForAutoFill(I.AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut.CONST_WAVE_NAME) == e.isSupportTool;
          }
          return !e.isBoosterTool && t;
        });
        break;
      case AttackDialogHelper.CUSTOM_CATEGORY_BOOSTER_TOOLS:
        t = this.getToolsList(function (e) {
          return e.isBoosterTool;
        });
    }
    t.sort(l.ClientConstSort.sortByUnitSortOrder);
    return t;
  };
  AttackDialogHelper.getToolsList = function (e) {
    var t;
    var i;
    var n = this.getAttackUnits();
    var a = s.int(o.instanceOfClass(this.attackInfoVO, "CastleTreasureHuntFightscreenVO") ? this.attackInfoVO.treasureMapVO.mapID : this.attackInfoVO.targetArea.kingdomID);
    var r = [];
    for (var l = 0, c = n; l < c.length; l++) {
      t = c[l];
      if (o.instanceOfClass(t, "ToolUnitVO")) {
        i = t;
        if (O.AttackHelper.canUseToolForAttackOnTarget(this.attackInfoVO.targetArea, i, a) && e(i)) {
          r.push(i);
        }
      }
    }
    return n = r;
  };
  AttackDialogHelper.getAttackUnits = function () {
    var e = new Map();
    var t = [];
    var i = c.CastleModel.permanentCastleData.getUnitBaseLocation(this.attackInfoVO.sourceArea);
    if (i) {
      var n = i.unitsVO.getFightscreenToolsByUnitType(r.ClientConstCastle.UNIT_TYPE_TOOL_ATTACK);
      if (n != null) {
        for (var a = 0, s = n; a < s.length; a++) {
          var l = s[a];
          if (l !== undefined) {
            var d = i.unitsVO.getAssociatedEventPackage(l.wodId);
            if ((o.instanceOfClass(l, "EventtoolUnitVO") || o.instanceOfClass(l, "WorkshopUnitVO") || o.instanceOfClass(l, "ElitetoolUnitVO")) && (l.costC2 > 0 || d && d.basicPriceC2 > 0)) {
              var p = c.CastleModel.wodData.createVObyWOD(l.wodId, u.CastleWodData.TYPE_UNIT);
              e.set(p.wodId, p);
            }
          }
        }
      }
    }
    var h = this.attackInfoVO.unitInventory.getUnitsByType(r.ClientConstCastle.UNIT_TYPE_TOOL_ATTACK);
    if (h != null) {
      for (var g = 0, C = h; g < C.length; g++) {
        var _ = C[g];
        if (_ !== undefined) {
          var m = o.castAs(this.getUnitWodInArray(_.wodId, t), "ToolUnitVO");
          if (m) {
            m.inventoryAmount = this.attackInfoVO.unitInventory.getUnitCountByWodId(_.wodId);
          } else {
            e.set(_.wodId, _);
          }
        }
      }
    }
    e.forEach(function (e, i) {
      t.push(e);
    });
    return t;
  };
  AttackDialogHelper.getUnitWodInArray = function (e, t) {
    if (t != null) {
      for (var i = 0, n = t; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && o.wodId == e) {
          return o;
        }
      }
    }
    return null;
  };
  AttackDialogHelper.getPossibleSlots = function (e) {
    var t = Number.MAX_VALUE;
    var i = [];
    var n = [];
    for (var o = 0; o < b.AttackDialogController.getInstance().selectedWaveInfoSlotContainer.items.length; o++) {
      var a = b.AttackDialogController.getInstance().selectedWaveInfoSlotContainer.items[o];
      if (e.isToolForSlotType(a.slotType) && a.isUnlocked()) {
        if (a.isFree() || a.getWodId() == e.wodId) {
          n.push(a);
        } else {
          var r = false;
          var l = s.int(b.AttackDialogController.getInstance().selectedWaveInfoSlotContainer.getTotalAmountOfUntit(a.unitVO));
          var c = 0;
          for (var u = 0; u < i.length; u++) {
            var d = i[u];
            if (a.getWodId() == d.getWodId() && l <= ++c * t) {
              r = true;
              c = 0;
              break;
            }
          }
          if (r) {
            n.push(a);
          }
          i.push(a);
        }
      }
    }
    return n;
  };
  AttackDialogHelper.calculateToolsInfo = function (e, t = 0, i = 0, n = 0, s = true, r = false, l = false, u = false) {
    var p;
    var m = this.attackInfoVO.spyInfo.defendingLord;
    var f = this.attackInfoVO.spyInfo.defenderSkills;
    var O = new Map();
    var y = [];
    var D = true;
    var I = true;
    var T = t * 0.01;
    var v = 0;
    var S = i * 0.01;
    var A = 0;
    var L = n * 0.01;
    if (e != null) {
      for (var P = 0, M = e; P < M.length; P++) {
        var R = M[P];
        if (R !== undefined) {
          T += R.gateBonus;
          S += R.moatBonus;
          L += R.wallBonus;
          A += R.defRangeBonus;
          v += R.defMeleeBonus;
          var V = R.getBonusByEffect(_.ToolEffectType.DEFENSE_BONUS);
          A += V;
          v += V;
          if (u) {
            var x = R.getBonusByEffect(_.ToolEffectType.DEFENSE_BOOST_YARD);
            A += x;
            v += x;
          }
        }
      }
    }
    if (m) {
      if (this.attackInfoVO) {
        L += g.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(m, d.EffectTypeEnum.EFFECT_TYPE_WALL_BONUS, this.attackInfoVO.targetArea.areaType).strength / 100;
        T += g.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(m, d.EffectTypeEnum.EFFECT_TYPE_GATE_BONUS, this.attackInfoVO.targetArea.areaType).strength / 100;
        S += g.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(m, d.EffectTypeEnum.EFFECT_TYPE_MOAT_BONUS, this.attackInfoVO.targetArea.areaType).strength / 100;
      }
      var w = g.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(m, d.EffectTypeEnum.EFFECT_TYPE_MELEE_BONUS, this.attackInfoVO.targetArea.areaType).strength;
      var B = g.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(m, d.EffectTypeEnum.EFFECT_TYPE_RANGE_BONUS, this.attackInfoVO.targetArea.areaType).strength;
      var F = g.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(m, d.EffectTypeEnum.EFFECT_TYPE_DEFENSE_BONUS, this.attackInfoVO.targetArea.areaType).strength;
      v += (w + F) / 100;
      A += (B + F) / 100;
      if (w > 0) {
        D = true;
      }
      if (B > 0) {
        I = true;
      }
    }
    if (f && f.length > 0) {
      if (f != null) {
        for (var N = 0, k = f; N < k.length; N++) {
          var U = k[N];
          if (U !== undefined) {
            p = c.CastleModel.legendSkillData.getSkillByID(U);
            O.get(p.effectType);
            O.set(p.effectType, p.totalEffectValue / 100);
          }
        }
      }
      if (this.attackInfoVO) {
        L += O.get(h.CastleLegendSkillEffectsEnum.WALL_BONUS) ? O.get(h.CastleLegendSkillEffectsEnum.WALL_BONUS) : 0;
        T += O.get(h.CastleLegendSkillEffectsEnum.GATE_BONUS) ? O.get(h.CastleLegendSkillEffectsEnum.GATE_BONUS) : 0;
        S += O.get(h.CastleLegendSkillEffectsEnum.MOAT_BONUS) ? O.get(h.CastleLegendSkillEffectsEnum.MOAT_BONUS) : 0;
      }
      v += O.get(h.CastleLegendSkillEffectsEnum.DEFENSE_MELEE_BONUS) ? O.get(h.CastleLegendSkillEffectsEnum.DEFENSE_MELEE_BONUS) : 0;
      A += O.get(h.CastleLegendSkillEffectsEnum.DEFENSE_RANGE_BONUS) ? O.get(h.CastleLegendSkillEffectsEnum.DEFENSE_RANGE_BONUS) : 0;
      v += O.get(h.CastleLegendSkillEffectsEnum.DEFENSE_BONUS) ? O.get(h.CastleLegendSkillEffectsEnum.DEFENSE_BONUS) : 0;
      A += O.get(h.CastleLegendSkillEffectsEnum.DEFENSE_BONUS) ? O.get(h.CastleLegendSkillEffectsEnum.DEFENSE_BONUS) : 0;
      if (O.get(h.CastleLegendSkillEffectsEnum.DEFENSE_MELEE_BONUS) > 0) {
        D = true;
      }
      if (O.get(h.CastleLegendSkillEffectsEnum.DEFENSE_RANGE_BONUS) > 0) {
        I = true;
      }
    }
    if (this.attackInfoVO && this.attackInfoVO.targetOwnerLevel >= a.PlayerConst.LEVEL_CAP && (!E.PlayerHelper.isNPCPlayer(this.attackInfoVO.targetOwner.playerID) || E.PlayerHelper.isNpcPvpPlayer(this.attackInfoVO.targetOwner.playerID))) {
      if (!o.instanceOfClass(this.attackInfoVO, "CastleSupportDefenceVO")) {
        L -= c.CastleModel.legendSkillData.getTotalValueOfLegendSkillEffect(h.CastleLegendSkillEffectsEnum.WALL_REDUCTION) / 100;
        T -= c.CastleModel.legendSkillData.getTotalValueOfLegendSkillEffect(h.CastleLegendSkillEffectsEnum.GATE_REDUCTION) / 100;
        S -= c.CastleModel.legendSkillData.getTotalValueOfLegendSkillEffect(h.CastleLegendSkillEffectsEnum.MOAT_REDUCTION) / 100;
      }
    }
    var G = b.AttackDialogController.getInstance().selectedLord;
    if (G && !l) {
      m = G;
      T = Math.max(T - g.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(m, d.EffectTypeEnum.EFFECT_TYPE_GATE_REDUCTION, this.attackInfoVO.targetArea.areaType).strength / 100, 0);
      S = Math.max(S - g.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(m, d.EffectTypeEnum.EFFECT_TYPE_MOAT_REDUCTION, this.attackInfoVO.targetArea.areaType).strength / 100, 0);
      L = Math.max(L - g.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(m, d.EffectTypeEnum.EFFECT_TYPE_WALL_REDUCTION, this.attackInfoVO.targetArea.areaType).strength / 100, 0);
    }
    if (s && (S > 0 || this.attackInfoVO.targetArea.baseMoatBonus > 0)) {
      y.push(new C.EffectIconUnitVO(_.ToolEffectType.MOAT_BONUS, Math.round(Math.max(S * 100))));
    }
    if (r && t >= 0) {
      y.push(new C.EffectIconUnitVO(_.ToolEffectType.GATE_BONUS, Math.round(T * 100)));
    }
    if (s) {
      y.push(new C.EffectIconUnitVO(_.ToolEffectType.WALL_BONUS, Math.round(L * 100)));
    }
    if (D) {
      y.push(new C.EffectIconUnitVO(_.ToolEffectType.DEF_MELEE_BONUS, Math.round(v * 100 + 100)));
    }
    if (I) {
      y.push(new C.EffectIconUnitVO(_.ToolEffectType.DEF_RANGE_BONUS, Math.round(A * 100 + 100)));
    }
    return y;
  };
  AttackDialogHelper.getTotalLoot = function () {
    var e = b.AttackDialogController.getInstance().selectedLord;
    var t = 0;
    for (var i = 0; i < this.attackInfoVO.army.getWaveCount(); ++i) {
      var n = this.attackInfoVO.army.getWaveByID(i);
      t += this.calcWaveLoot(n);
    }
    if (this.attackInfoVO.yardWaveContainer) {
      t += this.attackInfoVO.yardWaveContainer.getLootAmount(b.AttackDialogController.getInstance().selectedLord);
    }
    if (e) {
      t += s.int(g.CastleEffectsHelper.getTotalLordLootCapacityBonusForArea(e, this.attackInfoVO.targetArea.areaType, this.isLegendaryFight));
    }
    var o = 0;
    o += s.int(g.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(e, d.EffectTypeEnum.EFFECT_TYPE_LOOT_BONUS, this.attackInfoVO.targetArea.areaType).strength);
    o += s.int(g.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(e, d.EffectTypeEnum.EFFECT_TYPE_LOOT_CAPACITY_BOOST, this.attackInfoVO.targetArea.areaType).strength);
    return t += t * (Math.floor(o) / 100);
  };
  AttackDialogHelper.calcWaveLoot = function (e) {
    var t = 0;
    var i = b.AttackDialogController.getInstance().selectedLord;
    t += s.int(e.itemsLeftWall_units.getLootAmount(i));
    t += s.int(e.itemsMiddleWall_units.getLootAmount(i));
    t += s.int(e.itemsRightWall_units.getLootAmount(i));
    t += s.int(e.itemsLeftWall_tools.getLootAmount(i));
    t += s.int(e.itemsMiddleWall_tools.getLootAmount(i));
    return t += s.int(e.itemsRightWall_tools.getLootAmount(i));
  };
  Object.defineProperty(AttackDialogHelper, "isLegendaryFight", {
    get: function () {
      if (!E.PlayerHelper.isNPCPlayer(this.attackInfoVO.targetArea.ownerInfo.playerID) || E.PlayerHelper.isNpcPvpPlayer(this.attackInfoVO.targetArea.ownerInfo.playerID)) {
        var e = false;
        e = o.instanceOfClass(this.attackInfoVO.targetArea, "AAlienInvasionMapobjectVO") ? this.attackInfoVO.targetOwnerLevel >= a.PlayerConst.LEVEL_CAP : this.attackInfoVO.targetArea.ownerInfo.isLegend;
        var t = c.CastleModel.userData.isLegend && e;
        var i = f.MapObjectHelper.isLandmark(this.attackInfoVO.targetArea);
        if (t || i) {
          return true;
        }
      }
      return false;
    },
    enumerable: true,
    configurable: true
  });
  AttackDialogHelper.getSelectedWavesString = function (e = false) {
    var t = [];
    for (var i = 0; i < this.attackInfoVO.army.getWaveCount(); i++) {
      if (b.AttackDialogController.getInstance().getIsWaveSelectedForAutoFill(i)) {
        t.push(i + 1);
      }
    }
    if (!e && b.AttackDialogController.getInstance().getIsWaveSelectedForAutoFill(D.AttackDialogWaveHandlerFinalYardWaveInfoItem.CONST_WAVE_NAME)) {
      t.push("RW");
    }
    return t.toString();
  };
  AttackDialogHelper.getSelectedFlanksString = function (e = false) {
    var t = [];
    if (e || b.AttackDialogController.getInstance().getIsWaveSelectedForAutoFill(b.AttackDialogController.AUTOFILL_SELECTION_POSITION_LEFT)) {
      t.push("left");
    }
    if (e || b.AttackDialogController.getInstance().getIsWaveSelectedForAutoFill(b.AttackDialogController.AUTOFILL_SELECTION_POSITION_MIDDLE)) {
      t.push("center");
    }
    if (e || b.AttackDialogController.getInstance().getIsWaveSelectedForAutoFill(b.AttackDialogController.AUTOFILL_SELECTION_POSITION_RIGHT)) {
      t.push("right");
    }
    return t.toString();
  };
  AttackDialogHelper.changeUnitItemAmount = function (e, t, i, n) {
    var o = 0;
    if (i.unitVO) {
      if (!i.isSameType(t)) {
        this.changeUnitItemAmount(e, i.unitVO, i, 0);
        this.changeUnitItemAmount(e, t, i, n);
        return;
      }
      if (n != i.unitVO.inventoryAmount) {
        o = s.int(i.unitVO.inventoryAmount - n);
      }
    } else {
      o = -n;
      i.unitVO = c.CastleModel.wodData.createVObyWOD(t.wodId, u.CastleWodData.TYPE_UNIT);
    }
    if (n == 0) {
      i.unitVO = null;
    } else {
      i.unitVO.inventoryAmount = n;
    }
    i.outline = s.int(p.CastleFightItemVO.OUTLINE_NONE);
    e.changeUnitAmount(t.wodId, o);
    if (t instanceof m.ToolUnitVO && t.getBonusByEffect(_.ToolEffectType.ADDITIONAL_WAVE) > 0) {
      b.AttackDialogController.getInstance().onLordChanged.dispatch();
    }
    b.AttackDialogController.getInstance().updateAllWaveInfo.dispatch();
  };
  Object.defineProperty(AttackDialogHelper, "attackInfoVO", {
    get: function () {
      return b.AttackDialogController.getInstance().attackVO;
    },
    enumerable: true,
    configurable: true
  });
  AttackDialogHelper.CUSTOM_CATEGORY_ATTACK_TOOLS = 1001;
  AttackDialogHelper.CUSTOM_CATEGORY_BOOSTER_TOOLS = 1002;
  return AttackDialogHelper;
}();
exports.AttackDialogHelper = T;
o.classImplementsInterfaces(T, "ICollectableRendererList");