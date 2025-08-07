Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./169.js");
var u = require("./72.js");
var d = require("./85.js");
var p = require("./4.js");
var h = require("./9.js");
var g = require("./20.js");
var C = require("./81.js");
var _ = require("./297.js");
var m = require("./8.js");
var f = require("./63.js");
var O = require("./617.js");
var E = require("./614.js");
var y = require("./113.js");
var b = require("./120.js");
var D = require("./115.js");
var I = require("./344.js");
var T = require("./1108.js");
var v = createjs.MouseEvent;
var S = createjs.Point;
var A = function (e) {
  function ACastleAdvancedTroopSelectionInfiniteScrollItem() {
    var t = e !== null && e.apply(this, arguments) || this;
    t.dispatcher = new u.CastleEventDispatcher();
    return t;
  }
  n.__extends(ACastleAdvancedTroopSelectionInfiniteScrollItem, e);
  ACastleAdvancedTroopSelectionInfiniteScrollItem.prototype.initLoaded = function () {
    e.prototype.initLoaded.call(this);
    this._itxt_totalAmount = o.GoodgameTextFieldManager.getInstance().registerTextField(this.itemMc.mc_unit.txt_amount, new d.CastleLocalizedNumberVO(0, {
      compactThreshold: 1000000
    }));
    this._itxt_totalAmount.autoFitToBounds = true;
    this._itxt_infoMarchspeed = o.GoodgameTextFieldManager.getInstance().registerTextField(this.itemMc.mc_infoMarchspeed.txt_value, new r.NumberVO(0));
    this.itemMc.mc_infoMarchspeed.toolTipText = "marchspeed";
    this.itemMc.mc_selection.btn_remove.toolTipText = "dialog_addUnit_remove";
    this.itemMc.mc_selection.btn_all.toolTipText = "dialog_addUnit_all";
    this.itemMc.mc_unit.mouseChildren = false;
    this.itemMc.mc_infoMarchspeed.mouseChildren = false;
    m.ButtonHelper.initButtons([this.itemMc.mc_selection.btn_all, this.itemMc.mc_selection.btn_remove, this.itemMc.mc_unit, this.itemMc.mc_selection.mc_slider.btn_slider], g.ClickFeedbackButtonHover, 1);
  };
  ACastleAdvancedTroopSelectionInfiniteScrollItem.prototype.onValueChange = function (e) {
    this.troopSelectionScrollItemVO.selectedAmount = this._amountComponent.getSelectedAmount();
    this.dispatcher.dispatchEvent(new T.CastleAdvancedTroopSelectionInfiniteEvent(this, T.CastleAdvancedTroopSelectionInfiniteEvent.UNIT_SELECTION_CHANGED));
    if (this._itxt_totalAmount.textContentVO) {
      this._itxt_totalAmount.textContentVO.numberValue = this.troopSelectionScrollItemVO.unitVO.inventoryAmount - this._amountComponent.getSelectedAmount();
    }
  };
  ACastleAdvancedTroopSelectionInfiniteScrollItem.prototype.fill = function () {
    if (this._amountComponent) {
      this._amountComponent.removeEventListener(c.BasicPickerEvent.PICKER_CHANGE_VALUE, this.bindFunction(this.onValueChange));
      this._amountComponent.destroy();
    }
    this._amountComponent = new _.CastleUnitAmountComponent();
    this._amountComponent.init(this.itemMc.mc_selection.mc_slider, this.itemMc.mc_selection.amountPicker, this.itemMc.mc_selection.btn_all);
    this._amountComponent.minAmount = 0;
    if (this.hasAttackSupportTool()) {
      this._amountComponent.setNumberOfItems(1);
    }
    this._amountComponent.centerSliderButtonOnDefault = false;
    this._amountComponent.addEventListener(c.BasicPickerEvent.PICKER_CHANGE_VALUE, this.bindFunction(this.onValueChange));
    f.WodPicHelper.setCorrectUnitBackgroundPic(this.troopSelectionScrollItemVO.unitVO, this.itemMc.mc_unit.mc_bg, null, null);
    f.WodPicHelper.addPlayerUnitPicToContainer(this.troopSelectionScrollItemVO.unitVO, this.itemMc.mc_unit, 36, 36, 36, 36, 15, new S(-20, 20), true, function () {}, this.itemMc.mc_unit.mc_unitLevel);
    this.itemMc.mc_unit.toolTipText = this.troopSelectionScrollItemVO.unitVO.getNameString();
    this.fillAdditionalComponents();
    this.updateSelection();
    if (this._itxt_infoMarchspeed.textContentVO) {
      this._itxt_infoMarchspeed.textContentVO.numberValue = this.troopSelectionScrollItemVO.unitVO.unitSpeed;
    }
    this.itemMc.mc_infoMarchspeed.doCache();
    if (this._itxt_totalAmount.textContentVO) {
      this._itxt_totalAmount.textContentVO.numberValue = this.troopSelectionScrollItemVO.unitVO.inventoryAmount - this._amountComponent.getSelectedAmount();
    }
  };
  ACastleAdvancedTroopSelectionInfiniteScrollItem.prototype.hasAttackSupportTool = function () {
    return this.troopSelectionScrollItemVO.unitVO && this.troopSelectionScrollItemVO.unitVO.isOffenseSupportTool;
  };
  ACastleAdvancedTroopSelectionInfiniteScrollItem.prototype.updateSelection = function () {
    if (this.isShown && this.scrollItemVO) {
      if (this.hasAttackSupportTool()) {
        this._amountComponent.setMaxNumberOfItems(1);
      } else {
        var e = this.troopSelectionScrollItemVO.unitVO;
        if (e && e.amountPerWave > 0 && e.amountPerWave != this.troopSelectionScrollItemVO.maxAmount) {
          this._amountComponent.setMaxNumberOfItems(this.troopSelectionScrollItemVO.maxToolWaveAmount);
        } else {
          this._amountComponent.setMaxNumberOfItems(this.troopSelectionScrollItemVO.maxAmount);
        }
      }
      this._amountComponent.setSelectedAmount(this.troopSelectionScrollItemVO.selectedAmount);
      this._amountComponent.enableComponent(this.troopSelectionScrollItemVO.isAdjustable);
      this.itemMc.mc_selection.btn_remove.visible = this.troopSelectionScrollItemVO.selectedAmount > 0;
      if (this.itemMc.mc_selection.icon_discount) {
        this.itemMc.mc_selection.icon_discount.visible = false;
      }
      if (!this.itemMc.mc_selection.btn_remove.visible && this.troopSelectionScrollItemVO.sourceArea) {
        var t = p.CastleModel.permanentCastleData.getUnitBaseLocation(this.troopSelectionScrollItemVO.sourceArea).unitsVO.getAssociatedEventPackage(this.troopSelectionScrollItemVO.unitVO.wodId);
        var i = l.int(t ? t.c2Discount : 0);
        var n = a.castAs(p.CastleModel.specialEventData.getActiveEventByEventId(s.EventConst.EVENTTYPE_UNIT_PRIME_SALE), "UnitPrimeSaleEventVO");
        if (n && n.wodIDHasDiscount(this.troopSelectionScrollItemVO.unitVO.wodId) && i == 0) {
          i = n.discount;
        }
        if (i > 0 && this.itemMc.mc_selection.icon_discount) {
          this.itemMc.mc_selection.icon_discount.visible = true;
          o.GoodgameTextFieldManager.getInstance().registerTextField(this.itemMc.mc_selection.icon_discount.txt_value, new r.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT, [i]));
          this.itemMc.mc_selection.icon_discount.toolTipText = new r.LocalizedTextVO("dialog_attack_primeSale_tt", [i]);
          this.itemMc.mc_selection.icon_discount.mouseChildren = false;
        }
      }
    }
  };
  ACastleAdvancedTroopSelectionInfiniteScrollItem.prototype.onClick = function (t) {
    if (m.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.itemMc.mc_selection.btn_remove:
          this._amountComponent.setSelectedAmount(0);
          this.troopSelectionScrollItemVO.selectedAmount = 0;
          this._amountComponent.dispatchEvent(new c.BasicPickerEvent(c.BasicPickerEvent.PICKER_CHANGE_VALUE));
          I.AttackDialogTrackingHelper.getInstance().trackDetailCounter(I.AttackDialogTrackingHelper.TRACK_MANUAL_CLICK);
          break;
        case this.itemMc.mc_unit:
          h.CastleDialogHandler.getInstance().registerDefaultDialogs(y.CastleRecruitInfoDialog, new b.CastleRecruitInfoDialogProperties(this.troopSelectionScrollItemVO.unitVO));
          break;
        case this.itemMc.btn_instantBuy:
          this.showInstantBuyDialog(this.troopSelectionScrollItemVO.unitVO);
      }
      e.prototype.onClick.call(this, t);
    }
  };
  ACastleAdvancedTroopSelectionInfiniteScrollItem.prototype.showInstantBuyDialog = function (e) {
    var t = -1;
    if (a.instanceOfClass(D.AttackDialogController.getInstance().attackVO.sourceArea, "EventCampMapobjectVO")) {
      t = l.int(p.CastleModel.specialEventData.activeSeasonVO.treasureMapVO.mapID);
    }
    h.CastleDialogHandler.getInstance().registerDefaultDialogs(O.CastleDefenceBuyUnitsDialog, new E.CastleDefenceBuyUnitsDialogProperties(e, D.AttackDialogController.getInstance().attackVO.sourceArea, t));
  };
  ACastleAdvancedTroopSelectionInfiniteScrollItem.prototype.destroy = function () {
    e.prototype.destroy.call(this);
    if (this._amountComponent) {
      this._amountComponent.removeEventListener(c.BasicPickerEvent.PICKER_CHANGE_VALUE, this.bindFunction(this.onValueChange));
      this._amountComponent.destroy();
    }
  };
  ACastleAdvancedTroopSelectionInfiniteScrollItem.prototype.fillAdditionalComponents = function () {};
  ACastleAdvancedTroopSelectionInfiniteScrollItem.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    if (this.itemMc) {
      this.itemMc.addEventListener(v.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    }
  };
  ACastleAdvancedTroopSelectionInfiniteScrollItem.prototype.removeEventListener = function () {
    e.prototype.removeEventListener.call(this);
    if (this.itemMc) {
      this.itemMc.removeEventListener(v.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    }
  };
  Object.defineProperty(ACastleAdvancedTroopSelectionInfiniteScrollItem.prototype, "troopSelectionScrollItemVO", {
    get: function () {
      return this.data;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACastleAdvancedTroopSelectionInfiniteScrollItem.prototype, "scrollItemVO", {
    get: function () {
      return this.data;
    },
    enumerable: true,
    configurable: true
  });
  ACastleAdvancedTroopSelectionInfiniteScrollItem.prototype.onMouseDown = function (e) {};
  Object.defineProperty(ACastleAdvancedTroopSelectionInfiniteScrollItem.prototype, "itemMc", {
    get: function () {
      return this.getItemMc();
    },
    enumerable: true,
    configurable: true
  });
  return ACastleAdvancedTroopSelectionInfiniteScrollItem;
}(C.AInfiniteScrollListItem);
exports.ACastleAdvancedTroopSelectionInfiniteScrollItem = A;
a.classImplementsInterfaces(A, "ICollectableRendererList");