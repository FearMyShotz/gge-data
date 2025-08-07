Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./4.js");
var u = require("./33.js");
var d = require("./20.js");
var p = require("./8.js");
var h = function (e) {
  function CastleAllianceDialogTreasuryBoosterItem_OneEffect(t, i, n = null) {
    var o = e.call(this, t, n || CastleAllianceDialogTreasuryBoosterItem_OneEffect.ASSET_CLIP_NAME, i) || this;
    p.ButtonHelper.initButton(o.itemMc.btn_add, 1, d.ClickFeedbackButtonHover);
    return o;
  }
  n.__extends(CastleAllianceDialogTreasuryBoosterItem_OneEffect, e);
  CastleAllianceDialogTreasuryBoosterItem_OneEffect.prototype.update = function () {
    e.prototype.update.call(this);
    this.updateText();
    this.updateButton();
    this.updateProgressBar();
  };
  CastleAllianceDialogTreasuryBoosterItem_OneEffect.prototype.updateText = function () {
    _.CastleComponent.textFieldManager.registerTextField(this.itemMc.txt_name0, new l.LocalizedTextVO("value_colon", [r.Localize.text(C.CastleEffectsHelper.getNameTextId(this.buffVO.seriesID))]));
    _.CastleComponent.textFieldManager.registerTextField(this.itemMc.txt_amount0, this.getBoosterAmountText());
    this.itemMc.mc_progress.txt_countdown_name_full.visible = this.itemMc.mc_progress.txt_countdown_full.visible = this.itemMc.mc_progress.txt_countdown_name_middle.visible = this.itemMc.mc_progress.txt_countdown_middle.visible = this.itemMc.mc_progress.txt_empty.visible = false;
  };
  CastleAllianceDialogTreasuryBoosterItem_OneEffect.prototype.getBoosterAmountText = function () {
    if (this.buffVO.seriesID == s.AllianceConst.TYPE_MEMBERS) {
      return new l.LocalizedTextVO("value_proportional_value", [String(this.allianceInfoVO.memberAmount), String(this.allianceInfoVO.memberMax)]);
    } else {
      return new l.LocalizedTextVO("value_percentage_add", [String(this.allianceInfoVO.getCurrentBoostValue(this.buffVO.seriesID, u.EffectTypeEnum.EFFECT_TYPE_UNKNOWN))]);
    }
  };
  CastleAllianceDialogTreasuryBoosterItem_OneEffect.prototype.updateButton = function () {
    var e;
    var t = true;
    if (this.allianceInfoVO.isBoostUpgradeable(this.buffVO.seriesID)) {
      if (c.CastleModel.allianceData.hasRight(c.CastleModel.userData.allianceRank, s.AllianceConst.RIGHT_UPGRADE)) {
        e = this.buffVO.seriesID == s.AllianceConst.TYPE_MEMBERS ? "dialog_alliance_raiseMemberLimit" : "dialog_alliance_raiseEffect";
      } else {
        t = false;
        e = "dialog_alliance_rankToLow";
      }
    } else {
      t = false;
      e = "dialog_alliance_maxUpgradeLevel";
    }
    this.itemMc.btn_add.toolTipText = e;
    this.itemMc.btn_add.mc_icon.gotoAndStop(this.buffVO.seriesID == s.AllianceConst.TYPE_MEMBERS ? 4 : 1);
    p.ButtonHelper.enableButton(this.itemMc.btn_add, t);
  };
  CastleAllianceDialogTreasuryBoosterItem_OneEffect.prototype.updateProgressBar = function () {
    var e = this.allianceInfoVO.getBoostLevel(this.buffVO.seriesID) / this.allianceInfoVO.getBoostMaxLevel(this.buffVO.seriesID);
    this.itemMc.mc_progress.mc_bar_full.scaleX = this.itemMc.mc_progress.mc_bar_middle.scaleX = this.itemMc.mc_progress.mc_bar_low.scaleX = e;
    this.itemMc.mc_progress.mc_bar_full.visible = e < 0.2;
    this.itemMc.mc_progress.mc_bar_middle.visible = e >= 0.2 && e < 0.9;
    this.itemMc.mc_progress.mc_bar_low.visible = e >= 0.9;
  };
  CastleAllianceDialogTreasuryBoosterItem_OneEffect.prototype.onClick = function (t) {
    if (p.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.itemMc.btn_add:
          o.CommandController.instance.executeCommand(g.IngameClientCommands.OPEN_ALLIANCE_BUY_BOOSTER_COMMAND, [c.CastleModel.allianceData.myAllianceVO, this.buffVO.seriesID, u.EffectTypeEnum.EFFECT_TYPE_UNKNOWN]);
      }
    }
  };
  CastleAllianceDialogTreasuryBoosterItem_OneEffect.ASSET_CLIP_NAME = "CastleAlliance_Treasury_Item_Booster_OneEffect";
  return CastleAllianceDialogTreasuryBoosterItem_OneEffect;
}(require("./2495.js").ACastleAllianceDialogTreasuryBoosterItem);
exports.CastleAllianceDialogTreasuryBoosterItem_OneEffect = h;
var g = require("./29.js");
var C = require("./110.js");
var _ = require("./14.js");
a.classImplementsInterfaces(h, "ICollectableRendererList");