Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = createjs.MovieClip;
var a = createjs.MouseEvent;
var s = require("./73.js");
var r = function (e) {
  function CastleEquipmentSlotItem(t, i) {
    var n = e.call(this) || this;
    n._disp = t;
    n._equipmentVO = i;
    n._disp.mc_hover.mouseEnabled = false;
    n._disp.mc_down.mouseEnabled = false;
    n._disp.mc_star_small.mouseEnabled = false;
    n._disp.mc_star_active.mouseEnabled = false;
    n._disp.mc_star_inactive.mouseEnabled = false;
    n._disp.removeAllEventListeners();
    n._disp.addEventListener(a.MOUSE_DOWN, n.bindFunction(n.onMouseFavEqDown));
    n._disp.addEventListener(a.MOUSE_UP, n.bindFunction(n.onMouseFavEqUp));
    n._disp.addEventListener(a.ROLL_OVER, n.bindFunction(n.onMouseFavEqOver));
    n._disp.addEventListener(a.ROLL_OUT, n.bindFunction(n.onMouseFavEqOut));
    n._disp.mc_hover.visible = false;
    n._disp.mc_down.visible = false;
    return n;
  }
  n.__extends(CastleEquipmentSlotItem, e);
  CastleEquipmentSlotItem.prototype.favModeOn = function (e) {
    this._markAsFavoriteModeEnabled = true;
    this._disp.mc_star_small.visible = false;
    this._disp.mc_star_active.visible = e;
    this._disp.mc_star_inactive.visible = !e;
  };
  CastleEquipmentSlotItem.prototype.favModeOff = function (e) {
    this._markAsFavoriteModeEnabled = false;
    this._disp.mc_star_small.visible = e;
    this._disp.mc_star_active.visible = false;
    this._disp.mc_star_inactive.visible = false;
  };
  CastleEquipmentSlotItem.prototype.onMouseFavEqDown = function (e) {
    this._disp.mc_down.visible = true;
    this._disp.mc_hover.visible = false;
    if (this._onTouchDownCallback) {
      this._onTouchDownCallback(e);
    }
  };
  CastleEquipmentSlotItem.prototype.onMouseFavEqUp = function (e) {
    if (!this._isRollOut) {
      this._disp.mc_down.visible = false;
      this._disp.mc_hover.visible = true;
    }
  };
  CastleEquipmentSlotItem.prototype.onMouseFavEqOver = function (e) {
    if (this._markAsFavoriteModeEnabled) {
      this._disp.mc_hover.visible = true;
    }
    this._isRollOut = false;
    s.EquipmentIconHelper.showToolTip(this._disp, this._equipmentVO);
  };
  CastleEquipmentSlotItem.prototype.onMouseFavEqOut = function (e) {
    if (this._markAsFavoriteModeEnabled) {
      this._disp.mc_hover.visible = false;
    }
    this._isRollOut = true;
  };
  Object.defineProperty(CastleEquipmentSlotItem.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEquipmentSlotItem.prototype, "onTouchDownCallback", {
    set: function (e) {
      this._onTouchDownCallback = e;
    },
    enumerable: true,
    configurable: true
  });
  return CastleEquipmentSlotItem;
}(o);
exports.CastleEquipmentSlotItem = r;