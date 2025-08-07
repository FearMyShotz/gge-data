Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./210.js");
var c = require("./13.js");
var u = require("./15.js");
var d = require("./4.js");
var p = require("./42.js");
var h = require("./8.js");
var g = function (e) {
  function CastleFactionInvasionEventDialogInstructionSublayer(t) {
    var i = e.call(this, t) || this;
    i.subLayerDisp.reputation_progress_component.btn_redHighscore.toolTipText = "dialog_berimondInvasion_redRank_tooltip";
    i.subLayerDisp.reputation_progress_component.btn_blueHighscore.toolTipText = "dialog_berimondInvasion_blueRank_tooltip";
    i.reputationProgressComponent = new m.FactionReputationProgressComponent(i.subLayerDisp.reputation_progress_component);
    i._topXScoreBarsComponent = new _.FactionInvasionEventTopXScorebars(i.subLayerDisp.scorebars, i.eventVO);
    return i;
  }
  n.__extends(CastleFactionInvasionEventDialogInstructionSublayer, e);
  CastleFactionInvasionEventDialogInstructionSublayer.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    h.ButtonHelper.initButtons([this.subLayerDisp.btn_open_sublayer_alliance, this.subLayerDisp.btn_open_sublayer_singleplayer, this.subLayerDisp.reputation_progress_component.btn_redHighscore, this.subLayerDisp.reputation_progress_component.btn_blueHighscore, this.subLayerDisp.mc_seasonLeague.btn_showMe], f.ClickFeedbackButtonHover);
    this.registerEventListenersOnShow();
    this.setTexts();
    this._topXScoreBarsComponent.show();
    this.updateNoLeagueComponent();
    this.update();
    if (!this._seasonLeague || this._seasonLeague.eventId != this.eventVO.eventId) {
      if (this._seasonLeague) {
        this._seasonLeague.destroy();
      }
      this._seasonLeague = new C.SeasonLeagueEventElementComponent(this.subLayerDisp.mc_seasonLeague, this.eventVO.eventId);
    }
    this._seasonLeague.onShow();
  };
  CastleFactionInvasionEventDialogInstructionSublayer.prototype.updateNoLeagueComponent = function () {
    if (d.CastleModel.seasonLeagueData.isSeasonLeagueActive()) {
      if (!this.eventVO.seasonLeague.isModeEnabled) {
        this.textFieldManager.registerTextField(this.subLayerDisp.txt_noLeague, new r.LocalizedTextVO("dialog_berimondInvasion_seasonLeague_berimondInvasionNotContributing_copy"));
      }
    } else {
      this.textFieldManager.registerTextField(this.subLayerDisp.txt_noLeague, new r.LocalizedTextVO("dialog_berimondInvasion_seasonLeague_berimondInvasionLeagueInactive_copy"));
    }
  };
  CastleFactionInvasionEventDialogInstructionSublayer.prototype.setTexts = function () {
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_dialogtitle, new r.LocalizedTextVO("dialog_berimondInvasion_header"));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_bubble, new r.LocalizedTextVO("dialog_berimondInvasion_overview_desc"));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_alliance_description, new r.LocalizedTextVO("dialog_berimondInvasion_overview_alliance_desc")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.subLayerDisp.btn_open_sublayer_alliance.txt_text, new s.TextVO(c.TextHelper.toUpperCaseLocaSafeTextId("dialog_seasonLeague_eventInterface_showMe_text")));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_reputation_description, new r.LocalizedTextVO("dialog_berimondInvasion_overview_reputation_desc")).verticalAlign = p.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.textFieldManager.registerTextField(this.subLayerDisp.btn_open_sublayer_singleplayer.txt_label, new s.TextVO(c.TextHelper.toUpperCaseLocaSafeTextId("dialog_seasonLeague_eventInterface_showMe_text")));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_reputationHeader, new r.LocalizedTextVO("reputation")).autoFitToBounds = true;
  };
  CastleFactionInvasionEventDialogInstructionSublayer.prototype.hide = function () {
    e.prototype.hide.call(this);
    this._topXScoreBarsComponent.hide();
    this.removeEventListenersOnHide();
    this._seasonLeague.onHide();
  };
  CastleFactionInvasionEventDialogInstructionSublayer.prototype.registerEventListenersOnShow = function () {
    u.CastleBasicController.getInstance().addEventListener(l.CastleScoreEventEvent.UPDATE_POINTS, this.bindFunction(this.onUpdatePoints));
  };
  CastleFactionInvasionEventDialogInstructionSublayer.prototype.removeEventListenersOnHide = function () {
    u.CastleBasicController.getInstance().removeEventListener(l.CastleScoreEventEvent.UPDATE_POINTS, this.bindFunction(this.onUpdatePoints));
  };
  CastleFactionInvasionEventDialogInstructionSublayer.prototype.onUpdatePoints = function (e) {
    this.update();
  };
  CastleFactionInvasionEventDialogInstructionSublayer.prototype.update = function () {
    this.reputationProgressComponent.update(this.eventVO.currentReputationFactionScale);
    this._topXScoreBarsComponent.update();
  };
  Object.defineProperty(CastleFactionInvasionEventDialogInstructionSublayer.prototype, "eventVO", {
    get: function () {
      return d.CastleModel.specialEventData.getActiveEventByEventId(a.EventConst.EVENTTYPE_FACTION_INVASION);
    },
    enumerable: true,
    configurable: true
  });
  CastleFactionInvasionEventDialogInstructionSublayer.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (h.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.subLayerDisp.reputation_progress_component.btn_redHighscore:
          this.reputationProgressComponent.showRedFactionHighscore();
          break;
        case this.subLayerDisp.reputation_progress_component.btn_blueHighscore:
          this.reputationProgressComponent.showBlueFactionHighscore();
      }
    }
  };
  return CastleFactionInvasionEventDialogInstructionSublayer;
}(require("./34.js").CastleDialogSubLayer);
exports.CastleFactionInvasionEventDialogInstructionSublayer = g;
var C = require("./655.js");
var _ = require("./1710.js");
var m = require("./1711.js");
var f = require("./20.js");
o.classImplementsInterfaces(g, "ICollectableRendererList", "ISublayer");