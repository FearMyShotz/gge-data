Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./13.js");
var l = require("./290.js");
var c = require("./40.js");
var u = createjs.MovieClip;
var d = function (e) {
  function SeasonLeagueRewardOverviewDialogItem(t, i, n) {
    var a = this;
    a._dispCreator = new l.DispCreatorComponent();
    a._index = 0;
    CONSTRUCTOR_HACK;
    a = e.call(this, new u()) || this;
    t.addChild(a.disp);
    a._vo = i;
    a._index = n;
    a._dispCreator.init(a.disp);
    a._dispCreator.dispContainer.mouseChildren = true;
    a._dispCreator.cacheDisp = false;
    a._dispCreator.switchCreationState(true);
    a._dispCreator.addClip(new o.GoodgameDisplayObjectClipExternal(SeasonLeagueRewardOverviewDialogItem.ASSET_CLIP_NAME, p.IsoHelper.view.getAssetFileURL(_.SeasonLeagueRewardOverviewDialog.NAME)));
    a._dispCreator.switchCreationState(false);
    var c = a.getItemMc();
    a._rewards = new C.SeasonLeagueSimpleRewardsComponent(c, true, true, 0);
    a._rewardAlign = new g.ItemCenterAlignComponent(c, "mc_item", true);
    var d = h.CastleComponent.textFieldManager.registerTextField(c.txt_text, new s.TextVO(r.TextHelper.toUpperCaseLocaSafe(i.text)));
    d.autoFitToBounds = true;
    d.verticalAlign = m.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    c.mc_color.gotoAndStop(Math.min(a._index + 1, 4));
    a._rewardAlign.align(i.rewards.length);
    a._rewards.updateWithNewData(i.rewards);
    return a;
  }
  n.__extends(SeasonLeagueRewardOverviewDialogItem, e);
  SeasonLeagueRewardOverviewDialogItem.prototype.destroy = function () {
    e.prototype.destroy.call(this);
    this._dispCreator.destroy();
  };
  SeasonLeagueRewardOverviewDialogItem.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    this._rewards.onShow();
  };
  SeasonLeagueRewardOverviewDialogItem.prototype.onHide = function () {
    this._rewards.onHide();
    e.prototype.onHide.call(this);
  };
  SeasonLeagueRewardOverviewDialogItem.prototype.getItemMc = function () {
    return this._dispCreator.getClipMc(0);
  };
  Object.defineProperty(SeasonLeagueRewardOverviewDialogItem.prototype, "vo", {
    get: function () {
      return this._vo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueRewardOverviewDialogItem.prototype, "index", {
    get: function () {
      return this._index;
    },
    enumerable: true,
    configurable: true
  });
  SeasonLeagueRewardOverviewDialogItem.ASSET_CLIP_NAME = "SeasonLeagueRewardOverview_Item";
  return SeasonLeagueRewardOverviewDialogItem;
}(c.CastleItemRenderer);
exports.SeasonLeagueRewardOverviewDialogItem = d;
var p = require("./46.js");
var h = require("./14.js");
var g = require("./524.js");
var C = require("./301.js");
var _ = require("./657.js");
var m = require("./42.js");
a.classImplementsInterfaces(d, "ICollectableRendererList");