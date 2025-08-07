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
  function MRMCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(MRMCommand, e);
  Object.defineProperty(MRMCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_REMOVE_MOVEMENT;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  MRMCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        r.CastleModel.armyData.parse_MRM(i.MID);
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return MRMCommand;
}(l.CastleCommand);
exports.MRMCommand = c;
o.classImplementsInterfaces(c, "IExecCommand");