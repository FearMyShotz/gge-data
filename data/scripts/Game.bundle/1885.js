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
var p = require("./2.js");
var h = require("./1.js");
var g = require("./266.js");
var C = require("./37.js");
var _ = require("./160.js");
var m = require("./15.js");
var f = require("./4.js");
var O = require("./176.js");
var E = require("./4231.js");
var y = require("./4232.js");
var b = require("./9.js");
var D = require("./17.js");
var I = require("./1211.js");
var T = function (e) {
  function CastleConnectToSpecialServerCommand() {
    var t = e !== null && e.apply(this, arguments) || this;
    t.BLOCK_ACCESS = false;
    return t;
  }
  n.__extends(CastleConnectToSpecialServerCommand, e);
  CastleConnectToSpecialServerCommand.prototype.execute = function (e = null) {
    f.CastleModel.userData.resetApiToken();
    if (e == "login") {
      this.doLogin();
    } else {
      this.connectToSpecialServer();
    }
  };
  CastleConnectToSpecialServerCommand.prototype.connectToSpecialServer = function () {
    if (!_.FlashBlockHelper.BLOCK_ACCESS || this.env.isTest) {
      f.CastleModel.smartfoxClient.sendCommandVO(new E.C2SGetTemporaryServerLoginTokenVO(this.externalServerID));
      this.controller.addEventListener(C.CastleServerMessageArrivedEvent.SPECIAL_SEVER_INFO_ARRIVED, this.bindFunction(this.onTempServerInfoArrived));
    } else {
      b.CastleDialogHandler.getInstance().registerDefaultDialogs(I.CastleDarkOkLabeledDialog, new o.BasicStandardOkDialogProperties("dialog_clientVersion_switch_confirmDialog_header", this.blockerTextID, this.bindFunction(this.onConfirmSwitch), "dialog_clientVersion_confirmSwitch", this.bindFunction(this.onClose)));
    }
  };
  CastleConnectToSpecialServerCommand.prototype.onClose = function (e = null) {
    D.CastleLayoutManager.getInstance().hideAllDialogs();
  };
  Object.defineProperty(CastleConnectToSpecialServerCommand.prototype, "blockerTextID", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  CastleConnectToSpecialServerCommand.prototype.onConfirmSwitch = function (e = null) {
    o.ClientFunnelTrackingController.getInstance().trackState("SWITCH_TO_FLASH");
    d.ExternalInterface.call("ggsChangeGameClient");
  };
  CastleConnectToSpecialServerCommand.prototype.onTempServerInfoArrived = function (e) {
    this.controller.removeEventListener(C.CastleServerMessageArrivedEvent.SPECIAL_SEVER_INFO_ARRIVED, this.bindFunction(this.onTempServerInfoArrived));
    this.loginToken = f.CastleModel.userData.specialServerLoginToken;
    this.env.isSpecialServerConnectStarted = true;
    this.doLogout();
    this.changeInstance();
  };
  CastleConnectToSpecialServerCommand.prototype.doLogout = function () {
    o.EnvGlobalsHandler.globals.isFirstVisitOfGGS = false;
    l.BasicController.getInstance().onLogOut();
    p.BasicModel.sessionData.resetLoggedinTimer();
    p.BasicModel.smartfoxClient.logout();
    u.BasicLayoutManager.getInstance().revertFullscreen();
    g.cxfResetCommandCache();
    O.CastleDataHolder.instance.gbdParsed = false;
    f.CastleModel.userData.joinCastleCount = 0;
    f.CastleModel.userData.persistentLogin = false;
  };
  CastleConnectToSpecialServerCommand.prototype.doLogin = function () {
    var e = new y.C2STemporaryServerLoginVO(f.CastleModel.userData.specialServerLoginToken);
    a.BasicDialogHandler.getInstance().blockDialogs = true;
    f.CastleModel.smartfoxClient.sendCommandVO(e);
  };
  CastleConnectToSpecialServerCommand.prototype.changeInstance = function () {
    f.CastleModel.userData.resetConnectToFlags();
    this.setConnectFlag();
    f.CastleModel.userData.specialServerLoginToken = this.loginToken;
    this.env.originalInstanceVOBeforeSpecialServer = p.BasicModel.instanceProxy.selectedInstanceVO;
    var e = this.env.specialServer;
    var t = window.ggs.worldAssignment;
    if (e.instanceId != t.facade.selectedNetworkInstance.instanceId) {
      t.selectInstance(e);
    }
    r.info("Connect to instance: " + e);
    c.CommandController.instance.executeCommand(l.BasicController.COMMAND_CHECK_MAINTENANCE, l.BasicController.COMMAND_CONNECT_CLIENT);
  };
  Object.defineProperty(CastleConnectToSpecialServerCommand.prototype, "externalServerID", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  CastleConnectToSpecialServerCommand.prototype.setConnectFlag = function () {};
  Object.defineProperty(CastleConnectToSpecialServerCommand.prototype, "env", {
    get: function () {
      return o.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleConnectToSpecialServerCommand.prototype, "controller", {
    get: function () {
      return m.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return CastleConnectToSpecialServerCommand;
}(s.SimpleCommand);
exports.CastleConnectToSpecialServerCommand = T;
h.classImplementsInterfaces(T, "ISimpleCommand");