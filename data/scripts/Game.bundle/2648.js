Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./3.js");
var c = require("./6.js");
var u = require("./55.js");
var d = require("./24.js");
var p = require("./47.js");
var h = require("./59.js");
var g = require("./8.js");
var C = function (e) {
  function DecorationForgeQuickGuideInfoDialog() {
    return e.call(this, DecorationForgeQuickGuideInfoDialog.NAME) || this;
  }
  n.__extends(DecorationForgeQuickGuideInfoDialog, e);
  DecorationForgeQuickGuideInfoDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    g.ButtonHelper.initButtons([this.dialogDisp.btn_ok], m.ClickFeedbackButton);
    this._textScrollComponent = new _.SimpleScrollComponent(new p.SimpleScrollVO(this.dialogDisp.mc_slider.btn_minus, this.dialogDisp.mc_slider.btn_plus, null, null, this.dialogDisp.mc_slider.mc_sliderLine, this.dialogDisp.mc_slider.btn_slider, [this.dialogDisp.mc_slider], [this.dialogDisp.txt_copy, this.dialogDisp.mouse_area]), new h.DynamicSizeScrollStrategyVertical(true, 0));
  };
  DecorationForgeQuickGuideInfoDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    g.ButtonHelper.initButtons([], m.ClickFeedbackButton);
    this.initBasicButtons([this.dialogDisp.btn_close]);
    this.itxt_desc = this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new l.LocalizedTextVO("dialog_decoForge_quickGuide_" + this.infoProperties.copy + "_desc"));
    this._textScrollComponent.strategy.visibleValue = u.ClientConstUtils.isTlfMode ? this.itxt_desc.height : this.itxt_desc.numLines;
    var i = c.int(u.ClientConstUtils.isTlfMode ? 20 : 1);
    this._textScrollComponent.init(1, this.itxt_desc.maxScrollV, i, i);
    this._textScrollComponent.setVisibility(this.itxt_desc.maxScrollV > 1);
    this._textScrollComponent.show();
    this._textScrollComponent.onScrollSignal.add(this.bindFunction(this.onScrollValueChange));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new l.LocalizedTextVO("dialog_decoForge_quickGuide_" + this.infoProperties.title + "_title"));
    s.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_info);
    this.dialogDisp.mc_info.addChild(new d.CastleGoodgameExternalClip(this.infoProperties.graphicString, o.BasicModel.basicLoaderData.getVersionedItemAssetUrl(DecorationForgeQuickGuideInfoDialog.NAME), null, 0, false));
  };
  DecorationForgeQuickGuideInfoDialog.prototype.onScrollValueChange = function () {
    this.itxt_desc.scrollV = a.MathBase.clamp(this._textScrollComponent.currentValue, 1, this.itxt_desc.maxScrollV);
  };
  DecorationForgeQuickGuideInfoDialog.prototype.onClick = function (t) {
    if (g.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
      }
    }
  };
  Object.defineProperty(DecorationForgeQuickGuideInfoDialog.prototype, "infoProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  DecorationForgeQuickGuideInfoDialog.NAME = "DecorationForgeQuickGuideInfo";
  return DecorationForgeQuickGuideInfoDialog;
}(require("./11.js").CastleExternalDialog);
exports.DecorationForgeQuickGuideInfoDialog = C;
var _ = require("./95.js");
var m = require("./36.js");
r.classImplementsInterfaces(C, "ICollectableRendererList");