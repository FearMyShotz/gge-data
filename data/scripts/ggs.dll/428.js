Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./26.js");
var s = require("./8.js");
var r = require("./9.js");
var o = require("./182.js");
var l = require("./429.js");
var u = function (e) {
  function GICCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i.__extends(GICCommand, e);
  Object.defineProperty(GICCommand.prototype, "cmdId", {
    get: function () {
      return r.BasicSmartfoxConstants.S2C_GENERATE_INVITE_CODE;
    },
    enumerable: true,
    configurable: true
  });
  GICCommand.prototype.executeCommand = function (e, t) {
    var n = false;
    switch (e) {
      case o.CoreErrorIdConstants.OK:
        n = true;
        var i = String(t.pop());
        if (i.includes("?")) {
          var a = i.split("?");
          var r = this.env.href.includes("?") ? "&" : "?";
          i = this.env.href + r + a[1];
        }
        s.BasicController.getInstance().dispatchEvent(new l.GenerateInviteCodeEvent(l.GenerateInviteCodeEvent.INVITE_CODE_GENERATED, e, i));
        break;
      case o.CoreErrorIdConstants.FEATURE_NOT_AVAILABLE:
      case o.CoreErrorIdConstants.INVALID_PARAMETER_VALUE:
      case o.CoreErrorIdConstants.GENERAL_ERROR:
      case o.CoreErrorIdConstants.FRIENDINVITE_CODE_CREATION_ERROR:
      case o.CoreErrorIdConstants.FRIENDINVITE_CODE_CREATION_UNKNOWN_TYPE:
      case o.CoreErrorIdConstants.FRIENDINVITE_CODE_CREATION_NO_LINK_CONFIGURED:
        s.BasicController.getInstance().dispatchEvent(new l.GenerateInviteCodeEvent(l.GenerateInviteCodeEvent.GENERATE_INVITE_CODE_FAILED, e));
    }
    return n;
  };
  return GICCommand;
}(a.BasicCommand);
exports.GICCommand = u;