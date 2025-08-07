Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./26.js");
var s = require("./8.js");
var r = require("./9.js");
var o = require("./435.js");
var l = require("./182.js");
var u = function (e) {
  function SICCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i.__extends(SICCommand, e);
  Object.defineProperty(SICCommand.prototype, "cmdId", {
    get: function () {
      return r.BasicSmartfoxConstants.S2C_SET_INVITE_CODE;
    },
    enumerable: true,
    configurable: true
  });
  SICCommand.prototype.executeCommand = function (e, t) {
    var n = false;
    switch (e) {
      case l.CoreErrorIdConstants.OK:
        n = true;
        s.BasicController.getInstance().dispatchEvent(new o.SetInviteCodeEvent(o.SetInviteCodeEvent.INVITE_CODE_SET, e));
        break;
      case l.CoreErrorIdConstants.LOGIN_PLAYER_IS_BANNED:
      case l.CoreErrorIdConstants.FEATURE_NOT_AVAILABLE:
      case l.CoreErrorIdConstants.INVALID_PARAMETER_VALUE:
      case l.CoreErrorIdConstants.GENERAL_ERROR:
      case l.CoreErrorIdConstants.FRIENDINVITE_WRONG_ZONE_ERROR:
      case l.CoreErrorIdConstants.FRIENDINVITE_UNKNOWN_INVITER_ERROR:
      case l.CoreErrorIdConstants.FRIENDINVITE_INVITEE_LIMIT_REACHED_ERROR:
      case l.CoreErrorIdConstants.FRIENDINVITE_RELATION_ALREADY_EXISTS_ERROR:
      case l.CoreErrorIdConstants.FRIENDINVITE_REGISTRATION_BEFORE_INVITECODE_CREATION_ERROR:
      case l.CoreErrorIdConstants.FRIENDINVITE_INVALID_CODE_ERROR:
      case l.CoreErrorIdConstants.FRIENDINVITE_FEATURE_IS_BLOCKED_FOR_INVITER_ERROR:
      case l.CoreErrorIdConstants.FRIENDINVITE_CANNOT_INVITE_SELF_ERROR:
        s.BasicController.getInstance().dispatchEvent(new o.SetInviteCodeEvent(o.SetInviteCodeEvent.SET_INVITE_CODE_FAILED, e));
    }
    return n;
  };
  return SICCommand;
}(a.BasicCommand);
exports.SICCommand = u;