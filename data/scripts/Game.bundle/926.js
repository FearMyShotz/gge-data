Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = createjs.MovieClip;
var a = createjs.MouseEvent;
var s = require("./35.js");
var r = require("./1274.js");
var l = require("./2331.js");
var c = require("./2.js");
var u = require("./3.js");
var d = require("./2333.js");
var p = require("./1303.js");
var h = require("./127.js");
var g = require("./1307.js");
var C = require("./2337.js");
var _ = require("./2338.js");
var m = require("./1.js");
var f = require("./68.js");
var O = require("./1271.js");
var E = require("./1273.js");
var y = require("./57.js");
var b = require("./8.js");
var D = require("./36.js");
var I = function (e) {
  function CastleCraftingSublayer(t) {
    var i = e.call(this, t) || this;
    i._lastFilter = -1;
    i.init();
    return i;
  }
  n.__extends(CastleCraftingSublayer, e);
  CastleCraftingSublayer.prototype.init = function () {
    this.initBasicButtons([this.dialogDisp.mc_equipmentList.tab0, this.dialogDisp.mc_equipmentList.tab1, this.dialogDisp.mc_equipmentList.tab2, this.dialogDisp.mc_equipmentList.tab3, this.dialogDisp.mc_equipmentList.btn_up, this.dialogDisp.mc_equipmentList.btn_down, this.dialogDisp.btn_autofill]);
    this.gemTabSwitchedSignal = new y.Signal();
    b.ButtonHelper.initButtons([this.dialogDisp.btn_filter], D.ClickFeedbackButton, 1);
    this.initSublayer();
    this.initFilters();
    this.initInventory();
    this.initTexts();
  };
  CastleCraftingSublayer.prototype.initFilters = function () {
    this.eqFilterPanel = new O.EquipmentFilterPanel(this.dialogDisp.filter_eq, this.dialogDisp.mc_empty);
    this.eqFilterPanel.toggleShowHideSetsOption(false, true);
    this.eqFilterPanel.hide();
    this.gemFilterPanel = new E.GemFilterPanel(this.dialogDisp.filter_gem, this.dialogDisp.mc_empty);
    this.gemFilterPanel.toggleShowHideSetsOption(false, true);
    this.gemFilterPanel.hide();
    this.dialogDisp.btn_filter.mc_arrow.gotoAndStop(2);
    this.dialogDisp.btn_filter.toolTipText = "filterPanel_expand";
  };
  CastleCraftingSublayer.prototype.onInventoryUpdate = function (e = null) {
    this.equipableList.update();
    this.equipableList.redraw();
    this.equipableList.currentClickHandler.setStorageWarning();
    this.equipableList.forEachItemVE(this.bindFunction(this.showInventorySmallFavoriteIcons));
  };
  CastleCraftingSublayer.prototype.showInventorySmallFavoriteIcons = function (e) {
    var t = [];
    for (var i = 1; i < arguments.length; i++) {
      t[i - 1] = arguments[i];
    }
    if (m.instanceOfClass(e, "GemScrollItem")) {
      e.showSmallFavoriteIcon();
    } else if (m.instanceOfClass(e, "EquipmentScrollItem")) {
      e.showSmallFavoriteIcon();
    }
  };
  CastleCraftingSublayer.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    if (this._currentCategory) {
      this.changeCategory(this._currentCategory);
      this.showSublayer(this._currentSublayer, []);
    }
    this.eqFilterPanel.changed.add(this.bindFunction(this.onInventoryUpdate));
    this.gemFilterPanel.changed.add(this.bindFunction(this.onInventoryUpdate));
    this.equipableList.update();
    this.equipableList.show();
    this.equipableList.currentFilterIndex = this._lastFilter != -1 ? this._lastFilter : CastleCraftingSublayer.FILTER_ALL;
    for (var i = 0; i < 6; i++) {
      this.dialogDisp.sl_equipmentCrafting["slot" + i].addEventListener(a.MOUSE_DOWN, this.bindFunction(this.onSlotTouchedDown));
      this.dialogDisp.sl_equipmentCrafting["slot" + i].addEventListener(a.MOUSE_UP, this.bindFunction(this.onSlotTouchedUP));
      this.dialogDisp.sl_gemCrafting["slot" + i].addEventListener(a.MOUSE_DOWN, this.bindFunction(this.onSlotTouchedDown));
      this.dialogDisp.sl_gemCrafting["slot" + i].addEventListener(a.MOUSE_UP, this.bindFunction(this.onSlotTouchedUP));
    }
  };
  CastleCraftingSublayer.prototype.initTexts = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new u.LocalizedTextVO("dialog_equipmentCrafting_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_autofill.txt_label, new u.LocalizedTextVO("dialog_attack_autofill")).verticalAlign = c.GGSVerticalAlign.MIDDLE;
    this._itxt_storage = this.textFieldManager.registerTextField(this.dialogDisp.mc_equipmentList.mc_storageSpace.txt_storage, new u.LocalizedTextVO(c.GenericTextIds.VALUE_PROPORTIONAL_VALUE));
    this._itxt_storage.autoFitToBounds = true;
    this._itxt_storage.verticalAlign = c.GGSVerticalAlign.MIDDLE;
    this.dialogDisp.mc_equipmentList.mc_storageSpace.toolTipText = "dialog_equipmentSpace_tooltip";
    this.dialogDisp.mc_equipmentList.mc_storageSpace.mouseChildren = false;
  };
  CastleCraftingSublayer.prototype.initInventory = function () {
    this.equipClickHandler = new d.CraftingEquipmentClickHandler(this, this._subLayer.get(CastleCraftingSublayer.SUBLAYER_EQUIPMENT));
    this.gemClickHandler = new l.CraftingGemClickHandler(this, this._subLayer.get(CastleCraftingSublayer.SUBLAYER_GEM));
    var e = [new p.EquipmentFilterView("dialog_equipmentCrafting_allItems", this.getFilterByExcludedSlotType([h.BasicEquippableVO.SLOT_TYPE_HERO]), this.equipClickHandler, this.eqFilterPanel), new p.EquipmentFilterView("dialog_equipmentCrafting_generalItems", this.getFilterByWearerTypeAndExlcludedSlotTypes(h.BasicEquippableVO.LORD_TYPE_COMMANDER, [h.BasicEquippableVO.SLOT_TYPE_HERO]), this.equipClickHandler, this.eqFilterPanel), new p.EquipmentFilterView("dialog_equipmentCrafting_baronItems", this.getFilterByWearerTypeAndExlcludedSlotTypes(h.BasicEquippableVO.LORD_TYPE_BARON, [h.BasicEquippableVO.SLOT_TYPE_HERO]), this.equipClickHandler, this.eqFilterPanel), new g.GemFilterView(this.bindFunction(this.filterNone), this.gemClickHandler, this.gemFilterPanel)];
    this.equipableList = new r.CastleEquipableListComponent(this.dialogDisp.mc_equipmentList, e);
    this.equipableList.tabChangedCallback = this.bindFunction(this.onTabChanged);
  };
  CastleCraftingSublayer.prototype.initSublayer = function () {
    this._subLayer = new Map();
    this._subLayer.set(CastleCraftingSublayer.SUBLAYER_EQUIPMENT, new C.CastleCraftingDialogEquipment(this.dialogDisp.sl_equipmentCrafting));
    this._subLayer.set(CastleCraftingSublayer.SUBLAYER_GEM, new _.CastleCraftingDialogGem(this.dialogDisp.sl_gemCrafting));
  };
  CastleCraftingSublayer.prototype.onSlotTouchedDown = function (e) {
    if (m.currentBrowserInfo.isTouchEvent(e) && this.equipableList && this.equipableList.currentClickHandler) {
      this.equipableList.currentClickHandler.handleDialogClick(e);
    }
  };
  CastleCraftingSublayer.prototype.onSlotTouchedUP = function (e) {
    if (m.currentBrowserInfo.isTouchEvent(e) && this.equipableList && this.equipableList.currentClickHandler) {
      this.equipableList.currentClickHandler.handleInventoryEntryTouchDragEnd(new c.ScrollItemEvent(c.ScrollItemEvent.TOUCH_DRAG_END, null, e.target, e));
    }
  };
  CastleCraftingSublayer.prototype.onTabChanged = function (e) {
    switch (e) {
      case CastleCraftingSublayer.FILTER_ALL:
      case CastleCraftingSublayer.FILTER_GENERAL:
      case CastleCraftingSublayer.FILTER_BARON:
        if (this._currentCategory == null || this._currentCategory == CastleCraftingSublayer.SUBLAYER_GEM) {
          this.changeCategory(CastleCraftingSublayer.SUBLAYER_EQUIPMENT);
          this.showSublayer(this._subLayer.get(CastleCraftingSublayer.SUBLAYER_EQUIPMENT), []);
        }
        break;
      case CastleCraftingSublayer.FILTER_GEM:
        if (this.gemClickHandler) {
          this.gemClickHandler.updateSlotLocks();
        }
        if (this._currentCategory == CastleCraftingSublayer.SUBLAYER_EQUIPMENT) {
          this.changeCategory(CastleCraftingSublayer.SUBLAYER_GEM);
          this.showSublayer(this._subLayer.get(CastleCraftingSublayer.SUBLAYER_GEM), []);
        }
    }
  };
  CastleCraftingSublayer.prototype.changeCategory = function (e) {
    this._currentCategory = e;
    if (this._currentSublayer) {
      this._currentSublayer.hide();
    }
  };
  CastleCraftingSublayer.prototype.showSublayer = function (e, t) {
    e.show(t);
    this._currentSublayer = e;
  };
  CastleCraftingSublayer.prototype.getFilterByWearerTypeAndExlcludedSlotTypes = function (e, t) {
    return function (i) {
      var n = [];
      for (var o = 1; o < arguments.length; o++) {
        n[o - 1] = arguments[o];
      }
      return i.lordType == e && t.indexOf(i.slotType) == -1;
    };
  };
  CastleCraftingSublayer.prototype.filterNone = function () {
    var e = [];
    for (var t = 0; t < arguments.length; t++) {
      e[t] = arguments[t];
    }
    return true;
  };
  CastleCraftingSublayer.prototype.getFilterByExcludedSlotType = function (e) {
    return function (t) {
      var i = [];
      for (var n = 1; n < arguments.length; n++) {
        i[n - 1] = arguments[n];
      }
      return e.indexOf(t.slotType) == -1;
    };
  };
  CastleCraftingSublayer.prototype.hide = function () {
    e.prototype.hide.call(this);
    this.equipClickHandler.cancelDragMovement();
    this.gemClickHandler.cancelDragMovement();
    this.equipableList.hide();
    for (var t = 0; t < 6; t++) {
      this.dialogDisp.sl_equipmentCrafting["slot" + t].removeEventListener(a.MOUSE_DOWN, this.bindFunction(this.onSlotTouchedDown));
      this.dialogDisp.sl_equipmentCrafting["slot" + t].removeEventListener(a.MOUSE_UP, this.bindFunction(this.onSlotTouchedUP));
      this.dialogDisp.sl_gemCrafting["slot" + t].removeEventListener(a.MOUSE_DOWN, this.bindFunction(this.onSlotTouchedDown));
      this.dialogDisp.sl_gemCrafting["slot" + t].removeEventListener(a.MOUSE_UP, this.bindFunction(this.onSlotTouchedUP));
    }
    this.eqFilterPanel.changed.remove(this.bindFunction(this.onInventoryUpdate));
    this.gemFilterPanel.changed.remove(this.bindFunction(this.onInventoryUpdate));
  };
  CastleCraftingSublayer.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    var i = m.currentBrowserInfo.getTouchEvent(t);
    if (i && i.isLongPressed) {
      this.equipableList.currentClickHandler.handleDialogMouseOver(t);
    } else {
      this.eqFilterPanel.onClick(t);
      this.gemFilterPanel.onClick(t);
      if (t.target == this.dialogDisp.btn_filter) {
        if (m.instanceOfClass(this.equipableList.currentFilter, "GemFilterView")) {
          this.gemFilterPanel.show();
          this.gemTabSwitchedSignal.dispatch();
        } else {
          this.eqFilterPanel.show();
        }
      }
      this.equipableList.currentClickHandler.handleDialogClick(t);
    }
  };
  CastleCraftingSublayer.prototype.onMouseOver = function (t) {
    e.prototype.onMouseOver.call(this, t);
    this.equipableList.currentClickHandler.handleDialogMouseOver(t);
  };
  CastleCraftingSublayer.prototype.onMouseOut = function (t) {
    e.prototype.onMouseOut.call(this, t);
  };
  CastleCraftingSublayer.prototype.onCursorOver = function (e) {
    if (e.target instanceof o && e.target.basicButton != null) {
      if (e.target.basicButton.enabled) {
        this.layoutManager.customCursor.setCursorType(c.BasicCustomCursor.CURSOR_CLICK);
      }
    } else if (e.target.actLikeButton || e.target.parent && e.target.parent.actLikeButton) {
      this.layoutManager.customCursor.setCursorType(c.BasicCustomCursor.CURSOR_CLICK);
    }
  };
  CastleCraftingSublayer.prototype.lockDialog = function () {
    var e = new c.ColorMatrix();
    e.desaturate();
    this.dialogDisp.useFilters([e.filter]);
  };
  CastleCraftingSublayer.prototype.unLockDialog = function () {
    this.dialogDisp.useFilters(f.BitmapFilterHelper.NO_FILTER);
  };
  Object.defineProperty(CastleCraftingSublayer.prototype, "lastFilter", {
    set: function (e) {
      this._lastFilter = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCraftingSublayer.prototype, "itxt_storage", {
    get: function () {
      return this._itxt_storage;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCraftingSublayer.prototype, "dialogDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleCraftingSublayer.__initialize_static_members = function () {
    CastleCraftingSublayer.NAME = "CastleCrafting";
    CastleCraftingSublayer.SUBLAYER_EQUIPMENT = "equipmentcrafting";
    CastleCraftingSublayer.SUBLAYER_GEM = "gemcrafting";
    CastleCraftingSublayer.FILTER_ALL = 0;
    CastleCraftingSublayer.FILTER_GENERAL = 1;
    CastleCraftingSublayer.FILTER_BARON = 2;
    CastleCraftingSublayer.FILTER_GEM = 3;
  };
  return CastleCraftingSublayer;
}(s.CastleDialogSubLayer);
exports.CastleCraftingSublayer = I;
I.__initialize_static_members();