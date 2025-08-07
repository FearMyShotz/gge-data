Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./1.js");
var a = require("./3.js");
var s = function () {
  function SelectInputFieldComponent(e, t, i) {
    this._disp = e;
    this.defaultText = i;
    this.searchField = n.GoodgameTextFieldManager.getInstance().registerTextField(this._disp.txt_value, new a.TextVO(this.defaultText));
    this.onValueChangedFunction = t;
    this._disp.mc_selected.visible = false;
    this.searchField.type = o.TextFieldType.INPUT;
    this.searchField.selectable = true;
    this.searchField.keyDown.add(this.bindFunction(this.inputKeyDown));
    this.searchField.focusIn.add(this.bindFunction(this.onFocusInSearchText));
    this.searchField.focusOut.add(this.bindFunction(this.onFocusOutSearchText));
  }
  SelectInputFieldComponent.prototype.onHide = function () {
    if (this.searchField) {
      this.searchField.keyDown.remove(this.bindFunction(this.inputKeyDown));
      this.searchField.focusIn.remove(this.bindFunction(this.onFocusInSearchText));
      this.searchField.focusOut.remove(this.bindFunction(this.onFocusOutSearchText));
    }
  };
  SelectInputFieldComponent.prototype.onFocusInSearchText = function (e) {
    if (this.searchField.text == this.defaultText) {
      this.searchField.clearText();
    }
    this._disp.mc_selected.visible = true;
  };
  SelectInputFieldComponent.prototype.onFocusOutSearchText = function (e) {
    if (this.searchField.text == "") {
      this.searchField.textContentVO = new a.TextVO(this.defaultText);
    }
    this._disp.mc_selected.visible = false;
    if (this.onValueChangedFunction) {
      this.onValueChangedFunction();
    }
  };
  SelectInputFieldComponent.prototype.deselect = function () {
    this._disp.mc_selected.visible = false;
  };
  SelectInputFieldComponent.prototype.inputKeyDown = function (e) {
    if (e.key == "Enter") {
      if (this.onValueChangedFunction) {
        this.onValueChangedFunction();
      }
      this._disp.mc_selected.visible = false;
    }
  };
  Object.defineProperty(SelectInputFieldComponent.prototype, "text", {
    get: function () {
      return this.searchField.text;
    },
    enumerable: true,
    configurable: true
  });
  SelectInputFieldComponent.prototype.updateText = function (e) {
    this.defaultText = e;
    this.searchField.textContentVO.stringValue = this.defaultText;
  };
  return SelectInputFieldComponent;
}();
exports.SelectInputFieldComponent = s;