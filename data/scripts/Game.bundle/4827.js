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
  function IOTCommand() {
    return e.call(this) || this;
  }
  n.__extends(IOTCommand, e);
  Object.defineProperty(IOTCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_INFO_ON_TITLES;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  IOTCommand.prototype.executeCommand = function (e, t) {
    if (e == a.ERROR.ALL_OK) {
      var i = JSON.parse(t[1]);
      r.CastleModel.titleData.parseIOT(i);
    }
    return false;
  };
  return IOTCommand;
}(l.CastleCommand);
exports.IOTCommand = c;
o.classImplementsInterfaces(c, "IExecCommand");