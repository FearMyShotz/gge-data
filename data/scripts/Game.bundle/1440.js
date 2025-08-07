Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./6.js");
var p = require("./16.js");
var h = require("./92.js");
var g = require("./446.js");
var C = require("./44.js");
var _ = require("./13.js");
var m = require("./4.js");
var f = require("./324.js");
var O = require("./20.js");
var E = require("./76.js");
var y = require("./77.js");
var b = require("./420.js");
var D = require("./42.js");
var I = require("./8.js");
var T = require("./11.js");
var v = createjs.Point;
var S = function (e) {
  function DecorationStorageDialog() {
    var t = this;
    t._ascendingDecoOrder = false;
    t._isEventKingdomStorage = false;
    t._itemVOs = [];
    CONSTRUCTOR_HACK;
    return t = e.call(this, DecorationStorageDialog.NAME) || this;
  }
  n.__extends(DecorationStorageDialog, e);
  DecorationStorageDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    I.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_deco, this.dialogDisp.btn_grid.mc_selector, this.dialogDisp.btn_type.mc_selector], O.ClickFeedbackButtonHover);
    I.ButtonHelper.initButtons([this.dialogDisp.filter_building, this.dialogDisp.filter_deco], O.ClickFeedbackButtonHover, 1);
    I.ButtonHelper.initButtons([this.dialogDisp.btn_help, this.dialogDisp.mc_capacity.btn_addCapacity], N.ClickFeedbackButton);
    I.ButtonHelper.initButton(this.dialogDisp.btn_deco, -1, k.ClickFeedbackButtonBackground);
    this.dialogDisp.mc_capacity.btn_addCapacity.visible = false;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_searchInfo.txt_info, new c.LocalizedTextVO("dialog_buildingsStorehouse_empty_tip")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_capacity.txt_title, new c.LocalizedTextVO("capacity_1")).autoFitToBounds = true;
    var i = this.textFieldManager.registerTextField(this.dialogDisp.txt_emptyList, new c.LocalizedTextVO("dialog_buildingsStorehouse_empty_desc"));
    i.autoFitToBounds = true;
    i.verticalAlign = D.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.dialogDisp.btn_grid.mc_selector.toolTipText = "filter_gridSize_tooltip";
    this.dialogDisp.btn_type.mc_selector.toolTipText = "filter_decoType_tooltip";
    this.dialogDisp.mc_capacity.mc_full.toolTipText = "dialog_buildingsStorehouse_capacityFull_tooltip";
    this.dialogDisp.mc_capacity.mc_icon.toolTipText = "dialog_uniqueDecosSpace_tooltip";
    this.dialogDisp.filter_building.toolTipText = "panel_deco_storage";
    this.dialogDisp.filter_deco.toolTipText = "DecorationStorehouse_name";
    this._gridSelector = new V.SimpleComboboxComponent(this.dialogDisp.btn_grid, new b.SimpleComboboxComponentConfig(-2, 1.025));
    this._typeSelector = new V.SimpleComboboxComponent(this.dialogDisp.btn_type, new b.SimpleComboboxComponentConfig(-2, 1.025));
    this._searchField = new x.SearchFieldComponent(this.dialogDisp.mc_search);
    var n = new y.InfiniteScrollListOptions(w.DecorationStorageDialogListItem, "DecorationStorage_ListItem", DecorationStorageDialog.NAME);
    n.itemPaddingY = 3;
    n.useSmoothScroll = true;
    this._scrollList = new M.InfiniteScrollListComponent(new E.InfiniteScrollListClips(this.dialogDisp.mc_list).addMaskMc(this.dialogDisp.mc_mask), n);
    this._currentCategory = DecorationStorageDialog.CATEGORY_DECO;
    this.dialogDisp.filter_building.mc_selected.visible = false;
    this.dialogDisp.filter_deco.mc_selected.visible = true;
  };
  DecorationStorageDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this._gridSelector.onShow();
    this._typeSelector.onShow();
    this._scrollList.onShow();
    this._searchField.onShow();
    this.controller.addEventListener(h.IsoEvent.ON_DRAG_STARTED_STORAGE_DECO, this.bindFunction(this.onStorageDecoDragStarted));
    this.controller.addEventListener(f.DecoStorageEvent.ON_INVENTORY_UPDATED, this.bindFunction(this.onStorageUpdated));
    this.controller.addEventListener(f.DecoStorageEvent.ON_NEW_INDICATOR_UPDATED, this.bindFunction(this.onStorageMarksUpdated));
    this._searchField.onSearchValueChanged.add(this.bindFunction(this.onSearchValueChanged));
    this._gridSelector.onSelectionChanged.add(this.bindFunction(this.onGridSelection));
    this._typeSelector.onSelectionChanged.add(this.bindFunction(this.onTypeSelection));
    this.updateTitle();
    this.updateTypeCombobox();
    this.initListItems();
    this.updateItems();
    this.updateDecoOrderButton();
    this._searchField.updateVisuals();
    this.updateSearchInfo();
    this.updateCapacity();
    this.updateTabs();
  };
  DecorationStorageDialog.prototype.hideLoaded = function (t = null) {
    this.controller.removeEventListener(h.IsoEvent.ON_DRAG_STARTED_STORAGE_DECO, this.bindFunction(this.onStorageDecoDragStarted));
    this.controller.removeEventListener(f.DecoStorageEvent.ON_INVENTORY_UPDATED, this.bindFunction(this.onStorageUpdated));
    this.controller.removeEventListener(f.DecoStorageEvent.ON_NEW_INDICATOR_UPDATED, this.bindFunction(this.onStorageMarksUpdated));
    if (this._searchField) {
      this._searchField.onSearchValueChanged.remove(this.bindFunction(this.onSearchValueChanged));
      this._searchField.onHide();
    }
    if (this._gridSelector) {
      this._gridSelector.onSelectionChanged.remove(this.bindFunction(this.onGridSelection));
      this._gridSelector.onHide();
    }
    if (this._typeSelector) {
      this._typeSelector.onSelectionChanged.remove(this.bindFunction(this.onTypeSelection));
      this._typeSelector.onHide();
    }
    if (this._scrollList) {
      this._scrollList.onHide();
    }
    s.CommandController.instance.executeCommand(P.IngameClientCommands.SEND_MARKED_BUILINGS_IN_STORAGE);
    e.prototype.hideLoaded.call(this, t);
  };
  DecorationStorageDialog.prototype.changeDecoOrder = function (e) {
    this._ascendingDecoOrder = e;
    this.updateDecoOrderButton();
    this.updateItems();
  };
  DecorationStorageDialog.prototype.changeCategory = function (e) {
    if (e != this._currentCategory) {
      this._currentCategory = e;
      this.dialogDisp.filter_building.mc_selected.visible = e == DecorationStorageDialog.CATEGORY_BUILDING;
      this.dialogDisp.filter_deco.mc_selected.visible = e == DecorationStorageDialog.CATEGORY_DECO;
      this.updateTitle();
      this.updateTypeCombobox();
      this.updateDecoOrderButton();
      this.updateCapacity();
      this.updateItems();
    }
  };
  DecorationStorageDialog.prototype.updateDecoOrderButton = function () {
    this.dialogDisp.btn_deco.mc_icon_PO.gotoAndStop(d.int(this._isEventKingdomStorage ? 2 : 1));
    this.dialogDisp.btn_deco.mc_icon_PO.visible = this._currentCategory == DecorationStorageDialog.CATEGORY_DECO;
    this.dialogDisp.btn_deco.mc_icon_level.visible = this._currentCategory == DecorationStorageDialog.CATEGORY_BUILDING;
    this.dialogDisp.btn_deco.mc_arrow.gotoAndStop(d.int(this._ascendingDecoOrder ? 1 : 2));
    this.dialogDisp.btn_deco.mc_background.gotoAndStop(d.int(this._ascendingDecoOrder ? 1 : 2));
    var e = "";
    e = this._currentCategory == DecorationStorageDialog.CATEGORY_BUILDING ? this._ascendingDecoOrder ? "sorting_buildingLevel_ascending_tooltip" : "sorting_buildingLevel_descending_tooltip" : this._isEventKingdomStorage ? this._ascendingDecoOrder ? "sorting_morale_ascending_tooltip" : "sorting_morale_descending_tooltip" : this._ascendingDecoOrder ? "sorting_publicOrder_ascending_tooltip" : "sorting_publicOrder_descending_tooltip";
    this.dialogDisp.btn_deco.toolTipText = e;
  };
  DecorationStorageDialog.prototype.initListItems = function () {
    this._isEventKingdomStorage = m.CastleModel.decoStorage.getCurrentStorage().isEventKingdomStorage();
    this._itemVOs = [];
    var e = m.CastleModel.decoStorage.getCurrentStorage().getAllDecosAsBuildings();
    if (e != null) {
      for (var t = 0, i = e; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          this._itemVOs.push(new B.DecorationStorageDialogListItemVO(n));
        }
      }
    }
    this.updateGridCombobox(true);
  };
  DecorationStorageDialog.prototype.updateTitle = function () {
    switch (this._currentCategory) {
      case DecorationStorageDialog.CATEGORY_BUILDING:
        this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new l.TextVO(_.TextHelper.toUpperCaseLocaSafeTextId("panel_deco_storage"))).autoFitToBounds = true;
        break;
      case DecorationStorageDialog.CATEGORY_DECO:
      default:
        this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new l.TextVO(_.TextHelper.toUpperCaseLocaSafeTextId("DecorationStorehouse_name"))).autoFitToBounds = true;
    }
  };
  DecorationStorageDialog.prototype.updateItems = function () {
    var e = [];
    if (this._itemVOs != null) {
      for (var t = 0, i = this._itemVOs; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && this.doesItemMatchCategory(n) && this.doesItemMatchSearchCriteria(n) && this.doesItemMatchGridCriteria(n) && this.doesItemMatchTypeCriteria(n)) {
          e.push(n);
        }
      }
    }
    e.sort(this.bindFunction(this.sortItems));
    this.dialogDisp.txt_emptyList.visible = e.length <= 0;
    this._scrollList.updateWithNewData(e);
    this.updateSearchInfo();
  };
  DecorationStorageDialog.prototype.updateSearchInfo = function () {
    this.dialogDisp.mc_searchInfo.visible = this._scrollList.dataList.length <= 0 && this._searchField.currentSearchValue != "";
  };
  DecorationStorageDialog.prototype.updateCapacity = function () {
    var e = this._currentCategory == DecorationStorageDialog.CATEGORY_DECO && !m.CastleModel.decoStorage.getCurrentStorage().isEventKingdomStorage();
    this.dialogDisp.mc_capacity.visible = e;
    if (e) {
      var t = m.CastleModel.decoStorage.getMainStorage();
      var i = t.getCurrentCapacity();
      var n = t.getMaxCapacity();
      this.textFieldManager.registerTextField(this.dialogDisp.mc_capacity.txt_amount, new c.LocalizedTextVO(a.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [i, n])).autoFitToBounds = true;
      this.dialogDisp.mc_capacity.txt_amount.textColor = i >= n ? p.ClientConstColor.MODERN_RED : p.ClientConstColor.MODERN_DEFAULT;
      this.dialogDisp.mc_capacity.mc_full.visible = i >= n;
    }
  };
  DecorationStorageDialog.prototype.updateTabs = function () {
    var e = m.CastleModel.decoStorage.getCurrentStorage().getCappedNewAmount(false, true);
    var t = m.CastleModel.decoStorage.getCurrentStorage().getCappedNewAmount(true, false);
    this.dialogDisp.filter_building.mc_amount.visible = e > 0;
    this.dialogDisp.filter_deco.mc_amount.visible = t > 0;
    this.textFieldManager.registerTextField(this.dialogDisp.filter_building.mc_amount.txt_amount, new r.LocalizedNumberVO(e));
    this.textFieldManager.registerTextField(this.dialogDisp.filter_deco.mc_amount.txt_amount, new r.LocalizedNumberVO(t));
  };
  DecorationStorageDialog.prototype.getHelpTextId = function () {
    if (this._isEventKingdomStorage) {
      return "buildingsStorehouse_event_help";
    } else {
      return C.SpecialServerHelper.checkTextIDForSkinText("buildingsStorehouse_regular_help");
    }
  };
  DecorationStorageDialog.prototype.doesItemMatchCategory = function (e) {
    var t = e.buildingVO instanceof L.ADecoBuildingVO;
    switch (this._currentCategory) {
      case DecorationStorageDialog.CATEGORY_BUILDING:
        return !t;
      case DecorationStorageDialog.CATEGORY_DECO:
        return t;
      default:
        return false;
    }
  };
  DecorationStorageDialog.prototype.doesItemMatchSearchCriteria = function (e) {
    return this._searchField.currentSearchValue == "" || e.searchName.indexOf(this._searchField.currentSearchValue) >= 0;
  };
  DecorationStorageDialog.prototype.doesItemMatchGridCriteria = function (e) {
    var t = this._gridSelector.getSelectedItem().data;
    return t.x < 0 || e.buildingVO.dimension.x == t.x && e.buildingVO.dimension.y == t.y;
  };
  DecorationStorageDialog.prototype.doesItemMatchTypeCriteria = function (e) {
    var t = this._typeSelector.getSelectedItem().data;
    var i = F.instanceOfClass(e.buildingVO, "ADecoBuildingVO") && !F.instanceOfClass(e.buildingVO, "CustomDecoBuildingVO") ? e.buildingVO.fusionInfoVO : null;
    switch (t) {
      case DecorationStorageDialog.TYPE_SELECTION_SOURCE_AND_TARGET:
        return !!i && i.isFusionSource && i.isFusionTarget;
      case DecorationStorageDialog.TYPE_SELECTION_SOURCE:
        return !!i && i.isFusionSource && !i.isFusionTarget;
      case DecorationStorageDialog.TYPE_SELECTION_TARGET:
        return !!i && !i.isFusionSource && i.isFusionTarget;
      case DecorationStorageDialog.TYPE_SELECTION_UNIQUE:
        return e.buildingVO.isUnique();
      case DecorationStorageDialog.TYPE_SELECTION_EFFECT:
        return e.buildingVO.allBuildingEffects && e.buildingVO.allBuildingEffects.length > 0;
      case DecorationStorageDialog.TYPE_SELECTION_DISTRICT_BUILDING:
        return e.buildingVO instanceof g.ADistrictBuildingVO;
      case DecorationStorageDialog.TYPE_SELECTION_RELIC_BUILDING:
        return e.buildingVO.isRelicBuilding;
      case DecorationStorageDialog.TYPE_SELECTION_LOCAL_BUILDING:
        return m.CastleModel.decoStorage.getCurrentStorage().isInLocalStorage(e.buildingVO);
      case DecorationStorageDialog.TYPE_SELECTION_OTHER:
        return !(e.buildingVO instanceof g.ADistrictBuildingVO) && !e.buildingVO.isRelicBuilding;
      default:
        return true;
    }
  };
  DecorationStorageDialog.prototype.sortItems = function (e, t) {
    return A.ClientConstSort.sortBySerialOrder([this.bindFunction(this.subSortItemsByBuildingType), this.bindFunction(this.subSortItemsByOrderValue), this.bindFunction(this.subSortItemsByFusionXp), this.bindFunction(this.subSortItemsByName)], e, t);
  };
  DecorationStorageDialog.prototype.subSortItemsByBuildingType = function (e, t) {
    if (F.instanceOfClass(e.buildingVO, "ADecoBuildingVO") && !F.instanceOfClass(t.buildingVO, "ADecoBuildingVO")) {
      return -1;
    } else if (!F.instanceOfClass(e.buildingVO, "ADecoBuildingVO") && F.instanceOfClass(t.buildingVO, "ADecoBuildingVO")) {
      return 1;
    } else {
      return 0;
    }
  };
  DecorationStorageDialog.prototype.subSortItemsByOrderValue = function (e, t) {
    var i = e.getOrderValue();
    var n = t.getOrderValue();
    if (this._ascendingDecoOrder) {
      return i - n;
    } else {
      return n - i;
    }
  };
  DecorationStorageDialog.prototype.subSortItemsByFusionXp = function (e, t) {
    var i = e.getFusionXP();
    var n = t.getFusionXP();
    if (this._ascendingDecoOrder) {
      return i - n;
    } else {
      return n - i;
    }
  };
  DecorationStorageDialog.prototype.subSortItemsByName = function (e, t) {
    var i = e.searchName;
    var n = t.searchName;
    return i.localeCompare(n) * (this._ascendingDecoOrder ? 1 : -1);
  };
  DecorationStorageDialog.prototype.sortGridDimensions = function (e, t) {
    if (e.x == t.x) {
      return e.y - t.y;
    } else {
      return e.x - t.x;
    }
  };
  DecorationStorageDialog.prototype.onClick = function (t) {
    if (I.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      this._gridSelector.onOutOfBoundsClickCheck(t.target);
      this._typeSelector.onOutOfBoundsClickCheck(t.target);
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_deco:
          this.changeDecoOrder(!this._ascendingDecoOrder);
          break;
        case this.dialogDisp.btn_help:
          T.CastleExternalDialog.dialogHandler.showHelper("", u.Localize.text(this.getHelpTextId()));
          break;
        case this.dialogDisp.filter_building:
          this.changeCategory(DecorationStorageDialog.CATEGORY_BUILDING);
          break;
        case this.dialogDisp.filter_deco:
          this.changeCategory(DecorationStorageDialog.CATEGORY_DECO);
      }
    }
  };
  DecorationStorageDialog.prototype.onStorageDecoDragStarted = function (e) {
    this.hide();
  };
  DecorationStorageDialog.prototype.onStorageMarksUpdated = function (e) {
    for (var t = 0, i = this._scrollList.items; t < i.length; t++) {
      var n = i[t];
      if (n !== undefined) {
        n.updateNewIndicator();
      }
    }
    this.updateTabs();
  };
  DecorationStorageDialog.prototype.onStorageUpdated = function (e) {
    var t = d.int(this._scrollList.scrollComponent.currentValue);
    this.initListItems();
    this.updateItems();
    this.updateCapacity();
    this.updateTabs();
    this._scrollList.options.useSmoothScroll = false;
    this._scrollList.scrollComponent.scrollToValue(t);
    this._scrollList.options.useSmoothScroll = true;
  };
  DecorationStorageDialog.prototype.onSearchValueChanged = function () {
    this.updateItems();
    this.updateSearchInfo();
  };
  DecorationStorageDialog.prototype.updateGridCombobox = function (e = false) {
    var t = this._gridSelector.getSelectedItem();
    var i = t ? t.data : null;
    this._gridSelector.updateWithNewValues(this.createGridSelectorItems());
    if (e && i) {
      this._gridSelector.selectItem(this._gridSelector.getItemByCompareFunc(function compareFunc(e) {
        var t = e.data;
        return t.x == i.x && t.y == i.y;
      }));
    } else {
      this._gridSelector.selectIndex(0);
    }
  };
  DecorationStorageDialog.prototype.createGridSelectorItems = function () {
    var e = [];
    e.push(new v(-1, -1));
    if (this._itemVOs != null) {
      for (var t = 0, i = this._itemVOs; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          var o = n.buildingVO.dimension;
          var a = false;
          for (var s = 0; s < e.length; ++s) {
            var r = e[s];
            if (o.x == r.x && o.y == r.y) {
              a = true;
              break;
            }
          }
          if (!a) {
            e.push(new v(o.x, o.y));
          }
        }
      }
    }
    e.sort(this.bindFunction(this.sortGridDimensions));
    var l = [];
    for (var c = 0, u = e; c < u.length; c++) {
      o = u[c];
      l.push(new R.ModernComboboxComponentItem(DecorationStorageDialog.ASSET_CLIP_NAME_GRID_ITEM, DecorationStorageDialog.NAME, this.bindFunction(this.fillGridItemContent), o));
    }
    return l;
  };
  DecorationStorageDialog.prototype.fillGridItemContent = function (e) {
    this.textFieldManager.registerTextField(e.getItemMc().txt_text, this.createGridItemTextVO(e)).autoFitToBounds = true;
  };
  DecorationStorageDialog.prototype.onGridSelection = function () {
    var e = this._gridSelector.getSelectedItem();
    this.textFieldManager.registerTextField(this._gridSelector.getSelectorMc().txt_text, this.createGridItemTextVO(e)).autoFitToBounds = true;
    this.updateItems();
  };
  DecorationStorageDialog.prototype.createGridItemTextVO = function (e) {
    var t = e.data;
    return new c.LocalizedTextVO(t.x < 0 ? "filter_gridSize_all" : "filter_gridSize_custom", [t.x, t.y]);
  };
  DecorationStorageDialog.prototype.updateTypeCombobox = function () {
    var e = [];
    switch (this._currentCategory) {
      case DecorationStorageDialog.CATEGORY_BUILDING:
        e.push(new R.ModernComboboxComponentItem(DecorationStorageDialog.ASSET_CLIP_NAME_TYPE_ITEM, DecorationStorageDialog.NAME, this.bindFunction(this.fillTypeItemContent), DecorationStorageDialog.TYPE_SELECTION_ALL));
        e.push(new R.ModernComboboxComponentItem(DecorationStorageDialog.ASSET_CLIP_NAME_TYPE_ITEM, DecorationStorageDialog.NAME, this.bindFunction(this.fillTypeItemContent), DecorationStorageDialog.TYPE_SELECTION_DISTRICT_BUILDING));
        e.push(new R.ModernComboboxComponentItem(DecorationStorageDialog.ASSET_CLIP_NAME_TYPE_ITEM, DecorationStorageDialog.NAME, this.bindFunction(this.fillTypeItemContent), DecorationStorageDialog.TYPE_SELECTION_RELIC_BUILDING));
        e.push(new R.ModernComboboxComponentItem(DecorationStorageDialog.ASSET_CLIP_NAME_TYPE_ITEM, DecorationStorageDialog.NAME, this.bindFunction(this.fillTypeItemContent), DecorationStorageDialog.TYPE_SELECTION_OTHER));
        e.push(new R.ModernComboboxComponentItem(DecorationStorageDialog.ASSET_CLIP_NAME_TYPE_ITEM, DecorationStorageDialog.NAME, this.bindFunction(this.fillTypeItemContent), DecorationStorageDialog.TYPE_SELECTION_LOCAL_BUILDING));
        break;
      case DecorationStorageDialog.CATEGORY_DECO:
        e.push(new R.ModernComboboxComponentItem(DecorationStorageDialog.ASSET_CLIP_NAME_TYPE_ITEM, DecorationStorageDialog.NAME, this.bindFunction(this.fillTypeItemContent), DecorationStorageDialog.TYPE_SELECTION_ALL));
        e.push(new R.ModernComboboxComponentItem(DecorationStorageDialog.ASSET_CLIP_NAME_TYPE_ITEM, DecorationStorageDialog.NAME, this.bindFunction(this.fillTypeItemContent), DecorationStorageDialog.TYPE_SELECTION_SOURCE_AND_TARGET));
        e.push(new R.ModernComboboxComponentItem(DecorationStorageDialog.ASSET_CLIP_NAME_TYPE_ITEM, DecorationStorageDialog.NAME, this.bindFunction(this.fillTypeItemContent), DecorationStorageDialog.TYPE_SELECTION_SOURCE));
        e.push(new R.ModernComboboxComponentItem(DecorationStorageDialog.ASSET_CLIP_NAME_TYPE_ITEM, DecorationStorageDialog.NAME, this.bindFunction(this.fillTypeItemContent), DecorationStorageDialog.TYPE_SELECTION_TARGET));
        e.push(new R.ModernComboboxComponentItem(DecorationStorageDialog.ASSET_CLIP_NAME_TYPE_ITEM, DecorationStorageDialog.NAME, this.bindFunction(this.fillTypeItemContent), DecorationStorageDialog.TYPE_SELECTION_EFFECT));
        e.push(new R.ModernComboboxComponentItem(DecorationStorageDialog.ASSET_CLIP_NAME_TYPE_ITEM, DecorationStorageDialog.NAME, this.bindFunction(this.fillTypeItemContent), DecorationStorageDialog.TYPE_SELECTION_UNIQUE));
    }
    this._typeSelector.updateWithNewValues(e);
    this._typeSelector.selectIndex(0);
    this._typeSelector.disp.visible = !m.CastleModel.decoStorage.getCurrentStorage().isEventKingdomStorage();
  };
  DecorationStorageDialog.prototype.fillTypeItemContent = function (e) {
    this.textFieldManager.registerTextField(e.getItemMc().txt_text, this.createTypeItemTextVO(e)).autoFitToBounds = true;
  };
  DecorationStorageDialog.prototype.onTypeSelection = function () {
    var e = this._typeSelector.getSelectedItem();
    this.textFieldManager.registerTextField(this._typeSelector.getSelectorMc().txt_text, this.createTypeItemTextVO(e)).autoFitToBounds = true;
    this.updateItems();
  };
  DecorationStorageDialog.prototype.createTypeItemTextVO = function (e) {
    var t = "";
    switch (e.data) {
      case DecorationStorageDialog.TYPE_SELECTION_ALL:
        t = "filter_decoType_all";
        break;
      case DecorationStorageDialog.TYPE_SELECTION_SOURCE_AND_TARGET:
        t = "filter_decoType_targetsAndSources";
        break;
      case DecorationStorageDialog.TYPE_SELECTION_SOURCE:
        t = "filter_decoType_onlySources";
        break;
      case DecorationStorageDialog.TYPE_SELECTION_TARGET:
        t = "filter_decoType_onlyTargets";
        break;
      case DecorationStorageDialog.TYPE_SELECTION_EFFECT:
        t = "filter_decoType_effect";
        break;
      case DecorationStorageDialog.TYPE_SELECTION_UNIQUE:
        t = "uniqueDeco";
        break;
      case DecorationStorageDialog.TYPE_SELECTION_DISTRICT_BUILDING:
        t = "panel_deco_districts";
        break;
      case DecorationStorageDialog.TYPE_SELECTION_RELIC_BUILDING:
        t = "filter_decoType_onlyRelics";
        break;
      case DecorationStorageDialog.TYPE_SELECTION_EFFECT_BUILDING:
        t = "filter_decoType_onlyWithEffects";
        break;
      case DecorationStorageDialog.TYPE_SELECTION_LOCAL_BUILDING:
        t = "filter_decoType_onlyLocals";
        break;
      case DecorationStorageDialog.TYPE_SELECTION_OTHER:
        t = "filter_decoType_onlyOthers";
    }
    return new c.LocalizedTextVO(t);
  };
  DecorationStorageDialog.NAME = "DecorationStorage4";
  DecorationStorageDialog.ASSET_CLIP_NAME_GRID_ITEM = "DecorationStorage_GridItem";
  DecorationStorageDialog.ASSET_CLIP_NAME_TYPE_ITEM = "DecorationStorage_TypeItem";
  DecorationStorageDialog.TYPE_SELECTION_ALL = "tsAll";
  DecorationStorageDialog.TYPE_SELECTION_SOURCE_AND_TARGET = "tsSourceAndTarget";
  DecorationStorageDialog.TYPE_SELECTION_SOURCE = "tsSource";
  DecorationStorageDialog.TYPE_SELECTION_TARGET = "tsTarget";
  DecorationStorageDialog.TYPE_SELECTION_OTHER = "tsOther";
  DecorationStorageDialog.TYPE_SELECTION_UNIQUE = "tsUnique";
  DecorationStorageDialog.TYPE_SELECTION_EFFECT = "tsEffect";
  DecorationStorageDialog.TYPE_SELECTION_DISTRICT_BUILDING = "tsDistrict";
  DecorationStorageDialog.TYPE_SELECTION_RELIC_BUILDING = "tsRelic";
  DecorationStorageDialog.TYPE_SELECTION_EFFECT_BUILDING = "tsEffectBuilding";
  DecorationStorageDialog.TYPE_SELECTION_LOCAL_BUILDING = "tsLocal";
  DecorationStorageDialog.CATEGORY_BUILDING = "building";
  DecorationStorageDialog.CATEGORY_DECO = "deco";
  return DecorationStorageDialog;
}(T.CastleExternalDialog);
exports.DecorationStorageDialog = S;
o.classImplementsInterfaces(S, "ICollectableRendererList");
var A = require("./75.js");
var L = require("./325.js");
var P = require("./29.js");
var M = require("./78.js");
var R = require("./496.js");
var V = require("./419.js");
var x = require("./986.js");
var w = require("./2631.js");
var B = require("./2663.js");
var F = require("./1.js");
var N = require("./36.js");
var k = require("./121.js");