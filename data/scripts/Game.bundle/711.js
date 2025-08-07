Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastleLegendEffectTextComposer() {}
  CastleLegendEffectTextComposer.composeLegendSkillBonuses = function (e) {
    var t = [];
    if (e != null) {
      for (var i = 0, n = e; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          t.push(a.CastleModel.legendSkillData.getSkillByID(o));
        }
      }
    }
    return CastleLegendEffectTextComposer.composeEffectsText(t);
  };
  CastleLegendEffectTextComposer.composeEffectsText = function (e) {
    var t;
    var i;
    var n = "";
    var s = new Map();
    for (var r = 0, l = e; r < l.length; r++) {
      t = l[r];
      i = o.Localize.text(t.shortDescriptionTextID);
      if (s.get(i) == undefined) {
        s.set(i, [t.shortDescriptionTextID, a.CastleModel.legendSkillData.getTotalSkillValue(t)]);
      } else {
        s.set(i, [s.get(i)[0], s.get(i)[1] + a.CastleModel.legendSkillData.getTotalSkillValue(t)]);
      }
    }
    if (s != null) {
      for (var c = 0, u = Array.from(s.keys()); c < u.length; c++) {
        if ((i = u[c]) !== undefined) {
          n += o.Localize.text(s.get(i)[0], [s.get(i)[1]]) + "\n";
        }
      }
    }
    return n;
  };
  CastleLegendEffectTextComposer.getLegendBonusText = function (e) {
    var t = "";
    if (e) {
      t += CastleLegendEffectTextComposer.composeLegendSkillBonuses(e);
    }
    if (t.length > 0) {
      t = o.Localize.text("dialog_battleLog_legendTemple_tooltip_header") + "\n" + t;
    }
    return t;
  };
  return CastleLegendEffectTextComposer;
}();
exports.CastleLegendEffectTextComposer = n;
var o = require("./3.js");
var a = require("./4.js");