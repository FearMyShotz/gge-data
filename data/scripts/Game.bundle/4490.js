Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./123.js");
var c = require("./4.js");
var u = require("./256.js");
var d = require("./942.js");
var p = function (e) {
  function PlayerGiftMerchantDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, PlayerGiftMerchantDialog.NAME) || this;
  }
  n.__extends(PlayerGiftMerchantDialog, e);
  PlayerGiftMerchantDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this.tabs.hide();
  };
  PlayerGiftMerchantDialog.prototype.showLoaded = function (t = null) {
    var i = this.packageContainer.getVisiblePackages(c.CastleModel.userData.userLevel, c.CastleModel.userData.userLegendLevel, c.CastleModel.areaData.activeAreaInfo.areaType);
    this.tabs.updateTabsEnablement(i);
    this.tabs.show();
    e.prototype.showLoaded.call(this, t);
  };
  PlayerGiftMerchantDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.tabs = new d.PackageTabComponent(this.dialogDisp, this.bindFunction(this.onFilterChanged));
    this.tabs.addTab(this.dialogDisp.tabAll, "dialog_giftTrader_allGifts_tooltip", function (e) {
      return true;
    });
    this.tabs.addTab(this.dialogDisp.tabRes, "dialog_giftTrader_resources_tooltip", function (e) {
      return a.instanceOfClass(e.reward, "ACollectableItemResourceVO");
    });
    this.tabs.addTab(this.dialogDisp.tabGold, "dialog_giftTrader_coins_tooltip", function (e) {
      return e.reward.itemType == h.CollectableEnum.C1;
    });
    this.tabs.addTab(this.dialogDisp.tabTool, "dialog_giftTrader_toolsAndUnits_tooltip", function (e) {
      return e.packageType == l.ClientConstPackages.PACKAGE_TYPE_TOOL || e.packageType == l.ClientConstPackages.PACKAGE_TYPE_SOLDIER;
    });
    this.tabs.addTab(this.dialogDisp.tabEquipment, "dialog_giftTrader_equipment_tooltip", function (e) {
      return e.packageType == l.ClientConstPackages.PACKAGE_TYPE_ITEM || e.packageType == l.ClientConstPackages.PACKAGE_TYPE_GEM || e.packageType == l.ClientConstPackages.PACKAGE_TYPE_HERO;
    });
    this.tabs.init();
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new r.LocalizedTextVO("dialog_giftTrader_desc"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new r.LocalizedTextVO("dialog_giftTrader_infoGraphic_tooltip"));
    this.dialogDisp.btn_help.toolTipText = "generic_help";
  };
  Object.defineProperty(PlayerGiftMerchantDialog.prototype, "merchantScrollItem", {
    get: function () {
      return C.PlayerGiftMerchantScrollItem;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleGenericMerchantDialog.prototype, "merchantScrollItem").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  PlayerGiftMerchantDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        return;
      case this.dialogDisp.btn_help:
        this.onHelpButton();
    }
  };
  PlayerGiftMerchantDialog.prototype.onHelpButton = function () {
    g.CastleDialogHandler.getInstance().showHelper("", s.Localize.text("help_giftTrader"));
  };
  PlayerGiftMerchantDialog.prototype.initBasicButtons = function (t) {
    t = t.concat([this.dialogDisp.btn_close, this.dialogDisp.itemList.btn_up, this.dialogDisp.itemList.btn_down, this.dialogDisp.btn_help]);
    e.prototype.initBasicButtons.call(this, t);
  };
  PlayerGiftMerchantDialog.prototype.createScrollItem = function (t) {
    if (this.tabs.isPackageInCurrentTab(t)) {
      return e.prototype.createScrollItem.call(this, t);
    } else {
      return null;
    }
  };
  PlayerGiftMerchantDialog.prototype.onFilterChanged = function () {
    this.buyPackagesComponent.update(0);
  };
  PlayerGiftMerchantDialog.__initialize_static_members = function () {
    PlayerGiftMerchantDialog.NAME = "CastleGiftTraderExternal";
  };
  return PlayerGiftMerchantDialog;
}(u.CastleGenericMerchantDialog);
exports.PlayerGiftMerchantDialog = p;
var h = require("./12.js");
var g = require("./9.js");
var C = require("./4491.js");
o.classImplementsInterfaces(p, "ICollectableRendererList");
p.__initialize_static_members();