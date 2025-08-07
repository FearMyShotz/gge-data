Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./22.js");
var a = require("./45.js");
var s = function () {
  function OfferDescriptionVisualOfferDialog(e, t) {
    this._autoShow = false;
    this._dialogName = e;
    this._autoShow = t;
  }
  Object.defineProperty(OfferDescriptionVisualOfferDialog.prototype, "name", {
    get: function () {
      return i.Constants_Offer.OFFER_VISUAL_OFFER_DIALOG;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionVisualOfferDialog.prototype.parseFromObjectParam = function (e) {
    if (e.DN) {
      this._dialogName = e.DN;
    } else {
      this._dialogName = e.ODN;
    }
    if (e.AS != null) {
      this._autoShow = e.AS;
    } else {
      this._autoShow = true;
    }
  };
  OfferDescriptionVisualOfferDialog.prototype.execute = function (e) {
    this.ExecutionHook();
    return true;
  };
  OfferDescriptionVisualOfferDialog.prototype.ExecutionHook = function () {
    return false;
  };
  OfferDescriptionVisualOfferDialog.prototype.toExecuteInState = function (e) {
    return e === a.PrivateOfferStateEnum.OFFER_PENDING || e === a.PrivateOfferStateEnum.OFFER_READY;
  };
  Object.defineProperty(OfferDescriptionVisualOfferDialog.prototype, "dialogName", {
    get: function () {
      return this._dialogName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferDescriptionVisualOfferDialog.prototype, "autoShow", {
    get: function () {
      return this._autoShow;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionVisualOfferDialog.prototype.dispose = function () {
    this._dialogName = null;
  };
  OfferDescriptionVisualOfferDialog.prototype.getCommandName = function () {
    return "PRIVATE_OFFER_OFFER_DIALOG";
  };
  return OfferDescriptionVisualOfferDialog;
}();
exports.OfferDescriptionVisualOfferDialog = s;