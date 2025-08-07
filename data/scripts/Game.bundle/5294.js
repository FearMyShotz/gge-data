Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./60.js");
var a = require("./4.js");
var s = function () {
  function OfferDescriptionAdditionals() {
    this._additionals = new Map();
  }
  Object.defineProperty(OfferDescriptionAdditionals.prototype, "name", {
    get: function () {
      return o.ClientConstOffer.ADDITIONAL_COMPONENT_CONTAINER;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionAdditionals.prototype.registerOfferDescription = function (e) {
    e.addEntry(this.name, this);
  };
  OfferDescriptionAdditionals.prototype.parseFromObjectParam = function (e) {
    for (var t = 0; t < e.length; ++t) {
      this._additionals.set(e[t].name, a.CastleModel.privateOfferData.createOfferDescriptionAdditionalObject(e[t].name, e[t].params));
    }
  };
  OfferDescriptionAdditionals.prototype.toString = function () {
    var e = "Additional-Component Descriptions";
    if (this._additionals != null) {
      for (var t = 0, i = Array.from(this._additionals.keys()); t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          e += "\n   " + n + " --> " + this._additionals.get(n);
        }
      }
    }
    return e;
  };
  OfferDescriptionAdditionals.prototype.getByName = function (e) {
    return this._additionals.get(e);
  };
  Object.defineProperty(OfferDescriptionAdditionals.prototype, "additionals", {
    get: function () {
      return this._additionals;
    },
    enumerable: true,
    configurable: true
  });
  return OfferDescriptionAdditionals;
}();
exports.OfferDescriptionAdditionals = s;
n.classImplementsInterfaces(s, "IOfferDescription");