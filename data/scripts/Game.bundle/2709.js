Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./1.js");
var c = require("./5.js");
var u = require("./5.js");
var d = require("./3.js");
var p = require("./3.js");
var h = require("./6.js");
var g = require("./1470.js");
var C = require("./761.js");
var _ = require("./495.js");
var m = require("./1471.js");
var f = require("./397.js");
var O = require("./37.js");
var E = require("./32.js");
var y = require("./15.js");
var b = require("./4.js");
var D = require("./490.js");
var I = require("./2710.js");
var T = require("./2711.js");
var v = require("./171.js");
var S = require("./877.js");
var A = require("./8.js");
var L = require("./1459.js");
var P = require("./2712.js");
var M = function (e) {
  function CastleConstructionItemsCraftingSublayer(t) {
    var i;
    var n = this;
    n._focusFirstBlueprint = true;
    n._visibleBlueprints = [];
    CONSTRUCTOR_HACK;
    (n = e.call(this, t, t, true) || this)._filterSlot = n.comboBox(t.mc_slotTypeSelector, T.ComboboxItemRendererConstructionItemSlotGray, true);
    var o = 0;
    for (var a = 0; a < CastleConstructionItemsCraftingSublayer.ITEM_FILTERS.length; a++) {
      o = h.int(CastleConstructionItemsCraftingSublayer.ITEM_FILTERS[a]);
      (i = new v.ComboboxItemRendererVO()).itemLabel = d.Localize.text(k.ConstructionItemsHelper.getSlotNameTextId(o));
      i.data = new I.CastleConstructionItemSlotRendererVO(new D.ConstructionItemSlotVO(o, 0));
      n._filterSlot.addItem(i);
    }
    n._filterSlot.selectItemIndex(0);
    A.ButtonHelper.initBasicButtons([t.blueprintList.btn_up, t.blueprintList.btn_down, t.inventory.btn_plus, t.inventory.btn_minus]);
    n.progressComponent = new F.CastleConstructionItemsCraftingSublayerProgress(t.crafting);
    n.itemInfoComponent = new B.CastleConstructionItemsCraftingSublayerItemInfo(t.itemInfo, n);
    n.ingredientsComponent = new w.CastleConstructionItemsCraftingSublayerIngredients(t.ingredientInfo, n);
    n.textFieldManager.registerTextField(t.txt_title, new p.LocalizedTextVO("dialog_ci_craft_header"));
    return n;
  }
  n.__extends(CastleConstructionItemsCraftingSublayer, e);
  CastleConstructionItemsCraftingSublayer.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    y.CastleBasicController.getInstance().addEventListener(f.CastleMinuteSkipEvent.MINUTESKIP_USE_SUCESS, this.bindFunction(this.onSkipSuccess));
    b.CastleModel.constructionItemData.addEventListener(_.CastleConstructionItemsEvent.INVENTORY_UPDATED, this.bindFunction(this.onConstructionItemInventoryUpdate));
    this._filterSlot.disp.addEventListener(o.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onChangeSlotFilter));
    b.CastleModel.craftingMaterialData.addEventListener(m.CastleCraftingMaterialEvent.MATERIAL_INVENTORY_UPDATED, this.bindFunction(this.onMaterialInventoryUpdated));
    this.interactionData.SGN_UPDATE.add(this.bindFunction(this.onInteractionUpdate));
    this.controller.addEventListener(E.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onMaterialInventoryUpdated));
    this._focusFirstBlueprint = this._focusFirstBlueprint || !!this.sublayerProperties.constructionItemRecipeVO;
    this.progressComponent.disableButton(null);
    this.itemInfoComponent.addEventListeners();
    this.ingredientsComponent.addEventListeners();
    y.CastleBasicController.getInstance().addEventListener(O.CastleServerMessageArrivedEvent.GCC_ARRIVED, this.bindFunction(this.onGCCArrived));
    b.CastleModel.smartfoxClient.sendCommandVO(new g.C2SGetConstructionCraftingInfoVO());
    b.CastleModel.smartfoxClient.sendCommandVO(new C.C2SGetContructionItemsInventoryVO());
  };
  CastleConstructionItemsCraftingSublayer.prototype.onSkipSuccess = function (e) {
    b.CastleModel.smartfoxClient.sendCommandVO(new C.C2SGetContructionItemsInventoryVO());
  };
  CastleConstructionItemsCraftingSublayer.prototype.onConstructionItemInventoryUpdate = function (e) {
    this.ingredientsComponent.update();
  };
  CastleConstructionItemsCraftingSublayer.prototype.onMaterialInventoryUpdated = function (e) {
    if (this.craftingMaterialInventory) {
      this.craftingMaterialInventory.destroy();
    }
    this.craftingMaterialInventory = k.ConstructionItemsHelper.fillMaterialInventory(this.subLayerDisp.inventory.mc_costs);
    this.ingredientsComponent.update();
    this.progressComponent.update();
  };
  CastleConstructionItemsCraftingSublayer.prototype.hide = function () {
    e.prototype.hide.call(this);
    y.CastleBasicController.getInstance().removeEventListener(f.CastleMinuteSkipEvent.MINUTESKIP_USE_SUCESS, this.bindFunction(this.onSkipSuccess));
    b.CastleModel.constructionItemData.removeEventListener(_.CastleConstructionItemsEvent.INVENTORY_UPDATED, this.bindFunction(this.onConstructionItemInventoryUpdate));
    this.itemInfoComponent.removeEventListeners();
    this.ingredientsComponent.removeEventListeners();
    this.progressComponent.hide();
    this._filterSlot.disp.removeEventListener(o.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onChangeSlotFilter));
    b.CastleModel.craftingMaterialData.removeEventListener(m.CastleCraftingMaterialEvent.MATERIAL_INVENTORY_UPDATED, this.bindFunction(this.onMaterialInventoryUpdated));
    this.controller.removeEventListener(E.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onMaterialInventoryUpdated));
    this.interactionData.SGN_UPDATE.remove(this.bindFunction(this.onInteractionUpdate));
    if (this._scrollList) {
      this._scrollList.removeEventListener(a.ScrollItemEvent.CLICK, this.bindFunction(this.onScrollItemClick));
      this._scrollList.removeEventListener(a.ScrollItemEvent.ON_SCROLL, this.bindFunction(this.onScrollItemScroll));
    }
    y.CastleBasicController.getInstance().removeEventListener(O.CastleServerMessageArrivedEvent.GCC_ARRIVED, this.bindFunction(this.onGCCArrived));
  };
  CastleConstructionItemsCraftingSublayer.prototype.onChangeSlotFilter = function (e) {
    var t = this._filterSlot.selectedData.slotVO;
    this.interactionData.setSelectedSlot(t);
  };
  CastleConstructionItemsCraftingSublayer.prototype.showBlueprints = function () {
    var e = 0;
    if (this._scrollList) {
      e = h.int(this._scrollList.currentStartIndex);
      this._scrollList.removeEventListener(a.ScrollItemEvent.CLICK, this.bindFunction(this.onScrollItemClick));
      this._scrollList.removeEventListener(a.ScrollItemEvent.ON_SCROLL, this.bindFunction(this.onScrollItemScroll));
      this._scrollList.clear();
    } else {
      this._scrollList = new S.CastleItemScrollList(this.subLayerDisp.blueprintList);
      this._scrollList.scrollItemClass = N.CIBlueprintScrollItem;
      this._scrollList.scrollStep = 2;
    }
    var t = null;
    var i = null;
    if (this._visibleBlueprints != null) {
      for (var n = 0, o = this._visibleBlueprints; n < o.length; n++) {
        var s = o[n];
        if (s !== undefined) {
          var r = new P.CIBlueprintScrollItemVO(s);
          t = t || r;
          if (s == this.bluePrintShown) {
            i = r;
          }
          this._scrollList.pushContent(r);
        }
      }
    }
    if (this._focusFirstBlueprint && this.sublayerProperties.constructionItemRecipeVO) {
      this.selectRecipe(this.sublayerProperties.constructionItemRecipeVO, true);
      this.sublayerProperties.clear();
    } else if (this._focusFirstBlueprint && t) {
      this.select(t, true);
    } else if (i) {
      this.select(i, true);
    }
    this._focusFirstBlueprint = false;
    this._scrollList.initList(Math.max(e, 0));
    this._scrollList.addEventListener(a.ScrollItemEvent.CLICK, this.bindFunction(this.onScrollItemClick));
    this._scrollList.addEventListener(a.ScrollItemEvent.ON_SCROLL, this.bindFunction(this.onScrollItemScroll));
  };
  CastleConstructionItemsCraftingSublayer.prototype.onScrollItemScroll = function (e) {
    x.ConstructionItemTooltipHelper.hideToolTip();
  };
  CastleConstructionItemsCraftingSublayer.prototype.onScrollItemClick = function (e) {
    if (l.instanceOfClass(e.scrollItem, "CIBlueprintScrollItem")) {
      var t = e.scrollItem.scrollItemVO;
      this.select(t);
    }
  };
  CastleConstructionItemsCraftingSublayer.prototype.selectRecipe = function (e, t = false) {
    for (var i = 0, n = this._scrollList.voList; i < n.length; i++) {
      var o = n[i];
      if (o !== undefined) {
        var a = h.int(o.blueprintVO.recipes.indexOf(e));
        if (a > -1) {
          this.itemInfoComponent.selectedRecipeIndex = a;
          this.select(o, t);
          return;
        }
      }
    }
    s.debug("Couldn't find blueprint for recipe " + e);
  };
  CastleConstructionItemsCraftingSublayer.prototype.select = function (e, t = false) {
    var i = h.int(e.id % 2 == 1 ? e.id - 1 : e.id);
    if (this.bluePrintShown !== e.blueprintVO) {
      this.itemInfoComponent.selectedRecipeIndex = 0;
    }
    this.bluePrintShown = e.blueprintVO;
    if (t) {
      this._scrollList.initList(i);
    }
    this._scrollList.setActiveItemVO(e.id, true, false);
    this.updateItemInfo();
  };
  CastleConstructionItemsCraftingSublayer.prototype.updateItemInfo = function () {
    this.recipeShown = this.bluePrintShown.recipes[this.itemInfoComponent.selectedRecipeIndex];
    var e = this.recipeShown.constructionItem;
    this.itemInfoComponent.update(e);
    this.ingredientsComponent.update();
  };
  CastleConstructionItemsCraftingSublayer.prototype.onInteractionUpdate = function (e) {
    this.updateBuildingFilters();
    this.updateVisibleBlueprints();
    this._focusFirstBlueprint = this._visibleBlueprints.indexOf(this.bluePrintShown) < 0;
    this.showBlueprints();
  };
  CastleConstructionItemsCraftingSublayer.prototype.updateVisibleBlueprints = function () {
    this._visibleBlueprints = [];
    var e = h.int(R.ConstructionItemData.ALL_SLOTS);
    if (this.interactionData.selectedSlot) {
      e = h.int(this.interactionData.selectedSlot.slotType);
    }
    for (var t = 0, i = Array.from(b.CastleModel.constructionItemBlueprintData.blueprints.values()); t < i.length; t++) {
      var n = i[t];
      if (n !== undefined) {
        if ((e == R.ConstructionItemData.ALL_SLOTS || n.constructionItem.slotType == e) && !!this.filterBuildings(n.constructionItem.applicableBuildings)) {
          this._visibleBlueprints.push(n);
        }
      }
    }
  };
  CastleConstructionItemsCraftingSublayer.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (A.ButtonHelper.isButtonEnabled(t.target)) {
      this.itemInfoComponent.onClick(t.target);
      this.ingredientsComponent.onClick(t.target);
      this.progressComponent.onClick(t.target, this.recipeShown);
    }
  };
  CastleConstructionItemsCraftingSublayer.prototype.showHelp = function () {
    e.prototype.showHelp.call(this);
    V.CastleDialogHandler.getInstance().showHelper("", d.Localize.text("help_ci_craft"));
  };
  CastleConstructionItemsCraftingSublayer.prototype.onGCCArrived = function (e) {
    this.updateVisibleBlueprints();
    this.showBlueprints();
    var t = JSON.parse(e.params[1][1]);
    var i = t && t.hasOwnProperty(c.CommKeys.CONSTRUCTION_ITEM_ID) ? parseInt(t[c.CommKeys.CONSTRUCTION_ITEM_ID]) : -1;
    b.CastleModel.constructionItemData.craftingRecipe = null;
    if (i > -1) {
      var n = b.CastleModel.constructionItemData.getConstructionItemVO(i);
      if (n) {
        b.CastleModel.constructionItemData.craftingRecipe = b.CastleModel.constructionItemBlueprintData.findRecipeFor(n);
      }
    }
    b.CastleModel.constructionItemData.craftingSeconds = t && t.hasOwnProperty(c.CommKeys.REMAINING_SECONDS) ? t[c.CommKeys.REMAINING_SECONDS] : -1;
    this.progressComponent.update();
  };
  Object.defineProperty(CastleConstructionItemsCraftingSublayer.prototype, "sublayerProperties", {
    get: function () {
      return this._params;
    },
    enumerable: true,
    configurable: true
  });
  CastleConstructionItemsCraftingSublayer.__initialize_static_members = function () {
    CastleConstructionItemsCraftingSublayer.ITEM_FILTERS = [R.ConstructionItemData.ALL_SLOTS, u.ConstructionItemConst.PRIMARY_SLOT_TYPE, u.ConstructionItemConst.SECONDARY_SLOT_TYPE];
  };
  return CastleConstructionItemsCraftingSublayer;
}(L.CastleConstructionItemsFilterSublayer);
exports.CastleConstructionItemsCraftingSublayer = M;
var R = require("./623.js");
var V = require("./9.js");
var x = require("./356.js");
var w = require("./2713.js");
var B = require("./2723.js");
var F = require("./2724.js");
var N = require("./2727.js");
var k = require("./239.js");
r.classImplementsInterfaces(M, "ICollectableRendererList", "ISublayer");
M.__initialize_static_members();