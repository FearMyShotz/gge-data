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
  function FGBCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(FGBCommand, e);
  Object.defineProperty(FGBCommand.prototype, "cmdId", {
    get: function () {
      return r.ClientConstSF.S2C_GET_FACTION_BALANCE;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  FGBCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        if (i) {
          var n = l.CastleModel.specialEventData.getActiveEventByEventId(s.EventConst.EVENTTYPE_FACTION);
          if (n) {
            n.parse_FGB(i);
          }
        }
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return FGBCommand;
}(c.CastleCommand);
exports.FGBCommand = u;
o.classImplementsInterfaces(u, "IExecCommand");