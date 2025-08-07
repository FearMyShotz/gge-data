Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./22.js");
var a = require("./45.js");
var s = function () {
  function OfferDescriptionVisualFinishDialog(e) {
    this._dialogName = e;
  }
  Object.defineProperty(OfferDescriptionVisualFinishDialog.prototype, "name", {
    get: function () {
      return i.Constants_Offer.OFFER_VISUAL_FINISH_DIALOG;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionVisualFinishDialog.prototype.parseFromObjectParam = function (e) {
    this._dialogName = e.DN;
  };
  OfferDescriptionVisualFinishDialog.prototype.execute = function (e) {
    return true;
  };
  OfferDescriptionVisualFinishDialog.prototype.toExecuteInState = function (e) {
    return e === a.PrivateOfferStateEnum.OFFER_SUCCEEDED;
  };
  Object.defineProperty(OfferDescriptionVisualFinishDialog.prototype, "dialogName", {
    get: function () {
      return this._dialogName;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionVisualFinishDialog.prototype.dispose = function () {
    this._dialogName = null;
  };
  OfferDescriptionVisualFinishDialog.prototype.getCommandName = function () {
    return "PRIVATE_OFFER_FINISH_DIALOG";
  };
  return OfferDescriptionVisualFinishDialog;
}();
exports.OfferDescriptionVisualFinishDialog = s;