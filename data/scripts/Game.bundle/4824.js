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
  function DDICommand() {
    return e.call(this) || this;
  }
  n.__extends(DDICommand, e);
  Object.defineProperty(DDICommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_DONATE_DONATION_ITEM;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  DDICommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        r.CastleModel.donationEventData.parseGDTI(i);
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return DDICommand;
}(l.CastleCommand);
exports.DDICommand = c;
o.classImplementsInterfaces(c, "IExecCommand");