Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./22.js");
var a = function () {
  function OfferDescriptionCostResources() {
    this._wood = 0;
    this._stone = 0;
    this._food = 0;
    this._coal = 0;
    this._oil = 0;
    this._glass = 0;
  }
  Object.defineProperty(OfferDescriptionCostResources.prototype, "name", {
    get: function () {
      return i.Constants_Offer.OFFER_COST_EMPIRE_RESOURCES;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionCostResources.prototype.registerOfferDescription = function (e) {
    e.addEntry(this.name, this);
  };
  OfferDescriptionCostResources.prototype.parseFromObjectParam = function (e) {
    this._wood = e.shift();
    this._stone = e.shift();
    this._food = e.shift();
    this._coal = e.shift();
    this._oil = e.shift();
    this._glass = e.shift();
  };
  Object.defineProperty(OfferDescriptionCostResources.prototype, "wood", {
    get: function () {
      return this._wood;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferDescriptionCostResources.prototype, "stone", {
    get: function () {
      return this._stone;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferDescriptionCostResources.prototype, "food", {
    get: function () {
      return this._food;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferDescriptionCostResources.prototype, "coal", {
    get: function () {
      return this._coal;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferDescriptionCostResources.prototype, "oil", {
    get: function () {
      return this._oil;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferDescriptionCostResources.prototype, "glass", {
    get: function () {
      return this._glass;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionCostResources.prototype.dispose = function () {};
  return OfferDescriptionCostResources;
}();
exports.OfferDescriptionCostResources = a;