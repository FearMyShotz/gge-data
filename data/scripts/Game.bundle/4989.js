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
  function GATPCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(GATPCommand, e);
  Object.defineProperty(GATPCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_GET_ACTIVE_TRAINING_PROGRAM_INFO;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  GATPCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        r.CastleModel.officerSchoolData.parse_GATP(i);
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return GATPCommand;
}(l.CastleCommand);
exports.GATPCommand = c;
o.classImplementsInterfaces(c, "IExecCommand");