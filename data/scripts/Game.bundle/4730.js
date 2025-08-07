Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./102.js");
var l = require("./4.js");
var c = require("./10.js");
var u = createjs.Event;
var d = function (e) {
  function SAECommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(SAECommand, e);
  Object.defineProperty(SAECommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_SET_ALLIANCE_EMBLEM;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  SAECommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        l.CastleModel.allianceData.dispatchEvent(new u(r.CastleAllianceDataEvent.ALLIANCE_CREST_SAVED_OK, false, false));
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return SAECommand;
}(c.CastleCommand);
exports.SAECommand = d;
o.classImplementsInterfaces(d, "IExecCommand");