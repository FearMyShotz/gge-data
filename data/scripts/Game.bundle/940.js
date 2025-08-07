Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./6.js");
var d = require("./123.js");
var p = require("./1341.js");
var h = require("./4.js");
var g = require("./2387.js");
var C = require("./8.js");
var _ = require("./11.js");
var m = require("./941.js");
var f = function (e) {
  function CastlePlayerGiftSelectionDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastlePlayerGiftSelectionDialog.NAME) || this;
  }
  n.__extends(CastlePlayerGiftSelectionDialog, e);
  CastlePlayerGiftSelectionDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.tabs = new m.PackageTabComponent(this.dialogDisp, this.bindFunction(this.onFilterChanged));
    this.tabs.addTab(this.dialogDisp.tabAll, "dialog_giftTrader_allGifts_tooltip", function (e) {
      return true;
    });
    this.tabs.addTab(this.dialogDisp.tabRes, "dialog_giftTrader_resources_tooltip", function (e) {
      return s.instanceOfClass(e.reward, "ACollectableItemResourceVO");
    });
    this.tabs.addTab(this.dialogDisp.tabGold, "dialog_giftTrader_coins_tooltip", function (e) {
      return e.reward.itemType == O.CollectableEnum.C1;
    });
    this.tabs.addTab(this.dialogDisp.tabTool, "dialog_giftTrader_toolsAndUnits_tooltip", function (e) {
      return e.packageType == d.ClientConstPackages.PACKAGE_TYPE_TOOL || e.packageType == d.ClientConstPackages.PACKAGE_TYPE_SOLDIER;
    });
    this.tabs.addTab(this.dialogDisp.tabEquipment, "dialog_giftTrader_equipment_tooltip", function (e) {
      return e.packageType == d.ClientConstPackages.PACKAGE_TYPE_ITEM || e.packageType == d.ClientConstPackages.PACKAGE_TYPE_GEM || e.packageType == d.ClientConstPackages.PACKAGE_TYPE_HERO;
    });
    this.tabs.init();
  };
  CastlePlayerGiftSelectionDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    C.ButtonHelper.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.itemList.btn_up, this.dialogDisp.itemList.btn_down, this.dialogDisp.btn_help]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new c.LocalizedTextVO("dialog_giftTrader_sendGift_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.noGifts.txt_description, new c.LocalizedTextVO("giftTrader_noGifts"));
    this.updateGiftPackageAmount(h.CastleModel.playerGiftData.giftPackagesInInventoryAmount);
    this.dialogDisp.package_counter.mouseChildren = false;
    this.tabs.show();
    h.CastleModel.playerGiftData.receivingPlayerID = this.playerGiftSelectionProperties.playerID;
    h.CastleModel.playerGiftData.addEventListener(p.PlayerGiftEvent.PLAYER_GIFT_LIST_RECEIVED, this.bindFunction(this.onGiftListUpdate));
  };
  CastlePlayerGiftSelectionDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this.tabs.hide();
    if (this.packageScrollList) {
      this.packageScrollList.remove();
      this.packageScrollList.clear();
      this.packageScrollList = null;
    }
    h.CastleModel.playerGiftData.removeEventListener(p.PlayerGiftEvent.PLAYER_GIFT_LIST_RECEIVED, this.bindFunction(this.onGiftListUpdate));
  };
  CastlePlayerGiftSelectionDialog.prototype.updateGiftPackageAmount = function (e) {
    this.textFieldManager.registerTextField(this.dialogDisp.package_counter.txt_giftAmount, new c.LocalizedTextVO("value_proportional_value", [e, r.PackageConst.MAX_PLAYER_GIFT_STORAGE]));
  };
  CastlePlayerGiftSelectionDialog.prototype.onGiftListUpdate = function (e) {
    this.updateGiftPackageAmount(h.CastleModel.playerGiftData.giftPackagesInInventoryAmount);
    this.initScrollList(this.packageScrollList.currentStartIndex);
    this.updateListVisibility();
  };
  CastlePlayerGiftSelectionDialog.prototype.onHelpButton = function () {
    E.CastleDialogHandler.getInstance().showHelper("", l.Localize.text("help_giftTrader_category"));
  };
  CastlePlayerGiftSelectionDialog.prototype.fillScrollList = function () {
    for (var e = 0, t = h.CastleModel.playerGiftData.giftEventPackageVOs; e < t.length; e++) {
      var i = t[e];
      if (i !== undefined && this.tabs.isPackageInCurrentTab(i)) {
        var n = new g.PlayerGiftSelectionScrollItemVO();
        if (u.int(CastlePlayerGiftSelectionDialog.getMaxSelectableAmount(i)) <= 0) {
          continue;
        }
        n.eventPackageVO = i;
        n.amount = u.int(CastlePlayerGiftSelectionDialog.getMaxSelectableAmount(i));
        this.packageScrollList.pushContent(n);
      }
    }
  };
  CastlePlayerGiftSelectionDialog.getMaxSelectableAmount = function (e) {
    return h.CastleModel.playerGiftData.getGiftVOByEventPackageVO(e).amount;
  };
  CastlePlayerGiftSelectionDialog.prototype.onFilterChanged = function () {
    this.initScrollList(0);
    this.updateListVisibility();
    this.updateGiftPackageAmount(this.countFilteredPackages());
    this.dialogDisp.package_counter.toolTipText = this.tabs.isFilterReset ? "giftTrader_giftCount_all_tooltip" : "giftTrader_giftCount_allCategory_tooltip";
  };
  CastlePlayerGiftSelectionDialog.prototype.updateListVisibility = function () {
    this.dialogDisp.itemList.visible = h.CastleModel.playerGiftData.playerGifts.length > 0;
    this.dialogDisp.noGifts.visible = !this.dialogDisp.itemList.visible;
  };
  Object.defineProperty(CastlePlayerGiftSelectionDialog.prototype, "playerGiftSelectionProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastlePlayerGiftSelectionDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_help:
        this.onHelpButton();
    }
  };
  CastlePlayerGiftSelectionDialog.prototype.countFilteredPackages = function () {
    var e = 0;
    for (var t = 0, i = h.CastleModel.playerGiftData.giftEventPackageVOs; t < i.length; t++) {
      var n = i[t];
      if (n !== undefined && this.tabs.isPackageInCurrentTab(n)) {
        e += u.int(h.CastleModel.playerGiftData.getGiftVOByEventPackageVO(n).amount);
      }
    }
    return e;
  };
  CastlePlayerGiftSelectionDialog.prototype.initScrollList = function (e) {
    if (this.packageScrollList) {
      this.packageScrollList.remove();
      this.packageScrollList.clear();
      this.packageScrollList = null;
    }
    this.packageScrollList = new o.ItemScrollList(this.dialogDisp.itemList);
    this.packageScrollList.scrollItemClass = y.CastlePlayerGiftSelectionScrollItem;
    this.packageScrollList.scrollStep = d.ClientConstPackages.SCROLL_STEP;
    this.fillScrollList();
    this.packageScrollList.hideButtons = true;
    this.packageScrollList.initList(e, true);
  };
  CastlePlayerGiftSelectionDialog.__initialize_static_members = function () {
    CastlePlayerGiftSelectionDialog.NAME = "CastlePlayerGiftSelection";
  };
  return CastlePlayerGiftSelectionDialog;
}(_.CastleExternalDialog);
exports.CastlePlayerGiftSelectionDialog = f;
var O = require("./12.js");
var E = require("./9.js");
var y = require("./2388.js");
a.classImplementsInterfaces(f, "ICollectableRendererList");
f.__initialize_static_members();