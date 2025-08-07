Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./2.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./6.js");
var d = require("./4.js");
var p = require("./740.js");
var h = require("./741.js");
var g = require("./330.js");
var C = function () {
  function FactionReputationProgressComponent(e) {
    this._lastShownProgress = 0.5;
    this._disp = e;
    this._blueRankTextVO = new c.TextVO("");
    this._redRankTextVO = new c.TextVO("");
    this._localizedTextRankRed = s.Localize.text("dialog_berimondInvasion_redRank");
    this._localizedTextRankBlue = s.Localize.text("dialog_berimondInvasion_blueRank");
    this._txtScoreRed = this.textFieldManager.registerTextField(e.txt_pointsRed, new r.LocalizedNumberVO(0));
    this._txtScoreRed.autoFitToBounds = true;
    this._txtScoreBlue = this.textFieldManager.registerTextField(e.txt_pointsBlue, new r.LocalizedNumberVO(0));
    this._txtScoreBlue.autoFitToBounds = true;
    this._txtRankRed = this.textFieldManager.registerTextField(e.txt_RankRed, new l.LocalizedTextVO(n.GenericTextIds.VALUE_SIMPLE_COMP, []));
    this._txtRankBlue = this.textFieldManager.registerTextField(e.txt_RankBlue, new l.LocalizedTextVO(n.GenericTextIds.VALUE_SIMPLE_COMP, []));
    this._txtRankRed.autoFitToBounds = true;
    this._txtRankBlue.autoFitToBounds = true;
    e.mc_blueFaction.toolTipText = "dialog_berimondInvasion_reputation_blue";
    e.mc_redFaction.toolTipText = "dialog_berimondInvasion_reputation_red";
    this._repuationProgressbar = new p.AdvancedProgressBar(e.mc_reputationBar.mc_progressbar, new h.HorizontalCallbackProgressBehaviour(this.bindFunction(this.onReputationProgressAnimationUpdate), null));
  }
  FactionReputationProgressComponent.prototype.update = function (e) {
    if (!this._repuationProgressbar.isTweening) {
      this.updateReputationProgressbar(e);
    }
    this.updateText();
  };
  FactionReputationProgressComponent.prototype.updateText = function () {
    var e = u.int(this.eventVO.singleEventVO(false).ownRank);
    var t = u.int(this.eventVO.singleEventVO(true).ownRank);
    this._redRankTextVO.stringValue = e > -1 ? s.Localize.integer(e) : "-";
    this._blueRankTextVO.stringValue = t > -1 ? s.Localize.integer(t) : "-";
    this._txtRankRed.textContentVO.textReplacements = [this._localizedTextRankRed, this._redRankTextVO];
    this._txtRankBlue.textContentVO.textReplacements = [this._localizedTextRankBlue, this._blueRankTextVO];
    this._txtScoreRed.textContentVO.numberValue = this.eventVO.singleEventVO(false).ownPoints;
    this._txtScoreBlue.textContentVO.numberValue = this.eventVO.singleEventVO(true).ownPoints;
  };
  Object.defineProperty(FactionReputationProgressComponent.prototype, "eventVO", {
    get: function () {
      return d.CastleModel.specialEventData.getActiveEventByEventId(a.EventConst.EVENTTYPE_FACTION_INVASION);
    },
    enumerable: true,
    configurable: true
  });
  FactionReputationProgressComponent.prototype.updateReputationProgressbar = function (e) {
    this._repuationProgressbar.fromTo(this._lastShownProgress, e);
    this._lastShownProgress = e;
  };
  FactionReputationProgressComponent.prototype.onReputationProgressAnimationUpdate = function (e, t) {
    var i = e.target;
    this._disp.mc_reputationBar.mc_factionSeperator.x = this._disp.mc_reputationBar.mc_progressbar.x + this._repuationProgressbar.getOriginBarWidth * i.scaleX;
  };
  Object.defineProperty(FactionReputationProgressComponent.prototype, "textFieldManager", {
    get: function () {
      return o.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  FactionReputationProgressComponent.prototype.showRedFactionHighscore = function () {
    FactionReputationProgressComponent.dialogHandler.registerDefaultDialogs(m.CastleFactionInvasionEventHighscoreDialog, new g.GenericEventInfoListProperties(a.EventConst.EVENTTYPE_FACTION_INVASION, m.CastleFactionInvasionEventHighscoreDialog.TAB_RED));
  };
  FactionReputationProgressComponent.prototype.showBlueFactionHighscore = function () {
    FactionReputationProgressComponent.dialogHandler.registerDefaultDialogs(m.CastleFactionInvasionEventHighscoreDialog, new g.GenericEventInfoListProperties(a.EventConst.EVENTTYPE_FACTION_INVASION, m.CastleFactionInvasionEventHighscoreDialog.TAB_BLUE));
  };
  Object.defineProperty(FactionReputationProgressComponent, "dialogHandler", {
    get: function () {
      return _.CastleDialogHandler.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return FactionReputationProgressComponent;
}();
exports.FactionReputationProgressComponent = C;
var _ = require("./9.js");
var m = require("./1653.js");