Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./6.js");
var h = require("./39.js");
var g = require("./4.js");
var C = require("./24.js");
var _ = function (e) {
  function CastleAchievementDialogOverview(t) {
    var i = this;
    CONSTRUCTOR_HACK;
    (i = e.call(this, t) || this).textFieldManager.registerTextField(i.sublayerDisp.txt_totalProgress, new u.LocalizedTextVO("dialog_achv_totalProgress"));
    i.textFieldManager.registerTextField(i.sublayerDisp.txt_nextProgress, new u.LocalizedTextVO("dialog_achv_progressNextReward"));
    i.textFieldManager.registerTextField(i.sublayerDisp.txt_lastAchievements, new u.LocalizedTextVO("dialog_achv_lastAchievements"));
    i.itxt_totalProgress_value = i.textFieldManager.registerTextField(i.sublayerDisp.txt_totalProgress_value, new u.LocalizedTextVO("value_percentage", [0]));
    i.itxt_nextProgress_value = i.textFieldManager.registerTextField(i.sublayerDisp.txt_nextProgress_value, new u.LocalizedTextVO("value_percentage", [0]));
    i.itxt_rewardAmount = i.textFieldManager.registerTextField(i.sublayerDisp.mc_rewards.txt_rewardAmount, new c.LocalizedNumberVO(0));
    i.itxt_description = i.textFieldManager.registerTextField(i.sublayerDisp.txt_description, new u.LocalizedTextVO("dialog_achv_desc"));
    i.sublayerDisp.mc_rewards.mc_symbolHolder_tooltip.toolTipText = h.ClientConstTextIds.SYMBOL;
    i.sublayerDisp.mc_rewards.mc_ruby_tooltip.toolTipText = h.ClientConstTextIds.C2;
    return i;
  }
  n.__extends(CastleAchievementDialogOverview, e);
  CastleAchievementDialogOverview.prototype.show = function (t) {
    this.setProgress();
    this.setLastAchievements();
    e.prototype.show.call(this, t);
  };
  CastleAchievementDialogOverview.prototype.setProgress = function () {
    var e = g.CastleModel.castleAchievementData.calculateMainAchievementByAP();
    var t = g.CastleModel.crestSymbolData.getCrestSymbolVOByID(e.rewards.getItemByType(m.CollectableEnum.CREST_SYMBOL).id);
    this.itxt_totalProgress_value.textContentVO.textReplacements = [g.CastleModel.castleAchievementData.userProgressInPercent];
    this.itxt_nextProgress_value.textContentVO.textReplacements = [Math.min(Math.round(e.currentRelativeProgress() * 100), 100)];
    this.itxt_rewardAmount.textContentVO.numberValue = e.rewards.getAmountOrDefaultByType(m.CollectableEnum.C2);
    a.MovieClipHelper.clearMovieClip(this.sublayerDisp.mc_rewards.mc_symbolHolder);
    this.sublayerDisp.mc_rewards.mc_symbolHolder.addChild(f.CrestHelper.getCrestSymbolGraphic(t, 45, 45, null));
    this.sublayerDisp.mc_rewards.mc_symbolHolder_tooltip.toolTipText = l.Localize.text("dialog_achv_crest", [t ? t.toolTipText : ""]);
    var i = p.int(g.CastleModel.castleAchievementData.achievementPoints);
    this.sublayerDisp.mc_nextProgressBar.scaleX = Math.min(1, e.currentRelativeProgress());
    var n = e.currentRelativeAchievementPoints() > e.requiredRelativeAchievementPoints();
    this.subLayerDisp.mc_rewards.visible = !n;
    this.sublayerDisp.mc_nextProgressBarOverlay.toolTipText = this.sublayerDisp.mc_nextProgressBar.toolTipText = n ? l.Localize.text("dialog_achievement_progress_final_tooltip", [new c.LocalizedNumberVO(e.currentRelativeAchievementPoints(), false), new c.LocalizedNumberVO(e.requiredRelativeAchievementPoints(), false)]) : l.Localize.text("dialog_achv_progress_tooltip", [new c.LocalizedNumberVO(e.currentRelativeAchievementPoints(), false), new c.LocalizedNumberVO(e.requiredRelativeAchievementPoints(), false)]);
    this.sublayerDisp.mc_totalProgressBar.scaleX = Math.max(Math.min(i / g.CastleModel.castleAchievementData.totalPossibleAchievementPoints, 1), 0);
    this.sublayerDisp.mc_totalProgressBarOverlay.toolTipText = this.sublayerDisp.mc_totalProgressBar.toolTipText = l.Localize.text("dialog_achv_progress_tooltip", [new c.LocalizedNumberVO(i, false), new c.LocalizedNumberVO(g.CastleModel.castleAchievementData.totalPossibleAchievementPoints, false)]);
  };
  CastleAchievementDialogOverview.prototype.setLastAchievements = function () {
    for (var e = 0; e < 3; ++e) {
      var t = this.sublayerDisp["achv_item" + e];
      a.MovieClipHelper.clearMovieClip(t);
      if (g.CastleModel.castleAchievementData.lastThreeAchievementIDs[e] > 0) {
        var i = g.CastleModel.castleAchievementData.getAchievementByID(g.CastleModel.castleAchievementData.lastThreeAchievementIDs[e]);
        t.addChild(i.displayDisp);
        t.mouseChildren = false;
        s.info("tooltip: " + i.achievementSerieVO.nameString + " " + l.Localize.text("building_level", [i.achievementSeriesNumber]));
        t.toolTipText = i.achievementSerieVO.nameString + " " + l.Localize.text("building_level", [i.achievementSeriesNumber]);
        t.mouseChildren = false;
        if (i.hasYellowBar && !i.achievementSerieVO.hideIconText) {
          this.sublayerDisp["itxt_achievement_value" + e] = this.textFieldManager.registerTextField(this.sublayerDisp["txt_achievement_value" + e], new d.TextVO(i.achievementSerieVO.getYellowBarString(i.achievementSeriesNumber)));
        } else {
          this.sublayerDisp["itxt_achievement_value" + e] = this.textFieldManager.registerTextField(this.sublayerDisp["txt_achievement_value" + e], new d.TextVO(""));
        }
      } else {
        t.toolTipText = null;
        this.sublayerDisp["itxt_achievement_value" + e] = this.textFieldManager.registerTextField(this.sublayerDisp["txt_achievement_value" + e], new d.TextVO(""));
        t.addChild(new C.CastleGoodgameExternalClip(CastleAchievementDialogOverview.NO_ACHIEVEMENT_NAME, o.BasicModel.basicLoaderData.getVersionedItemAssetUrl(CastleAchievementDialogOverview.NO_ACHIEVEMENT_NAME), null, 0, false).asDisplayObject());
      }
    }
  };
  Object.defineProperty(CastleAchievementDialogOverview.prototype, "sublayerDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleAchievementDialogOverview.__initialize_static_members = function () {
    CastleAchievementDialogOverview.NO_ACHIEVEMENT_NAME = "Achievement_0";
  };
  return CastleAchievementDialogOverview;
}(require("./35.js").CastleDialogSubLayer);
exports.CastleAchievementDialogOverview = _;
var m = require("./12.js");
var f = require("./61.js");
r.classImplementsInterfaces(_, "ICollectableRendererList", "ISublayer");
_.__initialize_static_members();