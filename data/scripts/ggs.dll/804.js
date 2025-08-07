Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./120.js");
var s = require("./5.js");
var r = require("./8.js");
var o = require("./49.js");
var l = require("./4.js");
var u = require("./25.js");
var c = require("./12.js");
var _ = require("./6.js");
var d = require("./3.js");
var m = function (e) {
  function BasicLogoutCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i.__extends(BasicLogoutCommand, e);
  BasicLogoutCommand.prototype.execute = function (e = null) {
    s.EnvGlobalsHandler.globals.isFirstVisitOfGGS = false;
    r.BasicController.getInstance().onLogOut();
    l.BasicModel.sessionData.resetLoggedinTimer();
    l.BasicModel.smartfoxClient.logout();
    u.BasicLayoutManager.getInstance().revertFullscreen();
    d.ExternalInterface.call(o.JavascriptFunctionName.ON_LOGOUT);
    if (s.EnvGlobalsHandler.globals.isSSO) {
      c.CommandController.instance.executeCommand(r.BasicController.REQUEST_SOCIAL_LOGIN_KEYS);
    }
    if (BasicLogoutCommand.DELETE_LOGIN_DATA_ON_LOGOUT) {
      l.BasicModel.localData.deleteLoginData();
    }
    a.PerformanceMonitoringService.getInstance().stopMonitoring();
  };
  BasicLogoutCommand.DELETE_LOGIN_DATA_ON_LOGOUT = true;
  return BasicLogoutCommand;
}(_.SimpleCommand);
exports.BasicLogoutCommand = m;