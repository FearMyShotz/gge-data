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
  function CCDCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CCDCommand, e);
  Object.defineProperty(CCDCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_COLOSSUS_COIN_DEPOSIT_RESOURCES;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CCDCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        this.layoutManager.hideDialog(u.CastleCoinColossusDonateDialog);
        var i = JSON.parse(t[1]);
        r.CastleModel.specialEventData.parse_CHE(i.che);
        r.CastleModel.currencyData.parseGCU(i.gcu);
        r.CastleModel.areaData.activeArea.updater.parseGRC(i.grc);
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return CCDCommand;
}(l.CastleCommand);
exports.CCDCommand = c;
var u = require("./1901.js");
o.classImplementsInterfaces(c, "IExecCommand");