Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./1071.js");
var l = require("./10.js");
var c = function (e) {
  function FUCCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(FUCCommand, e);
  Object.defineProperty(FUCCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_GET_CAMP_UNIT_CAPACITY;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  FUCCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        this.controller.dispatchEvent(new r.CastleUnitCapacityEvent(r.CastleUnitCapacityEvent.UNIT_CAPACITY_CHANGED, Math.max(i.FUC, 0)));
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return FUCCommand;
}(l.CastleCommand);
exports.FUCCommand = c;
o.classImplementsInterfaces(c, "IExecCommand");