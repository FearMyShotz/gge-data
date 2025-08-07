Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./3.js");
var c = require("./24.js");
var u = require("./384.js");
var d = function (e) {
  function RenderPlaguemonk() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(RenderPlaguemonk, e);
  RenderPlaguemonk.prototype.renderData = function (e, t) {
    var i = t;
    u.AMovementRenderStrategy.setDecoFrame(e, u.AMovementRenderStrategy.FRAME_SPY);
    e.btn_spyInfo.visible = true;
    e.fieldSpyCount.text = String(i.plagueMonkCount);
    this.textFieldManager.registerTextField(e.btn_spyInfo.txt_spyRisk, new l.LocalizedTextVO(a.GenericTextIds.VALUE_PERCENTAGE, [i.plagueMonkRisk]), new s.InternalGGSTextFieldConfigVO(true));
    r.MovieClipHelper.clearMovieClip(e.btn_spyInfo.icon_holder);
    var n = new c.CastleGoodgameExternalClip("Icon_PlaqueC2R", o.BasicModel.basicLoaderData.getVersionedItemAssetUrl("Icon_PlaqueC2R"));
    n.clipSizeComponent = new o.ClipSizeComponent(25, 25);
    e.btn_spyInfo.icon_holder.addChild(n);
    e.btn_spyInfo.mc_icon.gotoAndStop(2);
    this.textFieldManager.registerTextField(e.btn_spyInfo.txt_spyEffect, new l.LocalizedTextVO(a.GenericTextIds.VALUE_PERCENTAGE, [i.plagueDamage]), new s.InternalGGSTextFieldConfigVO(true));
    e.fieldAction = this.textFieldManager.registerTextField(e.txt_action, new l.LocalizedTextVO("plaguemonks"), new s.InternalGGSTextFieldConfigVO(true));
  };
  return RenderPlaguemonk;
}(u.AMovementRenderStrategy);
exports.RenderPlaguemonk = d;