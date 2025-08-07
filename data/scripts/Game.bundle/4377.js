Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./123.js");
var r = require("./4.js");
var l = require("./42.js");
var c = require("./256.js");
var u = require("./941.js");
var d = function (e) {
  function CastleArmorerEventDialog(t = null) {
    CONSTRUCTOR_HACK;
    return e.call(this, t ?? CastleArmorerEventDialog.NAME) || this;
  }
  n.__extends(CastleArmorerEventDialog, e);
  CastleArmorerEventDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_speechBubble, new a.LocalizedTextVO("dialog_armorerEvent_speechBubble")).verticalAlign = l.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.tabs = new u.PackageTabComponent(this.dialogDisp, this.bindFunction(this.onTabChanged));
    this.tabs.addTab(this.dialogDisp.tabAll, "eventBuilding_armorer_tabs_all", function (e) {
      return true;
    });
    this.tabs.addTab(this.dialogDisp.tabAttack, "eventBuilding_armorer_tabs_attackTools", function (e) {
      return (e.packageType == s.ClientConstPackages.PACKAGE_TYPE_SOLDIER || e.packageType == s.ClientConstPackages.PACKAGE_TYPE_TOOL) && e.reward.unitVO.isOffensive;
    });
    this.tabs.addTab(this.dialogDisp.tabDefence, "eventBuilding_armorer_tabs_defenseTools", function (e) {
      return (e.packageType == s.ClientConstPackages.PACKAGE_TYPE_SOLDIER || e.packageType == s.ClientConstPackages.PACKAGE_TYPE_TOOL) && !e.reward.unitVO.isOffensive;
    });
    this.tabs.addTab(this.dialogDisp.tabConstruction, "eventBuilding_armorer_tabs_construction", function (e) {
      return e.packageType == s.ClientConstPackages.PACKAGE_TYPE_CONSTRUCTION_ITEM || e.packageType == s.ClientConstPackages.PACKAGE_TYPE_REWARDBAG;
    });
    this.tabs.init();
  };
  CastleArmorerEventDialog.prototype.onTabChanged = function () {
    this.buyPackagesComponent.update(0);
  };
  Object.defineProperty(CastleArmorerEventDialog.prototype, "merchantScrollItem", {
    get: function () {
      return p.ArmorerMerchantScrollItem;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.CastleGenericMerchantDialog.prototype, "merchantScrollItem").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleArmorerEventDialog.prototype.createScrollItem = function (t) {
    if (this.tabs.isPackageInCurrentTab(t)) {
      return e.prototype.createScrollItem.call(this, t);
    } else {
      return null;
    }
  };
  CastleArmorerEventDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this.tabs.hide();
  };
  CastleArmorerEventDialog.prototype.showLoaded = function (t = null) {
    this.tabs.show();
    this.tabs.updateTabsEnablement(this.packageContainer.getVisiblePackages(r.CastleModel.userData.userLevel, r.CastleModel.userData.userLegendLevel, r.CastleModel.areaData.activeAreaInfo.areaType));
    e.prototype.showLoaded.call(this, t);
  };
  CastleArmorerEventDialog.__initialize_static_members = function () {
    CastleArmorerEventDialog.NAME = "CastleArmorerEventExternal";
  };
  return CastleArmorerEventDialog;
}(c.CastleGenericMerchantDialog);
exports.CastleArmorerEventDialog = d;
var p = require("./4378.js");
o.classImplementsInterfaces(d, "ICollectableRendererList");
d.__initialize_static_members();