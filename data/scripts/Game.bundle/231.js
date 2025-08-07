Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./5.js");
var o = require("./4.js");
var a = function () {
  function ClientConstAlliance() {}
  ClientConstAlliance.getInferiorRanks = function (e) {
    var t = [];
    if (o.CastleModel.allianceData.hasRight(e, n.AllianceConst.RIGHT_NEW_LEADER)) {
      t.push(n.AllianceConst.RANK_COLEADER);
    }
    if (o.CastleModel.allianceData.hasRight(e, n.AllianceConst.RIGHT_HANDLE_GENERAL)) {
      t.push(n.AllianceConst.RANK_MARSHAL);
      t.push(n.AllianceConst.RANK_TREASURER);
      t.push(n.AllianceConst.RANK_DIPLOMAT);
      t.push(n.AllianceConst.RANK_RECRUITER);
      t.push(n.AllianceConst.RANK_GENERAL);
    }
    if (o.CastleModel.allianceData.hasRight(e, n.AllianceConst.RIGHT_HANDLE_SEAGANT)) {
      t.push(n.AllianceConst.RANK_SERGEANT);
    }
    if (o.CastleModel.allianceData.hasRight(e, n.AllianceConst.RIGHT_KICK_MEMBER)) {
      t.push(n.AllianceConst.RANK_MEMBER);
    }
    return t;
  };
  ClientConstAlliance.CAT_NONE = "cat_none";
  ClientConstAlliance.CAT_OVERVIEW = "cat_overview";
  ClientConstAlliance.CAT_MEMBERLIST = "cat_memberlist";
  ClientConstAlliance.CAT_MANAGEMENT = "cat_management";
  ClientConstAlliance.CAT_TREASURY = "cat_treasury";
  ClientConstAlliance.CAT_COMMUNICATION = "cat_chat";
  ClientConstAlliance.CAT_DIPLOMACY = "cat_diplomacy";
  ClientConstAlliance.CAT_FAME = "cat_fame";
  ClientConstAlliance.CAT_FORGE = "cat_forge";
  ClientConstAlliance.CAT_FORGE_HIGH = "cat_forgeHigh";
  ClientConstAlliance.CAT_BOOKMARKS = "cat_bookmarks";
  ClientConstAlliance.CAT_ABG = "cat_abg";
  ClientConstAlliance.MIN_LEVEL_ALLIANCE_GIFTS = 6;
  ClientConstAlliance.STATUS_REQUEST_POSSIBLE = 1;
  ClientConstAlliance.STATUS_REQUEST_PROCESSING = 2;
  ClientConstAlliance.STATUS_REQUEST_CONFIRMED = 3;
  return ClientConstAlliance;
}();
exports.ClientConstAlliance = a;