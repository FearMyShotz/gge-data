Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./11.js");
var a = require("./3.js");
var s = require("./5520.js");
var r = require("./9.js");
var l = require("./2.js");
var c = require("./21.js");
var u = require("./6.js");
var d = require("./4.js");
var p = require("./5.js");
var h = require("./8.js");
var g = require("./474.js");
var C = require("./1125.js");
var _ = require("./1842.js");
var m = require("./13.js");
var f = require("./20.js");
var O = function (e) {
  function CastleStormIslandsStartTeaserDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleStormIslandsStartTeaserDialog.NAME) || this;
  }
  n.__extends(CastleStormIslandsStartTeaserDialog, e);
  CastleStormIslandsStartTeaserDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new a.TextVO(m.TextHelper.toUpperCaseLocaSafeTextId("kingdomName_Eiland"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_time_left, new a.LocalizedTextVO("kingdom_islandResetTimer_2"));
    this.itxt_countdown = this.textFieldManager.registerTextField(this.dialogDisp.mc_countdown.txt_countdown, new a.TextVO(""));
    h.ButtonHelper.initButtons([this.dialogDisp.btn_join, this.dialogDisp.btn_help, this.dialogDisp.btn_close], f.ClickFeedbackButtonHover);
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.dialogDisp.btn_close.toolTipText = "generic_btn_close";
    this.textFieldManager.registerTextField(this.dialogDisp.btn_join.txt_value, new a.TextVO(m.TextHelper.toUpperCaseLocaSafeTextId("dialog_island_introduction_joinButton")));
    this.prepareTeaserItemsData();
    this.fillTeasersData();
    this.dialogDisp.mc_countdown.autoFitToBounds = true;
    this.dialogDisp.mc_countdown.toolTipText = "countdown_aquamarin_tooltip";
    this.dialogDisp.mc_countdown.mouseChildren = false;
  };
  CastleStormIslandsStartTeaserDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    d.CastleModel.messageData.getBodyForTextMessage(this.dialogProperties.messageVO.messageID);
    d.CastleModel.timerData.addEventListener(c.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  CastleStormIslandsStartTeaserDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    d.CastleModel.timerData.removeEventListener(c.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  CastleStormIslandsStartTeaserDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_join:
        this.joinEvent();
        this.hide();
        break;
      case this.dialogDisp.btn_help:
        r.CastleDialogHandler.getInstance().showHelper("", a.Localize.text("help_island_introduction"));
        break;
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  CastleStormIslandsStartTeaserDialog.prototype.prepareTeaserItemsData = function () {
    this._teasersData = [];
    this._teasersData.push(new s.CastleStormIslandsTeaserItemVO("teaser_storm_island_introduction_start", "dialog_island_introduction_section1_title", "dialog_island_introduction_section1_desc"));
    this._teasersData.push(new s.CastleStormIslandsTeaserItemVO("teaser_storm_islands_introduction_aquamarine", "dialog_island_introduction_section2_title", "dialog_island_introduction_section2_desc"));
    this._teasersData.push(new s.CastleStormIslandsTeaserItemVO("teaser_storm_islands_introduction_moonstorm", "dialog_island_introduction_section3_title", "dialog_island_introduction_section3_desc"));
  };
  CastleStormIslandsStartTeaserDialog.prototype.fillTeasersData = function () {
    var e;
    for (var t = 0; t < this._teasersData.length; t++) {
      e = this.dialogDisp["mc_teaser" + t];
      l.MovieClipHelper.clearMovieClip(e.mc_icon);
      var i = new Library.CastleStormIslandsStartTeaser[this._teasersData[t].clipName]();
      if (i) {
        e.mc_icon.addChild(i);
      }
      this.textFieldManager.registerTextField(e.txt_desc_title, new a.LocalizedTextVO(this._teasersData[t].txtTitle));
      this.textFieldManager.registerTextField(e.txt_desc, new a.LocalizedTextVO(this._teasersData[t].txtCopy));
    }
  };
  CastleStormIslandsStartTeaserDialog.prototype.onTimerUpdate = function (e) {
    var t = u.int(d.CastleModel.kingdomData.getKingdomVOByID(p.WorldIsland.KINGDOM_ID).resetTime);
    this.itxt_countdown.textContentVO.stringValue = l.TimeStringHelper.getTimeToString(t, l.TimeStringHelper.TWO_TIME_FORMAT, a.Localize.text, false, true);
  };
  Object.defineProperty(CastleStormIslandsStartTeaserDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleStormIslandsStartTeaserDialog.prototype.joinEvent = function () {
    if (d.CastleModel.kingdomData.getKingdomVOByID(p.WorldIsland.KINGDOM_ID).resetTime > 0) {
      r.CastleDialogHandler.getInstance().registerDefaultDialogs(g.CastleStormIslandsMainDialog, new C.CastleStormIslandsMainDialogProperties(g.CastleStormIslandsMainDialog.TAB_MAIN));
      console.log("Main Event Dialogue");
    } else {
      r.CastleDialogHandler.getInstance().registerDefaultDialogs(_.CastleStormIslandsMainDialogOverview);
    }
  };
  CastleStormIslandsStartTeaserDialog.__initialize_static_members = function () {
    CastleStormIslandsStartTeaserDialog.NAME = "CastleStormIslandsStartTeaser";
  };
  return CastleStormIslandsStartTeaserDialog;
}(o.CastleExternalDialog);
exports.CastleStormIslandsStartTeaserDialog = O;
O.__initialize_static_members();