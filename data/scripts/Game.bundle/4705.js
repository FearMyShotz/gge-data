Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./102.js");
var l = require("./4.js");
var c = require("./10.js");
var u = function (e) {
  function AUGCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(AUGCommand, e);
  Object.defineProperty(AUGCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_ALLIANCE_UPGRADE;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  AUGCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        var n = l.CastleModel.allianceData.myAllianceVO;
        if (n) {
          n.parseStorageFromServer(i.STO);
          n.parseABL(i.ABL);
          l.CastleModel.allianceData.dispatchEvent(new r.CastleAllianceDataEvent(r.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, n));
        }
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return AUGCommand;
}(c.CastleCommand);
exports.AUGCommand = u;
o.classImplementsInterfaces(u, "IExecCommand");