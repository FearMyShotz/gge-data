Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./3.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./52.js");
var l = require("./11.js");
var c = require("./8.js");
var u = require("./20.js");
var d = require("./993.js");
var p = require("./4.js");
var h = require("./478.js");
var g = require("./2.js");
var C = require("./27.js");
var _ = require("./13.js");
var m = function (e) {
  function CastleSceatSkillBuyDialog() {
    return e.call(this, CastleSceatSkillBuyDialog.NAME) || this;
  }
  n.__extends(CastleSceatSkillBuyDialog, e);
  CastleSceatSkillBuyDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.TextVO(_.TextHelper.toUpperCaseLocaSafeTextId("dialog_legendTemple_unlockSkill_header")));
    c.ButtonHelper.initButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_cancel, this.dialogDisp.btn_close], u.ClickFeedbackButtonHover);
    this.dialogDisp.mc_activationTime.toolTipText = "researchTime";
    this.dialogDisp.mc_cost.mouseChildren = false;
    this.dialogDisp.mc_activationTime.mouseChildren = false;
  };
  CastleSceatSkillBuyDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    var i = this.dialogProperties.sceatSkillVO.isMaxLevel() ? h.ClientConstLegendSkills.COLORCODE_YELLOW : h.ClientConstLegendSkills.COLORCODE_LIGHTWHITE;
    var n = this.dialogProperties.sceatSkillVO.composeSkillTextVO(i, this.dialogProperties.sceatSkillVO.getUnlockLevel());
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, n);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_oldLevel, new o.LocalizedTextVO("ci_level", [this.dialogProperties.sceatSkillVO.level - 1]));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_newLevel, new o.LocalizedTextVO("ci_level", [this.dialogProperties.sceatSkillVO.level]));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_cost.txt_value, new a.LocalizedNumberVO(this.dialogProperties.sceatSkillVO.cost));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_activationTime.txt_time, new s.TextVO(C.CastleTimeStringHelper.getEventTimeString(this.dialogProperties.sceatSkillVO.activationTime)));
    this.removeSkillItem();
    this._skillInProgressItem = new d.CastleLegendSkillItem(this.dialogProperties.currentSceatSkillVO, true, true);
    this._skillInProgressItem.show();
    this.dialogDisp.mc_icon.addChild(this._skillInProgressItem.dispContainer);
    this.dialogDisp.mc_cost.toolTipText = this.dialogProperties.currentSceatSkillVO.costCurrencyID == r.ClientConstCurrency.ID_SCEAT_TOKEN ? "currency_name_sceatToken" : "currency_name_ImperialDucat";
    this.dialogDisp.mc_cost.mc_icon_sceat.visible = this.dialogProperties.currentSceatSkillVO.costCurrencyID == r.ClientConstCurrency.ID_SCEAT_TOKEN;
    this.dialogDisp.mc_cost.mc_icon_ducat.visible = this.dialogProperties.currentSceatSkillVO.costCurrencyID == r.ClientConstCurrency.ID_IMPERIAL_DUCAT;
    c.ButtonHelper.delayEnableButton(this.dialogDisp.btn_ok, true, 2000);
  };
  CastleSceatSkillBuyDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this.removeSkillItem();
  };
  CastleSceatSkillBuyDialog.prototype.removeSkillItem = function () {
    if (this._skillInProgressItem) {
      g.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_icon);
      this._skillInProgressItem.hide();
      this._skillInProgressItem = null;
    }
  };
  CastleSceatSkillBuyDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (c.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.mc_icon:
          this._skillInProgressItem.openInfoDialogue(this.dialogProperties.currentSceatSkillVO);
          break;
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancel:
          this.hide();
          break;
        case this.dialogDisp.btn_ok:
          p.CastleModel.legendSkillData.buySkill(this.dialogProperties.sceatSkillVO);
          this.hide();
      }
    }
  };
  Object.defineProperty(CastleSceatSkillBuyDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleSceatSkillBuyDialog.NAME = "CastleSceatSkillBuy";
  return CastleSceatSkillBuyDialog;
}(l.CastleExternalDialog);
exports.CastleSceatSkillBuyDialog = m;