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
  function GDTICommand() {
    return e.call(this) || this;
  }
  n.__extends(GDTICommand, e);
  Object.defineProperty(GDTICommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_GET_DONATION_TYPE_INFO;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  GDTICommand.prototype.executeCommand = function (e, t) {
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
  return GDTICommand;
}(l.CastleCommand);
exports.GDTICommand = c;
o.classImplementsInterfaces(c, "IExecCommand");