Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./103.js");
var s = require("./3.js");
var r = function (e) {
  function InputTextfieldValueComponent(t, n, i, a) {
    var r = e.call(this, t, n, i) || this;
    r._textfieldContainer = a;
    r._textfieldContainer.getTextfield().addEventListener(s.KeyboardEvent.KEY_UP, r.bindFunction(r.onPlayerInput));
    return r;
  }
  i.__extends(InputTextfieldValueComponent, e);
  InputTextfieldValueComponent.prototype.onPlayerInput = function (e) {
    var t = this._textfieldContainer.getTextfield().text;
    if (e.code != "ArrowRight" && e.code != "ArrowLeft" && this.validateInput(t)) {
      var n = parseInt(t);
      this.dispatchUpdateByUserSignal(n);
    }
  };
  InputTextfieldValueComponent.prototype.validateInput = function (e) {
    var t;
    try {
      t = parseInt(e);
    } catch (e) {
      return false;
    }
    return !isNaN(t);
  };
  InputTextfieldValueComponent.prototype.updateValue = function (t) {
    e.prototype.updateValue.call(this, t);
    this._textfieldContainer.getTextfield().text = t.toString();
    this._textfieldContainer.getTextfield().setSelection(this._textfieldContainer.getTextfield().length, this._textfieldContainer.getTextfield().length);
  };
  InputTextfieldValueComponent.prototype.dispose = function () {
    e.prototype.dispose.call(this);
    this._textfieldContainer.getTextfield().removeEventListener(s.KeyboardEvent.KEY_UP, this.bindFunction(this.onPlayerInput));
  };
  return InputTextfieldValueComponent;
}(a.AValueComponent);
exports.InputTextfieldValueComponent = r;