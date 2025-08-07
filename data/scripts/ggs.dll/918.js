Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./22.js");
var a = require("./45.js");
var s = function () {
  function OfferDescriptionVisualInterfaceButton(e, t, n, i) {
    this._buttonType = e;
    this._panelType = t;
    this._tooltipId = n;
    this._isVisible = i;
  }
  Object.defineProperty(OfferDescriptionVisualInterfaceButton.prototype, "name", {
    get: function () {
      return i.Constants_Offer.OFFER_VISUAL_INTERFACE_BUTTON;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionVisualInterfaceButton.prototype.parseFromObjectParam = function (e) {
    this._buttonType = e.BT;
    this._panelType = e.PT;
    this._tooltipId = e.TID;
    this._isVisible = false;
  };
  OfferDescriptionVisualInterfaceButton.prototype.execute = function (e) {
    if (e.offerState === a.PrivateOfferStateEnum.QUEST_STARTED || e.offerState === a.PrivateOfferStateEnum.QUEST_PENDING || e.offerState === a.PrivateOfferStateEnum.OFFER_READY || e.offerState === a.PrivateOfferStateEnum.OFFER_PENDING) {
      if (!this._isVisible && !this.IsInvisbleAtExecutionHook()) {
        return false;
      }
    } else if (this._isVisible && !this.isVisibleAtExecutionHook()) {
      return false;
    }
    return true;
  };
  OfferDescriptionVisualInterfaceButton.prototype.IsInvisbleAtExecutionHook = function () {
    return true;
  };
  OfferDescriptionVisualInterfaceButton.prototype.isVisibleAtExecutionHook = function () {
    return true;
  };
  OfferDescriptionVisualInterfaceButton.prototype.toExecuteInState = function (e) {
    return true;
  };
  OfferDescriptionVisualInterfaceButton.prototype.dispose = function () {
    this._buttonType = null;
    this._tooltipId = null;
  };
  Object.defineProperty(OfferDescriptionVisualInterfaceButton.prototype, "buttonType", {
    get: function () {
      return this._buttonType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferDescriptionVisualInterfaceButton.prototype, "panelType", {
    get: function () {
      return this._panelType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferDescriptionVisualInterfaceButton.prototype, "tooltipId", {
    get: function () {
      return this._tooltipId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferDescriptionVisualInterfaceButton.prototype, "isVisible", {
    get: function () {
      return this._isVisible;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionVisualInterfaceButton.prototype.getCommandName = function () {
    return "PRIVATE_OFFER_INTERFACE_BUTTON";
  };
  return OfferDescriptionVisualInterfaceButton;
}();
exports.OfferDescriptionVisualInterfaceButton = s;