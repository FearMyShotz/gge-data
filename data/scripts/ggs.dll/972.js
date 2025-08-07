Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./82.js");
var a = require("./503.js");
var s = require("./504.js");
var r = require("./505.js");
var o = require("./501.js");
var l = require("./500.js");
var u = require("./502.js");
var c = function () {
  function ValueChangerController(e, t, n) {
    this._value = 15;
    this.valueUpdatedSignal = new i.NoneValueSignal();
    this._elements = [];
    this._value = e;
    this._minValue = t;
    this._maxValue = n;
  }
  ValueChangerController.prototype.addValueComponent = function (e) {
    this._elements.push(e);
    e.updatedByUserSignal.add(this.bindFunction(this.userChangedData));
    e.updateValue(this._value);
  };
  ValueChangerController.prototype.userChangedData = function (e) {
    this.verifyInput(e);
    for (var t = 0; t < this._elements.length; t++) {
      this._elements[t].updateValue(this._value);
    }
    this.valueUpdatedSignal.signal();
  };
  ValueChangerController.prototype.verifyInput = function (e) {
    if (e < this._minValue) {
      this._value = this._minValue;
    } else if (e > this._maxValue) {
      this._value = this._maxValue;
    } else {
      this._value = e;
    }
  };
  ValueChangerController.prototype.addTextfield = function (e) {
    var t = new r.BasicTextfieldValueContainer(e);
    var n = new o.InputTextfieldValueComponent(this, this._minValue, this._maxValue, t);
    this.addValueComponent(n);
  };
  ValueChangerController.prototype.addButtons = function (e, t) {
    var n = new a.BasicButtonValueContainer(e);
    var i = new l.ButtonsValueComponent(this, this._minValue, this._maxValue, n, t);
    this.addValueComponent(i);
  };
  ValueChangerController.prototype.dispose = function () {
    for (var e = 0; e < this._elements.length; e++) {
      this._elements[e].dispose();
    }
    this.valueUpdatedSignal.removeAll();
  };
  ValueChangerController.prototype.addSlider = function (e) {
    var t = new s.BasicSliderValueContainer(e);
    var n = new u.SliderValueComponent(this, this._minValue, this._maxValue, t);
    this.addValueComponent(n);
  };
  Object.defineProperty(ValueChangerController.prototype, "value", {
    get: function () {
      return this._value;
    },
    enumerable: true,
    configurable: true
  });
  return ValueChangerController;
}();
exports.ValueChangerController = c;