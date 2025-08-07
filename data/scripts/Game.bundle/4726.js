Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./10.js");
var l = function (e) {
  function RCACommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(RCACommand, e);
  Object.defineProperty(RCACommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_ROYAL_CAPITAL_ALLIANCE;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  RCACommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        JSON.parse(t[1]);
    }
    return false;
  };
  return RCACommand;
}(r.CastleCommand);
exports.RCACommand = l;
o.classImplementsInterfaces(l, "IExecCommand");