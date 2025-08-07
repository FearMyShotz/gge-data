Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./1.js");
var c = require("./4.js");
var u = function (e) {
  function OpenDungenTreasureChestOfferCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(OpenDungenTreasureChestOfferCommand, e);
  OpenDungenTreasureChestOfferCommand.prototype.execute = function (t = null) {
    e.prototype.execute.call(this, t);
    var i = t.offerID;
    var n = c.CastleModel.privateOfferData.getOfferById(i);
    if (n) {
      s.CommandController.instance.executeCommand(d.IngameClientCommands.OPEN_PRIVATE_OFFER_DIALOG_COMMAND, n);
    } else {
      p.CastleDialogHandler.getInstance().registerDefaultDialogs(g.PrivateOfferFailedStandardDialog, new a.BasicStandardOkDialogProperties(o.BasicModel.languageData.getTextById("dungeonTreasureChestOfferFailed_title"), o.BasicModel.languageData.getTextById("dungeonTreasureChestOfferFailed_copy")));
    }
  };
  Object.defineProperty(OpenDungenTreasureChestOfferCommand.prototype, "layoutManager", {
    get: function () {
      return h.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return OpenDungenTreasureChestOfferCommand;
}(r.SimpleCommand);
exports.OpenDungenTreasureChestOfferCommand = u;
var d = require("./29.js");
var p = require("./9.js");
var h = require("./17.js");
var g = require("./564.js");
l.classImplementsInterfaces(u, "ISimpleCommand");