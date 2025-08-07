Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./60.js");
var a = require("./227.js");
var s = function () {
  function OfferDescriptionVisualTreasureChestObject() {
    this._isVisible = false;
  }
  Object.defineProperty(OfferDescriptionVisualTreasureChestObject.prototype, "name", {
    get: function () {
      return o.ClientConstOffer.OFFER_VISUAL_TREASURE_CHEST;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionVisualTreasureChestObject.prototype.registerVisualParameter = function (e) {
    e.addEntry(this.name, this);
  };
  OfferDescriptionVisualTreasureChestObject.prototype.parseFromObjectParam = function (e) {
    this._objectType = e.OT;
    this._objectName = e.ON;
    this._areaTypes = e.ATS;
    this._isVisible = false;
  };
  OfferDescriptionVisualTreasureChestObject.prototype.execute = function (e) {
    this._isVisible = e.offerState === a.PrivateOfferStateEnum.QUEST_STARTED || e.offerState === a.PrivateOfferStateEnum.QUEST_PENDING || e.offerState === a.PrivateOfferStateEnum.OFFER_READY || e.offerState === a.PrivateOfferStateEnum.OFFER_PENDING;
    if (l.Iso.data) {
      l.Iso.controller.dataUpdater.initObjects(r.IsoObjectGroupEnum.TREASURE_CHESTS);
    }
    return true;
  };
  OfferDescriptionVisualTreasureChestObject.prototype.checkVisibility = function () {};
  OfferDescriptionVisualTreasureChestObject.prototype.toExecuteInState = function (e) {
    return true;
  };
  OfferDescriptionVisualTreasureChestObject.prototype.isTreasureChestVisibleByArea = function (e) {
    return !this._areaTypes || this._areaTypes.indexOf(e) > -1;
  };
  Object.defineProperty(OfferDescriptionVisualTreasureChestObject.prototype, "objectType", {
    get: function () {
      return this._objectType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferDescriptionVisualTreasureChestObject.prototype, "objectName", {
    get: function () {
      return this._objectName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferDescriptionVisualTreasureChestObject.prototype, "areaTypes", {
    get: function () {
      return this._areaTypes;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferDescriptionVisualTreasureChestObject.prototype, "isVisible", {
    get: function () {
      return this._isVisible;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferDescriptionVisualTreasureChestObject.prototype, "offerBuilding", {
    get: function () {
      return this._offerBuilding;
    },
    set: function (e) {
      this._offerBuilding = e;
    },
    enumerable: true,
    configurable: true
  });
  return OfferDescriptionVisualTreasureChestObject;
}();
exports.OfferDescriptionVisualTreasureChestObject = s;
var r = require("./143.js");
var l = require("./34.js");
n.classImplementsInterfaces(s, "IOfferDescriptionVisualParameter");