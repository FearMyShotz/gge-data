Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./4.js");
var c = require("./24.js");
var u = function (e) {
  function CastleJudgementRewardDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleJudgementRewardDialog.NAME) || this;
  }
  n.__extends(CastleJudgementRewardDialog, e);
  CastleJudgementRewardDialog.prototype.initLoaded = function (t = null) {
    this.backgroundAlpha = 0.7;
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_close]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_reward_label, new r.LocalizedTextVO("dialog_fame_reward"));
    this.itxt_title = this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new r.LocalizedTextVO(""));
    this.itxt_desc = this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new r.LocalizedTextVO(""));
  };
  CastleJudgementRewardDialog.prototype.applyPropertiesLoaded = function (t = null) {
    e.prototype.applyPropertiesLoaded.call(this, t);
    var i = l.CastleModel.judgementData.getJudgementVObyID(this.dialogProperties.judgementID);
    this.itxt_title.textContentVO.textId = "judgement_" + i.id + "_name";
    this.itxt_desc.textContentVO.textId = "judgement_" + i.id + "_reward" + (this.dialogProperties.optionID > 0 ? "B" : "A") + "_description";
    var n = this.dialogProperties.optionID > 0 ? i.rewardB : i.rewardA;
    this.dialogDisp.mc_reward.gotoAndStop(n.length + 1);
    for (var s = 0; s < n.length; ++s) {
      d.CastleJudgementHelper.setRewardIconAndTooltipAndAmount(n[s], this.dialogDisp.mc_reward["res" + s], this.dialogProperties.optionID, l.CastleModel.userData.userLevel, i.id);
    }
    a.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_imageHolder);
    var r = "Judgement_" + i.visualName + "_reward" + (this.dialogProperties.optionID > 0 ? "B" : "A");
    var u = new c.CastleGoodgameExternalClip(r, o.BasicModel.basicLoaderData.getVersionedItemAssetUrl(r), null, 0, false);
    this.dialogDisp.mc_imageHolder.addChild(u);
  };
  CastleJudgementRewardDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_ok:
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  Object.defineProperty(CastleJudgementRewardDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleJudgementRewardDialog.__initialize_static_members = function () {
    CastleJudgementRewardDialog.NAME = "JudgementReward";
  };
  return CastleJudgementRewardDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleJudgementRewardDialog = u;
var d = require("./1729.js");
s.classImplementsInterfaces(u, "ICollectableRendererList");
u.__initialize_static_members();