Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./43.js");
var s = require("./4496.js");
var r = require("./4.js");
var l = require("./295.js");
var c = function (e) {
  function PrimeSaleEventVO() {
    return e.call(this) || this;
  }
  n.__extends(PrimeSaleEventVO, e);
  PrimeSaleEventVO.prototype.parseParamObject = function (e) {
    var t = [];
    for (var i = 0, n = e.WID; i < n.length; i++) {
      var o = n[i];
      if (o !== undefined) {
        t.push(o);
      }
    }
    if (t.length == 0 && typeof e.WID == "number") {
      t.push(e.WID);
    }
    this._primeSaleComponent = new p.PrimeSaleComponent(t, e.DIS);
  };
  PrimeSaleEventVO.prototype.openDialog = function (e = true) {
    if (!r.CastleModel.privateOfferData.isHiddenEvent(this._eventId)) {
      var t = new l.PaymentPopupDialogInfoVO(d.CastlePrimeSaleDialog, new s.CastlePrimeSaleDialogProperties(this), a.CastleDialogConsts.DIALOG_TYPE_PAYMENT_PRIME_SALE);
      u.CastleDialogHandler.getInstance().registerDialogsWithType(t.dialogClass, t.properties, t.blockDialogs, t.priority, 0, t.type);
    }
  };
  Object.defineProperty(PrimeSaleEventVO.prototype, "primeSaleComponent", {
    get: function () {
      return this._primeSaleComponent;
    },
    enumerable: true,
    configurable: true
  });
  return PrimeSaleEventVO;
}(require("./79.js").ASpecialEventVO);
exports.PrimeSaleEventVO = c;
var u = require("./9.js");
var d = require("./1082.js");
var p = require("./1147.js");
o.classImplementsInterfaces(c, "IEventOverviewable");