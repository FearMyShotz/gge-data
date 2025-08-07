Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./4.js");
var r = require("./3808.js");
var l = function (e) {
  function OpenLongTermPointEventHighScoreDialogCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(OpenLongTermPointEventHighScoreDialogCommand, e);
  OpenLongTermPointEventHighScoreDialogCommand.prototype.addAssets = function (e) {
    var t = s.CastleModel.specialEventData.getActiveEventByEventId(a.EventConst.EVENTTYPE_LONGTERM_POINT_EVENT);
    this.loadSeasonAssets(t.skin);
  };
  OpenLongTermPointEventHighScoreDialogCommand.prototype.openDialog = function () {
    c.CastleDialogHandler.getInstance().registerDefaultDialogs(u.LongTermPointEventHighScoreDialog, new r.LongTermPointEventHighScoreDialogProperties());
  };
  OpenLongTermPointEventHighScoreDialogCommand.prototype.loadSeasonAssets = function (e) {
    var t = "LongTermPeHighScoreDialog" + e.assetName + "Skin";
    this.loadAsset(t, t);
  };
  return OpenLongTermPointEventHighScoreDialogCommand;
}(require("./1062.js").OpenDialogWithAdditionalExternalAssetsCommand);
exports.OpenLongTermPointEventHighScoreDialogCommand = l;
var c = require("./9.js");
var u = require("./3809.js");
o.classImplementsInterfaces(l, "ISimpleCommand");