Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./6.js");
var l = require("./18.js");
var c = require("./7.js");
var u = require("./680.js");
var d = require("./4.js");
var p = require("./5220.js");
var h = require("./5221.js");
var g = require("./10.js");
var C = function (e) {
  function FWDCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(FWDCommand, e);
  Object.defineProperty(FWDCommand.prototype, "cmdId", {
    get: function () {
      return c.ClientConstSF.S2C_SHOW_WELCOMEDATA;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(g.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  FWDCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case s.ERROR.ALL_OK:
        if (l.ClientConstCastle.WELCOME_FEATURE_ENABLED) {
          var i = JSON.parse(t[1]).FLT;
          i.sortOn("FTS", Array.NUMERIC | Array.DESCENDING);
          var n = [];
          if (i != null) {
            for (var a = 0, c = i; a < c.length; a++) {
              var g = c[a];
              if (g !== undefined) {
                var C = new p.TeaserVO();
                C.fillFromParamObject(g);
                n.push(C);
              }
            }
          }
          var f = r.int(n[0].id);
          var O = r.int(d.CastleModel.settingsData.homeScreenID);
          if ((f != O && O != -1 || d.CastleModel.settingsData.isHomeScreenVisible) && d.CastleModel.tutorialData.isTutorialFinished() && !this.env.isOnSpecialServer) {
            _.CastleDialogHandler.getInstance().registerDefaultDialogs(m.CastleWelcomeDialog, new h.CastleWelcomeDialogProperties(n), true, o.BasicDialogHandler.PRIORITY_TOP);
            d.CastleModel.settingsData.isHomeScreenVisible = true;
          }
          d.CastleModel.settingsData.homeScreenID = f;
          this.controller.dispatchEvent(new u.CastleLoginEvent(u.CastleLoginEvent.LOGIN_PROCESS_COMPLETE));
        }
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return FWDCommand;
}(g.CastleCommand);
exports.FWDCommand = C;
var _ = require("./9.js");
var m = require("./5222.js");
a.classImplementsInterfaces(C, "IExecCommand");