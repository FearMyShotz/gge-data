Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./4079.js");
var r = require("./1677.js");
var l = require("./4.js");
var c = require("./8.js");
var u = function (e) {
  function CastleAchievementDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleAchievementDialog.NAME) || this;
  }
  n.__extends(CastleAchievementDialog, e);
  CastleAchievementDialog.prototype.initLoaded = function (t = null) {
    c.ButtonHelper.initTwoStateButtons([this.dialogDisp.btn_tab_overview, this.dialogDisp.btn_tab_eco, this.dialogDisp.btn_tab_military, this.dialogDisp.btn_tab_challenge, this.dialogDisp.btn_tab_events]);
    this.initBasicButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_close]);
    e.prototype.initLoaded.call(this, t);
  };
  CastleAchievementDialog.prototype.showLoaded = function (t = null) {
    this._subLayer = new Map();
    this._subLayer.set(CastleAchievementDialog.CAT_OVERVIEW, new p.CastleAchievementDialogOverview(this.dialogDisp.mc_sublayer_overview));
    this._subLayer.set(CastleAchievementDialog.CAT_ECONOMY, new d.CastleAchievementDialogCategoryList(this.dialogDisp.mc_sublayer_list));
    this._subLayer.set(CastleAchievementDialog.CAT_MILITARY, new d.CastleAchievementDialogCategoryList(this.dialogDisp.mc_sublayer_list));
    this._subLayer.set(CastleAchievementDialog.CAT_CHALLENGE, new d.CastleAchievementDialogCategoryList(this.dialogDisp.mc_sublayer_list));
    this._subLayer.set(CastleAchievementDialog.CAT_EVENTS, new d.CastleAchievementDialogCategoryList(this.dialogDisp.mc_sublayer_list));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new a.LocalizedTextVO("panel_action_achievement"));
    this.dialogDisp.btn_tab_overview.toolTipText = "dialog_achv_category_overview";
    this.dialogDisp.btn_tab_eco.toolTipText = "dialog_achv_category_economy";
    this.dialogDisp.btn_tab_military.toolTipText = "dialog_achv_category_military";
    this.dialogDisp.btn_tab_challenge.toolTipText = "dialog_achv_category_challenge";
    this.dialogDisp.btn_tab_events.toolTipText = "dialog_achv_category_event";
    this.changeCategory(CastleAchievementDialog.CAT_OVERVIEW);
    l.CastleModel.castleAchievementData.addEventListener(r.CastleAchievementDataEvent.ACHIEVEMENT_REFRESHED, this.bindFunction(this.onDataRefresh));
    l.CastleModel.smartfoxClient.sendCommandVO(new s.C2SAchievementListVO());
    e.prototype.showLoaded.call(this, t);
  };
  CastleAchievementDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    l.CastleModel.castleAchievementData.removeEventListener(r.CastleAchievementDataEvent.ACHIEVEMENT_REFRESHED, this.bindFunction(this.onDataRefresh));
  };
  CastleAchievementDialog.prototype.onDataRefresh = function (e) {
    this.refreshCurrentCategory();
  };
  CastleAchievementDialog.prototype.refreshCurrentCategory = function () {
    var e = this._currentCategory;
    this._currentCategory = "";
    this.changeCategory(e);
  };
  CastleAchievementDialog.prototype.changeCategory = function (t) {
    if (this._currentCategory != t) {
      e.prototype.changeCategory.call(this, t);
      this.showSublayer(this._subLayer.get(this._currentCategory), [this.getXMLStringForCurrentCategory()]);
      c.ButtonHelper.setButtonSelected(this.dialogDisp.btn_tab_overview, this._currentCategory == CastleAchievementDialog.CAT_OVERVIEW);
      c.ButtonHelper.setButtonSelected(this.dialogDisp.btn_tab_eco, this._currentCategory == CastleAchievementDialog.CAT_ECONOMY);
      c.ButtonHelper.setButtonSelected(this.dialogDisp.btn_tab_military, this._currentCategory == CastleAchievementDialog.CAT_MILITARY);
      c.ButtonHelper.setButtonSelected(this.dialogDisp.btn_tab_challenge, this._currentCategory == CastleAchievementDialog.CAT_CHALLENGE);
      c.ButtonHelper.setButtonSelected(this.dialogDisp.btn_tab_events, this._currentCategory == CastleAchievementDialog.CAT_EVENTS);
    }
  };
  CastleAchievementDialog.prototype.getXMLStringForCurrentCategory = function () {
    switch (this._currentCategory) {
      case CastleAchievementDialog.CAT_ECONOMY:
        return "economy";
      case CastleAchievementDialog.CAT_MILITARY:
        return "military";
      case CastleAchievementDialog.CAT_CHALLENGE:
        return "challenge";
      case CastleAchievementDialog.CAT_EVENTS:
        return "event";
    }
    return "";
  };
  CastleAchievementDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_ok:
        this.hide();
        break;
      case this.dialogDisp.btn_tab_overview:
        this.changeCategory(CastleAchievementDialog.CAT_OVERVIEW);
        break;
      case this.dialogDisp.btn_tab_eco:
        this.changeCategory(CastleAchievementDialog.CAT_ECONOMY);
        break;
      case this.dialogDisp.btn_tab_military:
        this.changeCategory(CastleAchievementDialog.CAT_MILITARY);
        break;
      case this.dialogDisp.btn_tab_challenge:
        this.changeCategory(CastleAchievementDialog.CAT_CHALLENGE);
        break;
      case this.dialogDisp.btn_tab_events:
        this.changeCategory(CastleAchievementDialog.CAT_EVENTS);
    }
  };
  CastleAchievementDialog.__initialize_static_members = function () {
    CastleAchievementDialog.NAME = "CastleAchievement2";
    CastleAchievementDialog.CAT_OVERVIEW = "CAT_OVERVIEW";
    CastleAchievementDialog.CAT_ECONOMY = "CAT_ECONOMY";
    CastleAchievementDialog.CAT_MILITARY = "CAT_MILITARY";
    CastleAchievementDialog.CAT_CHALLENGE = "CAT_CHALLENGE";
    CastleAchievementDialog.CAT_EVENTS = "CAT_EVENTS";
  };
  return CastleAchievementDialog;
}(require("./114.js").CastleExternalSubLayerDialog);
exports.CastleAchievementDialog = u;
var d = require("./4080.js");
var p = require("./4081.js");
o.classImplementsInterfaces(u, "ICollectableRendererList");
u.__initialize_static_members();