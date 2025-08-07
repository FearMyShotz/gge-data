Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./13.js");
var a = require("./9.js");
var s = require("./20.js");
var r = require("./41.js");
var l = require("./34.js");
var c = require("./2194.js");
var u = require("./2195.js");
var d = require("./2.js");
var p = require("./716.js");
var h = require("./247.js");
var g = require("./717.js");
var C = require("./430.js");
var _ = require("./1271.js");
var m = require("./1273.js");
var f = require("./127.js");
var O = require("./1274.js");
var E = require("./3.js");
var y = require("./4.js");
var b = require("./35.js");
var D = require("./2242.js");
var I = require("./2316.js");
var T = require("./1303.js");
var v = require("./1307.js");
var S = require("./139.js");
var A = require("./119.js");
var L = require("./32.js");
var P = require("./233.js");
var M = require("./26.js");
var R = require("./383.js");
var V = require("./6.js");
var x = require("./57.js");
var w = require("./1.js");
var B = require("./600.js");
var F = require("./516.js");
var N = require("./893.js");
var k = require("./5.js");
var U = require("./2319.js");
var G = require("./2320.js");
var H = require("./2321.js");
var j = require("./73.js");
var W = require("./70.js");
var Y = require("./68.js");
var K = require("./2322.js");
var z = require("./8.js");
var q = require("./36.js");
var X = require("./353.js");
var Q = createjs.Container;
var J = createjs.MouseEvent;
var Z = createjs.Point;
var $ = require("./2329.js");
var ee = function (e) {
  function CastleEquipmentSublayer(t) {
    var i = e.call(this, t) || this;
    i._waitingForServerResponseSoldItem = false;
    i._isLocked = false;
    i._currentLordFilter = "";
    i._lastFilter = -1;
    i._lastLordType = "";
    i.init();
    return i;
  }
  n.__extends(CastleEquipmentSublayer, e);
  CastleEquipmentSublayer.getFilterMap = function () {
    var e = new Map();
    e.set(f.BasicEquippableVO.SLOT_TYPE_HELMET, CastleEquipmentSublayer.FILTER_HELMET);
    e.set(f.BasicEquippableVO.SLOT_TYPE_ARMOR, CastleEquipmentSublayer.FILTER_ARMOR);
    e.set(f.BasicEquippableVO.SLOT_TYPE_WEAPON, CastleEquipmentSublayer.FILTER_WEAPON);
    e.set(f.BasicEquippableVO.SLOT_TYPE_ARTIFACT, CastleEquipmentSublayer.FILTER_ARTIFACT);
    e.set(f.BasicEquippableVO.SLOT_TYPE_SKIN, CastleEquipmentSublayer.FILTER_SKIN);
    e.set(f.BasicEquippableVO.SLOT_TYPE_HERO, CastleEquipmentSublayer.FILTER_HERO);
    return e;
  };
  CastleEquipmentSublayer.prototype.init = function () {
    this.inventoryUpdatedSignal = new x.Signal();
    this.gemTabSwitchedSignal = new x.Signal();
    this._isFavoriteMode = false;
    var e = [this.dialogDisp.mc_equipmentList.btn_up, this.dialogDisp.mc_equipmentList.btn_down, this.dialogDisp.btn_autoSell, this.dialogDisp.btn_favoriteDisabled, this.dialogDisp.btn_favoriteEnabled, this.dialogDisp.mc_lordName.btn_rename, this.dialogDisp.lordList.btn_up, this.dialogDisp.lordList.btn_down, this.dialogDisp.lordList.item0, this.dialogDisp.lordList.item1, this.dialogDisp.lordList.item2, this.dialogDisp.lordList.item3, this.dialogDisp.lordList.item4, this.dialogDisp.lordList.item5, this.dialogDisp.lordList.item6, this.dialogDisp.lordList.item7, this.dialogDisp.lordList.item8, this.dialogDisp.lordList.item9, this.dialogDisp.mc_equipmentList.tab0, this.dialogDisp.mc_equipmentList.tab1, this.dialogDisp.mc_equipmentList.tab2, this.dialogDisp.mc_equipmentList.tab3, this.dialogDisp.mc_equipmentList.tab4, this.dialogDisp.mc_equipmentList.tab5, this.dialogDisp.mc_equipmentList.tab6];
    z.ButtonHelper.initButtons([this.dialogDisp.btn_filter, this.dialogDisp.mc_equipmentList.btn_addStorage], q.ClickFeedbackButton, 1);
    z.ButtonHelper.initButtons([this.dialogDisp.mc_generalSelection.btn_generalOverview, this.dialogDisp.btn_switch], s.ClickFeedbackButtonHover);
    this.initBasicButtons(e);
    this.dialogDisp.btn_autoSell.toolTipText = "";
    this.dialogDisp.btn_favoriteEnabled.toolTipText = "dialog_equipment_favoriteEquipment_deactivate_tooltip";
    this.dialogDisp.btn_favoriteDisabled.toolTipText = "dialog_equipment_favoriteEquipment_activate_tooltip";
    this.dialogDisp.mc_storageWarning.toolTipText = "dialog_equipment_storageWarning";
    this.dialogDisp.mc_lordName.btn_rename.toolTipText = "dialog_renameLord_title";
    this.dialogDisp.mc_equipmentList.mc_storageSpace.toolTipText = "dialog_equipmentSpace_tooltip";
    this.dialogDisp.mc_equipmentList.mc_storageSpace.mouseChildren = false;
    this.dialogDisp.mc_equipmentList.mc_storageSpace.mouseChildren = false;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new E.LocalizedTextVO("dialog_equipment_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_locked.txt_value, new E.LocalizedTextVO("dialog_equipment_lordNotAvailable"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_generalSelection.txt_header, new E.LocalizedTextVO("dialog_attack_rework2022_generals_quickSelection_header"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_generalSelection.btn_generalOverview.txt_label, new E.TextVO(o.TextHelper.toUpperCaseLocaSafeTextId("dialog_attack_rework2022_generals_overview_button")));
    this.itxt_name = this.textFieldManager.registerTextField(this.dialogDisp.mc_lordName.txt_name, new E.TextVO(""));
    this.itxt_name.autoFitToBounds = true;
    this._itxt_storage = this.textFieldManager.registerTextField(this.dialogDisp.mc_equipmentList.mc_storageSpace.txt_storage, new E.LocalizedTextVO(d.GenericTextIds.VALUE_PROPORTIONAL_VALUE));
    this._itxt_storage.autoFitToBounds = true;
    this._itxt_storage.verticalAlign = d.GGSVerticalAlign.MIDDLE;
    this._lordEffectsComponent = new u.LordEffectDialogComponent(this.dialogDisp.mc_lordStatsEffects);
    this.activateSlotToolTips();
    this.eqFilterPanel = new _.EquipmentFilterPanel(this.dialogDisp.filter_eq, this.dialogDisp.mc_empty);
    this.eqFilterPanel.hide();
    this.gemFilterPanel = new m.GemFilterPanel(this.dialogDisp.filter_gem, this.dialogDisp.mc_empty);
    this.gemFilterPanel.hide();
    this.dialogDisp.btn_filter.mc_arrow.gotoAndStop(2);
    this.dialogDisp.btn_filter.toolTipText = "filterPanel_expand";
    this.dialogDisp.mc_empty.visible = false;
    for (var t = 0; t < this.dialogDisp.children.length; t++) {
      var i = this.dialogDisp.children[t];
      if (i instanceof Q && i.name != "mc_equipmentList" && !i.name.includes("slot")) {
        i.tickEnabled = false;
      }
    }
    this.initInventory();
    this.updateAutoSellButton();
    var n = new g.GeneralSelectionProperties();
    n.disableMovingGenerals = true;
    this._generalSelection = new p.GeneralSelection(this.dialogDisp.mc_generalSelection, n);
  };
  CastleEquipmentSublayer.prototype.applyProperties = function (e) {
    this.properties = e;
    this.equipableList.show();
    this.equipableList.currentFilterIndex = this._lastFilter != -1 ? this._lastFilter : CastleEquipmentSublayer.FILTER_HELMET;
    this.equipableList.currentFilterIndex = V.int(this.properties && this.properties.selectedFilter != -1 ? this.properties.selectedFilter : this.equipableList.currentFilterIndex);
    this.eqFilterPanel.changed.add(this.bindFunction(this.onInventoryUpdate));
    this.gemFilterPanel.changed.add(this.bindFunction(this.onInventoryUpdate));
  };
  CastleEquipmentSublayer.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this._isLocked = true;
    this.dialogDisp.mc_generalSelection.btn_generalOverview.visible = this.dialogDisp.btn_switch.visible = y.CastleModel.generalsIntroductionData.canAccessGenerals();
    this.updateGeneralSelection();
    this._lastLordType = t || this._lastLordType;
    this.setLordCategory(this._lastLordType);
    this.updateEquipmentData();
    this._lordEffectsComponent.show();
    this.updateAutoSellButton();
    this.toggleFavoriteOptions(!this._isFavoriteMode);
    y.CastleModel.equipData.resetOverallNewEquipmentMark();
    this.equipableList.listUpdatedSignal.add(this.bindFunction(this.updateFavoriteItems));
    for (var i = 0; i < 6; i++) {
      this.dialogDisp["slot" + i].addEventListener(J.MOUSE_DOWN, this.bindFunction(this.onSlotTouchedDown));
      this.dialogDisp["slot" + i].addEventListener(J.MOUSE_UP, this.bindFunction(this.onSlotTouchedUP));
    }
    z.ButtonHelper.enableButton(this.dialogDisp.mc_equipmentList.tab2, this.isOutOfTutorial());
    z.ButtonHelper.enableButton(this.dialogDisp.mc_equipmentList.tab3, this.isOutOfTutorial());
    z.ButtonHelper.enableButton(this.dialogDisp.mc_equipmentList.tab4, this.isOutOfTutorial());
    z.ButtonHelper.enableButton(this.dialogDisp.mc_equipmentList.tab5, this.isOutOfTutorial());
    z.ButtonHelper.enableButton(this.dialogDisp.mc_equipmentList.tab6, this.isOutOfTutorial());
    z.ButtonHelper.enableButton(this.dialogDisp.mc_lordName.btn_rename, this.isOutOfTutorial());
    this.toggleGeneralSelection(false);
    this.addEventListener();
  };
  CastleEquipmentSublayer.prototype.addEventListener = function () {
    this.controller.addEventListener(S.CastleArmyDataEvent.REMOVE_MOVEMENT, this.bindFunction(this.onMovementRemoved));
    this.controller.addEventListener(A.CastleEquipmentEvent.INVENTORY_UPDATED, this.bindFunction(this.onInventoryUpdate));
    this.controller.addEventListener(L.CastleUserDataEvent.CHANGE_CASTLELIST, this.bindFunction(this.onCastleListUpdated));
    this.controller.addEventListener(S.CastleArmyDataEvent.MOVEMENTS_CHANGED, this.bindFunction(this.onMovementChanged));
    y.CastleModel.lordData.addEventListener(A.CastleEquipmentEvent.LORDS_UPDATED, this.bindFunction(this.onLordsUpdated));
    y.CastleModel.lordData.addEventListener(A.CastleEquipmentEvent.GENERAL_ASSIGNED, this.bindFunction(this.onGeneralAssigned));
    y.CastleModel.gemData.addEventListener(P.CastleGemEvent.GEM_INVENTORY_UPDATE, this.bindFunction(this.onInventoryUpdate));
    y.CastleModel.specialEventData.addEventListener(M.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
    this.controller.addEventListener(R.SubscriptionEvent.ON_SUBSCRIPTION_CHANGED, this.bindFunction(this.onSubscriptionChanged));
    this.controller.addEventListener(R.SubscriptionEvent.ON_AUTO_SELL_CONFIG_UPDATED, this.bindFunction(this.onSubscriptionChanged));
    this.controller.addEventListener(A.CastleEquipmentEvent.NEW_RELICS_UPDATED, this.bindFunction(this.onInventoryUpdate));
    X.CastleEquipmentFavoritesMicroservice.Instance.favoriteListDataArrivedSignal.add(this.bindFunction(this.onFavoriteEquipmentUpdate));
    X.CastleEquipmentFavoritesMicroservice.Instance.gemMarkedAsFavorite.add(this.bindFunction(this.onGemMarkedAsFavorite));
    if (this._generalSelection) {
      this._generalSelection.onShow();
      this._generalSelection.onSelectSignal.add(this.bindFunction(this.onSelectGeneral));
    }
  };
  CastleEquipmentSublayer.prototype.removeEventListener = function () {
    this.controller.removeEventListener(S.CastleArmyDataEvent.REMOVE_MOVEMENT, this.bindFunction(this.onMovementRemoved));
    this.controller.removeEventListener(A.CastleEquipmentEvent.INVENTORY_UPDATED, this.bindFunction(this.onInventoryUpdate));
    this.controller.removeEventListener(L.CastleUserDataEvent.CHANGE_CASTLELIST, this.bindFunction(this.onCastleListUpdated));
    this.controller.removeEventListener(S.CastleArmyDataEvent.MOVEMENTS_CHANGED, this.bindFunction(this.onMovementChanged));
    y.CastleModel.lordData.removeEventListener(A.CastleEquipmentEvent.GENERAL_ASSIGNED, this.bindFunction(this.onGeneralAssigned));
    y.CastleModel.lordData.removeEventListener(A.CastleEquipmentEvent.LORDS_UPDATED, this.bindFunction(this.onLordsUpdated));
    y.CastleModel.gemData.removeEventListener(P.CastleGemEvent.GEM_INVENTORY_UPDATE, this.bindFunction(this.onInventoryUpdate));
    y.CastleModel.specialEventData.removeEventListener(M.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
    this.controller.removeEventListener(R.SubscriptionEvent.ON_SUBSCRIPTION_CHANGED, this.bindFunction(this.onSubscriptionChanged));
    this.controller.removeEventListener(R.SubscriptionEvent.ON_AUTO_SELL_CONFIG_UPDATED, this.bindFunction(this.onSubscriptionChanged));
    this.controller.removeEventListener(A.CastleEquipmentEvent.NEW_RELICS_UPDATED, this.bindFunction(this.onInventoryUpdate));
    X.CastleEquipmentFavoritesMicroservice.Instance.favoriteListDataArrivedSignal.remove(this.bindFunction(this.onFavoriteEquipmentUpdate));
    X.CastleEquipmentFavoritesMicroservice.Instance.gemMarkedAsFavorite.remove(this.bindFunction(this.onGemMarkedAsFavorite));
    if (this._generalSelection) {
      this._generalSelection.onHide();
      this._generalSelection.onSelectSignal.remove(this.bindFunction(this.onSelectGeneral));
    }
  };
  CastleEquipmentSublayer.prototype.toggleFavoriteOptions = function (e) {
    this.eqClickHandler.clearDrag();
    this.eqClickHandler.cancelDragMovement();
    this.gemClickHandler.clearDrag();
    this.gemClickHandler.cancelDragMovement();
    this.dialogDisp.btn_favoriteEnabled.visible = !e;
    this.dialogDisp.btn_favoriteDisabled.visible = e;
    this.eqClickHandler.canDrag = e;
    this.gemClickHandler.canDrag = e;
    this._isFavoriteMode = !e;
    this.equipableList.forEachItemVE(this.bindFunction(this.enableInventoryFavoriteIcons));
    this.enableSlotsFavoriteIcons();
  };
  CastleEquipmentSublayer.prototype.onGemMarkedAsFavorite = function () {
    this.equipableList.forEachItemVE(this.bindFunction(this.enableInventoryFavoriteIcons));
  };
  CastleEquipmentSublayer.prototype.onFavoriteEquipmentUpdate = function () {
    this.equipableList.forEachItemVE(this.bindFunction(this.showInventorySmallFavoriteIcons));
    this.updateSlotsFavoriteItems();
    this.eqFilterPanel.changed.dispatch();
  };
  CastleEquipmentSublayer.prototype.updateSlotsFavoriteItems = function () {
    this.updateLordEquipmentVOs(this._currentLord);
    y.CastleModel.lordData.commanders.forEach(this.updateLordEquipmentVOs);
    y.CastleModel.lordData.barons.forEach(this.updateLordEquipmentVOs);
    this.fillSlotsByLord(this._currentLord);
  };
  CastleEquipmentSublayer.prototype.updateLordEquipmentVOs = function (e) {
    var t;
    for (var i in e.equipmentSlots) {
      if ((t = e.equipmentSlots[i].equipmentVO) && y.CastleModel.equipData.isEQFav(t.id)) {
        t.isFavorite = true;
      }
    }
  };
  CastleEquipmentSublayer.prototype.showInventorySmallFavoriteIcons = function (e) {
    var t = [];
    for (var i = 1; i < arguments.length; i++) {
      t[i - 1] = arguments[i];
    }
    if (w.instanceOfClass(e, "GemScrollItem")) {
      e.showSmallFavoriteIcon();
    } else if (w.instanceOfClass(e, "EquipmentScrollItem")) {
      e.showSmallFavoriteIcon();
    }
  };
  CastleEquipmentSublayer.prototype.enableInventoryFavoriteIcons = function (e) {
    var t = [];
    for (var i = 1; i < arguments.length; i++) {
      t[i - 1] = arguments[i];
    }
    e.toggleOpenMarkAsFavorite(this._isFavoriteMode);
  };
  CastleEquipmentSublayer.prototype.enableSlotsFavoriteIcons = function () {
    this.enableSlotFavoriteOptions(f.BasicEquippableVO.SLOT_TYPE_HELMET);
    this.enableSlotFavoriteOptions(f.BasicEquippableVO.SLOT_TYPE_ARTIFACT);
    this.enableSlotFavoriteOptions(f.BasicEquippableVO.SLOT_TYPE_WEAPON);
    this.enableSlotFavoriteOptions(f.BasicEquippableVO.SLOT_TYPE_ARMOR);
    this.enableSlotFavoriteOptions(f.BasicEquippableVO.SLOT_TYPE_SKIN);
    this.enableSlotFavoriteOptions(f.BasicEquippableVO.SLOT_TYPE_HERO);
  };
  CastleEquipmentSublayer.prototype.enableSlotFavoriteOptions = function (e) {
    if (this._slotContainers[e] && this._slotEquipmentVOs[e]) {
      this._slotEquipmentVOs[e] = this._allSlotsOnScreen[e].slotVO;
      var t = this._slotContainers[e].favoriteDisp;
      if (t && this._slotEquipmentVOs[e].equipmentVO) {
        var i = t;
        if (this._isFavoriteMode) {
          i.favModeOn(this._slotEquipmentVOs[e].equipmentVO.isFavorite);
        } else {
          i.favModeOff(this._slotEquipmentVOs[e].equipmentVO.isFavorite);
        }
      }
    }
  };
  CastleEquipmentSublayer.prototype.updateAutoSellButton = function () {
    var e = this.dialogDisp.btn_autoSell;
    var t = y.CastleModel.subscriptionData.isEffectTypeActive(b.EffectTypeEnum.EFFECT_TYPE_AUTO_SELL);
    e.visible = t;
    if (t) {
      var i = y.CastleModel.subscriptionData.autoSell.isAnyEnabled();
      e.toolTipText = i ? "btn_autoSellEquip_on_tt" : "btn_autoSellEquip_off_tt";
      e.mc_icon.gotoAndStop(i ? 1 : 2);
    }
  };
  CastleEquipmentSublayer.prototype.initInventory = function () {
    this.eqClickHandler = new D.EquipmentEquipmentClickHandler(this);
    this.gemClickHandler = new I.EquipmentGemClickHandler(this);
    var e = [new T.EquipmentFilterView("equipment_slotType_helmet", this.bindFunction(this.getEquipmentFilterBySlotTypeAndWearerType(f.BasicEquippableVO.SLOT_TYPE_HELMET)), this.eqClickHandler, this.eqFilterPanel, this.bindFunction(this.getCurrentLord)), new T.EquipmentFilterView("equipment_slotType_armor", this.bindFunction(this.getEquipmentFilterBySlotTypeAndWearerType(f.BasicEquippableVO.SLOT_TYPE_ARMOR)), this.eqClickHandler, this.eqFilterPanel, this.bindFunction(this.getCurrentLord)), new T.EquipmentFilterView("equipment_slotType_weapon", this.bindFunction(this.getEquipmentFilterBySlotTypeAndWearerType(f.BasicEquippableVO.SLOT_TYPE_WEAPON)), this.eqClickHandler, this.eqFilterPanel, this.bindFunction(this.getCurrentLord)), new T.EquipmentFilterView("equipment_slotType_artifact", this.bindFunction(this.getEquipmentFilterBySlotTypeAndWearerType(f.BasicEquippableVO.SLOT_TYPE_ARTIFACT)), this.eqClickHandler, this.eqFilterPanel, this.bindFunction(this.getCurrentLord)), new T.EquipmentFilterView("equipment_slotType_skin", this.bindFunction(this.getEquipmentFilterBySlotTypeAndWearerType(f.BasicEquippableVO.SLOT_TYPE_SKIN)), this.eqClickHandler, this.eqFilterPanel, this.bindFunction(this.getCurrentLord)), new v.GemFilterView(this.bindFunction(this.getGemFilterByWearerType()), this.gemClickHandler, this.gemFilterPanel), new T.EquipmentFilterView("equipment_slotType_hero_heroine", this.bindFunction(this.getEquipmentFilterBySlotTypeAndWearerType(f.BasicEquippableVO.SLOT_TYPE_HERO)), this.eqClickHandler, this.eqFilterPanel, this.bindFunction(this.getCurrentLord))];
    this.equipableList = new O.CastleEquipableListComponent(this.dialogDisp.mc_equipmentList, e);
  };
  CastleEquipmentSublayer.prototype.getEquipmentFilterBySlotTypeAndWearerType = function (e) {
    return function (t) {
      var i = [];
      for (var n = 1; n < arguments.length; n++) {
        i[n - 1] = arguments[n];
      }
      return t.slotType == e && t.lordType == this._currentLordFilter;
    };
  };
  CastleEquipmentSublayer.prototype.getGemFilterByWearerType = function () {
    var e = [];
    for (var t = 0; t < arguments.length; t++) {
      e[t] = arguments[t];
    }
    return function (e) {
      var t = [];
      for (var i = 1; i < arguments.length; i++) {
        t[i - 1] = arguments[i];
      }
      return e && e.lordType == this._currentLordFilter;
    };
  };
  CastleEquipmentSublayer.prototype.activateSlotToolTips = function () {
    this.dialogDisp.slot0.mc_bgEmpty.toolTipText = this.isEmptySlot(this.dialogDisp.slot0) ? "equipment_slotType_helmet" : "";
    this.dialogDisp.slot1.mc_bgEmpty.toolTipText = this.isEmptySlot(this.dialogDisp.slot1) ? "equipment_slotType_armor" : "";
    this.dialogDisp.slot2.mc_bgEmpty.toolTipText = this.isEmptySlot(this.dialogDisp.slot2) ? "equipment_slotType_weapon" : "";
    this.dialogDisp.slot3.mc_bgEmpty.toolTipText = this.isEmptySlot(this.dialogDisp.slot3) ? "equipment_slotType_artifact" : "";
    this.dialogDisp.slot4.mc_bgEmpty.toolTipText = this.isEmptySlot(this.dialogDisp.slot4) ? "equipment_slotType_skin" : "";
    this.dialogDisp.slot5.mc_bgEmpty.toolTipText = this.isEmptySlot(this.dialogDisp.slot5) ? "equipment_slotType_hero_heroine" : "";
  };
  CastleEquipmentSublayer.prototype.isEmptySlot = function (e) {
    return !e.slotVO || e.slotVO.equipmentVO == null;
  };
  CastleEquipmentSublayer.prototype.deActivateSlotToolTips = function () {
    this.dialogDisp.slot0.mc_bgEmpty.toolTipText = "";
    this.dialogDisp.slot1.mc_bgEmpty.toolTipText = "";
    this.dialogDisp.slot2.mc_bgEmpty.toolTipText = "";
    this.dialogDisp.slot3.mc_bgEmpty.toolTipText = "";
    this.dialogDisp.slot4.mc_bgEmpty.toolTipText = "";
    this.dialogDisp.slot5.mc_bgEmpty.toolTipText = "";
  };
  CastleEquipmentSublayer.prototype.onSlotTouchedDown = function (e) {
    if (w.currentBrowserInfo.isTouchEvent(e) && !this._isFavoriteMode && this.equipableList && this.equipableList.currentClickHandler) {
      this.equipableList.currentClickHandler.handleDialogClick(e);
    }
  };
  CastleEquipmentSublayer.prototype.onSlotTouchedUP = function (e) {
    if (w.currentBrowserInfo.isTouchEvent(e) && !this._isFavoriteMode && this.equipableList && this.equipableList.currentClickHandler) {
      this.equipableList.currentClickHandler.handleInventoryEntryTouchDragEnd(new d.ScrollItemEvent(d.ScrollItemEvent.TOUCH_DRAG_END, null, e.target, e));
    }
  };
  CastleEquipmentSublayer.prototype.onSubscriptionChanged = function (e) {
    this.updateAutoSellButton();
  };
  CastleEquipmentSublayer.prototype.updateEquipmentData = function () {
    y.CastleModel.smartfoxClient.sendCommandVO(new B.C2SGetGemInventory());
    y.CastleModel.smartfoxClient.sendCommandVO(new F.C2SGetEquipmentInventory());
    y.CastleModel.smartfoxClient.sendCommandVO(new N.C2SGetLordsInfoVO());
  };
  CastleEquipmentSublayer.prototype.onRemoveSpecialEvent = function (e) {
    this.updateEquipmentData();
  };
  CastleEquipmentSublayer.prototype.onCastleListUpdated = function (e) {
    this.setCastleIcon();
  };
  CastleEquipmentSublayer.prototype.onLordsUpdated = function (e) {
    this.setLordCategory(this._lastLordType);
    y.CastleModel.smartfoxClient.sendCommandVO(new F.C2SGetEquipmentInventory());
    this.updateSlotsFavoriteItems();
  };
  CastleEquipmentSublayer.prototype.onInventoryUpdate = function (e = null) {
    this._isLocked = false;
    if (this._currentLord) {
      this.setActiveLord(this._currentLord);
    }
    this.inventoryUpdatedSignal.dispatch();
    this.equipableList.update();
    this.equipableList.redraw();
    this.equipableList.currentClickHandler.setStorageWarning();
    this.updateTabButtons();
    this.equipableList.forEachItemVE(this.bindFunction(this.showInventorySmallFavoriteIcons));
  };
  CastleEquipmentSublayer.prototype.updateFavoriteItems = function () {
    this.equipableList.forEachItemVO(this.bindFunction(this.updateItemAsFavorite));
    if (this._isFavoriteMode) {
      this.toggleFavoriteOptions(false);
    }
  };
  CastleEquipmentSublayer.prototype.updateItemAsFavorite = function (e) {
    var t = [];
    for (var i = 1; i < arguments.length; i++) {
      t[i - 1] = arguments[i];
    }
    if (e) {
      if (w.instanceOfClass(e, "GemScrollItemVO") && y.CastleModel.equipData.isGemFav(e.gemVO.id, w.instanceOfClass(e.gemVO, "RelicGemVO"))) {
        e.gemVO.isFavorite = true;
      } else if (w.instanceOfClass(e, "EquipmentScrollItemVO") && y.CastleModel.equipData.favoriteEquipmentIdsList.indexOf(e.equipmentVO.id) != -1) {
        e.equipmentVO.isFavorite = true;
      }
    }
  };
  CastleEquipmentSublayer.prototype.onMovementRemoved = function (e) {
    y.CastleModel.smartfoxClient.sendCommandVO(new N.C2SGetLordsInfoVO());
    this.setLordCategory(this._lastLordType);
  };
  CastleEquipmentSublayer.prototype.setLordCategory = function (e, t = false) {
    this._currentLordFilter = e;
    var i;
    var n = this._currentLord != null && !t;
    if (this.properties && this.properties.selectedLordID >= 0) {
      i = y.CastleModel.lordData.getLordByID(this.properties.selectedLordID);
    }
    if (!this._currentLord || this._currentLord == null) {
      this._currentLord = this.getFirstLord(f.BasicEquippableVO.LORD_TYPE_COMMANDER);
    }
    if (this._waitingForServerResponseSoldItem) {
      this._waitingForServerResponseSoldItem = false;
      this.initLordList();
      this.setActiveLord(y.CastleModel.lordData.getLordByID(this._currentLord.id));
    } else if (n) {
      var o;
      this.initLordList();
      if (w.instanceOfClass(this._currentLord, "CommanderVO")) {
        if (!(o = y.CastleModel.lordData.getCommanderByID(this._currentLord.id))) {
          o = this.getFirstLord(f.BasicEquippableVO.LORD_TYPE_COMMANDER);
        }
      } else if (!(o = y.CastleModel.lordData.getBaronByID(this._currentLord.id))) {
        o = this.getFirstLord(f.BasicEquippableVO.LORD_TYPE_BARON);
      }
      this.setActiveLord(o);
    } else if (i && this.properties.lordUsed == 0) {
      if (w.instanceOfClass(i, "BaronVO")) {
        this._currentLordFilter = f.BasicEquippableVO.LORD_TYPE_BARON;
        this._lastLordType = f.BasicEquippableVO.LORD_TYPE_BARON;
      } else if (w.instanceOfClass(i, "CommanderVO")) {
        this._currentLordFilter = f.BasicEquippableVO.LORD_TYPE_COMMANDER;
        this._lastLordType = f.BasicEquippableVO.LORD_TYPE_COMMANDER;
      }
      this.initLordList();
      this.setActiveLord(i);
      this.properties.lordUsed++;
    } else {
      this.initLordList();
      this.setActiveLord(this.getFirstLord(e));
    }
    this.dialogDisp.mc_lordName.visible = this._currentLordFilter == f.BasicEquippableVO.LORD_TYPE_COMMANDER;
    this.updateTabButtons();
  };
  CastleEquipmentSublayer.prototype.updateTabButtons = function () {
    this.dialogDisp.mc_equipmentList.tab0.mc_new.visible = y.CastleModel.equipData.hasLordAndSlotNewRelics(this._lastLordType, k.EquipmentConst.SLOT_HELMET);
    this.dialogDisp.mc_equipmentList.tab1.mc_new.visible = y.CastleModel.equipData.hasLordAndSlotNewRelics(this._lastLordType, k.EquipmentConst.SLOT_ARMOR);
    this.dialogDisp.mc_equipmentList.tab2.mc_new.visible = y.CastleModel.equipData.hasLordAndSlotNewRelics(this._lastLordType, k.EquipmentConst.SLOT_WEAPON);
    this.dialogDisp.mc_equipmentList.tab3.mc_new.visible = y.CastleModel.equipData.hasLordAndSlotNewRelics(this._lastLordType, k.EquipmentConst.SLOT_ARTIFACT);
    this.dialogDisp.mc_equipmentList.tab4.mc_new.visible = y.CastleModel.equipData.hasLordAndSlotNewRelics(this._lastLordType, k.EquipmentConst.SLOT_SKIN);
    this.dialogDisp.mc_equipmentList.tab5.mc_new.visible = y.CastleModel.equipData.hasLordAndSlotNewRelics(this._lastLordType, -1, true);
    this.dialogDisp.mc_equipmentList.tab6.mc_new.visible = y.CastleModel.equipData.hasLordAndSlotNewRelics(this._lastLordType, k.EquipmentConst.SLOT_HERO);
  };
  CastleEquipmentSublayer.prototype.destroyLordList = function () {
    if (this._lordScrollList) {
      this._lordScrollList.removeEventListener(d.ScrollItemEvent.CLICK, this.bindFunction(this.onLordScrollItemClick));
      this._lordScrollList.removeEventListener(d.ScrollItemEvent.ON_SCROLL, this.bindFunction(this.onLordScroll));
      this._lordScrollList.remove();
      for (var e = 0, t = this._lordScrollList.voList; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          this._lordScrollList.removeContent(i);
        }
      }
      this._lordScrollList = null;
    }
  };
  CastleEquipmentSublayer.prototype.initLordList = function () {
    var e = V.int(this._lordScrollList ? this._lordScrollList.currentStartIndex : 0);
    this.destroyLordList();
    this._lordScrollList = new c.LordScrollList(this.dialogDisp.lordList);
    this._lordScrollList.scrollStep = 10;
    this._lordScrollList.addEventListener(d.ScrollItemEvent.CLICK, this.bindFunction(this.onLordScrollItemClick));
    this._lordScrollList.addEventListener(d.ScrollItemEvent.ON_SCROLL, this.bindFunction(this.onLordScroll));
    this._lordScrollList.clear();
    var t;
    var i = 0;
    var n = 0;
    if (this._currentLordFilter == f.BasicEquippableVO.LORD_TYPE_COMMANDER) {
      this._lordScrollList.scrollItemClass = G.CommanderScrollItem;
      n = V.int(y.CastleModel.lordData.numAllCommanders);
      i = 0;
      for (; i < n; i++) {
        (t = new U.LordScrollItemVO()).lordVO = y.CastleModel.lordData.commanders[i];
        this._lordScrollList.pushContent(t);
      }
    } else if (this._currentLordFilter == f.BasicEquippableVO.LORD_TYPE_BARON) {
      this._lordScrollList.scrollItemClass = H.BaronScrollItem;
      n = V.int(y.CastleModel.lordData.numAllBarons);
      i = 0;
      for (; i < n; i++) {
        (t = new U.LordScrollItemVO()).lordVO = y.CastleModel.lordData.barons[i];
        this._lordScrollList.pushContent(t);
      }
    }
    this._lordScrollList.hideButtons = n <= this._lordScrollList.itemsVisibleAtOnce;
    this._lordScrollList.initList(e);
  };
  CastleEquipmentSublayer.prototype.onLordScroll = function (e) {
    this.highLightCurrentLord(this._currentLord);
  };
  CastleEquipmentSublayer.prototype.onLordScrollItemClick = function (e) {
    this.setActiveLord(e.scrollItem.scrollItemVO.lordVO);
  };
  CastleEquipmentSublayer.prototype.setActiveLord = function (e) {
    this._currentLord = e;
    this._lordEffectsComponent.setActiveLord(e);
    this.highLightCurrentLord(e);
    this.initSlots();
    this.initSaleSlot();
    this.fillSlotsByLord(e);
    this.setCastleIcon();
    this.dialogDisp.mc_locked.visible = !this._currentLord.isAvailableForEquip;
    this.updateLordName();
    this.updateCurrentLordPic();
    this.updateLordFeather();
    this.eqFilterPanel.selectedLord = this.currentLord;
    this.gemFilterPanel.selectedLord = this.currentLord;
    this.updateGeneral();
  };
  CastleEquipmentSublayer.prototype.updateLordFeather = function () {
    d.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_lordName.featherHolder);
    j.EquipmentIconHelper.addLordFeather(this._currentLord, this.dialogDisp.mc_lordName.featherHolder);
  };
  CastleEquipmentSublayer.prototype.updateCurrentLordPic = function () {
    if (this._lordScrollList) {
      var e;
      for (var t = 0; t < this._lordScrollList.veList.length; t++) {
        if ((e = this._lordScrollList.veList[t]).disp.visible && e.lordScrollItemVO.lordVO.id == this._currentLord.id) {
          e.updateLordPic();
        }
      }
    }
  };
  CastleEquipmentSublayer.prototype.updateLordName = function () {
    this.itxt_name.textContentVO = this._currentLord.name;
  };
  CastleEquipmentSublayer.prototype.setCastleIcon = function () {
    var e = this.dialogDisp.mc_lordStatsEffects.effectList.mc_lordStats.mc_decoStats;
    e.gotoAndStop(1);
    if (w.instanceOfClass(this._currentLord, "BaronVO") && this._currentLord.lockedInCastleID >= 0) {
      var t = y.CastleModel.userData.castleList.getCastleVOByID(this._currentLord.lockedInCastleID);
      if (t) {
        e.gotoAndStop(2);
        d.MovieClipHelper.clearMovieClip(e.mc_CastleHolder);
        e.mc_CastleHolder.addChild(W.WorldmapObjectIconHelper.drawMapObjectIcon(t, new Z(55, 55), true, false, true, "dialog_jumpto_castleSelected"));
        e.mc_CastleHolder.mouseChildren = this.equipableList.currentClickHandler.tabChangeAllowed;
        this.textFieldManager.registerTextField(e.txt_value, new E.TextVO(y.CastleModel.userData.castleList.getCastleVOByID(this._currentLord.lockedInCastleID).areaNameString), new d.InternalGGSTextFieldConfigVO(true)).autoFitToBounds = true;
        var i = y.CastleModel.userData.castleList.getCastleVOByID(this._currentLord.lockedInCastleID);
        if (w.instanceOfClass(i, "CapitalMapobjectVO")) {
          e.mc_CastleHolder.x = 40;
          e.mc_CastleHolder.y = 8;
        } else if (w.instanceOfClass(i, "MetropolMapobjectVO")) {
          e.mc_CastleHolder.x = 42;
          e.mc_CastleHolder.y = 5;
        } else if (w.instanceOfClass(i, "OutpostMapobjectVO")) {
          e.mc_CastleHolder.x = 37;
          e.mc_CastleHolder.y = 10;
        } else if (w.instanceOfClass(i, "CastleMapobjectVO")) {
          e.mc_CastleHolder.x = 40;
          e.mc_CastleHolder.y = 8;
        } else {
          e.mc_CastleHolder.x = 40;
          e.mc_CastleHolder.y = 12;
        }
      }
    }
  };
  CastleEquipmentSublayer.prototype.highLightCurrentLord = function (e) {
    if (this._lordScrollList) {
      var t;
      for (var i = 0; i < this._lordScrollList.veList.length; i++) {
        if ((t = this._lordScrollList.veList[i]).disp.visible && t.lordScrollItemVO.lordVO.id == e.id) {
          t.showHighlight();
        } else {
          t.hideHighlight();
        }
      }
    }
  };
  CastleEquipmentSublayer.prototype.initSlots = function () {
    this._allSlotsOnScreen = {};
    this._allSlotsOnScreen[f.BasicEquippableVO.SLOT_TYPE_HELMET] = this.dialogDisp.slot0;
    this._allSlotsOnScreen[f.BasicEquippableVO.SLOT_TYPE_ARTIFACT] = this.dialogDisp.slot3;
    this._allSlotsOnScreen[f.BasicEquippableVO.SLOT_TYPE_WEAPON] = this.dialogDisp.slot2;
    this._allSlotsOnScreen[f.BasicEquippableVO.SLOT_TYPE_ARMOR] = this.dialogDisp.slot1;
    this._allSlotsOnScreen[f.BasicEquippableVO.SLOT_TYPE_SKIN] = this.dialogDisp.slot4;
    this._allSlotsOnScreen[f.BasicEquippableVO.SLOT_TYPE_HERO] = this.dialogDisp.slot5;
    this._allSlotsOnScreen[f.BasicEquippableVO.SLOT_TYPE_HELMET].mc_bg.gotoAndStop(7);
    this._allSlotsOnScreen[f.BasicEquippableVO.SLOT_TYPE_ARTIFACT].mc_bg.gotoAndStop(7);
    this._allSlotsOnScreen[f.BasicEquippableVO.SLOT_TYPE_WEAPON].mc_bg.gotoAndStop(7);
    this._allSlotsOnScreen[f.BasicEquippableVO.SLOT_TYPE_ARMOR].mc_bg.gotoAndStop(7);
    this._allSlotsOnScreen[f.BasicEquippableVO.SLOT_TYPE_SKIN].mc_bg.gotoAndStop(7);
    this._allSlotsOnScreen[f.BasicEquippableVO.SLOT_TYPE_HERO].mc_bg.gotoAndStop(7);
    this._allSlotsOnScreen[f.BasicEquippableVO.SLOT_TYPE_HELMET].mc_slotType.gotoAndStop(1);
    this._allSlotsOnScreen[f.BasicEquippableVO.SLOT_TYPE_ARTIFACT].mc_slotType.gotoAndStop(4);
    this._allSlotsOnScreen[f.BasicEquippableVO.SLOT_TYPE_WEAPON].mc_slotType.gotoAndStop(3);
    this._allSlotsOnScreen[f.BasicEquippableVO.SLOT_TYPE_ARMOR].mc_slotType.gotoAndStop(2);
    this._allSlotsOnScreen[f.BasicEquippableVO.SLOT_TYPE_SKIN].mc_slotType.gotoAndStop(5);
    this._allSlotsOnScreen[f.BasicEquippableVO.SLOT_TYPE_HERO].mc_slotType.gotoAndStop(6);
    if (this._allSlotsOnScreen != null) {
      for (var e in this._allSlotsOnScreen) {
        var t = this._allSlotsOnScreen[e];
        if (t !== undefined) {
          for (var i = 0; i < t.numChildren; i++) {
            var n = t.getChildAt(i);
            n.mouseEnabled = false;
            n.mouseChildren = false;
          }
          t.mc_bgEmpty.actLikeButton = true;
          t.mc_bgEmpty.mouseEnabled = true;
          t.mc_itemHolder.mouseChildren = true;
          t.mc_itemHolder.mouseEnabled = true;
          t.mouseChildren = true;
        }
      }
    }
  };
  CastleEquipmentSublayer.prototype.fillSlotsByLord = function (e) {
    this._allSlotsOnScreen[f.BasicEquippableVO.SLOT_TYPE_HELMET].slotVO = e.helmetSlotVO;
    this._allSlotsOnScreen[f.BasicEquippableVO.SLOT_TYPE_ARTIFACT].slotVO = e.artifactSlotVO;
    this._allSlotsOnScreen[f.BasicEquippableVO.SLOT_TYPE_WEAPON].slotVO = e.weaponSlotVO;
    this._allSlotsOnScreen[f.BasicEquippableVO.SLOT_TYPE_ARMOR].slotVO = e.armorSlotVO;
    this._allSlotsOnScreen[f.BasicEquippableVO.SLOT_TYPE_SKIN].slotVO = e.skinSlotVO;
    this._allSlotsOnScreen[f.BasicEquippableVO.SLOT_TYPE_HERO].slotVO = e.heroSlotVO;
    this.resetSlotContainers();
    this.updateSlotsFavoriteData();
    this.fillSlotContainer(e.helmetSlotVO.equipmentVO, this._allSlotsOnScreen[f.BasicEquippableVO.SLOT_TYPE_HELMET], f.BasicEquippableVO.SLOT_TYPE_HELMET);
    this.fillSlotContainer(e.artifactSlotVO.equipmentVO, this._allSlotsOnScreen[f.BasicEquippableVO.SLOT_TYPE_ARTIFACT], f.BasicEquippableVO.SLOT_TYPE_ARTIFACT);
    this.fillSlotContainer(e.weaponSlotVO.equipmentVO, this._allSlotsOnScreen[f.BasicEquippableVO.SLOT_TYPE_WEAPON], f.BasicEquippableVO.SLOT_TYPE_WEAPON);
    this.fillSlotContainer(e.armorSlotVO.equipmentVO, this._allSlotsOnScreen[f.BasicEquippableVO.SLOT_TYPE_ARMOR], f.BasicEquippableVO.SLOT_TYPE_ARMOR);
    this.fillSlotContainer(e.skinSlotVO.equipmentVO, this._allSlotsOnScreen[f.BasicEquippableVO.SLOT_TYPE_SKIN], f.BasicEquippableVO.SLOT_TYPE_SKIN);
    this.fillSlotContainer(e.heroSlotVO.equipmentVO, this._allSlotsOnScreen[f.BasicEquippableVO.SLOT_TYPE_HERO], f.BasicEquippableVO.SLOT_TYPE_HERO);
    if (e.isAvailableForEquip) {
      this.activateSlots();
    } else {
      this.deActivateSlots();
    }
  };
  CastleEquipmentSublayer.prototype.deActivateSlots = function () {
    var e = new d.ColorMatrix();
    e.desaturate();
    if (this._allSlotsOnScreen != null) {
      for (var t in this._allSlotsOnScreen) {
        var i = this._allSlotsOnScreen[t];
        if (i !== undefined) {
          i.useFilters([e.filter]);
          i.actLikeButton = false;
          i.mc_lock.visible = false;
        }
      }
    }
    this.deActivateSlotToolTips();
  };
  CastleEquipmentSublayer.prototype.activateSlots = function () {
    if (this._allSlotsOnScreen != null) {
      for (var e in this._allSlotsOnScreen) {
        var t = this._allSlotsOnScreen[e];
        if (t !== undefined) {
          t.useFilters(Y.BitmapFilterHelper.NO_FILTER);
          t.actLikeButton = true;
          t.mc_lock.visible = false;
        }
      }
    }
    this.activateSlotToolTips();
  };
  CastleEquipmentSublayer.prototype.getFirstLord = function (e) {
    var t;
    switch (e) {
      case f.BasicEquippableVO.LORD_TYPE_COMMANDER:
        t = y.CastleModel.lordData.commanders[0];
        break;
      case f.BasicEquippableVO.LORD_TYPE_BARON:
        t = y.CastleModel.lordData.barons[0];
    }
    return t;
  };
  CastleEquipmentSublayer.prototype.initSaleSlot = function () {
    this.dialogDisp.saleSlot.mc_highlight.visible = false;
    this.dialogDisp.saleSlot.mouseChildren = false;
    this.dialogDisp.saleSlot.actLikeButton = true;
    this.equipableList.currentClickHandler.changeSaleSlotAppearance();
  };
  CastleEquipmentSublayer.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (!this._isLocked) {
      this._lordEffectsComponent.onClick(t);
      this.eqFilterPanel.onClick(t);
      this.gemFilterPanel.onClick(t);
      if (this.equipableList.currentClickHandler) {
        var i = w.currentBrowserInfo.getTouchEvent(t);
        if (i && i.isLongPressed) {
          this.equipableList.currentClickHandler.handleDialogMouseOver(t);
          return;
        }
        this.equipableList.currentClickHandler.handleDialogClick(t);
      }
      var n = this.dialogDisp.mc_generalSelection.visible;
      if (n && !d.MovieClipHelper.isChildrenOf(t.target, this.dialogDisp.mc_generalSelection) && t.target != this.dialogDisp.btn_switch) {
        this.dialogDisp.mc_generalSelection.visible = false;
        this.dialogDisp.btn_switch.mc_open.visible = false;
      }
      if (z.ButtonHelper.isButtonEnabled(t.target)) {
        switch (t.target) {
          case this.dialogDisp.btn_favoriteEnabled:
            this.toggleFavoriteOptions(true);
            X.CastleEquipmentFavoritesMicroservice.Instance.putFavoriteEquipmentSignal.dispatch();
            break;
          case this.dialogDisp.btn_favoriteDisabled:
            this.toggleFavoriteOptions(false);
            break;
          case this.dialogDisp.btn_autoSell:
            CastleEquipmentSublayer.dialogHandler.registerDialogs(K.AutoSellDialog);
            break;
          case this.dialogDisp.btn_filter:
            if (w.instanceOfClass(this.equipableList.currentFilter, "GemFilterView")) {
              this.gemFilterPanel.show();
              this.gemTabSwitchedSignal.dispatch();
            } else {
              this.eqFilterPanel.show();
            }
            break;
          case this.dialogDisp.mc_generalSelection.btn_generalOverview:
            a.CastleDialogHandler.getInstance().registerDefaultDialogs(C.GeneralsOverviewDialog);
            break;
          case this.dialogDisp.btn_switch:
            this.toggleGeneralSelection(!n);
        }
      }
    }
  };
  CastleEquipmentSublayer.prototype.fillSlotContainer = function (e, t, i) {
    if (e) {
      j.EquipmentIconHelper.addEquipmentIcon(e, t.mc_itemHolder, CastleEquipmentSublayer.MAX_WIDTH, CastleEquipmentSublayer.MAX_HEIGHT, function () {
        r.CastleMovieClipHelper.updateParentCache(t);
      }, true, true, y.CastleModel.equipData.isEquipableNew(e));
      var n = V.int(e.visualRareID);
      if (n == 0) {
        n = 5;
      }
      t.mc_bg.gotoAndStop(n);
      this.createFavoriteIcon(i, e);
    } else {
      d.MovieClipHelper.clearMovieClip(t.mc_itemHolder);
      t.mc_bg.gotoAndStop(7);
      r.CastleMovieClipHelper.updateParentCache(t);
    }
    t.mc_bg.visible = false;
  };
  CastleEquipmentSublayer.prototype.updateSlotsFavoriteData = function () {
    if (this._slotContainers && this._slotEquipmentVOs) {
      for (var e in this._allSlotsOnScreen) {
        if (this._slotContainers[e] && this._slotContainers[e] && !this._allSlotsOnScreen[e].slotVO.equipmentVO) {
          if (this._slotContainers[e] && this._slotContainers[e].favoriteDisp) {
            this._slotContainers[e].removeChild(this._slotContainers[e].favoriteDisp.disp);
          }
          this._slotContainers[e] = null;
          this._slotEquipmentVOs[e] = null;
        } else {
          this._slotContainers[e] = this._allSlotsOnScreen[e];
          this._slotEquipmentVOs[e] = this._allSlotsOnScreen[e].slotVO;
        }
      }
    }
  };
  CastleEquipmentSublayer.prototype.resetSlotContainers = function () {
    this._slotContainers ||= new Map();
    this._slotEquipmentVOs ||= new Map();
  };
  CastleEquipmentSublayer.prototype.createFavoriteIcon = function (e, t) {
    if (!this._slotContainers[e] && !this._slotEquipmentVOs[e]) {
      this._slotContainers[e] = this._allSlotsOnScreen[e];
      this._slotEquipmentVOs[e] = this._allSlotsOnScreen[e].slotVO;
    }
    var i = new $.CastleEquipmentSlotItem(new Library.CastleEquipment_Generals2.CastleEquipment_ItemFavoriteOptions(), t);
    i.onTouchDownCallback = this.bindFunction(this.onClick);
    if (this._isFavoriteMode) {
      i.favModeOn(this._slotEquipmentVOs[e].equipmentVO.isFavorite);
    } else {
      i.favModeOff(this._slotEquipmentVOs[e].equipmentVO.isFavorite);
    }
    if (this._slotContainers[e].favoriteDisp) {
      this._slotContainers[e].removeChild(this._slotContainers[e].favoriteDisp.disp);
      this._slotContainers[e].favoriteDisp = null;
    }
    this._slotContainers[e].favoriteDisp = i;
    this._slotContainers[e].addChild(i.disp);
  };
  CastleEquipmentSublayer.prototype.updateGeneralSelection = function () {
    var e = Array.from(y.CastleModel.generalsData.playerGenerals.values()).filter(function (e) {
      return e.isUnlocked;
    });
    e.unshift(null);
    this._generalSelection.init(e);
  };
  CastleEquipmentSublayer.prototype.updateGeneral = function () {
    if (this._currentLord.isAvailableForEquip) {
      this.dialogDisp.btn_switch.toolTipText = "dialog_attack_rework2022_generals_assignGeneral_tooltip";
    } else if (this.currentLord && this.currentLord.isBaron) {
      this.dialogDisp.btn_switch.toolTipText = "dialog_equipment_generals_baron_travelling";
    } else {
      this.dialogDisp.btn_switch.toolTipText = "dialog_equipment_generals_general_travelling";
    }
    d.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_general);
    this.dialogDisp.mc_general.useFilters([]);
    var e = this._currentLord.assignedGeneralVO;
    if (e) {
      new h.GeneralSelectionItem(e, this.dialogDisp.mc_general, false, true, false, false, this.bindFunction(this.onGeneralItemFilled));
    }
    this.dialogDisp.mc_general.mouseChildren = false;
    this.dialogDisp.mc_generalFrameEmpty.visible = !e;
    this.dialogDisp.mc_generalFrameFilled.visible = !!e;
    if (this.currentLord.isBaron) {
      if (e) {
        this.dialogDisp.mc_general.toolTipText = {
          t: "dialog_equipment_generals_assignedGeneral_baron_tooltip",
          p: [e.nameTextShort]
        };
      } else {
        this.dialogDisp.mc_general.toolTipText = "dialog_equipment_generals_noGeneral_baron_tooltip";
        this.dialogDisp.mc_generalFrameEmpty.toolTipText = "dialog_equipment_generals_noGeneral_baron_tooltip";
      }
    } else if (e) {
      this.dialogDisp.mc_general.toolTipText = {
        t: "dialog_equipment_generals_assignedGeneral_commander_tooltip",
        p: [e.nameTextShort]
      };
    } else {
      this.dialogDisp.mc_general.toolTipText = "dialog_equipment_generals_noGeneral_commander_tooltip";
      this.dialogDisp.mc_generalFrameEmpty.toolTipText = "dialog_equipment_generals_noGeneral_commander_tooltip";
    }
    this._generalSelection.selectGeneralVO(e, false);
    z.ButtonHelper.enableButton(this.dialogDisp.btn_switch, this._currentLord.isAvailableForEquip);
    this.dialogDisp.mc_generalFrameEmpty.useFilters(this._currentLord.isAvailableForEquip ? [] : Y.BitmapFilterHelper.FILTER_COLOR_MATRIX);
    this.dialogDisp.mc_generalFrameFilled.useFilters(this._currentLord.isAvailableForEquip ? [] : Y.BitmapFilterHelper.FILTER_COLOR_MATRIX);
  };
  CastleEquipmentSublayer.prototype.onGeneralItemFilled = function () {
    this.dialogDisp.mc_general.useFilters([]);
    this.dialogDisp.mc_general.useFilters(this._currentLord && this._currentLord.isAvailableForEquip ? [] : Y.BitmapFilterHelper.FILTER_COLOR_MATRIX);
  };
  CastleEquipmentSublayer.prototype.toggleGeneralSelection = function (e) {
    this.dialogDisp.mc_generalSelection.visible = e;
    this.dialogDisp.btn_switch.mc_open.visible = e;
    this.dialogDisp.btn_switch.toolTipText = e ? "dialog_equipment_generals_closeGeneralQuickSelection_tooltip" : "dialog_equipment_generals_assignGeneral_tooltip";
  };
  CastleEquipmentSublayer.prototype.onGeneralAssigned = function (e) {
    this.updateGeneral();
  };
  CastleEquipmentSublayer.prototype.onSelectGeneral = function (e) {
    y.CastleModel.lordData.assignGeneral(this._currentLord, e);
    this.toggleGeneralSelection(false);
  };
  CastleEquipmentSublayer.prototype.onMouseOver = function (t) {
    e.prototype.onMouseOver.call(this, t);
    if (!this._isLocked) {
      this.equipableList.currentClickHandler.handleDialogMouseOver(t);
    }
  };
  CastleEquipmentSublayer.prototype.onMouseOut = function (t) {
    e.prototype.onMouseOut.call(this, t);
    if (!this._isLocked && this.disp.visible) {
      this.equipableList.currentClickHandler.handleDialogMouseOut(t);
    }
  };
  CastleEquipmentSublayer.prototype.clearFavoriteOptions = function () {
    this._isFavoriteMode = false;
    this.eqClickHandler.clearDrag();
    this.eqClickHandler.cancelDragMovement();
    this.gemClickHandler.clearDrag();
    this.gemClickHandler.cancelDragMovement();
  };
  CastleEquipmentSublayer.prototype.hide = function () {
    this.equipableList.hide();
    e.prototype.hide.call(this);
    this._currentLord = null;
    this.destroyLordList();
    this.removeEventListener();
    this.eqFilterPanel.changed.remove(this.bindFunction(this.onInventoryUpdate));
    this.gemFilterPanel.changed.remove(this.bindFunction(this.onInventoryUpdate));
    this.equipableList.listUpdatedSignal.remove(this.bindFunction(this.updateFavoriteItems));
    this._lordEffectsComponent.hide();
    if (this.properties && this.properties.onCloseFunction) {
      this.properties.onCloseFunction();
    }
    for (var t = 0; t < 6; t++) {
      this.dialogDisp["slot" + t].removeEventListener(J.MOUSE_DOWN, this.bindFunction(this.onSlotTouchedDown));
      this.dialogDisp["slot" + t].removeEventListener(J.MOUSE_UP, this.bindFunction(this.onSlotTouchedUP));
    }
    y.CastleModel.lordData.dispatchEvent(new A.CastleEquipmentEvent(A.CastleEquipmentEvent.LORDS_UPDATED));
    y.CastleModel.equipData.clearNewEquipmentLists();
  };
  CastleEquipmentSublayer.prototype.getCurrentLord = function () {
    return this.currentLord;
  };
  Object.defineProperty(CastleEquipmentSublayer.prototype, "dialogDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEquipmentSublayer.prototype, "currentLord", {
    get: function () {
      return this._currentLord;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEquipmentSublayer.prototype, "allSlotsOnScreen", {
    get: function () {
      return this._allSlotsOnScreen;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEquipmentSublayer.prototype, "lastFilter", {
    set: function (e) {
      this._lastFilter = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEquipmentSublayer.prototype, "lastLordType", {
    get: function () {
      return this._lastLordType;
    },
    set: function (e) {
      this._lastLordType = e;
    },
    enumerable: true,
    configurable: true
  });
  CastleEquipmentSublayer.prototype.onMovementChanged = function (e) {
    this._lordEffectsComponent.updateStats();
  };
  Object.defineProperty(CastleEquipmentSublayer.prototype, "itxt_storage", {
    get: function () {
      return this._itxt_storage;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEquipmentSublayer.prototype, "lordEffectsComponent", {
    get: function () {
      return this._lordEffectsComponent;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEquipmentSublayer.prototype, "isFavoriteMode", {
    get: function () {
      return this._isFavoriteMode;
    },
    enumerable: true,
    configurable: true
  });
  CastleEquipmentSublayer.__initialize_static_members = function () {
    CastleEquipmentSublayer.FILTER_MAP = CastleEquipmentSublayer.getFilterMap();
  };
  CastleEquipmentSublayer.MAX_WIDTH = 53;
  CastleEquipmentSublayer.MAX_HEIGHT = 53;
  CastleEquipmentSublayer.FILTER_HELMET = 0;
  CastleEquipmentSublayer.FILTER_ARMOR = 1;
  CastleEquipmentSublayer.FILTER_WEAPON = 2;
  CastleEquipmentSublayer.FILTER_ARTIFACT = 3;
  CastleEquipmentSublayer.FILTER_SKIN = 4;
  CastleEquipmentSublayer.FILTER_GEM = 5;
  CastleEquipmentSublayer.FILTER_HERO = 6;
  return CastleEquipmentSublayer;
}(l.CastleDialogSubLayer);
exports.CastleEquipmentSublayer = ee;
ee.__initialize_static_members();