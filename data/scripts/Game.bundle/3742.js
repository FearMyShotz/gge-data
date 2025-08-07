Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./13.js");
var u = require("./4.js");
var d = require("./659.js");
var p = require("./40.js");
var h = require("./8.js");
var g = require("./809.js");
var C = function (e) {
  function SamuraiDaimyoEventDialogBottomMenu(t) {
    var i = e.call(this, t) || this;
    i.init();
    return i;
  }
  n.__extends(SamuraiDaimyoEventDialogBottomMenu, e);
  SamuraiDaimyoEventDialogBottomMenu.prototype.init = function () {
    h.ButtonHelper.initButton(this.disp.btn_rewards, -1, f.ClickFeedbackButtonBackground);
    _.CastleComponent.textFieldManager.registerTextField(this.disp.btn_rewards.txt_text, new s.TextVO(c.TextHelper.toUpperCaseLocaSafeTextId("rewards"))).autoFitToBounds = true;
    _.CastleComponent.textFieldManager.registerTextField(this.disp.txt_info, new r.LocalizedTextVO("dialog_samuraiInvasionDaimyo_rewards_desc")).autoFitToBounds = true;
    this.disp.mc_points.mouseChildren = false;
    this.disp.mc_rank.mouseChildren = false;
    this.disp.mc_points.toolTipText = "warEffortPoints";
    this.disp.mc_rank.toolTipText = "allianceRanking";
  };
  SamuraiDaimyoEventDialogBottomMenu.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    _.CastleComponent.controller.addEventListener(d.SamuraiDaimyoEvent.ON_OWN_RANKS_UPDATED, this.bindFunction(this.onDataUpdated));
    this.updateInfos(true);
    u.CastleModel.samuraiDaimyoData.server.requestGDW();
  };
  SamuraiDaimyoEventDialogBottomMenu.prototype.onHide = function () {
    _.CastleComponent.controller.removeEventListener(d.SamuraiDaimyoEvent.ON_OWN_RANKS_UPDATED, this.bindFunction(this.onDataUpdated));
    e.prototype.onHide.call(this);
  };
  SamuraiDaimyoEventDialogBottomMenu.prototype.updateInfos = function (e = false) {
    if (e) {
      _.CastleComponent.textFieldManager.registerTextField(this.disp.mc_points.txt_text, new s.TextVO("???"));
      _.CastleComponent.textFieldManager.registerTextField(this.disp.mc_rank.txt_text, new s.TextVO("???"));
    } else {
      _.CastleComponent.textFieldManager.registerTextField(this.disp.mc_points.txt_text, new l.LocalizedNumberVO(u.CastleModel.samuraiDaimyoData.server.ownHighscorePoints));
      _.CastleComponent.textFieldManager.registerTextField(this.disp.mc_rank.txt_text, new l.LocalizedNumberVO(u.CastleModel.samuraiDaimyoData.server.ownHighscoreRank));
    }
  };
  SamuraiDaimyoEventDialogBottomMenu.prototype.onClick = function (t) {
    if (h.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.disp.btn_rewards:
          _.CastleComponent.dialogHandler.registerDialogs(m.SeasonLeagueRewardOverviewDialog, new g.SeasonLeagueRewardOverviewDialogProperties(u.CastleModel.samuraiDaimyoData.xml.getRewardOverviewItems(u.CastleModel.specialEventData.getActiveEventByEventId(a.EventConst.EVENTTYPE_SAMURAI_INVASION).allianceBarVO.rewardSetId), "dialog_samuraiInvasionDaimyo_allianceReward_header", "dialog_samuraiInvasionDaimyo_allianceReward_desc", "help_samuraiInvasionDaimyo_allianceReward"));
      }
    }
  };
  SamuraiDaimyoEventDialogBottomMenu.prototype.onDataUpdated = function (e) {
    this.updateInfos();
  };
  return SamuraiDaimyoEventDialogBottomMenu;
}(p.CastleItemRenderer);
exports.SamuraiDaimyoEventDialogBottomMenu = C;
var _ = require("./14.js");
var m = require("./657.js");
var f = require("./121.js");
o.classImplementsInterfaces(C, "ICollectableRendererList");