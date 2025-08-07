Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./31.js");
var s = require("./19.js");
var r = require("./1879.js");
var l = createjs.Point;
var c = function (e) {
  function AutoSellEquipmentPopoverVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(AutoSellEquipmentPopoverVE, e);
  AutoSellEquipmentPopoverVE.prototype.fillContent = function (t) {
    e.prototype.fillContent.call(this, t);
    var i = new u.CollectableItemEquipmentRarenessVO();
    i.parseServerObject(this.popoverVO.data.E);
    d.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, new a.CollectableRenderClips(t).addIconMc(t.mc_itemIcon), i, new s.CollectableRenderOptions(s.CollectableRenderOptions.ICON, new l(40, 40)));
  };
  return AutoSellEquipmentPopoverVE;
}(r.AAutoSellPopoverVE);
exports.AutoSellEquipmentPopoverVE = c;
var u = require("./687.js");
var d = require("./25.js");
o.classImplementsInterfaces(c, "ICollectableRendererList");