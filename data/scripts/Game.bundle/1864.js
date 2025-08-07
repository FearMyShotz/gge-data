Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function SeasonAppearanceItem(e, t) {
    this._tmapNodeVO = t;
    this._disp = e;
    this.setItem();
  }
  SeasonAppearanceItem.prototype.updateVO = function (e) {
    if (e) {
      this._tmapNodeVO = e;
    }
    this.setItem();
  };
  SeasonAppearanceItem.prototype.getNodeVO = function () {
    return this._tmapNodeVO;
  };
  SeasonAppearanceItem.prototype.setItem = function () {
    throw new o.AbstractMethodError();
  };
  SeasonAppearanceItem.prototype.dispose = function () {};
  return SeasonAppearanceItem;
}();
exports.SeasonAppearanceItem = n;
var o = require("./69.js");