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
  function OpenVoucherOfferCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(OpenVoucherOfferCommand, e);
  OpenVoucherOfferCommand.prototype.execute = function (t = null) {
    e.prototype.execute.call(this, t);
    var i = t.offerID;
    var n = c.CastleModel.privateOfferData.getOfferById(i);
    if (n) {
      s.CommandController.instance.executeCommand(d.IngameClientCommands.OPEN_PRIVATE_OFFER_DIALOG_COMMAND, n);
    } else {
      p.CastleDialogHandler.getInstance().registerDefaultDialogs(h.PrivateOfferFailedStandardDialog, new a.BasicStandardOkDialogProperties(o.BasicModel.languageData.getTextById("alert_voucherOffer_redeemed_title"), o.BasicModel.languageData.getTextById("alert_voucherOffer_redeemed_copy")));
    }
  };
  return OpenVoucherOfferCommand;
}(r.SimpleCommand);
exports.OpenVoucherOfferCommand = u;
var d = require("./29.js");
var p = require("./9.js");
var h = require("./564.js");
l.classImplementsInterfaces(u, "ISimpleCommand");