Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = createjs.MouseEvent;
var o = function () {
  function LordEffectTooltipTrigger(e, t = false) {
    this._disp = e;
    this._disp.mouseChildren = false;
    this._filterStrategy = a.LordEffectHelper.STRATEGY_FULL_ACTIVE;
    if (t) {
      s.CastleMovieClipHelper.createHitArea(this._disp);
    }
  }
  LordEffectTooltipTrigger.prototype.show = function () {
    this._disp.addEventListener(n.MOUSE_OVER, this.bindFunction(this.onMouseOver));
  };
  LordEffectTooltipTrigger.prototype.hide = function () {
    this._disp.removeEventListener(n.MOUSE_OVER, this.bindFunction(this.onMouseOver));
  };
  LordEffectTooltipTrigger.prototype.onMouseOver = function (e) {
    if (this._currentLord) {
      a.LordEffectHelper.showToolTip(this._currentLord, this._disp, this._currentSourceArea, this._currentTargetArea, this._filterStrategy, this._includeEquipment);
    }
  };
  LordEffectTooltipTrigger.prototype.setProperties = function (e, t = null, i = null, n = null, o = true) {
    this._currentLord = e;
    this._currentSourceArea = t;
    this._currentTargetArea = i;
    this._filterStrategy = n || a.LordEffectHelper.STRATEGY_FULL_ACTIVE;
    this._includeEquipment = o;
  };
  return LordEffectTooltipTrigger;
}();
exports.LordEffectTooltipTrigger = o;
var a = require("./133.js");
var s = require("./41.js");