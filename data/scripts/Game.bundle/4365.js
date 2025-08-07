Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./6.js");
var r = require("./43.js");
var l = require("./4.js");
var c = require("./295.js");
var u = function (e) {
  function AlliPaymentBonusEventVO() {
    var t = this;
    t._primeFactorInPercent = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(AlliPaymentBonusEventVO, e);
  AlliPaymentBonusEventVO.prototype.parseParamObject = function (e) {
    this._primeFactorInPercent = s.int(e.APP);
  };
  Object.defineProperty(AlliPaymentBonusEventVO.prototype, "primeFactorInPercent", {
    get: function () {
      return this._primeFactorInPercent;
    },
    enumerable: true,
    configurable: true
  });
  AlliPaymentBonusEventVO.prototype.onDestroy = function () {
    o.BasicDialogHandler.getInstance().removeDialog(p.CastleAlliPaymentBonusDialog);
  };
  AlliPaymentBonusEventVO.prototype.openDialog = function (e = true) {
    if (!l.CastleModel.privateOfferData.isHiddenEvent(this._eventId)) {
      var t = s.int(e ? o.BasicDialogHandler.PRIORITY_TOP : o.BasicDialogHandler.PRIORITY_LOW);
      var i = new c.PaymentPopupDialogInfoVO(p.CastleAlliPaymentBonusDialog, null, r.CastleDialogConsts.DIALOG_TYPE_PAYMENT_PRIME_TIME, false, t);
      d.CastleDialogHandler.getInstance().registerDialogsWithType(i.dialogClass, i.properties, i.blockDialogs, i.priority);
    }
  };
  return AlliPaymentBonusEventVO;
}(require("./79.js").ASpecialEventVO);
exports.AlliPaymentBonusEventVO = u;
a.classImplementsInterfaces(u, "IEventOverviewable");
var d = require("./9.js");
var p = require("./4366.js");