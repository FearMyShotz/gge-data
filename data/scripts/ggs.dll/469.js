Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./470.js");
var a = require("./471.js");
var s = require("./472.js");
var r = require("./22.js");
var o = function () {
  function BasicOfferDescriptionFactory(e) {
    this.modelData = e;
  }
  BasicOfferDescriptionFactory.prototype.createOfferDescriptionObject = function (e, t) {
    var n;
    switch (e) {
      case r.Constants_Offer.OFFER_AUTO_ACCEPT:
        n = new i.OfferDescriptionAutoAccept(t);
        break;
      case r.Constants_Offer.OFFER_COST_C1:
        n = new a.OfferDescriptionCostC1(Number(t));
        break;
      case r.Constants_Offer.OFFER_COST_C2:
        n = new s.OfferDescriptionCostC2(Number(t));
    }
    return n;
  };
  BasicOfferDescriptionFactory.prototype.dispose = function () {
    this.modelData = null;
  };
  return BasicOfferDescriptionFactory;
}();
exports.BasicOfferDescriptionFactory = o;