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
  function UASCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(UASCommand, e);
  Object.defineProperty(UASCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_UNLOCK_PREDEFINED_ATTACK_SETUP;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  UASCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        r.CastleModel.fightPresetData.handleSuccessfullyUnlocked();
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return UASCommand;
}(l.CastleCommand);
exports.UASCommand = c;
o.classImplementsInterfaces(c, "IExecCommand");