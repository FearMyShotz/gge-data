Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./43.js");
var s = require("./4498.js");
var r = require("./4.js");
var l = require("./295.js");
var c = function (e) {
  function PrimeSaleReviveAllEventVO() {
    var t = this;
    t._discount = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(PrimeSaleReviveAllEventVO, e);
  PrimeSaleReviveAllEventVO.prototype.parseParamObject = function (e) {
    this._discount = parseInt(e.DIS);
  };
  PrimeSaleReviveAllEventVO.prototype.openDialog = function (e = true) {
    if (!r.CastleModel.privateOfferData.isHiddenEvent(this._eventId)) {
      var t = new l.PaymentPopupDialogInfoVO(d.CastlePrimeSaleReviveAllDialog, new s.CastlePrimeSaleDialogReviveAllDialogProperties(this), a.CastleDialogConsts.DIALOG_TYPE_PAYMENT_PRIME_SALE);
      u.CastleDialogHandler.getInstance().registerDialogsWithType(t.dialogClass, t.properties, t.blockDialogs, t.priority, 0, t.type);
    }
  };
  Object.defineProperty(PrimeSaleReviveAllEventVO.prototype, "discount", {
    get: function () {
      return this._discount;
    },
    enumerable: true,
    configurable: true
  });
  return PrimeSaleReviveAllEventVO;
}(require("./79.js").ASpecialEventVO);
exports.PrimeSaleReviveAllEventVO = c;
var u = require("./9.js");
var d = require("./4499.js");
o.classImplementsInterfaces(c, "IEventOverviewable");