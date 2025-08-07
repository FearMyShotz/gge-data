Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./31.js");
var l = require("./19.js");
var c = require("./13.js");
var u = require("./14.js");
var d = require("./81.js");
var p = require("./25.js");
var h = require("./301.js");
var g = createjs.Point;
var C = function (e) {
  function CastleAllianceBattleGroundEventEndDialogListItem() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CastleAllianceBattleGroundEventEndDialogListItem, e);
  CastleAllianceBattleGroundEventEndDialogListItem.prototype.initLoaded = function () {
    e.prototype.initLoaded.call(this);
    this._rewards = new h.SeasonLeagueSimpleRewardsComponent(this.getItemMc().mc_rewards, false, false);
  };
  CastleAllianceBattleGroundEventEndDialogListItem.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    this._rewards.onShow();
  };
  CastleAllianceBattleGroundEventEndDialogListItem.prototype.onHide = function () {
    e.prototype.onHide.call(this);
    this._rewards.onHide();
  };
  CastleAllianceBattleGroundEventEndDialogListItem.prototype.fill = function () {
    var e = this.getItemMc();
    if (this.data.isAlliance) {
      u.CastleComponent.textFieldManager.registerTextField(e.txt_title, new s.TextVO(c.TextHelper.toUpperCaseLocaSafeTextId("dialog_beyondTheHorizon_end_allianceContest")));
    } else {
      u.CastleComponent.textFieldManager.registerTextField(e.txt_title, new s.TextVO(c.TextHelper.toUpperCaseLocaSafeTextId("dialog_beyondTheHorizon_end_individualContest")));
    }
    e.mc_single.visible = e.mc_single_rank.visible = !this.data.isAlliance;
    e.mc_alli.visible = e.mc_alli_rank.visible = this.data.isAlliance;
    e.mc_single_rank.toolTipText = "rank";
    e.mc_alli_rank.toolTipText = "rank";
    this.renderPointIcon();
    u.CastleComponent.textFieldManager.registerTextField(e.txt_rank, new a.LocalizedNumberVO(this.data.rank));
    u.CastleComponent.textFieldManager.registerTextField(e.txt_points, new a.LocalizedNumberVO(this.data.points));
    this._rewards.updateWithNewData(this.data.rewards);
  };
  CastleAllianceBattleGroundEventEndDialogListItem.prototype.renderPointIcon = function () {
    var e = this.getItemMc();
    var t = new l.CollectableRenderOptions(l.CollectableRenderOptions.SET_ICON, new g(30, 30));
    t.tooltip.useAmount = false;
    p.CollectableRenderHelper.displaySingleItemComplete(this, new r.CollectableRenderClips(e.mc_points).addIconMc(e.mc_points), this.data.pointsCollectableVO, t);
  };
  return CastleAllianceBattleGroundEventEndDialogListItem;
}(d.AInfiniteScrollListItem);
exports.CastleAllianceBattleGroundEventEndDialogListItem = C;
o.classImplementsInterfaces(C, "ICollectableRendererList");