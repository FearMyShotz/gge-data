Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./52.js");
var l = require("./8.js");
var c = require("./11.js");
var u = function (e) {
  function APrivateResourceVillageActionDialog() {
    var t = this;
    t._cost = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this, APrivateResourceVillageActionDialog.NAME) || this;
  }
  n.__extends(APrivateResourceVillageActionDialog, e);
  APrivateResourceVillageActionDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    l.ButtonHelper.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.btn_cancel]);
    this.itxt_cost = this.textFieldManager.registerTextField(this.dialogDisp.mc_costs.txt_cost, new a.LocalizedNumberVO(0));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_costs.txt_costText, new s.LocalizedTextVO("cost"));
  };
  APrivateResourceVillageActionDialog.prototype.applyPropertiesLoaded = function (t = null) {
    e.prototype.applyPropertiesLoaded.call(this, t);
    h.CastlePrivateResourceVillageRenderHelper.renderVillage(this.dialogProperties.villageInfoVO.type, this.dialogDisp.mc_villageHolder, 200, 127);
    this.dialogDisp.mc_crest.gotoAndStop(this.dialogProperties.villageInfoVO.kingdomID + 1);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_level, new s.LocalizedTextVO("ci_level", [this.dialogProperties.villageInfoVO.villageLevel]));
    this.dialogDisp.mc_buy.visible = false;
    this.dialogDisp.mc_upgrade.visible = false;
    this.dialogDisp.mc_costs.visible = false;
    this.dialogDisp.mc_costs.mouseChildren = false;
    this.dialogDisp.mc_costs.toolTipText = "currency_name_ResourceVillageToken";
    this.dialogDisp.mc_exclamationMark.visible = false;
    l.ButtonHelper.delayEnableButton(this.dialogDisp.btn_ok, true, 1000);
  };
  APrivateResourceVillageActionDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (l.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_ok:
          if (g.CostHelper.getAvailableGoods(new d.CollectableTypeVO().initByCollectable(new p.CollectableItemGenericCurrencyVO(r.ClientConstCurrency.ID_RESOURCE_VILLAGE_TOKEN))) < this._cost) {
            c.CastleExternalDialog.dialogHandler.registerDefaultDialogs(C.CastleNotEnoughVillageTokensDialog);
          } else {
            this.onConfirm();
          }
          this.hide();
          break;
        case this.dialogDisp.btn_cancel:
        case this.dialogDisp.btn_close:
          this.hide();
      }
    }
  };
  APrivateResourceVillageActionDialog.prototype.fillCosts = function (e) {
    this.itxt_cost.textContentVO.numberValue = e;
    g.CostHelper.setCurrencyTextFieldColor(this.itxt_cost, new d.CollectableTypeVO().initByCollectable(new p.CollectableItemGenericCurrencyVO(r.ClientConstCurrency.ID_RESOURCE_VILLAGE_TOKEN)), e);
  };
  APrivateResourceVillageActionDialog.prototype.onConfirm = function () {};
  Object.defineProperty(APrivateResourceVillageActionDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  APrivateResourceVillageActionDialog.NAME = "PrivateResourceVillageAction";
  return APrivateResourceVillageActionDialog;
}(c.CastleExternalDialog);
exports.APrivateResourceVillageActionDialog = u;
o.classImplementsInterfaces(u, "ICollectableRendererList");
var d = require("./74.js");
var p = require("./155.js");
var h = require("./534.js");
var g = require("./66.js");
var C = require("./2794.js");