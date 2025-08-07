Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./6.js");
var s = require("./2.js").getLogger("BasicHandleServerErrorCommand");
var r = function (e) {
  function BasicHandleServerErrorCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i.__extends(BasicHandleServerErrorCommand, e);
  BasicHandleServerErrorCommand.prototype.execute = function (e = null) {
    var t = e;
    this.handleGameSpecificServerError(t);
  };
  BasicHandleServerErrorCommand.prototype.handleGameSpecificServerError = function (e) {
    s.warn("this method is empty since the as file is also empty");
  };
  return BasicHandleServerErrorCommand;
}(a.SimpleCommand);
exports.BasicHandleServerErrorCommand = r;