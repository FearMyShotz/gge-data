Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./10.js");
var l = function (e) {
  function AGBCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(AGBCommand, e);
  Object.defineProperty(AGBCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_ACTIVATE_GLOBAL_EFFECT_BOOSTER_EVENT;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  AGBCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return AGBCommand;
}(r.CastleCommand);
exports.AGBCommand = l;
o.classImplementsInterfaces(l, "IExecCommand");