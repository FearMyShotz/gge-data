Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./60.js");
var a = function () {
  function OfferDescriptionAdditionalPrimeSaleUpgrade() {}
  Object.defineProperty(OfferDescriptionAdditionalPrimeSaleUpgrade.prototype, "name", {
    get: function () {
      return o.ClientConstOffer.OFFER_ADDITIONAL_PRIME_SALE_UPGRADE;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionAdditionalPrimeSaleUpgrade.prototype.registerRewardParameter = function (e) {
    e.addEntry(this.name, this);
  };
  OfferDescriptionAdditionalPrimeSaleUpgrade.prototype.parseFromObjectParam = function (e) {
    var t = [];
    for (var i = 0, n = e.wodIDs; i < n.length; i++) {
      var o = n[i];
      if (o !== undefined) {
        t.push(o);
      }
    }
    if (t.length == 0 && typeof e.wodIDs == "number") {
      t.push(e.wodIDs);
    }
    if (t.length == 0 && typeof e.wodID == "number") {
      t.push(e.wodID);
    }
    this._primeSaleComponent = new s.PrimeSaleUpgradeComponent(t, e.discount);
  };
  Object.defineProperty(OfferDescriptionAdditionalPrimeSaleUpgrade.prototype, "primeSaleComponent", {
    get: function () {
      return this._primeSaleComponent;
    },
    enumerable: true,
    configurable: true
  });
  return OfferDescriptionAdditionalPrimeSaleUpgrade;
}();
exports.OfferDescriptionAdditionalPrimeSaleUpgrade = a;
var s = require("./5326.js");
n.classImplementsInterfaces(a, "IOfferDescriptionAdditionalParameter");