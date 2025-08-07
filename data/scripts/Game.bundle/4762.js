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
  function BOICommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(BOICommand, e);
  Object.defineProperty(BOICommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_BOOSTER_INFO;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  BOICommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        r.CastleModel.boostData.parse_BOI(i);
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return BOICommand;
}(l.CastleCommand);
exports.BOICommand = c;
o.classImplementsInterfaces(c, "IExecCommand");