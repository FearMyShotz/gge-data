Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./60.js");
var a = require("./4.js");
var s = function () {
  function OfferDescriptionAdditionalPackageIDs() {
    this._ids = [];
  }
  Object.defineProperty(OfferDescriptionAdditionalPackageIDs.prototype, "name", {
    get: function () {
      return o.ClientConstOffer.OFFER_ADDITIONAL_PACKAGE_IDS;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionAdditionalPackageIDs.prototype.registerRewardParameter = function (e) {
    e.addEntry(this.name, this);
  };
  OfferDescriptionAdditionalPackageIDs.prototype.parseFromObjectParam = function (e) {
    this._ids = [];
    if (e) {
      for (var t = e.IDS, i = 0; i < t.length; ++i) {
        this._ids.push(t[i]);
      }
    }
  };
  Object.defineProperty(OfferDescriptionAdditionalPackageIDs.prototype, "ids", {
    get: function () {
      return this._ids;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionAdditionalPackageIDs.prototype.getVisiblePackages = function (e, t, i) {
    var n = [];
    for (var o = 0; o < this._ids.length; ++o) {
      var s = a.CastleModel.eventPackageData.getEventPackageByID(this._ids[o]);
      s.topPackage = false;
      if (s.isVisible(e, t, i)) {
        n.push(s);
      }
    }
    return n;
  };
  OfferDescriptionAdditionalPackageIDs.prototype.containsEventPackage = function (e) {
    for (var t = 0; t < this._ids.length; ++t) {
      if (a.CastleModel.eventPackageData.getEventPackageByID(this._ids[t]).packageID == e) {
        return true;
      }
    }
    return false;
  };
  return OfferDescriptionAdditionalPackageIDs;
}();
exports.OfferDescriptionAdditionalPackageIDs = s;
n.classImplementsInterfaces(s, "IOfferDescriptionAdditionalParameter", "IEventPackagesVO");