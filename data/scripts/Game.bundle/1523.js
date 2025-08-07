Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./1524.js");
var l = require("./192.js");
var c = require("./4.js");
var u = require("./8.js");
var d = require("./11.js");
var p = require("./2791.js");
var h = function (e) {
  function CastleResourceVillageOverviewDialog() {
    return e.call(this, CastleResourceVillageOverviewDialog.NAME) || this;
  }
  n.__extends(CastleResourceVillageOverviewDialog, e);
  CastleResourceVillageOverviewDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new a.LocalizedTextVO("dialog_privateResourceVillages_header"));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_shop.txt_label, new a.LocalizedTextVO("dialog_privateResourceVillages_shopButton"));
    this.filterComponent = new f.ResourceVillageFilterComponent(this.dialogDisp);
    this.listComponent = new g.SliderItemScrollList(this.dialogDisp, this.dialogDisp);
    this.listComponent.scrollItemClass = C.CastleResourceVillageListItem;
    u.ButtonHelper.initBasicButtons([this.dialogDisp.btn_shop, this.dialogDisp.btn_help, this.dialogDisp.btn_close, this.dialogDisp.btn_up, this.dialogDisp.btn_down]);
    this.dialogDisp.btn_help.toolTipText = "generic_help";
  };
  CastleResourceVillageOverviewDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.filterComponent.onShow();
    this.filterComponent.kingdomChangeSignal.add(this.bindFunction(this.onKingdomChange));
    this.filterComponent.villageTypeChangeSignal.add(this.bindFunction(this.onVillageTypeChange));
    c.CastleModel.kingdomData.addEventListener(l.CastleKingdomEvent.KINGDOM_VILLAGELIST_ARRIVED, this.bindFunction(this.onDataUpdated));
    c.CastleModel.smartfoxClient.sendCommandVO(new r.C2SKingdomGetVillageListVO());
    this.isWaitingForServerMessage = true;
    this.dialogDisp.visible = false;
  };
  CastleResourceVillageOverviewDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this.filterComponent.onHide();
    this.filterComponent.kingdomChangeSignal.remove(this.bindFunction(this.onKingdomChange));
    this.filterComponent.villageTypeChangeSignal.remove(this.bindFunction(this.onVillageTypeChange));
    c.CastleModel.kingdomData.removeEventListener(l.CastleKingdomEvent.KINGDOM_VILLAGELIST_ARRIVED, this.bindFunction(this.onDataUpdated));
  };
  CastleResourceVillageOverviewDialog.prototype.onDataUpdated = function (e) {
    this.isWaitingForServerMessage = false;
    this._villageList = e.params;
    this.fillList(this.listComponent.currentStartIndex);
    this.dialogDisp.visible = true;
  };
  CastleResourceVillageOverviewDialog.prototype.onKingdomChange = function () {
    this.fillList();
  };
  CastleResourceVillageOverviewDialog.prototype.onVillageTypeChange = function () {
    this.fillList();
  };
  CastleResourceVillageOverviewDialog.prototype.fillList = function (e = 0) {
    this.listComponent.clear();
    if (!this.isWaitingForServerMessage) {
      var t = this._villageList.getSortedVillageListByKingdomID(this.filterComponent.currentKingdomID);
      if ((t = t.filter(this.bindFunction(this.filterByType))) != null) {
        for (var i = 0, n = t; i < n.length; i++) {
          var o = n[i];
          if (o !== undefined) {
            var a = new _.CastleResourceVillageListItemVO(o.villageMapObjectVO, o.unitInventory.getUnits(null));
            this.listComponent.pushContent(a);
          }
        }
      }
      var s = this._villageList.getPrivateVillageList(this.filterComponent.currentKingdomID, this.filterComponent.currentVillageType);
      if (s != null) {
        for (var r = 0, l = s; r < l.length; r++) {
          var c = l[r];
          if (c !== undefined) {
            var u = new _.CastleResourceVillageListItemVO(null, null, c);
            this.listComponent.pushContent(u);
          }
        }
      }
      this.listComponent.initList(e);
    }
  };
  CastleResourceVillageOverviewDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (u.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_shop:
          d.CastleExternalDialog.dialogHandler.registerDefaultDialogs(m.PrivateResourceVillageShopDialog, new p.PrivateResourceVillageShopDialogProperties(this.filterComponent.currentVillageType));
          break;
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          d.CastleExternalDialog.dialogHandler.showHelper("", s.Localize.text("dialog_privateResourceVillages_help"));
      }
    }
  };
  CastleResourceVillageOverviewDialog.prototype.filterByType = function (e) {
    var t = [];
    for (var i = 1; i < arguments.length; i++) {
      t[i - 1] = arguments[i];
    }
    return e.villageMapObjectVO.villageType == this.filterComponent.currentVillageType;
  };
  CastleResourceVillageOverviewDialog.NAME = "CastleResourceVillageOverview";
  return CastleResourceVillageOverviewDialog;
}(d.CastleExternalDialog);
exports.CastleResourceVillageOverviewDialog = h;
var g = require("./314.js");
var C = require("./2792.js");
var _ = require("./2798.js");
var m = require("./1526.js");
var f = require("./1527.js");
o.classImplementsInterfaces(h, "ICollectableRendererList");