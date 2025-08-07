Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./13.js");
var l = require("./14.js");
var c = require("./81.js");
var u = require("./301.js");
var d = require("./386.js");
var p = require("./2.js");
var h = function (e) {
  function CastleTempServerEventEndDialogListItem() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CastleTempServerEventEndDialogListItem, e);
  CastleTempServerEventEndDialogListItem.prototype.initLoaded = function () {
    e.prototype.initLoaded.call(this);
    this._rewards = new u.SeasonLeagueSimpleRewardsComponent(this.getItemMc().mc_rewards, false, false, 0);
  };
  CastleTempServerEventEndDialogListItem.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    this._rewards.onShow();
  };
  CastleTempServerEventEndDialogListItem.prototype.onHide = function () {
    e.prototype.onHide.call(this);
    this._rewards.onHide();
  };
  CastleTempServerEventEndDialogListItem.prototype.fill = function () {
    var e = this.getItemMc();
    l.CastleComponent.textFieldManager.registerTextField(e.txt_title, new s.TextVO(r.TextHelper.toUpperCaseLocaSafeTextId(this.data.isDaily ? "dialog_tempServer_dailyTask_header" : "dialog_beyondTheHorizon_end_individualContest")));
    e.mc_single_rank.toolTipText = "rank";
    this.renderPointIcon();
    l.CastleComponent.textFieldManager.registerTextField(e.txt_rank, new s.TextVO(this.data.isDaily ? " " : a.Localize.number(this.data.rank)));
    l.CastleComponent.textFieldManager.registerTextField(e.txt_points, new s.TextVO(this.data.isDaily ? " " : a.Localize.number(this.data.points)));
    l.CastleComponent.textFieldManager.registerTextField(e.txt_daily_copy1, new s.TextVO(this.data.isDaily ? a.Localize.text("currency_name_DailyDutyPoints") : " "));
    l.CastleComponent.textFieldManager.registerTextField(e.txt_daily_value1, new s.TextVO(this.data.isDaily ? a.Localize.number(this.data.mandatoryPoints) : " "));
    l.CastleComponent.textFieldManager.registerTextField(e.txt_daily_copy2, new s.TextVO(this.data.isDaily ? a.Localize.text("dialog_tempServer_dailyTask_RewardStep_short") : " "));
    l.CastleComponent.textFieldManager.registerTextField(e.txt_daily_value2, new s.TextVO(this.data.isDaily ? a.Localize.text(p.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [this.data.rewardLevel, this.data.rewardLevelMax]) : " "));
    this._rewards.updateWithNewData(this.data.rewards);
  };
  CastleTempServerEventEndDialogListItem.prototype.renderPointIcon = function () {
    this.getItemMc().icon_might.visible = !this.data.isDaily && this.data.scoring == d.TempServerConfigurationVO.SCORING_SYSTEM_MIGHT;
    this.getItemMc().icon_collector.visible = !this.data.isDaily && this.data.scoring == d.TempServerConfigurationVO.SCORING_SYSTEM_COLLECTOR;
    this.getItemMc().icon_rankSwap.visible = !this.data.isDaily && this.data.scoring == d.TempServerConfigurationVO.SCORING_SYSTEM_RANK_SWAP;
    this.getItemMc().icon_charge.visible = false;
    this.getItemMc().mc_single_rank.visible = !this.data.isDaily;
    this.getItemMc().mc_daily.visible = this.data.isDaily;
    this.getItemMc().mc_single.visible = !this.data.isDaily;
    this.getItemMc().icon_might.toolTipText = "playerMight";
    this.getItemMc().icon_collector.toolTipText = "currency_name_Heritage";
    this.getItemMc().icon_rankSwap.toolTipText = "dialog_tempServer_collectPoints_tooltip_rankSwap";
    this.getItemMc().icon_charge.toolTipText = "dialog_tempServer_collectPoints_tooltip_tier_charge";
  };
  return CastleTempServerEventEndDialogListItem;
}(c.AInfiniteScrollListItem);
exports.CastleTempServerEventEndDialogListItem = h;
o.classImplementsInterfaces(h, "ICollectableRendererList");