Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./13.js");
var u = require("./20.js");
var d = require("./8.js");
var p = require("./11.js");
var h = function (e) {
  function DifficultyScalingRewardOverviewDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, DifficultyScalingRewardOverviewDialog.NAME) || this;
  }
  n.__extends(DifficultyScalingRewardOverviewDialog, e);
  DifficultyScalingRewardOverviewDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    d.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help], u.ClickFeedbackButtonHover, 1);
    d.ButtonHelper.initBasicButtons([this.dialogDisp.btn_tab0Unselected, this.dialogDisp.btn_tab1Unselected, this.dialogDisp.btn_tab2Unselected]);
  };
  DifficultyScalingRewardOverviewDialog.prototype.initScrollList = function () {
    var e = new C.InfiniteScrollListOptions(f.DifficultyScalingRewardOverviewDialogScrollItem, "EventDifficultyRewardListItem", m.DifficultyScalingSelectDialog.NAME);
    e.itemPaddingY = 6;
    e.useSmoothScroll = true;
    this.scrollList = new g.InfiniteScrollListComponent(new _.InfiniteScrollListClips(this.dialogDisp.mc_list).addMaskMc(this.dialogDisp.mc_list.mc_mask).addItemContainerMc(this.dialogDisp.mc_list.mc_items).addSliderMc(this.dialogDisp.mc_list.mc_slider), e);
    this.scrollList.scrollComponent.deltaStepsMouseWheel = 10;
  };
  DifficultyScalingRewardOverviewDialog.prototype.updateContent = function (e) {
    var t = e.getRewardsAndPointsArrayForDifficultyDescending(this.dialogProperties.difficultyVO ? this.dialogProperties.difficultyVO.difficultyID : 0);
    this.scrollList.updateWithNewData(t);
    this.scrollList.scrollToData(0, true);
  };
  DifficultyScalingRewardOverviewDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.initScrollList();
    this.updateText();
    this.scrollList.onShow();
    if (this.dialogProperties.singlePlayerLeagueVO) {
      this.selectTab(0);
    } else if (this.dialogProperties.alliancePlayerLeagueVO) {
      this.selectTab(1);
    }
  };
  DifficultyScalingRewardOverviewDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this.scrollList.destroy();
    o.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_list.mc_items);
  };
  DifficultyScalingRewardOverviewDialog.prototype.selectTab = function (e) {
    this.dialogDisp.btn_tab2Selected.visible = false;
    this.dialogDisp.btn_tab2Unselected.visible = false;
    switch (e) {
      case 0:
        this.dialogDisp.btn_tab0Selected.visible = !!this.dialogProperties.singlePlayerLeagueVO;
        this.dialogDisp.btn_tab0Unselected.visible = false;
        this.dialogDisp.btn_tab1Unselected.visible = !!this.dialogProperties.alliancePlayerLeagueVO;
        this.dialogDisp.btn_tab1Selected.visible = false;
        this.updateContent(this.dialogProperties.singlePlayerLeagueVO);
        break;
      case 1:
        this.dialogDisp.btn_tab0Selected.visible = false;
        this.dialogDisp.btn_tab0Unselected.visible = !!this.dialogProperties.singlePlayerLeagueVO;
        this.dialogDisp.btn_tab1Unselected.visible = false;
        this.dialogDisp.btn_tab1Selected.visible = !!this.dialogProperties.alliancePlayerLeagueVO;
        this.updateContent(this.dialogProperties.alliancePlayerLeagueVO);
    }
  };
  DifficultyScalingRewardOverviewDialog.prototype.updateText = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new l.TextVO(c.TextHelper.toUpperCaseLocaSafeTextId("dialog_difficultyScaling_rewardOverview_title")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new r.LocalizedTextVO("dialog_difficultyScaling_eventRankingRewards_desc", [this.dialogProperties.difficultyVO ? this.dialogProperties.difficultyVO.name_textID : "dialog_difficultyScaling_confirmClassic_title"]));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_tab0Selected.txt_copy, new l.TextVO(c.TextHelper.toUpperCaseLocaSafeTextId("dialog_difficultyScaling_playerRanking_title")));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_tab0Unselected.txt_copy, new l.TextVO(c.TextHelper.toUpperCaseLocaSafeTextId("dialog_difficultyScaling_playerRanking_title")));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_tab1Selected.txt_copy, new l.TextVO(c.TextHelper.toUpperCaseLocaSafeTextId("dialog_difficultyScaling_allianceRanking_desc")));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_tab1Unselected.txt_copy, new l.TextVO(c.TextHelper.toUpperCaseLocaSafeTextId("dialog_difficultyScaling_allianceRanking_desc")));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_tab2Selected.txt_copy, new l.TextVO(c.TextHelper.toUpperCaseLocaSafeTextId("dialog_difficultyScaling_extraRewards_desc")));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_tab2Unselected.txt_copy, new l.TextVO(c.TextHelper.toUpperCaseLocaSafeTextId("dialog_difficultyScaling_extraRewards_desc")));
  };
  DifficultyScalingRewardOverviewDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_help:
        p.CastleExternalDialog.dialogHandler.showHelper("", s.Localize.text("help_difficultyScaling"));
        break;
      case this.dialogDisp.btn_tab0Unselected:
        this.selectTab(0);
        break;
      case this.dialogDisp.btn_tab1Unselected:
        this.selectTab(1);
    }
  };
  Object.defineProperty(DifficultyScalingRewardOverviewDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  DifficultyScalingRewardOverviewDialog.NAME = "EventDifficultyRewardList";
  return DifficultyScalingRewardOverviewDialog;
}(p.CastleExternalDialog);
exports.DifficultyScalingRewardOverviewDialog = h;
var g = require("./78.js");
var C = require("./77.js");
var _ = require("./76.js");
var m = require("./825.js");
var f = require("./3728.js");
a.classImplementsInterfaces(h, "ICollectableRendererList");