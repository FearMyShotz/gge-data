Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./13.js");
var c = require("./4.js");
var u = require("./9.js");
var d = require("./1780.js");
var p = require("./1781.js");
var h = require("./35.js");
var g = require("./1782.js");
var C = require("./1783.js");
var _ = function (e) {
  function DonationEventDialogRanking(t) {
    var i = this;
    CONSTRUCTOR_HACK;
    var n = (i = e.call(this, t) || this).textFieldManager.registerTextField(i.subLayerDisp.txt_allianceName, new r.TextVO(l.TextHelper.toUpperCaseLocaSafeTextId("dialog_alliance_name_default")));
    var a = i.textFieldManager.registerTextField(i.subLayerDisp.txt_points, new r.TextVO(l.TextHelper.toUpperCaseLocaSafeTextId("dialog_highscore_totalPoints")));
    i.textFieldManager.registerTextField(i.subLayerDisp.txt_name, new r.TextVO(l.TextHelper.toUpperCaseLocaSafeTextId("dialog_highscore_name")));
    i.textFieldManager.registerTextField(i.subLayerDisp.txt_server, new r.TextVO(l.TextHelper.toUpperCaseLocaSafeTextId("ranking_server"))).verticalAlign = o.GGSVerticalAlign.BOTTOM;
    i.textFieldManager.registerTextField(i.subLayerDisp.mc_list.txt_empty, new r.LocalizedTextVO("dialog_highscore_noRankings"));
    a.verticalAlign = o.GGSVerticalAlign.BOTTOM;
    a.autoFitToBounds = true;
    i.subLayerDisp.icon_rank.toolTipText = "rankingGlobal";
    i.subLayerDisp.help_allianceName.toolTipText = "tooltip_rankingGlobal_alliance";
    i.subLayerDisp.help_points.toolTipText = "tooltip_rankingGlobal_points";
    i.subLayerDisp.help_allianceName.x = n.x + n.textWidth + i.subLayerDisp.help_allianceName.width;
    i.subLayerDisp.help_points.x = a.x + a.textWidth + i.subLayerDisp.help_points.width;
    i._leaderBoard = new p.GlobalLeaderBoardComponent(i.subLayerDisp, d.DefaultGlobalLeaderBoardItem, "dialog_highscore_name_alliance_search");
    i._leaderBoard.init(i.highscoreID);
    return i;
  }
  n.__extends(DonationEventDialogRanking, e);
  DonationEventDialogRanking.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this._leaderBoard.onShow();
    this._leaderBoard.openRewardDialogSignal.add(this.bindFunction(this.showRewards));
  };
  DonationEventDialogRanking.prototype.hide = function () {
    e.prototype.hide.call(this);
    if (this._leaderBoard) {
      this._leaderBoard.onHide();
      this._leaderBoard.openRewardDialogSignal.removeAll();
    }
  };
  DonationEventDialogRanking.prototype.showRewards = function (e = -1) {
    u.CastleDialogHandler.getInstance().registerDefaultDialogs(C.GlobalLeaderboardRankingRankingRewardsDialog, new g.DonationRankingRewardsDialogProperties("ranking_description_DonationEvent", this.getRankingRewards()));
  };
  DonationEventDialogRanking.prototype.getRankingRewards = function () {
    var e = c.CastleModel.specialEventData.getActiveEventByEventId(s.EventConst.EVENTTYPE_DONATION);
    return c.CastleModel.leaderboardRewardsData.getRewardListForDialogList(e.eventId, e.leaderBoardRewardSetID);
  };
  Object.defineProperty(DonationEventDialogRanking.prototype, "highscoreID", {
    get: function () {
      return s.HighscoreConst.DONATION_EVENT;
    },
    enumerable: true,
    configurable: true
  });
  return DonationEventDialogRanking;
}(h.CastleDialogSubLayer);
exports.DonationEventDialogRanking = _;
a.classImplementsInterfaces(_, "ICollectableRendererList", "ISublayer");