Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./22.js");
var a = function () {
  function OfferDescriptionVisualRewardSlotOrder(e) {
    this._sortOrder = e;
  }
  Object.defineProperty(OfferDescriptionVisualRewardSlotOrder.prototype, "name", {
    get: function () {
      return i.Constants_Offer.OFFER_VISUAL_REWARD_SLOT_ORDER;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionVisualRewardSlotOrder.prototype.parseFromObjectParam = function (e) {
    this._sortOrder = e.SO;
  };
  OfferDescriptionVisualRewardSlotOrder.prototype.execute = function (e) {
    return true;
  };
  OfferDescriptionVisualRewardSlotOrder.prototype.toExecuteInState = function (e) {
    return false;
  };
  Object.defineProperty(OfferDescriptionVisualRewardSlotOrder.prototype, "sortOrder", {
    get: function () {
      return this._sortOrder;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionVisualRewardSlotOrder.prototype.dispose = function () {};
  OfferDescriptionVisualRewardSlotOrder.prototype.getCommandName = function () {
    return "";
  };
  return OfferDescriptionVisualRewardSlotOrder;
}();
exports.OfferDescriptionVisualRewardSlotOrder = a;