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
var d = require("./1.js");
var p = require("./266.js");
var h = require("./804.js");
var g = require("./15.js");
var C = require("./4.js");
var _ = require("./193.js");
var m = require("./176.js");
var f = require("./353.js");
var O = require("./919.js");
var E = require("./1299.js");
var y = function (e) {
  function CastleLogoutCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CastleLogoutCommand, e);
  CastleLogoutCommand.prototype.execute = function (t = null) {
    g.CastleBasicController.getInstance().dispatchEvent(new h.CastleLogoutEvent(h.CastleLogoutEvent.LOGOUT_TRIGGERED));
    c.BasicLogoutCommand.DELETE_LOGIN_DATA_ON_LOGOUT = !a.EnvGlobalsHandler.globals.isOnSpecialServer;
    e.prototype.execute.call(this, t);
    p.cxfResetCommandCache();
    m.CastleDataHolder.instance.gbdParsed = false;
    m.CastleDataHolder.instance.requestUptOnWorldmapSwitch = false;
    C.CastleModel.userData.joinCastleCount = 0;
    f.CastleEquipmentFavoritesMicroservice.Instance.reset();
    O.CastleDeleteAccountMicroservice.Instance.reset();
    E.CastleWebShopAccountIDMicroservice.Instance.reset();
    C.CastleModel.userData.resetApiToken();
    C.CastleModel.userData.resetFacebookData();
    _.CastleFacebookModule.reset();
    r.BasicModel.networkCookie.facebookAccessToken = "";
    if (a.EnvGlobalsHandler.globals.isOnSpecialServer) {
      C.CastleModel.userData.specialServerLoginToken = null;
      C.CastleModel.userData.resetConnectToFlags();
      this.changeInstanceFromTempToHome();
      return;
    }
    if (u.ExternalInterface.available) {
      u.ExternalInterface.call("ggsOnLogout");
    }
    C.CastleModel.localData.deleteLoginData();
    l.BasicContextMenuController.instance.enableContextMenuItem(l.BasicContextMenuController.SUPPORT_LABEL);
  };
  CastleLogoutCommand.prototype.changeInstanceFromTempToHome = function () {
    C.CastleModel.userData.resetConnectToFlags();
    C.CastleModel.userData.specialServerLoginToken = null;
    window.ggs.worldAssignment.selectInstance(a.EnvGlobalsHandler.globals.originalInstanceVOBeforeSpecialServer);
    s.CommandController.instance.executeCommand(o.BasicController.COMMAND_CHECK_MAINTENANCE, o.BasicController.COMMAND_CONNECT_CLIENT);
  };
  return CastleLogoutCommand;
}(c.BasicLogoutCommand);
exports.CastleLogoutCommand = y;
d.classImplementsInterfaces(y, "ISimpleCommand");