Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3964.js");
var r = require("./4.js");
var l = require("./8.js");
var c = require("./766.js");
var u = require("./1121.js");
var d = createjs.MouseEvent;
var p = function (e) {
  function CastleWorldCupDialogNotVotedState(t) {
    var i = this;
    i.votedValue = 0;
    CONSTRUCTOR_HACK;
    return i = e.call(this, t) || this;
  }
  n.__extends(CastleWorldCupDialogNotVotedState, e);
  CastleWorldCupDialogNotVotedState.prototype.updateTexts = function () {
    e.prototype.updateTexts.call(this);
    this.tfBubble.textContentVO.textId = "dialog_worldCup_text2";
    this.tfBubble.textContentVO.textReplacements = [this.worldCupEventVO.bonusRubies];
    this.tfBox.textContentVO.textId = "dialog_worldCup_box2";
    this.dialogDisp.btnTeamA.toolTipText = {
      t: "dialog_worldCup_tooltipBet",
      p: [this.getTeamString(this.worldCupEventVO.teamA)]
    };
    this.dialogDisp.btnTeamB.toolTipText = {
      t: "dialog_worldCup_tooltipBet",
      p: [this.getTeamString(this.worldCupEventVO.teamB)]
    };
    this.dialogDisp.btnDraw.toolTipText = "dialog_worldCup_tooltipBet_draw";
  };
  CastleWorldCupDialogNotVotedState.prototype.updateElements = function () {
    e.prototype.updateElements.call(this);
    this.activateButton(this.dialogDisp.btnTeamA);
    this.activateButton(this.dialogDisp.btnTeamB);
    this.activateButton(this.dialogDisp.btnDraw);
  };
  CastleWorldCupDialogNotVotedState.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (l.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btnTeamA:
          this.openYesNoDialog(h.WorldCupEventVO.VOTE_VALUE_TEAM_A);
          break;
        case this.dialogDisp.btnTeamB:
          this.openYesNoDialog(h.WorldCupEventVO.VOTE_VALUE_TEAM_B);
          break;
        case this.dialogDisp.btnDraw:
          this.openYesNoDialog(h.WorldCupEventVO.VOTE_VALUE_TEAM_DRAW);
      }
    }
  };
  CastleWorldCupDialogNotVotedState.prototype.activateButton = function (t) {
    e.prototype.activateButton.call(this, t);
    t.addEventListener(d.MOUSE_OVER, this.bindFunction(this._onButtonMouseOver));
    t.addEventListener(d.MOUSE_OUT, this.bindFunction(this._onButtonMouseOut));
  };
  CastleWorldCupDialogNotVotedState.prototype.deactivateButton = function (t) {
    e.prototype.deactivateButton.call(this, t);
    t.removeEventListener(d.MOUSE_OVER, this.bindFunction(this._onButtonMouseOver));
    t.removeEventListener(d.MOUSE_OUT, this.bindFunction(this._onButtonMouseOut));
  };
  CastleWorldCupDialogNotVotedState.prototype._onButtonMouseOver = function (e) {
    e.target.scaleX = e.target.scaleY = u.ACastleWorldCupDialogState.MOUSE_OVER_SCALE;
  };
  CastleWorldCupDialogNotVotedState.prototype._onButtonMouseOut = function (e) {
    e.target.scaleX = e.target.scaleY = u.ACastleWorldCupDialogState.DEFAULT_SCALE;
  };
  CastleWorldCupDialogNotVotedState.prototype.resetState = function () {
    e.prototype.resetState.call(this);
    this.deactivateButton(this.dialogDisp.btnTeamA);
    this.deactivateButton(this.dialogDisp.btnTeamB);
    this.deactivateButton(this.dialogDisp.btnDraw);
  };
  CastleWorldCupDialogNotVotedState.prototype.openYesNoDialog = function (e) {
    this.votedValue = e;
    CastleWorldCupDialogNotVotedState.dialogHandler.registerDefaultDialogs(C.CastleTimedYesNoDialog, new c.CastleTimedYesNoDialogProperties(a.Localize.text("dialog_worldCup_confirm_header"), a.Localize.text("dialog_worldCup_confirm"), "", this.worldCupEventVO.remainingEventTimeInSeconds, false, this.bindFunction(this.sendVote)));
  };
  CastleWorldCupDialogNotVotedState.prototype.sendVote = function (e = null) {
    r.CastleModel.smartfoxClient.sendCommandVO(new s.C2SVoteWorldCupVO(this.votedValue));
  };
  Object.defineProperty(CastleWorldCupDialogNotVotedState, "dialogHandler", {
    get: function () {
      return g.CastleDialogHandler.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return CastleWorldCupDialogNotVotedState;
}(u.ACastleWorldCupDialogState);
exports.CastleWorldCupDialogNotVotedState = p;
var h = require("./669.js");
var g = require("./9.js");
var C = require("./765.js");
o.classImplementsInterfaces(p, "ICastleWorldCupDialogState");