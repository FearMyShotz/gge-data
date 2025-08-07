Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./920.js");
var r = require("./15.js");
var l = function (e) {
  function CastleVerifyPlayerMailCommand(t = false) {
    return e.call(this, t) || this;
  }
  n.__extends(CastleVerifyPlayerMailCommand, e);
  CastleVerifyPlayerMailCommand.prototype.all_ok = function () {
    this.controller.dispatchEvent(new s.CastleMailVerificationAnswerEvent(s.CastleMailVerificationAnswerEvent.MAIL_VERIFICATION_ANSWER, s.CastleMailVerificationAnswerEvent.ALL_OK));
  };
  CastleVerifyPlayerMailCommand.prototype.general_error = function () {
    this.controller.dispatchEvent(new s.CastleMailVerificationAnswerEvent(s.CastleMailVerificationAnswerEvent.MAIL_VERIFICATION_ANSWER, s.CastleMailVerificationAnswerEvent.GENERAL_ERROR));
  };
  CastleVerifyPlayerMailCommand.prototype.email_already_verified = function () {
    this.controller.dispatchEvent(new s.CastleMailVerificationAnswerEvent(s.CastleMailVerificationAnswerEvent.MAIL_VERIFICATION_ANSWER, s.CastleMailVerificationAnswerEvent.EMAIL_ALREADY_VERIFIED));
  };
  CastleVerifyPlayerMailCommand.prototype.email_already_in_use = function () {
    this.controller.dispatchEvent(new s.CastleMailVerificationAnswerEvent(s.CastleMailVerificationAnswerEvent.MAIL_VERIFICATION_ANSWER, s.CastleMailVerificationAnswerEvent.EMAIL_ALREADY_IN_USE));
  };
  CastleVerifyPlayerMailCommand.prototype.email_blocked = function () {
    this.controller.dispatchEvent(new s.CastleMailVerificationAnswerEvent(s.CastleMailVerificationAnswerEvent.MAIL_VERIFICATION_ANSWER, s.CastleMailVerificationAnswerEvent.EMAIL_BLOCKED));
  };
  CastleVerifyPlayerMailCommand.prototype.email_invalid = function () {
    this.controller.dispatchEvent(new s.CastleMailVerificationAnswerEvent(s.CastleMailVerificationAnswerEvent.MAIL_VERIFICATION_ANSWER, s.CastleMailVerificationAnswerEvent.EMAIL_INVALID));
  };
  CastleVerifyPlayerMailCommand.prototype.email_too_long = function () {
    this.controller.dispatchEvent(new s.CastleMailVerificationAnswerEvent(s.CastleMailVerificationAnswerEvent.MAIL_VERIFICATION_ANSWER, s.CastleMailVerificationAnswerEvent.EMAIL_TOO_LONG));
  };
  CastleVerifyPlayerMailCommand.prototype.email_domain_blocked = function () {
    this.controller.dispatchEvent(new s.CastleMailVerificationAnswerEvent(s.CastleMailVerificationAnswerEvent.MAIL_VERIFICATION_ANSWER, s.CastleMailVerificationAnswerEvent.EMAIL_DOMAIN_BLOCKED));
  };
  Object.defineProperty(CastleVerifyPlayerMailCommand.prototype, "controller", {
    get: function () {
      return r.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return CastleVerifyPlayerMailCommand;
}(o.BasicVerifyPlayerMailCommand);
exports.CastleVerifyPlayerMailCommand = l;
a.classImplementsInterfaces(l, "ISimpleCommand");