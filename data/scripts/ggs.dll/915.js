Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./22.js");
var a = function () {
  function OfferDescriptionVisuals(e) {
    this._visuals = new Map();
    this._model = e;
  }
  Object.defineProperty(OfferDescriptionVisuals.prototype, "name", {
    get: function () {
      return i.Constants_Offer.VISUAL_COMPONENT_CONTAINER;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionVisuals.prototype.registerOfferDescription = function (e) {
    e.addEntry(this.name, this);
  };
  OfferDescriptionVisuals.prototype.parseFromObjectParam = function (e) {
    for (var t = 0; t < e.length; ++t) {
      this._visuals.set(e[t].name, this._model.createOfferDescriptionVisualObject(e[t].name, e[t].params));
    }
  };
  OfferDescriptionVisuals.prototype.toString = function () {
    var e = "Visual Descriptions";
    for (var t = 0, n = Array.from(this._visuals.keys()); t < n.length; t++) {
      var i = n[t];
      e += "\n   " + i + " --> " + this._visuals.get(i);
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
  OfferDescriptionVisuals.prototype.dispose = function () {
    if (this._visuals) {
      for (var e = 0, t = Array.from(this._visuals.values()); e < t.length; e++) {
        var n = t[e];
        if (typeof n.dispose == "function") {
          n.dispose();
        }
      }
      this._visuals = null;
    }
    this._model = null;
  };
  return OfferDescriptionVisuals;
}();
exports.OfferDescriptionVisuals = a;