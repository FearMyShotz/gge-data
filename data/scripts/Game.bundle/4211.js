Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./31.js");
var s = require("./19.js");
var r = require("./1881.js");
var l = createjs.Point;
var c = function (e) {
  function AutoSellGemPopoverVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(AutoSellGemPopoverVE, e);
  AutoSellGemPopoverVE.prototype.fillContent = function (t) {
    e.prototype.fillContent.call(this, t);
    var i = new u.CollectableItemGemVO();
    i.parseServerObject(this.popoverVO.data.GID);
    d.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, new a.CollectableRenderClips(t).addIconMc(t.mc_itemIcon), i, new s.CollectableRenderOptions(s.CollectableRenderOptions.ICON, new l(40, 40)));
  };
  return AutoSellGemPopoverVE;
}(r.AAutoSellPopoverVE);
exports.AutoSellGemPopoverVE = c;
var u = require("./927.js");
var d = require("./25.js");
o.classImplementsInterfaces(c, "ICollectableRendererList");