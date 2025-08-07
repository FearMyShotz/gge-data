Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./3578.js");
var c = require("./1728.js");
var u = require("./4.js");
var d = require("./24.js");
var p = require("./42.js");
var h = require("./8.js");
var g = function (e) {
  function CastleJudgementChooseOptionDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleJudgementChooseOptionDialog.NAME) || this;
  }
  n.__extends(CastleJudgementChooseOptionDialog, e);
  CastleJudgementChooseOptionDialog.prototype.initLoaded = function (t = null) {
    this.backgroundAlpha = 0.7;
    e.prototype.initLoaded.call(this, t);
    this.dialogDisp.btn_chooseA.mouseChildren = false;
    this.dialogDisp.btn_chooseB.mouseChildren = false;
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_chooseA, this.dialogDisp.btn_chooseB]);
    this.textFieldManager.registerTextField(this.dialogDisp.mc_pricelabelA.txt_label, new r.LocalizedTextVO("judgement_requirements"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_pricelabelB.txt_label, new r.LocalizedTextVO("judgement_requirements"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_rewardlabelA.txt_label, new r.LocalizedTextVO("dialog_fame_reward"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_rewardlabelB.txt_label, new r.LocalizedTextVO("dialog_fame_reward"));
    this.itxt_title = this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new r.LocalizedTextVO(""));
    this.itxt_desc = this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new r.LocalizedTextVO(""));
    this.itxt_chooseA = this.textFieldManager.registerTextField(this.dialogDisp.btn_chooseA.txt_label, new r.LocalizedTextVO(""));
    this.itxt_chooseB = this.textFieldManager.registerTextField(this.dialogDisp.btn_chooseB.txt_label, new r.LocalizedTextVO(""));
    this.itxt_chooseA.verticalAlign = p.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.itxt_chooseB.verticalAlign = p.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
  };
  CastleJudgementChooseOptionDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    u.CastleModel.judgementData.addEventListener(c.CastleJudgementDataEvent.JUDGEMENT_ENDED, this.bindFunction(this.onJudgementEnd));
    var i = u.CastleModel.judgementData.activeJudgement;
    this.itxt_title.textContentVO.textId = "judgement_" + i.id + "_name";
    this.itxt_desc.textContentVO.textId = "judgement_" + i.id + "_description";
    this.itxt_chooseA.textContentVO.textId = "judgement_" + i.id + "_option_btnA";
    this.itxt_chooseB.textContentVO.textId = "judgement_" + i.id + "_option_btnB";
    this.initOption(this.dialogDisp.mc_conditionA, this.dialogDisp.mc_rewardA, this.dialogDisp.btn_chooseA, i.conditionA, i.rewardA, 0);
    this.initOption(this.dialogDisp.mc_conditionB, this.dialogDisp.mc_rewardB, this.dialogDisp.btn_chooseB, i.conditionB, i.rewardB, 1);
    a.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_imageHolder);
    var n = "Judgement_" + i.visualName + "_teaser";
    var s = new d.CastleGoodgameExternalClip(n, o.BasicModel.basicLoaderData.getVersionedItemAssetUrl(n), null, 0, false);
    this.dialogDisp.mc_imageHolder.addChild(s);
  };
  CastleJudgementChooseOptionDialog.prototype.hideLoaded = function (t = null) {
    u.CastleModel.judgementData.addEventListener(c.CastleJudgementDataEvent.JUDGEMENT_ENDED, this.bindFunction(this.onJudgementEnd));
    e.prototype.hideLoaded.call(this, t);
  };
  CastleJudgementChooseOptionDialog.prototype.onJudgementEnd = function (e) {
    this.hide();
  };
  CastleJudgementChooseOptionDialog.prototype.initOption = function (e, t, i, n, o, a) {
    var s = true;
    e.gotoAndStop(n.length + 1);
    for (var r = 0; r < n.length; ++r) {
      if (C.CastleJudgementHelper.setConditionIconAndTooltipAndAmount(n[r], e["res" + r], a, u.CastleModel.userData.userLevel, u.CastleModel.judgementData.activeJudgement.id)) {
        s = false;
      }
    }
    t.gotoAndStop(o.length + 1);
    for (var l = 0; l < o.length; ++l) {
      C.CastleJudgementHelper.setRewardIconAndTooltipAndAmount(o[l], t["res" + l], a, u.CastleModel.userData.userLevel, u.CastleModel.judgementData.activeJudgement.id);
    }
    if (s) {
      i.toolTipText = "judgement_option_btn_tooltip";
      h.ButtonHelper.enableButton(i, true);
    } else {
      i.toolTipText = "judgement_notsatisfiable_tooltip";
      h.ButtonHelper.enableButton(i, false);
    }
  };
  CastleJudgementChooseOptionDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (h.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_chooseA:
          u.CastleModel.smartfoxClient.sendCommandVO(new l.C2SJudgeJudgementCitizenVO(0));
          this.hide();
          break;
        case this.dialogDisp.btn_chooseB:
          u.CastleModel.smartfoxClient.sendCommandVO(new l.C2SJudgeJudgementCitizenVO(1));
          this.hide();
      }
    }
  };
  CastleJudgementChooseOptionDialog.__initialize_static_members = function () {
    CastleJudgementChooseOptionDialog.NAME = "JudgementChooseOption";
  };
  return CastleJudgementChooseOptionDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleJudgementChooseOptionDialog = g;
var C = require("./1729.js");
s.classImplementsInterfaces(g, "ICollectableRendererList");
g.__initialize_static_members();