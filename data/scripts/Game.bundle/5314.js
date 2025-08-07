Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./60.js");
var a = require("./5315.js");
var s = function () {
  function OfferDescriptionAdditionalPrimeSaleSkipBuilding() {}
  Object.defineProperty(OfferDescriptionAdditionalPrimeSaleSkipBuilding.prototype, "name", {
    get: function () {
      return o.ClientConstOffer.OFFER_ADDITIONAL_PRIME_SALE_SKIP;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionAdditionalPrimeSaleSkipBuilding.prototype.registerRewardParameter = function (e) {
    e.addEntry(this.name, this);
  };
  OfferDescriptionAdditionalPrimeSaleSkipBuilding.prototype.parseFromObjectParam = function (e) {
    this._primeSaleSkipBuildingComponent = new a.PrimeSaleSkipBuildingComponent(e.discount);
  };
  Object.defineProperty(OfferDescriptionAdditionalPrimeSaleSkipBuilding.prototype, "primeSaleSkipBuildingComponent", {
    get: function () {
      return this._primeSaleSkipBuildingComponent;
    },
    enumerable: true,
    configurable: true
  });
  return OfferDescriptionAdditionalPrimeSaleSkipBuilding;
}();
exports.OfferDescriptionAdditionalPrimeSaleSkipBuilding = s;
n.classImplementsInterfaces(s, "IOfferDescriptionAdditionalParameter");