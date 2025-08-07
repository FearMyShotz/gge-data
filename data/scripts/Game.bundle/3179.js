Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = function (e) {
  function CastleMercenaryItemScrollList(t, i = null) {
    var n = this;
    n.tooltipUpdateNeeded = false;
    CONSTRUCTOR_HACK;
    return n = e.call(this, t, i) || this;
  }
  n.__extends(CastleMercenaryItemScrollList, e);
  CastleMercenaryItemScrollList.prototype.onMouseWheel = function (t) {
    this.tooltipUpdateNeeded = false;
    e.prototype.onMouseWheel.call(this, t);
    if (a.instanceOfClass(t.target, "MovieClip") && this.tooltipUpdateNeeded && t.target.toolTipText) {
      r.CastleLayoutManager.getInstance().tooltipManager.show(t.target.toolTipText, t.target);
    }
  };
  CastleMercenaryItemScrollList.prototype.naviUp = function () {
    if (this._currentStartIndex > 0) {
      this.tooltipUpdateNeeded = true;
    }
    e.prototype.naviUp.call(this);
  };
  CastleMercenaryItemScrollList.prototype.naviDown = function () {
    if (this._currentStartIndex < this._itemCount - this._itemsVisibleAtOnce) {
      this.tooltipUpdateNeeded = true;
    }
    e.prototype.naviDown.call(this);
  };
  return CastleMercenaryItemScrollList;
}(o.ItemScrollList);
exports.CastleMercenaryItemScrollList = s;
var r = require("./17.js");