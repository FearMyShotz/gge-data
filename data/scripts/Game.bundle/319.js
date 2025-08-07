Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./49.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./1.js");
var c = require("./1.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./3.js");
var h = require("./6.js");
var g = require("./734.js");
var C = require("./232.js");
var _ = require("./8.js");
var m = require("./40.js");
var f = require("./274.js");
var O = require("./42.js");
var E = createjs.MouseEvent;
var y = function (e) {
  function CastleResourceCollectorComponent(t, i = 1) {
    var n = this;
    n._type = -1;
    n._maxValue = 0;
    n._notifyValueChange = false;
    n._stepSize = 1;
    CONSTRUCTOR_HACK;
    (n = e.call(this, t) || this)._stepSize = i;
    var o = t.mc_slider;
    n._sliderData = new f.BasicSliderVO(o.sliderBar, o.btn_slider, 0, 0, t);
    n._selectionSlider = new T.ScrollComponent(n._sliderData, T.ScrollComponent.HORIZONTAL_SLIDER);
    n.initButtons();
    return n;
  }
  n.__extends(CastleResourceCollectorComponent, e);
  CastleResourceCollectorComponent.prototype.initButtons = function () {
    _.ButtonHelper.initBasicButtons([this.disp.mc_slider.btn_slider, this.donateComponent.btn_remove, this.donateComponent.btn_add, this.donateComponent.btn_max]);
  };
  CastleResourceCollectorComponent.prototype.initComponent = function (e, t, i, n = null) {
    this._type = t;
    this.donateComponent.txt_value.type = l.TextFieldType.INPUT;
    this.itxt_value = I.CastleComponent.textFieldManager.registerTextField(this.donateComponent.txt_value, new d.LocalizedTextVO(s.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [0, 0]));
    this.itxt_value.autoFitToBounds = true;
    this.itxt_value.multiline = false;
    this.itxt_value.focusIn.add(this.bindFunction(this.onFocusInTextfield));
    this.itxt_value.click.add(this.bindFunction(this.onClickValue));
    this.itxt_value.focusOut.add(this.bindFunction(this.onFocusOutTextfield));
    this.itxt_value.keyDown.add(this.bindFunction(this.onKeyDownTextfield));
    this.itxt_value.selectable = true;
    this.itxt_value.restrict = "0-9";
    this._maxValue = e;
    this.selectionSlider.setMaxIndex(e);
    this._sliderData.maxValue = Math.floor(e / this._stepSize);
    this.donateComponent.mc_icon.gotoAndStop(t);
    this.donateComponent.mc_icon.mouseChildren = false;
    this.donateComponent.mc_icon.toolTipText = this.toolTipText(t);
    this.itxt_value.tabIndex = i;
    this._disabledToolTipText = n;
    this.donateComponent.btn_remove.basicButton = new o.BasicButton(this.donateComponent.btn_remove, this._maxValue > 0);
    this.donateComponent.btn_add.basicButton = new o.BasicButton(this.donateComponent.btn_add, this._maxValue > 0);
    if (this.donateComponent.btn_max) {
      this.donateComponent.btn_max.basicButton = new o.BasicButton(this.donateComponent.btn_max, this._maxValue > 0);
      this.donateComponent.btn_max.toolTipText = "max";
    }
    this._selectionSlider.addEventListener(C.SliderEvent.VALUE_CHANGED, this.bindFunction(this.onValueChanged));
    this.donateComponent.addEventListener(E.CLICK, this.bindFunction(this.onClick));
    this.donateComponent.addEventListener(E.MOUSE_OVER, this.bindFunction(this.showToolTip));
    this.donateComponent.addEventListener(E.MOUSE_OUT, this.bindFunction(this.hideToolTip));
    this._selectionSlider.setSelectedIndex(0);
    this._selectionSlider.dispatchEvent(new C.SliderEvent(C.SliderEvent.VALUE_CHANGED, this._selectionSlider.selectedIndex));
  };
  CastleResourceCollectorComponent.prototype.resetWithValues = function (e, t, i, n = null) {
    this._maxValue = e;
    this._sliderData.maxValue = Math.floor(e / this._stepSize);
    this.selectionSlider.setMaxIndex(e);
    this.donateComponent.mc_icon.gotoAndStop(t);
    this.donateComponent.mc_icon.mouseChildren = false;
    this.donateComponent.mc_icon.toolTipText = this.toolTipText(t);
    this.itxt_value.tabIndex = i;
    this.setAmountText();
    this._disabledToolTipText = n;
    if (this.donateComponent.btn_max) {
      _.ButtonHelper.enableButton(this.donateComponent.btn_max, this._maxValue > 0);
    }
    _.ButtonHelper.enableButton(this.donateComponent.btn_remove, this._maxValue > 0);
    _.ButtonHelper.enableButton(this.donateComponent.btn_add, this._maxValue > 0);
  };
  CastleResourceCollectorComponent.prototype.toolTipText = function (e) {
    var t = b.CollectableEnum.UNKNOWN;
    switch (e) {
      case CastleResourceCollectorComponent.WOOD:
        t = b.CollectableEnum.WOOD;
        break;
      case CastleResourceCollectorComponent.STONE:
        t = b.CollectableEnum.STONE;
        break;
      case CastleResourceCollectorComponent.FOOD:
        t = b.CollectableEnum.FOOD;
        break;
      case CastleResourceCollectorComponent.COAL:
        t = b.CollectableEnum.COAL;
        break;
      case CastleResourceCollectorComponent.OIL:
        t = b.CollectableEnum.OIL;
        break;
      case CastleResourceCollectorComponent.GLASS:
        t = b.CollectableEnum.GLASS;
        break;
      case CastleResourceCollectorComponent.IRON:
        t = b.CollectableEnum.IRON;
        break;
      case CastleResourceCollectorComponent.C1:
        t = b.CollectableEnum.C1;
        break;
      case CastleResourceCollectorComponent.C2:
        t = b.CollectableEnum.C2;
        break;
      case CastleResourceCollectorComponent.HONEY:
        t = b.CollectableEnum.HONEY;
        break;
      case CastleResourceCollectorComponent.MEAD:
        t = b.CollectableEnum.MEAD;
        break;
      case CastleResourceCollectorComponent.BEEF:
        t = b.CollectableEnum.BEEF;
    }
    if (t == b.CollectableEnum.UNKNOWN) {
      return "";
    } else {
      return D.CollectableHelper.createVO(t, 0, -1).getTooltipTextId();
    }
  };
  CastleResourceCollectorComponent.prototype.onClickValue = function (e) {
    this.itxt_value.textContentVO = new u.LocalizedNumberVO(this.getSelectedAmount());
    this.itxt_value.setSelection(0, this.itxt_value.text.length);
    this.itxt_value.restrict = "0-9";
    this.itxt_value.maxChars = 10;
  };
  CastleResourceCollectorComponent.prototype.onKeyDownTextfield = function (e) {
    e.stopPropagation();
    if (e.key == r.Keyboard.ENTER) {
      document.activeElement.blur();
    }
  };
  CastleResourceCollectorComponent.prototype.onFocusInTextfield = function (e) {
    if (this.isEnabled) {
      this.itxt_value.textContentVO = new u.LocalizedNumberVO(this.getSelectedAmount());
      this.itxt_value.setSelection(0, this.itxt_value.text.length);
      this.itxt_value.restrict = "0-9";
      this.itxt_value.maxChars = 10;
    }
  };
  CastleResourceCollectorComponent.prototype.onFocusOutTextfield = function (e) {
    if (e) {
      if (this.itxt_value.text == "") {
        this.itxt_value.textContentVO = new p.NumberVO(0);
      }
      this.itxt_value.restrict = "0-9";
      this._selectionSlider.sliderDown = true;
      var t = this.itxt_value.text.split("/");
      var i = parseInt(t[0].replace(/\D/g, ""));
      this._selectionSlider.setSelectedIndex(Math.floor(i / this._stepSize));
      this.setAmountText();
      this._selectionSlider.sliderDown = false;
    }
  };
  CastleResourceCollectorComponent.prototype.enableComponent = function (t) {
    e.prototype.enableComponent.call(this, t);
    this._selectionSlider.enableComponent = t;
    this.donateComponent.mouseChildren = t;
    this.donateComponent.mouseEnabled = true;
    if (this._disabledToolTipText && !t) {
      this.donateComponent.toolTipText = this._disabledToolTipText;
    } else {
      this.donateComponent.toolTipText = null;
    }
    if (this.itxt_value) {
      this.itxt_value.type = t ? l.TextFieldType.INPUT : l.TextFieldType.DYNAMIC;
    }
  };
  CastleResourceCollectorComponent.prototype.setAmountText = function () {
    if (this.itxt_value.model != null) {
      this.itxt_value.restrict = null;
      this.itxt_value.maxChars = Number.MAX_VALUE;
      this.itxt_value.textContentVO = new d.LocalizedTextVO(s.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [new u.LocalizedNumberVO(this.getSelectedAmount()), new u.LocalizedNumberVO(this._maxValue)]);
      this.itxt_value.verticalAlign = O.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    }
    if (this._maxValue > 0) {
      this.enableComponent(this.isEnabled);
    } else {
      this.enableComponent(false);
    }
  };
  CastleResourceCollectorComponent.prototype.getSelectedAmount = function () {
    return h.int(this._selectionSlider.selectedIndex * this._stepSize);
  };
  CastleResourceCollectorComponent.prototype.onValueChanged = function (e) {
    this.setAmountText();
    if (this._notifyValueChange) {
      var t = new g.CastleResourceCollectorEvent(g.CastleResourceCollectorEvent.VALUE_CHANGE_NOTIFY);
      t.newValue = Math.floor(e.selectedValue / this._stepSize) * this._stepSize;
      this.dispatcher.dispatchEvent(t);
    }
  };
  CastleResourceCollectorComponent.prototype.onClick = function (e) {
    this._selectionSlider.sliderDown = true;
    switch (e.target) {
      case this.donateComponent.btn_add:
        this._selectionSlider.setSelectedIndex(this._selectionSlider.selectedIndex + 1);
        break;
      case this.donateComponent.btn_remove:
        this._selectionSlider.setSelectedIndex(this._selectionSlider.selectedIndex - 1);
        break;
      case this.donateComponent.btn_max:
        this._selectionSlider.setSelectedIndex(this._selectionSlider.maxSliderSteps);
    }
    this._selectionSlider.sliderDown = false;
  };
  CastleResourceCollectorComponent.prototype.destroy = function () {
    this.removeAllEventListeners();
    this.resetValue();
    e.prototype.destroy.call(this);
  };
  CastleResourceCollectorComponent.prototype.removeAllEventListeners = function () {
    this._selectionSlider.removeEventListener(C.SliderEvent.VALUE_CHANGED, this.bindFunction(this.onValueChanged));
    if (this.itxt_value) {
      this.itxt_value.focusIn.remove(this.bindFunction(this.onFocusInTextfield));
      this.itxt_value.focusOut.remove(this.bindFunction(this.onFocusOutTextfield));
      this.itxt_value.keyDown.remove(this.bindFunction(this.onKeyDownTextfield));
      I.CastleComponent.textFieldManager.unregisterTextFieldByReference(this.itxt_value);
      this.itxt_value = null;
    }
    this.donateComponent.removeEventListener(E.CLICK, this.bindFunction(this.onClick));
    this.donateComponent.removeEventListener(E.MOUSE_OVER, this.bindFunction(this.showToolTip));
    this.donateComponent.removeEventListener(E.MOUSE_OUT, this.bindFunction(this.hideToolTip));
  };
  Object.defineProperty(CastleResourceCollectorComponent.prototype, "selectionSlider", {
    get: function () {
      return this._selectionSlider;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleResourceCollectorComponent.prototype, "donateComponent", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleResourceCollectorComponent.prototype, "notifyValueChange", {
    set: function (e) {
      this._notifyValueChange = e;
    },
    enumerable: true,
    configurable: true
  });
  CastleResourceCollectorComponent.prototype.resetValue = function () {
    this._selectionSlider.setSelectedIndex(0);
    this.enableComponent(true);
  };
  CastleResourceCollectorComponent.prototype.showToolTip = function (e) {
    if (a.BasicToolTipManager.TOOLTIP_LABEL in e.target) {
      I.CastleComponent.layoutManager.tooltipManager.show(e.target.toolTipText, e.target);
    }
  };
  CastleResourceCollectorComponent.prototype.hideToolTip = function (e) {
    I.CastleComponent.layoutManager.tooltipManager.hide();
  };
  Object.defineProperty(CastleResourceCollectorComponent.prototype, "type", {
    get: function () {
      return this._type;
    },
    enumerable: true,
    configurable: true
  });
  CastleResourceCollectorComponent.WOOD = 1;
  CastleResourceCollectorComponent.STONE = 2;
  CastleResourceCollectorComponent.FOOD = 3;
  CastleResourceCollectorComponent.C1 = 4;
  CastleResourceCollectorComponent.C2 = 5;
  CastleResourceCollectorComponent.COAL = 6;
  CastleResourceCollectorComponent.OIL = 7;
  CastleResourceCollectorComponent.GLASS = 8;
  CastleResourceCollectorComponent.IRON = 9;
  CastleResourceCollectorComponent.FURY_DOUBLOON = 10;
  CastleResourceCollectorComponent.TIME_DOUBLOON = 11;
  CastleResourceCollectorComponent.HONEY = 12;
  CastleResourceCollectorComponent.MEAD = 13;
  CastleResourceCollectorComponent.BEEF = 14;
  return CastleResourceCollectorComponent;
}(m.CastleItemRenderer);
exports.CastleResourceCollectorComponent = y;
var b = require("./12.js");
var D = require("./45.js");
var I = require("./14.js");
var T = require("./343.js");
c.classImplementsInterfaces(y, "ICollectableRendererList");