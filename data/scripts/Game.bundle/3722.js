Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./6.js");
var d = require("./355.js");
var p = require("./13.js");
var h = require("./4.js");
var g = require("./95.js");
var C = require("./47.js");
var _ = require("./59.js");
var m = require("./8.js");
var f = require("./11.js");
var O = createjs.Point;
var E = require("./36.js");
var y = function (e) {
  function GlobalEffectEventInfoDialog() {
    var t = this;
    t.SHOWN_EVENTS = [r.EventConst.EVENTTYPE_ALIEN_INVASION_ALLIANCE, r.EventConst.EVENTTYPE_SAMURAI_INVASION, r.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE, r.EventConst.EVENTTYPE_FACTION_INVASION, r.EventConst.EVENTTYPE_RED_ALIEN_INVASION_ALLIANCE, r.EventConst.EVENTTYPE_TEMPSERVER, r.EventConst.EVENTTYPE_FACTION, r.EventConst.EVENTTYPE_CRUSADE_SEAQUEEN, r.EventConst.EVENTTYPE_CRUSADE_THORNKING, r.EventConst.EVENTTYPE_ARTIFACT2, r.EventConst.EVENTTYPE_CRUSADE_UNDERWORLD];
    CONSTRUCTOR_HACK;
    return t = e.call(this, GlobalEffectEventInfoDialog.NAME) || this;
  }
  n.__extends(GlobalEffectEventInfoDialog, e);
  GlobalEffectEventInfoDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    m.ButtonHelper.initButtons([this.dialogDisp.btn_close], E.ClickFeedbackButton, 1);
    this.scrollComponent = new g.SimpleScrollComponent(new C.SimpleScrollVO().initByParent(this.dialogDisp).addMouseWheelElements([this.dialogDisp]), new _.DynamicSizeScrollStrategyVertical(true, 0));
    this.dispBounds.height = 550;
  };
  GlobalEffectEventInfoDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new l.TextVO(p.TextHelper.toUpperCaseLocaSafeTextId("dialog_globalEffects_moreInfo_header")));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_list.txt_kingdoms, new l.TextVO(p.TextHelper.toUpperCaseLocaSafeTextId("dialog_globalEffects_kingdoms")));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_list.txt_event, new l.TextVO(p.TextHelper.toUpperCaseLocaSafeTextId("dialog_globalEffects_events")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new c.LocalizedTextVO("dialog_globalEffects_moreInfo_desc"));
    this.fillKingdoms();
    this.fillEvents();
    this.scrollComponent.init(0, 100, 5, 5);
    this.scrollComponent.setVisibility(true);
    this.scrollComponent.show();
    this.scrollComponent.onScrollSignal.add(this.bindFunction(this.onScrollValueChange));
  };
  GlobalEffectEventInfoDialog.prototype.onScrollValueChange = function () {
    var e = u.int((this.dialogDisp.mc_list.height - 367) * -1);
    this.dialogDisp.mc_list.y = a.MathBase.clamp(this.scrollComponent.currentValue / 100 * e, e, 0);
  };
  GlobalEffectEventInfoDialog.prototype.fillKingdoms = function () {
    for (var e = 0; e < 5; e++) {
      this.textFieldManager.registerTextField(this.dialogDisp.mc_list["txt_king" + e], new l.TextVO(p.TextHelper.toUpperCaseLocaSafeTextId(h.CastleModel.kingdomData.getKingdomVOByID(e).kingdomNameString)));
    }
  };
  GlobalEffectEventInfoDialog.prototype.fillEvents = function () {
    for (var e = 0; e < this.SHOWN_EVENTS.length; e++) {
      o.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_list["mc_event" + e]);
      this.dialogDisp.mc_list["mc_event" + e].addChild(d.EventIconHelper.createEventIconByEventID(this.SHOWN_EVENTS[e], new O(50, 50)));
      this.textFieldManager.registerTextField(this.dialogDisp.mc_list["txt_event" + e], new l.TextVO(p.TextHelper.toUpperCaseLocaSafeTextId("event_title_" + this.SHOWN_EVENTS[e])));
    }
  };
  GlobalEffectEventInfoDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (m.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          return;
      }
    }
  };
  GlobalEffectEventInfoDialog.NAME = "GlobalEffectEventInfo";
  return GlobalEffectEventInfoDialog;
}(f.CastleExternalDialog);
exports.GlobalEffectEventInfoDialog = y;
s.classImplementsInterfaces(y, "ICollectableRendererList");