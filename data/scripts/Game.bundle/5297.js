Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./6.js");
var a = require("./60.js");
var s = function () {
  function OfferDescriptionCostC2() {
    this._costC2 = 0;
  }
  Object.defineProperty(OfferDescriptionCostC2.prototype, "name", {
    get: function () {
      return a.ClientConstOffer.OFFER_COST_C2;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionCostC2.prototype.registerOfferDescription = function (e) {
    e.addEntry(this.name, this);
  };
  OfferDescriptionCostC2.prototype.parseFromObjectParam = function (e) {
    this._costC2 = o.int(e);
  };
  Object.defineProperty(OfferDescriptionCostC2.prototype, "costC2", {
    get: function () {
      return this._costC2;
    },
    enumerable: true,
    configurable: true
  });
  return OfferDescriptionCostC2;
}();
exports.OfferDescriptionCostC2 = s;
n.classImplementsInterfaces(s, "IOfferDescription");