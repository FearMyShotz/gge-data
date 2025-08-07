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
  function UPANCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(UPANCommand, e);
  Object.defineProperty(UPANCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_UPDATE_PRESET_NAME;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  UPANCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        r.CastleModel.fightPresetData.handlePresetUpdated();
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return UPANCommand;
}(l.CastleCommand);
exports.UPANCommand = c;
o.classImplementsInterfaces(c, "IExecCommand");