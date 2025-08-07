Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./22.js");
var a = require("./45.js");
var s = function () {
  function OfferDescriptionVisualFailedDialog(e) {
    this._dialogName = e;
  }
  Object.defineProperty(OfferDescriptionVisualFailedDialog.prototype, "name", {
    get: function () {
      return i.Constants_Offer.OFFER_VISUAL_FAILED_DIALOG;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionVisualFailedDialog.prototype.parseFromObjectParam = function (e) {
    this._dialogName = e.DN;
  };
  OfferDescriptionVisualFailedDialog.prototype.execute = function (e) {
    return true;
  };
  OfferDescriptionVisualFailedDialog.prototype.toExecuteInState = function (e) {
    return a.PrivateOfferStateEnum.isFailedState(e);
  };
  Object.defineProperty(OfferDescriptionVisualFailedDialog.prototype, "dialogName", {
    get: function () {
      return this._dialogName;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionVisualFailedDialog.prototype.dispose = function () {
    this._dialogName = null;
  };
  OfferDescriptionVisualFailedDialog.prototype.getCommandName = function () {
    return "PRIVATE_OFFER_FAILED_DIALOG";
  };
  return OfferDescriptionVisualFailedDialog;
}();
exports.OfferDescriptionVisualFailedDialog = s;