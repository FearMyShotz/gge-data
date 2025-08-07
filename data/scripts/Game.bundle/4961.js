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
  function TASCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(TASCommand, e);
  Object.defineProperty(TASCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_TAKE_SOLDIERS;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  TASCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        r.CastleModel.militaryData.parse_GUI(i);
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return TASCommand;
}(l.CastleCommand);
exports.TASCommand = c;
o.classImplementsInterfaces(c, "IExecCommand");