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
  function KGTCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(KGTCommand, e);
  Object.defineProperty(KGTCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_KINGDOM_GOODS_TRANSFER;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  KGTCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        r.CastleModel.currencyData.parseGCU(i.gcu);
        r.CastleModel.areaData.activeArea.updater.parseGRC(i.grc);
        r.CastleModel.kingdomData.parse_KPI(i.kpi);
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return KGTCommand;
}(l.CastleCommand);
exports.KGTCommand = c;
o.classImplementsInterfaces(c, "IExecCommand");