Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2925.js");
var r = require("./969.js");
var l = function (e) {
  function CastleValueChangerController(t, i, n) {
    return e.call(this, t, i, n) || this;
  }
  n.__extends(CastleValueChangerController, e);
  CastleValueChangerController.prototype.addButtons = function (e, t) {
    var i = new s.CastleBasicButtonValueContainer(e);
    var n = new o.ButtonsValueComponent(this, this._minValue, this._maxValue, i, t);
    this.addValueComponent(n);
  };
  CastleValueChangerController.prototype.addSlider = function (e, t = 0) {
    var i = new r.CastleSliderValueComponent(this, this._minValue, this._maxValue, e, "", t);
    this.addValueComponent(i);
  };
  Object.defineProperty(CastleValueChangerController.prototype, "value", {
    get: function () {
      return this._value;
    },
    set: function (e) {
      this.userChangedData(e);
    },
    enumerable: true,
    configurable: true
  });
  return CastleValueChangerController;
}(a.ValueChangerController);
exports.CastleValueChangerController = l;