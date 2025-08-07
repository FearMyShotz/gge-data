Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./7.js");
var l = require("./4.js");
var c = require("./10.js");
var u = function (e) {
  function IRCCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(IRCCommand, e);
  Object.defineProperty(IRCCommand.prototype, "cmdId", {
    get: function () {
      return r.ClientConstSF.S2C_RESOURCE_CITIZEN;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  IRCCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case s.ERROR.ALL_OK:
        var i;
        if (d.Iso.renderer && l.CastleModel.resourcePoolData.ownerMovementVO) {
          i = o.castAs(d.Iso.renderer.objects.provider.getObjectByVO(l.CastleModel.resourcePoolData.ownerMovementVO), "AIsoMovementVE");
        }
        var n = JSON.parse(t[1]);
        l.CastleModel.resourcePoolData.parseIRC(n);
        if (i) {
          i.updateResourceIcon();
        }
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return IRCCommand;
}(c.CastleCommand);
exports.IRCCommand = u;
var d = require("./33.js");
a.classImplementsInterfaces(u, "IExecCommand");