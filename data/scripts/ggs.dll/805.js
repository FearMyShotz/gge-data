Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./9.js");
var s = require("./4.js");
var r = function (e) {
  function BasicLostPasswordCommand(t = false) {
    var n = e.call(this, t) || this;
    n.ALL_OK = 0;
    n.GENERAL_ERROR = 1;
    n.PLAYER_NOT_FOUND = 2;
    return n;
  }
  i.__extends(BasicLostPasswordCommand, e);
  BasicLostPasswordCommand.prototype.execute = function (e = null) {
    this.errorCode = e;
    switch (this.errorCode) {
      case this.ALL_OK:
        this.all_ok();
        break;
      case this.GENERAL_ERROR:
        this.general_error();
        break;
      case this.PLAYER_NOT_FOUND:
        this.player_not_found();
        break;
      default:
        this.general_error();
    }
  };
  BasicLostPasswordCommand.prototype.all_ok = function () {};
  BasicLostPasswordCommand.prototype.general_error = function () {};
  BasicLostPasswordCommand.prototype.player_not_found = function () {};
  BasicLostPasswordCommand.sendMessage = function (e) {
    var t = {
      MAIL: e
    };
    s.BasicModel.smartfoxClient.sendMessage(a.BasicSmartfoxConstants.C2S_LOST_PASSWORD_EVENT, [JSON.stringify(t)]);
  };
  return BasicLostPasswordCommand;
}(require("./6.js").SimpleCommand);
exports.BasicLostPasswordCommand = r;