Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./1.js");
var a = createjs.MouseEvent;
var s = function () {
  function PaginationMouseWheel(e, t) {
    this._scrollLayer = e;
    this._pagination = t;
  }
  PaginationMouseWheel.prototype.update = function () {};
  PaginationMouseWheel.prototype.disable = function () {
    this._scrollLayer.removeEventListener(a.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
  };
  PaginationMouseWheel.prototype.enable = function () {
    this._scrollLayer.addEventListener(a.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
  };
  PaginationMouseWheel.prototype.onMouseWheel = function (e) {
    var t = false;
    if (e.delta < 0) {
      t = this._pagination.scrollLeft();
    } else if (e.delta > 0) {
      t = this._pagination.scrollRight();
    }
    if (t) {
      l.TooltipManagerFacade.hideAllTooltips();
      if (o.instanceOfClass(e.target, "MovieClip") && e.target.toolTipText) {
        r.CastleLayoutManager.getInstance().tooltipManager.show(e.target.toolTipText, e.target);
      }
    }
  };
  PaginationMouseWheel.prototype.onClick = function (e) {
    return false;
  };
  return PaginationMouseWheel;
}();
exports.PaginationMouseWheel = s;
var r = require("./17.js");
var l = require("./200.js");
n.classImplementsInterfaces(s, "IPaginationControl");