Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./71.js");
var l = require("./4.js");
var c = require("./10.js");
var u = function (e) {
  function CSMCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CSMCommand, e);
  Object.defineProperty(CSMCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_CREATE_SPY_MOVEMENT;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CSMCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        l.CastleModel.currencyData.parseGCU(i.gcu);
        l.CastleModel.otherPlayerData.parseOwnerInfoArray(i.O);
        l.CastleModel.armyData.parseMapMovementArray([i.A]);
        this.controller.dispatchEvent(new r.AreaDataEvent(r.AreaDataEvent.ON_SPY_DATA_CHANGED));
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return CSMCommand;
}(c.CastleCommand);
exports.CSMCommand = u;
o.classImplementsInterfaces(u, "IExecCommand");