Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./447.js");
var s = require("./23.js");
var r = require("./12.js");
var o = require("./9.js");
var l = require("./26.js");
var u = require("./68.js");
var c = require("./4.js");
var _ = require("./8.js");
var d = require("./183.js");
var m = function (e) {
  function VCKCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i.__extends(VCKCommand, e);
  Object.defineProperty(VCKCommand.prototype, "cmdId", {
    get: function () {
      return o.BasicSmartfoxConstants.C2S_VERSION_CHECK;
    },
    enumerable: true,
    configurable: true
  });
  VCKCommand.prototype.executeCommand = function (e, t) {
    this.env.buildNumberServer = t[2];
    this.env.versionInformation.buildNumberServer = t[2];
    if (e == u.BasicErrorConstants.ALL_OK) {
      this.handleAllOk();
    } else if (e == VCKCommand.VERSION_TOO_LOW) {
      this.handleVersionToLow();
      this.logError(e);
    } else if (e == VCKCommand.VERSION_TOO_HIGH) {
      this.handleVersionToHigh();
      this.logError(e);
    } else {
      r.CommandController.instance.executeCommand(_.BasicController.COMMAND_HANDLE_SERVER_ERROR, new d.ServerErrorVO(e, t, this.cmdId));
      this.logError(e);
    }
    return false;
  };
  VCKCommand.prototype.handleAllOk = function () {
    if (this.env.isSSO) {
      c.BasicModel.smartfoxClient.sendMessage(o.BasicSmartfoxConstants.C2S_SOCIAL_PLAYER_EXISTS, [this.env.pln, this.env.sig]);
    } else {
      r.CommandController.instance.executeCommand(_.BasicController.CHOOSE_LOGIN_METHOD);
    }
  };
  VCKCommand.prototype.logError = function (e) {
    s.ExternalLog.logger.log(new a.VersionErrorLOFactory(a.VersionErrorLOFactory.OLD_CLIENT_VERSION_ERROR, this.env.buildNumberServer));
  };
  VCKCommand.prototype.handleVersionToLow = function () {};
  VCKCommand.prototype.handleVersionToHigh = function () {};
  VCKCommand.VERSION_TOO_LOW = 1;
  VCKCommand.VERSION_TOO_HIGH = 2;
  return VCKCommand;
}(l.BasicCommand);
exports.VCKCommand = m;