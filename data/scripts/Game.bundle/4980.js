Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./4.js");
var l = require("./10.js");
var c = function (e) {
  function GAMCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(GAMCommand, e);
  Object.defineProperty(GAMCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_GET_ALL_MOVEMENTS;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  GAMCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        r.CastleModel.otherPlayerData.parseOwnerInfoArray(i.O);
        r.CastleModel.armyData.parse_GAM(i);
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return GAMCommand;
}(l.CastleCommand);
exports.GAMCommand = c;
o.classImplementsInterfaces(c, "IExecCommand");