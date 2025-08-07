Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./3.js");
var s = require("./82.js");
var r = require("./59.js");
var l = require("./14.js");
var c = function (e) {
  function ModernTextScrollComponent(t, i) {
    var n = e.call(this) || this;
    n.itxt_text = l.CastleComponent.textFieldManager.registerTextField(i, new a.TextVO(""));
    var o = Math.floor(n.itxt_text.height / (n.itxt_text.textHeight / n.itxt_text.numLines - 4));
    n._scrollComponent = new s.ModernSliderScrollComponent(t, new r.DynamicSizeScrollStrategyVertical(true, o));
    return n;
  }
  n.__extends(ModernTextScrollComponent, e);
  ModernTextScrollComponent.prototype.onShow = function () {
    this._scrollComponent.init(1, Math.floor(this.itxt_text.maxScrollV), 2, 2);
    this._scrollComponent.setVisibility(Math.floor(this.itxt_text.maxScrollV) > 1);
    this._scrollComponent.show();
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScrollValueChange));
    this.itxt_text.change.add(this.bindFunction(this.onTextChanged));
  };
  ModernTextScrollComponent.prototype.onHide = function () {
    this._scrollComponent.hide();
    this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScrollValueChange));
    this.itxt_text.change.remove(this.bindFunction(this.onTextChanged));
  };
  ModernTextScrollComponent.prototype.onTextChanged = function (e) {
    this._scrollComponent.init(1, Math.floor(this.itxt_text.maxScrollV), 2, 2);
    this._scrollComponent.setVisibility(Math.floor(this.itxt_text.maxScrollV) > 1);
    this._scrollComponent.scrollToValue(this.itxt_text.scrollV, false);
  };
  ModernTextScrollComponent.prototype.onScrollValueChange = function () {
    this.itxt_text.scrollV = o.MathBase.clamp(this._scrollComponent.currentValue, 1, this.itxt_text.maxScrollV);
  };
  ModernTextScrollComponent.prototype.scrollToStart = function () {
    this._scrollComponent.scrollToValue(0);
  };
  ModernTextScrollComponent.prototype.setText = function (e) {
    this.itxt_text.textContentVO.stringValue = e;
    this.onShow();
    this._scrollComponent.scrollToValue(0);
  };
  Object.defineProperty(ModernTextScrollComponent.prototype, "scrollComponent", {
    get: function () {
      return this._scrollComponent;
    },
    enumerable: true,
    configurable: true
  });
  return ModernTextScrollComponent;
}(l.CastleComponent);
exports.ModernTextScrollComponent = c;