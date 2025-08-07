Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastlePrimeSaleData() {}
  CastlePrimeSaleData.prototype.getBestDiscountPrivateOfferID = function (e, t) {
    var i;
    var n;
    for (var s = l.CastleModel.privateOfferData.getActivePrivateOffersByDescription(r.ClientConstOffer.ADDITIONAL_COMPONENT_CONTAINER), c = -1, u = 0; u < s.length; u++) {
      var d = s[u];
      var p = o.castAs(d.getAdditionalComponentByName(r.ClientConstOffer.OFFER_ADDITIONAL_PRIME_SALE), "OfferDescriptionAdditionalPrimeSale");
      var h = o.castAs(d.getAdditionalComponentByName(r.ClientConstOffer.OFFER_ADDITIONAL_PRIME_SALE_UPGRADE), "OfferDescriptionAdditionalPrimeSaleUpgrade");
      if ((p || h) && (n = p ? p.primeSaleComponent : h.primeSaleComponent)) {
        if ((a.instanceOfClass(n, "PrimeSaleUpgradeComponent") ? !!n.upgradeChainContainsWodID(e) : !!n.buildingVO && t && n.buildingVO.downgradeWodID == e || !t && n.wodID == e) && (!i || n.discount > i.discount)) {
          i = n;
          c = d.id;
        }
      }
    }
    return c;
  };
  CastlePrimeSaleData.prototype.getBestDiscountPrimeSaleComponent = function (e, t) {
    var i;
    var n;
    var c = o.castAs(l.CastleModel.specialEventData.getActiveEventByEventId(s.EventConst.EVENTTYPE_PRIME_SALES), "PrimeSaleEventVO");
    var u = l.CastleModel.privateOfferData.getActivePrivateOffersByDescription(r.ClientConstOffer.ADDITIONAL_COMPONENT_CONTAINER);
    if (c && (t && c.primeSaleComponent.buildingVO.downgradeWodID == e || !t && c.primeSaleComponent.wodID == e)) {
      i = c.primeSaleComponent;
    }
    for (var d = 0; d < u.length; d++) {
      var p = u[d];
      var h = o.castAs(p.getAdditionalComponentByName(r.ClientConstOffer.OFFER_ADDITIONAL_PRIME_SALE), "OfferDescriptionAdditionalPrimeSale");
      var g = o.castAs(p.getAdditionalComponentByName(r.ClientConstOffer.OFFER_ADDITIONAL_PRIME_SALE_UPGRADE), "OfferDescriptionAdditionalPrimeSaleUpgrade");
      if ((h || g) && (n = h ? h.primeSaleComponent : g.primeSaleComponent) && n.isAvailableInKingdom()) {
        if ((a.instanceOfClass(n, "PrimeSaleUpgradeComponent") ? !!n.upgradeChainContainsWodID(e) : t && n.buildingVO.downgradeWodID == e || !t && n.wodID == e) && (!i || n.discount > i.discount)) {
          i = n;
        }
      }
    }
    return i;
  };
  CastlePrimeSaleData.prototype.getBestDiscountPrimeSaleComponentByShopVO = function (e, t) {
    return this.getBestDiscountPrimeSaleComponent(e.wodId, t);
  };
  return CastlePrimeSaleData;
}();
exports.CastlePrimeSaleData = n;
var o = require("./1.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./60.js");
var l = require("./4.js");