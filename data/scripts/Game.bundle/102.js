Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleAllianceDataEvent(t, i = null, n = null, o = true, a = false) {
    var s = e.call(this, t, o, a) || this;
    s.allianceInfoVO = i;
    s.params = n;
    return s;
  }
  n.__extends(CastleAllianceDataEvent, e);
  CastleAllianceDataEvent.ALLIANCE_FOUNDED = "allianceFounded";
  CastleAllianceDataEvent.ALLIANCEDATA_UPDATED = "alliancedataUpdated";
  CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED = "myAlliancedataUpdated";
  CastleAllianceDataEvent.ALLIANCE_INVITATION = "allianceInvitation";
  CastleAllianceDataEvent.ALLIANCE_ACTIONLIST_UPDATED = "allianceActionListUpdated";
  CastleAllianceDataEvent.ALLIANCE_SEARCH_ALLIANCE_LIST_UPDATED = "ALLIANCE_SEARCH_ALLIANCE_LIST_UPDATED";
  CastleAllianceDataEvent.ALLIANCE_SEARCH_MEMBER_LIST_UPDATED = "ALLIANCE_SEARCH_MEMBER_LIST_UPDATED";
  CastleAllianceDataEvent.ALLIANCE_APPLICATION_LIST_UPDATED = "ALLIANCE_APPLICATION_LIST_UPDATED";
  CastleAllianceDataEvent.ALLIANCE_AUTO_WAR_UPDATED = "ALLIANCE_AUTO_WAR_UPDATED";
  CastleAllianceDataEvent.ALLIANCE_CREST_SAVED_OK = "ALLIANCE_CREST_SAVED_OK";
  CastleAllianceDataEvent.ON_ALLIANCE_NAME_CHANGED = "allianceNameChanged";
  return CastleAllianceDataEvent;
}(createjs.Event);
exports.CastleAllianceDataEvent = o;