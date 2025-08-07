Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./7.js");
var s = require("./37.js");
var r = require("./10.js");
var l = function (e) {
  function CPNECommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CPNECommand, e);
  Object.defineProperty(CPNECommand.prototype, "cmdId", {
    get: function () {
      return a.ClientConstSF.S2C_CHANGE_PLAYER_NAME_EVENT;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CPNECommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case o.ERROR.ALL_OK:
        this.dispatchForShowPopUp("dialog_options_newName_success_desc", true);
        break;
      case o.ERROR.USAGE_OF_BADWORDS:
        this.dispatchForShowPopUp("error_badword", false);
        break;
      case o.ERROR.NAME_ALREADY_IN_USE:
        this.dispatchForShowPopUp("dialog_options_error_nameAlreadyInUse_desc", false);
        break;
      case o.ERROR.INVALID_NAME:
        this.dispatchForShowPopUp("errorCode_98", false);
        break;
      case o.ERROR.NAME_HAS_ONLY_NUMBERS:
        this.dispatchForShowPopUp("error_name_is_number", false);
        break;
      case o.ERROR.COOLING_DOWN:
        this.dispatchForShowPopUp("errorCode_95", false);
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  CPNECommand.prototype.dispatchForShowPopUp = function (e, t) {
    this.controller.dispatchEvent(new s.CastleServerMessageArrivedEvent(s.CastleServerMessageArrivedEvent.CPNE_ARRIVED, [e, t]));
  };
  return CPNECommand;
}(r.CastleCommand);
exports.CPNECommand = l;