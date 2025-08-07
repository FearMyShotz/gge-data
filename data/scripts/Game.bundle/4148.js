Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./272.js");
var a = function (e) {
  function BackGroundAppearanceItem(t, i) {
    return e.call(this, t, i) || this;
  }
  n.__extends(BackGroundAppearanceItem, e);
  BackGroundAppearanceItem.prototype.setItem = function () {
    var e = false;
    if (this._tmapNodeVO && o.TMapHelper.isUnderworldMap(this._tmapNodeVO.mapID)) {
      e = this._tmapNodeVO.isUnlocked;
    } else if (this._tmapNodeVO) {
      e = this._tmapNodeVO.isDefeated;
    }
    this._disp.gotoAndStop(e ? 2 : 1);
  };
  return BackGroundAppearanceItem;
}(require("./1866.js").SeasonAppearanceItem);
exports.BackGroundAppearanceItem = a;