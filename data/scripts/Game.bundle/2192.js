Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./16.js");
var a = require("./276.js");
var s = require("./591.js");
var r = createjs.Rectangle;
var l = function (e) {
  function LordEffectCapGroupItem(t, i = null, n = o.ClientConstColor.FONT_DEFAULT_COLOR, s = o.ClientConstColor.FONT_DEFAULT_COLOR) {
    var r = e.call(this, t, i, n, s) || this;
    r._detailItems = [];
    r._layout = new a.SimpleLayoutStrategyVertical();
    return r;
  }
  n.__extends(LordEffectCapGroupItem, e);
  LordEffectCapGroupItem.prototype.applyText = function (t, i = false, n = 0) {
    e.prototype.applyText.call(this, t, i, n);
    this._contextBounds = new r(0, this.itxt_effect.textHeight, 0, 0);
    if (this._detailItems.length > 0) {
      this.applyLayout();
    }
  };
  LordEffectCapGroupItem.prototype.addEffectItem = function (e) {
    this.disp.addChild(e.disp);
    this._detailItems.push(e);
    this.applyLayout();
  };
  LordEffectCapGroupItem.prototype.applyLayout = function () {
    this._layout.apply(this._detailItems, this._contextBounds);
    var e = this._layout.calculateTotalHeight(this._detailItems);
    this.disp.mc_textBackground.height = this.itxt_effect.textHeight + e;
  };
  return LordEffectCapGroupItem;
}(s.LordEffectItem);
exports.LordEffectCapGroupItem = l;