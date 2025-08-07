Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./2.js");
var c = require("./2.js");
var u = require("./1.js");
var d = require("./5.js");
var p = require("./3.js");
var h = require("./7.js");
var g = require("./4672.js");
var C = require("./4.js");
var _ = require("./10.js");
var m = function (e) {
  function VCKLegacyCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(VCKLegacyCommand, e);
  Object.defineProperty(VCKLegacyCommand.prototype, "cmdId", {
    get: function () {
      return h.ClientConstSF.S2C_VERSION_CHECK;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(_.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  VCKLegacyCommand.prototype.executeCommand = function (e, t) {
    this.env.buildNumberServer = t[1];
    switch (e) {
      case d.ERROR.ALL_OK:
        this.layoutManager.showServerAndClientVersion();
        this.controller.dispatchEvent(new g.VCKCommandOkEvent(g.VCKCommandOkEvent.VCK_OK));
        if (this.env.accessKey != "" || this.env.pln != "" && this.env.sig != "" && !this.env.isFacebook) {
          r.CommandController.instance.executeCommand(o.BasicController.COMMAND_LOGIN);
          r.CommandController.instance.executeCommand(E.IngameClientCommands.INIT_EQUIPMENT_FAVORITES);
        } else {
          if (this.layoutManager.currentState == a.BasicLayoutManager.STATE_STARTSCREEN) {
            return true;
          }
          if (C.CastleModel.smartfoxClient.userForcedDisconnect || C.CastleModel.localData.readLoginDataUsername() == null || C.CastleModel.localData.readLoginDataUsername() == "" || C.CastleModel.localData.readLoginDataLoginToken() == null || C.CastleModel.localData.readLoginDataLoginToken() == "") {
            this.layoutManager.state = a.BasicLayoutManager.STATE_STARTSCREEN;
          } else {
            C.CastleModel.userData.userName = C.CastleModel.localData.readLoginDataUsername();
            C.CastleModel.userData.loginToken = C.CastleModel.localData.readLoginDataLoginToken();
            r.CommandController.instance.executeCommand(o.BasicController.COMMAND_LOGIN);
            r.CommandController.instance.executeCommand(E.IngameClientCommands.INIT_EQUIPMENT_FAVORITES);
          }
        }
        return true;
      case d.ERROR.GENERAL_ERROR:
      case d.ERROR.INVALID_PARAMETER_VALUE:
        f.CastleDialogHandler.getInstance().registerDialogs(O.CastleStandardOkDialog, new s.BasicStandardOkDialogProperties(p.Localize.text("generic_versioncheck_error"), p.Localize.text("generic_versioncheck_errorcode_1")));
        this.logError(e);
        break;
      default:
        this.showErrorDialog(e, t);
        this.logError(e);
    }
    return false;
  };
  VCKLegacyCommand.prototype.logError = function (e) {
    l.ExternalLog.logger.log(new c.VersionErrorLOFactory(c.VersionErrorLOFactory.OLD_CLIENT_VERSION_ERROR, this.env.buildNumberServer));
  };
  return VCKLegacyCommand;
}(_.CastleCommand);
exports.VCKLegacyCommand = m;
var f = require("./9.js");
var O = require("./38.js");
var E = require("./29.js");
u.classImplementsInterfaces(m, "IExecCommand");