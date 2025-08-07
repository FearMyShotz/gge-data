Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./31.js");
var c = require("./104.js");
var u = require("./19.js");
var d = createjs.Point;
var p = function (e) {
  function CIBlueprintScrollItem(t) {
    var i = this;
    CONSTRUCTOR_HACK;
    (i = e.call(this, t) || this).renderList = new c.CollectableRendererList();
    return i;
  }
  n.__extends(CIBlueprintScrollItem, e);
  CIBlueprintScrollItem.prototype.customFillItem = function () {
    o.MovieClipHelper.clearMovieClip(this.disp);
    var e = new h.CollectableItemConstructionItemBlueprintVO();
    e.blueprintVO = this._scrollItemVO.blueprintVO;
    g.CollectableRenderHelper.displaySingleItemComplete(this.renderList, new l.CollectableRenderClips(this.disp).addIconMc(this._disp), e, new u.CollectableRenderOptions(u.CollectableRenderOptions.SET_ICON, CIBlueprintScrollItem.ICON_SIZE), null, this.bindFunction(this.onActiveStateChange));
    this._disp.actLikeButton = true;
  };
  CIBlueprintScrollItem.prototype.hide = function () {
    e.prototype.hide.call(this);
    this.renderList.destroyCollectableRenderList();
  };
  CIBlueprintScrollItem.prototype.onActiveStateChange = function () {
    e.prototype.onActiveStateChange.call(this);
    this.glow(this.isActive);
  };
  CIBlueprintScrollItem.prototype.glow = function (e = true) {
    try {
      if (!this.disp || this.disp.numChildren <= 0) {
        return;
      }
      var t = this.disp.getChildAt(0).getChildAt(0);
      var i = t.getChildAt(0);
      var n = i.currentshownDisplayObject;
      if (n) {
        n.glow.visible = e;
        if (i.filters) {
          i.useFilters(i.filters);
        }
        if (t.cacheCanvas) {
          t.updateCache();
        }
      }
    } catch (e) {
      s.debug(e.stack);
    }
  };
  CIBlueprintScrollItem.__initialize_static_members = function () {
    CIBlueprintScrollItem.ICON_SIZE = new d(87, 72);
  };
  return CIBlueprintScrollItem;
}(a.ScrollItem);
exports.CIBlueprintScrollItem = p;
var h = require("./1476.js");
var g = require("./25.js");
r.classImplementsInterfaces(p, "MovieClip");
p.__initialize_static_members();