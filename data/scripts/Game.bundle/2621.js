Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./2.js");
var c = require("./2.js");
var u = require("./2.js");
var d = require("./100.js");
var p = require("./1.js");
var h = require("./1.js");
var g = require("./1.js");
var C = require("./5.js");
var _ = require("./5.js");
var m = require("./5.js");
var f = require("./5.js");
var O = require("./3.js");
var E = require("./3.js");
var y = require("./3.js");
var b = require("./3.js");
var D = require("./6.js");
var I = require("./23.js");
var T = require("./16.js");
var v = require("./761.js");
var S = require("./622.js");
var A = require("./495.js");
var L = require("./37.js");
var P = require("./129.js");
var M = require("./71.js");
var R = require("./337.js");
var V = require("./31.js");
var x = require("./19.js");
var w = require("./92.js");
var B = require("./4.js");
var F = require("./490.js");
var N = require("./1435.js");
var k = require("./2684.js");
var U = require("./2685.js");
var G = require("./2686.js");
var H = require("./171.js");
var j = require("./82.js");
var W = require("./47.js");
var Y = require("./59.js");
var K = require("./42.js");
var z = require("./8.js");
var q = require("./41.js");
var X = require("./995.js");
var Q = require("./1459.js");
var J = require("./2691.js");
var Z = require("./2692.js");
var $ = createjs.MovieClip;
var ee = createjs.MouseEvent;
var te = createjs.Point;
var ie = /^slot/;
var ne = function (e) {
  function CastleConstructionItemsAssignSublayer(t) {
    var i = e.call(this, t, t.mc_buildingList) || this;
    i.showDetailedList = true;
    i._preventMEC = false;
    i._boostInProgress = false;
    i._currentSortOption = CastleConstructionItemsAssignSublayer.SORTOPTION_NAME_DESCENDING;
    i.initTextFields();
    i.initBuildingSlots();
    i.initBuildingStats();
    i.hideInfoPanels();
    i.initInventoryFilters();
    var n = new ke.InfiniteScrollListOptions(Ue.CIBuildingListItem, "ModernCIBuildListItem_Small", Ee.CastleConstructionItemsMainDialog.NAME);
    n.itemPaddingY = 2;
    i._buildingListDetail = new Ge.InfiniteScrollListComponent(new He.InfiniteScrollListClips(i.subLayerDisp.mc_buildingList.buildList_detail), n);
    var o = new ke.InfiniteScrollListOptions(Ue.CIBuildingListItem, "ModernCIBuildListItem_Big", Ee.CastleConstructionItemsMainDialog.NAME);
    o.itemPaddingY = 2;
    i._buildingListOverview = new Ge.InfiniteScrollListComponent(new He.InfiniteScrollListClips(i.subLayerDisp.mc_buildingList.buildList_overview), o);
    var a = i.subLayerDisp.panel_buildingInfo.mc_effectList.mc_items.mask.height * i.subLayerDisp.panel_buildingInfo.mc_effectList.mc_items.mask.scaleY;
    var s = new W.SimpleScrollVO().initByParent(i.subLayerDisp.panel_buildingInfo.mc_effectList.mc_slider).addMouseWheelElements([i.subLayerDisp.panel_buildingInfo.mc_effectList]);
    var r = new Y.DynamicSizeScrollStrategyVertical(true, a);
    i._buildingEffectsScrollComponent = new j.ModernSliderScrollComponent(s, r, true);
    i._inventoryList = new c.ItemScrollList(i.subLayerDisp.inventoryComponent, i.subLayerDisp.inventoryComponent);
    i._inventoryList.scrollItemClass = be.ConstructionItemScrollItem;
    i._inventoryList.scrollStep = i._inventoryList.itemsVisibleAtOnce;
    i._castleSelector = new pe.CastleSelectorComponent(i.subLayerDisp.mc_buildingList.mc_castleSelector, 10, "", 1, 17, 22, k.ComboboxItemRendererCastleListCI, 4);
    i._boostCIRenderOptions = new x.CollectableRenderOptions(x.CollectableRenderOptions.SET_ICON, new te(55, 55));
    i.subLayerDisp.mc_boost.visible = false;
    i.subLayerDisp.inventoryComponent.tab0.tabIcon.gotoAndStop(1);
    i.subLayerDisp.inventoryComponent.tab1.tabIcon.gotoAndStop(3);
    i.subLayerDisp.inventoryComponent.tab2.tabIcon.gotoAndStop(2);
    i.subLayerDisp.inventoryComponent.tab3.tabIcon.gotoAndStop(4);
    i.subLayerDisp.inventoryComponent.tab0.toolTipText = "dialog_ci_assign_inventory_tab_all";
    i.subLayerDisp.inventoryComponent.tab1.toolTipText = "dialog_ci_assign_inventory_tab_primary";
    i.subLayerDisp.inventoryComponent.tab2.toolTipText = "dialog_ci_assign_inventory_tab_appearance";
    i.subLayerDisp.inventoryComponent.tab3.toolTipText = "dialog_ci_assign_inventory_tab_secondary";
    i.subLayerDisp.mc_storageCapacity.toolTipText = "dialog_ci_assign_inventory_storage_tooltip";
    i.subLayerDisp.mc_storageCapacity.mouseChildren = false;
    i.subLayerDisp.mc_buildingList.mc_buildingIcon.toolTipText = "dialog_ci_assign_list_buildings_tooltip";
    i.subLayerDisp.mc_buildingList.mc_itemsIcon.toolTipText = "dialog_ci_assign_list_items_tooltip";
    i.subLayerDisp.mc_buildingList.btn_listView.toolTipText = "dialog_ci_assign_list_listView_tooltip";
    i.subLayerDisp.mc_boost.mc_boost1.toolTipText = "currency_name_RareBoosterConsumable";
    i.subLayerDisp.mc_boost.mc_boost2.toolTipText = "currency_name_EpicBoosterConsumable";
    i.subLayerDisp.mc_boost.mc_boost3.toolTipText = "currency_name_LegendaryBoosterConsumable";
    i.subLayerDisp.mc_disassemble.toolTipText = "dialog_ci_assign_info_disassemble";
    z.ButtonHelper.initTwoStateButtons([i.subLayerDisp.inventoryComponent.tab0, i.subLayerDisp.inventoryComponent.tab1, i.subLayerDisp.inventoryComponent.tab2, i.subLayerDisp.inventoryComponent.tab3]);
    z.ButtonHelper.initBasicButtons([i.subLayerDisp.mc_buildingList.mc_buildingIcon, i.subLayerDisp.mc_buildingList.mc_itemsIcon, i.subLayerDisp.panel_itemInfo.mc_upgrade.btn_upgrade, i.subLayerDisp.inventoryComponent.btn_emptyInventoryCraft, i.subLayerDisp.mc_buildingList.btn_listView, i.subLayerDisp.inventoryComponent.btn_up, i.subLayerDisp.inventoryComponent.btn_down, i.subLayerDisp.mc_buildingList.mc_expiredOnly]);
    z.ButtonHelper.initButtons([i.subLayerDisp.panel_itemInfo.btn_deselect, i.subLayerDisp.panel_buildingInfo.btn_deselect, i.subLayerDisp.mc_boost.btn_deselect, i.subLayerDisp.mc_boost.btn_boost1, i.subLayerDisp.mc_boost.btn_boost2, i.subLayerDisp.mc_boost.btn_boost3], Le.ClickFeedbackButtonHover);
    if (i.subLayerDisp.mc_boost.anim_boost) {
      i.subLayerDisp.mc_boost.anim_boost.mouseEnabled = false;
      i.subLayerDisp.mc_boost.anim_boost.gotoAndStop(1);
      i.subLayerDisp.mc_boost.anim_arrows.gotoAndStop(1);
      i.subLayerDisp.mc_boost.addChild(i.subLayerDisp.mc_boost.anim_boost);
    }
    return i;
  }
  n.__extends(CastleConstructionItemsAssignSublayer, e);
  CastleConstructionItemsAssignSublayer.prototype.initBuildingSlots = function () {
    this.slots = [];
    for (var e = 0; e < C.ConstructionItemConst.SLOT_TYPE_COUNTS.length; ++e) {
      for (var t = 0; t < C.ConstructionItemConst.SLOT_TYPE_COUNTS[e]; ++t) {
        var i = new Ie.ConstructionItemSlotBig(new F.ConstructionItemSlotVO(e, t), this.interactionData, this.bindFunction(this.onClickConstructionItemSlot), this.bindFunction(this.onClickConstructionItemSlotExtract), this.subLayerDisp.panel_buildingInfo["slot_" + e + "_" + t]);
        this.slots.push(i);
      }
    }
  };
  CastleConstructionItemsAssignSublayer.prototype.initBuildingStats = function () {
    var e = new Map();
    e.set(1, CastleConstructionItemsAssignSublayer.ONE_ICON_POSITION);
    e.set(2, CastleConstructionItemsAssignSublayer.TWO_ICONS_POSITIONS);
    e.set(3, CastleConstructionItemsAssignSublayer.THREE_ICONS_POSITIONS);
    e.set(4, CastleConstructionItemsAssignSublayer.FOUR_ICONS_POSITIONS);
    e.set(5, CastleConstructionItemsAssignSublayer.FIVE_ICONS_POSITIONS);
    e.set(6, CastleConstructionItemsAssignSublayer.SIX_ICONS_POSITIONS);
    e.set(CastleConstructionItemsAssignSublayer.SPECIAL_LAYOUT_START_POSITION + 2, CastleConstructionItemsAssignSublayer.SPECIAL_LAYOUT_TWO_ICONS_STACKED);
    this._buildingStats = new de.CastleBuildingStats(this.subLayerDisp.panel_buildingInfo, e, CastleConstructionItemsAssignSublayer.SPECIAL_LAYOUT_START_POSITION);
  };
  CastleConstructionItemsAssignSublayer.prototype.initTextFields = function () {
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_title, new E.LocalizedTextVO("dialog_ci_assign_header"));
    this.textFieldManager.registerTextField(this.subLayerDisp.panel_defaultInfo.txt_title, new E.LocalizedTextVO("dialog_ci_assign_info_instructions01_header"));
    this.textFieldManager.registerTextField(this.subLayerDisp.panel_defaultInfo.txt_info, new E.LocalizedTextVO("dialog_ci_assign_info_instructions01_info"));
    this.textFieldManager.registerTextField(this.subLayerDisp.panel_defaultInfo.text_buildingTip, new E.LocalizedTextVO("dialog_ci_assign_info_instructions02")).verticalAlign = K.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.textFieldManager.registerTextField(this.subLayerDisp.panel_defaultInfo.txt_inventoryTip, new E.LocalizedTextVO("dialog_ci_assign_info_instructions03")).verticalAlign = K.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.textFieldManager.registerTextField(this.subLayerDisp.panel_itemInfo.txt_effectsTitle, new E.LocalizedTextVO("dialog_ci_assign_info_effects"));
    this.textFieldManager.registerTextField(this.subLayerDisp.panel_itemInfo.txt_buildingTip, new E.LocalizedTextVO("dialog_ci_assign_info_itemHelp")).verticalAlign = K.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.textFieldManager.registerTextField(this.subLayerDisp.panel_itemInfo.mc_upgrade.txt_upgrade, new E.LocalizedTextVO("dialog_ci_assign_info_craft")).verticalAlign = K.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.textFieldManager.registerTextField(this.subLayerDisp.panel_itemInfo.mc_timer.txt_label, new E.LocalizedTextVO("remainingTime"));
    this.textFieldManager.registerTextField(this.subLayerDisp.inventoryComponent.btn_emptyInventoryCraft.txt_label, new E.LocalizedTextVO("dialog_ci_assign_inventory_craft"));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_boost.txt_title, new E.LocalizedTextVO("dialog_ci_assign_tempCi_boostOverlay_header"));
    this.itxt_itemInfoName = this.textFieldManager.registerTextField(this.subLayerDisp.panel_itemInfo.txt_title, new E.LocalizedTextVO(""));
    this.itxt_itemInfoLevel = this.textFieldManager.registerTextField(this.subLayerDisp.panel_itemInfo.txt_level, new E.LocalizedTextVO("ci_level"));
    this.itxt_itemInfoRarity = this.textFieldManager.registerTextField(this.subLayerDisp.panel_itemInfo.txt_rarity, new E.LocalizedTextVO(""));
    this.itxt_itemInfoType = this.textFieldManager.registerTextField(this.subLayerDisp.panel_itemInfo.txt_type, new b.TextVO(""));
    this.itxt_itemInfoEffects = this.textFieldManager.registerTextField(this.subLayerDisp.panel_itemInfo.txt_effects, new b.TextVO(""));
    this.itxt_itemInfoTimer = this.textFieldManager.registerTextField(this.subLayerDisp.panel_itemInfo.mc_timer.txt_time, new b.TextVO(""));
    this.itxt_buildingInfoName = this.textFieldManager.registerTextField(this.subLayerDisp.panel_buildingInfo.txt_title, new E.LocalizedTextVO(""));
    this.itxt_buildingInfoLevel = this.textFieldManager.registerTextField(this.subLayerDisp.panel_buildingInfo.txt_level, new E.LocalizedTextVO("building_level"));
    this.itxt_emptyInventory = this.textFieldManager.registerTextField(this.subLayerDisp.inventoryComponent.txt_empty, new E.LocalizedTextVO("dialog_ci_assign_inventory_empty_none"));
    this.itxt_storageInfo = this.textFieldManager.registerTextField(this.subLayerDisp.mc_storageCapacity.txt_storageCapacity, new E.LocalizedTextVO(l.GenericTextIds.VALUE_PROPORTIONAL_VALUE));
    this.itxt_tempTimerCurrent = this.textFieldManager.registerTextField(this.subLayerDisp.mc_boost.mc_timerCurrent.txt_time, new b.TextVO(""));
    this.itxt_tempTimerNew = this.textFieldManager.registerTextField(this.subLayerDisp.mc_boost.mc_timerNew.txt_time, new b.TextVO("-   "));
    this.itxt_booster1 = this.textFieldManager.registerTextField(this.subLayerDisp.mc_boost.txt_boost1, new y.LocalizedNumberVO(0));
    this.itxt_booster2 = this.textFieldManager.registerTextField(this.subLayerDisp.mc_boost.txt_boost2, new y.LocalizedNumberVO(0));
    this.itxt_booster3 = this.textFieldManager.registerTextField(this.subLayerDisp.mc_boost.txt_boost3, new y.LocalizedNumberVO(0));
    this.itxt_emptyInventory.mouseEnabled = false;
    this.itxt_emptyInventory.verticalAlign = r.GGSVerticalAlign.MIDDLE;
    this.itxt_itemInfoType.autoFitToBounds = true;
    this.subLayerDisp.mc_boost.mc_timerCurrent.mouseChildren = false;
    this.subLayerDisp.mc_boost.mc_timerNew.mouseChildren = false;
    this.subLayerDisp.mc_boost.mc_timerCurrent.toolTipText = "dialog_ci_tempCi_remainingItemTime_tooltip";
    this.subLayerDisp.mc_boost.mc_timerNew.toolTipText = "dialog_ci_tempCi_boostedTotalItemTime_tooltip";
  };
  CastleConstructionItemsAssignSublayer.prototype.initInventoryFilters = function () {
    var e;
    this._filterConstructionItemEffectAmount = this.comboBox(this.subLayerDisp.inventoryComponent.mc_filterEffectAmount, U.ComboboxItemRendererConstructionItemEffectAmount, false);
    this._filterConstructionItemRarity = this.comboBox(this.subLayerDisp.inventoryComponent.mc_filterRarity, G.ComboboxItemRendererConstructionItemRarity, false);
    for (var t = 0; t <= ce.ConstructionItemData.MAX_EFFECTS_PER_CI; t++) {
      (e = new H.ComboboxItemRendererVO()).itemLabel = O.Localize.text(t == 0 ? "dialog_ci_filter_effects_all" : "dialog_ci_filter_effects_" + t);
      e.data = t;
      this._filterConstructionItemEffectAmount.addItem(e);
    }
    for (var i = -1; i <= C.ConstructionItemConst.RARENESS_LEGENDARY; i++) {
      (e = new H.ComboboxItemRendererVO()).itemLabel = O.Localize.text(i == -1 ? "dialog_ci_filter_rarities_all" : N.ConstructionItemVO.rarityText(i));
      e.data = i;
      this._filterConstructionItemRarity.addItem(e);
    }
    this._filterConstructionItemEffectAmount.selectItemIndex(0);
    this._filterConstructionItemRarity.selectItemIndex(0);
  };
  CastleConstructionItemsAssignSublayer.prototype.onChangeConstructionItemEffectAmountFilter = function (e = null) {
    this.interactionData.setFilterConstructionItemEffectAmount(this._filterConstructionItemEffectAmount.selectedData);
  };
  CastleConstructionItemsAssignSublayer.prototype.onChangeConstructionItemRatityFilter = function (e = null) {
    this.interactionData.setFilterConstructionItemRarity(this._filterConstructionItemRarity.selectedData);
  };
  CastleConstructionItemsAssignSublayer.prototype.onClick = function (e) {
    e.target = q.CastleMovieClipHelper.getFirstMovieClipParent(e.target);
    if (z.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.subLayerDisp.inventoryComponent.tab0:
        case this.subLayerDisp.inventoryComponent.tab1:
        case this.subLayerDisp.inventoryComponent.tab2:
        case this.subLayerDisp.inventoryComponent.tab3:
          this.onClickTab(parseInt(e.target.name.replace("tab", "")));
          break;
        case this.subLayerDisp.inventoryComponent.background:
          this.onInventoryItemClick(null);
          break;
        case this.subLayerDisp.inventoryComponent.btn_emptyInventoryCraft:
          ue.CastleDialogHandler.getInstance().removeDisplayedDialogFromList(Ee.CastleConstructionItemsMainDialog);
          ue.CastleDialogHandler.getInstance().registerDefaultDialogs(Ee.CastleConstructionItemsMainDialog, new ye.CastleConstructionItemsMainDialogProperties(Ee.CastleConstructionItemsMainDialog.SUBLAYER_CRAFTING));
          break;
        case this.subLayerDisp.mc_buildingList.mc_buildingIcon:
          this._currentSortOption = this._currentSortOption == CastleConstructionItemsAssignSublayer.SORTOPTION_NAME_DESCENDING ? CastleConstructionItemsAssignSublayer.SORTOPTION_NAME_ASCENDING : CastleConstructionItemsAssignSublayer.SORTOPTION_NAME_DESCENDING;
          this.updateBuildingList(false);
          break;
        case this.subLayerDisp.mc_buildingList.mc_itemsIcon:
          this._currentSortOption = this._currentSortOption == CastleConstructionItemsAssignSublayer.SORTOPTION_CI_DESCENDING ? CastleConstructionItemsAssignSublayer.SORTOPTION_CI_ASCENDING : CastleConstructionItemsAssignSublayer.SORTOPTION_CI_DESCENDING;
          this.updateBuildingList(false);
          break;
        case this.subLayerDisp.panel_itemInfo.mc_upgrade.btn_upgrade:
          ue.CastleDialogHandler.getInstance().removeDisplayedDialogFromList(Ee.CastleConstructionItemsMainDialog);
          ue.CastleDialogHandler.getInstance().registerDefaultDialogs(Ee.CastleConstructionItemsMainDialog, new ye.CastleConstructionItemsMainDialogProperties(Ee.CastleConstructionItemsMainDialog.SUBLAYER_CRAFTING, null, null, this.interactionData.draggedItemUpgradeRecipe));
          break;
        case this.subLayerDisp.mc_disassemble:
          this.onDisassembleClick();
          break;
        case this.subLayerDisp.mc_buildingList.btn_listView:
          this.toggleListType();
          break;
        case this.subLayerDisp.panel_itemInfo.btn_deselect:
          this.stopDrag();
          break;
        case this.subLayerDisp.panel_buildingInfo.btn_deselect:
          this.stopDrag();
          this.interactionData.setSelectedBuilding(null);
          break;
        case this.subLayerDisp.mc_boost.btn_deselect:
          this.hideBoosterOverlay();
          break;
        case this.subLayerDisp.mc_boost.btn_boost1:
          this.boostConstructionItem(Me.ClientConstCurrency.ID_RARE_BOOSTER_CONSUMABLE);
          break;
        case this.subLayerDisp.mc_boost.btn_boost2:
          this.boostConstructionItem(Me.ClientConstCurrency.ID_EPIC_BOOSTER_CONSUMABLE);
          break;
        case this.subLayerDisp.mc_boost.btn_boost3:
          this.boostConstructionItem(Me.ClientConstCurrency.ID_LEGENDARY_BOOSTER_CONSUMABLE);
          break;
        case this.subLayerDisp.mc_buildingList.mc_expiredOnly:
          this.interactionData.setFilterExpiredOnly(!this.interactionData.filterExpiredOnly);
      }
    }
  };
  CastleConstructionItemsAssignSublayer.prototype.toggleListType = function () {
    this.currentBuildingList.setVisibility(false);
    this.currentBuildingList.onHide();
    this.showDetailedList = !this.showDetailedList;
    this.currentBuildingList.setVisibility(true);
    this.currentBuildingList.onShow();
    this.subLayerDisp.mc_buildingList.btn_listView.toolTipText = this.showDetailedList ? "dialog_ci_assign_list_listView_tooltip" : "dialog_ci_assign_list_detailView_tooltip";
    this.subLayerDisp.mc_buildingList.btn_listView.gotoAndStop(this.showDetailedList ? 1 : 2);
    this.updateBuildingList(true);
  };
  CastleConstructionItemsAssignSublayer.prototype.onDisassembleClick = function () {
    var e = this;
    if (this.interactionData.draggedItem) {
      ue.CastleDialogHandler.getInstance().registerDefaultDialogs(_e.CastleConstructionItemsDisassembleDialog, new X.ConstructionItemsActionProperties(this.interactionData.draggedItem.constructionItemVO, null, null, function () {
        e.updateInventory(e._inventoryList.currentStartIndex);
      }));
      this.interactionData.setDraggedItem(null);
    }
  };
  CastleConstructionItemsAssignSublayer.prototype.onClickTab = function (e) {
    if (!this.interactionData.draggedItem) {
      this.interactionData.setCurrentItemFilter(this.interactionData.ITEM_FILTERS[e]);
    }
  };
  CastleConstructionItemsAssignSublayer.prototype.onClickItemSlotInBuilding = function (e) {
    if (this.interactionData.selectedSlot && this.interactionData.selectedSlot.equals(e.slotVO) || e.buildingVO != this.interactionData.selectedBuilding) {
      this.interactionData.setSelectedBuilding(e.buildingVO, false);
    }
    this.handleSlotClick(e);
  };
  CastleConstructionItemsAssignSublayer.prototype.onClickBuilding = function (e) {
    this.interactionData.setSelectedBuilding(e);
  };
  CastleConstructionItemsAssignSublayer.prototype.onInventoryItemTouchDrageStart = function (e) {
    ge.ConstructionItemTooltipHelper.hideToolTip();
    if (e) {
      var t = e.scrollItem;
      var i = t.disp.mc_icon.getChildAt(0);
      t.disp.mc_icon.removeChildAt(0);
      this.interactionData.setDraggedItem(t.constructionItemScrollItemVO.collectableItem);
      this.layoutManager.nativeCursor.startDrag(i, 0, 0, a.BasicCustomCursor.CURSOR_CLICK);
    } else {
      this.stopDrag();
    }
  };
  CastleConstructionItemsAssignSublayer.prototype.onInventoryItemTouchDrageEnd = function (e) {
    if (e && e.originEvent) {
      var t = e.originEvent.target.stage.getObjectUnderPoint(e.originEvent.rawX, e.originEvent.rawY, 0);
      switch (t.parent) {
        case this.subLayerDisp.inventoryComponent.background:
          this.onInventoryItemClick(null);
          return;
        case this.subLayerDisp.mc_disassemble:
          this.onDisassembleClick();
          return;
      }
      var i = t.parent && t.parent.parent;
      if (i && (i.parent === this.subLayerDisp.mc_buildingList.buildList_detail || i.parent === this.subLayerDisp.panel_buildingInfo) && i.name && ie.test(i.name)) {
        i.dispatchEvent(ee.CLICK, i.mc_item);
        this.stopDrag();
        return;
      }
    }
    this.stopDrag();
  };
  CastleConstructionItemsAssignSublayer.prototype.onInventoryItemClick = function (e) {
    if (e) {
      var t = e.scrollItem;
      var i = t.disp.mc_icon.getChildAt(0);
      t.disp.mc_icon.removeChildAt(0);
      this.interactionData.setDraggedItem(t.constructionItemScrollItemVO.collectableItem);
      if (!h.currentBrowserInfo.isTouchEvent(e.originEvent)) {
        this.layoutManager.nativeCursor.startDrag(i, 25, 35, a.BasicCustomCursor.CURSOR_CLICK);
      }
    } else {
      this.stopDrag();
    }
  };
  CastleConstructionItemsAssignSublayer.prototype.onClickConstructionItemSlotExtract = function (e) {
    if (e.itemVO.isTemporary) {
      this.subLayerDisp.mc_boost.visible = true;
      this.subLayerDisp.mc_disassemble.visible = false;
      this.subLayerDisp.bg_disassemble.visible = false;
      this.updateBoostOverlay();
    } else {
      ue.CastleDialogHandler.getInstance().registerDefaultDialogs(fe.CastleConstructionItemsExtractDialog, new X.ConstructionItemsActionProperties(e.itemVO, this.interactionData.selectedSlot, this.interactionData.selectedBuilding, null));
    }
  };
  CastleConstructionItemsAssignSublayer.prototype.onClickConstructionItemSlot = function (e) {
    this.handleSlotClick(e);
  };
  CastleConstructionItemsAssignSublayer.prototype.handleSlotClick = function (e) {
    if (e.isLocked()) {
      De.ConstructionItemsHelper.handleSlotClickLocked(e.slotVO);
    } else if (this.interactionData.draggedItem) {
      if (this.interactionData.selectedBuilding.getConstructionItem(e.slotVO)) {
        ue.CastleDialogHandler.getInstance().registerDefaultDialogs(Oe.CastleConstructionItemsOverwriteDialog, new X.ConstructionItemsActionProperties(this.interactionData.draggedItem.constructionItemVO, e.slotVO, this.interactionData.selectedBuilding, null));
      } else {
        ue.CastleDialogHandler.getInstance().registerDefaultDialogs(me.CastleConstructionItemsEmbedDialog, new X.ConstructionItemsActionProperties(this.interactionData.draggedItem.constructionItemVO, e.slotVO, this.interactionData.selectedBuilding, null));
      }
      this.stopDrag();
    } else {
      this.interactionData.setSelectedSlot(e.slotVO);
    }
  };
  CastleConstructionItemsAssignSublayer.prototype.stopDrag = function () {
    if (this.interactionData.draggedItem) {
      this.interactionData.setDraggedItem(null);
      this.layoutManager.nativeCursor.stopAllDrag();
    }
  };
  CastleConstructionItemsAssignSublayer.prototype.onInteractionUpdate = function (e) {
    this.updateDialog();
  };
  CastleConstructionItemsAssignSublayer.prototype.updateDialog = function () {
    this.updateInfoPanel();
    this.updateBuildingFilters();
    this.updateInventory(this._inventoryList.currentStartIndex);
    this.updateBuildingList(false);
    this.updateBoostOverlay();
  };
  CastleConstructionItemsAssignSublayer.prototype.updateInfoPanel = function () {
    if (this.interactionData.selectedBuilding) {
      this.showBuildingInfo();
    } else if (this.interactionData.draggedItem) {
      this.showItemInfo();
    } else {
      this.showDefaultInfo();
    }
  };
  CastleConstructionItemsAssignSublayer.prototype.updateBuildingList = function (e) {
    this.subLayerDisp.mc_buildingList.mc_buildingIcon.mc_arrow.visible = this._currentSortOption == CastleConstructionItemsAssignSublayer.SORTOPTION_NAME_ASCENDING || this._currentSortOption == CastleConstructionItemsAssignSublayer.SORTOPTION_NAME_DESCENDING;
    this.subLayerDisp.mc_buildingList.mc_buildingIcon.mc_arrow.gotoAndStop(this._currentSortOption == CastleConstructionItemsAssignSublayer.SORTOPTION_NAME_DESCENDING ? 1 : 2);
    this.subLayerDisp.mc_buildingList.mc_itemsIcon.mc_arrow.visible = this._currentSortOption == CastleConstructionItemsAssignSublayer.SORTOPTION_CI_ASCENDING || this._currentSortOption == CastleConstructionItemsAssignSublayer.SORTOPTION_CI_DESCENDING;
    this.subLayerDisp.mc_buildingList.mc_itemsIcon.mc_arrow.gotoAndStop(this._currentSortOption == CastleConstructionItemsAssignSublayer.SORTOPTION_CI_DESCENDING ? 1 : 2);
    this.subLayerDisp.mc_buildingList.mc_expiredOnly.visible = !!this.interactionData.expiredAreaVO && this.interactionData.expiredAreaVO.expiredCIs.length > 0;
    if (this.interactionData.filterExpiredOnly && !this.subLayerDisp.mc_buildingList.mc_expiredOnly.visible) {
      this.interactionData.setFilterExpiredOnly(false, false);
    }
    if (this.interactionData.filterExpiredOnly) {
      this.subLayerDisp.mc_buildingList.mc_expiredOnly.useFilters(Ne.BitmapFilterHelper.FILTER_GLOW_STANDARD, false);
      this.subLayerDisp.mc_buildingList.mc_expiredOnly.toolTipText = "dialog_ci_assign_tempCiExpired_filterShowAll_tooltip";
    } else {
      this.subLayerDisp.mc_buildingList.mc_expiredOnly.useFilters(null);
      this.subLayerDisp.mc_buildingList.mc_expiredOnly.toolTipText = "dialog_ci_assign_tempCiExpired_filterShowTemp_tooltip";
    }
    var t = [];
    var i = se.Iso.data.objects.provider.getObjectsByListTypes([ae.IsoObjectGroupEnum.INNER_BUILDINGS, ae.IsoObjectGroupEnum.DEFENCE]);
    if ((i = (i = i.filter(this.bindFunction(this.filterBuildings_0))).sort(this.bindFunction(this.sortBuildings))) != null) {
      for (var n = 0, o = i; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined) {
          t.push(new J.CIBuildingScrollItemVO(a, this.interactionData, this.bindFunction(this.onClickItemSlotInBuilding), this.bindFunction(this.onClickBuilding)));
        }
      }
    }
    this.currentBuildingList.updateWithNewData(t, e);
  };
  CastleConstructionItemsAssignSublayer.prototype.filterBuildings_0 = function (e) {
    var t = [];
    for (var i = 1; i < arguments.length; i++) {
      t[i - 1] = arguments[i];
    }
    return !!e && (this.interactionData.draggedItem ? e.constructionItemGroupIds.indexOf(this.interactionData.draggedItem.constructionItemVO.groupId) > -1 : this.filterBuilding(e));
  };
  CastleConstructionItemsAssignSublayer.prototype.updateInventory = function (e) {
    for (var t = 0; t <= this.interactionData.ITEM_FILTERS.length; t++) {
      if (z.ButtonHelper.isButtonSelected(this.subLayerDisp.inventoryComponent["tab" + t]) && this.interactionData.ITEM_FILTERS[t] != this.interactionData.currentItemFilter) {
        e = 0;
      }
      z.ButtonHelper.setButtonSelected(this.subLayerDisp.inventoryComponent["tab" + t], this.interactionData.ITEM_FILTERS[t] == this.interactionData.currentItemFilter);
    }
    this._inventoryList.clear();
    var i = B.CastleModel.constructionItemData.getPlayerInventoryBySlotTypeAndBuilding(this.interactionData.currentItemFilter, this.interactionData.selectedBuilding || this.interactionData.filterBuildingType, this.interactionData.filterBuildingGroundType, this.interactionData.filterConstructionItemEffectAmount, this.interactionData.filterConstructionItemRarity);
    i.sort(oe.ClientConstSort.sortConstructionItems);
    for (var n = 0, o = i.list; n < o.length; n++) {
      var a = o[n];
      if (a !== undefined && this.interactionData.draggedItem != a) {
        this._inventoryList.pushContent(new Z.ConstructionItemScrollItemVO(a));
      }
    }
    var s = (Math.ceil(this._inventoryList.voList.length / this._inventoryList.veList.length) - 1) * this._inventoryList.veList.length;
    if (e > s) {
      e = s;
    }
    this._inventoryList.initList(e, true);
    if (i.length == 0) {
      this.itxt_emptyInventory.visible = true;
      this.itxt_emptyInventory.textContentVO.textId = this.interactionData.selectedBuilding || this.interactionData.filterBuildingGroundType || this.interactionData.filterBuildingType ? "dialog_ci_assign_inventory_empty_building" : this.interactionData.currentItemFilter == ce.ConstructionItemData.ALL_SLOTS && this.interactionData.filterConstructionItemEffectAmount == 0 && this.interactionData.filterConstructionItemRarity == -1 ? "dialog_ci_assign_inventory_empty_none" : "dialog_ci_assign_inventory_empty_tab";
      this.subLayerDisp.inventoryComponent.btn_emptyInventoryCraft.visible = true;
    } else {
      this.itxt_emptyInventory.visible = false;
      this.itxt_emptyInventory.textContentVO.textId = "";
      this.subLayerDisp.inventoryComponent.btn_emptyInventoryCraft.visible = false;
    }
    this.setStorageText();
  };
  CastleConstructionItemsAssignSublayer.prototype.setStorageText = function () {
    var e = D.int(B.CastleModel.constructionItemData.getPlayerInventoryBySlotTypeAndBuilding().list.reduce(function (e, t) {
      return e + t.amount;
    }, 0));
    this.itxt_storageInfo.textContentVO.textReplacements = [e, C.ConstructionItemConst.INVENTORY_SOFTCAP];
    this.itxt_storageInfo.color = e >= CastleConstructionItemsAssignSublayer.STORAGE_WARNING ? T.ClientConstColor.GENERIC_RED : 4469542;
  };
  CastleConstructionItemsAssignSublayer.prototype.showDefaultInfo = function () {
    this.showInfoPanel(this.subLayerDisp.panel_defaultInfo);
  };
  CastleConstructionItemsAssignSublayer.prototype.showItemInfo = function () {
    this.showInfoPanel(this.subLayerDisp.panel_itemInfo);
    var e = this.interactionData.draggedItem.constructionItemVO;
    this.itxt_itemInfoName.textContentVO.textId = e.nameTextId;
    this.itxt_itemInfoLevel.textContentVO.textId = e.isTemporary ? "temporary" : "ci_level";
    this.itxt_itemInfoLevel.textContentVO.textReplacements = [e.level];
    this.itxt_itemInfoRarity.textContentVO.textId = e.rarityTextId;
    this.itxt_itemInfoType.textContentVO.stringValue = O.Localize.text(e.slotNameTextId) + "\n" + e.applicableBuildingsString;
    this.itxt_itemInfoEffects.textContentVO.stringValue = e.effectText;
    he.CollectableRenderHelper.displaySingleItem(new V.CollectableRenderClips(this.subLayerDisp.panel_itemInfo), this.interactionData.draggedItem, new x.CollectableRenderOptions(x.CollectableRenderOptions.ICON, new te(50, 50)));
    this.subLayerDisp.panel_itemInfo.mc_upgrade.visible = this.interactionData.draggedItemUpgradeRecipe;
    this.subLayerDisp.panel_itemInfo.mc_timer.visible = e.isTemporary;
    if (e.isTemporary) {
      this.itxt_itemInfoTimer.textContentVO.stringValue = Ve.CastleTimeStringHelper.getShortTimeString(e.getRemainingTime());
    }
  };
  CastleConstructionItemsAssignSublayer.prototype.showBuildingInfo = function () {
    var e = this;
    this.showInfoPanel(this.subLayerDisp.panel_buildingInfo);
    if (this.interactionData.selectedBuilding) {
      var t = this._previewConstructionItem ? this._previewBuilding : this.interactionData.selectedBuilding;
      this.itxt_buildingInfoName.textContentVO.textId = this.interactionData.selectedBuilding.getNameString();
      this.itxt_buildingInfoLevel.textContentVO.textReplacements = [this.interactionData.selectedBuilding.level];
      this._buildingStats.showBuildingInfo(t, this.interactionData.selectedBuilding.multiInfoPanelVO);
      Ce.WodPicHelper.addWodPic(this.interactionData.selectedBuilding, this.subLayerDisp.panel_buildingInfo.mc_building, 100, 100, "", true);
      Re.MovieClipHelper.clearMovieClip(this.subLayerDisp.panel_buildingInfo.mc_effectList.mc_items);
      var i = 0;
      t.constructionItems.forEach(function (t) {
        if (t) {
          if (i != 0) {
            var n = new (p.getDefinitionByName("ConstructionItemEffectList_Divider"))();
            n.y = i + 2;
            i = n.y + n.height;
            e.subLayerDisp.panel_buildingInfo.mc_effectList.mc_items.addChild(n);
          }
          var o = new (p.getDefinitionByName("ConstructionItemEffectList_Effect"))();
          o.y = i + 2;
          o.txt_name.multiline = true;
          var a = e.textFieldManager.registerTextField(o.txt_name, new E.LocalizedTextVO(t.nameTextId), new d.InternalGGSTextFieldConfigVO(true));
          var s = e.textFieldManager.registerTextField(o.txt_effects, new b.TextVO(t.effectText), new d.InternalGGSTextFieldConfigVO(true));
          s.color = t == e._previewConstructionItem ? T.ClientConstColor.GENERIC_GREEN : T.ClientConstColor.FONT_DEFAULT_COLOR;
          a.height = a.textHeight;
          s.height = s.textHeight;
          s.y = a.height;
          i = o.y + o.height;
          e.subLayerDisp.panel_buildingInfo.mc_effectList.mc_items.addChild(o);
          if (t.isAppearanceItem && t.isTemporary) {
            var r = new (p.getDefinitionByName("ConstructionItemEffectList_Timer"))();
            r.y = i + 2;
            e.textFieldManager.registerTextField(r.txt_remainingTime, new E.LocalizedTextVO("remainingTime"), new d.InternalGGSTextFieldConfigVO(true));
            e.itxt_tempTimerBuilding = e.textFieldManager.registerTextField(r.txt_timer, new b.TextVO(""), new d.InternalGGSTextFieldConfigVO(true));
            e.itxt_tempTimerBuilding.color = t == e._previewConstructionItem ? T.ClientConstColor.GENERIC_GREEN : T.ClientConstColor.FONT_DEFAULT_COLOR;
            i = r.y + r.height;
            e.subLayerDisp.panel_buildingInfo.mc_effectList.mc_items.addChild(r);
          }
        }
      });
      this.updateBuildingCITimer();
      var n = this._buildingEffectsScrollComponent.currentValue;
      var o = Math.max(0, i - this.subLayerDisp.panel_buildingInfo.mc_effectList.mc_items.mask.height * this.subLayerDisp.panel_buildingInfo.mc_effectList.mc_items.mask.scaleY);
      this._buildingEffectsScrollComponent.init(0, o, 30, 30);
      this._buildingEffectsScrollComponent.scrollToValue(n);
      this._buildingEffectsScrollComponent.show();
      this._buildingEffectsScrollComponent.onScrollSignal.add(this.bindFunction(this.onScrollEffectListBuilding));
      this._buildingEffectsScrollComponent.setVisibility(o > 0);
    }
  };
  CastleConstructionItemsAssignSublayer.prototype.onScrollEffectListBuilding = function () {
    this.subLayerDisp.panel_buildingInfo.mc_effectList.mc_items.y = -this._buildingEffectsScrollComponent.currentValue;
  };
  CastleConstructionItemsAssignSublayer.prototype.showInfoPanel = function (e) {
    if (!e.visible) {
      this.hideInfoPanels();
      e.visible = true;
    }
  };
  CastleConstructionItemsAssignSublayer.prototype.hideInfoPanels = function () {
    this.subLayerDisp.panel_defaultInfo.visible = false;
    this.subLayerDisp.panel_itemInfo.visible = false;
    this.subLayerDisp.panel_buildingInfo.visible = false;
    if (this._buildingEffectsScrollComponent) {
      this._buildingEffectsScrollComponent.scrollToValue(0);
      this._buildingEffectsScrollComponent.hide();
    }
  };
  CastleConstructionItemsAssignSublayer.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    if (this.sublayerProperties.buildingSelection) {
      this.interactionData.setSelectedBuilding(null, false);
      this.interactionData.setSelectedBuilding(this.sublayerProperties.buildingSelection, false);
    } else if (this.interactionData.selectedBuilding) {
      this.validateSelectedBuilding();
    }
    if (this.sublayerProperties.itemSlot) {
      this.interactionData.setSelectedSlot(this.sublayerProperties.itemSlot, false);
    }
    this._inventoryList.addEventListener(u.ScrollItemEvent.CLICK, this.bindFunction(this.onInventoryItemClick));
    this._inventoryList.addEventListener(u.ScrollItemEvent.TOUCH_DRAG_START, this.bindFunction(this.onInventoryItemTouchDrageStart));
    this._inventoryList.addEventListener(u.ScrollItemEvent.TOUCH_DRAG_END, this.bindFunction(this.onInventoryItemTouchDrageEnd));
    this.interactionData.SGN_UPDATE.add(this.bindFunction(this.onInteractionUpdate));
    B.CastleModel.constructionItemData.addEventListener(A.CastleConstructionItemsEvent.INVENTORY_UPDATED, this.bindFunction(this.onInventoryUpdated));
    B.CastleModel.constructionItemData.addEventListener(A.CastleConstructionItemsEvent.AEC_RECEIVED, this.bindFunction(this.onExpiredCIsReceived));
    this.controller.addEventListener(w.IsoEvent.ON_OBJECT_UPDATED, this.bindFunction(this.onBuildingUpdated));
    this.controller.addEventListener(w.IsoEvent.ON_OBJECT_REMOVED, this.bindFunction(this.onBuildingRemoved));
    this.controller.addEventListener(M.AreaDataEvent.ON_CONSTRUCTION_ITEMS_UPDATED, this.bindFunction(this.onCastleUpdate));
    this.controller.addEventListener(P.CastleMilitaryDataEvent.UNIT_UPDATED, this.bindFunction(this.onUnitUpdated));
    this._buildingListDetail.scrollComponent.onScrollSignal.add(this.bindFunction(this.hideTooltip));
    this._buildingListOverview.scrollComponent.onScrollSignal.add(this.bindFunction(this.hideTooltip));
    this.controller.addEventListener(ve.CastleConstructionItemsSwitchEvent.SWITCH_CASTLE, this.bindFunction(this.onExpiredCIDialogCastleSwitch));
    this.controller.addEventListener(Pe.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onCurrenciesUpdated));
    B.CastleModel.timerData.addEventListener(xe.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    B.CastleModel.smartfoxClient.sendCommandVO(new S.C2SShowPackageListVO(m.UnitProductionConst.UNIT_LIST));
    B.CastleModel.smartfoxClient.sendCommandVO(new S.C2SShowPackageListVO(m.UnitProductionConst.TOOLS_LIST));
    B.CastleModel.smartfoxClient.sendCommandVO(new Se.C2SGetAllExpiredConstructionItemsVO());
    this._castleSelector.initComponent(B.CastleModel.otherPlayerData.getOwnInfoVO(), B.CastleModel.userData.castleList, B.CastleModel.userData.castleList.getCastleVOByID(B.CastleModel.areaData.activeArea.areaId, B.CastleModel.kingdomData.activeKingdomID), [_.FactionConst.KINGDOM_ID, f.WorldIsland.KINGDOM_ID]);
    this._castleSelector.castleList.disp.addEventListener(o.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onSelectCastle));
    if (this.slots != null) {
      for (var i = 0, n = this.slots; i < n.length; i++) {
        var a = n[i];
        if (a !== undefined) {
          a.show();
        }
      }
    }
    B.CastleModel.smartfoxClient.sendCommandVO(new v.C2SGetContructionItemsInventoryVO());
    this.resetInventoryFilters();
    this.currentBuildingList.onShow();
    this.interactionData.triggerUpdate();
    this.sublayerProperties.clear();
    this.hideBoosterOverlay();
  };
  CastleConstructionItemsAssignSublayer.prototype.onUnitUpdated = function (e) {
    B.CastleModel.smartfoxClient.sendCommandVO(new S.C2SShowPackageListVO(m.UnitProductionConst.UNIT_LIST));
    B.CastleModel.smartfoxClient.sendCommandVO(new S.C2SShowPackageListVO(m.UnitProductionConst.TOOLS_LIST));
  };
  CastleConstructionItemsAssignSublayer.prototype.validateSelectedBuilding = function () {
    var e = false;
    var t = B.CastleModel.areaData.activeIsoData.objects.getCompleteObjectsList();
    if (t != null) {
      for (var i = 0, n = t; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && g.instanceOfClass(o, "ABasicBuildingVO") && o == this.interactionData.selectedBuilding) {
          e = true;
          break;
        }
      }
    }
    if (!e) {
      this.interactionData.setSelectedBuilding(null);
    }
  };
  CastleConstructionItemsAssignSublayer.prototype.hideTooltip = function () {
    ge.ConstructionItemTooltipHelper.hideToolTip();
  };
  CastleConstructionItemsAssignSublayer.prototype.hide = function () {
    e.prototype.hide.call(this);
    this._inventoryList.removeEventListener(u.ScrollItemEvent.CLICK, this.bindFunction(this.onInventoryItemClick));
    this._inventoryList.removeEventListener(u.ScrollItemEvent.TOUCH_DRAG_START, this.bindFunction(this.onInventoryItemTouchDrageStart));
    this._inventoryList.removeEventListener(u.ScrollItemEvent.TOUCH_DRAG_END, this.bindFunction(this.onInventoryItemTouchDrageEnd));
    this._castleSelector.castleList.disp.removeEventListener(o.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onSelectCastle));
    this.interactionData.SGN_UPDATE.remove(this.bindFunction(this.onInteractionUpdate));
    B.CastleModel.constructionItemData.removeEventListener(A.CastleConstructionItemsEvent.INVENTORY_UPDATED, this.bindFunction(this.onInventoryUpdated));
    B.CastleModel.constructionItemData.removeEventListener(A.CastleConstructionItemsEvent.AEC_RECEIVED, this.bindFunction(this.onExpiredCIsReceived));
    this.controller.removeEventListener(w.IsoEvent.ON_OBJECT_UPDATED, this.bindFunction(this.onBuildingUpdated));
    this.controller.removeEventListener(w.IsoEvent.ON_OBJECT_REMOVED, this.bindFunction(this.onBuildingRemoved));
    this.controller.removeEventListener(M.AreaDataEvent.ON_CONSTRUCTION_ITEMS_UPDATED, this.bindFunction(this.onCastleUpdate));
    this._buildingListDetail.scrollComponent.onScrollSignal.remove(this.bindFunction(this.hideTooltip));
    this._buildingListOverview.scrollComponent.onScrollSignal.remove(this.bindFunction(this.hideTooltip));
    this.controller.removeEventListener(ve.CastleConstructionItemsSwitchEvent.SWITCH_CASTLE, this.bindFunction(this.onExpiredCIDialogCastleSwitch));
    this.controller.removeEventListener(Pe.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onCurrenciesUpdated));
    B.CastleModel.timerData.removeEventListener(xe.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    this.controller.removeEventListener(L.CastleServerMessageArrivedEvent.UBC_ARRIVED, this.bindFunction(this.onUBCArrived));
    this.stopDrag();
    if (this.slots != null) {
      for (var t = 0, i = this.slots; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.hide();
        }
      }
    }
    if (!this._preventMEC) {
      if (this.interactionData.expiredAreaVO) {
        B.CastleModel.smartfoxClient.sendCommandVO(new Te.C2SMarkExpiredConstructionItemVO(this.interactionData.expiredAreaVO.castleWMO.objectId));
      }
    }
    this._preventMEC = false;
    this.hideBoosterOverlay();
    this.currentBuildingList.onHide();
  };
  CastleConstructionItemsAssignSublayer.prototype.onBuildingUpdated = function (e) {
    if (this.interactionData.selectedBuilding && this.interactionData.selectedBuilding.objectId == e.params[0].objectId) {
      this.interactionData.triggerUpdate();
    }
  };
  CastleConstructionItemsAssignSublayer.prototype.onBuildingRemoved = function (e) {
    if (this.interactionData.selectedBuilding && this.interactionData.selectedBuilding.objectId == e.params[0].objectId) {
      this.interactionData.setSelectedBuilding(null, false);
    }
    this.interactionData.triggerUpdate();
  };
  CastleConstructionItemsAssignSublayer.prototype.onCastleUpdate = function (e) {
    this.interactionData.triggerUpdate();
  };
  CastleConstructionItemsAssignSublayer.prototype.onInventoryUpdated = function (e) {
    this.updateInventory(this._inventoryList.currentStartIndex);
  };
  CastleConstructionItemsAssignSublayer.prototype.onSelectCastle = function (e) {
    var t = this._castleSelector.castleList.selectedData;
    this.switchCastle(t);
  };
  CastleConstructionItemsAssignSublayer.prototype.onCastleChanged = function (e) {
    this.controller.removeEventListener(L.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onCastleChanged));
    this.updateBuildingList(true);
  };
  CastleConstructionItemsAssignSublayer.prototype.onExpiredCIDialogCastleSwitch = function (e) {
    if (!e.worldmapObjectVO.equalsOtherWMO(B.CastleModel.areaData.activeAreaInfo.objectId, B.CastleModel.areaData.activeAreaInfo.kingdomID)) {
      this._preventMEC = true;
      this.switchCastle(e.worldmapObjectVO);
    }
  };
  CastleConstructionItemsAssignSublayer.prototype.switchCastle = function (e) {
    this.interactionData.setSelectedBuilding(null);
    this.interactionData.setSelectedSlot(null);
    if (re.FlashBlockHelper.checkFlashBlock(e.spaceID)) {
      this._castleSelector.castleList.selectItemIndex(this._castleSelector.castleList.previousSelectedItem);
    } else {
      if (!this._preventMEC) {
        if (this.interactionData.expiredAreaVO) {
          B.CastleModel.smartfoxClient.sendCommandVO(new Te.C2SMarkExpiredConstructionItemVO(this.interactionData.expiredAreaVO.castleWMO.objectId));
        }
      }
      this._preventMEC = false;
      s.CommandController.instance.executeCommand(le.IngameClientCommands.JOIN_AREA_AND_SAVE_POSITION_COMMAND, e);
      this.controller.addEventListener(L.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onCastleChanged));
      this.layoutManager.dialogCastleSwitch = true;
    }
  };
  CastleConstructionItemsAssignSublayer.prototype.onExpiredCIsReceived = function (e) {
    this.updateBuildingList(false);
    if (B.CastleModel.constructionItemData.hasNewExpiredItems()) {
      ue.CastleDialogHandler.getInstance().registerDefaultDialogs(Ae.ConstructionItemExpiredDialog);
      B.CastleModel.constructionItemData.saveLastExpirationTimestampSeen();
    }
  };
  CastleConstructionItemsAssignSublayer.prototype.onCurrenciesUpdated = function (e) {
    this.updateBoosterTextfield(this.itxt_booster1, Me.ClientConstCurrency.ID_RARE_BOOSTER_CONSUMABLE);
    this.updateBoosterTextfield(this.itxt_booster2, Me.ClientConstCurrency.ID_EPIC_BOOSTER_CONSUMABLE);
    this.updateBoosterTextfield(this.itxt_booster3, Me.ClientConstCurrency.ID_LEGENDARY_BOOSTER_CONSUMABLE);
  };
  CastleConstructionItemsAssignSublayer.prototype.updateBoosterTextfield = function (e, t) {
    var i = B.CastleModel.currencyData.getAmountById(t);
    e.textContentVO.numberValue = i;
    e.color = i > 0 ? T.ClientConstColor.FONT_DEFAULT_COLOR : T.ClientConstColor.FONT_INSUFFICIENT_COLOR;
  };
  CastleConstructionItemsAssignSublayer.prototype.updateBoosterButton = function (e, t, i, n) {
    if (!e.tooltip) {
      var o = new $();
      o.y = -5;
      e.addChild(o);
      e.tooltip = o;
    }
    var a = B.CastleModel.currencyData.getCurrencyById(i);
    var s = a && a.amount > 0;
    var r = t && t.rarity < n;
    e.toolTipText = r ? s ? "apply" : "dialog_ci_assign_tempCi_boostOverlay_noBooster_tooltip" : "dialog_ci_assign_tempCi_boostOverlay_noApplyBooster_tooltip";
    z.ButtonHelper.enableButton(e, s && r);
  };
  CastleConstructionItemsAssignSublayer.prototype.updateBoostOverlay = function () {
    if (this.subLayerDisp.mc_boost.visible && !this._boostInProgress) {
      if (this.interactionData.selectedSlot && this.interactionData.selectedBuilding) {
        Re.MovieClipHelper.clearMovieClip(this.subLayerDisp.mc_boost.ci_new);
        var e = this.interactionData.selectedBuilding.getConstructionItem(this.interactionData.selectedSlot);
        this.updateBoosterButton(this.subLayerDisp.mc_boost.btn_boost1, e, Me.ClientConstCurrency.ID_RARE_BOOSTER_CONSUMABLE, C.ConstructionItemConst.RARENESS_RARE);
        this.updateBoosterButton(this.subLayerDisp.mc_boost.btn_boost2, e, Me.ClientConstCurrency.ID_EPIC_BOOSTER_CONSUMABLE, C.ConstructionItemConst.RARENESS_EPIC);
        this.updateBoosterButton(this.subLayerDisp.mc_boost.btn_boost3, e, Me.ClientConstCurrency.ID_LEGENDARY_BOOSTER_CONSUMABLE, C.ConstructionItemConst.RARENESS_LEGENDARY);
        this.displayCIAsCollectable(this.subLayerDisp.mc_boost.ci_current, e);
        this.updateBoostCITimer();
        this.onCurrenciesUpdated(null);
        this.createPreviewBuilding();
      } else {
        this.hideBoosterOverlay();
      }
    }
  };
  CastleConstructionItemsAssignSublayer.prototype.displayCIAsCollectable = function (e, t) {
    var i = new R.CollectableItemConstructionItemVO();
    i.constructionItemVO = t;
    Re.MovieClipHelper.clearMovieClip(e);
    if (t) {
      he.CollectableRenderHelper.displaySingleItem(new V.CollectableRenderClips(e).addIconMc(e), i, this._boostCIRenderOptions);
    }
  };
  CastleConstructionItemsAssignSublayer.prototype.updateBoostCITimer = function () {
    if (this.subLayerDisp.mc_boost.visible && this.interactionData.selectedSlot && this.interactionData.selectedBuilding) {
      var e = this.interactionData.selectedBuilding.getConstructionItem(this.interactionData.selectedSlot);
      if (e) {
        this.itxt_tempTimerCurrent.textContentVO.stringValue = Ve.CastleTimeStringHelper.getShortTimeString(e.getRemainingTime());
        if (e.getRemainingTime() <= 0) {
          this.hideBoosterOverlay();
        }
      }
    }
  };
  CastleConstructionItemsAssignSublayer.prototype.hideBoosterOverlay = function () {
    this._boostInProgress = false;
    this.subLayerDisp.mc_disassemble.visible = true;
    this.subLayerDisp.bg_disassemble.visible = true;
    this.subLayerDisp.mc_boost.visible = false;
    this.subLayerDisp.mc_boost.anim_arrows.gotoAndStop(1);
    this.subLayerDisp.mc_boost.anim_boost.gotoAndStop(1);
    this.subLayerDisp.mc_boost.ci_new.alpha = 1;
    this._previewBuilding = null;
    this._previewConstructionItem = null;
  };
  CastleConstructionItemsAssignSublayer.prototype.updateBuildingCITimer = function () {
    if (this.interactionData.selectedBuilding && this.itxt_tempTimerBuilding) {
      var e = this._previewConstructionItem ? this._previewConstructionItem : this.interactionData.selectedBuilding.appearanceItem;
      if (e && e.isTemporary) {
        this.itxt_tempTimerBuilding.textContentVO.stringValue = Ve.CastleTimeStringHelper.getShortTimeString(e.getRemainingTime());
      }
    }
  };
  CastleConstructionItemsAssignSublayer.prototype.onTimerUpdate = function () {
    this.updateBuildingCITimer();
    this.updateBoostCITimer();
  };
  CastleConstructionItemsAssignSublayer.prototype.onMouseOver = function (t) {
    e.prototype.onMouseOver.call(this, t);
    switch (t.target) {
      case this.subLayerDisp.mc_boost.btn_boost1:
        if (z.ButtonHelper.isButtonEnabled(t.target)) {
          this.startBoosterPreview(C.ConstructionItemConst.RARENESS_RARE);
        }
        break;
      case this.subLayerDisp.mc_boost.btn_boost2:
        if (z.ButtonHelper.isButtonEnabled(t.target)) {
          this.startBoosterPreview(C.ConstructionItemConst.RARENESS_EPIC);
        }
        break;
      case this.subLayerDisp.mc_boost.btn_boost3:
        if (z.ButtonHelper.isButtonEnabled(t.target)) {
          this.startBoosterPreview(C.ConstructionItemConst.RARENESS_LEGENDARY);
        }
        break;
      default:
        this.endBoosterPreview();
    }
  };
  CastleConstructionItemsAssignSublayer.prototype.startBoosterPreview = function (e) {
    var t;
    var i = this.interactionData.selectedBuilding.getConstructionItem(this.interactionData.selectedSlot);
    for (var n = 0, o = B.CastleModel.constructionItemData.getConstructionItemGroup(i.groupId); n < o.length; n++) {
      var a = o[n];
      if (a.rarity == e) {
        t = a;
      }
    }
    if (t) {
      this.displayCIAsCollectable(this.subLayerDisp.mc_boost.ci_new, t);
      this._previewConstructionItem = t;
      this._previewBuilding.appearanceItem = this._previewConstructionItem;
      this.subLayerDisp.mc_boost.anim_arrows.play();
      this.itxt_tempTimerNew.textContentVO.stringValue = Ve.CastleTimeStringHelper.getShortTimeString(t.getRemainingTime());
      this.showBuildingInfo();
    }
  };
  CastleConstructionItemsAssignSublayer.prototype.createPreviewBuilding = function () {
    this._previewBuilding = B.CastleModel.wodData.createVObyWOD(this.interactionData.selectedBuilding.wodId, Fe.CastleWodData.TYPE_BUILDING);
    this._previewBuilding.cloneFrom(this.interactionData.selectedBuilding);
  };
  CastleConstructionItemsAssignSublayer.prototype.endBoosterPreview = function () {
    if (this._previewConstructionItem && !this._boostInProgress) {
      this._previewConstructionItem = null;
      Re.MovieClipHelper.clearMovieClip(this.subLayerDisp.mc_boost.ci_new);
      this.itxt_tempTimerNew.textContentVO.stringValue = "-   ";
      this.subLayerDisp.mc_boost.anim_arrows.gotoAndStop(1);
      this.showBuildingInfo();
    }
  };
  CastleConstructionItemsAssignSublayer.prototype.boostConstructionItem = function (e) {
    if (this.interactionData.selectedSlot && this.interactionData.selectedBuilding) {
      B.CastleModel.smartfoxClient.sendCommandVO(new we.C2SUseBoosterConsumableOnConstructionItemVO(this.interactionData.selectedBuilding.objectId, e, this.interactionData.selectedSlot.index, B.CastleModel.kingdomData.activeKingdomID, B.CastleModel.areaData.activeAreaInfo.objectId, this.interactionData.selectedBuilding.getConstructionItem(this.interactionData.selectedSlot).id));
      z.ButtonHelper.enableButton(this.subLayerDisp.mc_boost.btn_boost1, false);
      z.ButtonHelper.enableButton(this.subLayerDisp.mc_boost.btn_boost2, false);
      z.ButtonHelper.enableButton(this.subLayerDisp.mc_boost.btn_boost3, false);
      this.controller.addEventListener(L.CastleServerMessageArrivedEvent.UBC_ARRIVED, this.bindFunction(this.onUBCArrived));
      this._boostInProgress = true;
    }
  };
  CastleConstructionItemsAssignSublayer.prototype.onUBCArrived = function (e) {
    this.controller.removeEventListener(L.CastleServerMessageArrivedEvent.UBC_ARRIVED, this.bindFunction(this.onUBCArrived));
    if (e && e.params[0] != Be.ERROR.ALL_OK) {
      this.endBoosterPreview();
      this.updateBoostOverlay();
    } else {
      this.subLayerDisp.mc_boost.anim_boost.play();
      this.displayCIAsCollectable(this.subLayerDisp.mc_boost.ci_current, this._previewConstructionItem);
      if (this._previewConstructionItem) {
        this.itxt_tempTimerCurrent.textContentVO.stringValue = Ve.CastleTimeStringHelper.getShortTimeString(this._previewConstructionItem.getRemainingTime());
      } else {
        this.itxt_tempTimerCurrent.textContentVO.stringValue = "-   ";
      }
      this.itxt_tempTimerNew.textContentVO.stringValue = "-   ";
      I.TweenMax.fromTo(this.subLayerDisp.mc_boost.ci_new, 1.8, {
        alpha: 1
      }, {
        alpha: 0,
        onComplete: this.bindFunction(this.onBoostComplete)
      });
    }
  };
  CastleConstructionItemsAssignSublayer.prototype.onBoostComplete = function () {
    if (this._previewConstructionItem && this._previewConstructionItem.rarity == C.ConstructionItemConst.RARENESS_LEGENDARY) {
      this.endBoosterPreview();
      this.hideBoosterOverlay();
    } else {
      this._boostInProgress = false;
      this.subLayerDisp.mc_boost.anim_boost.gotoAndStop(1);
      this.subLayerDisp.mc_boost.ci_new.alpha = 1;
      this.endBoosterPreview();
      this._previewConstructionItem = null;
      this.updateBoostOverlay();
    }
  };
  CastleConstructionItemsAssignSublayer.prototype.showHelp = function () {
    this.stopDrag();
    ue.CastleDialogHandler.getInstance().showHelper("", O.Localize.text("help_ci_assign"));
  };
  CastleConstructionItemsAssignSublayer.prototype.resetInventoryFilters = function () {
    this._filterConstructionItemEffectAmount.disp.removeEventListener(o.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onChangeConstructionItemEffectAmountFilter));
    this._filterConstructionItemRarity.disp.removeEventListener(o.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onChangeConstructionItemRatityFilter));
    this._filterConstructionItemEffectAmount.selectItemIndex(0);
    this._filterConstructionItemRarity.selectItemIndex(0);
    this._filterConstructionItemEffectAmount.disp.addEventListener(o.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onChangeConstructionItemEffectAmountFilter));
    this._filterConstructionItemRarity.disp.addEventListener(o.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onChangeConstructionItemRatityFilter));
    this.onChangeConstructionItemEffectAmountFilter();
    this.onChangeConstructionItemRatityFilter();
  };
  Object.defineProperty(CastleConstructionItemsAssignSublayer.prototype, "currentBuildingList", {
    get: function () {
      if (this.showDetailedList) {
        return this._buildingListDetail;
      } else {
        return this._buildingListOverview;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleConstructionItemsAssignSublayer.prototype, "sublayerProperties", {
    get: function () {
      return this._params;
    },
    enumerable: true,
    configurable: true
  });
  CastleConstructionItemsAssignSublayer.prototype.sortBuildings = function (e, t) {
    for (var i = 0; i < this._currentSortOption.length; i++) {
      var n = D.int(this._currentSortOption[i][1](e, t));
      if (n != 0) {
        return D.int(this._currentSortOption[i][0] * n);
      }
    }
    return 0;
  };
  CastleConstructionItemsAssignSublayer.sortByName = function (e, t) {
    var i = D.int(O.Localize.text(e.getNameString()).localeCompare(O.Localize.text(t.getNameString())));
    if (i != 0) {
      return i;
    } else {
      return 0;
    }
  };
  CastleConstructionItemsAssignSublayer.sortByBuildingLevel = function (e, t) {
    return D.int(t.level - e.level);
  };
  CastleConstructionItemsAssignSublayer.sortByBuildingCIs = function (e, t) {
    if (e.numEquippedConstructionItems != t.numEquippedConstructionItems) {
      return t.numEquippedConstructionItems - e.numEquippedConstructionItems;
    }
    if (e.averageConstructionItemRarity != t.averageConstructionItemRarity) {
      if (e.averageConstructionItemRarity > t.averageConstructionItemRarity) {
        return -1;
      }
      if (e.averageConstructionItemRarity < t.averageConstructionItemRarity) {
        return 1;
      }
    }
    return 0;
  };
  CastleConstructionItemsAssignSublayer.__initialize_static_members = function () {
    CastleConstructionItemsAssignSublayer.STORAGE_WARNING = D.int(C.ConstructionItemConst.INVENTORY_SOFTCAP - 20);
    CastleConstructionItemsAssignSublayer.SORTOPTION_NAME_DESCENDING = [[1, CastleConstructionItemsAssignSublayer.sortByName], [1, CastleConstructionItemsAssignSublayer.sortByBuildingLevel], [1, CastleConstructionItemsAssignSublayer.sortByBuildingCIs]];
    CastleConstructionItemsAssignSublayer.SORTOPTION_NAME_ASCENDING = [[-1, CastleConstructionItemsAssignSublayer.sortByName], [1, CastleConstructionItemsAssignSublayer.sortByBuildingLevel], [1, CastleConstructionItemsAssignSublayer.sortByBuildingCIs]];
    CastleConstructionItemsAssignSublayer.SORTOPTION_CI_DESCENDING = [[1, CastleConstructionItemsAssignSublayer.sortByBuildingCIs], [1, CastleConstructionItemsAssignSublayer.sortByName], [1, CastleConstructionItemsAssignSublayer.sortByBuildingLevel]];
    CastleConstructionItemsAssignSublayer.SORTOPTION_CI_ASCENDING = [[-1, CastleConstructionItemsAssignSublayer.sortByBuildingCIs], [1, CastleConstructionItemsAssignSublayer.sortByName], [1, CastleConstructionItemsAssignSublayer.sortByBuildingLevel]];
  };
  CastleConstructionItemsAssignSublayer.ONE_ICON_POSITION = [-116, 62];
  CastleConstructionItemsAssignSublayer.TWO_ICONS_POSITIONS = [-153, 62, -79, 62];
  CastleConstructionItemsAssignSublayer.THREE_ICONS_POSITIONS = [-153, 62, -79, 62, -116, 90];
  CastleConstructionItemsAssignSublayer.FOUR_ICONS_POSITIONS = [-153, 62, -79, 62, -153, 90, -79, 90];
  CastleConstructionItemsAssignSublayer.FIVE_ICONS_POSITIONS = [-153, 62, -79, 62, -153, 90, -79, 90, -116, 117];
  CastleConstructionItemsAssignSublayer.SIX_ICONS_POSITIONS = [-153, 62, -79, 62, -153, 90, -79, 90, -153, 117, -79, 117];
  CastleConstructionItemsAssignSublayer.SPECIAL_LAYOUT_TWO_ICONS_STACKED = [-116, 62, -116, 90];
  CastleConstructionItemsAssignSublayer.SPECIAL_LAYOUT_START_POSITION = 7;
  return CastleConstructionItemsAssignSublayer;
}(Q.CastleConstructionItemsFilterSublayer);
exports.CastleConstructionItemsAssignSublayer = ne;
var oe = require("./75.js");
var ae = require("./143.js");
var se = require("./33.js");
var re = require("./160.js");
var le = require("./29.js");
var ce = require("./623.js");
var ue = require("./9.js");
var de = require("./1464.js");
var pe = require("./321.js");
var he = require("./25.js");
var ge = require("./356.js");
var Ce = require("./63.js");
var _e = require("./996.js");
var me = require("./2696.js");
var fe = require("./2697.js");
var Oe = require("./2699.js");
var Ee = require("./323.js");
var ye = require("./357.js");
var be = require("./2700.js");
var De = require("./239.js");
var Ie = require("./2701.js");
var Te = require("./2702.js");
var ve = require("./1467.js");
var Se = require("./2703.js");
var Ae = require("./1468.js");
var Le = require("./20.js");
var Pe = require("./32.js");
var Me = require("./52.js");
var Re = require("./2.js");
var Ve = require("./27.js");
var xe = require("./21.js");
var we = require("./2706.js");
var Be = require("./5.js");
var Fe = require("./56.js");
var Ne = require("./68.js");
var ke = require("./77.js");
var Ue = require("./2707.js");
var Ge = require("./78.js");
var He = require("./76.js");
h.classImplementsInterfaces(ne, "ICollectableRendererList", "ISublayer");
ne.__initialize_static_members();