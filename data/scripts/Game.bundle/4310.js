Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastleSkipDiscountData() {
    this._skipDiscountPOActive = false;
    this._activeSkipDataPrivateOffers = [];
    d.CastleModel.privateOfferData.addEventListener(h.PrivateOfferDataEvent.PRIVATE_OFFER_CREATED, this.bindFunction(this.onNewPrivateOffer));
    d.CastleModel.privateOfferData.addEventListener(h.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onPrivateOfferRemoved));
    d.CastleModel.privateOfferData.addEventListener(h.PrivateOfferDataEvent.PRIVATE_OFFER_STATE_CHANGED, this.bindFunction(this.onNewPrivateOffer));
    o.BasicController.getInstance().addEventListener(p.BoosterDataEvent.BOOSTER_REMOVED, this.bindFunction(this.onBoosterRemoved));
  }
  CastleSkipDiscountData.prototype.onBoosterRemoved = function (e) {
    this.showNextPrivateOffer();
  };
  CastleSkipDiscountData.prototype.onPrivateOfferRemoved = function (e) {
    if (e.offerVO.getAdditionalComponentByName(u.ClientConstOffer.OFFER_ADDITIONAL_PRIME_SALE_SKIP)) {
      var t = c.int(this._activeSkipDataPrivateOffers.indexOf(e.offerVO));
      if (t > -1) {
        this._activeSkipDataPrivateOffers.splice(t, 1);
        if (this._activeSkipDataPrivateOffers.length < 1) {
          this._skipDiscountPOActive = false;
        } else {
          this.showNextPrivateOffer();
        }
      }
    }
  };
  CastleSkipDiscountData.prototype.showNextPrivateOffer = function () {
    var e = this.getBestPrivateOffer();
    if (e) {
      var t = e.getDescriptionByName(u.ClientConstOffer.VISUAL_COMPONENT_CONTAINER);
      if (t) {
        for (var i = 0, n = Array.from(t.visuals.values()); i < n.length; i++) {
          var o = n[i];
          if (o !== undefined && o.toExecuteInState(e.offerState) && s.instanceOfClass(o, "OfferDescriptionVisualInterfaceButton")) {
            o.execute(e);
          }
        }
      }
    }
  };
  CastleSkipDiscountData.prototype.onNewPrivateOffer = function (e) {
    if (e.offerVO.getAdditionalComponentByName(u.ClientConstOffer.OFFER_ADDITIONAL_PRIME_SALE_SKIP)) {
      if (this._activeSkipDataPrivateOffers.indexOf(e.offerVO) < 0 && e.offerVO.offerState == g.PrivateOfferStateEnum.OFFER_PENDING) {
        this._activeSkipDataPrivateOffers.push(e.offerVO);
        this._skipDiscountPOActive = true;
      } else if (this._activeSkipDataPrivateOffers.indexOf(e.offerVO) >= 0 && e.offerVO.offerState != g.PrivateOfferStateEnum.OFFER_PENDING) {
        this.onPrivateOfferRemoved(e);
      }
    }
  };
  Object.defineProperty(CastleSkipDiscountData.prototype, "skipDiscountPOActive", {
    get: function () {
      return this._skipDiscountPOActive;
    },
    enumerable: true,
    configurable: true
  });
  CastleSkipDiscountData.prototype.privateOfferIsBetter = function () {
    var e = false;
    var t = this.getBestPrivateOffer();
    if (t && this.skipDiscountPOBetter(t)) {
      e = true;
    }
    return e;
  };
  CastleSkipDiscountData.prototype.skipDiscountPOBetter = function (e) {
    return true;
  };
  CastleSkipDiscountData.prototype.isBestOfferSoFar = function (e) {
    if (this.skipDiscountPOBetter(e)) {
      var t = this.getBestPrivateOffer();
      return !t || t === e || c.int(e.getAdditionalComponentByName(u.ClientConstOffer.OFFER_ADDITIONAL_PRIME_SALE_SKIP).primeSaleSkipBuildingComponent.discount) > c.int(t.getAdditionalComponentByName(u.ClientConstOffer.OFFER_ADDITIONAL_PRIME_SALE_SKIP).primeSaleSkipBuildingComponent.discount);
    }
    return false;
  };
  CastleSkipDiscountData.prototype.getBestDiscount = function () {
    var e;
    var t = this.getBestPrivateOffer();
    var i = {
      discount: 0,
      remaining: 0
    };
    if (t) {
      e = t.getAdditionalComponentByName(u.ClientConstOffer.OFFER_ADDITIONAL_PRIME_SALE_SKIP).primeSaleSkipBuildingComponent;
    }
    if (t) {
      i.discount = e.discount;
      i.remaining = t.remainingSeconds;
      return i;
    } else {
      return i;
    }
  };
  CastleSkipDiscountData.prototype.getBestPrivateOffer = function () {
    var e;
    var t = 0;
    var i = 0;
    if (this._activeSkipDataPrivateOffers != null) {
      for (var n = 0, o = this._activeSkipDataPrivateOffers; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined) {
          if (a.getAdditionalComponentByName(u.ClientConstOffer.OFFER_ADDITIONAL_PRIME_SALE_SKIP).primeSaleSkipBuildingComponent.discount > t) {
            t = c.int(a.getAdditionalComponentByName(u.ClientConstOffer.OFFER_ADDITIONAL_PRIME_SALE_SKIP).primeSaleSkipBuildingComponent.discount);
            i = a.remainingSeconds;
            e = a;
          } else if (a.getAdditionalComponentByName(u.ClientConstOffer.OFFER_ADDITIONAL_PRIME_SALE_SKIP).primeSaleSkipBuildingComponent.discount == t && a.remainingSeconds > i) {
            i = a.remainingSeconds;
            e = a;
          }
        }
      }
    }
    return e;
  };
  CastleSkipDiscountData.prototype.hasBoostedSkipDiscount = function (e = null) {
    e ||= this.getBestDiscount();
    return e.discount > 0 && e.remaining > 0;
  };
  CastleSkipDiscountData.prototype.getBoostedSkipDiscount = function (e = null) {
    e ||= this.getBestDiscount();
    return c.int(e.discount);
  };
  CastleSkipDiscountData.prototype.getBoostedSkipDiscountTime = function (e = null) {
    e ||= this.getBestDiscount();
    return c.int(e.remaining);
  };
  CastleSkipDiscountData.prototype.getSkipBoostTooltip = function (e = null) {
    var t = c.int(this.getBoostedSkipDiscountTime(e));
    if (t < 1) {
      return "";
    }
    var i = t / 60;
    var n = i / 60;
    var o = i;
    var s = "Minutes";
    if (o < 1) {
      o = 1;
    }
    if (n > 0) {
      o = n;
      s = "Hours";
    }
    var u = "dialog_primeday_primesale_buildingSkip_noise_tooltip" + s + (o == 1 ? "_singular" : "_plural");
    return r.Localize.text(u, [new l.LocalizedTextVO(a.GenericTextIds.VALUE_PERCENTAGE, [this.getBoostedSkipDiscount(e)]), o]);
  };
  return CastleSkipDiscountData;
}();
exports.CastleSkipDiscountData = n;
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./6.js");
var u = require("./60.js");
var d = require("./4.js");
var p = require("./1839.js");
var h = require("./130.js");
var g = require("./226.js");