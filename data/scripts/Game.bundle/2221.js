Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./32.js");
var c = require("./71.js");
var u = require("./31.js");
var d = require("./19.js");
var p = require("./4.js");
var h = require("./127.js");
var g = require("./431.js");
var C = createjs.Point;
var _ = function (e) {
  function ModernPackageShopBuyElementCosts() {
    var t = this;
    t._costs = new f.CollectableList();
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(ModernPackageShopBuyElementCosts, e);
  ModernPackageShopBuyElementCosts.prototype.init = function (t) {
    e.prototype.init.call(this, t);
    this._txtCost = E.CastleComponent.textFieldManager.registerTextField(this.disp.txt_title, new s.LocalizedTextVO("cost"));
    this._txtCost.autoFitToBounds = true;
    this._txtCost.textAlign = a.GGSTextAlign.LEFT;
    this.disp.mc_cost_1_0.mouseChildren = false;
    this.disp.mc_cost_2_0.mouseChildren = false;
    this.disp.mc_cost_2_1.mouseChildren = false;
  };
  ModernPackageShopBuyElementCosts.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    E.CastleComponent.controller.addEventListener(l.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onUsersCurrencyChanged));
    E.CastleComponent.controller.addEventListener(c.AreaDataEvent.ON_RESOURCES_CHANGED, this.bindFunction(this.onUsersCurrencyChanged));
    E.CastleComponent.controller.addEventListener(l.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onUsersCurrencyChanged));
  };
  ModernPackageShopBuyElementCosts.prototype.removeEventListener = function () {
    E.CastleComponent.controller.removeEventListener(l.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onUsersCurrencyChanged));
    E.CastleComponent.controller.removeEventListener(c.AreaDataEvent.ON_RESOURCES_CHANGED, this.bindFunction(this.onUsersCurrencyChanged));
    E.CastleComponent.controller.removeEventListener(l.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onUsersCurrencyChanged));
    e.prototype.removeEventListener.call(this);
  };
  ModernPackageShopBuyElementCosts.prototype.update = function () {
    e.prototype.update.call(this);
    this._costs = this.getFinalCosts();
    this.updateCostFields();
  };
  ModernPackageShopBuyElementCosts.prototype.updateCostFields = function () {
    this.disp.mc_cost_1_0.visible = false;
    this.disp.mc_cost_2_0.visible = false;
    this.disp.mc_cost_2_1.visible = false;
    this.destroyCollectableRenderList();
    var e = new d.CollectableRenderOptions(d.CollectableRenderOptions.SET_COST_LIST, ModernPackageShopBuyElementCosts.COST_ICON_DIMENSION);
    e.costTextfield.showAvailableStorage = true;
    this._txtCost.visible = this._costs.length == 1;
    for (var t = 0; t < this._costs.length; ++t) {
      var i = this.getCostItemMcByIndex(t);
      i.visible = true;
      y.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, new u.CollectableRenderClips(i), this._costs.getItemByIndex(t), e);
    }
    this.disp.mc_discount.visible = this.parentDialog.dialogProperties.eventPackageVO.c2Discount > 0;
    if (this.disp.mc_discount.visible) {
      E.CastleComponent.textFieldManager.registerTextField(this.disp.mc_discount.txt_value, new s.LocalizedTextVO(a.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT, [this.parentDialog.dialogProperties.eventPackageVO.c2Discount]));
    }
    this.updateCostIndicators();
  };
  ModernPackageShopBuyElementCosts.prototype.updateCostIndicators = function () {
    if (this.collectableRenderList != null) {
      for (var e = 0, t = this.collectableRenderList; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          i.getRenderer(d.CollectableRenderOptions.COST_TEXTFIELD).update();
        }
      }
    }
  };
  ModernPackageShopBuyElementCosts.prototype.getCostItemMcByIndex = function (e) {
    return this.disp.getChildByName("mc_cost_" + this._costs.length + "_" + e);
  };
  ModernPackageShopBuyElementCosts.prototype.getFinalCosts = function () {
    var e = this.parentDialog.dialogProperties.eventPackageVO.getCostList();
    var t = this.parentDialog.getElement(D.ModernPackageShopBuyElementEnum.AMOUNT);
    var i = r.int(t ? t.getSelectedPackageAmount() : 1);
    for (var n = 0, o = e.list; n < o.length; n++) {
      var a = o[n];
      if (a !== undefined) {
        a.amount *= i;
      }
    }
    return e;
  };
  ModernPackageShopBuyElementCosts.prototype.getMaxBuyablePackages = function (e = true) {
    this._costs = this.getFinalCosts();
    var t = r.int(this._costs.length > 0 ? this.parentDialog.dialogProperties.eventPackageVO.maxBuyPerClick : 0);
    for (var i = 0, n = this._costs.list; i < n.length; i++) {
      var o = n[i];
      if (o !== undefined) {
        var a = r.int(b.CostHelper.getAvailableGoods(new O.CollectableTypeVO().initByCollectable(o, true)));
        var s = r.int(o.amount);
        if (s > 0) {
          t = r.int(Math.min(a / s, t));
        }
      }
    }
    if (this.parentDialog.dialogProperties.eventPackageVO.isStockLimited) {
      t = r.int(Math.min(t, this.parentDialog.dialogProperties.eventPackageVO.remainingStock));
    }
    var l = this.getInventorySpaceLeft();
    if (!e || l < 0) {
      return t;
    } else {
      return r.int(Math.min(t, l));
    }
  };
  ModernPackageShopBuyElementCosts.prototype.getInventorySpaceLeft = function () {
    var e = this.parentDialog.dialogProperties.eventPackageVO.reward;
    if (e.itemType == m.CollectableEnum.RELIC_EQUIPMENT) {
      var t = e.getSlotType();
      if (t == h.BasicEquippableVO.SLOT_TYPE_ALL) {
        return r.int(Math.min(p.CastleModel.equipData.inventorySpace, p.CastleModel.gemData.inventorySpace));
      } else if (t == h.BasicEquippableVO.SLOT_TYPE_GEM) {
        return r.int(p.CastleModel.gemData.inventorySpace);
      } else {
        return r.int(p.CastleModel.equipData.inventorySpace);
      }
    }
    if (e.itemType == m.CollectableEnum.GENERIC_CURRENCY && e.xmlCurrencyVO.softCap > 0) {
      var i = p.CastleModel.currencyData.getAmountById(e.id);
      var n = e.xmlCurrencyVO.softCap;
      var o = Math.max(n - i, 0);
      return Math.floor(o / e.amount);
    }
    if (I.instanceOfClass(e, "ACollectableItemEquipmentVO")) {
      return r.int(p.CastleModel.equipData.inventorySpace);
    } else if (I.instanceOfClass(e, "ACollectableItemGemVO")) {
      return r.int(p.CastleModel.gemData.inventorySpace);
    } else {
      return -1;
    }
  };
  ModernPackageShopBuyElementCosts.prototype.onUsersCurrencyChanged = function (e = null) {
    this.updateCostIndicators();
  };
  ModernPackageShopBuyElementCosts.__initialize_static_members = function () {
    ModernPackageShopBuyElementCosts.COST_ICON_DIMENSION = new C(42, 35);
  };
  return ModernPackageShopBuyElementCosts;
}(g.AModernPackageShopBuyElement);
exports.ModernPackageShopBuyElementCosts = _;
o.classImplementsInterfaces(_, "ICollectableRendererList");
var m = require("./12.js");
var f = require("./48.js");
var O = require("./74.js");
var E = require("./14.js");
var y = require("./25.js");
var b = require("./66.js");
var D = require("./591.js");
_.__initialize_static_members();
var I = require("./1.js");