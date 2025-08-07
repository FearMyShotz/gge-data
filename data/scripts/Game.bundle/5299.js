Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./60.js");
var a = require("./4.js");
var s = function () {
  function OfferDescriptionRewards() {
    this._rewards = new Map();
  }
  Object.defineProperty(OfferDescriptionRewards.prototype, "name", {
    get: function () {
      return o.ClientConstOffer.REWARD_COMPONENT_CONTAINER;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionRewards.prototype.registerOfferDescription = function (e) {
    e.addEntry(this.name, this);
  };
  OfferDescriptionRewards.prototype.parseFromObjectParam = function (e) {
    for (var t = 0; t < e.length; ++t) {
      this._rewards.set(e[t].name, a.CastleModel.privateOfferData.createOfferDescriptionRewardObject(e[t].name, e[t].params));
    }
  };
  OfferDescriptionRewards.prototype.toString = function () {
    var e = "Reward Descriptions";
    if (this._rewards != null) {
      for (var t = 0, i = Array.from(this._rewards.keys()); t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          e += "\n   " + n + " --> " + this._rewards.get(n);
        }
      }
    }
    return e;
  };
  Object.defineProperty(OfferDescriptionRewards.prototype, "rewards", {
    get: function () {
      return this._rewards;
    },
    enumerable: true,
    configurable: true
  });
  return OfferDescriptionRewards;
}();
exports.OfferDescriptionRewards = s;
n.classImplementsInterfaces(s, "IOfferDescription");