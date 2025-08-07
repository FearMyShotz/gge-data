Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./370.js");
var l = require("./4.js");
var c = require("./10.js");
var u = function (e) {
  function GBCCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(GBCCommand, e);
  Object.defineProperty(GBCCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_GET_PACKAGE_BUY_COUNT;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  GBCCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        if (i.PL) {
          l.CastleModel.eventPackageData.parseGBC(i.PL);
        }
        this.controller.dispatchEvent(new r.CastlePackageEvent(r.CastlePackageEvent.PACKAGEINFO_UPDATED));
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return GBCCommand;
}(c.CastleCommand);
exports.GBCCommand = u;
o.classImplementsInterfaces(u, "IExecCommand");