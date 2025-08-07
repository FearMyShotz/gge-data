Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./6.js");
var r = require("./7.js");
var l = require("./4.js");
var c = require("./10.js");
var u = function (e) {
  function GDRCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(GDRCommand, e);
  Object.defineProperty(GDRCommand.prototype, "cmdId", {
    get: function () {
      return r.ClientConstSF.S2C_GET_DONATION_RESOURCES;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  GDRCommand.prototype.executeCommand = function (t, i) {
    return e.prototype.executeCommand.call(this, t, i);
  };
  GDRCommand.prototype.exec = function (e) {
    var t = s.int(e[0]);
    var i = e[1];
    switch (t) {
      case a.ERROR.ALL_OK:
        var n = JSON.parse(i[1]);
        if (l.CastleModel.userData) {
          l.CastleModel.currencyData.parseSCE(n.sce);
        }
        l.CastleModel.areaData.activeArea.updater.parseGRC(n.grc);
        break;
      default:
        this.showErrorDialog(t, i);
    }
  };
  return GDRCommand;
}(c.CastleCommand);
exports.GDRCommand = u;
o.classImplementsInterfaces(u, "IExecCommand");