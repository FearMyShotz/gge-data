Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./169.js");
var r = require("./232.js");
var l = require("./72.js");
var c = require("./344.js");
var u = require("./8.js");
var d = require("./899.js");
var p = require("./274.js");
var h = createjs.MouseEvent;
var g = function (e) {
  function CastleUnitAmountComponent() {
    var t = this;
    t._numberOfItems = 1;
    t._minAmount = 1;
    t._maxChars = 5;
    t._textfieldFocused = false;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(CastleUnitAmountComponent, e);
  CastleUnitAmountComponent.prototype.init = function (e, t, i = null) {
    this._unitPickerMc = t;
    this._buttonMaxMc = i;
    this._sliderData = new p.BasicSliderVO(e.sliderBar, e.btn_slider, 1, 1, e);
    this._sliderComponent = new C.ScrollComponent(this._sliderData, C.ScrollComponent.HORIZONTAL_SLIDER);
    this._sliderComponent.addEventListener(r.SliderEvent.VALUE_CHANGED, this.bindFunction(this.onSliderValueChange));
    this._pickerComponent = new d.UnitPicker(t);
    this._pickerComponent.disp.addEventListener(s.BasicPickerEvent.PICKER_CHANGE_VALUE, this.bindFunction(this.onPickerValueChange));
    this._pickerComponent.itxt_pick.focusIn.add(this.bindFunction(this.onPickerFocusIn));
    this._pickerComponent.itxt_pick.focusOut.add(this.bindFunction(this.onPickerFocusOut));
    this._pickerComponent.itxt_pick.click.add(this.bindFunction(this.onClickInPicker));
    this._pickerComponent.itxt_pick.keyDown.add(this.bindFunction(this.onPickerKeyDown));
    this._pickerComponent.itxt_pick.change.add(this.bindFunction(this.onPickerTextChanged));
    if (this._buttonMaxMc) {
      this._buttonMaxMc.addEventListener(h.CLICK, this.bindFunction(this.onMaxButtonClick));
    }
    if (this._unitPickerMc) {
      this._unitPickerMc.addEventListener(h.CLICK, this.bindFunction(this.onUnitPickerClick));
    }
    if (this._unitPickerMc.mc_selected) {
      this._unitPickerMc.mc_selected.visible = false;
    }
    if (this._unitPickerMc.bg) {
      this._unitPickerMc.bg.mouseChildren = false;
    }
  };
  CastleUnitAmountComponent.prototype.registerOnReturnKeyPressed = function (e) {
    this._onReturnKeyPressed = e;
  };
  CastleUnitAmountComponent.prototype.setNumberOfItems = function (e) {
    this._numberOfItems = a.int(Math.max(this.minAmount, e));
    this._pickerComponent.setNumItems(this._numberOfItems + (1 - this.minAmount));
    this._sliderData.maxValue = this._numberOfItems;
    this.setPickText(this.minAmount);
  };
  CastleUnitAmountComponent.prototype.setMaxNumberOfItems = function (e) {
    var t = this.getSelectedAmount();
    this.setNumberOfItems(e);
    this.setSelectedAmount(t);
  };
  CastleUnitAmountComponent.prototype.setSelectedAmount = function (e) {
    if (e < this._minAmount) {
      e = this._minAmount;
    } else if (e > this._numberOfItems) {
      e = this._numberOfItems;
    }
    this.setPickText(e);
  };
  CastleUnitAmountComponent.prototype.getSelectedAmount = function () {
    return a.int(this._pickerComponent.selectedValue + this.minAmount);
  };
  CastleUnitAmountComponent.prototype.selectTextfield = function () {
    if (!CastleUnitAmountComponent.isLimitedByTutorial && !o.currentBrowserInfo.isMobile) {
      this._pickerComponent.itxt_pick.setFocus();
      this._pickerComponent.itxt_pick.setSelection(0, this._pickerComponent.itxt_pick.text.length);
    }
  };
  CastleUnitAmountComponent.prototype.validatePickCount = function (e = false) {
    var t = this.getNumberFromPicker();
    if (t > this._pickerComponent.numItems - 1 + this._pickerComponent.minAmount) {
      this.setPickText(this._pickerComponent.numItems - 1 + this._pickerComponent.minAmount);
    } else if (!e && t < this._minAmount) {
      this.setPickText(this._minAmount);
    } else {
      this.setPickText(t);
    }
  };
  CastleUnitAmountComponent.prototype.setPickText = function (e) {
    this._pickerComponent.setValue(e);
    this._sliderComponent.setSelectedIndex(e - this.minAmount);
  };
  CastleUnitAmountComponent.prototype.getNumberFromPicker = function () {
    return a.int(this._pickerComponent.itxt_pick.text.replace(new RegExp(/[.,\s]/), ""));
  };
  CastleUnitAmountComponent.prototype.syncSliderFromPicker = function () {
    this._sliderComponent.setSelectedIndex(this._pickerComponent.selectedValue);
    this.dispatchEvent(new s.BasicPickerEvent(s.BasicPickerEvent.PICKER_CHANGE_VALUE));
  };
  CastleUnitAmountComponent.prototype.syncPickerFromSlider = function () {
    if (!this._textfieldFocused) {
      this._pickerComponent.selectedValue = this._sliderComponent.selectedIndex;
    }
    this.dispatchEvent(new s.BasicPickerEvent(s.BasicPickerEvent.PICKER_CHANGE_VALUE));
  };
  CastleUnitAmountComponent.prototype.enableComponent = function (e) {
    this.enableSliderComponent(e);
    this.enablePickerComponent(e);
    if (this.buttonMaxMc) {
      u.ButtonHelper.enableButton(this.buttonMaxMc, e);
    }
    this.updateMouseFocusForPickerComponent(e);
  };
  CastleUnitAmountComponent.prototype.enableSliderComponent = function (e) {
    this._sliderComponent.enableComponent = e;
  };
  CastleUnitAmountComponent.prototype.enablePickerComponent = function (e) {
    this._pickerComponent.enabled = e;
  };
  CastleUnitAmountComponent.prototype.destroy = function () {
    this._sliderComponent.dispose();
    this._sliderComponent.removeEventListener(r.SliderEvent.VALUE_CHANGED, this.bindFunction(this.onSliderValueChange));
    if (this._pickerComponent.itxt_pick) {
      this._pickerComponent.itxt_pick.focusIn.remove(this.bindFunction(this.onPickerFocusIn));
      this._pickerComponent.itxt_pick.focusOut.remove(this.bindFunction(this.onPickerFocusOut));
      this._pickerComponent.itxt_pick.click.remove(this.bindFunction(this.onClickInPicker));
      this._pickerComponent.itxt_pick.keyDown.remove(this.bindFunction(this.onPickerKeyDown));
      this._pickerComponent.itxt_pick.change.remove(this.bindFunction(this.onPickerTextChanged));
    }
    this._pickerComponent.dispose();
    if (this._pickerComponent.disp) {
      this._pickerComponent.disp.removeEventListener(s.BasicPickerEvent.PICKER_CHANGE_VALUE, this.bindFunction(this.onPickerValueChange));
    }
    if (this._buttonMaxMc) {
      this._buttonMaxMc.removeEventListener(h.CLICK, this.bindFunction(this.onMaxButtonClick));
    }
    if (this._unitPickerMc) {
      this._unitPickerMc.removeEventListener(h.CLICK, this.bindFunction(this.onUnitPickerClick));
    }
  };
  CastleUnitAmountComponent.prototype.onMaxButtonClick = function (e) {
    if (u.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this._buttonMaxMc:
          this._pickerComponent.selectMaxValue();
          c.AttackDialogTrackingHelper.getInstance().trackDetailCounter(c.AttackDialogTrackingHelper.TRACK_MANUAL_CLICK);
      }
    }
  };
  CastleUnitAmountComponent.prototype.onUnitPickerClick = function (e) {
    if (u.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this._unitPickerMc.bg:
          this._pickerComponent.itxt_pick.setFocus();
      }
    }
  };
  CastleUnitAmountComponent.prototype.onClickInPicker = function (e) {
    if (this._pickerComponent.itxt_pick.text != "") {
      this.validatePickCount();
    }
    if (!CastleUnitAmountComponent.isLimitedByTutorial) {
      this._pickerComponent.itxt_pick.setSelection(0, this._pickerComponent.itxt_pick.text.length);
    }
    this._pickerComponent.itxt_pick.restrict = "0-9";
    this._pickerComponent.itxt_pick.maxChars = this._maxChars;
    c.AttackDialogTrackingHelper.getInstance().trackDetailCounter(c.AttackDialogTrackingHelper.TRACK_MANUAL_CLICK);
  };
  CastleUnitAmountComponent.prototype.onPickerTextChanged = function (e) {
    if (this._pickerComponent.itxt_pick.text != "") {
      this.validatePickCount(true);
      this._sliderComponent.setSelectedIndex(this.getNumberFromPicker() - this.minAmount);
    } else {
      this._sliderComponent.setSelectedIndex(0);
    }
  };
  CastleUnitAmountComponent.prototype.onPickerKeyDown = function (e) {
    e.stopPropagation();
    if (e.key == o.Keyboard.ENTER) {
      document.activeElement.blur();
      if (!CastleUnitAmountComponent.isLimitedByTutorial && this._onReturnKeyPressed != null) {
        this._onReturnKeyPressed();
      }
    }
  };
  CastleUnitAmountComponent.prototype.onPickerFocusIn = function (e) {
    this.setPickText(this.getNumberFromPicker());
    this._pickerComponent.itxt_pick.restrict = "0-9";
    this._pickerComponent.itxt_pick.maxChars = this._maxChars;
    if (!CastleUnitAmountComponent.isLimitedByTutorial) {
      this._pickerComponent.itxt_pick.setSelection(0, this._pickerComponent.itxt_pick.text.length);
    }
    if (this._unitPickerMc.mc_selected) {
      this._unitPickerMc.mc_selected.visible = true;
    }
    this._textfieldFocused = true;
  };
  CastleUnitAmountComponent.prototype.onPickerFocusOut = function (e) {
    if (e) {
      this._textfieldFocused = false;
      this.validatePickCount();
      this._pickerComponent.selectedValue = this.getNumberFromPicker() - this.minAmount;
      this.onChangeUnitAmount();
      if (this._unitPickerMc.mc_selected) {
        this._unitPickerMc.mc_selected.visible = false;
      }
    }
  };
  CastleUnitAmountComponent.prototype.onChangeUnitAmount = function (e = null) {
    this.syncSliderFromPicker();
    this.setPickText(this.getSelectedAmount());
  };
  CastleUnitAmountComponent.prototype.onPickerValueChange = function (e) {
    this._sliderComponent.removeEventListener(r.SliderEvent.VALUE_CHANGED, this.bindFunction(this.onSliderValueChange));
    this.syncSliderFromPicker();
    this._sliderComponent.addEventListener(r.SliderEvent.VALUE_CHANGED, this.bindFunction(this.onSliderValueChange));
  };
  CastleUnitAmountComponent.prototype.onSliderValueChange = function (e) {
    this._pickerComponent.disp.removeEventListener(s.BasicPickerEvent.PICKER_CHANGE_VALUE, this.bindFunction(this.onPickerValueChange));
    this.syncPickerFromSlider();
    this._pickerComponent.disp.addEventListener(s.BasicPickerEvent.PICKER_CHANGE_VALUE, this.bindFunction(this.onPickerValueChange));
  };
  Object.defineProperty(CastleUnitAmountComponent.prototype, "stage", {
    get: function () {
      return this._unitPickerMc.stage;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUnitAmountComponent.prototype, "unitPickerMc", {
    get: function () {
      return this._unitPickerMc;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUnitAmountComponent.prototype, "buttonMaxMc", {
    get: function () {
      return this._buttonMaxMc;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUnitAmountComponent.prototype, "numberOfItems", {
    get: function () {
      return this._numberOfItems;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUnitAmountComponent.prototype, "minAmount", {
    get: function () {
      return this._minAmount;
    },
    set: function (e) {
      this._minAmount = e;
      this._pickerComponent.minAmount = e;
      this._sliderData.minValue = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUnitAmountComponent.prototype, "centerSliderButtonOnDefault", {
    set: function (e) {
      this._sliderComponent.centerButtonOnDefault = e;
    },
    enumerable: true,
    configurable: true
  });
  CastleUnitAmountComponent.prototype.updateMouseFocusForPickerComponent = function (e) {
    if (!e && this._pickerComponent.itxt_pick.originalTextField.isFocused) {
      this._disablePickerTextField = this._pickerComponent.itxt_pick.originalTextField;
      document.activeElement.blur();
    }
    if (this._disablePickerTextField && this._disablePickerTextField.selectable != e) {
      this._disablePickerTextField.selectable = e;
    }
  };
  CastleUnitAmountComponent.prototype.configureTextField = function (e, t = false) {
    this._pickerComponent.itxt_pick.autoFitToBounds = true;
    this._maxChars = e;
  };
  CastleUnitAmountComponent.prototype.enableTracking = function (e) {
    this._pickerComponent.enableTracking(e);
  };
  CastleUnitAmountComponent.prototype.setLooping = function (e) {
    this._pickerComponent.setLooping(e);
  };
  CastleUnitAmountComponent.isLimitedByTutorial = false;
  return CastleUnitAmountComponent;
}(l.CastleEventDispatcher);
exports.CastleUnitAmountComponent = g;
var C = require("./343.js");