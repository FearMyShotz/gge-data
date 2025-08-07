Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./57.js");
var c = require("./16.js");
var u = require("./2640.js");
var d = require("./4.js");
var p = require("./52.js");
var h = require("./217.js");
var g = require("./40.js");
var C = require("./47.js");
var _ = require("./626.js");
var m = require("./8.js");
var f = require("./1442.js");
var O = function (e) {
  function ADecorationForgeCatalystConversionDialogInfoBox(t) {
    var i = this;
    i._isShowingConfirmButtons = false;
    i._onButtonsChanged = new l.Signal();
    CONSTRUCTOR_HACK;
    (i = e.call(this, t) || this).init();
    return i;
  }
  n.__extends(ADecorationForgeCatalystConversionDialogInfoBox, e);
  ADecorationForgeCatalystConversionDialogInfoBox.prototype.init = function () {
    m.ButtonHelper.initButton(this.disp.mc_buttons.btn_execute, -1, I.ClickFeedbackButtonBackground);
    m.ButtonHelper.initButtons([this.disp.mc_buttons.mc_comfirm.btn_cancel, this.disp.mc_buttons.mc_comfirm.btn_ok], T.ClickFeedbackButton);
    this.disp.mc_buttons.mc_comfirm.btn_cancel.toolTipText = "cancel";
    this.disp.mc_buttons.mc_comfirm.btn_ok.toolTipText = "confirm";
    this._scrollComponent = new b.SimpleScrollComponent(new C.SimpleScrollVO().initByParent(this.disp.mc_slider).addMouseWheelElements([this.disp]), new _.DynamicSizeScrollStrategyHorizontal(true));
  };
  ADecorationForgeCatalystConversionDialogInfoBox.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    this._scrollComponent.show();
  };
  ADecorationForgeCatalystConversionDialogInfoBox.prototype.onHide = function () {
    this._scrollComponent.hide();
    e.prototype.onHide.call(this);
  };
  ADecorationForgeCatalystConversionDialogInfoBox.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
  };
  ADecorationForgeCatalystConversionDialogInfoBox.prototype.removeEventListener = function () {
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
    e.prototype.removeEventListener.call(this);
  };
  ADecorationForgeCatalystConversionDialogInfoBox.prototype.updateWithNewData = function (e, t = true) {
    this._catalystVO = e;
    this.update(t);
  };
  ADecorationForgeCatalystConversionDialogInfoBox.prototype.update = function (e = true) {
    this.disp.visible = this.catalystVO != null;
    if (this.catalystVO) {
      var t = this.getMaxSelectableValue();
      var i = t > 0 ? 1 : 0;
      var n = this._scrollComponent.currentValue;
      this._scrollComponent.init(i, t, 1, 1);
      this._scrollComponent.scrollToValue(e ? i : n);
      this._scrollComponent.enableComponent(t > 1);
      this.setButtons(false);
      m.ButtonHelper.enableButton(this.disp.mc_buttons.btn_execute, t > 0);
      this.updateValues();
    }
  };
  ADecorationForgeCatalystConversionDialogInfoBox.prototype.updateValues = function () {};
  ADecorationForgeCatalystConversionDialogInfoBox.prototype.setOverlay = function (e) {
    this.disp.mc_overlay.visible = e;
  };
  ADecorationForgeCatalystConversionDialogInfoBox.prototype.setButtons = function (e) {
    this._isShowingConfirmButtons = e;
    this.disp.mc_buttons.btn_execute.visible = !this._isShowingConfirmButtons;
    this.disp.mc_buttons.mc_comfirm.visible = this._isShowingConfirmButtons;
    this._scrollComponent.enableComponent(!e && this.getMaxSelectableValue() > 1);
    this.onButtonsChanged.dispatch();
  };
  ADecorationForgeCatalystConversionDialogInfoBox.prototype.updateSliderFill = function () {
    var e = this.disp.mc_slider.mc_sliderFill;
    var t = this.disp.mc_slider.btn_slider;
    e.width = t.x - e.x;
  };
  ADecorationForgeCatalystConversionDialogInfoBox.prototype.fillValue = function (e, t, i, n) {
    e.mc_icon.gotoAndStop(t);
    e.mouseChildren = false;
    e.toolTipText = this.getValueToolTipTeText(t);
    y.CastleComponent.textFieldManager.registerTextField(e.txt_value, new s.LocalizedNumberVO(i)).color = i >= 0 ? c.ClientConstColor.FONT_DEFAULT_COLOR : c.ClientConstColor.MODERN_RED;
    y.CastleComponent.textFieldManager.registerTextField(e.txt_valueAdd, new r.LocalizedTextVO(n >= 0 ? "value_brackets_add" : "value_brackets_subtract", [n >= 0 ? n : -n])).color = n >= 0 ? c.ClientConstColor.MODERN_GREEN : c.ClientConstColor.MODERN_RED;
    h.ClientConstFusion.alignAddTextField(e.txt_value, e.txt_valueAdd);
    e.txt_valueAdd.visible = n != 0;
  };
  ADecorationForgeCatalystConversionDialogInfoBox.prototype.setSliderAmountText = function (e) {
    y.CastleComponent.textFieldManager.registerTextField(this.disp.mc_slider.txt_amount, new s.LocalizedNumberVO(e)).autoFitToBounds = true;
  };
  ADecorationForgeCatalystConversionDialogInfoBox.prototype.getMaxSelectableValue = function () {
    return 0;
  };
  ADecorationForgeCatalystConversionDialogInfoBox.prototype.getValueMc = function (e) {
    return this.disp.getChildByName("mc_value" + e);
  };
  ADecorationForgeCatalystConversionDialogInfoBox.prototype.getSelectedAmount = function () {
    return this._scrollComponent.currentValue;
  };
  ADecorationForgeCatalystConversionDialogInfoBox.prototype.getValueToolTipTeText = function (e) {
    switch (e) {
      case 1:
        return this._catalystVO.getNameTextId();
      case 2:
        return "fusionEnergy";
      case 3:
        return new E.CollectableItemGenericCurrencyVO(p.ClientConstCurrency.ID_DECO_DUST).getNameTextId();
      default:
        return "";
    }
  };
  ADecorationForgeCatalystConversionDialogInfoBox.prototype.getAffordableEnergy = function () {
    return 0;
  };
  ADecorationForgeCatalystConversionDialogInfoBox.prototype.getConversionDirection = function () {
    return -1;
  };
  ADecorationForgeCatalystConversionDialogInfoBox.prototype.onScroll = function () {
    this.updateSliderFill();
    this.setSliderAmountText(this._scrollComponent.currentValue);
    this.updateValues();
  };
  ADecorationForgeCatalystConversionDialogInfoBox.prototype.onClick = function (t) {
    if (m.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.disp.mc_buttons.btn_execute:
          this.onExecuteButtonClicked();
          break;
        case this.disp.mc_buttons.mc_comfirm.btn_cancel:
          this.setButtons(false);
          break;
        case this.disp.mc_buttons.mc_comfirm.btn_ok:
          this.setButtons(false);
          this.onConfirmButtonClicked();
      }
    }
  };
  ADecorationForgeCatalystConversionDialogInfoBox.prototype.onExecuteButtonClicked = function () {
    var e = d.CastleModel.fusionForgeData.getForge(a.FusionConst.DECORATION_FORGE_ID).currentEnergy;
    var t = this.getAffordableEnergy();
    if (t > e) {
      y.CastleComponent.dialogHandler.registerDialogs(D.DecorationForgeNotEnoughEnergyDialog, new f.DecorationForgeNotEnoughEnergyDialogProperties(t, e));
    } else {
      this.setButtons(true);
    }
  };
  ADecorationForgeCatalystConversionDialogInfoBox.prototype.onConfirmButtonClicked = function () {
    d.CastleModel.smartfoxClient.sendCommandVO(new u.C2SFusionCatalystConversionEventVO(a.FusionConst.DECORATION_FORGE_ID, this.getConversionDirection(), this.catalystVO.id, this.getSelectedAmount()));
    d.CastleModel.fusionForgeData.getForge(a.FusionConst.DECORATION_FORGE_ID).requestDataFromServer();
  };
  Object.defineProperty(ADecorationForgeCatalystConversionDialogInfoBox.prototype, "catalystVO", {
    get: function () {
      return this._catalystVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ADecorationForgeCatalystConversionDialogInfoBox.prototype, "isShowingConfirmButtons", {
    get: function () {
      return this._isShowingConfirmButtons;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ADecorationForgeCatalystConversionDialogInfoBox.prototype, "onButtonsChanged", {
    get: function () {
      return this._onButtonsChanged;
    },
    enumerable: true,
    configurable: true
  });
  return ADecorationForgeCatalystConversionDialogInfoBox;
}(g.CastleItemRenderer);
exports.ADecorationForgeCatalystConversionDialogInfoBox = O;
var E = require("./155.js");
var y = require("./14.js");
var b = require("./95.js");
var D = require("./1448.js");
var I = require("./121.js");
var T = require("./36.js");
o.classImplementsInterfaces(O, "ICollectableRendererList");