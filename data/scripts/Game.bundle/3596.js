Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./1.js");
var c = require("./5.js");
var u = require("./58.js");
var d = require("./4.js");
var p = require("./295.js");
var h = require("./43.js");
var g = require("./17.js");
var C = require("./664.js");
var _ = function (e) {
  function OpenOfferDialogCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(OpenOfferDialogCommand, e);
  OpenOfferDialogCommand.prototype.execute = function (e = null) {
    var t = r.castAs(e, "GlobalOfferVO");
    if (t && a.BasicModel.sessionData.loggedIn) {
      var i;
      var n = new C.CastleOfferDialogProperties(t);
      switch (t.offerType) {
        case m.CastleGlobalOfferData.EVENT_SPECIALINGAMEOFFER:
          f.CastleDialogHandler.getInstance().registerDefaultDialogs(E.CastleSpecialIngameOfferDialog, new C.CastleOfferDialogProperties(t), true, o.BasicDialogHandler.PRIORITY_LOW);
          break;
        case m.CastleGlobalOfferData.EVENT_SPECIALOFFER:
          if (d.CastleModel.userData.userLevel >= u.ClientConstLevelRestrictions.MIN_LEVEL_PRIMETIME) {
            if (t.isTimeless) {
              i = new p.PaymentPopupDialogInfoVO(y.CastleTimelessSpecialOfferDialog, n, h.CastleDialogConsts.DIALOG_TYPE_PAYMENT_PRIME_TIME, true, o.BasicDialogHandler.PRIORITY_MIDDLE);
            } else {
              var s = d.CastleModel.specialEventData.getActiveEventByEventId(c.EventConst.EVENTTYPE_PRIME_TIME_SKIN);
              i = !!s && a.BasicModel.basicLoaderData.isItemAssetVersioned("PrimeTimeDialog_" + s.skinName) ? new p.PaymentPopupDialogInfoVO(D.PrimeTimeSkinDialog, n, h.CastleDialogConsts.DIALOG_TYPE_PAYMENT_PRIME_TIME, true, o.BasicDialogHandler.PRIORITY_MIDDLE) : new p.PaymentPopupDialogInfoVO(b.ModernPrimeTimeDialog, n, h.CastleDialogConsts.DIALOG_TYPE_PAYMENT_PRIME_TIME, true, o.BasicDialogHandler.PRIORITY_MIDDLE);
            }
          }
          break;
        case m.CastleGlobalOfferData.PRIME_TIME:
          i = t.isTimeless ? new p.PaymentPopupDialogInfoVO(y.CastleTimelessSpecialOfferDialog, n, h.CastleDialogConsts.DIALOG_TYPE_PAYMENT_PRIME_TIME, true, o.BasicDialogHandler.PRIORITY_MIDDLE) : new p.PaymentPopupDialogInfoVO(O.CastlePrivatePrimeTimeOfferDialog, n, h.CastleDialogConsts.DIALOG_TYPE_PAYMENT_PRIVATE_PRIME_TIME);
      }
      if (i && !g.CastleLayoutManager.getInstance().isDialogVisibleByName(i.dialogClass)) {
        f.CastleDialogHandler.getInstance().registerDialogsWithType(i.dialogClass, i.properties, i.blockDialogs, i.priority, 0, i.type);
      }
    }
  };
  return OpenOfferDialogCommand;
}(s.SimpleCommand);
exports.OpenOfferDialogCommand = _;
var m = require("./589.js");
var f = require("./9.js");
var O = require("./814.js");
var E = require("./1732.js");
var y = require("./1733.js");
var b = require("./3598.js");
var D = require("./3599.js");
l.classImplementsInterfaces(_, "ISimpleCommand");