Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./13.js");
var c = require("./4.js");
var u = require("./174.js");
var d = require("./8.js");
var p = require("./11.js");
var h = createjs.Point;
var g = function (e) {
  function SeasonLeagueMatchmakingDialog() {
    return e.call(this, SeasonLeagueMatchmakingDialog.NAME) || this;
  }
  n.__extends(SeasonLeagueMatchmakingDialog, e);
  SeasonLeagueMatchmakingDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    d.ButtonHelper.initButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close, this.dialogDisp.btn_ok], m.ClickFeedbackButton);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new r.TextVO(l.TextHelper.toUpperCaseLocaSafeTextId("dialog_seasonLeague_matchmakingDialog_header"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_status, new r.TextVO(l.TextHelper.toUpperCaseLocaSafeTextId("dialog_seasonLeague_matchmakingDialog_status_header"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_playersTitle, new r.TextVO(l.TextHelper.toUpperCaseLocaSafeTextId("dialog_seasonLeague_playersInDivision_text"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_rankTitle, new r.TextVO(l.TextHelper.toUpperCaseLocaSafeTextId("dialog_seasonLeague_yourCurrentRank_text"))).autoFitToBounds = true;
    this._promotionIcon = new C.SeasonLeaguePromotionIconComponent(this.dialogDisp.mc_rankIcon, C.SeasonLeaguePromotionIconComponent.TYPE_NORMAL, new h(80, 80));
  };
  SeasonLeagueMatchmakingDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.controller.addEventListener(u.SeasonLeagueEvent.ON_INFO_UPDATED, this.bindFunction(this.onSeasonInfoUpdated));
    if (c.CastleModel.seasonLeagueData.server.divisionSize == -1) {
      c.CastleModel.seasonLeagueData.server.requestKLI();
    }
    this.updateInfo();
  };
  SeasonLeagueMatchmakingDialog.prototype.hide = function () {
    this.controller.addEventListener(u.SeasonLeagueEvent.ON_INFO_UPDATED, this.bindFunction(this.onSeasonInfoUpdated));
    e.prototype.hide.call(this);
  };
  SeasonLeagueMatchmakingDialog.prototype.updateInfo = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new s.LocalizedTextVO("dialog_seasonLeague_matchmakingDialog_copy", [c.CastleModel.seasonLeagueData.getActiveSeasonEventNameId()])).autoFitToBounds = true;
    var e = c.CastleModel.seasonLeagueData.server.divisionSize != -1 ? a.Localize.integer(c.CastleModel.seasonLeagueData.server.divisionSize) : "-";
    this.textFieldManager.registerTextField(this.dialogDisp.txt_playersAmount, new r.TextVO(e)).autoFitToBounds = true;
    var t = c.CastleModel.seasonLeagueData.getCurrentPlayerPromotion();
    this._promotionIcon.updateWithNewVO(t);
    if (t) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_rankName, new r.TextVO(l.TextHelper.toUpperCaseLocaSafeTextId(t.getNameTextId()))).autoFitToBounds = true;
    }
  };
  SeasonLeagueMatchmakingDialog.prototype.onClick = function (t) {
    if (d.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_ok:
          p.CastleExternalDialog.dialogHandler.registerDefaultDialogs(_.SeasonLeagueMainDialog);
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          p.CastleExternalDialog.dialogHandler.showHelper("", a.Localize.text("help_seasonLeague_matchmakingDialog"));
      }
    }
  };
  SeasonLeagueMatchmakingDialog.prototype.onSeasonInfoUpdated = function (e) {
    this.updateInfo();
  };
  SeasonLeagueMatchmakingDialog.NAME = "SeasonLeagueMatchmaking";
  return SeasonLeagueMatchmakingDialog;
}(p.CastleExternalDialog);
exports.SeasonLeagueMatchmakingDialog = g;
var C = require("./359.js");
var _ = require("./808.js");
var m = require("./36.js");
o.classImplementsInterfaces(g, "ICollectableRendererList");