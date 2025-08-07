Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./1.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./6.js");
var p = require("./881.js");
var h = function (e) {
  function InputMaxPicker(t) {
    var i = this;
    i._minAmount = 1;
    CONSTRUCTOR_HACK;
    (i = e.call(this, t) || this).initTextField();
    return i;
  }
  n.__extends(InputMaxPicker, e);
  InputMaxPicker.prototype.initTextField = function () {
    this._disp.txt_pick.type = l.TextFieldType.INPUT;
    this._itxt_pick = this.textFieldManager.registerTextField(this._disp.txt_pick, new u.LocalizedTextVO("textMaxPicker_value", ["", 0, 0]), new a.InternalGGSTextFieldConfigVO(true));
    this._itxt_pick.textAlign = o.GGSTextAlign.CENTER;
    this.enableTextfield(this._isEnabled);
    this.itxt_pick.focusIn.add(this.bindFunction(this.onPickerFocusIn));
    this.itxt_pick.focusOut.add(this.bindFunction(this.onPickerFocusOut));
    this.itxt_pick.click.add(this.bindFunction(this.onClickInPicker));
    this.itxt_pick.keyDown.add(this.bindFunction(this.onPickerKeyDown));
  };
  InputMaxPicker.prototype.onClickInPicker = function (e = null) {
    this.itxt_pick.setSelection(0, this.itxt_pick.text.length);
    this.itxt_pick.restrict = "0-9";
    this.itxt_pick.maxChars = 3;
    this.itxt_pick.textContentVO = new c.LocalizedNumberVO(this._selectedValue + 1);
  };
  InputMaxPicker.prototype.onPickerKeyDown = function (e) {
    e.stopPropagation();
    if (e.keyCode == r.Keyboard.ENTER) {
      this.disp.stage.focus = null;
    }
  };
  InputMaxPicker.prototype.onPickerFocusIn = function (e) {
    this.onClickInPicker();
  };
  InputMaxPicker.prototype.onPickerFocusOut = function (e) {
    this.setFromInput();
  };
  InputMaxPicker.prototype.setFromInput = function () {
    this.selectedValue = Math.max(0, Math.min(this._maxNumItems - 1, d.int(this._itxt_pick.text) - 1));
    this.updateInfo();
  };
  InputMaxPicker.prototype.updateInfo = function () {
    this.initTextField();
    this.itxt_pick.restrict = null;
    this.itxt_pick.maxChars = 20;
    if (this._numItems == 0) {
      this._itxt_pick.textContentVO = new u.LocalizedTextVO("textMaxPicker_value", ["", 0, 0]);
    } else if (this.selectedValue > -1) {
      this._itxt_pick.textContentVO = new u.LocalizedTextVO("textMaxPicker_value", ["", this.selectedValue + 1, this._maxNumItems]);
    }
  };
  Object.defineProperty(InputMaxPicker.prototype, "enabled", {
    get: function () {
      return Object.getOwnPropertyDescriptor(p.BasicPicker.prototype, "enabled").get.call(this);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.BasicPicker.prototype, "enabled").set.call(this, e);
      this.enableTextfield(e);
    },
    enumerable: true,
    configurable: true
  });
  InputMaxPicker.prototype.enableTextfield = function (e) {
    if (this._itxt_pick) {
      this._itxt_pick.tabEnabled = e;
      this._itxt_pick.mouseEnabled = e;
    }
  };
  Object.defineProperty(InputMaxPicker.prototype, "textFieldManager", {
    get: function () {
      return s.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InputMaxPicker.prototype, "itxt_pick", {
    get: function () {
      return this._itxt_pick;
    },
    enumerable: true,
    configurable: true
  });
  InputMaxPicker.prototype.dispose = function () {
    e.prototype.dispose.call(this);
    this.textFieldManager.unregisterTextFieldByReference(this._itxt_pick);
  };
  Object.defineProperty(InputMaxPicker.prototype, "minAmount", {
    get: function () {
      return this._minAmount;
    },
    set: function (e) {
      this._minAmount = e;
    },
    enumerable: true,
    configurable: true
  });
  return InputMaxPicker;
}(p.BasicPicker);
exports.InputMaxPicker = h;