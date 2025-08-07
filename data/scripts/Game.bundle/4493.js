Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./1.js");
var l = require("./5.js");
var c = require("./5.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./3.js");
var h = require("./3.js");
var g = require("./6.js");
var C = require("./241.js");
var _ = require("./21.js");
var m = require("./210.js");
var f = require("./15.js");
var O = require("./4.js");
var E = require("./27.js");
var y = require("./251.js");
var b = require("./42.js");
var D = require("./8.js");
var I = require("./11.js");
var T = require("./466.js");
var v = function (e) {
  function CastlePointEventDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastlePointEventDialog.NAME) || this;
  }
  n.__extends(CastlePointEventDialog, e);
  CastlePointEventDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    var i = [];
    i.push(this.dialogDisp.btn_close);
    i.push(this.dialogDisp.btn_help);
    i.push(this.dialogDisp.btn_highscore);
    this.initBasicButtons(i);
    this.dialogDisp.btn_highscore.toolTipText = "dialog_pointsEvent_pointRanking_tooltip";
    this.dialogDisp.iconCake.toolTipText = "dialog_pointsEvent_nobilityPoints";
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.textFieldManager.registerTextField(this.dialogDisp.mc_disabledRanking.txt_rank, new p.LocalizedTextVO("rank"));
    this.dialogDisp.mc_disabledRanking.mouseChildren = false;
    this.dialogDisp.mc_disabledRanking.toolTipText = "dialog_pointsEvent_pointRankingDisabled_tooltip";
    this.textFieldManager.registerTextField(this.dialogDisp.txt_bubble, new p.LocalizedTextVO("dialog_pointsEvent_eventcamp_message")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_sideTop, new p.LocalizedTextVO("dialog_pointsEvent_eventcamp_description")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_condition, new p.LocalizedTextVO("judgement_requirements")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_points, new p.LocalizedTextVO("generic_points")).autoFitToBounds = true;
    this.initConditionsTexts();
  };
  CastlePointEventDialog.prototype.initConditionsTexts = function () {
    this.conditionNameTextfields = [];
    this.conditionPointsTextfields = [];
    for (var e = 0; e < CastlePointEventDialog.MAX_CONDITIONS; e++) {
      var t = this.dialogDisp["i" + e];
      var i = this.textFieldManager.registerTextField(t.txt_condition, new p.LocalizedTextVO(""));
      i.autoFitToBounds = true;
      i.verticalAlign = b.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
      this.conditionNameTextfields.push(i);
      var n = this.textFieldManager.registerTextField(t.txt_points, new d.LocalizedNumberVO(0));
      this.conditionPointsTextfields.push(n);
    }
    this.itxt_title = this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new p.LocalizedTextVO(""));
    this.itxt_title.autoFitToBounds = true;
    this.itxt_description = this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new p.LocalizedTextVO(""));
  };
  CastlePointEventDialog.prototype.applyPropertiesLoaded = function (e = null) {
    this.eventVO = O.CastleModel.specialEventData.getActiveEventByEventId(l.EventConst.EVENTTYPE_POINT_EVENT);
  };
  CastlePointEventDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    if (this.eventVO) {
      var i = this.eventVO.pointThresholds.concat(this.eventVO.topX);
      this.scoreBar = new A.CastleScoreBarComponent(this.dialogDisp.mc_scoreBarComponent, new L.CastleScoreEventScoreBarProperties(this.eventVO.rewardLists, "pointsEvent", i));
      O.CastleModel.smartfoxClient.sendCommandVO(new C.C2SPointEventGetPointsVO(l.EventConst.EVENTTYPE_POINT_EVENT));
      this.setTexts();
      this.setProgressBars();
      this.setRanking();
      O.CastleModel.timerData.addEventListener(_.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateEventTime));
      f.CastleBasicController.getInstance().addEventListener(m.CastleScoreEventEvent.UPDATE_POINTS, this.bindFunction(this.onUpdatePoints));
      this.onUpdateEventTime();
    } else {
      this.hide();
    }
  };
  CastlePointEventDialog.prototype.onClick = function (t) {
    if (D.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_help:
          S.CastleDialogHandler.getInstance().showHelper("", u.Localize.text("help_pointsEvent"));
          break;
        case this.dialogDisp.btn_highscore:
          I.CastleExternalDialog.dialogHandler.registerDefaultDialogs(P.CastlePointEventHighscoreDialog, new T.CastleGenericHighscoreDialogProperties(c.HighscoreConst.POINT_EVENT, this.eventVO.numberOfLeagues, this.eventVO.leagueID, this.eventVO.ownRank));
          break;
        case this.dialogDisp.btn_close:
          this.hide();
      }
    }
  };
  CastlePointEventDialog.prototype.setRanking = function () {
    if (this.eventVO.disableRanking) {
      this.dialogDisp.btn_highscore.visible = false;
      this.dialogDisp.mc_disabledRanking.visible = true;
      if (this.eventVO.ownRank > 0) {
        this.textFieldManager.registerTextField(this.dialogDisp.mc_disabledRanking.txt_value, new d.LocalizedNumberVO(this.eventVO.ownRank), new a.InternalGGSTextFieldConfigVO(true));
      } else {
        this.textFieldManager.registerTextField(this.dialogDisp.mc_disabledRanking.txt_value, new h.TextVO("-"), new a.InternalGGSTextFieldConfigVO(true));
      }
    } else {
      this.dialogDisp.btn_highscore.visible = true;
      this.dialogDisp.mc_disabledRanking.visible = false;
    }
  };
  CastlePointEventDialog.prototype.setTexts = function () {
    var e;
    var t;
    for (var i = 0; i < CastlePointEventDialog.MAX_CONDITIONS; i++) {
      var n = this.dialogDisp["i" + i];
      var o = i < this.eventVO.conditionCount;
      n.visible = o;
      if (o) {
        var a = this.eventVO.getCondition(i);
        e = a.name;
        this.conditionNameTextfields[i].textContentVO.textId = a.textId;
        this.conditionNameTextfields[i].textContentVO.textReplacements = a.textReplacements;
        this.conditionPointsTextfields[i].textContentVO.numberValue = a.score;
      }
    }
    this.itxt_title.textContentVO.textId = "pointsEvent_" + e + "_title";
    t = this.eventVO.isKingdomSpecific ? "pointsEvent_" + e + "_" + this.eventVO.kingdomId + "_info" : "pointsEvent_" + e + "_info";
    this.itxt_description.textContentVO.textId = t;
  };
  CastlePointEventDialog.prototype.hideLoaded = function (t = null) {
    this.onMouseOut(null);
    O.CastleModel.timerData.removeEventListener(_.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateEventTime));
    f.CastleBasicController.getInstance().removeEventListener(m.CastleScoreEventEvent.UPDATE_POINTS, this.bindFunction(this.onUpdatePoints));
    if (this.scoreBar) {
      this.scoreBar.destroy();
    }
    e.prototype.hideLoaded.call(this, t);
  };
  CastlePointEventDialog.prototype.onUpdatePoints = function (e = null) {
    this.setProgressBars();
  };
  CastlePointEventDialog.prototype.onUpdateEventTime = function (e = null) {
    var t = 0;
    var i = s.castAs(O.CastleModel.specialEventData.getActiveEventByEventId(l.EventConst.EVENTTYPE_POINT_EVENT), "PointEventEventVO");
    if (i) {
      t = g.int(i.remainingEventTimeInSeconds);
    }
    if (t < 1) {
      this.hide();
      this.destroy();
    }
    E.CastleTimeStringHelper.setEventTime(this.dialogDisp.txt_time, t, o.GGSTextAlign.LEFT);
    E.CastleTimeStringHelper.setEventTimeToolTip(this.dialogDisp.mc_hitArea_Time, t);
  };
  CastlePointEventDialog.prototype.setProgressBars = function () {
    if (this.scoreBar) {
      this.scoreBar.update(new y.CastleScoreBarProgressVO(this.eventVO.ownPoints, this.eventVO.ownRank, this.eventVO.pointThresholds, this.eventVO.topX));
    }
    if (this.eventVO.disableRanking) {
      this.setRanking();
    }
  };
  CastlePointEventDialog.__initialize_static_members = function () {
    CastlePointEventDialog.NAME = "CastlePointEvent";
    CastlePointEventDialog.MAX_CONDITIONS = 3;
  };
  return CastlePointEventDialog;
}(I.CastleExternalDialog);
exports.CastlePointEventDialog = v;
var S = require("./9.js");
var A = require("./331.js");
var L = require("./546.js");
var P = require("./4494.js");
r.classImplementsInterfaces(v, "ICollectableRendererList");
v.__initialize_static_members();