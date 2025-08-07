Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./60.js");
var a = require("./226.js");
var s = require("./5332.js");
var r = function () {
  function OfferDescriptionVisualIsoObject() {
    this._isVisible = false;
    this._hiddenByABTest = false;
  }
  Object.defineProperty(OfferDescriptionVisualIsoObject.prototype, "name", {
    get: function () {
      return o.ClientConstOffer.OFFER_VISUAL_ISO_OBJECT;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionVisualIsoObject.prototype.registerVisualParameter = function (e) {
    e.addEntry(this.name, this);
  };
  OfferDescriptionVisualIsoObject.prototype.parseFromObjectParam = function (e) {
    var t;
    this._objectType = e.OT;
    this._objectName = e.ON;
    this._areaTypes = e.ATS;
    this._iconForStates = [];
    if (e.IFS) {
      for (var i = 0, n = e.IFS; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && o.OS) {
          for (var r = 0, l = o.OS; r < l.length; r++) {
            var c = l[r];
            if (c !== undefined) {
              (t = new s.IconStateVO()).iconClassName = o.ICN;
              t.offerState = a.PrivateOfferStateEnum.getEnumByStateId(c);
              this._iconForStates.push(t);
            }
          }
        }
      }
    }
    this._isVisible = false;
  };
  OfferDescriptionVisualIsoObject.prototype.execute = function (e) {
    this._isVisible = e.offerState === a.PrivateOfferStateEnum.QUEST_STARTED || e.offerState === a.PrivateOfferStateEnum.QUEST_PENDING || e.offerState === a.PrivateOfferStateEnum.OFFER_READY || e.offerState === a.PrivateOfferStateEnum.OFFER_PENDING;
    if (this._hiddenByABTest) {
      this._isVisible = false;
    }
    if (l.Iso.data) {
      l.Iso.data.updater.updateEventBuildings();
    }
    return true;
  };
  OfferDescriptionVisualIsoObject.prototype.getIconClassNameForOfferState = function (e) {
    if (this._iconForStates != null) {
      for (var t = 0, i = this._iconForStates; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.offerState === e) {
          return n.iconClassName;
        }
      }
    }
    return null;
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
  Object.defineProperty(OfferDescriptionVisualIsoObject.prototype, "hiddenByABTest", {
    set: function (e) {
      this._hiddenByABTest = e;
    },
    enumerable: true,
    configurable: true
  });
  return OfferDescriptionVisualIsoObject;
}();
exports.OfferDescriptionVisualIsoObject = r;
var l = require("./33.js");
n.classImplementsInterfaces(r, "IOfferDescriptionVisualParameter");