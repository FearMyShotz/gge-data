Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleSpecialEventEvent(t, i = null, n = true, o = false) {
    var a = e.call(this, t, n, o) || this;
    a.specialEventVO = i;
    return a;
  }
  n.__extends(CastleSpecialEventEvent, e);
  CastleSpecialEventEvent.REFRESH_SPECIALEVENT = "refresh_specialevent";
  CastleSpecialEventEvent.REMOVE_SPECIALEVENT = "remove_specialevent";
  CastleSpecialEventEvent.ADD_SPECIALEVENT = "add_specialevent";
  CastleSpecialEventEvent.SERVER_DATA_PARSED = "serverDataParsed";
  CastleSpecialEventEvent.REFRESH_PRIVATEEVENT = "refresh_privateevent";
  CastleSpecialEventEvent.REMOVE_PRIVATEEVENT = "remove_privateeven";
  CastleSpecialEventEvent.ADD_PRIVATEEVENT = "add_privateeven";
  CastleSpecialEventEvent.NEW_FAKE_EVENT = "new_fake_event";
  CastleSpecialEventEvent.REMOVE_FAKE_EVENT = "remove_fake_event";
  CastleSpecialEventEvent.FACTION_EVENT_FACTIONPOINTS_UPDATED = "FACTION_EVENT_FACTIONPOINTS_UPDATED";
  CastleSpecialEventEvent.FACTION_EVENT_FACTION_PROTECTION_UPDATED = "FACTION_EVENT_FACTION_PROTECTION_UPDATED";
  CastleSpecialEventEvent.FACTION_EVENT_FACTION_PROTECTION_TIMEUPDATE = "FACTION_EVENT_FACTION_PROTECTION_TIMEUPDATE";
  CastleSpecialEventEvent.FACTION_EVENT_SPECTATOR_STATUS_CHANGE = "FACTION_EVENT_SPECTATOR_STATUS_CHANGE";
  CastleSpecialEventEvent.FACTION_ATTACKABLE_DATA_UPDATED = "FACTION_ATTACKABLE_DATA_UPDATED";
  CastleSpecialEventEvent.LUCKY_WHEEL_AWARDED = "LUCKY_WHEEL_AWARDED";
  CastleSpecialEventEvent.LUCKY_WHEEL_MODE_CHANGED = "LUCKY_WHEEL_MODE_CHANGED";
  CastleSpecialEventEvent.LUCKY_WHEEL_BOUGHT_JACKPOT = "LUCKY_WHEEL_BOUGHT_JACKPOT";
  CastleSpecialEventEvent.LUCKY_WHEEL_WINCLASS_CHANGED = "LUCKY_WHEEL_WINCLASS_CHANGED";
  CastleSpecialEventEvent.FACTION_EVENT_LAST_MAN_STANDING_UPDATE = "FACTION_EVENT_LAST_MAN_STANDING_UPDATE";
  CastleSpecialEventEvent.ON_OWN_ROYAL_CAPITAL_SCORE_CHANGED = "onOwnRoyalCapitalScoreChanged";
  return CastleSpecialEventEvent;
}(require("./366.js").CastleEvent);
exports.CastleSpecialEventEvent = o;