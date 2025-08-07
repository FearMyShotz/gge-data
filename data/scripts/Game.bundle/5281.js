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
var d = require("./1.js");
var p = require("./118.js");
var h = require("./4.js");
var g = p.getLogger("Connection.CastleCheckMaintenanceCommand");
var C = function (e) {
  function CastleCheckMaintenanceCommand() {
    CONSTRUCTOR_HACK;
    return e.call(this) || this;
  }
  n.__extends(CastleCheckMaintenanceCommand, e);
  CastleCheckMaintenanceCommand.prototype.executeNWMaintenance = function () {
    g.debug("Server under maintenance: show Maintanance screen");
    this.showMaintenanceScreen();
  };
  CastleCheckMaintenanceCommand.prototype.executeSocialMaintenance = function () {
    g.debug("Social/Network platform Maintenance: Server under maintenance: show Maintanance screen");
    this.executeNWMaintenance();
  };
  CastleCheckMaintenanceCommand.prototype.clearMaintenanceMain = function () {
    m.CastleLayoutManager.getInstance().hideDialog(f.CastleNoConnectionDialog);
    e.prototype.clearMaintenance.call(this);
  };
  CastleCheckMaintenanceCommand.prototype.showMaintenanceScreen = function () {
    l.ClientFunnelTrackingController.getInstance().trackState(r.ClientFunnelGameStates.MAINTENANCE_SCREEN);
    if (this.env.isTest) {
      _.CastleDialogHandler.getInstance().registerDialogs(O.CastleWorldSelectionDialog);
    } else {
      _.CastleDialogHandler.getInstance().registerDialogs(f.CastleNoConnectionDialog, new s.BasicReconnectDialogProperties(a.BasicModel.languageData.getTextById(u.GenericTextIds.ALERT_CONNECTION_FAILED_TITLE), a.BasicModel.languageData.getTextById(u.GenericTextIds.ALERT_CONNECTION_FAILED_COPY), null, a.BasicModel.languageData.getTextById(u.GenericTextIds.BUTTON_RECONNECT)));
    }
  };
  CastleCheckMaintenanceCommand.prototype.executeNoMaintenance = function () {
    try {
      e.prototype.executeNoMaintenance.call(this);
      var t = c.EnvGlobalsHandler.globals;
      var i = h.CastleModel.smartfoxClient.isConnected;
      g.debug("server isConnected: " + i + " - game should useAutologin:" + t.useAutoLogin + " and login isKeyBased: " + t.loginIsKeyBased);
      if (!!t.loginIsKeyBased || !t.useAutoLogin) {
        g.debug("server is NOT under maintenance --> show LoginScreen");
      }
      if (t.useAutoLogin) {
        g.debug("server is connected and NOT under maintenance.  -->  proceed to autologin");
      }
    } catch (e) {
      g.error(e);
      window.bugsnagClient.notify(e);
    }
  };
  return CastleCheckMaintenanceCommand;
}(o.BasicCheckMaintenanceCommand);
exports.CastleCheckMaintenanceCommand = C;
var _ = require("./9.js");
var m = require("./17.js");
var f = require("./1803.js");
var O = require("./1115.js");
d.classImplementsInterfaces(C, "ISimpleCommand");