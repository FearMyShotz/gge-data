Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./11.js");
var a = require("./3.js");
var s = require("./78.js");
var r = require("./76.js");
var l = require("./77.js");
var c = require("./4009.js");
var u = require("./4010.js");
var d = require("./8.js");
var p = require("./20.js");
var h = require("./13.js");
var g = function (e) {
  function CastleStormIslandsRulesDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleStormIslandsRulesDialog.NAME) || this;
  }
  n.__extends(CastleStormIslandsRulesDialog, e);
  CastleStormIslandsRulesDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    this._currentRulesPage = 1;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new a.TextVO(h.TextHelper.toUpperCaseLocaSafeTextId("dialog_island_welcomePopup_header"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.btn_start.txt_value, new a.TextVO(h.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempServer_welcomePopup_startButton")));
    d.ButtonHelper.initButtons([this.dialogDisp.btn_start, this.dialogDisp.btn_right, this.dialogDisp.btn_left], p.ClickFeedbackButtonHover);
    this.dialogDisp.btn_left.mouseChildren = false;
    this.dialogDisp.btn_right.mouseChildren = false;
    this.prepareRulesItemsData();
    var i = new l.InfiniteScrollListOptions(c.CastleStormIslandsRuleItem, "Component_RuleListElement", CastleStormIslandsRulesDialog.NAME);
    i.useSmoothScroll = true;
    this._rulesScrollList = new s.InfiniteScrollListComponent(new r.InfiniteScrollListClips(this.dialogDisp.mc_items).addMaskMc(this.dialogDisp.mc_items.mc_mask).addSliderMc(this.dialogDisp.mc_items.mc_slider), i);
  };
  CastleStormIslandsRulesDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this._currentRulesPage = 1;
    this._rulesScrollList.onShow();
    this.updatePage(0);
    this.updateRulesList();
  };
  CastleStormIslandsRulesDialog.prototype.hide = function () {
    this._rulesScrollList.onHide();
    e.prototype.hide.call(this);
  };
  CastleStormIslandsRulesDialog.prototype.prepareRulesItemsData = function () {
    var e;
    this._rulesMap = new Map();
    for (var t = 0; t < CastleStormIslandsRulesDialog.RULE_IDS.length; t++) {
      this._rulesMap[t + 1] = [];
      for (var i = 0; i < CastleStormIslandsRulesDialog.RULE_IDS[t].length; i++) {
        e = new u.CastleStormIslandsRuleItemVO("dialog_island_welcomePopup_content_" + CastleStormIslandsRulesDialog.RULE_IDS[t][i]);
        this._rulesMap[t + 1].push(e);
      }
    }
  };
  CastleStormIslandsRulesDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_start:
        this.hide();
        break;
      case this.dialogDisp.btn_left:
        this.updatePage(-1);
        break;
      case this.dialogDisp.btn_right:
        this.updatePage(1);
    }
  };
  CastleStormIslandsRulesDialog.prototype.updateRulesList = function () {
    this._rulesScrollList.updateWithNewData(this.getRulesData());
  };
  CastleStormIslandsRulesDialog.prototype.updatePage = function (e) {
    this._currentRulesPage += e;
    d.ButtonHelper.enableButton(this.dialogDisp.btn_left, true);
    d.ButtonHelper.enableButton(this.dialogDisp.btn_right, true);
    if (this._currentRulesPage <= 1) {
      this._currentRulesPage = 1;
      d.ButtonHelper.enableButton(this.dialogDisp.btn_left, false);
    } else if (this._currentRulesPage >= CastleStormIslandsRulesDialog.RULES_PAGES) {
      this._currentRulesPage = CastleStormIslandsRulesDialog.RULES_PAGES;
      d.ButtonHelper.enableButton(this.dialogDisp.btn_right, false);
    }
    var t = a.Localize.text("dialog_tempServer_welcomePopup_pageCounter", [this._currentRulesPage, CastleStormIslandsRulesDialog.RULES_PAGES]);
    var i = h.TextHelper.toUpperCaseLocaSafeTextId("dialog_island_welcomePopup_pageHeader_" + this._currentRulesPage, [t]);
    if (this.itxt_category) {
      this.itxt_category.textContentVO.textId = i;
    } else {
      this.itxt_category = this.textFieldManager.registerTextField(this.dialogDisp.txt_category, new a.LocalizedTextVO(i));
    }
    this.updateRulesList();
  };
  CastleStormIslandsRulesDialog.prototype.getRulesData = function () {
    return this._rulesMap[this._currentRulesPage];
  };
  CastleStormIslandsRulesDialog.__initialize_static_members = function () {
    CastleStormIslandsRulesDialog.NAME = "CastleStormIslandsRules";
  };
  CastleStormIslandsRulesDialog.RULE_IDS = [["1_1", "1_2", "1_3", "1_3_1", "1_4", "1_4_1"], ["2_1", "2_2", "2_3", "2_4"]];
  CastleStormIslandsRulesDialog.RULES_PAGES = 2;
  return CastleStormIslandsRulesDialog;
}(o.CastleExternalDialog);
exports.CastleStormIslandsRulesDialog = g;
g.__initialize_static_members();