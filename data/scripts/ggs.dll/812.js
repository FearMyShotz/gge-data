Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./181.js");
var s = require("./84.js");
var r = require("./25.js");
var o = require("./40.js");
var l = require("./65.js");
var u = function (e) {
  function BasicShowComaTeaserCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i.__extends(BasicShowComaTeaserCommand, e);
  BasicShowComaTeaserCommand.prototype.execute = function (e = null) {
    var t = e[0];
    var n = e[2];
    var i = e[3];
    if (t == a.CMTCommand.TEASERTYPE_WARNING) {
      r.BasicLayoutManager.getInstance().showAdminDialog(o.CommonDialogNames.StandardOkDialog_NAME, new l.BasicStandardOkDialogProperties(n, i));
    } else if (r.BasicLayoutManager.gameState == r.BasicLayoutManager.STATE_LOGIN) {
      s.BasicDialogHandler.getInstance().registerDialogs(o.CommonDialogNames.StandardOkDialog_NAME, new l.BasicStandardOkDialogProperties(n, i));
    } else {
      r.BasicLayoutManager.getInstance().showAdminDialog(o.CommonDialogNames.StandardOkDialog_NAME, new l.BasicStandardOkDialogProperties(n, i));
    }
  };
  return BasicShowComaTeaserCommand;
}(require("./6.js").SimpleCommand);
exports.BasicShowComaTeaserCommand = u;