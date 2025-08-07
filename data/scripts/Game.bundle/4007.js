Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = function (e) {
  function CastleStormIslandsMainDialogOverviewRewardItem() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CastleStormIslandsMainDialogOverviewRewardItem, e);
  CastleStormIslandsMainDialogOverviewRewardItem.prototype.initLoaded = function () {
    e.prototype.initLoaded.call(this);
    this._rewards = new l.TempServerSimpleRewardsComponent(this.getItemMc());
  };
  CastleStormIslandsMainDialogOverviewRewardItem.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    this._rewards.onShow();
  };
  CastleStormIslandsMainDialogOverviewRewardItem.prototype.onHide = function () {
    this._rewards.onHide();
    e.prototype.onHide.call(this);
  };
  CastleStormIslandsMainDialogOverviewRewardItem.prototype.fill = function () {
    var e = this.data[0];
    var t = this.data[1];
    var i = this.getItemMc();
    this._rewards.updateWithNewData(e.rewardList);
    if (e.isTopXReward) {
      i.mc_indicator.gotoAndStop(Math.min(t + 1, 4));
      c.GoodgameTextFieldManager.getInstance().registerTextField(i.txt_title, new s.LocalizedTextVO("dialog_eiland_topXReward_copy", [e.topXValue]));
    } else {
      i.mc_indicator.gotoAndStop(4);
      c.GoodgameTextFieldManager.getInstance().registerTextField(i.txt_title, new s.LocalizedTextVO("dialog_eiland_pointReward_copy", [new a.LocalizedNumberVO(e.cargoPointsNeeded, false)]));
    }
  };
  return CastleStormIslandsMainDialogOverviewRewardItem;
}(require("./81.js").AInfiniteScrollListItem);
exports.CastleStormIslandsMainDialogOverviewRewardItem = r;
var l = require("./394.js");
var c = require("./2.js");
o.classImplementsInterfaces(r, "ICollectableRendererList");