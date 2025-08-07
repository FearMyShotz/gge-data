Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./3.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./265.js");
var l = require("./31.js");
var c = require("./19.js");
var u = require("./9.js");
var d = require("./14.js");
var p = require("./20.js");
var h = require("./8.js");
var g = require("./25.js");
var C = require("./362.js");
var _ = require("./1806.js");
var m = require("./1807.js");
var f = createjs.Point;
var O = function (e) {
  function GachaComponentRanking(t) {
    var i = e.call(this, t) || this;
    h.ButtonHelper.initButtons([i.disp.btn_rewards_help], p.ClickFeedbackButtonHover);
    i.itxt_rank = d.CastleComponent.textFieldManager.registerTextField(i.disp.txt_ownRank, new a.TextVO("-"));
    d.CastleComponent.textFieldManager.registerTextField(i.disp.txt_reward, new s.LocalizedTextVO("divination_main_topreward"));
    i.disp.icon_ranking.toolTipText = "myRank";
    i.disp.btn_rewards_help.toolTipText = "rewards";
    return i;
  }
  n.__extends(GachaComponentRanking, e);
  GachaComponentRanking.prototype.onShow = function () {
    var t = this.getEventVO().topX.length > 0;
    this.setVisibility(t);
    if (t) {
      e.prototype.onShow.call(this);
      this.updateTopReward();
      this.updateRank();
    }
  };
  GachaComponentRanking.prototype.onHide = function () {
    e.prototype.onHide.call(this);
    this.destroyCollectableRenderList();
  };
  GachaComponentRanking.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    d.CastleComponent.controller.addEventListener(r.GachaEvent.UPDATED, this.bindFunction(this.onGachaUpdate));
  };
  GachaComponentRanking.prototype.removeEventListener = function () {
    e.prototype.removeEventListener.call(this);
    d.CastleComponent.controller.removeEventListener(r.GachaEvent.UPDATED, this.bindFunction(this.onGachaUpdate));
  };
  GachaComponentRanking.prototype.onGachaUpdate = function (e) {
    if (e.eventVO.eventId == this.getEventVO().eventId) {
      this.updateRank();
    }
  };
  GachaComponentRanking.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.disp.btn_rewards_help:
        this.showRankRewardDialog();
    }
  };
  GachaComponentRanking.prototype.updateTopReward = function () {
    var e = this.getEventVO().rewardLists;
    var t = e[e.length - 1].list[0];
    var i = new l.CollectableRenderClips(this.disp.mc_reward);
    var n = new c.CollectableRenderOptions(c.CollectableRenderOptions.SET_ICON, new f(60, 60));
    n.tooltip.useAmount = false;
    g.CollectableRenderHelper.displaySingleItemComplete(this, i, t, n);
  };
  GachaComponentRanking.prototype.updateRank = function () {
    this.itxt_rank.textContentVO.stringValue = this.getEventVO().ownRank <= 0 ? "-" : o.Localize.number(this.getEventVO().ownRank, false);
  };
  GachaComponentRanking.prototype.showRankRewardDialog = function () {
    u.CastleDialogHandler.getInstance().registerDefaultDialogs(_.GachaRankingRewardsDialog, new m.GachaRankingRewardsDialogProperties(this.getEventVO().eventId));
  };
  GachaComponentRanking.prototype.getEventVO = function () {
    return this._params[0];
  };
  return GachaComponentRanking;
}(C.AGachaComponent);
exports.GachaComponentRanking = O;