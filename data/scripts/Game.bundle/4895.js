Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./10.js");
var l = function (e) {
  function MBSCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(MBSCommand, e);
  Object.defineProperty(MBSCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_MARK_BUILDING_IN_STORAGE;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  MBSCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return MBSCommand;
}(r.CastleCommand);
exports.MBSCommand = l;
o.classImplementsInterfaces(l, "IExecCommand");