Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./60.js");
var a = function () {
  function OfferDescriptionAutoAccept() {
    this._autoAccept = false;
  }
  Object.defineProperty(OfferDescriptionAutoAccept.prototype, "name", {
    get: function () {
      return o.ClientConstOffer.OFFER_AUTO_ACCEPT;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionAutoAccept.prototype.registerOfferDescription = function (e) {
    e.addEntry(this.name, this);
  };
  OfferDescriptionAutoAccept.prototype.parseFromObjectParam = function (e) {
    this._autoAccept = !!e;
  };
  Object.defineProperty(OfferDescriptionAutoAccept.prototype, "autoAccept", {
    get: function () {
      return this._autoAccept;
    },
    enumerable: true,
    configurable: true
  });
  return OfferDescriptionAutoAccept;
}();
exports.OfferDescriptionAutoAccept = a;
n.classImplementsInterfaces(a, "IOfferDescription");