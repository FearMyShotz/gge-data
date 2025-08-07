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
var u = require("./280.js");
var d = require("./281.js");
var p = require("./163.js");
var h = require("./59.js");
var g = require("./8.js");
var C = require("./11.js");
var _ = function (e) {
  function DifficultyScalingRewardOverviewDialogComplex() {
    CONSTRUCTOR_HACK;
    return e.call(this, DifficultyScalingRewardOverviewDialogComplex.NAME) || this;
  }
  n.__extends(DifficultyScalingRewardOverviewDialogComplex, e);
  DifficultyScalingRewardOverviewDialogComplex.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    g.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help], m.ClickFeedbackButton);
    g.ButtonHelper.initBasicButtons([this.dialogDisp.btn_tab0Unselected, this.dialogDisp.btn_tab1Unselected, this.dialogDisp.btn_tab2Unselected]);
  };
  DifficultyScalingRewardOverviewDialogComplex.prototype.initScrollList = function () {
    var e = new u.AccordionComponentProperties();
    e.scrollStrategy = h.DynamicSizeScrollStrategyVertical;
    e.disableButtons = true;
    e.scrollStepPixels = 40;
    e.scrollDuration = 0;
    this.scrollList = new f.DynamicSliderAccordionComponent(this.dialogDisp.mc_list, e);
  };
  DifficultyScalingRewardOverviewDialogComplex.prototype.updateContent = function (e, t) {
    var i = e.getRewardsAndPointsArrayForDifficultyDescending(this.dialogProperties.difficultyVO ? this.dialogProperties.difficultyVO.difficultyID : 0);
    var n = new d.GenericCollapsibleItemProperties(new p.LayoutMargin(0, 6, 0, 0), true, 0.2, 0.2, false);
    this.scrollList.hide();
    var o = [];
    if (t) {
      for (var a = 0; a < i.length; a++) {
        var s = new O.DifficultyScalingRewardDialogListItem(i[a], n);
        o.push(s);
      }
    } else {
      for (var r = 0; r < 3; r++) {
        s = new O.DifficultyScalingRewardDialogListItem(i[r], n);
        o.push(s);
      }
      for (var l = e.getRewardGroupsAndPointsArrayForDifficultyDescending(), c = 0; c < l.length; c++) {
        var u;
        u = l[c][0].length == 1 ? new y.DifficultyScalingRewardDialogListItemSingleHeader(l[c], n) : new E.DifficultyScalingRewardDialogListItemDoubleHeader(l[c], n);
        o.push(u);
      }
    }
    for (var h = 0; h < o.length; h++) {
      this.scrollList.addItem(o[h]);
    }
    this.scrollList.show();
    this.scrollList.scrollToTop();
  };
  DifficultyScalingRewardOverviewDialogComplex.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.initScrollList();
    this.updateText();
    if (this.dialogProperties.singlePlayerLeagueVO) {
      this.selectTab(0);
    } else if (this.dialogProperties.alliancePlayerLeagueVO) {
      this.selectTab(1);
    }
  };
  DifficultyScalingRewardOverviewDialogComplex.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this.scrollList.hide();
    this.scrollList.destroy();
    o.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_list.mc_items);
  };
  DifficultyScalingRewardOverviewDialogComplex.prototype.selectTab = function (e) {
    this.dialogDisp.btn_tab2Selected.visible = false;
    this.dialogDisp.btn_tab2Unselected.visible = false;
    switch (e) {
      case 0:
        this.dialogDisp.btn_tab0Selected.visible = !!this.dialogProperties.singlePlayerLeagueVO;
        this.dialogDisp.btn_tab0Unselected.visible = false;
        this.dialogDisp.btn_tab1Unselected.visible = !!this.dialogProperties.alliancePlayerLeagueVO;
        this.dialogDisp.btn_tab1Selected.visible = false;
        this.updateContent(this.dialogProperties.singlePlayerLeagueVO, false);
        break;
      case 1:
        this.dialogDisp.btn_tab0Selected.visible = false;
        this.dialogDisp.btn_tab0Unselected.visible = !!this.dialogProperties.singlePlayerLeagueVO;
        this.dialogDisp.btn_tab1Unselected.visible = false;
        this.dialogDisp.btn_tab1Selected.visible = !!this.dialogProperties.alliancePlayerLeagueVO;
        this.updateContent(this.dialogProperties.alliancePlayerLeagueVO, true);
    }
  };
  DifficultyScalingRewardOverviewDialogComplex.prototype.updateText = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new l.TextVO(c.TextHelper.toUpperCaseLocaSafeTextId("dialog_difficultyScaling_rewardOverview_title")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new r.LocalizedTextVO("dialog_difficultyScaling_eventRankingRewards_desc", [this.dialogProperties.difficultyVO ? this.dialogProperties.difficultyVO.name_textID : "dialog_difficultyScaling_confirmClassic_title"]));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_tab0Selected.txt_copy, new l.TextVO(c.TextHelper.toUpperCaseLocaSafeTextId("dialog_difficultyScaling_playerRanking_title")));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_tab0Unselected.txt_copy, new l.TextVO(c.TextHelper.toUpperCaseLocaSafeTextId("dialog_difficultyScaling_playerRanking_title")));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_tab1Selected.txt_copy, new l.TextVO(c.TextHelper.toUpperCaseLocaSafeTextId("dialog_difficultyScaling_allianceRanking_desc")));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_tab1Unselected.txt_copy, new l.TextVO(c.TextHelper.toUpperCaseLocaSafeTextId("dialog_difficultyScaling_allianceRanking_desc")));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_tab2Selected.txt_copy, new l.TextVO(c.TextHelper.toUpperCaseLocaSafeTextId("dialog_difficultyScaling_extraRewards_desc")));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_tab2Unselected.txt_copy, new l.TextVO(c.TextHelper.toUpperCaseLocaSafeTextId("dialog_difficultyScaling_extraRewards_desc")));
  };
  DifficultyScalingRewardOverviewDialogComplex.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_help:
        C.CastleExternalDialog.dialogHandler.showHelper("", s.Localize.text("help_difficultyScaling"));
        break;
      case this.dialogDisp.btn_tab0Unselected:
        this.selectTab(0);
        break;
      case this.dialogDisp.btn_tab1Unselected:
        this.selectTab(1);
    }
  };
  Object.defineProperty(DifficultyScalingRewardOverviewDialogComplex.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  DifficultyScalingRewardOverviewDialogComplex.NAME = "EventDifficultyRewardList2";
  return DifficultyScalingRewardOverviewDialogComplex;
}(C.CastleExternalDialog);
exports.DifficultyScalingRewardOverviewDialogComplex = _;
var m = require("./36.js");
var f = require("./282.js");
var O = require("./3721.js");
var E = require("./3725.js");
var y = require("./1770.js");
a.classImplementsInterfaces(_, "ICollectableRendererList");