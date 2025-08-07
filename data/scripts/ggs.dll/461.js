Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = function (e) {
  function PrivateOfferDataEvent(t, n, i = true, a = false) {
    var s = e.call(this, t, i, a) || this;
    s.offerVO = n;
    return s;
  }
  i.__extends(PrivateOfferDataEvent, e);
  PrivateOfferDataEvent.PRIVATE_OFFER_CREATED = "PRIVATE_OFFER_CREATED";
  PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED = "PRIVATE_OFFER_REMOVED";
  PrivateOfferDataEvent.PRIVATE_OFFER_STATE_CHANGED = "PRIVATE_OFFER_STATE_CHANGED";
  return PrivateOfferDataEvent;
}(createjs.Event);
exports.PrivateOfferDataEvent = a;