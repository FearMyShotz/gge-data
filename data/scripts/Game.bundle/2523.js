Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./53.js");
var r = require("./13.js");
var l = function (e) {
  function AllianceBattleGroundEventDialogOverviewRewardItem() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(AllianceBattleGroundEventDialogOverviewRewardItem, e);
  AllianceBattleGroundEventDialogOverviewRewardItem.prototype.initLoaded = function () {
    e.prototype.initLoaded.call(this);
    this._rewards = new u.TempServerSimpleRewardsComponent(this.getItemMc());
  };
  AllianceBattleGroundEventDialogOverviewRewardItem.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    this._rewards.onShow();
  };
  AllianceBattleGroundEventDialogOverviewRewardItem.prototype.onHide = function () {
    this._rewards.onHide();
    e.prototype.onHide.call(this);
  };
  AllianceBattleGroundEventDialogOverviewRewardItem.prototype.fill = function () {
    var e = this.data[0];
    var t = this.data[1];
    var i = this.getItemMc();
    this._rewards.updateWithNewData(e.collectableList);
    i.mc_indicator.gotoAndStop(Math.min(e.listIndex + 1, 4));
    if (e.usePoints) {
      c.CastleComponent.textFieldManager.registerTextField(i.txt_title, new a.TextVO(r.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempServer_forPoints", [e.rank])));
    } else {
      var n = s.ABGHelper.abgEvent.getRankRangeByRank(e.rank, t);
      if (!n) {
        return;
      }
      if (n.minRank == n.maxRank) {
        c.CastleComponent.textFieldManager.registerTextField(i.txt_title, new a.TextVO(r.TextHelper.toUpperCaseLocaSafeTextId("rankingRange_single", [e.rank])));
      } else {
        c.CastleComponent.textFieldManager.registerTextField(i.txt_title, new a.TextVO(r.TextHelper.toUpperCaseLocaSafeTextId("rankingRange_multi", [n.maxRank, n.minRank])));
      }
    }
  };
  return AllianceBattleGroundEventDialogOverviewRewardItem;
}(require("./81.js").AInfiniteScrollListItem);
exports.AllianceBattleGroundEventDialogOverviewRewardItem = l;
var c = require("./14.js");
var u = require("./394.js");
o.classImplementsInterfaces(l, "ICollectableRendererList");