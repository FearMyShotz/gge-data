Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./4.js");
var l = require("./516.js");
var c = require("./10.js");
var u = function (e) {
  function EGECommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(EGECommand, e);
  Object.defineProperty(EGECommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_EXTRACT_GEM;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  EGECommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        r.CastleModel.gemData.gemExtractionSuccess();
        r.CastleModel.smartfoxClient.sendCommandVO(new l.C2SGetEquipmentInventory());
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return EGECommand;
}(c.CastleCommand);
exports.EGECommand = u;
o.classImplementsInterfaces(u, "IExecCommand");