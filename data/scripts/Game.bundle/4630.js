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
var u = require("./2.js");
var d = require("./2.js");
var p = require("./1.js");
var h = require("./3.js");
var g = require("./4.js");
var C = function (e) {
  function CastleConnectionLostCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CastleConnectionLostCommand, e);
  CastleConnectionLostCommand.prototype.execute = function (e = null) {
    if (this.layoutManager.currentState != a.BasicLayoutManager.STATE_STARTSCREEN) {
      var t = u.EnvGlobalsHandler.globals;
      t.isFacebook;
      if (s.BasicModel.smartfoxClient.userForcedDisconnect) {
        if (t.underAgeConnectionLost && t.isIdentityManagementActive) {
          g.CastleModel.settingsData.isDestroyingGame = true;
          l.CommandController.instance.executeCommand(o.BasicController.COMMAND_DESTROY_GAME);
          g.CastleModel.settingsData.isDestroyingGame = false;
          this.layoutManager.state = a.BasicLayoutManager.STATE_CONNECT;
          _.CastleDialogHandler.getInstance().registerDialogs(f.CastleReconnectDialog, new r.BasicReconnectDialogProperties(s.BasicModel.languageData.getTextById("generic_alert_information"), s.BasicModel.languageData.getTextById("generic_alert_korea_logoutMessage"), this.bindFunction(this.onReconnect), s.BasicModel.languageData.getTextById("generic_btn_reconnect")));
        } else {
          g.CastleModel.settingsData.isDestroyingGame = true;
          l.CommandController.instance.executeCommand(o.BasicController.COMMAND_DESTROY_GAME);
          g.CastleModel.settingsData.isDestroyingGame = false;
          this.layoutManager.state = a.BasicLayoutManager.STATE_CONNECT;
          _.CastleDialogHandler.getInstance().registerDialogs(f.CastleReconnectDialog, new r.BasicReconnectDialogProperties(h.Localize.text("generic_alert_loggedout_title"), h.Localize.text("dialog_logout_copy"), this.bindFunction(this.onReconnect), h.Localize.text("generic_btn_reconnect")));
        }
      } else {
        g.CastleModel.settingsData.isDestroyingGame = true;
        l.CommandController.instance.executeCommand(o.BasicController.COMMAND_DESTROY_GAME);
        g.CastleModel.settingsData.isDestroyingGame = false;
        this.layoutManager.state = a.BasicLayoutManager.STATE_CONNECT;
        if (g.CastleModel.userData.connectToSpecialServer || u.EnvGlobalsHandler.globals.isOnSpecialServer) {
          this.onReconnect();
        } else {
          _.CastleDialogHandler.getInstance().registerDialogs(c.CommonDialogNames.ReconnectDialog_NAME, new r.BasicReconnectDialogProperties(s.BasicModel.languageData.getTextById("generic_alert_connection_lost_title"), s.BasicModel.languageData.getTextById("generic_alert_connection_lost_copy"), this.bindFunction(this.onReconnect), s.BasicModel.languageData.getTextById("generic_btn_reconnect")));
        }
      }
    }
  };
  CastleConnectionLostCommand.prototype.onReconnect = function () {
    l.CommandController.instance.executeCommand(o.BasicController.COMMAND_CONNECT_TO_INSTANCEVO, s.BasicModel.instanceProxy.selectedInstanceVO);
    l.CommandController.instance.executeCommand(o.BasicController.COMMAND_INITALIZE_CONTROLLER);
    O.GZPTrackingController.getInstance().startTracking();
  };
  Object.defineProperty(CastleConnectionLostCommand.prototype, "layoutManager", {
    get: function () {
      return m.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleConnectionLostCommand.prototype, "env", {
    get: function () {
      return u.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  return CastleConnectionLostCommand;
}(d.SimpleCommand);
exports.CastleConnectionLostCommand = C;
var _ = require("./9.js");
var m = require("./17.js");
var f = require("./1813.js");
var O = require("./1925.js");
p.classImplementsInterfaces(C, "ISimpleCommand");