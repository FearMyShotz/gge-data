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
  function CDECommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CDECommand, e);
  Object.defineProperty(CDECommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_COLOSSUS_DEPOSIT_RESOURCES;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CDECommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        this.layoutManager.hideDialog(u.CastleColossusDonateDialog);
        var i = JSON.parse(t[1]);
        r.CastleModel.specialEventData.parse_CHE(i.che);
        r.CastleModel.areaData.activeArea.updater.parseGRC(i.grc);
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return CDECommand;
}(l.CastleCommand);
exports.CDECommand = c;
var u = require("./1902.js");
o.classImplementsInterfaces(c, "IExecCommand");