Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1314.js");
var o = function () {
  function CastleGemEffectTextComposer() {}
  CastleGemEffectTextComposer.composeFromGemIDList = function (e, t) {
    var i = [];
    if (e != null) {
      for (var n = 0, o = e; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined) {
          i.push(s.CastleModel.gemData.getGemVO(a));
        }
      }
    }
    return CastleGemEffectTextComposer.composeTriggeredEffectsText(i, t);
  };
  CastleGemEffectTextComposer.composeTriggeredEffectsText = function (e, t) {
    var i;
    var o = "";
    var a = new Map();
    for (var s = 0, r = e; s < r.length; s++) {
      for (var l = 0, c = r[s].boni; l < c.length; l++) {
        var u = c[l];
        if (u !== undefined) {
          CastleGemEffectTextComposer.multiFoldEffects(u, a);
        }
      }
    }
    var d = [];
    for (var p = 0, h = e; p < h.length; p++) {
      for (var g = 0, C = h[p].boni; g < C.length; g++) {
        var _ = C[g];
        if (_ !== undefined && d.indexOf(_.effect.name) == -1) {
          if (_.triggerChance == 100) {
            i = CastleGemEffectTextComposer.foldEffectValues(a.get(_.effect.name));
            var m = new n.GemBonusVO().parseGemBonusFromValueArray(_.effect, i.rawValues);
            if (CastleGemEffectTextComposer.isFilterStrategyPVE(t) && _.effect.isPvPFight) {
              continue;
            }
            if (!CastleGemEffectTextComposer.isFilterStrategyPVE(t) && _.effect.isPvEFight) {
              continue;
            }
            o += m.triggeredEffectText + "\n";
            d.push(_.effect.name);
          } else {
            o += _.triggeredEffectText + "\n";
          }
        }
      }
    }
    return o;
  };
  CastleGemEffectTextComposer.isFilterStrategyPVE = function (e) {
    return e == a.LordEffectHelper.STRATEGY_DEFENCE_PVE || e == a.LordEffectHelper.STRATEGY_ATTACK_PVE;
  };
  CastleGemEffectTextComposer.foldEffectValues = function (e) {
    var t;
    for (var i = 0; i < e.length; i++) {
      if (t) {
        t.add(e[i].effectValue, null);
      } else {
        t = e[i].effectValue.clone();
      }
    }
    return t;
  };
  CastleGemEffectTextComposer.multiFoldEffects = function (e, t) {
    if (e.triggerChance == 100) {
      var i = [];
      if (t.get(e.effect.name) == null) {
        i = [];
        t.set(e.effect.name, i);
      } else {
        i = t.get(e.effect.name);
      }
      i.push(e);
    }
  };
  CastleGemEffectTextComposer.getGemBonusText = function (e, t = null) {
    var i = "";
    if (e) {
      i += CastleGemEffectTextComposer.composeFromGemIDList(e, t);
    }
    if (i.length > 0) {
      i = r.Localize.text("dialog_battleLogDetail_gemEffekt_tooltip") + "\n" + i;
    }
    return i;
  };
  return CastleGemEffectTextComposer;
}();
exports.CastleGemEffectTextComposer = o;
var a = require("./133.js");
var s = require("./4.js");
var r = require("./3.js");