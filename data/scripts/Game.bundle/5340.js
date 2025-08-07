Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./6.js");
var a = require("./60.js");
var s = require("./50.js");
var r = function () {
  function OfferDescriptionAdditionalCosts() {}
  Object.defineProperty(OfferDescriptionAdditionalCosts.prototype, "name", {
    get: function () {
      return a.ClientConstOffer.OFFER_ADDITIONAL_COSTS;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionAdditionalCosts.prototype.registerRewardParameter = function (e) {
    e.addEntry(this.name, this);
  };
  OfferDescriptionAdditionalCosts.prototype.parseFromObjectParam = function (e) {
    var t = {};
    t[e.CID] = [o.int(e.AMT)];
    this._costList = s.CollectableManager.parser.s2cParamObject.createList(t);
  };
  Object.defineProperty(OfferDescriptionAdditionalCosts.prototype, "costList", {
    get: function () {
      return this._costList;
    },
    enumerable: true,
    configurable: true
  });
  return OfferDescriptionAdditionalCosts;
}();
exports.OfferDescriptionAdditionalCosts = r;
n.classImplementsInterfaces(r, "IOfferDescriptionAdditionalParameter");