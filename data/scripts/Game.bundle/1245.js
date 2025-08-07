Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./100.js");
var a = require("./1.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./2.js");
var c = require("./5.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./6.js");
var h = require("./897.js");
var g = require("./169.js");
var C = require("./85.js");
var _ = require("./4.js");
var m = require("./120.js");
var f = require("./8.js");
var O = require("./20.js");
var E = createjs.Point;
var y = function (e) {
  function ACastleAdvancedTroopSelectionScrollItem(t) {
    var i = e.call(this, t) || this;
    i._itxt_totalAmount = l.GoodgameTextFieldManager.getInstance().registerTextField(t.mc_unit.txt_amount, new C.CastleLocalizedNumberVO(0, {
      compactThreshold: 1000000
    }));
    i._itxt_totalAmount.autoFitToBounds = true;
    i._itxt_infoMarchspeed = l.GoodgameTextFieldManager.getInstance().registerTextField(t.mc_infoMarchspeed.txt_value, new u.NumberVO(0));
    t.mc_infoMarchspeed.toolTipText = "marchspeed";
    t.mc_selection.btn_remove.toolTipText = "dialog_addUnit_remove";
    t.mc_selection.btn_all.toolTipText = "dialog_addUnit_all";
    t.mc_unit.mouseChildren = false;
    t.mc_infoMarchspeed.mouseChildren = false;
    f.ButtonHelper.initButtons([t.mc_selection.btn_all, t.mc_selection.btn_remove, t.mc_unit], O.ClickFeedbackButtonHover, 1);
    return i;
  }
  n.__extends(ACastleAdvancedTroopSelectionScrollItem, e);
  ACastleAdvancedTroopSelectionScrollItem.prototype.hide = function () {
    e.prototype.hide.call(this);
    if (this._amountComponent) {
      this._amountComponent.removeEventListener(g.BasicPickerEvent.PICKER_CHANGE_VALUE, this.bindFunction(this.onValueChange));
    }
  };
  ACastleAdvancedTroopSelectionScrollItem.prototype.onValueChange = function (e) {
    this.troopSelectionScrollItemVO.selectedAmount = this._amountComponent.getSelectedAmount();
    this.dispatchEvent(new h.CastleAdvancedTroopSelectionEvent(this, h.CastleAdvancedTroopSelectionEvent.UNIT_SELECTION_CHANGED));
  };
  ACastleAdvancedTroopSelectionScrollItem.prototype.customFillItem = function () {
    if (this._amountComponent) {
      this._amountComponent.removeEventListener(g.BasicPickerEvent.PICKER_CHANGE_VALUE, this.bindFunction(this.onValueChange));
      this._amountComponent.destroy();
    }
    this._amountComponent = new T.CastleUnitAmountComponent();
    this._amountComponent.init(this.disp.mc_selection.mc_slider, this.disp.mc_selection.amountPicker, this.disp.mc_selection.btn_all);
    this._amountComponent.minAmount = 0;
    this._amountComponent.configureTextField(6, true);
    if (this.hasAttackSupportTool()) {
      this._amountComponent.setNumberOfItems(1);
    }
    this._amountComponent.centerSliderButtonOnDefault = false;
    this._amountComponent.addEventListener(g.BasicPickerEvent.PICKER_CHANGE_VALUE, this.bindFunction(this.onValueChange));
    I.WodPicHelper.setCorrectUnitBackgroundPic(this.troopSelectionScrollItemVO.unitVO, this.disp.mc_unit.mc_bg, this.advancedSelectionItemBackground, this.advancedSelectionItemBackground_Berimond);
    if (this._itxt_totalAmount.textContentVO) {
      this._itxt_totalAmount.textContentVO.numberValue = this.troopSelectionScrollItemVO.unitVO.inventoryAmount;
    }
    I.WodPicHelper.addPlayerUnitPicToContainer(this.troopSelectionScrollItemVO.unitVO, this.disp.mc_unit, 22, 24, 22, 24, 15, new E(-20, 20), true, function () {}, this.disp.mc_unit.mc_unitLevel);
    this.disp.mc_unit.toolTipText = this.troopSelectionScrollItemVO.unitVO.getNameString();
    this.fillAdditionalComponents();
    this.updateSelection();
    this._itxt_infoMarchspeed.textContentVO.numberValue = this.troopSelectionScrollItemVO.unitVO.unitSpeed;
    this.disp.mc_infoMarchspeed.doCache();
  };
  ACastleAdvancedTroopSelectionScrollItem.prototype.hasAttackSupportTool = function () {
    return this.troopSelectionScrollItemVO.unitVO && this.troopSelectionScrollItemVO.unitVO.isOffenseSupportTool;
  };
  ACastleAdvancedTroopSelectionScrollItem.prototype.updateSelection = function () {
    if (this.visible && this.scrollItemVO) {
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
      this.disp.mc_selection.btn_remove.visible = this.troopSelectionScrollItemVO.selectedAmount > 0;
      if (this.disp.mc_selection.icon_discount) {
        this.disp.mc_selection.icon_discount.visible = false;
      }
      if (!this.disp.mc_selection.btn_remove.visible && this.troopSelectionScrollItemVO.sourceArea) {
        var t = _.CastleModel.permanentCastleData.getUnitBaseLocation(this.troopSelectionScrollItemVO.sourceArea).unitsVO.getAssociatedEventPackage(this.troopSelectionScrollItemVO.unitVO.wodId);
        var i = p.int(t ? t.c2Discount : 0);
        var n = v.castAs(_.CastleModel.specialEventData.getActiveEventByEventId(c.EventConst.EVENTTYPE_UNIT_PRIME_SALE), "UnitPrimeSaleEventVO");
        if (n && n.wodIDHasDiscount(this.troopSelectionScrollItemVO.unitVO.wodId) && i == 0) {
          i = n.discount;
        }
        if (i > 0 && this.disp.mc_selection.icon_discount) {
          this.disp.mc_selection.icon_discount.visible = true;
          l.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.mc_selection.icon_discount.txt_value, new d.LocalizedTextVO(s.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT, [i]), new o.InternalGGSTextFieldConfigVO(true));
          this.disp.mc_selection.icon_discount.toolTipText = new d.LocalizedTextVO("dialog_attack_primeSale_tt", [i]);
          this.disp.mc_selection.icon_discount.mouseChildren = false;
        }
      }
    }
  };
  ACastleAdvancedTroopSelectionScrollItem.prototype.onMouseClick = function (t) {
    if (f.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.disp.mc_selection.btn_remove:
          this._amountComponent.setSelectedAmount(0);
          this.troopSelectionScrollItemVO.selectedAmount = 0;
          break;
        case this.disp.mc_unit:
          b.CastleDialogHandler.getInstance().registerDefaultDialogs(D.CastleRecruitInfoDialog, new m.CastleRecruitInfoDialogProperties(this.troopSelectionScrollItemVO.unitVO));
      }
      e.prototype.onMouseClick.call(this, t);
    }
  };
  ACastleAdvancedTroopSelectionScrollItem.prototype.remove = function () {
    e.prototype.remove.call(this);
    this._amountComponent.removeEventListener(g.BasicPickerEvent.PICKER_CHANGE_VALUE, this.bindFunction(this.onValueChange));
    this._amountComponent.destroy();
  };
  ACastleAdvancedTroopSelectionScrollItem.prototype.fillAdditionalComponents = function () {};
  Object.defineProperty(ACastleAdvancedTroopSelectionScrollItem.prototype, "troopSelectionScrollItemVO", {
    get: function () {
      return this.scrollItemVO;
    },
    enumerable: true,
    configurable: true
  });
  return ACastleAdvancedTroopSelectionScrollItem;
}(r.ScrollItem);
exports.ACastleAdvancedTroopSelectionScrollItem = y;
a.classImplementsInterfaces(y, "MovieClip");
var b = require("./9.js");
var D = require("./113.js");
var I = require("./63.js");
var T = require("./297.js");
var v = require("./1.js");