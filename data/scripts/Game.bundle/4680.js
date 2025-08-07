Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./1838.js");
var l = require("./1931.js");
var c = require("./10.js");
var u = function (e) {
  function AAOCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(AAOCommand, e);
  Object.defineProperty(AAOCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_ATTACK_ADVISOR_OVERVIEW_EVENT;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  AAOCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        var n = new l.AdvisorAttackOverviewVO();
        n.parseServerData(i);
        this.controller.dispatchEvent(new r.AdvisorAttackOverviewEvent(r.AdvisorAttackOverviewEvent.ADVISOR_ATTACK_OVERVIEW_UPDATE, n));
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return AAOCommand;
}(c.CastleCommand);
exports.AAOCommand = u;
o.classImplementsInterfaces(u, "IExecCommand");