Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./3.js");
var l = require("./384.js");
var c = function (e) {
  function RenderSpy() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(RenderSpy, e);
  RenderSpy.prototype.renderData = function (e, t) {
    var i = t;
    l.AMovementRenderStrategy.setDecoFrame(e, l.AMovementRenderStrategy.FRAME_SPY);
    e.btn_spyInfo.visible = true;
    e.fieldSpyCount.text = String(i.spyCount);
    this.textFieldManager.registerTextField(e.btn_spyInfo.txt_spyRisk, new r.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE, [i.spyRisk]), new a.InternalGGSTextFieldConfigVO(true));
    s.MovieClipHelper.replaceMovieClip(e.btn_spyInfo.icon_holder, Library.CastleInterfaceElements.Icon_Spy);
    if (i.isSabotageSpyMovement) {
      e.btn_spyInfo.mc_icon.gotoAndStop(2);
      this.textFieldManager.registerTextField(e.btn_spyInfo.txt_spyEffect, new r.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE, [i.sabotageDamage]), new a.InternalGGSTextFieldConfigVO(true));
    } else {
      e.btn_spyInfo.mc_icon.gotoAndStop(1);
      this.textFieldManager.registerTextField(e.btn_spyInfo.txt_spyEffect, new r.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE, [i.spyAccuracy]), new a.InternalGGSTextFieldConfigVO(true));
    }
    if (i.canBeRetreated) {
      e.fieldAction = this.textFieldManager.registerTextField(e.txt_action, new r.LocalizedTextVO("dialog_moveOverview_spy"), new a.InternalGGSTextFieldConfigVO(true));
    } else {
      e.fieldAction = this.textFieldManager.registerTextField(e.txt_action, new r.LocalizedTextVO(o.GenericTextIds.VALUE_DASH_SPLIT, [new r.LocalizedTextVO("dialog_moveOverview_spy"), new r.LocalizedTextVO("dialog_moveOverview_wayHome")]), new a.InternalGGSTextFieldConfigVO(true));
    }
  };
  return RenderSpy;
}(l.AMovementRenderStrategy);
exports.RenderSpy = c;