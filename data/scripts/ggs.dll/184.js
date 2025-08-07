Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = function (e) {
  function SocialDataEvent(t, n = false, i = false) {
    return e.call(this, t, n, i) || this;
  }
  i.__extends(SocialDataEvent, e);
  SocialDataEvent.SOCIAL_PLAYER_NAME_CHANGED = "socialPlayerNameChanged";
  SocialDataEvent.LOGIN_KEYS_REFRESHED = "loginKeysRefreshed";
  return SocialDataEvent;
}(createjs.Event);
exports.SocialDataEvent = a;