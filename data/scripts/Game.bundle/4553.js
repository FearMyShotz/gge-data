Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./4.js");
var s = require("./52.js");
var r = require("./1919.js");
var l = function (e) {
  function CastleUnderworldEventDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleUnderworldEventDialog.NAME) || this;
  }
  n.__extends(CastleUnderworldEventDialog, e);
  Object.defineProperty(CastleUnderworldEventDialog.prototype, "descriptionText", {
    get: function () {
      return "dialog_seasonEvent_64_camp_desc";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.CastleSpecialCurrencyMerchantDialogTypeHardMode.prototype, "descriptionText").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUnderworldEventDialog.prototype, "detailedDescriptionText", {
    get: function () {
      return "dialog_seasonEvent_64_camp_desc_detail";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.CastleSpecialCurrencyMerchantDialogTypeHardMode.prototype, "detailedDescriptionText").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUnderworldEventDialog.prototype, "travelTooltipText", {
    get: function () {
      if (a.CastleModel.specialEventData.isSeasonEventActive) {
        return Object.getOwnPropertyDescriptor(r.CastleSpecialCurrencyMerchantDialogTypeHardMode.prototype, "travelTooltipText").get.call(this);
      } else {
        return "event_underworld_eventEnded_tooltip";
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.CastleSpecialCurrencyMerchantDialogTypeHardMode.prototype, "travelTooltipText").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUnderworldEventDialog.prototype, "userCurrency1", {
    get: function () {
      return new u.CollectableTypeVO(c.CollectableEnum.GENERIC_CURRENCY, s.ClientConstCurrency.ID_SILVER_RUNE);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.CastleSpecialCurrencyMerchantDialogTypeHardMode.prototype, "userCurrency1").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUnderworldEventDialog.prototype, "userCurrency2", {
    get: function () {
      return new u.CollectableTypeVO(c.CollectableEnum.GENERIC_CURRENCY, s.ClientConstCurrency.ID_GOLD_RUNE);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.CastleSpecialCurrencyMerchantDialogTypeHardMode.prototype, "userCurrency2").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUnderworldEventDialog.prototype, "merchantScrollItem", {
    get: function () {
      return d.CastleUnderworldMerchantScrollItem;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.CastleSpecialCurrencyMerchantDialogTypeHardMode.prototype, "merchantScrollItem").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleUnderworldEventDialog.__initialize_static_members = function () {
    CastleUnderworldEventDialog.NAME = "CastleUnderworldEvent";
  };
  return CastleUnderworldEventDialog;
}(r.CastleSpecialCurrencyMerchantDialogTypeHardMode);
exports.CastleUnderworldEventDialog = l;
var c = require("./12.js");
var u = require("./74.js");
var d = require("./4554.js");
o.classImplementsInterfaces(l, "ICollectableRendererList");
l.__initialize_static_members();