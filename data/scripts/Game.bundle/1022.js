Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./11.js");
var r = require("./12.js");
var l = require("./1023.js");
var c = require("./3.js");
var u = createjs.Point;
var d = require("./4.js");
var p = require("./85.js");
var h = require("./2.js");
var g = require("./593.js");
var C = require("./2924.js");
var _ = require("./20.js");
var m = require("./19.js");
var f = require("./25.js");
var O = require("./31.js");
var E = require("./45.js");
var y = require("./8.js");
var b = require("./9.js");
var D = require("./2926.js");
var I = require("./13.js");
var T = require("./82.js");
var v = require("./47.js");
var S = require("./625.js");
var A = require("./2927.js");
var L = require("./2929.js");
var P = require("./1561.js");
var M = require("./49.js");
var R = require("./2930.js");
var V = function (e) {
  function CastleBreweryDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleBreweryDialog.NAME) || this;
  }
  n.__extends(CastleBreweryDialog, e);
  CastleBreweryDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    y.ButtonHelper.initButtons([this.dialogDisp.btn_save, this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.btn_info, this.dialogDisp.amountPicker.btn_minus, this.dialogDisp.amountPicker.btn_plus, this.dialogDisp.mc_sliderFoodStop.amountPicker.btn_left, this.dialogDisp.mc_sliderFoodStop.amountPicker.btn_right, this.dialogDisp.mc_sliderHoneyStop.amountPicker.btn_left, this.dialogDisp.mc_sliderHoneyStop.amountPicker.btn_right], _.ClickFeedbackButtonHover);
    y.ButtonHelper.initButtons([this.dialogDisp.mc_sliderFoodStop.amountPicker.sliderContainer.slider, this.dialogDisp.mc_sliderHoneyStop.amountPicker.sliderContainer.slider], _.ClickFeedbackButtonHover);
    this.cbx_prio = new M.CheckBoxButton(this.dialogDisp.cbx_prio, true);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new a.TextVO(I.TextHelper.toUpperCaseLocaSafeTextId("dialog_relicBrewery_header")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title1, new a.TextVO(I.TextHelper.toUpperCaseLocaSafeTextId("dialog_relicBrewery_brewingSettings_subHeader")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title2, new a.TextVO(I.TextHelper.toUpperCaseLocaSafeTextId("dialog_relicBrewery_resourceStockLimit_subHeader")));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_save.txt_text, new a.TextVO(I.TextHelper.toUpperCaseLocaSafeTextId("dialog_button_saveChanges")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_prio, new a.LocalizedTextVO("dialog_relicBrewery_foodPrioritization_desc"));
    this.dialogDisp.mc_food.toolTipText = "dialog_relicBrewery_productionInput_food_tooltip";
    this.dialogDisp.mc_honey.toolTipText = "dialog_relicBrewery_productionInput_honey_tooltip";
    this.dialogDisp.mc_mead.toolTipText = "dialog_relicBrewery_productionOutput_mead_tooltip";
    this.resourceItems = new Map();
  };
  CastleBreweryDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    if (d.CastleModel.breweryData.meadPrioSet) {
      this.cbx_prio.selected();
    } else {
      this.cbx_prio.deselected();
    }
    this.inputPercentage = new g.SelectInputFieldComponent(this.dialogDisp.mc_percent, this.bindFunction(this.onPercentValueInput), c.Localize.text(h.GenericTextIds.VALUE_PERCENTAGE, [0]));
    this.inputPercentage.searchField.restrict = "0-9";
    this.inputPercentage.searchField.maxChars = 5;
    this.inputFoodStop = new g.SelectInputFieldComponent(this.dialogDisp.mc_foodStop, this.bindFunction(this.onFoodStopValueInput), c.Localize.number(d.CastleModel.breweryData.stopAtFoodAmount));
    this.inputFoodStop.searchField.restrict = "0-9";
    this.inputFoodStop.searchField.maxChars = 7;
    this.inputHoneyStop = new g.SelectInputFieldComponent(this.dialogDisp.mc_honeyStop, this.bindFunction(this.onHoneyStopValueInput), c.Localize.number(d.CastleModel.breweryData.stopAtHoneyAmount));
    this.inputHoneyStop.searchField.restrict = "0-9";
    this.inputHoneyStop.searchField.maxChars = 7;
    this.inputPercentage.searchField.focusOut.add(this.bindFunction(this.removeFocus));
    this.inputFoodStop.searchField.focusOut.add(this.bindFunction(this.removeFocus));
    this.inputHoneyStop.searchField.focusOut.add(this.bindFunction(this.removeFocus));
    this.initResourceTextfields();
    this.valueSlider = new T.ModernSliderScrollComponent(new v.SimpleScrollVO().initByParent(this.dialogDisp.amountPicker).addMouseWheelElements([this.disp]), new S.DynamicSizeScrollStrategyHorizontal(true), true);
    this.valueSlider.init(0, 100);
    this.valueSlider.show();
    this.valueSlider.scrollToValue(d.CastleModel.breweryData.percentForMead);
    this.valueSlider.onScrollSignal.add(this.bindFunction(this.onSliderUpdated));
    this.foodValueController = new C.CastleValueChangerController(d.CastleModel.breweryData.stopAtFoodAmount, 0, d.CastleModel.areaData.activeArea.storage.getItem(r.CollectableEnum.FOOD).maxAmount);
    this.foodValueController.addButtons(this.dialogDisp.mc_sliderFoodStop, 1);
    this.foodValueController.addSlider(this.dialogDisp.mc_sliderFoodStop.amountPicker.sliderContainer, 16);
    this.foodValueController.valueUpdatedSignal.add(this.bindFunction(this.onFoodSliderUpdated));
    var i = d.CastleModel.areaData.activeArea.storage.getItem(r.CollectableEnum.HONEY).maxAmount;
    this.honeyValueController = new C.CastleValueChangerController(d.CastleModel.breweryData.stopAtHoneyAmount, 0, i > 0 ? i : 0.4);
    this.honeyValueController.addButtons(this.dialogDisp.mc_sliderHoneyStop, 1);
    this.honeyValueController.addSlider(this.dialogDisp.mc_sliderHoneyStop.amountPicker.sliderContainer, 16);
    this.honeyValueController.valueUpdatedSignal.add(this.bindFunction(this.onHoneySliderUpdated));
    y.ButtonHelper.enableButton(this.dialogDisp.mc_sliderHoneyStop.amountPicker.btn_left, i > 0);
    y.ButtonHelper.enableButton(this.dialogDisp.mc_sliderHoneyStop.amountPicker.btn_right, i > 0);
    y.ButtonHelper.enableButton(this.dialogDisp.mc_sliderHoneyStop.amountPicker.sliderContainer.slider, i > 0);
    if (i < 1) {
      this.inputHoneyStop.searchField.text = "-";
      this.inputHoneyStop.searchField.selectable = false;
      this.honeyValueController.dispose();
    }
    this.itf_food = this.textFieldManager.registerTextField(this.dialogDisp.txt_food, new p.CastleLocalizedNumberVO(0));
    this.itf_honey = this.textFieldManager.registerTextField(this.dialogDisp.txt_honey, new p.CastleLocalizedNumberVO(0));
    this.itf_mead = this.textFieldManager.registerTextField(this.dialogDisp.txt_mead, new p.CastleLocalizedNumberVO(0));
    this.dialogDisp.mc_productivity.gotoAndStop(d.CastleModel.breweryData.isMeadProductionActive ? 1 : 2);
    if (d.CastleModel.breweryData.isMeadProductionActive) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_copy0, new a.LocalizedTextVO("dialog_relicBrewery_status_productionOngoing_copy"));
    } else if (d.CastleModel.breweryData.server_production_freeze) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_copy0, new a.LocalizedTextVO("dialog_relicBrewery_status_productionFreeze_copy"));
    } else if (d.CastleModel.areaData.activeArea.storage.getItem(r.CollectableEnum.MEAD).amount >= d.CastleModel.areaData.activeArea.storage.getItem(r.CollectableEnum.MEAD).maxAmount) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_copy0, new a.LocalizedTextVO("dialog_relicBrewery_status_meadStorageFull_copy"));
    } else if (d.CastleModel.areaData.activeArea.storage.getItem(r.CollectableEnum.FOOD).amount <= d.CastleModel.breweryData.stopAtFoodAmount) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_copy0, new a.LocalizedTextVO("dialog_relicBrewery_status_foodStockLimit_copy"));
    } else if (d.CastleModel.areaData.activeArea.storage.getItem(r.CollectableEnum.FOOD).amount <= 10) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_copy0, new a.LocalizedTextVO("dialog_relicBrewery_status_foodDepleted_copy"));
    } else if (d.CastleModel.areaData.activeArea.storage.getItem(r.CollectableEnum.HONEY).amount <= d.CastleModel.breweryData.stopAtHoneyAmount) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_copy0, new a.LocalizedTextVO("dialog_relicBrewery_status_honeyStockLimit_copy"));
    } else if (d.CastleModel.areaData.activeArea.storage.getItem(r.CollectableEnum.HONEY).amount <= 10) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_copy0, new a.LocalizedTextVO("dialog_relicBrewery_status_honeyDepleted_copy"));
    } else {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_copy0, new a.LocalizedTextVO("dialog_relicBrewery_status_productionPaused_copy"));
    }
    this.onSliderUpdated();
    this.onFoodStopValueInput();
    this.onHoneyStopValueInput();
  };
  CastleBreweryDialog.prototype.initResourceTextfields = function () {
    for (var e = [r.CollectableEnum.FOOD, r.CollectableEnum.HONEY, r.CollectableEnum.MEAD], t = new u(30, 30), i = 0; i < e.length; i++) {
      var n = e[i];
      if (!this.resourceItems.has(n)) {
        this.resourceItems.set(n, new l.ResourceComponentWithStorageBar(this.dialogDisp["mc_resItem" + i], n, t));
      }
      var o = d.CastleModel.areaData.getActiveStorageItem(n);
      this.setResource(n, o.amount, o.maxAmount);
    }
    this.updateResIcon(this.dialogDisp.mc_foodStop.mc_icon, r.CollectableEnum.FOOD);
    this.updateResIcon(this.dialogDisp.mc_honeyStop.mc_icon, r.CollectableEnum.HONEY);
  };
  CastleBreweryDialog.prototype.updateResIcon = function (e, t) {
    var i = new m.CollectableRenderOptions(m.CollectableRenderOptions.SET_ICON, new u(30, 30));
    i.tooltip.useAmount = false;
    var n = new O.CollectableRenderClips(e);
    n.addIconMc(e);
    f.CollectableRenderHelper.displaySingleItemComplete(this, n, E.CollectableHelper.createVO(t), i);
  };
  CastleBreweryDialog.prototype.setResource = function (e, t, i = -1) {
    this.resourceItems.get(e).setValue(t, i);
    this.resourceItems.get(e).disp.doCache();
  };
  CastleBreweryDialog.prototype.getValueFromString = function (e) {
    e = (e = e.replace(".", "")).replace(",", "");
    return parseInt(e);
  };
  CastleBreweryDialog.prototype.onFoodStopValueInput = function () {
    var e = h.MathBase.clamp(this.getValueFromString(this.inputFoodStop.text), 0, d.CastleModel.areaData.activeArea.storage.getItem(r.CollectableEnum.FOOD).maxAmount);
    if (isNaN(e)) {
      e = this.foodValueController.value;
    }
    this.foodValueController.value = e - e % 10;
    this.removeFocus();
  };
  CastleBreweryDialog.prototype.onHoneyStopValueInput = function () {
    d.CastleModel.areaData.activeArea.storage.getItem(r.CollectableEnum.HONEY).maxAmount;
    var e = h.MathBase.clamp(this.getValueFromString(this.inputHoneyStop.text), 0, d.CastleModel.areaData.activeArea.storage.getItem(r.CollectableEnum.HONEY).maxAmount);
    if (isNaN(e)) {
      e = this.honeyValueController.value;
    }
    this.honeyValueController.value = e - e % 10;
    this.removeFocus();
  };
  CastleBreweryDialog.prototype.onPercentValueInput = function () {
    var e = h.MathBase.clamp(this.getValueFromString(this.inputPercentage.text), 0, 100);
    if (isNaN(e)) {
      e = this.valueSlider.currentValue;
    }
    this.valueSlider.scrollToValue(e);
    this.removeFocus();
  };
  CastleBreweryDialog.prototype.removeFocus = function (e = null) {
    this.inputFoodStop.deselect();
    this.inputHoneyStop.deselect();
    this.inputPercentage.deselect();
  };
  CastleBreweryDialog.prototype.onFoodSliderUpdated = function () {
    this.inputFoodStop.updateText(c.Localize.number(this.foodValueController.value));
  };
  CastleBreweryDialog.prototype.onHoneySliderUpdated = function () {
    this.inputHoneyStop.updateText(c.Localize.number(this.honeyValueController.value));
  };
  CastleBreweryDialog.prototype.onSliderUpdated = function (e = null) {
    var t = d.CastleModel.breweryData.breweryBuildingVO.meadProduction * this.factor;
    var i = t * d.CastleModel.breweryData.breweryBuildingVO.foodRatio;
    var n = t * d.CastleModel.breweryData.breweryBuildingVO.honeyRatio;
    var o = this.factor > 0 ? (t + P.BreweryHelper.getCIBaseBonus()) * P.BreweryHelper.getTotalBoost() + P.BreweryHelper.getTotalBonus() : 0;
    this.itf_food.textContentVO.numberValue = d.CastleModel.breweryData.server_production_freeze ? 0 : i;
    this.itf_honey.textContentVO.numberValue = d.CastleModel.breweryData.server_production_freeze ? 0 : n;
    this.itf_mead.textContentVO.numberValue = d.CastleModel.breweryData.server_production_freeze ? 0 : h.MathBase.floor(o, 1);
    this.inputPercentage.updateText(c.Localize.text(h.GenericTextIds.VALUE_PERCENTAGE, [this.valueSlider.currentValue]));
    if (this.valueSlider.currentValue % 1 != 0) {
      this.valueSlider.scrollToValue(this.valueSlider.currentValue - this.valueSlider.currentValue % 1);
    }
    this.dialogDisp.amountPicker.mc_sliderLine.otherBar.scaleX = this.valueSlider.currentPercentFactor;
  };
  Object.defineProperty(CastleBreweryDialog.prototype, "factor", {
    get: function () {
      return this.valueSlider.currentValue / 100;
    },
    enumerable: true,
    configurable: true
  });
  CastleBreweryDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_info:
        b.CastleDialogHandler.getInstance().registerDialogs(A.CastleBreweryProductionInfoDialog, new L.CastleBreweryProductionInfoDialogProperties(this.factor));
        break;
      case this.dialogDisp.btn_save:
        h.BasicModel.smartfoxClient.sendCommandVO(new D.C2SSetBreweryProductionVO(d.CastleModel.kingdomData.activeKingdomID, d.CastleModel.areaData.activeArea.areaId, d.CastleModel.breweryData.breweryBuildingVO.wodId, d.CastleModel.breweryData.breweryBuildingVO.objectId, this.valueSlider.currentValue, this.foodValueController.value, this.honeyValueController.value));
        this.hide();
        break;
      case this.dialogDisp.btn_help:
        b.CastleDialogHandler.getInstance().showHelper("", c.Localize.text("relicBrewery_help"));
        break;
      case this.dialogDisp.cbx_prio:
        this.cbx_prio.toggleSelected();
        d.CastleModel.breweryData.meadPrioSet = this.cbx_prio.isSelected;
        h.BasicModel.smartfoxClient.sendCommandVO(new R.C2SSetMeadPrioVO());
    }
  };
  CastleBreweryDialog.prototype.hideLoaded = function (t = null) {
    this.valueSlider.hide();
    if (this.inputFoodStop) {
      this.inputFoodStop.onHide();
    }
    if (this.inputHoneyStop) {
      this.inputHoneyStop.onHide();
    }
    if (this.inputPercentage) {
      this.inputPercentage.onHide();
    }
    if (this.foodValueController) {
      this.foodValueController.dispose();
    }
    if (this.honeyValueController) {
      this.honeyValueController.dispose();
    }
    e.prototype.hideLoaded.call(this);
  };
  CastleBreweryDialog.__initialize_static_members = function () {
    CastleBreweryDialog.NAME = "CastleBrewery_G";
  };
  return CastleBreweryDialog;
}(s.CastleExternalDialog);
exports.CastleBreweryDialog = V;
o.classImplementsInterfaces(V, "ICollectableRendererList");
V.__initialize_static_members();