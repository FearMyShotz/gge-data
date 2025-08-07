Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./60.js");
var a = require("./4.js");
var s = function () {
  function OfferDescriptionAdditionalABTestDependency() {
    this._amountOfTimesRequested = 0;
  }
  Object.defineProperty(OfferDescriptionAdditionalABTestDependency.prototype, "name", {
    get: function () {
      return o.ClientConstOffer.OFFER_ADDITIONAL_AB_TEST;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionAdditionalABTestDependency.prototype.registerRewardParameter = function (e) {
    e.addEntry(this.name, this);
  };
  OfferDescriptionAdditionalABTestDependency.prototype.parseFromObjectParam = function (e) {
    this._ABTestDependency = e.ABT;
  };
  Object.defineProperty(OfferDescriptionAdditionalABTestDependency.prototype, "ABTestDependency", {
    get: function () {
      return this._ABTestDependency;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionAdditionalABTestDependency.prototype.satisfyDependency = function () {
    if (this._amountOfTimesRequested < 1) {
      a.CastleModel.userData.splitRunData.getTestCaseIfNotPresent(this._ABTestDependency);
    }
    this._amountOfTimesRequested++;
  };
  return OfferDescriptionAdditionalABTestDependency;
}();
exports.OfferDescriptionAdditionalABTestDependency = s;
n.classImplementsInterfaces(s, "IOfferDescriptionAdditionalParameter");