Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./22.js");
var a = require("./45.js");
var s = function () {
  function OfferDescriptionVisualIsoObject(e, t, n, i) {
    this._isVisible = false;
    this._objectType = e;
    this._objectName = t;
    this._areaTypes = n;
    this._isVisible = i;
  }
  Object.defineProperty(OfferDescriptionVisualIsoObject.prototype, "name", {
    get: function () {
      return i.Constants_Offer.OFFER_VISUAL_ISO_OBJECT;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionVisualIsoObject.prototype.parseFromObjectParam = function (e) {
    this._objectType = e.OT;
    this._objectName = e.ON;
    this._areaTypes = e.ATS;
    this._isVisible = false;
  };
  OfferDescriptionVisualIsoObject.prototype.execute = function (e) {
    if (e.offerState === a.PrivateOfferStateEnum.QUEST_STARTED || e.offerState === a.PrivateOfferStateEnum.QUEST_PENDING || e.offerState === a.PrivateOfferStateEnum.OFFER_READY || e.offerState === a.PrivateOfferStateEnum.OFFER_PENDING) {
      if (!this._isVisible && (this._isVisible = true, !this.executeVisibleHook())) {
        return false;
      }
    } else if (this._isVisible && (this._isVisible = false, !this.executeInvisibleHook())) {
      return false;
    }
    return true;
  };
  OfferDescriptionVisualIsoObject.prototype.executeVisibleHook = function () {
    return true;
  };
  OfferDescriptionVisualIsoObject.prototype.executeInvisibleHook = function () {
    return true;
  };
  OfferDescriptionVisualIsoObject.prototype.toExecuteInState = function (e) {
    return true;
  };
  OfferDescriptionVisualIsoObject.prototype.isIsoObjectVisibleByArea = function (e) {
    return !this._areaTypes || this._areaTypes.indexOf(e) > -1;
  };
  Object.defineProperty(OfferDescriptionVisualIsoObject.prototype, "objectType", {
    get: function () {
      return this._objectType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferDescriptionVisualIsoObject.prototype, "objectName", {
    get: function () {
      return this._objectName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferDescriptionVisualIsoObject.prototype, "areaTypes", {
    get: function () {
      return this._areaTypes;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferDescriptionVisualIsoObject.prototype, "isVisible", {
    get: function () {
      return this._isVisible;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionVisualIsoObject.prototype.dispose = function () {
    this._objectType = null;
    this._objectName = null;
  };
  OfferDescriptionVisualIsoObject.prototype.getCommandName = function () {
    return "PRIVATE_OFFER_VISUAL_ISO_OBJECT";
  };
  return OfferDescriptionVisualIsoObject;
}();
exports.OfferDescriptionVisualIsoObject = s;