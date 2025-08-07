Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = function (e) {
  function CastleInitLoggerCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CastleInitLoggerCommand, e);
  CastleInitLoggerCommand.prototype.configureLogger = function () {};
  return CastleInitLoggerCommand;
}(o.BasicInitLoggerCommand);
exports.CastleInitLoggerCommand = s;
a.classImplementsInterfaces(s, "ISimpleCommand");