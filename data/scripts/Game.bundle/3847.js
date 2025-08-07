Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./49.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./49.js");
var l = require("./3.js");
var c = require("./75.js");
var u = require("./3848.js");
var d = require("./95.js");
var p = require("./47.js");
var h = require("./59.js");
var g = require("./8.js");
var C = require("./376.js");
var _ = require("./340.js");
var m = require("./115.js");
var f = require("./3849.js");
var O = require("./471.js");
var E = require("./839.js");
var y = require("./554.js");
var b = createjs.MouseEvent;
var D = createjs.Rectangle;
var I = function () {
  function AttackDialogDragInventory() {
    this._items = [];
    this._itemPool = [];
    this.isInit = false;
  }
  AttackDialogDragInventory.prototype.init = function (e) {
    this._mc = e;
    this._layoutGrid = new u.SimpleLayoutStrategyVerticalGrid();
    g.ButtonHelper.initButtons([this._mc.mc_slider.btn_slider], _.ClickFeedBackHoverSliderButton, 1);
    g.ButtonHelper.initButtons([this._mc.btn_radio_attackUnits, this._mc.btn_radio_defenseUnits, this._mc.btn_radio_tools, this._mc.btn_radio_boosterTools], r.TwoStateButton);
    this._mc.btn_radio_attackUnits.mc_disabled.visible = false;
    this._mc.btn_radio_defenseUnits.mc_disabled.visible = false;
    this._mc.btn_radio_tools.mc_disabled.visible = false;
    this._mc.btn_radio_boosterTools.mc_disabled.visible = false;
    this._buttonGroup = new n.BasicButtonGroup([g.ButtonHelper.getBasicButton(this._mc.btn_radio_attackUnits), g.ButtonHelper.getBasicButton(this._mc.btn_radio_defenseUnits), g.ButtonHelper.getBasicButton(this._mc.btn_radio_tools), g.ButtonHelper.getBasicButton(this._mc.btn_radio_boosterTools)], false);
    if (!this.isInit) {
      this._scrollY = this._mc.mc_list.y;
      var t = new p.SimpleScrollVO().initByParent(this._mc.mc_slider).addSliderBackground(this._mc.mc_slider.bg).addMouseWheelElements([this._mc]);
      var i = new h.DynamicSizeScrollStrategyVertical(false, this._mc.mc_list.mask.height, true);
      this._scrollComponent = new d.SimpleScrollComponent(t, i);
    }
    this._mc.icon_attackUnits.toolTipText = "attackunit";
    this._mc.icon_defenseUnits.toolTipText = "defenceunit";
    this._mc.icon_tools.toolTipText = "attackTools";
    this._mc.icon_boosterTools.toolTipText = "boosterTools";
    this.filterInventory(AttackDialogDragInventory.FILTER_ATTACK_UNITS);
    this._mc.addEventListener(b.CLICK, this.bindFunction(this.onClick));
    this.attackController.updateAllWaveInfo.add(this.bindFunction(this.onUpdateWaves));
    this.attackController.onAutoFillALLSelectionChanged.add(this.bindFunction(this.onSelectedWavesChanged));
    this.isInit = true;
  };
  AttackDialogDragInventory.prototype.filterInventory = function (e) {
    this._currentFilter = e;
    this._buttonGroup.selectButton(g.ButtonHelper.getBasicButton(this._mc[e]));
    this.updateInventory(true);
  };
  AttackDialogDragInventory.prototype.enableFilter = function (e, t) {
    this._mc[e].mc_disabled.visible = !t;
    g.ButtonHelper.getBasicButton(this._mc[e]).enableButton = t;
    this._mc[e].useFilters([], false);
  };
  AttackDialogDragInventory.prototype.updateInventory = function (e) {
    var t = this;
    if (e === undefined) {
      e = false;
    }
    if (this._mc.visible) {
      var i = O.AttackDialogHelper.getFilterArray_Complete(this.getCategoryFromFilter(this._currentFilter));
      i.sort(c.ClientConstSort.sortByUnitAttackPower);
      this.clearItems();
      i.forEach(function (e) {
        var i = t.getItemFromPool();
        i.init(e);
        t._items.push(i);
        t._mc.mc_list.addChild(i.disp);
      });
      this._layoutGrid.apply(this._items, new D(0, 0, this._mc.mc_list.mask.width, 0));
      var n = this._scrollComponent.currentValue;
      var o = Math.max(0, this._mc.mc_list.height + f.AttackDialogDragInventoryItem.MARGIN.top * 2 - this._mc.mc_list.mask.height);
      this._scrollComponent.init(0, o, 75, 75);
      this._scrollComponent.scrollToValue(e ? 0 : n);
      this._scrollComponent.show();
      this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
      this._mc.txt_empty.visible = i.length == 0;
      if (i.length == 0) {
        this._mc.txt_empty.visible = true;
        var s = this._currentFilter == AttackDialogDragInventory.FILTER_ATTACK_UNITS || this._currentFilter == AttackDialogDragInventory.FILTER_ATTACK_UNITS ? "dialog_attack_rework2022_noUnits_desc" : "dialog_attack_rework2022_noTools_desc";
        a.GoodgameTextFieldManager.getInstance().registerTextField(this._mc.txt_empty, new l.LocalizedTextVO(s)).autoFitToBounds = true;
      } else {
        this._mc.txt_empty.visible = false;
      }
    }
  };
  AttackDialogDragInventory.prototype.clearItems = function () {
    var e = this;
    o.MovieClipHelper.clearMovieClip(this._mc.mc_list);
    this._items.forEach(function (t) {
      t.destroy();
      e._itemPool.push(t);
    });
    this._items = [];
  };
  AttackDialogDragInventory.prototype.getItemFromPool = function () {
    if (this._itemPool.length > 0) {
      return this._itemPool.pop();
    }
    var e = new (s.getDefinitionByName("AttackDialogDragInventory_Item"))();
    return new f.AttackDialogDragInventoryItem(e);
  };
  AttackDialogDragInventory.prototype.getCategoryFromFilter = function (e) {
    switch (e) {
      case AttackDialogDragInventory.FILTER_ATTACK_UNITS:
        return C.CastleFightDialog.SHOP_CATEGORY_UNITS_ATT;
      case AttackDialogDragInventory.FILTER_DEFENSE_UNITS:
        return C.CastleFightDialog.SHOP_CATEGORY_UNITS_DEF;
      case AttackDialogDragInventory.FILTER_TOOLS:
        return O.AttackDialogHelper.CUSTOM_CATEGORY_ATTACK_TOOLS;
      case AttackDialogDragInventory.FILTER_BOOSTER_TOOLS:
        return O.AttackDialogHelper.CUSTOM_CATEGORY_BOOSTER_TOOLS;
    }
  };
  AttackDialogDragInventory.prototype.onScroll = function () {
    this._mc.mc_list.y = this._scrollY - this._scrollComponent.currentValue;
  };
  AttackDialogDragInventory.prototype.onClick = function (e) {
    if (g.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this._mc.btn_radio_attackUnits:
        case this._mc.btn_radio_defenseUnits:
        case this._mc.btn_radio_tools:
        case this._mc.btn_radio_boosterTools:
          this.filterInventory(e.target.name);
      }
    }
  };
  AttackDialogDragInventory.prototype.onUpdateWaves = function () {
    this.updateInventory();
  };
  AttackDialogDragInventory.prototype.onSelectedWavesChanged = function () {
    if (this.attackController.isWaveDetailView) {
      var e = this.attackController.getIsWaveSelectedForAutoFill(y.AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut.CONST_WAVE_NAME);
      var t = this.attackController.getIsWaveSelectedForAutoFill(E.AttackDialogWaveHandlerFinalYardWaveInfoItemFoldOut.CONST_WAVE_NAME);
      this.enableFilter(AttackDialogDragInventory.FILTER_ATTACK_UNITS, !e);
      this.enableFilter(AttackDialogDragInventory.FILTER_DEFENSE_UNITS, !e);
      this.enableFilter(AttackDialogDragInventory.FILTER_TOOLS, !t);
      this.enableFilter(AttackDialogDragInventory.FILTER_BOOSTER_TOOLS, !e && !t);
      if (e && this._currentFilter != AttackDialogDragInventory.FILTER_TOOLS) {
        this.filterInventory(AttackDialogDragInventory.FILTER_TOOLS);
      } else if (!t || this._currentFilter != AttackDialogDragInventory.FILTER_TOOLS && this._currentFilter != AttackDialogDragInventory.FILTER_BOOSTER_TOOLS) {
        this.updateInventory();
      } else {
        this.filterInventory(AttackDialogDragInventory.FILTER_ATTACK_UNITS);
      }
    }
  };
  AttackDialogDragInventory.prototype.destroy = function () {
    if (this._mc) {
      this._mc.removeEventListener(b.CLICK, this.bindFunction(this.onClick));
    }
    this.attackController.updateAllWaveInfo.remove(this.bindFunction(this.onUpdateWaves));
    this.attackController.onAutoFillALLSelectionChanged.add(this.bindFunction(this.onSelectedWavesChanged));
    this.clearItems();
    if (this._scrollComponent) {
      this._scrollComponent.hide();
      this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScroll));
    }
  };
  Object.defineProperty(AttackDialogDragInventory.prototype, "attackController", {
    get: function () {
      return m.AttackDialogController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  AttackDialogDragInventory.FILTER_ATTACK_UNITS = "btn_radio_attackUnits";
  AttackDialogDragInventory.FILTER_DEFENSE_UNITS = "btn_radio_defenseUnits";
  AttackDialogDragInventory.FILTER_TOOLS = "btn_radio_tools";
  AttackDialogDragInventory.FILTER_BOOSTER_TOOLS = "btn_radio_boosterTools";
  return AttackDialogDragInventory;
}();
exports.AttackDialogDragInventory = I;