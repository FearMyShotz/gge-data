Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./68.js");
var l = require("./73.js");
var c = function (e) {
  function LordScrollItem(t) {
    return e.call(this, t) || this;
  }
  n.__extends(LordScrollItem, e);
  LordScrollItem.prototype.customFillItem = function () {
    e.prototype.customFillItem.call(this);
    this.disp.mouseChildren = false;
    o.MovieClipHelper.clearMovieClip(this.disp.mc_lordHolder);
    this.updateLordPic();
  };
  LordScrollItem.prototype.setToolTipText = function (e) {
    this.disp.toolTipText = e;
  };
  LordScrollItem.prototype.updateLordPic = function () {
    o.MovieClipHelper.clearMovieClip(this.disp.mc_lordHolder);
    l.EquipmentIconHelper.addLordIcon(this.lordScrollItemVO.lordVO, this.disp.mc_lordHolder, 52, 58, null, true);
  };
  Object.defineProperty(LordScrollItem.prototype, "lordScrollItemVO", {
    get: function () {
      return this.scrollItemVO;
    },
    enumerable: true,
    configurable: true
  });
  LordScrollItem.prototype.showHighlight = function () {
    this.disp.bitmap_1.useFilters(r.BitmapFilterHelper.FILTER_GLOW_LORD_SCROLL_ITEM, false, 1);
  };
  LordScrollItem.prototype.hideHighlight = function () {
    this.disp.bitmap_1.useFilters(r.BitmapFilterHelper.NO_FILTER);
  };
  LordScrollItem.prototype.show = function () {
    e.prototype.show.call(this);
    if (this.disp.mc_lordHolder.warning) {
      this.disp.mc_lordHolder.warning.visible = true;
    }
  };
  LordScrollItem.prototype.hide = function () {
    e.prototype.hide.call(this);
    if (this.disp.mc_lordHolder.warning) {
      this.disp.mc_lordHolder.warning.visible = false;
    }
  };
  return LordScrollItem;
}(a.ScrollItem);
exports.LordScrollItem = c;
s.classImplementsInterfaces(c, "MovieClip");