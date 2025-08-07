Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleRegisterErrorEvent(t, i, n = null, o = false, a = false) {
    var s = this;
    CONSTRUCTOR_HACK;
    (s = e.call(this, t, o, a) || this).errorType = i;
    s.params = n;
    return s;
  }
  n.__extends(CastleRegisterErrorEvent, e);
  CastleRegisterErrorEvent.__initialize_static_members = function () {
    CastleRegisterErrorEvent.REGISTER_ERROR = "REGISTER_ERROR";
    CastleRegisterErrorEvent.EMAIL_ALREADY_IN_USE = "EMAIL_ALREADY_IN_USE";
    CastleRegisterErrorEvent.INVALID_EMAIL = "INVALID_EMAIL";
    CastleRegisterErrorEvent.INVALID_PASSWORD = "INVALID_PASSWORD";
    CastleRegisterErrorEvent.INVALID_NAME = "INVALID_NAME";
    CastleRegisterErrorEvent.NAME_ALREADY_IN_USE = "NAME_ALREADY_IN_USE";
    CastleRegisterErrorEvent.NAME_USES_BADWORD = "NAME_USES_BADWORD";
    CastleRegisterErrorEvent.INVALID_LOGIN_FIELD = "INVALID_LOGIN_FIELD";
    CastleRegisterErrorEvent.NAME_HAS_ONLY_NUMBERS = "NAME_HAS_ONLY_NUMBERS";
    CastleRegisterErrorEvent.USAGE_OF_BADWORDS = "USAGE_OF_BADWORDS";
    CastleRegisterErrorEvent.LLI_ERROR = "LLI_ERROR";
  };
  return CastleRegisterErrorEvent;
}(createjs.Event);
exports.CastleRegisterErrorEvent = o;
o.__initialize_static_members();