Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./969.js");
var s = function (e) {
  function CastleHunterValueChangerController(t, i, n) {
    return e.call(this, t, i, n) || this;
  }
  n.__extends(CastleHunterValueChangerController, e);
  CastleHunterValueChangerController.prototype.addSlider = function (e, t = 0) {
    var i = new a.CastleSliderValueComponent(this, this._minValue, this._maxValue, e, "", t);
    this.addValueComponent(i);
  };
  return CastleHunterValueChangerController;
}(o.ValueChangerController);
exports.CastleHunterValueChangerController = s;