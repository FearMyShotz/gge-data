Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./60.js");
var a = function () {
  function OfferDescriptionAdditionalPrimeSale() {}
  Object.defineProperty(OfferDescriptionAdditionalPrimeSale.prototype, "name", {
    get: function () {
      return o.ClientConstOffer.OFFER_ADDITIONAL_PRIME_SALE;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionAdditionalPrimeSale.prototype.registerRewardParameter = function (e) {
    e.addEntry(this.name, this);
  };
  OfferDescriptionAdditionalPrimeSale.prototype.parseFromObjectParam = function (e) {
    var t = [];
    for (var i = 0, n = e.wodID; i < n.length; i++) {
      var o = n[i];
      if (o !== undefined) {
        t.push(o);
      }
    }
    if (t.length == 0 && typeof e.wodID == "number") {
      t.push(e.wodID);
    }
    this._primeSaleComponent = new s.PrimeSaleComponent(t, e.discount);
  };
  Object.defineProperty(OfferDescriptionAdditionalPrimeSale.prototype, "primeSaleComponent", {
    get: function () {
      return this._primeSaleComponent;
    },
    enumerable: true,
    configurable: true
  });
  return OfferDescriptionAdditionalPrimeSale;
}();
exports.OfferDescriptionAdditionalPrimeSale = a;
var s = require("./1147.js");
n.classImplementsInterfaces(a, "IOfferDescriptionAdditionalParameter");