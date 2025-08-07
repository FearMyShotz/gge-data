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
  function FKICommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(FKICommand, e);
  Object.defineProperty(FKICommand.prototype, "cmdId", {
    get: function () {
      return r.ClientConstSF.S2C_GET_FACTIONKINGDOM_INFO;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  FKICommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        if (i) {
          var n = l.CastleModel.specialEventData.getActiveEventByEventId(s.EventConst.EVENTTYPE_FACTION);
          if (n) {
            n.parse_FKI(i);
          }
        }
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return FKICommand;
}(c.CastleCommand);
exports.FKICommand = u;
o.classImplementsInterfaces(u, "IExecCommand");