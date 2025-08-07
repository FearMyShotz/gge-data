Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./6.js");
var l = require("./7.js");
var c = require("./53.js");
var u = require("./137.js");
var d = require("./10.js");
var p = function (e) {
  function TCCCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(TCCCommand, e);
  Object.defineProperty(TCCCommand.prototype, "cmdId", {
    get: function () {
      return l.ClientConstSF.S2C_SET_BOUGHT_SPECIAL_SERVER_CASTLES;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  TCCCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case s.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        var n = r.int(i[a.CommKeys.TEMP_SERVER_CAMP_ID]);
        var o = r.int(i[a.CommKeys.ALLIANCE_BATTLEGROUND_CAMP_ID]);
        if (u.TempServerHelper.tmpServerEvent) {
          u.TempServerHelper.tmpServerEvent.castleBought = n > 0;
        }
        if (c.ABGHelper.abgEvent) {
          c.ABGHelper.abgEvent.castleBought = o > 0;
        }
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return TCCCommand;
}(d.CastleCommand);
exports.TCCCommand = p;
o.classImplementsInterfaces(p, "IExecCommand");