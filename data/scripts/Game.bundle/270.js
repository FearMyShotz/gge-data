Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./5.js");
var c = require("./3.js");
var u = require("./6.js");
var d = require("./60.js");
var p = require("./26.js");
var h = require("./54.js");
var g = require("./4.js");
var C = require("./130.js");
var _ = createjs.Event;
var m = function (e) {
  function CastleBoosterSaleData() {
    var t = e.call(this) || this;
    g.CastleModel.privateOfferData.addEventListener(C.PrivateOfferDataEvent.PRIVATE_OFFER_CREATED, t.bindFunction(t.onPrivateOfferAdded));
    g.CastleModel.privateOfferData.addEventListener(C.PrivateOfferDataEvent.PRIVATE_OFFER_STATE_CHANGED, t.bindFunction(t.onPrivateOfferAdded));
    g.CastleModel.privateOfferData.addEventListener(C.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, t.bindFunction(t.onPrivateOfferRemoved));
    g.CastleModel.specialEventData.addEventListener(p.CastleSpecialEventEvent.ADD_SPECIALEVENT, t.bindFunction(t.onSpecialEventAdded));
    g.CastleModel.specialEventData.addEventListener(p.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, t.bindFunction(t.onSpecialEventRemoved));
    return t;
  }
  n.__extends(CastleBoosterSaleData, e);
  CastleBoosterSaleData.prototype.reset = function () {
    e.prototype.reset.call(this);
    this.currentOffer = null;
    this.currentEvent = null;
    this.currentPrimeSale = null;
  };
  CastleBoosterSaleData.prototype.onSpecialEventAdded = function (e) {
    if (e && e.specialEventVO && r.instanceOfClass(e.specialEventVO, "EventBoosterPrimeSaleEventVO")) {
      this.currentEvent = e.specialEventVO;
      this.dispatchEvent(new _(CastleBoosterSaleData.BOOSTER_SALE_UPDATE, false, false));
    }
  };
  CastleBoosterSaleData.prototype.onSpecialEventRemoved = function (e) {
    if (e && e.specialEventVO && r.instanceOfClass(e.specialEventVO, "EventBoosterPrimeSaleEventVO")) {
      this.currentEvent = null;
      this.dispatchEvent(new _(CastleBoosterSaleData.BOOSTER_SALE_UPDATE, false, false));
    }
  };
  CastleBoosterSaleData.prototype.onPrivateOfferAdded = function (e) {
    if (e && e.offerVO) {
      var t = e.offerVO.getAdditionalComponentByName(d.ClientConstOffer.OFFER_ADDITIONAL_BOOSTER_SALE);
      if (r.instanceOfClass(t, "OfferDescriptionBoosterPrimeSale")) {
        this.currentOffer = e.offerVO;
        this.currentPrimeSale = t;
        this.dispatchEvent(new _(CastleBoosterSaleData.BOOSTER_SALE_UPDATE, false, false));
      }
    }
  };
  CastleBoosterSaleData.prototype.onPrivateOfferRemoved = function (e) {
    if (e && e.offerVO && e.offerVO.getAdditionalComponentByName(d.ClientConstOffer.OFFER_ADDITIONAL_BOOSTER_SALE)) {
      this.currentOffer = null;
      this.currentPrimeSale = null;
      this.dispatchEvent(new _(CastleBoosterSaleData.BOOSTER_SALE_UPDATE, false, false));
    }
  };
  CastleBoosterSaleData.prototype.isAnyBoosterOnSale = function () {
    return !!this.currentOffer || !!this.currentEvent;
  };
  CastleBoosterSaleData.prototype.isBoosterOnSale = function (e) {
    if (l.BoosterConst.PRIME_SALE_BOOSTER_IDS.indexOf(e) == -1) {
      return false;
    }
    if (this.currentOffer && this.currentOffer.getAdditionalComponentByName(d.ClientConstOffer.OFFER_ADDITIONAL_BOOSTER_SALE).boosterId == e) {
      return true;
    }
    return !!this.currentEvent && this.currentEvent.isBoosterDiscounted(e);
  };
  CastleBoosterSaleData.prototype.anyTimeLeft = function () {
    if (this.currentOffer && this.currentPrimeSale) {
      return this.currentOffer.remainingSeconds;
    } else if (this.currentEvent) {
      return u.int(this.currentEvent.remainingEventTimeInSeconds);
    } else {
      return -1;
    }
  };
  CastleBoosterSaleData.prototype.getDiscount = function (e) {
    var t = 0;
    var i = g.CastleModel.boostData.getBoosterByID(e);
    if (i && i.hasRebuyDiscount) {
      t += i.rebuyDiscount;
    }
    var n = false;
    if (this.currentOffer && this.currentPrimeSale && this.currentPrimeSale.boosterId == e) {
      t += this.currentPrimeSale.discount;
      n = true;
    }
    if (!n && this.currentEvent && this.currentEvent.isBoosterDiscounted(e)) {
      t += this.currentEvent.currentDiscount;
    }
    return t;
  };
  CastleBoosterSaleData.prototype.handleMc = function (e, t) {
    if (!e || !e.hasOwnProperty("txt_value")) {
      return false;
    }
    var i = this.isBoosterOnSale(t);
    e.visible = i;
    if (i) {
      e.txt_value.getTextFormat().size = 14;
      s.GoodgameTextFieldManager.getInstance().registerTextField(e.txt_value, new c.LocalizedTextVO(a.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT, [this.getDiscount(t)])).color = 16250871;
    }
    return i;
  };
  CastleBoosterSaleData.prototype.hideDiscount = function () {
    return false;
  };
  CastleBoosterSaleData.prototype.getOfferId = function (e) {
    if (this.currentOffer && this.currentPrimeSale && this.currentPrimeSale.boosterId == e) {
      return this.currentOffer.id;
    } else {
      return -1;
    }
  };
  CastleBoosterSaleData.BOOSTER_SALE_UPDATE = "BOOSTER_SALE_UPDATE";
  return CastleBoosterSaleData;
}(h.CastleBasicData);
exports.CastleBoosterSaleData = m;
o.classImplementsInterfaces(m, "IUpdatable", "ICastleBasicData");