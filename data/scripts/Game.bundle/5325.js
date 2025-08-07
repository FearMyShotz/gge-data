Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./60.js");
var a = function () {
  function OfferDescriptionRewardStandard() {}
  Object.defineProperty(OfferDescriptionRewardStandard.prototype, "name", {
    get: function () {
      return o.ClientConstOffer.OFFER_REWARD_EMPIRE_STANDARD;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionRewardStandard.prototype.registerRewardParameter = function (e) {
    e.addEntry(this.name, this);
  };
  OfferDescriptionRewardStandard.prototype.parseFromObjectParam = function (e) {
    this._rewardList = s.CollectableManager.parser.s2cParamObject.createList(e);
    this._overload = e.OL == 1;
  };
  OfferDescriptionRewardStandard.prototype.getRewardsList = function () {
    return this._rewardList;
  };
  OfferDescriptionRewardStandard.prototype.getOverload = function () {
    return this._overload;
  };
  return OfferDescriptionRewardStandard;
}();
exports.OfferDescriptionRewardStandard = a;
var s = require("./50.js");
n.classImplementsInterfaces(a, "IOfferDescriptionRewardParameter");