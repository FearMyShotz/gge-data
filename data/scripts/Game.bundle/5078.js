Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./7.js");
var c = require("./4.js");
var u = require("./10.js");
var d = function (e) {
  function AFDCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(AFDCommand, e);
  Object.defineProperty(AFDCommand.prototype, "cmdId", {
    get: function () {
      return l.ClientConstSF.S2C_GET_ATTACKABLE_FACTION_DATA_EVENT;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  AFDCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case s.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        var n = o.castAs(c.CastleModel.specialEventData.getActiveEventByEventId(r.EventConst.EVENTTYPE_FACTION), "FactionEventVO");
        if (n) {
          n.parse_AFD(i);
        }
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return AFDCommand;
}(u.CastleCommand);
exports.AFDCommand = d;
a.classImplementsInterfaces(d, "IExecCommand");