Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function OfferDescriptionAdditionalDictionary() {
    this._dict = new Map();
  }
  OfferDescriptionAdditionalDictionary.prototype.addEntry = function (e, t) {
    if (this._dict.get(e) === undefined) {
      this._dict.set(e, t.constructor);
      return true;
    }
    throw new Error("Offer Description Reward already exists duplicates not allowed. parameterName: " + e);
  };
  OfferDescriptionAdditionalDictionary.prototype.removeEntry = function (e) {
    var t = this._dict.get(e);
    if (t) {
      this._dict.delete(e);
    }
    return t;
  };
  OfferDescriptionAdditionalDictionary.prototype.clear = function () {
    this._dict = new Map();
  };
  OfferDescriptionAdditionalDictionary.prototype.getEntry = function (e) {
    return this._dict.get(e);
  };
  OfferDescriptionAdditionalDictionary.prototype.hasEntry = function (e) {
    return this._dict.get(e) !== undefined;
  };
  OfferDescriptionAdditionalDictionary.prototype.traceAllEntries = function () {
    var e;
    o.info("---- OfferDescriptionAdditionalDictionary ----");
    if (this._dict != null) {
      for (var t = 0, i = Array.from(this._dict.keys()); t < i.length; t++) {
        if ((e = i[t]) !== undefined) {
          o.info("      " + e + " ---> " + this._dict.get(e).toString());
        }
      }
    }
  };
  return OfferDescriptionAdditionalDictionary;
}();
exports.OfferDescriptionAdditionalDictionary = n;
var o = require("./2.js");