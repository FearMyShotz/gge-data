Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function LoginBonusDataUpdateEvent(t, i = false, n = false) {
    CONSTRUCTOR_HACK;
    return e.call(this, t, i, n) || this;
  }
  n.__extends(LoginBonusDataUpdateEvent, e);
  LoginBonusDataUpdateEvent.__initialize_static_members = function () {
    LoginBonusDataUpdateEvent.LOGIN_BONUS_UPDATED = "login_bonus_updated";
  };
  return LoginBonusDataUpdateEvent;
}(createjs.Event);
exports.LoginBonusDataUpdateEvent = o;
o.__initialize_static_members();