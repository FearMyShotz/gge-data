Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./192.js");
var l = require("./4.js");
var c = require("./10.js");
var u = function (e) {
  function KSTCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(KSTCommand, e);
  Object.defineProperty(KSTCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_KINGDOM_SKIP_TRANSFER;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  KSTCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        l.CastleModel.currencyData.parseGCU(i.gcu);
        l.CastleModel.areaData.activeArea.updater.parseGRC(i.grc);
        l.CastleModel.militaryData.parse_GUI(i.gui);
        l.CastleModel.kingdomData.parse_KPI(i.kpi);
        break;
      default:
        this.showErrorDialog(e, t);
        l.CastleModel.kingdomData.dispatchEvent(new r.CastleKingdomEvent(r.CastleKingdomEvent.KINGDOMDATA_ARRIVED));
    }
    return false;
  };
  return KSTCommand;
}(c.CastleCommand);
exports.KSTCommand = u;
o.classImplementsInterfaces(u, "IExecCommand");