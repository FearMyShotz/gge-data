Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./3.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./179.js");
var l = require("./4.js");
var c = require("./95.js");
var u = require("./47.js");
var d = require("./59.js");
var p = require("./8.js");
var h = require("./34.js");
var g = require("./340.js");
var C = require("./164.js");
var _ = function (e) {
  function GeneralsOverviewDialogStory(t) {
    var i = e.call(this, t) || this;
    i._scrollY = 0;
    p.ButtonHelper.initButtons([i.subLayerDisp.btn_slider], g.ClickFeedBackHoverSliderButton, 1);
    i._itxt_name = i.textFieldManager.registerTextField(i.subLayerDisp.txt_name, new o.TextVO(""));
    i._itxt_name_subtitle = i.textFieldManager.registerTextField(i.subLayerDisp.txt_subtitle, new o.TextVO(""));
    i.textFieldManager.registerTextField(i.subLayerDisp.mc_content.mc_stats.txt_starlevel, new s.LocalizedTextVO("dialog_generals_overview_starLevel_desc"));
    i.textFieldManager.registerTextField(i.subLayerDisp.mc_content.mc_stats.txt_rarity, new s.LocalizedTextVO("dialog_generals_overview_rarity_desc"));
    i.textFieldManager.registerTextField(i.subLayerDisp.mc_content.mc_stats.txt_stat1, new s.LocalizedTextVO("dialog_generals_overview_experience_desc"));
    i.textFieldManager.registerTextField(i.subLayerDisp.mc_content.mc_stats.txt_stat2, new s.LocalizedTextVO("dialog_generals_overview_battlesWon_desc"));
    i.textFieldManager.registerTextField(i.subLayerDisp.mc_content.mc_stats.txt_stat3, new s.LocalizedTextVO("dialog_generals_overview_battlesLost_desc"));
    i.textFieldManager.registerTextField(i.subLayerDisp.mc_content.mc_story.txt_storyTitle, new s.LocalizedTextVO("dialog_generals_overview_story_header"));
    i._itxt_rarity = i.textFieldManager.registerTextField(i.subLayerDisp.mc_content.mc_stats.txt_rarityVal, new s.LocalizedTextVO(""));
    i._itxt_stat1 = i.textFieldManager.registerTextField(i.subLayerDisp.mc_content.mc_stats.txt_stat1Val, new a.LocalizedNumberVO(0));
    i._itxt_stat2 = i.textFieldManager.registerTextField(i.subLayerDisp.mc_content.mc_stats.txt_stat2Val, new a.LocalizedNumberVO(0));
    i._itxt_stat3 = i.textFieldManager.registerTextField(i.subLayerDisp.mc_content.mc_stats.txt_stat3Val, new a.LocalizedNumberVO(0));
    i._itxt_story = i.textFieldManager.registerTextField(i.subLayerDisp.mc_content.mc_story.txt_story, new s.LocalizedTextVO(""));
    i._itxt_rarity.autoFitToBounds = true;
    i.originialYDivider = i.subLayerDisp.mc_divider.y;
    i.originialYSliderline = i.subLayerDisp.mc_sliderLine.y;
    i.originalHeightSliderLine = i.subLayerDisp.mc_sliderLine.height;
    var n = new u.SimpleScrollVO().initByParent(i.subLayerDisp).addMouseWheelElements([i.subLayerDisp.parent]);
    var r = new d.DynamicSizeScrollStrategyVertical(false, i.subLayerDisp.mc_content.mask.height, true);
    i._scrollComponent = new c.SimpleScrollComponent(n, r);
    i._scrollY = i.subLayerDisp.mc_content.y;
    return i;
  }
  n.__extends(GeneralsOverviewDialogStory, e);
  GeneralsOverviewDialogStory.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this.updateElements();
    var i = Math.max(0, Math.max(0, this.subLayerDisp.mc_content.height + 10 - this.subLayerDisp.mc_content.mask.height));
    this._scrollComponent.init(0, i, 40, 40);
    this._scrollComponent.scrollToValue(0);
    this._scrollComponent.show();
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
    l.CastleModel.generalsData.addEventListener(r.GeneralsEvent.GENERALS_UPDATED, this.bindFunction(this.onGeneralsUpdated));
  };
  GeneralsOverviewDialogStory.prototype.hide = function () {
    e.prototype.hide.call(this);
    this._scrollComponent.scrollToValue(0);
    this._scrollComponent.hide();
    l.CastleModel.generalsData.removeEventListener(r.GeneralsEvent.GENERALS_UPDATED, this.bindFunction(this.onGeneralsUpdated));
  };
  GeneralsOverviewDialogStory.prototype.updateElements = function () {
    C.GeneralsHelper.updateStarLevel(this.subLayerDisp.mc_content.mc_stats, this.sublayerProperties.generalVO);
    if (this.sublayerProperties.generalVO.isNPCGeneral) {
      this._itxt_name.textContentVO.stringValue = this.sublayerProperties.generalVO.nameTextShort;
      this._itxt_name_subtitle.textContentVO.stringValue = this.sublayerProperties.generalVO.nameSubtitleText;
    } else {
      this._itxt_name.textContentVO.stringValue = this.sublayerProperties.generalVO.nameText;
    }
    this._itxt_name.autoFitToBounds = true;
    this._itxt_rarity.textContentVO.textId = this.sublayerProperties.generalVO.rarityTextID;
    this._itxt_stat1.textContentVO.numberValue = this.sublayerProperties.generalVO.currentXP;
    this._itxt_stat2.textContentVO.numberValue = this.sublayerProperties.generalVO.won;
    this._itxt_stat3.textContentVO.numberValue = this.sublayerProperties.generalVO.lost;
    this.subLayerDisp.mc_content.mc_stats.visible = this.sublayerProperties.generalVO.isUnlocked;
    this.subLayerDisp.mc_content.mc_story.y = this.sublayerProperties.generalVO.isUnlocked ? this.subLayerDisp.mc_content.mc_stats.height : 0;
    this._itxt_story.height = 9999;
    this._itxt_story.textContentVO.textId = this.sublayerProperties.generalVO.storyTextID;
    this._itxt_story.height = this._itxt_story.textHeight;
    this._itxt_rarity.color = this.sublayerProperties.generalVO.rarityTextColor;
  };
  GeneralsOverviewDialogStory.prototype.onGeneralsUpdated = function (e) {
    this.updateElements();
  };
  GeneralsOverviewDialogStory.prototype.onScroll = function () {
    this.subLayerDisp.mc_content.y = this._scrollY - this._scrollComponent.currentValue;
  };
  Object.defineProperty(GeneralsOverviewDialogStory.prototype, "sublayerProperties", {
    get: function () {
      return this._params;
    },
    enumerable: true,
    configurable: true
  });
  return GeneralsOverviewDialogStory;
}(h.CastleDialogSubLayer);
exports.GeneralsOverviewDialogStory = _;