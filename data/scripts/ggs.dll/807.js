Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./92.js");
var s = require("./5.js");
var r = require("./49.js");
var o = require("./4.js");
var l = require("./6.js");
var u = require("./3.js");
var c = require("./2.js").getLogger("BasicOpenForumCommand");
var _ = function (e) {
  function BasicOpenForumCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i.__extends(BasicOpenForumCommand, e);
  BasicOpenForumCommand.prototype.execute = function (e = null) {
    if (s.EnvGlobalsHandler.globals.networkNewsByJS) {
      u.ExternalInterface.call(r.JavascriptFunctionName.REQUEST_GROUP);
    } else if (s.EnvGlobalsHandler.globals.useexternallinks) {
      this.goForum();
    } else {
      c.debug("BasicOpenForumCommand - unhandled else case");
    }
  };
  BasicOpenForumCommand.prototype.goForum = function () {
    var e;
    e = o.BasicModel.forumData.getForumRootURL();
    var t = new u.URLRequest(e);
    a.BrowserUtil.executeNavigateToURL(t, "_blank");
  };
  return BasicOpenForumCommand;
}(l.SimpleCommand);
exports.BasicOpenForumCommand = _;