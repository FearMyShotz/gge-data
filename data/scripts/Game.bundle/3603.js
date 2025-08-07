Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./43.js");
var r = require("./341.js");
var l = function (e) {
  function OpenPrivateOfferDialogCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(OpenPrivateOfferDialogCommand, e);
  OpenPrivateOfferDialogCommand.prototype.execute = function (e = null) {
    var t = d.castAs(e, "PrivateOfferVO");
    if (t) {
      var i = u.CastlePrivateOfferDialogCreator.getPrivateOfferDialogName(t);
      if (i) {
        var n = u.CastlePrivateOfferDialogCreator.getPrivateOfferDialogClass(i);
        if (n) {
          c.CastleDialogHandler.getInstance().registerDialogsWithType(n, new r.CastlePrivateOfferDialogProperties(t), false, s.CastleDialogConsts.PRIORITY_LOW, 0, s.CastleDialogConsts.DIALOG_TYPE_PAYMENT_PRIVATE_PRIME_DAY);
        }
      }
    }
  };
  return OpenPrivateOfferDialogCommand;
}(o.SimpleCommand);
exports.OpenPrivateOfferDialogCommand = l;
a.classImplementsInterfaces(l, "ISimpleCommand");
var c = require("./9.js");
var u = require("./666.js");
var d = require("./1.js");