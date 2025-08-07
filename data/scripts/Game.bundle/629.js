Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function RecruitmentHelper() {}
  RecruitmentHelper.cancelCurrentSlot = function (e, t, i, n, l) {
    var u = "";
    var d = "";
    if (t == r.ClientConstCastle.UNIT_CATEGORY_SOLDIERS || t == r.ClientConstCastle.UNIT_CATEGORY_AUXILIARIES) {
      u = c.Localize.text("dialog_recruit_abort_confirm_soldier_title");
      d = c.Localize.text("dialog_recruit_abort_confirm_soldier_copy");
    } else if (t == r.ClientConstCastle.UNIT_CATEGORY_TOOLS) {
      u = c.Localize.text("dialog_recruit_abort_confirm_tool_title");
      d = c.Localize.text("dialog_recruit_abort_confirm_tool_copy");
    }
    var p = i == n ? s.CastleTimedYesNoDialog : a.CastleLargeYesNoDialog;
    o.CastleDialogHandler.getInstance().registerDefaultDialogs(p, new g.CastleTimedYesNoDialogProperties(u, d, "countdown_restTime", e.remainingTimeInSeconds, false, l));
  };
  RecruitmentHelper.boostCurrentSlot = function (e, t, i, n, o = null, a = null) {
    h.CastleModel.smartfoxClient.sendCommandVO(new d.C2SBoostUnitPackageVO(t, e.pos, h.CastleModel.permanentCastleData.getCurrentCastle().areaId, h.CastleModel.kingdomData.activeKingdomID, e == n ? l.RecruitmentConst.PRODUCTION_SLOT_TYPE_NAME : l.RecruitmentConst.QUEUE_SLOT_TYPE_NAME));
  };
  RecruitmentHelper.skipSlot = function (e, t) {
    h.CastleModel.smartfoxClient.sendCommandVO(new p.C2SSkipUnitPackageVO(e, t));
  };
  RecruitmentHelper.getUnitDoublingCosts = function (e, t, i, n) {
    return u.int(h.CastleModel.costsData.getFinalCostsC2(e.cleavageOfCellsCosts[t] * i) * (n + 1));
  };
  RecruitmentHelper.getDoubledUnitAmount = function (e, t, i = true) {
    return u.int(e * Math.pow(2, t + (i ? 1 : 0)));
  };
  RecruitmentHelper.isRecruitingUnits = function () {
    var e = h.CastleModel.militaryData.getPackageListByCategory(r.ClientConstCastle.UNIT_CATEGORY_SOLDIERS);
    return !!e.currentProductionSlot && !e.currentProductionSlot.isFree;
  };
  RecruitmentHelper.isProducingTools = function (e = null) {
    var t = h.CastleModel.militaryData.getPackageListByCategory(r.ClientConstCastle.UNIT_CATEGORY_TOOLS);
    if (t.currentProductionSlot && !t.currentProductionSlot.isFree) {
      var i = h.CastleModel.wodData.getUnitVOByWodId(t.currentProductionSlot.wodId);
      return !e || i.unitType == e;
    }
    return false;
  };
  return RecruitmentHelper;
}();
exports.RecruitmentHelper = n;
var o = require("./9.js");
var a = require("./449.js");
var s = require("./767.js");
var r = require("./18.js");
var l = require("./5.js");
var c = require("./3.js");
var u = require("./6.js");
var d = require("./2682.js");
var p = require("./2683.js");
var h = require("./4.js");
var g = require("./768.js");