Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./6.js");
var l = require("./4.js");
var c = require("./24.js");
var u = function (e) {
  function OpenKingdomTeaserCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(OpenKingdomTeaserCommand, e);
  OpenKingdomTeaserCommand.prototype.execute = function (e = null) {
    var t;
    var i;
    var n = e;
    if (n.kingdomVO) {
      n.titleTextID = "dialog_kingdomTeaser_header" + n.kingdomVO.kID;
      n.minLevel = r.int(n.kingdomVO.minLevel);
      t = "KingdomTeaserBackground" + n.kingdomVO.kID;
    } else {
      n.titleTextID = "dialog_kingdomteaser_copy1";
      n.minLevel = r.int(l.CastleModel.kingdomData.minNonPremiumUnlockLevelForKingdoms);
      t = "KingdomTeaserAllKingdomsBackground";
    }
    i = o.BasicModel.basicLoaderData.getVersionedItemAssetUrl(t);
    n.backgroundImage = new c.CastleGoodgameExternalClip(t, i, null, 0, false);
    d.CastleDialogHandler.getInstance().registerDefaultDialogs(p.CastleKingdomTeaserDialog, n);
  };
  return OpenKingdomTeaserCommand;
}(a.SimpleCommand);
exports.OpenKingdomTeaserCommand = u;
var d = require("./9.js");
var p = require("./3581.js");
s.classImplementsInterfaces(u, "ISimpleCommand");