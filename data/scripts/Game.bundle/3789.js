Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./210.js");
var c = require("./13.js");
var u = require("./15.js");
var d = require("./85.js");
var p = require("./4.js");
var h = function (e) {
  function ScoreEventGlobalLeaderBoardDialog(t) {
    return e.call(this, t) || this;
  }
  n.__extends(ScoreEventGlobalLeaderBoardDialog, e);
  ScoreEventGlobalLeaderBoardDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    var i = this.textFieldManager.registerTextField(this.dialogDisp.txt_allianceName, new r.TextVO(c.TextHelper.toUpperCaseLocaSafeTextId("dialog_alliance_name_default")));
    var n = this.textFieldManager.registerTextField(this.dialogDisp.txt_points, new r.TextVO(c.TextHelper.toUpperCaseLocaSafeTextId("dialog_highscore_totalPoints")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_name, new r.TextVO(c.TextHelper.toUpperCaseLocaSafeTextId("dialog_highscore_name")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_server, new r.TextVO(c.TextHelper.toUpperCaseLocaSafeTextId("ranking_server"))).verticalAlign = o.GGSVerticalAlign.BOTTOM;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_list.txt_empty, new s.LocalizedTextVO("dialog_highscore_noRankings"));
    this.dialogDisp.icon_rank.toolTipText = "rankingGlobal";
    this.dialogDisp.help_allianceName.toolTipText = "tooltip_rankingGlobal_alliance";
    this.dialogDisp.help_points.visible = false;
    this.dialogDisp.help_allianceName.x = i.x + i.textWidth + this.dialogDisp.help_allianceName.width;
    this.dialogDisp.help_points.x = n.x + n.textWidth + this.dialogDisp.help_points.width;
  };
  ScoreEventGlobalLeaderBoardDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.updatePoints();
    u.CastleBasicController.getInstance().addEventListener(l.CastleScoreEventEvent.UPDATE_POINTS, this.bindFunction(this.updatePoints));
  };
  ScoreEventGlobalLeaderBoardDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    u.CastleBasicController.getInstance().removeEventListener(l.CastleScoreEventEvent.UPDATE_POINTS, this.bindFunction(this.updatePoints));
  };
  ScoreEventGlobalLeaderBoardDialog.prototype.updatePoints = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_ownPoints, new d.CastleLocalizedNumberVO(this.eventVO.ownPoints, {
      compactThreshold: 1000000
    }));
  };
  Object.defineProperty(ScoreEventGlobalLeaderBoardDialog.prototype, "leagueTypeID", {
    get: function () {
      return this.eventVO.leagueID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ScoreEventGlobalLeaderBoardDialog.prototype, "eventVO", {
    get: function () {
      return p.CastleModel.specialEventData.getActiveEventByEventId(this.eventID);
    },
    enumerable: true,
    configurable: true
  });
  ScoreEventGlobalLeaderBoardDialog.prototype.getGlobalLeaderBoardRewards = function (e = -1) {
    return this.eventVO.getGlobalLeaderBoardRewards(e);
  };
  return ScoreEventGlobalLeaderBoardDialog;
}(require("./3790.js").AGlobalLeaderBoardDialog);
exports.ScoreEventGlobalLeaderBoardDialog = h;
a.classImplementsInterfaces(h, "ICollectableRendererList");