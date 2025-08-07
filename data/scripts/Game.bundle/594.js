Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./1.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./6.js");
var h = require("./4.js");
var g = require("./198.js");
var C = require("./73.js");
var _ = require("./11.js");
var m = require("./248.js");
var f = function (e) {
  function CastleEquipmentSellDialog() {
    return e.call(this, CastleEquipmentSellDialog.NAME, o.BasicModel.basicLoaderData.getVersionedItemAssetUrl(O.CastleEquipmentDialog.NAME)) || this;
  }
  n.__extends(CastleEquipmentSellDialog, e);
  CastleEquipmentSellDialog.prototype.initLoaded = function (t = null) {
    this.initBasicButtons([this.dialogDisp.btnCancel, this.dialogDisp.btnConfirm, this.dialogDisp.btnClose]);
    this.textFieldManager.registerTextField(this.dialogDisp.tfTitle, new u.LocalizedTextVO("dialog_equipmentSale_title"));
    this.dialogDisp.coinContainer.mouseChildren = false;
    this.dialogDisp.saleSlot.mouseChildren = false;
    e.prototype.initLoaded.call(this);
  };
  CastleEquipmentSellDialog.prototype.applyPropertiesLoaded = function (e) {
    var t;
    var i;
    var n;
    if (e === undefined) {
      e = null;
    }
    this.fillSlotContainer(this.dialogProperties.itemToSell);
    var o = NaN;
    if (r.instanceOfClass(this.dialogProperties.itemToSell, "RelicEquipmentVO")) {
      var a = this.dialogProperties.itemToSell;
      t = a.nameString;
      i = new d.TextVO(a.typeDescriptionText);
      o = (n = a.getSellPrice()).amount;
      this.textFieldManager.registerTextField(this.dialogDisp.tfName, new u.LocalizedTextVO(t));
      this.dialogDisp.coinContainer.toolTipText = n.getNameTextId();
      this.dialogDisp.coinContainer.mc_currency.gotoAndStop(3);
    } else if (r.instanceOfClass(this.dialogProperties.itemToSell, "BasicEquipmentVO")) {
      var s = this.dialogProperties.itemToSell;
      t = s.nameString;
      i = new d.TextVO(s.typeDescriptionText);
      o = s.sellPriceOverride > -1 ? s.sellPriceOverride : h.CastleModel.equipData.equipmentXml.getEquipmentRareness(s.rareID).saleValue;
      this.textFieldManager.registerTextField(this.dialogDisp.tfName, new u.LocalizedTextVO(t));
      this.dialogDisp.coinContainer.toolTipText = "cash";
      this.dialogDisp.coinContainer.mc_currency.gotoAndStop(1);
    } else if (r.instanceOfClass(this.dialogProperties.itemToSell, "RelicGemVO")) {
      var p = this.dialogProperties.itemToSell;
      t = p.nameString;
      (i = new l.HTMLTextCustomVO()).addLocalizedTextVO(new u.LocalizedTextVO(p.typeDescriptionText));
      o = (n = p.relicInfoVO.getSellPrice()).amount;
      this.textFieldManager.registerTextField(this.dialogDisp.tfName, new u.LocalizedTextVO(t));
      this.dialogDisp.coinContainer.toolTipText = n.getNameTextId();
      this.dialogDisp.coinContainer.mc_currency.gotoAndStop(3);
    } else {
      var g = this.dialogProperties.itemToSell;
      if (g) {
        t = g.nameString;
        (i = new l.HTMLTextCustomVO()).addLocalizedTextVO(new u.LocalizedTextVO(g.typeDescriptionText));
        o = g.sellPriceOverride > -1 ? g.sellPriceOverride : g.levelInfos.sellValueC1;
        this.textFieldManager.registerTextField(this.dialogDisp.tfName, new u.LocalizedTextVO(t));
      }
      this.dialogDisp.coinContainer.toolTipText = "cash";
      this.dialogDisp.coinContainer.mc_currency.gotoAndStop(1);
    }
    this.textFieldManager.registerTextField(this.dialogDisp.tfType, i || new d.TextVO(" ")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.coinContainer.tfSellValue, new c.LocalizedNumberVO(o));
  };
  CastleEquipmentSellDialog.prototype.fillSlotContainer = function (e) {
    if (e) {
      if (r.instanceOfClass(e, "BasicEquipmentVO")) {
        C.EquipmentIconHelper.addEquipmentIcon(e, this.dialogDisp.saleSlot.mc_equipmentHolder, O.CastleEquipmentDialog.MAX_WIDTH, O.CastleEquipmentDialog.MAX_HEIGHT, this.bindFunction(this.onEQLoaded), true, false, false, true, true);
        var t = p.int(e.visualRareID);
        if (e.rarity == g.BasicEquipmentVO.RARITY_UNIQUE) {
          t = 5;
        }
        this.dialogDisp.saleSlot.mc_bg.gotoAndStop(t);
      } else if (r.instanceOfClass(e, "RelicGemVO")) {
        this.dialogDisp.saleSlot.mc_bg.gotoAndStop(7);
        this.dialogDisp.saleSlot.mc_equipmentHolder.addChild(m.CastleGemRenderer.renderAsset(e, null, null, true));
      } else {
        this.dialogDisp.saleSlot.mc_bg.gotoAndStop(e.isUnique ? 5 : 6);
        if (r.instanceOfClass(e, "CastleGemVO")) {
          this.dialogDisp.saleSlot.mc_equipmentHolder.addChild(m.CastleGemRenderer.renderAsset(e, null, null, true));
        }
      }
    }
  };
  CastleEquipmentSellDialog.prototype.onEQLoaded = function (e = null) {
    E.CastleMovieClipHelper.createHitArea(this.dialogDisp.saleSlot);
  };
  CastleEquipmentSellDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this);
    a.MovieClipHelper.clearMovieClip(this.dialogDisp.saleSlot.mc_equipmentHolder);
    this.dialogDisp.saleSlot.mc_bg.gotoAndStop(6);
  };
  CastleEquipmentSellDialog.prototype.onMouseOver = function (t) {
    e.prototype.onMouseOver.call(this, t);
    if (t.target == this.dialogDisp.saleSlot) {
      C.EquipmentIconHelper.showToolTip(t.target, this.dialogProperties.itemToSell, null, false);
    }
  };
  CastleEquipmentSellDialog.prototype.onClick = function (e) {
    switch (e.target) {
      case this.dialogDisp.btnCancel:
      case this.dialogDisp.btnClose:
        if (this.dialogProperties.cancelFunction) {
          this.dialogProperties.cancelFunction();
        }
        this.hide();
        break;
      case this.dialogDisp.btnConfirm:
        if (this.dialogProperties.okFunction) {
          this.dialogProperties.okFunction();
        }
        this.hide();
    }
  };
  Object.defineProperty(CastleEquipmentSellDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleEquipmentSellDialog.NAME = "CastleEquipmentSell";
  return CastleEquipmentSellDialog;
}(_.CastleExternalDialog);
exports.CastleEquipmentSellDialog = f;
var O = require("./246.js");
var E = require("./41.js");
s.classImplementsInterfaces(f, "ICollectableRendererList");