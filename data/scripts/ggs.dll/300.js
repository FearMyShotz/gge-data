Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./13.js");
var s = require("./34.js");
var r = function (e) {
  function FacebookConnectionTrackingEvent(t) {
    return e.call(this, t) || this;
  }
  i.__extends(FacebookConnectionTrackingEvent, e);
  FacebookConnectionTrackingEvent.prototype.getVars = function () {
    return {
      eventId: s.FacebookConnection.ID,
      facebook_connection_state: this.facebookExternalState,
      game_level: this.gameLevel,
      playerId: this.playerId,
      timestamp: this.timestamp,
      user_external_id: this.facebookId
    };
  };
  return FacebookConnectionTrackingEvent;
}(a.BasicTrackingEvent);
exports.FacebookConnectionTrackingEvent = r;