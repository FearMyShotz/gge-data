Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function OfferDescriptionDictionary() {
    this._dict = new Map();
  }
  OfferDescriptionDictionary.prototype.addEntry = function (e, t) {
    if (this._dict.get(e) === undefined) {
      this._dict.set(e, t.constructor);
      return true;
    }
    throw new Error("Offer Description already exists duplicates not allowed. Typename: " + e);
  };
  OfferDescriptionDictionary.prototype.removeEntry = function (e) {
    var t = this._dict.get(e);
    if (t) {
      this._dict.delete(e);
    }
    return t;
  };
  OfferDescriptionDictionary.prototype.clear = function () {
    this._dict = new Map();
  };
  OfferDescriptionDictionary.prototype.getEntry = function (e) {
    return this._dict.get(e);
  };
  OfferDescriptionDictionary.prototype.hasEntry = function (e) {
    return this._dict.get(e) !== undefined;
  };
  OfferDescriptionDictionary.prototype.traceAllEntries = function () {
    var e;
    o.info("---- OfferDescriptionDictonary ----");
    if (this._dict != null) {
      for (var t = 0, i = Array.from(this._dict.keys()); t < i.length; t++) {
        if ((e = i[t]) !== undefined) {
          o.info("      " + e + " ---> " + this._dict.get(e).toString());
        }
      }
    }
  };
  return OfferDescriptionDictionary;
}();
exports.OfferDescriptionDictionary = n;
var o = require("./2.js");