Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./68.js");
var s = require("./1121.js");
var r = function (e) {
  function CastleWorldCupDialogAlreadyVotedState(t) {
    return e.call(this, t) || this;
  }
  n.__extends(CastleWorldCupDialogAlreadyVotedState, e);
  CastleWorldCupDialogAlreadyVotedState.prototype.updateTexts = function () {
    e.prototype.updateTexts.call(this);
    this.tfBubble.textContentVO.textId = "dialog_worldCup_text3";
    this.tfBox.textContentVO.textId = "dialog_worldCup_box3";
    this.dialogDisp.btnTeamA.toolTipText = "dialog_worldCup_tooltipChangeBet";
    this.dialogDisp.btnTeamB.toolTipText = this.dialogDisp.btnTeamA.toolTipText;
    this.dialogDisp.btnDraw.toolTipText = this.dialogDisp.btnTeamA.toolTipText;
  };
  CastleWorldCupDialogAlreadyVotedState.prototype.updateElements = function () {
    e.prototype.updateElements.call(this);
    this.deactivateButton(this.dialogDisp.btnTeamA);
    this.deactivateButton(this.dialogDisp.btnTeamB);
    this.deactivateButton(this.dialogDisp.btnDraw);
    this.selectButton(this.worldCupEventVO.voted);
  };
  CastleWorldCupDialogAlreadyVotedState.prototype.selectButton = function (e) {
    var t;
    switch (e) {
      case l.WorldCupEventVO.VOTE_VALUE_TEAM_A:
        (t = this.dialogDisp.btnTeamA).toolTipText = {
          t: "dialog_worldCup_tooltipYourBet",
          p: [this.getTeamString(this.worldCupEventVO.teamA)]
        };
        break;
      case l.WorldCupEventVO.VOTE_VALUE_TEAM_B:
        (t = this.dialogDisp.btnTeamB).toolTipText = {
          t: "dialog_worldCup_tooltipYourBet",
          p: [this.getTeamString(this.worldCupEventVO.teamB)]
        };
        break;
      case l.WorldCupEventVO.VOTE_VALUE_TEAM_DRAW:
        (t = this.dialogDisp.btnDraw).toolTipText = "dialog_worldCup_tooltipYourBet_draw";
    }
    t.bg.gotoAndStop(s.ACastleWorldCupDialogState.BUTTON_SELECTED_STATE);
    t.actLikeButton = false;
    t.enabled = false;
    t.useFilters(a.BitmapFilterHelper.NO_FILTER);
  };
  return CastleWorldCupDialogAlreadyVotedState;
}(s.ACastleWorldCupDialogState);
exports.CastleWorldCupDialogAlreadyVotedState = r;
var l = require("./671.js");
o.classImplementsInterfaces(r, "ICastleWorldCupDialogState");