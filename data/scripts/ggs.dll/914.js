Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./22.js");
var a = function () {
  function OfferDescriptionRewards(e) {
    this._model = e;
  }
  Object.defineProperty(OfferDescriptionRewards.prototype, "name", {
    get: function () {
      return i.Constants_Offer.REWARD_COMPONENT_CONTAINER;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionRewards.prototype.registerOfferDescription = function (e) {
    e.addEntry(this.name, this);
  };
  OfferDescriptionRewards.prototype.parseFromObjectParam = function (e) {
    this.parseListOfRewards(e);
  };
  OfferDescriptionRewards.prototype.toString = function () {
    var e = "Reward Descriptions";
    for (var t = 0, n = Array.from(this._rewards.keys()); t < n.length; t++) {
      var i = n[t];
      e += "\n   " + i + " --> " + this._rewards.get(i);
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
  OfferDescriptionRewards.prototype.parseListOfRewards = function (e) {
    this._rewards = new Map();
    for (var t = 0; t < e.length; ++t) {
      this._rewards.set(e[t].name, this._model.createOfferDescriptionRewardObject(e[t].name, e[t].params));
    }
  };
  OfferDescriptionRewards.prototype.dispose = function () {
    if (this._rewards) {
      for (var e = 0, t = Array.from(this._rewards.values()); e < t.length; e++) {
        var n = t[e];
        if (typeof n.dispose == "function") {
          n.dispose();
        }
      }
      this._rewards = null;
    }
    this._model = null;
  };
  return OfferDescriptionRewards;
}();
exports.OfferDescriptionRewards = a;