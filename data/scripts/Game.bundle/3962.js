Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function CastleWorldCupDialogNotEnoughRubiesState(t) {
    return e.call(this, t) || this;
  }
  n.__extends(CastleWorldCupDialogNotEnoughRubiesState, e);
  CastleWorldCupDialogNotEnoughRubiesState.prototype.initElements = function () {
    e.prototype.initElements.call(this);
    this.dialogDisp.progressBar.visible = false;
    this.dialogDisp.progressBar.mouseChildren = false;
    this.dialogDisp.progressBar.fill.mask = this.dialogDisp.progressBar.fillMask;
  };
  CastleWorldCupDialogNotEnoughRubiesState.prototype.updateTexts = function () {
    e.prototype.updateTexts.call(this);
    this.tfBubble.textContentVO.textId = "dialog_worldCup_text1";
    this.tfBubble.textContentVO.textReplacements = [this.getTeamString(this.worldCupEventVO.teamA), this.getTeamString(this.worldCupEventVO.teamB), this.worldCupEventVO.paymentC2, this.worldCupEventVO.bonusRubies];
    this.tfBox.textContentVO.textId = "dialog_worldCup_box1";
    this.tfBox.textContentVO.textReplacements = [this.worldCupEventVO.paymentC2];
    this.dialogDisp.btnTeamA.toolTipText = "dialog_worldCup_tooltipBuy";
    this.dialogDisp.btnTeamB.toolTipText = this.dialogDisp.btnTeamA.toolTipText;
    this.dialogDisp.btnDraw.toolTipText = this.dialogDisp.btnTeamA.toolTipText;
  };
  CastleWorldCupDialogNotEnoughRubiesState.prototype.updateElements = function () {
    e.prototype.updateElements.call(this);
    var t = Math.min(this.worldCupEventVO.currencyC2, this.worldCupEventVO.paymentC2) / this.worldCupEventVO.paymentC2;
    this.dialogDisp.progressBar.visible = true;
    this.dialogDisp.progressBar.fillMask.scaleX = t;
    this.dialogDisp.progressBar.toolTipText = {
      t: "value_proportional_value",
      p: [Math.min(this.worldCupEventVO.currencyC2, this.worldCupEventVO.paymentC2), this.worldCupEventVO.paymentC2]
    };
    this.deactivateButton(this.dialogDisp.btnTeamA);
    this.deactivateButton(this.dialogDisp.btnTeamB);
    this.deactivateButton(this.dialogDisp.btnDraw);
  };
  CastleWorldCupDialogNotEnoughRubiesState.prototype.resetState = function () {
    e.prototype.resetState.call(this);
    this.dialogDisp.progressBar.visible = false;
  };
  return CastleWorldCupDialogNotEnoughRubiesState;
}(require("./1121.js").ACastleWorldCupDialogState);
exports.CastleWorldCupDialogNotEnoughRubiesState = a;
o.classImplementsInterfaces(a, "ICastleWorldCupDialogState");