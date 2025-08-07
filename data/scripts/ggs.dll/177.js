Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = function (e) {
  function BasicFirstSessionTrackingCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i.__extends(BasicFirstSessionTrackingCommand, e);
  Object.defineProperty(BasicFirstSessionTrackingCommand.prototype, "commandIsAllowed", {
    get: function () {
      return this.env.doUserTunnelTracking && !this.env.isLocal;
    },
    enumerable: true,
    configurable: true
  });
  return BasicFirstSessionTrackingCommand;
}(require("./52.js").BasicTrackingCommand);
exports.BasicFirstSessionTrackingCommand = a;