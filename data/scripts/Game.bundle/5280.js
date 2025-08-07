Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./1.js");
var c = require("./1.js");
var u = require("./5.js");
var d = require("./342.js");
var p = require("./4.js");
var h = function (e) {
  function CastleOpenForumCommand() {
    var t = this;
    t.basicOpenForumCommand = new o.BasicOpenForumCommand();
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(CastleOpenForumCommand, e);
  CastleOpenForumCommand.prototype.execute = function (e) {
    var t;
    if (e === undefined) {
      e = null;
    }
    if (s.EnvGlobalsHandler.globals.networkNewsByJS || !s.EnvGlobalsHandler.globals.useexternallinks || p.CastleModel.userData.email != u.PlayerConst.DEFAULT_MAIL) {
      if (d.ClientConstInstanceIDs.isBetaInstance()) {
        t = new l.URLRequest(CastleOpenForumCommand.BETA_FORUM_URL);
        a.BrowserUtil.executeNavigateToURL(t, "_blank");
      } else if (s.EnvGlobalsHandler.globals.isClosedBeta) {
        t = new l.URLRequest(CastleOpenForumCommand.CLOSED_BETA_FORUM_URL);
        a.BrowserUtil.executeNavigateToURL(t, "_blank");
      } else {
        this.basicOpenForumCommand.execute(e);
      }
    } else if (!s.EnvGlobalsHandler.globals.isOnSpecialServer) {
      g.CastleDialogHandler.getInstance().registerDefaultDialogs(C.OptionsDialog, new _.OptionsDialogProperties(C.OptionsDialog.TAB_ACCOUNT_DETAILS, true));
    }
  };
  CastleOpenForumCommand.BETA_FORUM_URL = "https://community.goodgamestudios.com/empire/testboard";
  CastleOpenForumCommand.CLOSED_BETA_FORUM_URL = "https://community.goodgamestudios.com/empire/testboard/entry/password";
  return CastleOpenForumCommand;
}(r.SimpleCommand);
exports.CastleOpenForumCommand = h;
var g = require("./9.js");
var C = require("./354.js");
var _ = require("./435.js");
c.classImplementsInterfaces(h, "ISimpleCommand");