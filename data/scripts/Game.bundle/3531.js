Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./81.js");
var a = require("./8.js");
var s = require("./301.js");
var r = require("./14.js");
var l = require("./3.js");
var c = require("./13.js");
var u = require("./1.js");
var d = require("./20.js");
var p = require("./1373.js");
var h = require("./9.js");
var g = function (e) {
  function CastleStormIslandsEventEndListItem() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CastleStormIslandsEventEndListItem, e);
  CastleStormIslandsEventEndListItem.prototype.initLoaded = function () {
    e.prototype.initLoaded.call(this);
    this._rewards = new s.SeasonLeagueSimpleRewardsComponent(this.getItemMc().mc_contest_rewards.mc_rewards, false, false);
    this._playerRewards = new s.SeasonLeagueSimpleRewardsComponent(this.getItemMc().mc_contest_info.mc_rewards, false, false);
  };
  CastleStormIslandsEventEndListItem.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    this._rewards.onShow();
    this._playerRewards.onShow();
  };
  CastleStormIslandsEventEndListItem.prototype.onHide = function () {
    e.prototype.onHide.call(this);
    this._rewards.onHide();
    this._playerRewards.onHide();
  };
  CastleStormIslandsEventEndListItem.prototype.fill = function () {
    var e = this.getItemMc();
    e.mc_contest_info.visible = false;
    e.mc_contest_rewards.visible = false;
    e.mc_contest_titles.visible = false;
    if (this.data.isAlliance) {
      if (this.data.isInternalAlliance) {
        this.fillPlayerInternalAllianceRanking(e, true);
      } else {
        this.fillPlayerAllianceRanking(e);
      }
    } else if (this.data.isAlliance || this.data.hasTitle) {
      if (this.data.hasTitle) {
        this.fillTitle(e);
      }
    } else {
      this.fillPlayerInternalAllianceRanking(e, false);
    }
  };
  CastleStormIslandsEventEndListItem.prototype.fillPlayerAllianceRanking = function (e) {
    e.mc_contest_rewards.visible = true;
    r.CastleComponent.textFieldManager.registerTextField(e.mc_contest_rewards.txt_title, new l.TextVO(c.TextHelper.toUpperCaseLocaSafeTextId("dialog_island_end_cargoPointsContestRanking")));
    e.mc_contest_rewards.mc_alli_rank.toolTipText = "rank";
    e.mc_contest_rewards.mc_points.toolTipText = "points_noValue";
    r.CastleComponent.textFieldManager.registerTextField(e.mc_contest_rewards.txt_rank, new l.LocalizedNumberVO(this.data.rank == -1 ? 0 : this.data.rank));
    r.CastleComponent.textFieldManager.registerTextField(e.mc_contest_rewards.txt_points, new l.LocalizedNumberVO(this.data.points == -1 ? 0 : this.data.points));
    if (this.data.rewards && this.data.rewards.length > 0) {
      e.mc_contest_rewards.txt_copy.visible = false;
      this._rewards.updateWithNewData(this.data.rewards);
    } else {
      e.mc_contest_rewards.mc_rewards.visible = false;
      r.CastleComponent.textFieldManager.registerTextField(e.mc_contest_rewards.txt_copy, new l.LocalizedTextVO("dialog_island_end_cargoPointsContestRanking_noRewards_desc"));
    }
  };
  CastleStormIslandsEventEndListItem.prototype.fillTitle = function (e) {
    e.mc_contest_titles.visible = true;
    e.mc_contest_titles.icon_storm_lord.visible = this.data.title.isKing;
    e.mc_contest_titles.icon_title.visible = !this.data.title.isKing;
    r.CastleComponent.textFieldManager.registerTextField(e.mc_contest_titles.txt_title, new l.TextVO(c.TextHelper.toUpperCaseLocaSafeTextId("dialog_island_end_stormTitleAwarded")));
    r.CastleComponent.textFieldManager.registerTextField(e.mc_contest_titles.txt_playerTitle, new l.LocalizedTextVO(this.data.title.textID));
    r.CastleComponent.textFieldManager.registerTextField(e.mc_contest_titles.txt_copy, new l.LocalizedTextVO("dialog_island_end_stormTitle_desc"));
    a.ButtonHelper.initButton(e.mc_contest_titles.btn_titles, -1, d.ClickFeedbackButtonHover);
    var t = l.Localize.text("dialog_island_end_stormTitle_effectsList_tooltip");
    t += "\n" + this.data.title.descriptionTextVO.textId;
    e.mc_contest_titles.btn_help.toolTipText = t;
    e.mc_contest_titles.btn_titles.toolTipText = "dialog_titles_selectTitle";
  };
  CastleStormIslandsEventEndListItem.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    var i = this.getItemMc();
    switch (t.target) {
      case i.mc_contest_titles.btn_titles:
        h.CastleDialogHandler.getInstance().registerDefaultDialogs(p.CastleTitleSelectDialog);
    }
  };
  CastleStormIslandsEventEndListItem.prototype.fillPlayerInternalAllianceRanking = function (e, t) {
    e.mc_contest_info.visible = true;
    r.CastleComponent.textFieldManager.registerTextField(e.mc_contest_info.txt_title, new l.TextVO(c.TextHelper.toUpperCaseLocaSafeTextId(t ? "dialog_island_end_internalAllianceRanking" : "dialog_island_end_notAllianceMember")));
    e.mc_contest_info.mc_single_rank.toolTipText = "rank";
    e.mc_contest_info.mc_points.toolTipText = "points_noValue";
    if (this.data.rank >= 0) {
      r.CastleComponent.textFieldManager.registerTextField(e.mc_contest_info.txt_rank, new l.LocalizedNumberVO(this.data.rank));
    } else {
      r.CastleComponent.textFieldManager.registerTextField(e.mc_contest_info.txt_rank, new l.LocalizedTextVO("-"));
    }
    r.CastleComponent.textFieldManager.registerTextField(e.mc_contest_info.txt_points, new l.LocalizedNumberVO(this.data.points == -1 ? 0 : this.data.points));
    if (this.data.rewards && this.data.rewards.length > 0) {
      e.mc_contest_info.txt_copy.visible = false;
      this._playerRewards.updateWithNewData(this.data.rewards);
    } else {
      e.mc_contest_info.mc_rewards.visible = false;
      r.CastleComponent.textFieldManager.registerTextField(e.mc_contest_info.txt_copy, new l.LocalizedTextVO(t ? "dialog_island_end_internalAllianceRanking_desc" : "dialog_island_end_cargoPointsContestRanking_playerNoRewards_desc"));
    }
  };
  return CastleStormIslandsEventEndListItem;
}(o.AInfiniteScrollListItem);
exports.CastleStormIslandsEventEndListItem = g;
u.classImplementsInterfaces(g, "ICollectableRendererList");