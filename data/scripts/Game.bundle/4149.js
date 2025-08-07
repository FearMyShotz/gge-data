Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function DecoColumnAppearanceItem(t, i) {
    return e.call(this, t, i) || this;
  }
  n.__extends(DecoColumnAppearanceItem, e);
  DecoColumnAppearanceItem.prototype.setItem = function () {
    if (this._tmapNodeVO.isDefeated) {
      this._disp.visible = true;
    }
  };
  return DecoColumnAppearanceItem;
}(require("./1864.js").SeasonAppearanceItem);
exports.DecoColumnAppearanceItem = o;