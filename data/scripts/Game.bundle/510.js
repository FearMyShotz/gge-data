Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function FightScreenHelper() {}
  FightScreenHelper.getDefenderEffectVO = function (e) {
    var t = new m.DefenderEffectVO(e.targetArea);
    t.addDefenderFlankEffects(FightScreenHelper.getDefenderFlankEffectVO(e, l.ClientConstCastle.FLANK_LEFT), l.ClientConstCastle.FLANK_LEFT);
    t.addDefenderFlankEffects(FightScreenHelper.getDefenderFlankEffectVO(e, l.ClientConstCastle.FLANK_MIDDLE), l.ClientConstCastle.FLANK_MIDDLE);
    t.addDefenderFlankEffects(FightScreenHelper.getDefenderFlankEffectVO(e, l.ClientConstCastle.FLANK_RIGHT), l.ClientConstCastle.FLANK_RIGHT);
    t.addDefenderFlankEffects(FightScreenHelper.getDefenderFlankEffectVO(e, l.ClientConstCastle.FLANK_YARD), l.ClientConstCastle.FLANK_YARD);
    return t;
  };
  FightScreenHelper.getDefenderFlankEffectVO = function (e, t) {
    var i = FightScreenHelper.getDefendingUnitStrength(e, t);
    var n = FightScreenHelper.getDefenceBonuses(e, t);
    return new f.DefenderFlankEffectVO(i[0], i[1], i[2], i[3], i[4], i[5], n[0], n[1], n[2]);
  };
  FightScreenHelper.getDefendingUnitStrength = function (e, t) {
    var i = 0;
    var n = 0;
    var o = 0;
    var u = 0;
    var d = 1;
    var h = 1;
    var C = e.spyInfo;
    if (C) {
      var _;
      switch (t) {
        case l.ClientConstCastle.FLANK_LEFT:
          _ = C.itemsLeft ? C.itemsLeft.getUnits(null) : null;
          break;
        case l.ClientConstCastle.FLANK_MIDDLE:
          _ = C.itemsMiddle ? C.itemsMiddle.getUnits(null) : null;
          break;
        case l.ClientConstCastle.FLANK_RIGHT:
          _ = C.itemsRight ? C.itemsRight.getUnits(null) : null;
          break;
        case l.ClientConstCastle.FLANK_YARD:
          _ = C.itemsKeep ? C.itemsKeep.getUnits(null) : null;
          break;
        default:
          _ = C.itemsKeep ? C.itemsKeep.getUnits(null) : null;
      }
      if (C.itemsSupport) {
        _ = _ ? _.concat(C.itemsSupport.getUnits(null)) : C.itemsSupport.getUnits(null);
      }
      if (_) {
        for (var m = 0; m < _.length; m++) {
          if (c.instanceOfClass(_[m], "SoldierUnitVO")) {
            var f = _[m];
            if (f.role == a.SoldierUnitVO.ROLE_MELEE) {
              i += f.meleeDefence * f.inventoryAmount;
              n += f.rangeDefence * f.inventoryAmount;
            } else {
              o += f.meleeDefence * f.inventoryAmount;
              u += f.rangeDefence * f.inventoryAmount;
            }
          } else if (c.instanceOfClass(_[m], "ToolUnitVO")) {
            var O = _[m];
            d += O.defMeleeBonus;
            h += O.defRangeBonus;
            var E = O.getBonusByEffect(s.ToolEffectType.DEFENSE_BONUS);
            d += E;
            h += E;
          }
        }
      }
      var y = C.defendingLord;
      if (y) {
        d += r.CastleEffectsHelper.getFullDefenseBonusForLordByFlankAndAreaType(y, e.targetArea.areaType, t, true);
        h += r.CastleEffectsHelper.getFullDefenseBonusForLordByFlankAndAreaType(y, e.targetArea.areaType, t, false);
      }
      var b = C.defenderSkills;
      if (b != null) {
        for (var D = 0, I = b; D < I.length; D++) {
          var T = I[D];
          if (T !== undefined) {
            var v = p.CastleModel.legendSkillData.getSkillByID(T);
            if (v.effectType == g.CastleLegendSkillEffectsEnum.DEFENSE_MELEE_BONUS) {
              d += v.totalEffectValue / 100;
            } else if (v.effectType == g.CastleLegendSkillEffectsEnum.DEFENSE_RANGE_BONUS) {
              h += v.totalEffectValue / 100;
            }
          }
        }
      }
    }
    return [i, n, d, o, u, h];
  };
  FightScreenHelper.getDefenceBonuses = function (e, t) {
    var i = Math.max(e.baseWallBonus, e.targetArea.baseWallBonus) / 100;
    var n = Math.max(e.baseGateBonus, e.targetArea.baseGateBonus) / 100;
    var o = Math.max(e.baseMoatBonus, e.targetArea.baseMoatBonus) / 100;
    var a = e.spyInfo;
    if (a) {
      var s;
      switch (t) {
        case l.ClientConstCastle.FLANK_LEFT:
          s = a.itemsLeft ? a.itemsLeft.getUnits(null) : null;
          break;
        case l.ClientConstCastle.FLANK_MIDDLE:
          s = a.itemsMiddle ? a.itemsMiddle.getUnits(null) : null;
          break;
        case l.ClientConstCastle.FLANK_RIGHT:
          s = a.itemsRight ? a.itemsRight.getUnits(null) : null;
          break;
        default:
          s = a.itemsKeep ? a.itemsKeep.getUnits(null) : null;
      }
      if (a.itemsSupport) {
        s = s ? s.concat(a.itemsSupport.getUnits(null)) : a.itemsSupport.getUnits(null);
      }
      if (s) {
        for (var u = 0; u < s.length; u++) {
          if (c.instanceOfClass(s[u], "ToolUnitVO")) {
            var d = s[u];
            i += d.wallBonus;
            n += d.gateBonus;
            o += d.moatBonus;
          }
        }
      }
      var C = a.defendingLord;
      if (C) {
        i += r.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(C, h.EffectTypeEnum.EFFECT_TYPE_WALL_BONUS, e.targetArea.areaType).strength / 100;
        n += r.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(C, h.EffectTypeEnum.EFFECT_TYPE_GATE_BONUS, e.targetArea.areaType).strength / 100;
        o += r.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(C, h.EffectTypeEnum.EFFECT_TYPE_MOAT_BONUS, e.targetArea.areaType).strength / 100;
      }
      var _ = a.defenderSkills;
      if (_ != null) {
        for (var m = 0, f = _; m < f.length; m++) {
          var O = f[m];
          if (O !== undefined) {
            var E = p.CastleModel.legendSkillData.getSkillByID(O);
            switch (E.effectType) {
              case g.CastleLegendSkillEffectsEnum.WALL_BONUS:
                i += E.totalEffectValue / 100;
                break;
              case g.CastleLegendSkillEffectsEnum.GATE_BONUS:
                n += E.totalEffectValue / 100;
                break;
              case g.CastleLegendSkillEffectsEnum.MOAT_BONUS:
                o += E.totalEffectValue / 100;
            }
          }
        }
      }
    }
    if (t != l.ClientConstCastle.FLANK_MIDDLE) {
      n = 0;
    }
    return [i, n, o];
  };
  FightScreenHelper.getAttackerEffectVO = function (e, t, i, n) {
    var o = new C.AttackerEffectVO();
    o.addAttackerFlankEffects(FightScreenHelper.getAttackerFlankEffectVO(e, t, i, l.ClientConstCastle.FLANK_LEFT, n), l.ClientConstCastle.FLANK_LEFT);
    o.addAttackerFlankEffects(FightScreenHelper.getAttackerFlankEffectVO(e, t, i, l.ClientConstCastle.FLANK_MIDDLE, n), l.ClientConstCastle.FLANK_MIDDLE);
    o.addAttackerFlankEffects(FightScreenHelper.getAttackerFlankEffectVO(e, t, i, l.ClientConstCastle.FLANK_RIGHT, n), l.ClientConstCastle.FLANK_RIGHT);
    return o;
  };
  FightScreenHelper.getAttackerFlankEffectVO = function (e, t, i, n, o) {
    var a;
    var c = 1;
    var u = 1;
    var d = 0;
    var C = 0;
    var m = 0;
    var f = 0;
    if (t) {
      d += r.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(t, h.EffectTypeEnum.EFFECT_TYPE_WALL_REDUCTION, e.target.areaType).strength / 100;
      C += r.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(t, h.EffectTypeEnum.EFFECT_TYPE_GATE_REDUCTION, e.target.areaType).strength / 100;
      m += r.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(t, h.EffectTypeEnum.EFFECT_TYPE_MOAT_REDUCTION, e.target.areaType).strength / 100;
      c += r.CastleEffectsHelper.getFullAttackBonusForLordByFlankAndAreaType(t, e.target.areaType, n, true);
      u += r.CastleEffectsHelper.getFullAttackBonusForLordByFlankAndAreaType(t, e.target.areaType, n, false);
    }
    if (i) {
      d += p.CastleModel.legendSkillData.getTotalValueOfLegendSkillEffect(g.CastleLegendSkillEffectsEnum.WALL_REDUCTION) / 100;
      C += p.CastleModel.legendSkillData.getTotalValueOfLegendSkillEffect(g.CastleLegendSkillEffectsEnum.GATE_REDUCTION) / 100;
      m += p.CastleModel.legendSkillData.getTotalValueOfLegendSkillEffect(g.CastleLegendSkillEffectsEnum.MOAT_REDUCTION) / 100;
      c += p.CastleModel.legendSkillData.getTotalValueOfLegendSkillEffect(g.CastleLegendSkillEffectsEnum.ATTACK_MELEE_BONUS) / 100;
      u += p.CastleModel.legendSkillData.getTotalValueOfLegendSkillEffect(g.CastleLegendSkillEffectsEnum.ATTACK_RANGE_BONUS) / 100;
    }
    switch (n) {
      case l.ClientConstCastle.FLANK_LEFT:
        a = e.itemsLeftWall_tools.items;
        break;
      case l.ClientConstCastle.FLANK_MIDDLE:
        a = e.itemsMiddleWall_tools.items;
        break;
      case l.ClientConstCastle.FLANK_RIGHT:
        a = e.itemsRightWall_tools.items;
    }
    if (o.supportItemContainer) {
      a = a.concat(o.supportItemContainer.items);
    }
    if (a) {
      for (var O = 0; O < a.length; O++) {
        var E = a[O].unitVO;
        if (E) {
          d += E.wallBonus * E.inventoryAmount;
          C += E.gateBonus * E.inventoryAmount;
          m += E.moatBonus * E.inventoryAmount;
          f += E.defRangeBonus * E.inventoryAmount;
          u += E.offRangeBonus * E.inventoryAmount;
          c += E.offMeleeBonus * E.inventoryAmount;
          var y = E.getBonusByEffect(s.ToolEffectType.ATTACK_BONUS);
          u += y * E.inventoryAmount;
          c += y * E.inventoryAmount;
        }
      }
    }
    return new _.AttackerFlankEffectVO(c, u, d, C, m, f);
  };
  FightScreenHelper.initInstantBuyButton = function (e, t, i) {
    u.ButtonHelper.initButton(e, 1, o.ClickFeedbackButtonHover);
    var n = p.CastleModel.permanentCastleData.getUnitBaseLocation(i);
    var a = n ? t.getInstantBuyInfoByUnitsVO(n.unitsVO) : new d.InstantBuyInfoVO();
    e.visible = a.isVisible;
    u.ButtonHelper.enableButton(e, a.isEnabled);
    e.toolTipText = a.toolTip;
  };
  FightScreenHelper.getSlotsFromLevels = function (e, t) {
    var i = 0;
    if (t != null) {
      for (var n = 0, o = t; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined && a <= e) {
          i++;
        }
      }
    }
    return i;
  };
  return FightScreenHelper;
}();
exports.FightScreenHelper = n;
var o = require("./20.js");
var a = require("./347.js");
var s = require("./318.js");
var r = require("./110.js");
var l = require("./18.js");
var c = require("./1.js");
var u = require("./8.js");
var d = require("./589.js");
var p = require("./4.js");
var h = require("./33.js");
var g = require("./214.js");
var C = require("./2148.js");
var _ = require("./1239.js");
var m = require("./2149.js");
var f = require("./2150.js");