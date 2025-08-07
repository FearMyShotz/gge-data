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
  function CRMCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CRMCommand, e);
  Object.defineProperty(CRMCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_CREATE_MARKET_MOVEMENT;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CRMCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        r.CastleModel.currencyData.parseGCU(i.gcu);
        if (r.CastleModel.areaData.activeArea) {
          r.CastleModel.areaData.activeArea.updater.parseGRC(i.grc);
        }
        r.CastleModel.otherPlayerData.parseOwnerInfoArray(i.O);
        r.CastleModel.armyData.parseMapMovementArray([i.A]);
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return CRMCommand;
}(l.CastleCommand);
exports.CRMCommand = c;
o.classImplementsInterfaces(c, "IExecCommand");