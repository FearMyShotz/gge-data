Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./6.js");
var a = require("./60.js");
var s = function () {
  function OfferDescriptionAdditionalBuildingID() {
    this._buildingID = 0;
  }
  Object.defineProperty(OfferDescriptionAdditionalBuildingID.prototype, "name", {
    get: function () {
      return a.ClientConstOffer.OFFER_ADDITIONAL_BUILDING_ID;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionAdditionalBuildingID.prototype.registerRewardParameter = function (e) {
    e.addEntry(this.name, this);
  };
  OfferDescriptionAdditionalBuildingID.prototype.parseFromObjectParam = function (e) {
    this._buildingID = o.int(e.wodID);
  };
  Object.defineProperty(OfferDescriptionAdditionalBuildingID.prototype, "ID", {
    get: function () {
      return this._buildingID;
    },
    enumerable: true,
    configurable: true
  });
  return OfferDescriptionAdditionalBuildingID;
}();
exports.OfferDescriptionAdditionalBuildingID = s;
n.classImplementsInterfaces(s, "IOfferDescriptionAdditionalParameter");