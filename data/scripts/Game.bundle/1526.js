Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./436.js");
var r = require("./4.js");
var l = require("./273.js");
var c = require("./1207.js");
var u = require("./8.js");
var d = require("./11.js");
var p = require("./2799.js");
var h = function (e) {
  function PrivateResourceVillageShopDialog() {
    return e.call(this, PrivateResourceVillageShopDialog.ASSET_NAME) || this;
  }
  n.__extends(PrivateResourceVillageShopDialog, e);
  PrivateResourceVillageShopDialog.prototype.onKingdomChange = function () {
    this.onVillageTypeChange();
  };
  PrivateResourceVillageShopDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help]);
    this.filterComponent = new m.ResourceVillageFilterComponent(this.dialogDisp);
    this.filterComponent.kingdomChangeSignal.add(this.bindFunction(this.onKingdomChange));
    this.filterComponent.villageTypeChangeSignal.add(this.bindFunction(this.onVillageTypeChange));
  };
  PrivateResourceVillageShopDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this.filterComponent.onHide();
  };
  PrivateResourceVillageShopDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.filterComponent.onShow();
    this.filterComponent.setVillageType(this.dialogProperties.villageType);
  };
  PrivateResourceVillageShopDialog.prototype.onVillageTypeChange = function () {
    var e = r.CastleModel.privateResourceVillageData.getPrivateVillages(this.filterComponent.currentKingdomID, this.filterComponent.currentVillageType);
    var t = Math.ceil(e.length / _.PrivateResourceVillageShopItem.NUM_ITEMS_PER_PAGE);
    var i = new l.BasicSliderVO(this.dialogDisp.mc_villages.mc_sliderLine, this.dialogDisp.mc_villages.btn_slider, t);
    u.ButtonHelper.initBasicButton(this.dialogDisp.mc_villages.btn_up);
    u.ButtonHelper.initBasicButton(this.dialogDisp.mc_villages.btn_down);
    this.removePackageScrollList();
    this.itemsList = new C.SliderItemScrollList(this.dialogDisp.mc_villages, this.dialogDisp, i, new c.VerticalSliderStrategy());
    this.itemsList.scrollStep = _.PrivateResourceVillageShopItem.NUM_ITEMS_PER_PAGE;
    this.itemsList.scrollItemClass = _.PrivateResourceVillageShopItem;
    var n = r.CastleModel.userData.villageList.getCountByRessourceType(this.filterComponent.currentKingdomID, s.ClientConstKingdom.getVillageTypeName(this.filterComponent.currentVillageType)) < r.CastleModel.kingdomData.getKingdomVOByID(this.filterComponent.currentKingdomID).getVillageCapByType(this.filterComponent.currentVillageType);
    if (e != null) {
      for (var o = 0, a = e; o < a.length; o++) {
        var d = a[o];
        if (d !== undefined) {
          this.itemsList.pushContent(new p.PrivateResourceVillageShopItemVO(d, n));
        }
      }
    }
    this.itemsList.initList(0, false);
  };
  PrivateResourceVillageShopDialog.prototype.removePackageScrollList = function () {
    if (this.itemsList) {
      this.itemsList.remove();
      this.itemsList.clear();
      this.itemsList = null;
    }
  };
  PrivateResourceVillageShopDialog.prototype.onClick = function (t) {
    if (!this.isLocked && u.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          g.CastleDialogHandler.getInstance().showHelper("", a.Localize.text("dialog_privateResourceVillages_shop_help"));
      }
    }
  };
  Object.defineProperty(PrivateResourceVillageShopDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  PrivateResourceVillageShopDialog.ASSET_NAME = "PrivateResourceVillageShopDialog";
  return PrivateResourceVillageShopDialog;
}(d.CastleExternalDialog);
exports.PrivateResourceVillageShopDialog = h;
var g = require("./9.js");
var C = require("./314.js");
var _ = require("./2800.js");
var m = require("./1527.js");
o.classImplementsInterfaces(h, "ICollectableRendererList");