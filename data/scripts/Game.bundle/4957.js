Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./129.js");
var l = require("./4.js");
var c = require("./10.js");
var u = function (e) {
  function RUECommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(RUECommand, e);
  Object.defineProperty(RUECommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_RECEIVED_UNIT;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  RUECommand.prototype.executeCommand = function (e, t) {
    var i;
    switch (e) {
      case a.ERROR.ALL_OK:
        i = JSON.parse(t[1]);
        l.CastleModel.militaryData.parse_rue(i);
        l.CastleModel.userCastleListDetailed.parse_rue(i);
        this.controller.dispatchEvent(new r.CastleMilitaryDataEvent(r.CastleMilitaryDataEvent.UNIT_UPDATED, [i]));
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return RUECommand;
}(c.CastleCommand);
exports.RUECommand = u;
o.classImplementsInterfaces(u, "IExecCommand");