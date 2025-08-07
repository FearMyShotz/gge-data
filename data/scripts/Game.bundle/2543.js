Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./232.js");
var u = require("./894.js");
var d = require("./8.js");
var p = function (e) {
  function CastleDefenceUnitcompositionDialog() {
    var t = this;
    CONSTRUCTOR_HACK;
    (t = e.call(this, CastleDefenceUnitcompositionDialog.NAME) || this).backgroundAlpha = 0.1;
    return t;
  }
  n.__extends(CastleDefenceUnitcompositionDialog, e);
  CastleDefenceUnitcompositionDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_ok]);
    this.unitCompositionSlider = new u.MultiSlider(this.dialogDisp.multislider, 1, 24, 220, s.getDefinitionByName("DefenceUnitAllocationSliderButtonEx"));
  };
  CastleDefenceUnitcompositionDialog.prototype.showLoaded = function (t = null) {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new l.LocalizedTextVO("dialog_defenceUnitcomposition_title"));
    this.dialogDisp.info_Melee.toolTipText = "melees";
    this.dialogDisp.info_Range.toolTipText = "ranges";
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.unitCompositionSlider.addEventListener(c.SliderEvent.VALUE_CHANGED, this.bindFunction(this.onUnitallocationChanged));
    this.itxt_melee = this.textFieldManager.registerTextField(this.dialogDisp.info_Melee.txt_value, new l.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE));
    this.itxt_range = this.textFieldManager.registerTextField(this.dialogDisp.info_Range.txt_value, new l.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE));
    this.unitCompositionSlider.setSliderTo(0, this.unitcompositionProperties.presetValue);
    this.updateUnitAllocationText();
    e.prototype.showLoaded.call(this, t);
  };
  CastleDefenceUnitcompositionDialog.prototype.onUnitallocationChanged = function (e) {
    this.updateUnitAllocationText();
  };
  CastleDefenceUnitcompositionDialog.prototype.updateUnitAllocationText = function () {
    var e = this.unitCompositionSlider.getPercentValues();
    var t = Math.min(Math.round(e[0] * 100), 100);
    var i = 100 - t;
    if (this.itxt_melee.textContentVO) {
      this.itxt_melee.textContentVO.textReplacements = [t];
    }
    this.itxt_range.textContentVO.textReplacements = [i];
  };
  CastleDefenceUnitcompositionDialog.prototype.onClick = function (t) {
    if (!this.isLocked && !this.isWaitingForServerMessage && (e.prototype.onClick.call(this, t), d.ButtonHelper.isButtonEnabled(t.target))) {
      switch (t.target) {
        case this.dialogDisp.btn_help:
          h.CastleDialogHandler.getInstance().showHelper("", r.Localize.text("help_defence_unitcomposition"));
          break;
        case this.dialogDisp.btn_ok:
          var i = this.unitCompositionSlider.getPercentValues();
          this.unitcompositionProperties.functionOk(this.unitcompositionProperties.wallId, i.shift() * 100);
          this.hide();
      }
    }
  };
  Object.defineProperty(CastleDefenceUnitcompositionDialog.prototype, "unitcompositionProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleDefenceUnitcompositionDialog.__initialize_static_members = function () {
    CastleDefenceUnitcompositionDialog.NAME = "CastleDefenceUnitcompsitionEx";
  };
  return CastleDefenceUnitcompositionDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleDefenceUnitcompositionDialog = p;
var h = require("./9.js");
a.classImplementsInterfaces(p, "ICollectableRendererList");
p.__initialize_static_members();