Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./7.js");
var s = require("./37.js");
var r = require("./10.js");
var l = require("./4.js");
var c = function (e) {
  function RMCCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(RMCCommand, e);
  Object.defineProperty(RMCCommand.prototype, "cmdId", {
    get: function () {
      return a.ClientConstSF.S2C_REQUEST_MAIL_CHANGE;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  RMCCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case o.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        l.CastleModel.playerEmailData.newEmail = i.PMA;
        this.dispatchForShowPopUp("dialog_options_newName_success_desc", true);
        break;
      case o.ERROR.EMAIL_ALREADY_IN_USE:
        this.dispatchForShowPopUp("error_mail_exists", false);
        break;
      case o.ERROR.INVALID_EMAIL:
        this.dispatchForShowPopUp("dialog_options_error_enterEmail_desc", false);
        break;
      case o.ERROR.MAILDOMAIN_BLOCKED:
        this.dispatchForShowPopUp("EMAIL_DOMAIN_BLOCKED_8", false);
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  RMCCommand.prototype.dispatchForShowPopUp = function (e, t) {
    this.controller.dispatchEvent(new s.CastleServerMessageArrivedEvent(s.CastleServerMessageArrivedEvent.RMC_ARRIVED, [e, t]));
  };
  return RMCCommand;
}(r.CastleCommand);
exports.RMCCommand = c;