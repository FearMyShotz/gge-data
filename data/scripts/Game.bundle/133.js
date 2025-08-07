Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./6.js");
var a = require("./409.js");
var s = require("./1250.js");
var r = require("./119.js");
var l = require("./2180.js");
var c = require("./2181.js");
var u = require("./2182.js");
var d = require("./2183.js");
var p = require("./2184.js");
var h = require("./2185.js");
var g = require("./2186.js");
var C = function () {
  function LordEffectHelper() {}
  LordEffectHelper.hideToolTip = function () {
    if (LordEffectHelper._lordEffectToolTip.disp) {
      LordEffectHelper._lordEffectToolTip.disp.visible = false;
    }
  };
  LordEffectHelper.showToolTip = function (e, t, i = null, n = null, o, a = true) {
    LordEffectHelper._lordEffectToolTip.init(e, t, i, n, o, a);
    LordEffectHelper._lordEffectToolTip.disp.visible = true;
  };
  Object.defineProperty(LordEffectHelper, "disp", {
    get: function () {
      return LordEffectHelper._lordEffectToolTip.disp;
    },
    enumerable: true,
    configurable: true
  });
  LordEffectHelper.resetCategoryItems = function () {
    LordEffectHelper._lordEffectToolTip.reset();
  };
  LordEffectHelper.createEffectGroups = function (e, t, i = -1) {
    e.sort(LordEffectHelper.sortByEffectSortOrder);
    var n = [];
    var r = [];
    var l = -1;
    var c = -1;
    if (e.length == 0) {
      return n;
    }
    l = o.int(e[0].effect.effectCategory);
    c = o.int(e[0].effect.effectGroup);
    if (e != null) {
      for (var u = 0, d = e; u < d.length; u++) {
        var p = d[u];
        if (p !== undefined && p.effect.effectCategory != s.EffectVO.CATEGORY_NO_CATEGORY) {
          if (l == p.effect.effectCategory && c == p.effect.effectGroup && p.effectValue instanceof a.EffectValueSimple) {
            r.push(p);
          } else {
            if (r.length > 0 && (i == -1 || i == l)) {
              n.push(new _.LordEffectGroupItem(t, r));
            }
            r.length = 0;
            r.push(p);
            l = o.int(p.effect.effectCategory);
            c = o.int(p.effect.effectGroup);
          }
        }
      }
    }
    if ((i == -1 || i == l) && r.length > 0) {
      n.push(new _.LordEffectGroupItem(t, r));
    }
    return n;
  };
  LordEffectHelper.sortByEffectSortOrder = function (e, t) {
    if (e.effect.effectCategory != t.effect.effectCategory) {
      return o.int(e.effect.effectCategory - t.effect.effectCategory);
    } else if (e.effect.effectGroup != t.effect.effectGroup) {
      return o.int(e.effect.effectGroup - t.effect.effectGroup);
    } else if (e.effect.capId != t.effect.capId) {
      return o.int(e.effect.capId - t.effect.capId);
    } else if (n.instanceOfClass(e, "GemBonusVO") && e.triggerChance != 100) {
      return 1;
    } else {
      return 0;
    }
  };
  LordEffectHelper.createEffectListStringFromEquipments = function (e) {
    var t = [];
    if (e) {
      if (e != null) {
        for (var i = 0, o = e; i < o.length; i++) {
          var a = o[i];
          if (a !== undefined) {
            for (var s = 0, r = a.boni; s < r.length; s++) {
              var l = r[s];
              if (l !== undefined) {
                LordEffectHelper.addEffectToBonusList(t, l);
              }
            }
          }
        }
      }
      for (var c = 0, u = e; c < u.length; c++) {
        if ((a = u[c]).gemVO) {
          if (n.instanceOfClass(a.gemVO, "CastleGemVO")) {
            for (var d = 0, p = a.gemVO.boni; d < p.length; d++) {
              l = p[d];
              LordEffectHelper.addEffectToBonusList(t, l);
            }
          }
          if (n.instanceOfClass(a.gemVO, "RelicGemVO")) {
            for (var h = 0, g = a.gemVO.relicInfoVO.relicBoni; h < g.length; h++) {
              l = g[h];
              LordEffectHelper.addEffectToBonusList(t, l);
            }
          }
        }
      }
    }
    return LordEffectHelper.getTotalEffectTextOfBonusList(t);
  };
  LordEffectHelper.getTotalEffectTextOfBonusList = function (e, t = true) {
    var i = "";
    for (var n = 0; n < e.length; ++n) {
      var o = e[n];
      if (i != "") {
        i += "\n";
      }
      i += o.descriptionText;
    }
    if (t && i == "") {
      i = "-";
    }
    return i;
  };
  LordEffectHelper.addEffectToBonusList = function (e, t) {
    var i = o.int(LordEffectHelper.getIndexOfEffectTypeInList(e, t.effect.effectType.type));
    if (i >= 0) {
      e[i].effectValue.add(t.effectValue, null);
    } else {
      e.push(t.clone());
    }
  };
  LordEffectHelper.getIndexOfEffectTypeInList = function (e, t) {
    for (var i = 0; i < e.length; ++i) {
      if (e[i].effect.effectType.type == t) {
        return i;
      }
    }
    return -1;
  };
  LordEffectHelper.getFilterStrategyAttackOrDefence = function (e, t) {
    if (r.PlayerHelper.isNPCPlayer(e) && !r.PlayerHelper.isNpcPvpPlayer(e)) {
      if (t) {
        return LordEffectHelper.STRATEGY_ATTACK_PVE;
      } else {
        return LordEffectHelper.STRATEGY_DEFENCE_PVE;
      }
    } else if (t) {
      return LordEffectHelper.STRATEGY_ATTACK;
    } else {
      return LordEffectHelper.STRATEGY_DEFENCE_PVP;
    }
  };
  LordEffectHelper.__initialize_static_members = function () {
    LordEffectHelper.STRATEGY_FULL_ACTIVE = new d.LordEffectFilterStrategyFullActive();
    LordEffectHelper.STRATEGY_FULL_PASSIVE = new p.LordEffectFilterStrategyFullPassive();
    LordEffectHelper.STRATEGY_ATTACK = new l.LordEffectFilterStrategyAttack();
    LordEffectHelper.STRATEGY_ATTACK_PVE = new c.LordEffectFilterStrategyAttackPVE();
    LordEffectHelper.STRATEGY_DEFENCE_PVE = new u.LordEffectFilterStrategyDefencePVE();
    LordEffectHelper.STRATEGY_DEFENCE_PVP = new f.LordEffectFilterStrategyDefencePVP();
    LordEffectHelper.STRATEGY_STATION = new h.LordEffectFilterStrategyStation();
    LordEffectHelper.STRATEGY_SUPPORT = new g.LordEffectFilterStrategySupport();
    LordEffectHelper._lordEffectToolTip = new m.LordEffectTooltip();
  };
  return LordEffectHelper;
}();
exports.LordEffectHelper = C;
var _ = require("./2187.js");
var m = require("./2188.js");
var f = require("./2193.js");
C.__initialize_static_members();