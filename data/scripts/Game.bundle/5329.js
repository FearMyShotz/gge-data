Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./60.js");
var a = require("./341.js");
var s = require("./4.js");
var r = require("./227.js");
var l = function () {
  function OfferDescriptionVisualFinishDialog() {}
  Object.defineProperty(OfferDescriptionVisualFinishDialog.prototype, "name", {
    get: function () {
      return o.ClientConstOffer.OFFER_VISUAL_FINISH_DIALOG;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionVisualFinishDialog.prototype.registerVisualParameter = function (e) {
    e.addEntry(this.name, this);
  };
  OfferDescriptionVisualFinishDialog.prototype.parseFromObjectParam = function (e) {
    this._dialogName = e.DN;
    if (e.DC != null) {
      this._dialogCustomization = e.DC;
    }
  };
  OfferDescriptionVisualFinishDialog.prototype.execute = function (e) {
    var t = s.CastleModel.privateOfferData.offerMultiRewardChoice.get(e.id);
    if (t) {
      if (t != null) {
        for (var i = 0, n = t; i < n.length; i++) {
          var o = n[i];
          if (o !== undefined) {
            c.CastleDialogHandler.getInstance().registerDefaultDialogs(this._dialogName, new a.CastlePrivateOfferDialogProperties(e, o), true);
          }
        }
      }
    } else {
      c.CastleDialogHandler.getInstance().registerDefaultDialogs(this._dialogName, new a.CastlePrivateOfferDialogProperties(e), true);
    }
    return true;
  };
  OfferDescriptionVisualFinishDialog.prototype.toExecuteInState = function (e) {
    return e === r.PrivateOfferStateEnum.OFFER_SUCCEEDED || e === r.PrivateOfferStateEnum.ITERATION_SUCCEEDED;
  };
  Object.defineProperty(OfferDescriptionVisualFinishDialog.prototype, "dialogName", {
    get: function () {
      return this._dialogName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferDescriptionVisualFinishDialog.prototype, "dialogCustomization", {
    get: function () {
      return this._dialogCustomization;
    },
    enumerable: true,
    configurable: true
  });
  return OfferDescriptionVisualFinishDialog;
}();
exports.OfferDescriptionVisualFinishDialog = l;
var c = require("./9.js");
n.classImplementsInterfaces(l, "IOfferDescriptionVisualParameter");