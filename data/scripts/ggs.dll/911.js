Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./37.js");
var a = function () {
  function OfferDescriptionDictionary() {
    this._dict = new Map();
  }
  OfferDescriptionDictionary.prototype.addEntry = function (e, t) {
    if (this._dict.get(e) !== undefined) {
      throw new Error("Offer Description already exists duplicates not allowed. Typename: " + e);
    }
    this._dict.set(e, t.constructor);
    return true;
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
    i.info("---- OfferDescriptionDictonary ----");
    for (var e = 0, t = Array.from(this._dict.keys()); e < t.length; e++) {
      var n = t[e];
      i.info("      " + n + " ---> " + this._dict.get(n).toString());
    }
  };
  return OfferDescriptionDictionary;
}();
exports.OfferDescriptionDictionary = a;