Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./31.js");
var c = require("./19.js");
var u = require("./4.js");
var d = require("./217.js");
var p = require("./8.js");
var h = require("./991.js");
var g = require("./1445.js");
var C = createjs.Point;
var _ = function (e) {
  function DecorationForgeSelectSourceAndCatalystDialogListItemCatalystVE(t) {
    var i = e.call(this, t) || this;
    p.ButtonHelper.initButton(t.btn_add, -1, E.ClickFeedbackButton);
    return i;
  }
  n.__extends(DecorationForgeSelectSourceAndCatalystDialogListItemCatalystVE, e);
  DecorationForgeSelectSourceAndCatalystDialogListItemCatalystVE.prototype.update = function () {
    e.prototype.update.call(this);
    var t = this.getCurrencyVO();
    this.disp.visible = t != null;
    if (t) {
      var i = new c.CollectableRenderOptions(c.CollectableRenderOptions.SET_BASIC, new C(60, 60));
      i.tooltip.useAmount = false;
      f.CollectableRenderHelper.displaySingleItemComplete(this, new l.CollectableRenderClips(this.disp.mc_item).addInfoBtn(this.disp.btn_info), t, i);
      d.ClientConstFusion.setCatalystTextfield(this.disp.txt_amount, t);
      var n = r.int(a.FusionConst.getBonusFusionXPChanceFromCatalyst(t.xmlCurrencyVO.tier, u.CastleModel.fusionForgeData.xml.getMinimumCatalystTier(a.FusionConst.DECORATION_FORGE_ID, this.itemVO.targetDecoItemVO.buildingVO.fusionInfoVO.getCurrentLevel())));
      m.CastleComponent.textFieldManager.registerTextField(this.disp.txt_bonusChance, new s.LocalizedTextVO("value_percentage", [n]));
      this.disp.mc_item.mc_empty.visible = t.amount <= 0;
    }
  };
  DecorationForgeSelectSourceAndCatalystDialogListItemCatalystVE.prototype.isSelectable = function () {
    var e = this.getCurrencyVO();
    return !!e && e.amount > 0;
  };
  DecorationForgeSelectSourceAndCatalystDialogListItemCatalystVE.prototype.onMouseUp = function (t) {
    if (t.target != this.disp.btn_add) {
      e.prototype.onMouseUp.call(this, t);
    }
  };
  DecorationForgeSelectSourceAndCatalystDialogListItemCatalystVE.prototype.onClick = function (t) {
    if (p.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.disp.btn_add:
          m.CastleComponent.dialogHandler.registerDialogs(O.DecorationForgeCatalystConversionDialog, new h.DecorationForgeCatalystConversionDialogProperties(this.getCurrencyVO()));
      }
    }
  };
  return DecorationForgeSelectSourceAndCatalystDialogListItemCatalystVE;
}(g.ADecorationForgeSelectionListItemCatalystVE);
exports.DecorationForgeSelectSourceAndCatalystDialogListItemCatalystVE = _;
var m = require("./14.js");
var f = require("./25.js");
var O = require("./992.js");
var E = require("./36.js");
o.classImplementsInterfaces(_, "ICollectableRendererList");