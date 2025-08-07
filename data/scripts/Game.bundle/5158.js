Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./7.js");
var l = require("./4.js");
var c = require("./10.js");
var u = function (e) {
  function USGCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(USGCommand, e);
  Object.defineProperty(USGCommand.prototype, "cmdId", {
    get: function () {
      return r.ClientConstSF.S2C_SEEN_GLOBAL_EFFECTS;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  USGCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        var n = d.castAs(l.CastleModel.specialEventData.getActiveEventByEventId(s.EventConst.EVENTTYPE_GLOBAL_EFFECTS), "GlobalEffectEventVO");
        if (n) {
          n.parse_USG(i);
        }
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return USGCommand;
}(c.CastleCommand);
exports.USGCommand = u;
var d = require("./1.js");
o.classImplementsInterfaces(u, "IExecCommand");