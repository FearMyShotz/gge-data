Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./52.js");
var s = require("./1045.js");
var r = function (e) {
  function CastleSeaQueenEventDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleSeaQueenEventDialog.NAME) || this;
  }
  n.__extends(CastleSeaQueenEventDialog, e);
  Object.defineProperty(CastleSeaQueenEventDialog.prototype, "descriptionText", {
    get: function () {
      return "dialog_seasonEvent_4_camp_desc";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.CastleSpecialCurrencyMerchantDialog.prototype, "descriptionText").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSeaQueenEventDialog.prototype, "detailedDescriptionText", {
    get: function () {
      return "dialog_seasonEvent_4_camp_desc_detail";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.CastleSpecialCurrencyMerchantDialog.prototype, "detailedDescriptionText").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSeaQueenEventDialog.prototype, "merchantScrollItem", {
    get: function () {
      return u.CastleSeaQueenMerchantScrollItem;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.CastleSpecialCurrencyMerchantDialog.prototype, "merchantScrollItem").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSeaQueenEventDialog.prototype, "isEvent", {
    get: function () {
      return true;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.CastleSpecialCurrencyMerchantDialog.prototype, "isEvent").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSeaQueenEventDialog.prototype, "userSpecialCurrencies", {
    get: function () {
      var e = [];
      e.push(new c.CollectableTypeVO(l.CollectableEnum.GENERIC_CURRENCY, a.ClientConstCurrency.ID_PEARL_RELIC));
      return e;
    },
    enumerable: true,
    configurable: true
  });
  CastleSeaQueenEventDialog.__initialize_static_members = function () {
    CastleSeaQueenEventDialog.NAME = "CastleSeaqueenEvent";
  };
  return CastleSeaQueenEventDialog;
}(s.CastleSpecialCurrencyMerchantDialog);
exports.CastleSeaQueenEventDialog = r;
var l = require("./12.js");
var c = require("./74.js");
var u = require("./4525.js");
o.classImplementsInterfaces(r, "ICollectableRendererList");
r.__initialize_static_members();