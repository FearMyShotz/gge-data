Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./31.js");
var r = require("./19.js");
var l = require("./4.js");
var c = require("./216.js");
var u = require("./1445.js");
var d = createjs.Point;
var p = function (e) {
  function DecorationForgeCatalystConversionDialogListItemVE(t) {
    return e.call(this, t) || this;
  }
  n.__extends(DecorationForgeCatalystConversionDialogListItemVE, e);
  DecorationForgeCatalystConversionDialogListItemVE.prototype.update = function () {
    e.prototype.update.call(this);
    var t = this.getCurrencyVO();
    this.disp.visible = this._itemVO != null;
    if (this._itemVO) {
      var i = new r.CollectableRenderOptions(r.CollectableRenderOptions.SET_BASIC, new d(60, 60));
      i.tooltip.useAmount = false;
      h.CollectableRenderHelper.displaySingleItemComplete(this, new s.CollectableRenderClips(this.disp.mc_item).addInfoBtn(this.disp.btn_info), t, i);
      var n = l.CastleModel.fusionForgeData.xml.getCatalystInfo(a.FusionConst.DECORATION_FORGE_ID, t.id);
      this.disp.mc_item.mc_disassemble.visible = !n.deprecated && n.addDecoDust > 0;
      this.disp.mc_item.mc_assemble.visible = !n.deprecated && n.costDecoDust > 0;
      c.ClientConstFusion.setCatalystTextfield(this.disp.txt_amount, t);
      this.disp.mc_empty.visible = false;
    }
  };
  return DecorationForgeCatalystConversionDialogListItemVE;
}(u.ADecorationForgeSelectionListItemCatalystVE);
exports.DecorationForgeCatalystConversionDialogListItemVE = p;
var h = require("./25.js");
o.classImplementsInterfaces(p, "ICollectableRendererList");