Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastlePrimeDayRewardXMLNode() {
    this._paymentrewardID = 0;
    this._c2ForReward = 0;
    this._shownCurrencyValue = 0;
    this._shownOfferBonus = 0;
    this._displayType = 0;
  }
  CastlePrimeDayRewardXMLNode.prototype.parseXML = function (e) {
    this._paymentrewardID = parseInt(o.CastleXMLUtils.getValueOrDefault("paymentrewardID", e, "-1", false));
    this._c2ForReward = parseInt(o.CastleXMLUtils.getValueOrDefault("c2ForReward", e, "-1", false));
    this._shownCurrencyValue = parseInt(o.CastleXMLUtils.getValueOrDefault("shownCurrencyValue", e, "-1", false));
    this._shownOfferBonus = parseInt(o.CastleXMLUtils.getValueOrDefault("shownOfferBonus", e, "-1", false));
    this._displayType = parseInt(o.CastleXMLUtils.getValueOrDefault("displayType", e, "-1", false));
  };
  Object.defineProperty(CastlePrimeDayRewardXMLNode.prototype, "paymentrewardID", {
    get: function () {
      return this._paymentrewardID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePrimeDayRewardXMLNode.prototype, "c2ForReward", {
    get: function () {
      return this._c2ForReward;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePrimeDayRewardXMLNode.prototype, "shownCurrencyValue", {
    get: function () {
      return this._shownCurrencyValue;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePrimeDayRewardXMLNode.prototype, "shownOfferBonus", {
    get: function () {
      return this._shownOfferBonus;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePrimeDayRewardXMLNode.prototype, "displayType", {
    get: function () {
      return this._displayType;
    },
    enumerable: true,
    configurable: true
  });
  return CastlePrimeDayRewardXMLNode;
}();
exports.CastlePrimeDayRewardXMLNode = n;
var o = require("./22.js");