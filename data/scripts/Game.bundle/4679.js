Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./7.js");
var c = require("./837.js");
var u = require("./207.js");
var d = require("./15.js");
var p = require("./10.js");
var h = function (e) {
  function AACommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(AACommand, e);
  Object.defineProperty(AACommand.prototype, "cmdId", {
    get: function () {
      return l.ClientConstSF.S2C_ACTIVATE_ATTACK_ADVISOR_EVENT;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  AACommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case r.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        var n = i[a.CommKeys.ADVISOR_ATTACK_TYPE] ? i[a.CommKeys.ADVISOR_ATTACK_TYPE] : s.AttackAdvisorConst.ADVISOR_TYPE_NOMAD;
        var o = u.AdvisorAttackHelper.getEventVOByAdvisorType(n);
        if (o) {
          o.isAdvisorActive = true;
          d.CastleBasicController.getInstance().dispatchEvent(new c.AdvisorActivationEvent(c.AdvisorActivationEvent.ADVISOR_ACTIVATION_CHANGED, n));
        }
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return AACommand;
}(p.CastleCommand);
exports.AACommand = h;
o.classImplementsInterfaces(h, "IExecCommand");