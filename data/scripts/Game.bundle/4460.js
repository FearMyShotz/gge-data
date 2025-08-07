Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./67.js");
var s = require("./104.js");
var r = require("./19.js");
var l = function (e) {
  function JackpotPrizeDisplayComponent(t, i = null) {
    var n = this;
    n._itemWidth = 0;
    n._itemGap = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this)._itemHolder = t;
    n._itemContainer = i;
    n.setupVerticalAlignment();
    return n;
  }
  n.__extends(JackpotPrizeDisplayComponent, e);
  JackpotPrizeDisplayComponent.prototype.showItems = function (e, t) {
    if (e) {
      var i = new c.CollectableList();
      i.addItem(e.list[0 + (t - 1) * 3]);
      if (e.list.length > 1 + (t - 1) * 3) {
        i.addItem(e.list[1 + (t - 1) * 3]);
      }
      if (e.list.length > 2 + (t - 1) * 3) {
        i.addItem(e.list[2 + (t - 1) * 3]);
      }
      var n = new r.CollectableRenderOptions(r.CollectableRenderOptions.SET_DEFAULT);
      n.textfield.verticalAlign = d.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
      u.CollectableRenderHelper.displayMultipleItemsComplete(this, new a.CollectableRenderClipsList().createByItemMcList(this._itemHolder).addIconMcs("mc_iconHolder").addTextfields("txt_amount").addInfoBtns("parent.btn_info"), i, n, null, function afterRenderFunc(e) {
        e.clips.itemMc.parent.visible = e.itemVO != null;
      });
      this.alignHorizontally(e.length);
    }
  };
  JackpotPrizeDisplayComponent.prototype.dispose = function () {
    this.resetPosition();
  };
  JackpotPrizeDisplayComponent.prototype.resetPosition = function () {
    if (this._itemContainer) {
      this._itemContainer.x = this._itemContainerBounds.x;
    }
  };
  JackpotPrizeDisplayComponent.prototype.setupVerticalAlignment = function () {
    if (this._itemContainer) {
      this._itemContainerBounds = this._itemContainer.getBounds(this._itemContainer.parent);
      var e = this._itemHolder[0].parent;
      var t = this._itemHolder[1].parent;
      this._itemWidth = e.width;
      this._itemGap = t.x - e.x - this._itemWidth;
    }
  };
  JackpotPrizeDisplayComponent.prototype.alignHorizontally = function (e) {
    if (this._itemContainerBounds) {
      var t = this._itemHolder.length;
      var i = (t - (e = Math.min(e, t))) * (this._itemWidth - this._itemGap);
      this._itemContainer.x = this._itemContainerBounds.x + i;
    }
  };
  return JackpotPrizeDisplayComponent;
}(s.CollectableRendererList);
exports.JackpotPrizeDisplayComponent = l;
var c = require("./48.js");
var u = require("./25.js");
var d = require("./42.js");
o.classImplementsInterfaces(l, "ICollectableRendererList");