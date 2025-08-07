Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./6.js");
var u = require("./43.js");
var d = require("./4.js");
var p = require("./295.js");
var h = function (e) {
  function EventBoosterPrimeSaleEventVO() {
    var t = this;
    t._activeBoosterSale = -1;
    t._currentDiscount = 0;
    CONSTRUCTOR_HACK;
    (t = e.call(this) || this)._eventId = l.EventConst.EVENTTYPE_EVENT_BOOSTER_PRIME_SALE;
    return t;
  }
  n.__extends(EventBoosterPrimeSaleEventVO, e);
  EventBoosterPrimeSaleEventVO.prototype.parseParamObject = function (t) {
    e.prototype.parseParamObject.call(this, t);
    this._activeBoosterSale = -1;
    this._currentDiscount = 0;
    if (t) {
      if (t.hasOwnProperty(r.CommKeys.BOOSTER_ID) && a.instanceOfClass(t[r.CommKeys.BOOSTER_ID], "Array")) {
        for (var i = 0, n = t[r.CommKeys.BOOSTER_ID]; i < n.length; i++) {
          var o = n[i];
          if (o !== undefined && s.BoosterConst.PRIME_SALE_BOOSTER_IDS.indexOf(o) != -1) {
            this._activeBoosterSale = o;
            break;
          }
        }
      }
      if (t.DIS) {
        this._currentDiscount = c.int(t.DIS);
      }
    }
  };
  EventBoosterPrimeSaleEventVO.prototype.openDialog = function (e = true) {
    var t = new p.PaymentPopupDialogInfoVO(C.CastlePrimeSaleBoosterDialog, null, u.CastleDialogConsts.DIALOG_TYPE_PAYMENT_PRIME_SALE);
    g.CastleDialogHandler.getInstance().registerDialogsWithType(t.dialogClass, t.properties, t.blockDialogs, t.priority, 0, t.type);
  };
  Object.defineProperty(EventBoosterPrimeSaleEventVO.prototype, "activeBoosterSale", {
    get: function () {
      return this._activeBoosterSale;
    },
    enumerable: true,
    configurable: true
  });
  EventBoosterPrimeSaleEventVO.prototype.isBoosterDiscounted = function (e) {
    return this._activeBoosterSale == e;
  };
  Object.defineProperty(EventBoosterPrimeSaleEventVO.prototype, "currentDiscount", {
    get: function () {
      return this._currentDiscount;
    },
    enumerable: true,
    configurable: true
  });
  EventBoosterPrimeSaleEventVO.prototype.canBeAddedToActiveEvents = function () {
    return this.isPrimeSaleBoosterTargetAvailable(this._activeBoosterSale);
  };
  EventBoosterPrimeSaleEventVO.prototype.isPrimeSaleBoosterTargetAvailable = function (e) {
    var t = d.CastleModel.boostData.getBoosterByID(e);
    return !t || t.finalCostsC2 > 0;
  };
  return EventBoosterPrimeSaleEventVO;
}(require("./79.js").ASpecialEventVO);
exports.EventBoosterPrimeSaleEventVO = h;
var g = require("./9.js");
var C = require("./1120.js");
o.classImplementsInterfaces(h, "IEventOverviewable");