Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleAllianceGiftEvent(t, i = null, n = false, o = false) {
    var a = this;
    CONSTRUCTOR_HACK;
    (a = e.call(this, t, n, o) || this)._collectedGifts = i;
    return a;
  }
  n.__extends(CastleAllianceGiftEvent, e);
  Object.defineProperty(CastleAllianceGiftEvent.prototype, "collectedGifts", {
    get: function () {
      return this._collectedGifts;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceGiftEvent.__initialize_static_members = function () {
    CastleAllianceGiftEvent.DATA_UPDATED = "giftListUpdated";
    CastleAllianceGiftEvent.GIFT_COLLECTED = "giftCollected";
  };
  return CastleAllianceGiftEvent;
}(createjs.Event);
exports.CastleAllianceGiftEvent = o;
o.__initialize_static_members();