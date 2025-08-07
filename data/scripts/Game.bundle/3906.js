Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./99.js");
var s = require("./9.js");
var r = require("./216.js");
var l = require("./196.js");
var c = function (e) {
  function CheatOfferIDsInHeaderCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CheatOfferIDsInHeaderCommand, e);
  CheatOfferIDsInHeaderCommand.prototype.execute = function (e = null) {
    l.ClientCheatsHelper.performCommand("toggleOfferIDsInMessageSubject");
    if (a.AMessageVO.showOfferIDsInSubject) {
      s.CastleDialogHandler.getInstance().registerDefaultDialogs(r.DarkOkDialog, new o.BasicStandardOkDialogProperties("OfferIDs", "OfferIDs are shown now in the MessageHeader"));
    }
    if (!a.AMessageVO.showOfferIDsInSubject) {
      s.CastleDialogHandler.getInstance().registerDefaultDialogs(r.DarkOkDialog, new o.BasicStandardOkDialogProperties("OfferIDs", "OfferIDs are invisible"));
    }
  };
  return CheatOfferIDsInHeaderCommand;
}(require("./212.js").ABotCommand);
exports.CheatOfferIDsInHeaderCommand = c;