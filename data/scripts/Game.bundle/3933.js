Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function TwoStateButtonHover(t = null, i = true) {
    var n = e.call(this, t, i) || this;
    n._disp.mouse_over.visible = false;
    return n;
  }
  n.__extends(TwoStateButtonHover, e);
  TwoStateButtonHover.prototype.onRollOut = function (e) {
    this._disp.mouse_over.visible = false;
  };
  TwoStateButtonHover.prototype.selected = function () {
    e.prototype.selected.call(this);
  };
  TwoStateButtonHover.prototype.deselected = function () {
    e.prototype.deselected.call(this);
    this._disp.mouse_over.visible = false;
  };
  TwoStateButtonHover.prototype.onRollOver = function (e) {
    this._disp.mouse_over.visible = true;
  };
  return TwoStateButtonHover;
}(require("./49.js").TwoStateButton);
exports.TwoStateButtonHover = o;