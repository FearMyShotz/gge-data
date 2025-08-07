Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./60.js");
var a = require("./341.js");
var s = require("./226.js");
var r = function () {
  function OfferDescriptionVisualFailedDialog() {}
  Object.defineProperty(OfferDescriptionVisualFailedDialog.prototype, "name", {
    get: function () {
      return o.ClientConstOffer.OFFER_VISUAL_FAILED_DIALOG;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionVisualFailedDialog.prototype.registerVisualParameter = function (e) {
    e.addEntry(this.name, this);
  };
  OfferDescriptionVisualFailedDialog.prototype.parseFromObjectParam = function (e) {
    this._dialogName = e.DN;
    if (e.DC != null) {
      this._dialogCustomization = e.DC;
    }
  };
  OfferDescriptionVisualFailedDialog.prototype.execute = function (e) {
    l.CastleDialogHandler.getInstance().registerDefaultDialogs(this._dialogName, new a.CastlePrivateOfferDialogProperties(e));
    return true;
  };
  OfferDescriptionVisualFailedDialog.prototype.toExecuteInState = function (e) {
    return s.PrivateOfferStateEnum.isVisualFailedState(e);
  };
  Object.defineProperty(OfferDescriptionVisualFailedDialog.prototype, "dialogName", {
    get: function () {
      return this._dialogName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferDescriptionVisualFailedDialog.prototype, "dialogCustomization", {
    get: function () {
      return this._dialogCustomization;
    },
    enumerable: true,
    configurable: true
  });
  return OfferDescriptionVisualFailedDialog;
}();
exports.OfferDescriptionVisualFailedDialog = r;
var l = require("./9.js");
n.classImplementsInterfaces(r, "IOfferDescriptionVisualParameter");