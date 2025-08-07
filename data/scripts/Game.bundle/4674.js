Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./7.js");
var s = require("./1136.js");
var r = require("./364.js");
var l = function (e) {
  function VPNCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(VPNCommand, e);
  Object.defineProperty(VPNCommand.prototype, "cmdId", {
    get: function () {
      return a.ClientConstSF.S2C_VALIDATE_NEW_PLAYER_NAME;
    },
    enumerable: true,
    configurable: true
  });
  VPNCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case o.ERROR.ALL_OK:
        this.controller.dispatchEvent(new s.CastleNameValidationEvent(s.CastleNameValidationEvent.VPN_OK));
        return true;
      case o.ERROR.INVALID_NAME:
        var i = JSON.parse(t[1]);
        this.controller.dispatchEvent(new r.CastleRegisterErrorEvent(r.CastleRegisterErrorEvent.REGISTER_ERROR, r.CastleRegisterErrorEvent.INVALID_NAME, i));
        break;
      case o.ERROR.NAME_ALREADY_IN_USE:
        i = JSON.parse(t[1]);
        this.controller.dispatchEvent(new r.CastleRegisterErrorEvent(r.CastleRegisterErrorEvent.REGISTER_ERROR, r.CastleRegisterErrorEvent.NAME_ALREADY_IN_USE, i));
        break;
      case o.ERROR.NAME_HAS_ONLY_NUMBERS:
        i = JSON.parse(t[1]);
        this.controller.dispatchEvent(new r.CastleRegisterErrorEvent(r.CastleRegisterErrorEvent.REGISTER_ERROR, r.CastleRegisterErrorEvent.NAME_HAS_ONLY_NUMBERS, i));
        break;
      case o.ERROR.USAGE_OF_BADWORDS:
        i = JSON.parse(t[1]);
        this.controller.dispatchEvent(new r.CastleRegisterErrorEvent(r.CastleRegisterErrorEvent.REGISTER_ERROR, r.CastleRegisterErrorEvent.USAGE_OF_BADWORDS, i));
        break;
      default:
        i = JSON.parse(t[1]);
        this.controller.dispatchEvent(new r.CastleRegisterErrorEvent(r.CastleRegisterErrorEvent.REGISTER_ERROR, r.CastleRegisterErrorEvent.INVALID_NAME, i));
    }
    return false;
  };
  return VPNCommand;
}(require("./10.js").CastleCommand);
exports.VPNCommand = l;