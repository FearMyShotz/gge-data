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
  function THMCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(THMCommand, e);
  Object.defineProperty(THMCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_CREATE_TREASUREHUNT_MOVEMENT;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  THMCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        r.CastleModel.armyData.parseMapMovementArray([i.TM]);
        r.CastleModel.currencyData.parseGCU(i.gcu);
        r.CastleModel.militaryData.parse_GUI(i.gui);
        break;
      case a.ERROR.CANT_START_NEW_ARMIES:
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return THMCommand;
}(l.CastleCommand);
exports.THMCommand = c;
o.classImplementsInterfaces(c, "IExecCommand");