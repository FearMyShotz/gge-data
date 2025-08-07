Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./13.js");
var c = require("./4.js");
var u = require("./9.js");
var d = require("./20.js");
var p = require("./76.js");
var h = require("./78.js");
var g = require("./77.js");
var C = require("./8.js");
var _ = require("./11.js");
var m = require("./1784.js");
var f = function (e) {
  function GachaRankingRewardsDialog() {
    return e.call(this, GachaRankingRewardsDialog.NAME) || this;
  }
  n.__extends(GachaRankingRewardsDialog, e);
  GachaRankingRewardsDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    C.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help], d.ClickFeedbackButtonHover, 1);
  };
  GachaRankingRewardsDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new r.TextVO(l.TextHelper.toUpperCaseLocaSafeTextId("event_rewards_header")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new s.LocalizedTextVO("ranking_description_" + this.eventVO.assetName()));
    var i = new g.InfiniteScrollListOptions(m.GachaRankingRewardsDialogListItem, "GachaRankingRewards_Item", GachaRankingRewardsDialog.NAME);
    i.itemPaddingY = 0;
    i.useSmoothScroll = true;
    o.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_list.mc_items);
    this._list = new h.InfiniteScrollListComponent(new p.InfiniteScrollListClips(this.dialogDisp.mc_list).addSliderMc(this.dialogDisp.mc_list.mc_slider), i);
    this._list.onShow();
    this.updateAllInfos(true);
  };
  GachaRankingRewardsDialog.prototype.hide = function () {
    if (this._list && this._list.scrollComponent.scrollVO) {
      this._list.onHide();
      this._list.destroy();
    }
    e.prototype.hide.call(this);
  };
  GachaRankingRewardsDialog.prototype.dataList = function () {
    var e = this.eventVO.topX.concat(1);
    e.sort(function (e, t) {
      return e - t;
    });
    var t = [];
    for (var i = 0; i < e.length; i++) {
      var n = {
        rank: i > 0 ? [e[i - 1] + 1, [e[i]]] : [e[i]],
        rewards: this.eventVO.rewardLists[this.eventVO.rewardLists.length - 1 - i],
        index: i
      };
      t.push(n);
    }
    return t;
  };
  GachaRankingRewardsDialog.prototype.updateAllInfos = function (e = false) {
    var t = this.dataList();
    this._list.updateWithNewData(t, e);
    this._list.onShow();
  };
  GachaRankingRewardsDialog.prototype.onClick = function (t) {
    if (C.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          u.CastleDialogHandler.getInstance().showHelper(s.Localize.text(" "), s.Localize.text("helpPopup_" + this.eventVO.assetName()));
      }
    }
  };
  Object.defineProperty(GachaRankingRewardsDialog.prototype, "eventVO", {
    get: function () {
      return c.CastleModel.specialEventData.getActiveEventByEventId(this.dialogProperties.eventID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GachaRankingRewardsDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  GachaRankingRewardsDialog.NAME = "GachaRankingRewards";
  return GachaRankingRewardsDialog;
}(_.CastleExternalDialog);
exports.GachaRankingRewardsDialog = f;
a.classImplementsInterfaces(f, "ICollectableRendererList");