Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./51.js");
var s = require("./166.js");
var r = require("./184.js");
var l = function (e) {
  function PlayerGiftMerchantEventVO() {
    CONSTRUCTOR_HACK;
    return e.call(this) || this;
  }
  n.__extends(PlayerGiftMerchantEventVO, e);
  Object.defineProperty(PlayerGiftMerchantEventVO.prototype, "primesaleDescriptionTextID", {
    get: function () {
      return "dialog_primeday_primesale_giftTrader_description";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.BuyPackagesEventVO.prototype, "primesaleDescriptionTextID").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PlayerGiftMerchantEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return "eventBuilding_GiftTrader";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.BuyPackagesEventVO.prototype, "eventBuildingNameId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PlayerGiftMerchantEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return PlayerGiftMerchantEventVO.EVENT_BUILDING_WOD;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.BuyPackagesEventVO.prototype, "eventBuildingWOD").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  PlayerGiftMerchantEventVO.prototype.openMerchantDialog = function (e, t) {
    this.executeOpenDialog(e, c.PlayerGiftMerchantDialog, new s.CastleGenericMerchantDialogProperties(this, t));
  };
  Object.defineProperty(PlayerGiftMerchantEventVO.prototype, "eventFullsizeCharacterName", {
    get: function () {
      return a.ClientConstCharacter.CHARACTER_FULL_SIZE_ASSET_GIFT_TRADER;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.BuyPackagesEventVO.prototype, "eventFullsizeCharacterName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  PlayerGiftMerchantEventVO.__initialize_static_members = function () {
    PlayerGiftMerchantEventVO.EVENT_BUILDING_WOD = 318;
  };
  return PlayerGiftMerchantEventVO;
}(r.BuyPackagesEventVO);
exports.PlayerGiftMerchantEventVO = l;
var c = require("./4490.js");
o.classImplementsInterfaces(l, "IEventOverviewable", "IDiscountableEventPackagesVO", "IEventPackagesVO");
l.__initialize_static_members();