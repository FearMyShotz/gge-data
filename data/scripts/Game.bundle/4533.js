Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./75.js");
var r = require("./13.js");
var l = require("./4.js");
var c = require("./14.js");
var u = require("./81.js");
var d = require("./394.js");
var p = function (e) {
  function CastleTemporaryServerEventDialogOverviewRewardItem() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CastleTemporaryServerEventDialogOverviewRewardItem, e);
  CastleTemporaryServerEventDialogOverviewRewardItem.prototype.initLoaded = function () {
    e.prototype.initLoaded.call(this);
    this._rewards = new d.TempServerSimpleRewardsComponent(this.getItemMc());
  };
  CastleTemporaryServerEventDialogOverviewRewardItem.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    this._rewards.onShow();
  };
  CastleTemporaryServerEventDialogOverviewRewardItem.prototype.onHide = function () {
    this._rewards.onHide();
    e.prototype.onHide.call(this);
  };
  CastleTemporaryServerEventDialogOverviewRewardItem.prototype.fill = function () {
    var e = this.data;
    var t = this.getItemMc();
    e.collectableList.sort(s.ClientConstSort.sortByTempServerRewardPriority);
    this._rewards.updateWithNewData(e.collectableList);
    t.mc_indicator.gotoAndStop(e.listIndex + 1);
    if (e.usePoints) {
      c.CastleComponent.textFieldManager.registerTextField(t.txt_title, new a.TextVO(r.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempServer_forPoints", [e.rank])));
    } else {
      var i = l.CastleModel.tempServerData.getRankRangeByRank(e.rank);
      if (i.minRank == i.maxRank) {
        c.CastleComponent.textFieldManager.registerTextField(t.txt_title, new a.TextVO(r.TextHelper.toUpperCaseLocaSafeTextId("rankingRange_single", [e.rank])));
      } else {
        c.CastleComponent.textFieldManager.registerTextField(t.txt_title, new a.TextVO(r.TextHelper.toUpperCaseLocaSafeTextId("rankingRange_multi", [i.maxRank, i.minRank])));
      }
    }
  };
  return CastleTemporaryServerEventDialogOverviewRewardItem;
}(u.AInfiniteScrollListItem);
exports.CastleTemporaryServerEventDialogOverviewRewardItem = p;
o.classImplementsInterfaces(p, "ICollectableRendererList");