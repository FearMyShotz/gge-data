Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function PrivateOfferDataEvent(t, i, n = true, o = false) {
    var a = this;
    CONSTRUCTOR_HACK;
    (a = e.call(this, t, n, o) || this).offerVO = i;
    return a;
  }
  n.__extends(PrivateOfferDataEvent, e);
  PrivateOfferDataEvent.__initialize_static_members = function () {
    PrivateOfferDataEvent.PRIVATE_OFFER_CREATED = "PRIVATE_OFFER_CREATED";
    PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED = "PRIVATE_OFFER_REMOVED";
    PrivateOfferDataEvent.PRIVATE_OFFER_STATE_CHANGED = "PRIVATE_OFFER_STATE_CHANGED";
    PrivateOfferDataEvent.PRIVATE_OFFER_UPDATED = "PRIVATE_OFFER_UPDATED";
  };
  return PrivateOfferDataEvent;
}(createjs.Event);
exports.PrivateOfferDataEvent = o;
o.__initialize_static_members();