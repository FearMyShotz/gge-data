Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./43.js");
var r = require("./9.js");
var l = require("./4508.js");
var c = require("./4509.js");
var u = require("./4.js");
var d = require("./295.js");
var p = function (e) {
  function RelicEnchanterPrimeSaleEventVO() {
    var t = this;
    t._discount = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(RelicEnchanterPrimeSaleEventVO, e);
  RelicEnchanterPrimeSaleEventVO.prototype.parseParamObject = function (e) {
    this._discount = a.int(e.DIS);
  };
  RelicEnchanterPrimeSaleEventVO.prototype.openDialog = function (e = true) {
    if (!u.CastleModel.privateOfferData.isHiddenEvent(this._eventId)) {
      var t = new d.PaymentPopupDialogInfoVO(l.CastleRelicEnchanterPrimeSaleDialog, new c.CastleRelicEnchanterPrimeSaleDialogProperties(this), s.CastleDialogConsts.DIALOG_TYPE_PAYMENT_PRIME_SALE);
      r.CastleDialogHandler.getInstance().registerDialogsWithType(t.dialogClass, t.properties, t.blockDialogs, t.priority, 0, t.type);
    }
  };
  Object.defineProperty(RelicEnchanterPrimeSaleEventVO.prototype, "discount", {
    get: function () {
      return this._discount;
    },
    enumerable: true,
    configurable: true
  });
  return RelicEnchanterPrimeSaleEventVO;
}(require("./79.js").ASpecialEventVO);
exports.RelicEnchanterPrimeSaleEventVO = p;
o.classImplementsInterfaces(p, "IEventOverviewable");