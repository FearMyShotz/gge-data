Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./969.js");
var s = function (e) {
  function CastleTributeValueChangerController(t, i, n, o = "") {
    var a = e.call(this, t, i, n) || this;
    a._sliderButtonTooltipID = o;
    return a;
  }
  n.__extends(CastleTributeValueChangerController, e);
  CastleTributeValueChangerController.prototype.addSlider = function (e) {
    var t = new a.CastleSliderValueComponent(this, this._minValue, this._maxValue, e, this._sliderButtonTooltipID);
    this.addValueComponent(t);
  };
  CastleTributeValueChangerController.prototype.setValue = function (e) {
    this.userChangedData(e);
  };
  return CastleTributeValueChangerController;
}(o.ValueChangerController);
exports.CastleTributeValueChangerController = s;