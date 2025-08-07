Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./5593.js");
var u = require("./5594.js");
var d = require("./5595.js");
var p = require("./1967.js");
var h = require("./13.js");
var g = require("./4.js");
var C = require("./8.js");
var _ = function (e) {
  function CastleTempServerEffectRerollDialog() {
    var t = this;
    t.rerolledSelected = false;
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastleTempServerEffectRerollDialog.NAME) || this;
  }
  n.__extends(CastleTempServerEffectRerollDialog, e);
  CastleTempServerEffectRerollDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    C.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.btn_reroll], f.ClickFeedbackButtonHover);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.TextVO(h.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempServer_mutation_title")));
    this.tf_currSelect = this.textFieldManager.registerTextField(this.dialogDisp.txt_current_selected, new s.TextVO(h.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempServer_mutation_current_header")));
    this.tf_currUnSelect = this.textFieldManager.registerTextField(this.dialogDisp.txt_current_unselected, new s.TextVO(h.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempServer_mutation_current_header")));
    this.tf_reSelect = this.textFieldManager.registerTextField(this.dialogDisp.txt_reroll_selected, new s.TextVO(h.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempServer_mutation_new_header")));
    this.tf_reUnSelect = this.textFieldManager.registerTextField(this.dialogDisp.txt_reroll_unselected, new s.TextVO(h.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempServer_mutation_new_header")));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_reroll.txt_value, new s.TextVO(h.TextHelper.toUpperCaseLocaSafeTextId("dialog_trainingProgram_reroll_button")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_cost, new l.LocalizedNumberVO(g.CastleModel.rerollCostData.getRerollCostsByType(m.CastleRerollCostData.REROLL_TYPE_CHARGE_EFFECT)[0].c2Cost));
    this.dialogDisp.mc_select0.mouseChildren = false;
    this.dialogDisp.mc_select1.mouseChildren = false;
    this.dialogDisp.mc_select0.actLikeButton = true;
    this.dialogDisp.mc_select1.actLikeButton = true;
    this.rerolledSelected = false;
    g.CastleModel.tempServerData.addEventListener(p.CastleTempServerEventEvent.TEMPSERVER_CHARGE_EFFECT_ARRIVED, this.bindFunction(this.onEffectsArrived));
    a.BasicModel.smartfoxClient.sendCommandVO(new d.C2STempServerGetChargeCampEffectsEventVO(this.dialogProps.targetWMO.absAreaPosX, this.dialogProps.targetWMO.absAreaPosY));
  };
  CastleTempServerEffectRerollDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this);
    g.CastleModel.tempServerData.removeEventListener(p.CastleTempServerEventEvent.TEMPSERVER_CHARGE_EFFECT_ARRIVED, this.bindFunction(this.onEffectsArrived));
  };
  CastleTempServerEffectRerollDialog.prototype.onEffectsArrived = function (e) {
    this.dialogProps.currentBonusVO = e.params[0];
    this.dialogProps.rerollBonusVO = e.params[1];
    this.updateData();
  };
  CastleTempServerEffectRerollDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_reroll:
        a.BasicModel.smartfoxClient.sendCommandVO(new u.C2STempServerChargeCampRerollEventVO(this.dialogProps.targetWMO.absAreaPosX, this.dialogProps.targetWMO.absAreaPosY));
        break;
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_ok:
        if (this.rerolledSelected) {
          a.BasicModel.smartfoxClient.sendCommandVO(new c.C2STempServerApplyChargeCampEffectsEventVO(this.dialogProps.targetWMO.absAreaPosX, this.dialogProps.targetWMO.absAreaPosY));
        }
        this.hide();
        break;
      case this.dialogDisp.mc_select0:
        this.rerolledSelected = false;
        this.updateData();
        break;
      case this.dialogDisp.mc_select1:
        this.rerolledSelected = true;
        this.updateData();
    }
  };
  CastleTempServerEffectRerollDialog.prototype.updateData = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.mc_current.mc_selected.txt_text, new r.LocalizedTextVO("dialog_tempServer_effect_" + this.dialogProps.currentBonusVO.effect.name, this.dialogProps.currentBonusVO.effectValue.textReplacements));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_current.mc_default.txt_text, new r.LocalizedTextVO("dialog_tempServer_effect_" + this.dialogProps.currentBonusVO.effect.name, this.dialogProps.currentBonusVO.effectValue.textReplacements));
    this.dialogDisp.mc_select0.mc_selected.visible = !this.rerolledSelected;
    this.dialogDisp.mc_current.mc_empty.visible = false;
    this.dialogDisp.mc_current.mc_selected.visible = !this.rerolledSelected;
    this.dialogDisp.mc_current.mc_default.visible = this.rerolledSelected;
    this.tf_currSelect.visible = !this.rerolledSelected;
    this.tf_currUnSelect.visible = this.rerolledSelected;
    this.tf_reSelect.visible = this.rerolledSelected;
    this.tf_reUnSelect.visible = !this.rerolledSelected;
    if (this.dialogProps.rerollBonusVO) {
      this.dialogDisp.mc_select1.mc_selected.visible = this.rerolledSelected;
      this.dialogDisp.mc_current.mc_empty.visible = false;
      this.dialogDisp.mc_select1.visible = true;
      this.dialogDisp.mc_reroll.mc_selected.visible = this.rerolledSelected;
      this.dialogDisp.mc_reroll.mc_default.visible = !this.rerolledSelected;
      this.textFieldManager.registerTextField(this.dialogDisp.mc_reroll.mc_selected.txt_text, new r.LocalizedTextVO("dialog_tempServer_effect_" + this.dialogProps.rerollBonusVO.effect.name, this.dialogProps.rerollBonusVO.effectValue.textReplacements));
      this.textFieldManager.registerTextField(this.dialogDisp.mc_reroll.mc_default.txt_text, new r.LocalizedTextVO("dialog_tempServer_effect_" + this.dialogProps.rerollBonusVO.effect.name, this.dialogProps.rerollBonusVO.effectValue.textReplacements));
      this.textFieldManager.registerTextField(this.dialogDisp.mc_reroll.mc_empty.txt_text, new r.LocalizedTextVO("dialog_tempServer_mutation_new_reroll"));
    } else {
      this.dialogDisp.mc_select1.visible = false;
      this.dialogDisp.mc_reroll.mc_selected.visible = false;
      this.dialogDisp.mc_reroll.mc_default.visible = false;
      this.dialogDisp.mc_reroll.mc_empty.visible = true;
      this.textFieldManager.registerTextField(this.dialogDisp.mc_reroll.mc_empty.txt_text, new r.LocalizedTextVO("dialog_tempServer_mutation_new_reroll"));
    }
  };
  Object.defineProperty(CastleTempServerEffectRerollDialog.prototype, "dialogProps", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleTempServerEffectRerollDialog.NAME = "CastleTempServerEffectReroll";
  return CastleTempServerEffectRerollDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleTempServerEffectRerollDialog = _;
o.classImplementsInterfaces(_, "ICollectableRendererList");
var m = require("./649.js");
var f = require("./20.js");