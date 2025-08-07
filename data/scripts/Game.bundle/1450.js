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
var d = require("./6.js");
var p = require("./23.js");
var h = require("./23.js");
var g = require("./87.js");
var C = require("./13.js");
var _ = require("./4.js");
var m = require("./324.js");
var f = require("./2659.js");
var O = require("./420.js");
var E = require("./47.js");
var y = require("./59.js");
var b = require("./42.js");
var D = require("./8.js");
var I = require("./11.js");
var T = require("./624.js");
var v = require("./2660.js");
var S = require("./2661.js");
var A = createjs.Event;
var L = function (e) {
  function DecorationForgeSelectTargetDialog() {
    var t = this;
    t.SERIAL_SORT_PUBLIC_ORDER = [t.bindFunction(t.subSortByDecoPoints), t.bindFunction(t.subSortByXP), t.bindFunction(t.subSortByKingdom), t.bindFunction(t.subSortByName)];
    t.SERIAL_SORT_XP = [t.subSortByDeltaXP, t.bindFunction(t.subSortByDecoPoints), t.bindFunction(t.subSortByKingdom), t.bindFunction(t.subSortByName)];
    t._orderButtons = [];
    t._descendingOrder = false;
    t._itemVOs = [];
    t._itemVEs = [];
    t._relevantVOs = [];
    t._currentRelevantVOIndex = 0;
    t._currentItemContainerPosY = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this, DecorationForgeSelectTargetDialog.NAME) || this;
  }
  n.__extends(DecorationForgeSelectTargetDialog, e);
  DecorationForgeSelectTargetDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this._orderButtons = [this.dialogDisp.btn_publicOrder, this.dialogDisp.btn_xp];
    D.ButtonHelper.initButtons([this.dialogDisp.btn_close], G.ClickFeedbackButton);
    D.ButtonHelper.initButtons(this._orderButtons, S.DecorationForgeSelectTargetDialogOrderButton);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new u.TextVO(C.TextHelper.toUpperCaseLocaSafeTextId("dialog_decoForge_selectTarget_title"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_info, new c.LocalizedTextVO("dialog_decoForge_selectTarget_desc")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_searchInfo.txt_info, new c.LocalizedTextVO("dialog_decoForge_selectTarget_empty_hint")).autoFitToBounds = true;
    var i = this.textFieldManager.registerTextField(this.dialogDisp.txt_emptyList, new c.LocalizedTextVO("dialog_decoForge_selectTarget_empty_desc"));
    i.autoFitToBounds = true;
    i.verticalAlign = b.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this._locationCombobox = new w.SimpleComboboxComponent(this.dialogDisp.btn_location, new O.SimpleComboboxComponentConfig(-2, 1.02));
    this._scrollComponent = new B.ModernSliderScrollComponent(new E.SimpleScrollVO().initByParent(this.dialogDisp.mc_list.mc_slider).addMouseWheelElements([this.dialogDisp.mc_list]).addVisualElements([this.dialogDisp.mc_list.mc_slider]), new y.DynamicSizeScrollStrategyVertical(true));
    this._searchField = new F.SearchFieldComponent(this.dialogDisp.mc_search);
  };
  DecorationForgeSelectTargetDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this._locationCombobox.onShow();
    this._searchField.onShow();
    this._scrollComponent.show();
    this.initLocationCombobox();
    this.initItemVEs();
    this.controller.addEventListener(m.DecoStorageEvent.ON_TEMP_DECOS_UPDATED, this.bindFunction(this.onTempDecosUpdated));
    this._locationCombobox.onSelectionChanged.add(this.bindFunction(this.onLocationSelectionChanged));
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
    this.dialogDisp.stage.addEventListener(A.ENTER_FRAME, this.bindFunction(this.onEnterFrame));
    this._searchField.onSearchValueChanged.add(this.bindFunction(this.onSearchValueChanged));
    if (this._itemVEs != null) {
      for (var i = 0, n = this._itemVEs; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          o.onShow();
        }
      }
    }
    this.resetAndPreselectValues();
  };
  DecorationForgeSelectTargetDialog.prototype.hide = function () {
    if (this.dialogDisp.stage) {
      this.dialogDisp.stage.removeEventListener(A.ENTER_FRAME, this.bindFunction(this.onEnterFrame));
    }
    this.controller.addEventListener(m.DecoStorageEvent.ON_TEMP_DECOS_UPDATED, this.bindFunction(this.onTempDecosUpdated));
    this._locationCombobox.onSelectionChanged.remove(this.bindFunction(this.onLocationSelectionChanged));
    this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScroll));
    this._searchField.onSearchValueChanged.remove(this.bindFunction(this.onSearchValueChanged));
    if (this._itemVEs != null) {
      for (var t = 0, i = this._itemVEs; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.onHide();
        }
      }
    }
    this._scrollComponent.hide();
    this._searchField.onHide();
    this._locationCombobox.onHide();
    e.prototype.hide.call(this);
  };
  DecorationForgeSelectTargetDialog.prototype.resetAndPreselectValues = function () {
    this._searchField.clearSearchField();
    this._descendingOrder = true;
    this._currentOrderButton = this.dialogDisp.btn_publicOrder;
    this.updateOrderButtons();
    this._locationCombobox.selectIndex(0);
    if (this.dialogProperties.buttons.buttonTarget.currentSelectionVO) {
      var e = d.int(this.getIndexOfSelectResultInRelevantVoList(this.dialogProperties.buttons.buttonTarget.currentSelectionVO));
      if (e >= 0) {
        this._scrollComponent.scrollToValue(DecorationForgeSelectTargetDialog.LIST_ITEM_TOTAL_HEIGHT * e - DecorationForgeSelectTargetDialog.LIST_ITEM_TOTAL_HEIGHT * 2, false);
        this.updateListScrollPosition(false);
      } else {
        this.preselectDefault();
      }
    } else {
      this.preselectDefault();
    }
  };
  DecorationForgeSelectTargetDialog.prototype.preselectDefault = function () {
    this.selectLocationOfActiveArea();
  };
  DecorationForgeSelectTargetDialog.prototype.selectLocationOfActiveArea = function () {
    var e;
    var t = _.CastleModel.areaData.activeArea;
    for (var i = 0, n = this._locationCombobox.items; i < n.length; i++) {
      var o = n[i];
      if (o !== undefined && f.instanceOf_IWorldmapObjectVO(o.data)) {
        var a = o.data;
        if (a.objectId == t.areaId && a.kingdomID == t.areaInfo.kingdomID) {
          e = o;
          break;
        }
      }
    }
    if (e) {
      this._locationCombobox.selectItem(e);
    }
  };
  DecorationForgeSelectTargetDialog.prototype.interpretOrderButton = function (e) {
    this._descendingOrder = e != this._currentOrderButton || !this._descendingOrder;
    this._currentOrderButton = e;
    this.updateOrderButtons();
    this.updateRelevantVOs();
    this.updateItemVEs(true);
  };
  DecorationForgeSelectTargetDialog.prototype.updateOrderButtons = function () {
    if (this._orderButtons != null) {
      for (var e = 0, t = this._orderButtons; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          var n = this.getOrderButton(i);
          n.setActive(false);
          n.setArrow(false);
        }
      }
    }
    (n = this.getOrderButton(this._currentOrderButton)).setActive(true);
    n.setArrow(!this._descendingOrder);
    (n = this.getOrderButton(this.dialogDisp.btn_publicOrder)).disp.toolTipText = n.isArrowUp ? "sorting_publicOrder_ascending_tooltip" : "sorting_publicOrder_descending_tooltip";
    (n = this.getOrderButton(this.dialogDisp.btn_xp)).disp.toolTipText = n.isArrowUp ? "sorting_fusionXP_ascending_tooltip" : "sorting_fusionXP_descending_tooltip";
  };
  DecorationForgeSelectTargetDialog.prototype.initLocationCombobox = function () {
    var e = [];
    e.push(new x.ModernComboboxComponentItem(DecorationForgeSelectTargetDialog.LOCATION_ITEM_ASSET_CLIP_NAME, DecorationForgeSelectTargetDialog.NAME, this.bindFunction(this.fillLocationItemContent), DecorationForgeSelectTargetDialog.LOCATION_ITEM_ENTRY_ID_ALL));
    e.push(new x.ModernComboboxComponentItem(DecorationForgeSelectTargetDialog.LOCATION_ITEM_ASSET_CLIP_NAME, DecorationForgeSelectTargetDialog.NAME, this.bindFunction(this.fillLocationItemContent), DecorationForgeSelectTargetDialog.LOCATION_ITEM_ENTRY_ID_STORED));
    e.push(new x.ModernComboboxComponentItem(DecorationForgeSelectTargetDialog.LOCATION_ITEM_ASSET_CLIP_NAME, DecorationForgeSelectTargetDialog.NAME, this.bindFunction(this.fillLocationItemContent), DecorationForgeSelectTargetDialog.LOCATION_ITEM_ENTRY_ID_BUILD));
    var t = _.CastleModel.userData.castleList.listForActionPanel;
    if (t != null) {
      for (var i = 0, n = t; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          e.push(new x.ModernComboboxComponentItem(DecorationForgeSelectTargetDialog.LOCATION_ITEM_ASSET_CLIP_NAME, DecorationForgeSelectTargetDialog.NAME, this.bindFunction(this.fillLocationItemContent), o));
        }
      }
    }
    this._locationCombobox.updateWithNewValues(e);
  };
  DecorationForgeSelectTargetDialog.prototype.initItemVEs = function () {
    var e = this.getItemContainerMc();
    if (this._itemVEs) {
      if (this._itemVEs != null) {
        for (var t = 0, i = this._itemVEs; t < i.length; t++) {
          var n = i[t];
          if (n !== undefined) {
            n.destroy();
          }
        }
      }
      this._itemVEs = null;
    }
    a.MovieClipHelper.clearMovieClip(e);
    var o = Math.ceil(DecorationForgeSelectTargetDialog.LIST_ITEM_MASK_HEIGHT / DecorationForgeSelectTargetDialog.LIST_ITEM_HEIGHT) + 1;
    this._itemVEs = [];
    for (var s = 0; s < o; ++s) {
      n = new N.DecorationForgeSelectTargetDialogListItemVE();
      e.addChild(n.disp);
      n.onClickFunc = this.bindFunction(this.onListItemClicked);
      this._itemVEs.push(n);
    }
  };
  DecorationForgeSelectTargetDialog.prototype.initItemVOs = function () {
    var e = this.dialogProperties.buttons.buttonTarget;
    function addNewDecoToList(t, i, n, o, a = 1) {
      if (i && i.fusionInfoVO.isFusionTarget) {
        var s = new P.CollectableItemBuildingVO(-1, a);
        s.buildingVO = i;
        var r = new T.DecorationForgeSelectResultVO(s, n, o);
        r.btn = e;
        var l = new v.DecorationForgeSelectTargetDialogListItemVO(r);
        l.isSelected = r.equals(e.currentSelectionVO);
        t.push(l);
      }
    }
    this._itemVOs = [];
    var t;
    var i = this._locationCombobox.getSelectedItem();
    if (i.data == DecorationForgeSelectTargetDialog.LOCATION_ITEM_ENTRY_ID_ALL || i.data == DecorationForgeSelectTargetDialog.LOCATION_ITEM_ENTRY_ID_STORED) {
      var n = _.CastleModel.decoStorage.getMainStorage();
      for (var o = 0, a = Array.from(n.regularDecos.values()); o < a.length; o++) {
        var s = a[o];
        addNewDecoToList(this._itemVOs, r.castAs(R.IsoHelper.data.createIsoObjectVOByXml(s.wodId), "ADecoBuildingVO"), -1, -1, s.amount);
      }
      for (var l = 0, c = n.getUniqueDecosAsBuildings(); l < c.length; l++) {
        t = c[l];
        addNewDecoToList(this._itemVOs, t, -1, -1);
      }
      for (var u = 0, d = n.getCustomDecosAsBuildings(); u < d.length; u++) {
        t = d[u];
        addNewDecoToList(this._itemVOs, t, -1, -1);
      }
    }
    if (i.data == DecorationForgeSelectTargetDialog.LOCATION_ITEM_ENTRY_ID_ALL || i.data == DecorationForgeSelectTargetDialog.LOCATION_ITEM_ENTRY_ID_BUILD) {
      for (var p = 0, h = Array.from(_.CastleModel.decoStorage.tempDecos.values()); p < h.length; p++) {
        var C = h[p];
        if (C !== undefined) {
          for (var m = 0, O = C.buildings; m < O.length; m++) {
            t = O[m];
            addNewDecoToList(this._itemVOs, t, C.kingdomId, C.areaId);
          }
        }
      }
    }
    if (f.instanceOf_IWorldmapObjectVO(i.data)) {
      var E = _.CastleModel.areaData.activeArea;
      var y = i.data;
      if (E.areaId == y.objectId && E.areaInfo.kingdomID == y.kingdomID) {
        for (var b = 0, D = E.isoData.objects.provider.getObjectsByClass(V.ADecoBuildingVO, M.IsoObjectGroupEnum.INNER_BUILDINGS); b < D.length; b++) {
          var I = D[b];
          if (I.buildingState == g.IsoBuildingStateEnum.BUILD_COMPLETED) {
            addNewDecoToList(this._itemVOs, I, E.areaInfo.kingdomID, E.areaId);
          }
        }
      } else {
        var S = _.CastleModel.decoStorage.getTempDecos(y.objectId, y.kingdomID);
        if (S) {
          for (var A = 0, L = S.buildings; A < L.length; A++) {
            t = L[A];
            addNewDecoToList(this._itemVOs, t, y.kingdomID, y.objectId);
          }
        }
      }
    }
    this.updateNoDecoFound();
  };
  DecorationForgeSelectTargetDialog.prototype.updateRelevantVOs = function () {
    this._relevantVOs = [];
    if (this._itemVOs != null) {
      for (var e = 0, t = this._itemVOs; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined && this.doesItemMatchSearchCriteria(i)) {
          this._relevantVOs.push(i);
        }
      }
    }
    switch (this._currentOrderButton) {
      case this.dialogDisp.btn_publicOrder:
        this._relevantVOs.sort(this.bindFunction(this.sortByPublicOrder));
        break;
      case this.dialogDisp.btn_xp:
        this._relevantVOs.sort(this.bindFunction(this.sortByXp));
    }
    this.updateScrollComponent();
    this.updateSearchInfo();
  };
  DecorationForgeSelectTargetDialog.prototype.updateScrollComponent = function () {
    var e = d.int(o.MathBase.max(this._relevantVOs.length * DecorationForgeSelectTargetDialog.LIST_ITEM_TOTAL_HEIGHT - DecorationForgeSelectTargetDialog.LIST_ITEM_MASK_HEIGHT, 0));
    this._scrollComponent.strategy.visibleValue = e;
    this._scrollComponent.init(0, e, DecorationForgeSelectTargetDialog.LIST_ITEM_SCROLL_DELTA, DecorationForgeSelectTargetDialog.LIST_ITEM_SCROLL_DELTA);
    this._scrollComponent.scrollToValue(0, false);
    this.updateListScrollPosition(false);
    this._scrollComponent.setVisibility(e > 0);
  };
  DecorationForgeSelectTargetDialog.prototype.updateListScrollPosition = function (e = true) {
    var t = this.getItemContainerMc();
    h.TweenMax.killTweensOf(t);
    var i = -this._scrollComponent.currentValue;
    if (e) {
      h.TweenMax.to(t, DecorationForgeSelectTargetDialog.LIST_ITEM_SCROLL_DURATION, {
        y: i,
        ease: p.Linear.easeOut
      }).eventCallback("onUpdate", this.bindFunction(this.onTweenUpdate));
    } else {
      t.y = i;
    }
  };
  DecorationForgeSelectTargetDialog.prototype.updateItemVEs = function (e = false) {
    var t = this.getRelevantVOIndexByScrollPos();
    var i = this._currentRelevantVOIndex != t;
    this._currentRelevantVOIndex = t;
    var n = this.getItemContainerMc().y;
    var o = this._currentItemContainerPosY != n;
    this._currentItemContainerPosY = n;
    if (i || o || e) {
      var a = DecorationForgeSelectTargetDialog.LIST_ITEM_HEIGHT / 2 - n - -n % DecorationForgeSelectTargetDialog.LIST_ITEM_TOTAL_HEIGHT;
      for (var s = 0; s < this._itemVEs.length; ++s) {
        var r = this._itemVEs[s];
        if (o || e) {
          r.disp.y = a;
          a += DecorationForgeSelectTargetDialog.LIST_ITEM_TOTAL_HEIGHT;
        }
        if (i || e) {
          var l = this._currentRelevantVOIndex + s;
          var c = l >= this._relevantVOs.length ? null : this._relevantVOs[l];
          r.updateWithNewVO(c);
        }
      }
    }
  };
  DecorationForgeSelectTargetDialog.prototype.updateSearchInfo = function () {
    this.dialogDisp.mc_searchInfo.visible = this._relevantVOs.length <= 0 && (this._searchField.currentSearchValue != "" || this._locationCombobox.getSelectedItem().data != DecorationForgeSelectTargetDialog.LOCATION_ITEM_ENTRY_ID_ALL);
  };
  DecorationForgeSelectTargetDialog.prototype.updateNoDecoFound = function () {
    this.dialogDisp.txt_emptyList.visible = this._itemVOs.length <= 0;
  };
  DecorationForgeSelectTargetDialog.prototype.fillLocationItemContent = function (e) {
    this.textFieldManager.registerTextField(e.getItemMc().txt_text, new u.TextVO(this.getLocationItemText(e.data))).autoFitToBounds = true;
  };
  DecorationForgeSelectTargetDialog.prototype.getOrderButton = function (e) {
    return e.basicButton;
  };
  DecorationForgeSelectTargetDialog.prototype.getLocationItemText = function (e) {
    if (e == DecorationForgeSelectTargetDialog.LOCATION_ITEM_ENTRY_ID_ALL) {
      return l.Localize.text("filter_decoLocation_all");
    } else if (e == DecorationForgeSelectTargetDialog.LOCATION_ITEM_ENTRY_ID_STORED) {
      return l.Localize.text("filter_decoLocation_stored");
    } else if (e == DecorationForgeSelectTargetDialog.LOCATION_ITEM_ENTRY_ID_BUILD) {
      return l.Localize.text("filter_decoLocation_build");
    } else if (k.instanceOfClass(e, "InteractiveMapobjectVO")) {
      return l.Localize.text("filter_decoLocation_buildIn", [e.areaNameString]);
    } else {
      return "[INVALID]";
    }
  };
  DecorationForgeSelectTargetDialog.prototype.doesItemMatchSearchCriteria = function (e) {
    return this._searchField.currentSearchValue == "" || e.searchName.indexOf(this._searchField.currentSearchValue) >= 0;
  };
  DecorationForgeSelectTargetDialog.prototype.getRelevantVOIndexByScrollPos = function () {
    return d.int(-this.getItemContainerMc().y / DecorationForgeSelectTargetDialog.LIST_ITEM_TOTAL_HEIGHT);
  };
  DecorationForgeSelectTargetDialog.prototype.getItemContainerMc = function () {
    return this.dialogDisp.mc_list.mc_container.mc_items;
  };
  DecorationForgeSelectTargetDialog.prototype.getIndexOfSelectResultInRelevantVoList = function (e) {
    for (var t = 0; t < this._relevantVOs.length; ++t) {
      if (this._relevantVOs[t].selectVO.equals(e)) {
        return t;
      }
    }
    return -1;
  };
  DecorationForgeSelectTargetDialog.prototype.sortByPublicOrder = function (e, t) {
    return U.ClientConstSort.sortBySerialOrder(this.SERIAL_SORT_PUBLIC_ORDER, e, t);
  };
  DecorationForgeSelectTargetDialog.prototype.sortByXp = function (e, t) {
    return U.ClientConstSort.sortBySerialOrder(this.SERIAL_SORT_XP, e, t);
  };
  DecorationForgeSelectTargetDialog.prototype.subSortByName = function (e, t) {
    var i = e.searchName;
    var n = t.searchName;
    return i.localeCompare(n) * (this._descendingOrder ? 1 : -1);
  };
  DecorationForgeSelectTargetDialog.prototype.subSortByKingdom = function (e, t) {
    var i = d.int(e.selectVO.kingdomId);
    var n = d.int(t.selectVO.kingdomId);
    if (this._descendingOrder) {
      return i - n;
    } else {
      return n - i;
    }
  };
  DecorationForgeSelectTargetDialog.prototype.subSortByXP = function (e, t) {
    var i = d.int(e.buildingVO.buildingVO.fusionInfoVO.getCurrentTotalXp());
    var n = d.int(t.buildingVO.buildingVO.fusionInfoVO.getCurrentTotalXp());
    if (this._descendingOrder) {
      return n - i;
    } else {
      return i - n;
    }
  };
  DecorationForgeSelectTargetDialog.prototype.subSortByDeltaXP = function (e, t) {
    var i = e.buildingVO.buildingVO.fusionInfoVO.getDeltaXpPercentFactor();
    var n = t.buildingVO.buildingVO.fusionInfoVO.getDeltaXpPercentFactor();
    if (this._descendingOrder) {
      return n - i;
    } else {
      return i - n;
    }
  };
  DecorationForgeSelectTargetDialog.prototype.subSortByDecoPoints = function (e, t) {
    var i = d.int(e.buildingVO.buildingVO.decoPoints);
    var n = d.int(t.buildingVO.buildingVO.decoPoints);
    if (this._descendingOrder) {
      return n - i;
    } else {
      return i - n;
    }
  };
  DecorationForgeSelectTargetDialog.prototype.onClick = function (t) {
    if (D.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      this._locationCombobox.onOutOfBoundsClickCheck(t.target);
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.dialogProperties.onAbortFunc(null);
          this.hide();
          break;
        case this.dialogDisp.btn_publicOrder:
          this.interpretOrderButton(this.dialogDisp.btn_publicOrder);
          break;
        case this.dialogDisp.btn_xp:
          this.interpretOrderButton(this.dialogDisp.btn_xp);
      }
    }
  };
  DecorationForgeSelectTargetDialog.prototype.onSearchValueChanged = function () {
    this.updateRelevantVOs();
    this.updateItemVEs(true);
  };
  DecorationForgeSelectTargetDialog.prototype.onTempDecosUpdated = function (e) {};
  DecorationForgeSelectTargetDialog.prototype.onLocationSelectionChanged = function () {
    var e = this._locationCombobox.getSelectedItem();
    this.textFieldManager.registerTextField(this._locationCombobox.getSelectorMc().txt_text, new u.TextVO(this.getLocationItemText(e.data))).autoFitToBounds = true;
    this.initItemVOs();
    this.updateRelevantVOs();
    this.updateItemVEs(true);
  };
  DecorationForgeSelectTargetDialog.prototype.onScroll = function () {
    this.updateListScrollPosition();
  };
  DecorationForgeSelectTargetDialog.prototype.onEnterFrame = function (e) {
    this.updateItemVEs();
  };
  DecorationForgeSelectTargetDialog.prototype.onTweenUpdate = function () {
    this.updateItemVEs();
  };
  DecorationForgeSelectTargetDialog.prototype.onListItemClicked = function (e) {
    this.dialogProperties.onSuccessFunc(e.vo.selectVO);
    this.hide();
  };
  Object.defineProperty(DecorationForgeSelectTargetDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  DecorationForgeSelectTargetDialog.__initialize_static_members = function () {
    DecorationForgeSelectTargetDialog.LIST_ITEM_TOTAL_HEIGHT = DecorationForgeSelectTargetDialog.LIST_ITEM_HEIGHT + DecorationForgeSelectTargetDialog.LIST_ITEM_PADDING_Y;
    DecorationForgeSelectTargetDialog.LIST_ITEM_SCROLL_DELTA = d.int(DecorationForgeSelectTargetDialog.LIST_ITEM_TOTAL_HEIGHT);
  };
  DecorationForgeSelectTargetDialog.NAME = "DecorationForgeSelectTarget";
  DecorationForgeSelectTargetDialog.LOCATION_ITEM_ASSET_CLIP_NAME = "DecorationForgeSelectTarget_LocationItem";
  DecorationForgeSelectTargetDialog.LOCATION_ITEM_ENTRY_ID_ALL = "all";
  DecorationForgeSelectTargetDialog.LOCATION_ITEM_ENTRY_ID_STORED = "stored";
  DecorationForgeSelectTargetDialog.LOCATION_ITEM_ENTRY_ID_BUILD = "build";
  DecorationForgeSelectTargetDialog.LIST_ITEM_MASK_HEIGHT = 394;
  DecorationForgeSelectTargetDialog.LIST_ITEM_HEIGHT = 80;
  DecorationForgeSelectTargetDialog.LIST_ITEM_PADDING_Y = 5;
  DecorationForgeSelectTargetDialog.LIST_ITEM_SCROLL_DURATION = 0.3;
  return DecorationForgeSelectTargetDialog;
}(I.CastleExternalDialog);
exports.DecorationForgeSelectTargetDialog = L;
var P = require("./291.js");
var M = require("./143.js");
var R = require("./46.js");
var V = require("./325.js");
var x = require("./496.js");
var w = require("./419.js");
var B = require("./82.js");
var F = require("./986.js");
var N = require("./2662.js");
s.classImplementsInterfaces(L, "ICollectableRendererList");
L.__initialize_static_members();
var k = require("./1.js");
var U = require("./75.js");
var G = require("./36.js");