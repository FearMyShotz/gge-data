Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./60.js");
var a = function () {
  function OfferDescriptionVisualSubOffer() {
    this._discount = 0;
    this._oldCost = 0;
  }
  Object.defineProperty(OfferDescriptionVisualSubOffer.prototype, "name", {
    get: function () {
      return o.ClientConstOffer.OFFER_VISUAL_SUB_OFFER;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionVisualSubOffer.prototype.registerVisualParameter = function (e) {
    e.addEntry(this.name, this);
  };
  OfferDescriptionVisualSubOffer.prototype.parseFromObjectParam = function (e) {
    if (e.DC) {
      this._discount = e.DC;
    }
    if (e.OC) {
      this._oldCost = e.OC;
    }
  };
  OfferDescriptionVisualSubOffer.prototype.execute = function (e) {
    return true;
  };
  OfferDescriptionVisualSubOffer.prototype.toExecuteInState = function (e) {
    return false;
  };
  Object.defineProperty(OfferDescriptionVisualSubOffer.prototype, "oldCost", {
    get: function () {
      return this._oldCost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferDescriptionVisualSubOffer.prototype, "discount", {
    get: function () {
      return this._discount;
    },
    enumerable: true,
    configurable: true
  });
  return OfferDescriptionVisualSubOffer;
}();
exports.OfferDescriptionVisualSubOffer = a;
n.classImplementsInterfaces(a, "IOfferDescriptionVisualParameter");