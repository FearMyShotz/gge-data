Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./9.js");
var s = require("./4.js");
var r = function (e) {
  function BasicVerifyPlayerMailCommand(t = false) {
    var n = e.call(this, t) || this;
    n.ALL_OK = 0;
    n.GENERAL_ERROR = 1;
    n.FEATURE_NOT_AVAILABLE = 2;
    n.EMAIL_ALREADY_VERIFIED = 3;
    n.EMAIL_ALREADY_IN_USE = 4;
    n.EMAIL_BLOCKED = 5;
    n.EMAIL_INVALID = 6;
    n.EMAIL_TOO_LONG = 7;
    n.EMAIL_DOMAIN_BLOCKED = 8;
    return n;
  }
  i.__extends(BasicVerifyPlayerMailCommand, e);
  BasicVerifyPlayerMailCommand.prototype.execute = function (e = null) {
    this.errorCode = e;
    switch (this.errorCode) {
      case this.ALL_OK:
        this.all_ok();
        break;
      case this.GENERAL_ERROR:
        this.general_error();
        break;
      case this.FEATURE_NOT_AVAILABLE:
        this.feature_not_available();
        break;
      case this.EMAIL_ALREADY_VERIFIED:
        this.email_already_verified();
        break;
      case this.EMAIL_ALREADY_IN_USE:
        this.email_already_in_use();
        break;
      case this.EMAIL_BLOCKED:
        this.email_blocked();
        break;
      case this.EMAIL_INVALID:
        this.email_invalid();
        break;
      case this.EMAIL_TOO_LONG:
        this.email_too_long();
        break;
      case this.EMAIL_DOMAIN_BLOCKED:
        this.email_domain_blocked();
        break;
      default:
        this.general_error();
    }
  };
  BasicVerifyPlayerMailCommand.prototype.all_ok = function () {};
  BasicVerifyPlayerMailCommand.prototype.general_error = function () {};
  BasicVerifyPlayerMailCommand.prototype.feature_not_available = function () {};
  BasicVerifyPlayerMailCommand.prototype.email_already_verified = function () {};
  BasicVerifyPlayerMailCommand.prototype.email_already_in_use = function () {};
  BasicVerifyPlayerMailCommand.prototype.email_blocked = function () {};
  BasicVerifyPlayerMailCommand.prototype.email_invalid = function () {};
  BasicVerifyPlayerMailCommand.prototype.email_too_long = function () {};
  BasicVerifyPlayerMailCommand.prototype.email_domain_blocked = function () {};
  BasicVerifyPlayerMailCommand.sendMessage = function (e) {
    var t = {
      MAIL: e
    };
    s.BasicModel.smartfoxClient.sendMessage(a.BasicSmartfoxConstants.C2S_VERIFY_PLAYER_MAIL_EVENT, [JSON.stringify(t)]);
  };
  return BasicVerifyPlayerMailCommand;
}(require("./6.js").SimpleCommand);
exports.BasicVerifyPlayerMailCommand = r;