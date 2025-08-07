Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleMailVerificationAnswerEvent(t, i, n = false, o = false) {
    var a = this;
    a.status = 0;
    CONSTRUCTOR_HACK;
    (a = e.call(this, t, n, o) || this).status = i;
    return a;
  }
  n.__extends(CastleMailVerificationAnswerEvent, e);
  CastleMailVerificationAnswerEvent.__initialize_static_members = function () {
    CastleMailVerificationAnswerEvent.MAIL_VERIFICATION_ANSWER = "MAIL_VERIFICATION_ANSWER";
    CastleMailVerificationAnswerEvent.ALL_OK = 0;
    CastleMailVerificationAnswerEvent.GENERAL_ERROR = 1;
    CastleMailVerificationAnswerEvent.EMAIL_ALREADY_VERIFIED = 3;
    CastleMailVerificationAnswerEvent.EMAIL_ALREADY_IN_USE = 4;
    CastleMailVerificationAnswerEvent.EMAIL_BLOCKED = 5;
    CastleMailVerificationAnswerEvent.EMAIL_INVALID = 6;
    CastleMailVerificationAnswerEvent.EMAIL_TOO_LONG = 7;
    CastleMailVerificationAnswerEvent.EMAIL_DOMAIN_BLOCKED = 8;
  };
  return CastleMailVerificationAnswerEvent;
}(createjs.Event);
exports.CastleMailVerificationAnswerEvent = o;
o.__initialize_static_members();