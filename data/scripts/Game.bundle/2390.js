Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./123.js");
var l = require("./2391.js");
var c = require("./4.js");
var u = require("./1342.js");
var d = function (e) {
  function CastlePlayerGiftSliderGiveDialog() {
    return e.call(this, CastlePlayerGiftSliderGiveDialog.NAME) || this;
  }
  n.__extends(CastlePlayerGiftSliderGiveDialog, e);
  CastlePlayerGiftSliderGiveDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.btn_cancel, this.dialogDisp.btn_ok, this.dialogDisp.btn_info]);
  };
  CastlePlayerGiftSliderGiveDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.updateTexts();
  };
  Object.defineProperty(CastlePlayerGiftSliderGiveDialog.prototype, "physicalPackageLimit", {
    get: function () {
      return c.CastleModel.playerGiftData.getPackageAmountByPackageID(this.dialogProperties_0.packageID);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastlePlayerGiftMerchantBuyDialog.prototype, "physicalPackageLimit").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastlePlayerGiftSliderGiveDialog.prototype.getDescriptionTextID = function () {
    if (this.amountSlider.selectedIndex + 1 == 1) {
      return "dialog_giftTrader_selection_singular";
    } else {
      return "dialog_giftTrader_selection_plural";
    }
  };
  CastlePlayerGiftSliderGiveDialog.prototype.getPackageName = function (e) {
    if (a.instanceOfClass(e.reward, "ACollectableItemResourceVO")) {
      return "dialog_giftTrader_resources_placeholder";
    } else if (e.reward.itemType == p.CollectableEnum.C1) {
      return "dialog_giftTrader_coins_placeholder";
    } else if (e.packageType == r.ClientConstPackages.PACKAGE_TYPE_TOOL) {
      return "dialog_giftTrader_tools_placeholder";
    } else if (e.packageType == r.ClientConstPackages.PACKAGE_TYPE_SOLDIER) {
      return "dialog_giftTrader_units_placeholder";
    } else if (e.packageType == r.ClientConstPackages.PACKAGE_TYPE_ITEM || e.packageType == r.ClientConstPackages.PACKAGE_TYPE_GEM || e.packageType == r.ClientConstPackages.PACKAGE_TYPE_HERO) {
      return "dialog_giftTrader_equipment_placeholder";
    } else if (e.packageType == r.ClientConstPackages.PACKAGE_TYPE_MINUTE_SKIP) {
      return "dialog_giftTrader_timeSkip_placeholder";
    } else {
      return null;
    }
  };
  CastlePlayerGiftSliderGiveDialog.prototype.updateTexts = function () {
    var e;
    e = this.amountSlider.selectedIndex + 1 == 1 ? [c.CastleModel.playerGiftData.playerName, this.getPackageName(this.packageVO_0), this.amountPicker.amountFactor] : [c.CastleModel.playerGiftData.playerName, s.Localize.number(this.amountSlider.selectedIndex + 1), this.getPackageName(this.packageVO_0), this.amountPicker.amountFactor];
    this.setDescriptionText(this.getDescriptionTextID(), e);
  };
  CastlePlayerGiftSliderGiveDialog.prototype.handleDiscount = function () {};
  CastlePlayerGiftSliderGiveDialog.prototype.onChangePackageAmount = function (t = null) {
    e.prototype.onChangePackageAmount.call(this, t);
    this.updateTexts();
  };
  CastlePlayerGiftSliderGiveDialog.prototype.getMaxBuyablePackages = function () {
    return this.physicalPackageLimit;
  };
  CastlePlayerGiftSliderGiveDialog.prototype.updateSliderAndPickerVisibility = function () {};
  CastlePlayerGiftSliderGiveDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (t.target == this.dialogDisp.btn_help) {
      h.CastleDialogHandler.getInstance().showHelper("", s.Localize.text("help_giftTrader_selection"));
    }
  };
  CastlePlayerGiftSliderGiveDialog.prototype.onBtnOkClick = function () {
    c.CastleModel.smartfoxClient.sendCommandVO(new l.GPGCommandVO(this.dialogProperties_0.receivingPlayerID, this.dialogProperties_0.packageID, this.amountSlider.selectedIndex + 1));
  };
  Object.defineProperty(CastlePlayerGiftSliderGiveDialog.prototype, "dialogTitle", {
    get: function () {
      return "dialog_giftTrader_sendGift_title";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastlePlayerGiftMerchantBuyDialog.prototype, "dialogTitle").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePlayerGiftSliderGiveDialog.prototype, "packageVO_0", {
    get: function () {
      return c.CastleModel.playerGiftData.getPackageVOByID(this.dialogProperties_0.packageID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePlayerGiftSliderGiveDialog.prototype, "dialogProperties_0", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastlePlayerGiftSliderGiveDialog.NAME = "CastlePlayerGiftSliderGive";
  return CastlePlayerGiftSliderGiveDialog;
}(u.CastlePlayerGiftMerchantBuyDialog);
exports.CastlePlayerGiftSliderGiveDialog = d;
var p = require("./12.js");
var h = require("./9.js");
o.classImplementsInterfaces(d, "ICollectableRendererList");