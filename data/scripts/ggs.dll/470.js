Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./22.js");
var a = function () {
  function OfferDescriptionAutoAccept(e = false) {
    this._autoAccept = e;
  }
  Object.defineProperty(OfferDescriptionAutoAccept.prototype, "name", {
    get: function () {
      return i.Constants_Offer.OFFER_AUTO_ACCEPT;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionAutoAccept.prototype.registerOfferDescription = function (e) {
    e.addEntry(this.name, this);
  };
  OfferDescriptionAutoAccept.prototype.parseFromObjectParam = function (e) {
    this._autoAccept = e;
  };
  Object.defineProperty(OfferDescriptionAutoAccept.prototype, "autoAccept", {
    get: function () {
      return this._autoAccept;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionAutoAccept.prototype.dispose = function () {};
  return OfferDescriptionAutoAccept;
}();
exports.OfferDescriptionAutoAccept = a;