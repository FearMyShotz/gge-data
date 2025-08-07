Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./1.js");
var a = require("./60.js");
var s = require("./341.js");
var r = require("./4.js");
var l = require("./295.js");
var c = require("./227.js");
var u = function () {
  function OfferDescriptionVisualOfferDialog() {
    this._autoShow = false;
    this.hasShownAutoShowDialog = false;
  }
  Object.defineProperty(OfferDescriptionVisualOfferDialog.prototype, "name", {
    get: function () {
      return a.ClientConstOffer.OFFER_VISUAL_OFFER_DIALOG;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionVisualOfferDialog.prototype.registerVisualParameter = function (e) {
    e.addEntry(this.name, this);
  };
  OfferDescriptionVisualOfferDialog.prototype.parseFromObjectParam = function (e) {
    if (e.DN) {
      this._dialogName = e.DN;
    }
    if (e.AS != null) {
      this._autoShow = !!e.AS;
    } else {
      this._autoShow = true;
    }
    if (e.DC != null) {
      this._dialogCustomization = e.DC;
    }
  };
  OfferDescriptionVisualOfferDialog.prototype.execute = function (e) {
    if (e.offerState === c.PrivateOfferStateEnum.OFFER_READY && e.hasAutoAccept() && e.getCostsForOfferAcception().length <= 0) {
      return true;
    }
    if (this._autoShow && !this.hasShownAutoShowDialog) {
      var t = n.castAs(e.getAdditionalComponentByName(a.ClientConstOffer.OFFER_ADDITIONAL_PRIME_SALE), "OfferDescriptionAdditionalPrimeSale");
      var i = n.castAs(e.getAdditionalComponentByName(a.ClientConstOffer.OFFER_ADDITIONAL_PRIME_SALE_UPGRADE), "OfferDescriptionAdditionalPrimeSaleUpgrade");
      if (t && !t.primeSaleComponent.isAvailableInKingdom() || i && !i.primeSaleComponent.isAvailableInKingdom()) {
        return false;
      }
      if (e.getAdditionalComponentByName(a.ClientConstOffer.OFFER_ADDITIONAL_PRIME_SALE_SKIP) && !r.CastleModel.skipDiscountData.isBestOfferSoFar(e)) {
        return true;
      }
      var o = new l.PaymentPopupDialogInfoVO(this._dialogName, new s.CastlePrivateOfferDialogProperties(e), e.getPopupType(), true);
      var u = p.CastlePrivateOfferDialogCreator.getPrivateOfferDialogClass(this._dialogName);
      if (u) {
        d.CastleDialogHandler.getInstance().registerDialogsWithType(u, o.properties, o.blockDialogs, o.priority, 0, o.type);
      }
      this.hasShownAutoShowDialog = true;
    }
    return true;
  };
  OfferDescriptionVisualOfferDialog.prototype.toExecuteInState = function (e) {
    return e === c.PrivateOfferStateEnum.OFFER_PENDING || e === c.PrivateOfferStateEnum.OFFER_READY;
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
  Object.defineProperty(OfferDescriptionVisualOfferDialog.prototype, "dialogCustomization", {
    get: function () {
      return this._dialogCustomization;
    },
    enumerable: true,
    configurable: true
  });
  return OfferDescriptionVisualOfferDialog;
}();
exports.OfferDescriptionVisualOfferDialog = u;
var d = require("./9.js");
var p = require("./666.js");
o.classImplementsInterfaces(u, "IOfferDescriptionVisualParameter");