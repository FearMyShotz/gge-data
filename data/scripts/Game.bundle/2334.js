Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./32.js");
var c = require("./31.js");
var u = require("./19.js");
var d = require("./4.js");
var p = require("./8.js");
var h = require("./11.js");
var g = createjs.Point;
var C = function (e) {
  function CastleExtractGemsDialog() {
    return e.call(this, CastleExtractGemsDialog.NAME) || this;
  }
  n.__extends(CastleExtractGemsDialog, e);
  CastleExtractGemsDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_forge, this.dialogDisp.btn_forgeExtract, this.dialogDisp.btn_close]);
    this.dialogDisp.mc_display.mouseChildren = true;
  };
  CastleExtractGemsDialog.prototype.applyPropertiesLoaded = function (e = null) {
    this.initTexts();
    this.fillSlotContainers(this.dialogProperties.gemVOs);
  };
  CastleExtractGemsDialog.prototype.initTexts = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new a.LocalizedTextVO("dialog_gemForge_title")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new a.LocalizedTextVO("dialog_gemForge_info"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_forge, new a.LocalizedTextVO("dialog_gemForge_forge_desc"));
    this.itxt_costC1 = this.textFieldManager.registerTextField(this.dialogDisp.mc_forgeCost.txt_value, new s.LocalizedNumberVO(this.dialogProperties.craftingCost));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_forgeCost.txt_cost, new a.LocalizedTextVO("costs")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_forgeExtract, new a.LocalizedTextVO(this.dialogProperties.gemVOs.length > 1 ? "dialog_gemForge_forgeAndExtract_desc" : "dialog_gemForge_forge_desc_singular", [this.dialogProperties.gemVOs.length]));
    var e = this.calculateRemovalCostsForGems();
    this.itxt_costC2 = e == 0 ? this.textFieldManager.registerTextField(this.dialogDisp.mc_extractCost.txt_value, new a.LocalizedTextVO("dialog_kingdomStart_prebuiltCastle_chooseCastle_forFree")) : this.textFieldManager.registerTextField(this.dialogDisp.mc_extractCost.txt_value, new s.LocalizedNumberVO(this.calculateRemovalCostsForGems()));
    this.itxt_costC2.autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_extractCost.txt_cost, new a.LocalizedTextVO("costs")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.btn_forge.txt_value, new a.LocalizedTextVO("dialog_gemForge_forgeOnly", [this.dialogProperties.gemVOs.length]));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_forgeExtract.txt_value, new a.LocalizedTextVO("dialog_gemForge_forge", [this.dialogProperties.gemVOs.length]));
    this.dialogDisp.mc_extractCost.mc_currency.gotoAndStop(2);
    this.dialogDisp.mc_extractCost.mc_currency.toolTipText = "gold";
    this.dialogDisp.mc_forgeCost.mc_currency.toolTipText = "cash";
    this.onUserCurrencyChange(null);
  };
  CastleExtractGemsDialog.prototype.addEventListenerOnShow = function () {
    this.controller.addEventListener(l.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onUserCurrencyChange));
  };
  CastleExtractGemsDialog.prototype.removeEventListenerOnHide = function () {
    this.controller.removeEventListener(l.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onUserCurrencyChange));
  };
  CastleExtractGemsDialog.prototype.onUserCurrencyChange = function (e) {
    E.CostHelper.setCurrencyTextFieldColor(this.itxt_costC1, new m.CollectableTypeVO(_.CollectableEnum.C1), this.dialogProperties.craftingCost);
    E.CostHelper.setCurrencyTextFieldColor(this.itxt_costC2, new m.CollectableTypeVO(_.CollectableEnum.C2), this.calculateRemovalCostsForGems());
  };
  CastleExtractGemsDialog.prototype.calculateRemovalCostsForGems = function () {
    var e = 0;
    for (var t = 0, i = this.dialogProperties.gemVOs; t < i.length; t++) {
      var n = i[t];
      if (n !== undefined) {
        if (y.instanceOfClass(n, "CastleGemVO")) {
          e += r.int(n.levelInfos.removalCostC2);
        } else {
          e += r.int(b.RelicItemConst.EXTRACT_RELIC_GEM_RELIC_FRAGMENT_COST);
        }
      }
    }
    return e;
  };
  CastleExtractGemsDialog.prototype.fillSlotContainers = function (e) {
    this.dialogDisp.mc_display.gotoAndStop(e.length);
    for (var t = 0; t < e.length; t++) {
      var i = e[t];
      var n = new c.CollectableRenderClips();
      n.addIconMc(this.dialogDisp.mc_display["itemHolder_" + t].mc_equipmentHolder);
      O.CollectableRenderHelper.displaySingleItem(n, new f.CollectableItemGemVO(i.id), new u.CollectableRenderOptions(u.CollectableRenderOptions.SET_ICON, new g(50, 50)));
    }
  };
  CastleExtractGemsDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    p.ButtonHelper.enableButton(this.dialogDisp.btn_forgeExtract, !d.CastleModel.gemData.isInventoryFull);
    this.dialogDisp.btn_forgeExtract.toolTipText = d.CastleModel.gemData.isInventoryFull ? "allyforge_tooltip_inventoryFull_gems" : null;
  };
  CastleExtractGemsDialog.prototype.onClick = function (t) {
    if (p.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_forge:
          this.dialogProperties.forgeFunction(false);
          this.hide();
          break;
        case this.dialogDisp.btn_forgeExtract:
          this.dialogProperties.forgeFunction(true);
          this.hide();
      }
    }
  };
  Object.defineProperty(CastleExtractGemsDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleExtractGemsDialog.NAME = "CastleExtractGems";
  return CastleExtractGemsDialog;
}(h.CastleExternalDialog);
exports.CastleExtractGemsDialog = C;
var _ = require("./12.js");
var m = require("./74.js");
var f = require("./926.js");
var O = require("./25.js");
var E = require("./66.js");
o.classImplementsInterfaces(C, "ICollectableRendererList");
var y = require("./1.js");
var b = require("./5.js");