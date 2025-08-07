Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./52.js");
var s = require("./1920.js");
var r = function (e) {
  function CastleThornkingEventDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleThornkingEventDialog.NAME) || this;
  }
  n.__extends(CastleThornkingEventDialog, e);
  Object.defineProperty(CastleThornkingEventDialog.prototype, "descriptionText", {
    get: function () {
      return "dialog_seasonEvent_2_camp_desc";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.CastleSpecialCurrencyMerchantDialogTypeHardMode.prototype, "descriptionText").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleThornkingEventDialog.prototype, "detailedDescriptionText", {
    get: function () {
      return "dialog_seasonEvent_2_camp_desc_detail";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.CastleSpecialCurrencyMerchantDialogTypeHardMode.prototype, "detailedDescriptionText").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleThornkingEventDialog.prototype, "userCurrency1", {
    get: function () {
      return new c.CollectableTypeVO(l.CollectableEnum.GENERIC_CURRENCY, a.ClientConstCurrency.ID_SKULL_RELIC);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.CastleSpecialCurrencyMerchantDialogTypeHardMode.prototype, "userCurrency1").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleThornkingEventDialog.prototype, "userCurrency2", {
    get: function () {
      return new c.CollectableTypeVO(l.CollectableEnum.GENERIC_CURRENCY, a.ClientConstCurrency.ID_GREEN_SKULL_RELIC);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.CastleSpecialCurrencyMerchantDialogTypeHardMode.prototype, "userCurrency2").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleThornkingEventDialog.prototype, "merchantScrollItem", {
    get: function () {
      return u.CastleThornkingMerchantScrollItem;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.CastleSpecialCurrencyMerchantDialogTypeHardMode.prototype, "merchantScrollItem").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleThornkingEventDialog.__initialize_static_members = function () {
    CastleThornkingEventDialog.NAME = "CastleThornkingEvent";
  };
  return CastleThornkingEventDialog;
}(s.CastleSpecialCurrencyMerchantDialogTypeHardMode);
exports.CastleThornkingEventDialog = r;
var l = require("./12.js");
var c = require("./74.js");
var u = require("./4546.js");
o.classImplementsInterfaces(r, "ICollectableRendererList");
r.__initialize_static_members();