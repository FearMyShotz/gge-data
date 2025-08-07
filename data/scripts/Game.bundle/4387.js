Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./241.js");
var h = require("./21.js");
var g = require("./210.js");
var C = require("./26.js");
var _ = require("./15.js");
var m = require("./4.js");
var f = require("./27.js");
var O = require("./251.js");
var E = require("./8.js");
var y = require("./11.js");
var b = require("./466.js");
var D = require("./1899.js");
var I = function (e) {
  function CastleBeggingKnightsDialog() {
    return e.call(this, CastleBeggingKnightsDialog.NAME) || this;
  }
  n.__extends(CastleBeggingKnightsDialog, e);
  CastleBeggingKnightsDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_payRessources, this.dialogDisp.btn_highscore]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new c.LocalizedTextVO("dialog_BeggingKnights_description_header"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_tip, new c.LocalizedTextVO("dialog_BeggingKnights_description_copy"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_speechBubble, new c.LocalizedTextVO("dialog_BeggingKnights_Bubble"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_amounts, new c.LocalizedTextVO("dialog_BeggingKnights_requirements")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_points, new c.LocalizedTextVO("dialog_BeggingKnights_points")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_woodPoints, new u.NumberVO(1));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_foodPoints, new u.NumberVO(1));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_stonePoints, new u.NumberVO(1));
  };
  CastleBeggingKnightsDialog.prototype.updateDialog = function (e = null) {
    this.itxt_time = this.textFieldManager.registerTextField(this.dialogDisp.mc_time.txt_time, new d.TextVO(f.CastleTimeStringHelper.getEventTimeString(this.eventVO.remainingEventTimeInSeconds)));
    this.dialogDisp.mc_food.toolTipText = "food";
    this.dialogDisp.mc_wood.toolTipText = "wood";
    this.dialogDisp.mc_stone.toolTipText = "stone";
    this.updateTime();
    this.dialogDisp.btn_payRessources.toolTipText = "dialog_season_start_payRessources";
    this.dialogDisp.mc_icon.toolTipText = "dialog_BeggingKnights_nobilityPoints";
    this.dialogDisp.btn_highscore.toolTipText = "dialog_BeggingKnights_pointRanking_tooltip";
  };
  CastleBeggingKnightsDialog.prototype.showLoaded = function (t = null) {
    this.eventVO = m.CastleModel.specialEventData.getActiveEventByEventId(s.EventConst.EVENTTYPE_BEGGING_KNIGHTS);
    if (this.scoreBar) {
      this.scoreBar.destroy();
    }
    this.scoreBar = new T.CastleScoreBarComponent(this.dialogDisp.mc_scoreBarComponent, new v.CastleScoreEventScoreBarProperties(this.eventVO.rewardLists, "BeggingKnights", this.tooltipValues));
    m.CastleModel.smartfoxClient.sendCommandVO(new p.C2SPointEventGetPointsVO(s.EventConst.EVENTTYPE_BEGGING_KNIGHTS));
    this.scoreBar.update(new O.CastleScoreBarProgressVO(this.eventVO.ownPoints, this.eventVO.ownRank, this.eventVO.pointThresholds, this.eventVO.topX));
    e.prototype.showLoaded.call(this);
    this.updateDialog();
    this.textFieldManager.registerTextField(this.dialogDisp.txt_woodAmount, new l.LocalizedNumberVO(a.BeggingKnightsConst.calculateRequirement(this.eventVO.totalHours, this.eventVO.factorList[0])));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_stoneAmount, new l.LocalizedNumberVO(a.BeggingKnightsConst.calculateRequirement(this.eventVO.totalHours, this.eventVO.factorList[1])));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_foodAmount, new l.LocalizedNumberVO(a.BeggingKnightsConst.calculateRequirement(this.eventVO.totalHours, this.eventVO.factorList[2])));
    m.CastleModel.timerData.addEventListener(h.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.updateTime));
    m.CastleModel.specialEventData.addEventListener(C.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.updateDialog));
    m.CastleModel.specialEventData.addEventListener(C.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    _.CastleBasicController.getInstance().addEventListener(g.CastleScoreEventEvent.UPDATE_POINTS, this.bindFunction(this.onUpdatePoints));
  };
  Object.defineProperty(CastleBeggingKnightsDialog.prototype, "tooltipValues", {
    get: function () {
      var e = [];
      for (var t = 0; t < this.eventVO.pointThresholds.length && this.eventVO.pointThresholds[t] != 0; t++) {
        e.push(this.eventVO.pointThresholds[t]);
      }
      for (var i = 0; i < this.eventVO.topX.length; i++) {
        e.push(this.eventVO.topX[i]);
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  CastleBeggingKnightsDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this);
    m.CastleModel.timerData.removeEventListener(h.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.updateTime));
    m.CastleModel.specialEventData.removeEventListener(C.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.updateDialog));
    m.CastleModel.specialEventData.removeEventListener(C.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    _.CastleBasicController.getInstance().removeEventListener(g.CastleScoreEventEvent.UPDATE_POINTS, this.bindFunction(this.onUpdatePoints));
  };
  CastleBeggingKnightsDialog.prototype.onRemoveEvent = function (e) {
    if (e.specialEventVO.eventId == this.eventVO.eventId) {
      this.hide();
    }
  };
  CastleBeggingKnightsDialog.prototype.onUpdatePoints = function (e = null) {
    this.setProgressBars();
  };
  CastleBeggingKnightsDialog.prototype.onClick = function (e) {
    if (E.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_payRessources:
          y.CastleExternalDialog.dialogHandler.registerDefaultDialogs(A.CastlePayRessourcesForBeggingKnightsEventDialog, new D.CastleBeggingKnightsDialogProperties(this.eventVO));
          break;
        case this.dialogDisp.btn_highscore:
          y.CastleExternalDialog.dialogHandler.registerDefaultDialogs(S.CastleBeggingKnightsHighscoreDialog, new b.CastleGenericHighscoreDialogProperties(r.HighscoreConst.BEGGING_KNIGHTS, this.eventVO.numberOfLeagues, this.eventVO.leagueID, this.eventVO.ownRank));
      }
    }
  };
  CastleBeggingKnightsDialog.prototype.setProgressBars = function () {
    if (this.scoreBar) {
      this.scoreBar.update(new O.CastleScoreBarProgressVO(this.eventVO.ownPoints, this.eventVO.ownRank, this.eventVO.pointThresholds, this.eventVO.topX));
    }
  };
  CastleBeggingKnightsDialog.prototype.updateTime = function (e = null) {
    f.CastleTimeStringHelper.setEventTime(this.dialogDisp.mc_time.txt_time, this.eventVO.remainingEventTimeInSeconds);
    f.CastleTimeStringHelper.setEventTimeToolTip(this.dialogDisp.mc_time, this.eventVO.remainingEventTimeInSeconds);
  };
  CastleBeggingKnightsDialog.NAME = "CastleBeggingKnightsExternal";
  return CastleBeggingKnightsDialog;
}(y.CastleExternalDialog);
exports.CastleBeggingKnightsDialog = I;
var T = require("./331.js");
var v = require("./546.js");
var S = require("./4388.js");
var A = require("./4389.js");
o.classImplementsInterfaces(I, "ICollectableRendererList");