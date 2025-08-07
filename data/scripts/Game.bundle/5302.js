Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./60.js");
var a = require("./4.js");
var s = function () {
  function OfferDescriptionVisuals() {
    this._visuals = new Map();
  }
  Object.defineProperty(OfferDescriptionVisuals.prototype, "name", {
    get: function () {
      return o.ClientConstOffer.VISUAL_COMPONENT_CONTAINER;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionVisuals.prototype.registerOfferDescription = function (e) {
    e.addEntry(this.name, this);
  };
  OfferDescriptionVisuals.prototype.parseFromObjectParam = function (e) {
    for (var t = 0; t < e.length; ++t) {
      this._visuals.set(e[t].name, a.CastleModel.privateOfferData.createOfferDescriptionVisualObject(e[t].name, e[t].params));
    }
  };
  OfferDescriptionVisuals.prototype.toString = function () {
    var e = "Visual Descriptions";
    if (this._visuals != null) {
      for (var t = 0, i = Array.from(this._visuals.keys()); t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          e += "\n   " + n + " --> " + this._visuals.get(n);
        }
      }
    }
    return e;
  };
  Object.defineProperty(OfferDescriptionVisuals.prototype, "visuals", {
    get: function () {
      return this._visuals;
    },
    enumerable: true,
    configurable: true
  });
  return OfferDescriptionVisuals;
}();
exports.OfferDescriptionVisuals = s;
n.classImplementsInterfaces(s, "IOfferDescription");