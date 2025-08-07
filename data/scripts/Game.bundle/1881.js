Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./31.js");
var r = require("./19.js");
var l = require("./271.js");
var c = require("./1882.js");
var u = createjs.Point;
var d = function (e) {
  function AAutoSellPopoverVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(AAutoSellPopoverVE, e);
  AAutoSellPopoverVE.prototype.fillContent = function (e) {
    this.destroyCollectableRenderList();
    h.CastleComponent.textFieldManager.registerTextField(e.txt_title, new a.LocalizedTextVO("dialog_autoSell_title"));
    var t = new p.CollectableItemC1VO(this.popoverVO.data.C1);
    g.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, new s.CollectableRenderClips(e).addIconMc(e.mc_sellIcon), t, new r.CollectableRenderOptions(r.CollectableRenderOptions.ICON, new u(30, 30)));
    h.CastleComponent.textFieldManager.registerTextField(e.txt_text, new a.LocalizedTextVO("value_nominal_add", [t.amount]));
  };
  AAutoSellPopoverVE.prototype.getPopoverConfig = function () {
    var e = new l.SimplePopoverConfig("AutoSellPopover");
    e.useClickArea = false;
    e.waitDuration = 3;
    e.fadeOutDuration = 0.5;
    return e;
  };
  return AAutoSellPopoverVE;
}(c.APopoverVE);
exports.AAutoSellPopoverVE = d;
var p = require("./234.js");
var h = require("./14.js");
var g = require("./25.js");
o.classImplementsInterfaces(d, "ICollectableRendererList");