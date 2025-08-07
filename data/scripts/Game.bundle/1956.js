Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./13.js");
var u = require("./4.js");
var d = require("./8.js");
var p = require("./11.js");
var h = createjs.Point;
var g = function (e) {
  function SeasonLeagueStartDialog() {
    return e.call(this, SeasonLeagueStartDialog.NAME) || this;
  }
  n.__extends(SeasonLeagueStartDialog, e);
  SeasonLeagueStartDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    d.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help], _.ClickFeedbackButton);
    d.ButtonHelper.initButton(this.dialogDisp.btn_showMe, -1, m.ClickFeedbackButtonBackground);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new l.TextVO(c.TextHelper.toUpperCaseLocaSafeTextId("dialog_seasonLeague_starterMessage_header"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title1, new l.TextVO(c.TextHelper.toUpperCaseLocaSafeTextId("dialog_seasonLeague_starterMessage_infoSectionOne_header"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc1, new r.LocalizedTextVO("dialog_seasonLeague_starterMessage_infoSectionOne_copy")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title2, new l.TextVO(c.TextHelper.toUpperCaseLocaSafeTextId("dialog_seasonLeague_starterMessage_infoSectionTwo_header"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc2, new r.LocalizedTextVO("dialog_seasonLeague_starterMessage_infoSectionTwo_copy")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_status, new l.TextVO(c.TextHelper.toUpperCaseLocaSafeTextId("dialog_seasonLeague_starterMessage_statusSection_header"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.btn_showMe.txt_text, new l.TextVO(c.TextHelper.toUpperCaseLocaSafeTextId("dialog_seasonLeague_starterMessage_goLeague_text"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_progress.txt_text, new r.LocalizedTextVO("dialog_seasonLeague_starterMessage_statusSection_noEventBar_copy")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_rank.txt_playersTitle, new l.TextVO(c.TextHelper.toUpperCaseLocaSafeTextId("dialog_seasonLeague_playersInDivision_text"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_rank.txt_rankTitle, new l.TextVO(c.TextHelper.toUpperCaseLocaSafeTextId("dialog_seasonLeague_yourCurrentRank_text"))).autoFitToBounds = true;
    this._promotionIcon = new C.SeasonLeaguePromotionIconComponent(this.dialogDisp.mc_rank.mc_rankIcon, C.SeasonLeaguePromotionIconComponent.TYPE_NORMAL, new h(80, 80));
  };
  SeasonLeagueStartDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    if (!u.CastleModel.seasonLeagueData.server.seasonStartDialogSeen) {
      u.CastleModel.seasonLeagueData.server.requestKSS(true, true);
    }
    this.setupSeasonState();
    this.updateInfoSection();
  };
  SeasonLeagueStartDialog.prototype.setupSeasonState = function () {
    if (u.CastleModel.seasonLeagueData.getActiveSeasonEventVO() != null) {
      if (u.CastleModel.seasonLeagueData.server.divisionSize > 0) {
        this._state = SeasonLeagueStartDialog.STATE_EVENT_ACTIVE;
      } else {
        this._state = SeasonLeagueStartDialog.STATE_EVENT_ACTIVE_NO_RANK;
      }
    } else {
      this._state = SeasonLeagueStartDialog.STATE_EVENT_INACTIVE;
    }
  };
  SeasonLeagueStartDialog.prototype.updateInfoSection = function () {
    this.dialogDisp.mc_progress.visible = this.state == SeasonLeagueStartDialog.STATE_EVENT_INACTIVE;
    this.dialogDisp.mc_rank.visible = this.state == SeasonLeagueStartDialog.STATE_EVENT_ACTIVE;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_info, new r.LocalizedTextVO(this.getInfoTextId(), [u.CastleModel.seasonLeagueData.getActiveSeasonEventNameId()])).autoFitToBounds = true;
    if (this.state == SeasonLeagueStartDialog.STATE_EVENT_ACTIVE) {
      this.textFieldManager.registerTextField(this.dialogDisp.mc_rank.txt_playersAmount, new s.LocalizedNumberVO(u.CastleModel.seasonLeagueData.server.divisionSize)).autoFitToBounds = true;
      this._promotionIcon.updateWithNewVO(u.CastleModel.seasonLeagueData.getCurrentPlayerPromotion());
      this.textFieldManager.registerTextField(this.dialogDisp.mc_rank.txt_rankName, new l.TextVO(c.TextHelper.toUpperCaseLocaSafeTextId(this._promotionIcon.vo.getNameTextId()))).autoFitToBounds = true;
    }
  };
  SeasonLeagueStartDialog.prototype.getInfoTextId = function () {
    switch (this.state) {
      case SeasonLeagueStartDialog.STATE_EVENT_ACTIVE:
        return "dialog_seasonLeague_starterMessage_statusSection_currentLeague_copy";
      case SeasonLeagueStartDialog.STATE_EVENT_ACTIVE_NO_RANK:
        return "dialog_seasonLeague_starterMessage_statusSection_matchmaking_copy";
      case SeasonLeagueStartDialog.STATE_EVENT_INACTIVE:
        return "dialog_seasonLeague_starterMessage_statusSection_noEvent_copy";
      default:
        return "[INVALID]";
    }
  };
  SeasonLeagueStartDialog.prototype.onClick = function (t) {
    if (d.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          p.CastleExternalDialog.dialogHandler.showHelper("", a.Localize.text("help_seasonLeague_starterMessage"));
          break;
        case this.dialogDisp.btn_showMe:
          u.CastleModel.seasonLeagueData.openEventDialog();
          this.hide();
      }
    }
  };
  Object.defineProperty(SeasonLeagueStartDialog.prototype, "state", {
    get: function () {
      return this._state;
    },
    enumerable: true,
    configurable: true
  });
  SeasonLeagueStartDialog.NAME = "SeasonLeagueStart";
  SeasonLeagueStartDialog.STATE_EVENT_INACTIVE = "eventInactive";
  SeasonLeagueStartDialog.STATE_EVENT_ACTIVE = "eventActive";
  SeasonLeagueStartDialog.STATE_EVENT_ACTIVE_NO_RANK = "eventActiveNoRank";
  return SeasonLeagueStartDialog;
}(p.CastleExternalDialog);
exports.SeasonLeagueStartDialog = g;
var C = require("./359.js");
var _ = require("./36.js");
var m = require("./121.js");
o.classImplementsInterfaces(g, "ICollectableRendererList");