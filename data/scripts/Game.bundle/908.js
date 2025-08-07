Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./6.js");
var d = require("./4.js");
var p = require("./52.js");
var h = require("./8.js");
var g = require("./11.js");
var C = require("./135.js");
var _ = function (e) {
  function CastleSellEmbeddedEquipmentDialog() {
    return e.call(this, CastleSellEmbeddedEquipmentDialog.NAME, a.BasicModel.basicLoaderData.getVersionedItemAssetUrl(b.CastleEquipmentDialog.NAME)) || this;
  }
  n.__extends(CastleSellEmbeddedEquipmentDialog, e);
  CastleSellEmbeddedEquipmentDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_extract, this.dialogDisp.btn_sell, this.dialogDisp.btn_close]);
    this.dialogDisp.mc_equipment.mouseChildren = false;
  };
  CastleSellEmbeddedEquipmentDialog.prototype.applyPropertiesLoaded = function (e = null) {
    this.initTexts();
    this.fillSlotContainer(this.dialogProperties.itemToSell);
    var t = d.CastleModel.gemData.isInventoryFull;
    h.ButtonHelper.enableButton(this.dialogDisp.btn_extract, !t);
    this.dialogDisp.btn_extract.toolTipText = t ? "allyforge_tooltip_inventoryFull_gems" : "";
  };
  CastleSellEmbeddedEquipmentDialog.prototype.initTexts = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new l.LocalizedTextVO("dialog_equipmentSale_title")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new l.LocalizedTextVO("dialog_equipmentSale_info", [this.dialogProperties.itemToSell.gemVO.nameString]));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_sell.txt_value, new l.LocalizedTextVO("dialog_equipmentSale_sell")).verticalAlign = r.GGSVerticalAlign.MIDDLE;
    this.textFieldManager.registerTextField(this.dialogDisp.btn_extract.txt_value, new l.LocalizedTextVO("dialog_equipmentSale_extractGem")).verticalAlign = r.GGSVerticalAlign.MIDDLE;
    if (I.instanceOfClass(this.dialogProperties.itemToSell, "RelicEquipmentVO")) {
      var e = this.dialogProperties.itemToSell.getSellPrice();
      this.dialogDisp.mc_sell.mc_currency.toolTipText = e.getNameTextId();
      this.dialogDisp.mc_sell.mc_currency.gotoAndStop(3);
      var t = e.amount;
      this.textFieldManager.registerTextField(this.dialogDisp.mc_sell.tfSellValue, new c.LocalizedNumberVO(t));
      this.dialogDisp.mc_extract.mc_currency.toolTipText = e.getNameTextId();
      this.dialogDisp.mc_extract.mc_currency.gotoAndStop(3);
      this.dialogDisp.btn_extract.mc_icon.gotoAndStop(3);
    } else {
      this.dialogDisp.mc_sell.mc_currency.toolTipText = "cash";
      this.dialogDisp.mc_sell.mc_currency.gotoAndStop(1);
      var i = this.dialogProperties.itemToSell;
      var n = i.sellPriceOverride > -1 ? i.sellPriceOverride : d.CastleModel.equipData.equipmentXml.getEquipmentRareness(i.rareID).saleValue;
      if (i.gemVO) {
        var o = i.gemVO;
        n += o.sellPriceOverride > -1 ? o.sellPriceOverride : o.levelInfos.sellValueC1;
      }
      this.textFieldManager.registerTextField(this.dialogDisp.mc_sell.tfSellValue, new c.LocalizedNumberVO(n));
      this.dialogDisp.mc_extract.mc_currency.toolTipText = "gold";
      this.dialogDisp.mc_extract.mc_currency.gotoAndStop(2);
      this.dialogDisp.btn_extract.mc_icon.gotoAndStop(2);
    }
    var a = this.calculateRemovalCostsForGems();
    if (a == 0) {
      this.textFieldManager.registerTextField(this.dialogDisp.mc_extract.tfSellValue, new l.LocalizedTextVO("dialog_kingdomStart_prebuiltCastle_chooseCastle_forFree")).autoFitToBounds = true;
    } else {
      this.textFieldManager.registerTextField(this.dialogDisp.mc_extract.tfSellValue, new c.LocalizedNumberVO(a)).autoFitToBounds = true;
    }
  };
  CastleSellEmbeddedEquipmentDialog.prototype.calculateRemovalCostsForGems = function () {
    var e = 0;
    if (I.instanceOfClass(this.dialogProperties.itemToSell.gemVO, "CastleGemVO")) {
      e += u.int(this.dialogProperties.itemToSell.gemVO.levelInfos.removalCostC2);
    } else {
      e += u.int(T.RelicItemConst.EXTRACT_RELIC_GEM_RELIC_FRAGMENT_COST);
    }
    return e;
  };
  CastleSellEmbeddedEquipmentDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    h.ButtonHelper.enableButton(this.dialogDisp.btn_extract, !d.CastleModel.gemData.isInventoryFull);
    this.dialogDisp.btn_extract.toolTipText = d.CastleModel.gemData.isInventoryFull ? "allyforge_tooltip_inventoryFull_gems" : null;
  };
  CastleSellEmbeddedEquipmentDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    s.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_equipment.mc_equipmentHolder);
    this.dialogDisp.mc_equipment.mc_bg.gotoAndStop(6);
  };
  CastleSellEmbeddedEquipmentDialog.prototype.onClick = function (t) {
    if (h.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_close:
          if (this.dialogProperties.cancelFunction) {
            this.dialogProperties.cancelFunction();
          }
          this.hide();
          break;
        case this.dialogDisp.btn_sell:
          this.dialogProperties.okFunction(false);
          this.hide();
          break;
        case this.dialogDisp.btn_extract:
          this.onExtract();
      }
    }
  };
  CastleSellEmbeddedEquipmentDialog.prototype.onExtract = function () {
    if (I.instanceOfClass(this.dialogProperties.itemToSell, "RelicEquipmentVO") && d.CastleModel.currencyData.getAmountById(p.ClientConstCurrency.ID_RELIC_FRAGMENTS) < this.calculateRemovalCostsForGems()) {
      O.CostHelper.showNotEnoughSpecialCurrencyDialog([p.ClientConstCurrency.ID_RELIC_FRAGMENTS]);
    } else if (!I.instanceOfClass(this.dialogProperties.itemToSell, "RelicEquipmentVO") && d.CastleModel.currencyData.c2Amount < this.calculateRemovalCostsForGems()) {
      f.CastleDialogHandler.getInstance().registerDefaultDialogs(y.CastleNoMoneyC2Dialog, new C.CastleNoMoneyC2DialogProperties());
    } else {
      this.dialogProperties.okFunction(true);
      this.hide();
    }
  };
  CastleSellEmbeddedEquipmentDialog.prototype.onMouseOver = function (t) {
    e.prototype.onMouseOver.call(this, t);
    if (t.target == this.dialogDisp.mc_equipment) {
      E.EquipmentIconHelper.showToolTip(this.dialogDisp.mc_equipment, this.dialogProperties.itemToSell);
    }
  };
  CastleSellEmbeddedEquipmentDialog.prototype.fillSlotContainer = function (e) {
    if (e) {
      if (I.instanceOfClass(e, "BasicEquipmentVO")) {
        E.EquipmentIconHelper.addEquipmentIcon(e, this.dialogDisp.mc_equipment.mc_equipmentHolder, b.CastleEquipmentDialog.MAX_WIDTH, b.CastleEquipmentDialog.MAX_HEIGHT, this.bindFunction(this.onEQLoaded), true, false, false, true, true);
        var t = u.int(e.visualRareID);
        if (e.rarity == m.BasicEquipmentVO.RARITY_UNIQUE) {
          t = 5;
        }
        this.dialogDisp.mc_equipment.mc_bg.gotoAndStop(t);
      } else {
        this.dialogDisp.mc_equipment.mc_equipmentHolder.addChild(D.CastleGemRenderer.renderAsset(e, null, null, true));
      }
    }
  };
  CastleSellEmbeddedEquipmentDialog.prototype.onEQLoaded = function (e = null) {
    v.CastleMovieClipHelper.createHitArea(this.dialogDisp.mc_equipment);
  };
  Object.defineProperty(CastleSellEmbeddedEquipmentDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleSellEmbeddedEquipmentDialog.NAME = "CastleSellEmbeddedEquipment";
  return CastleSellEmbeddedEquipmentDialog;
}(g.CastleExternalDialog);
exports.CastleSellEmbeddedEquipmentDialog = _;
var m = require("./198.js");
var f = require("./9.js");
var O = require("./66.js");
var E = require("./73.js");
var y = require("./138.js");
var b = require("./246.js");
var D = require("./248.js");
var I = require("./1.js");
var T = require("./5.js");
var v = require("./41.js");
o.classImplementsInterfaces(_, "ICollectableRendererList");