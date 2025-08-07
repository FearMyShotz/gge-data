Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleOfferDataEvent(t, i, n = true, o = false) {
    var a = this;
    CONSTRUCTOR_HACK;
    (a = e.call(this, t, n, o) || this).offerVO = i;
    return a;
  }
  n.__extends(CastleOfferDataEvent, e);
  CastleOfferDataEvent.__initialize_static_members = function () {
    CastleOfferDataEvent.OFFER_ADDED = "OFFER_ADDED";
    CastleOfferDataEvent.OFFER_ENDED = "OFFER_ENDED";
  };
  return CastleOfferDataEvent;
}(createjs.Event);
exports.CastleOfferDataEvent = o;
o.__initialize_static_members();