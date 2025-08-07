Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./4.js");
var l = require("./747.js");
var c = require("./14.js");
var u = function (e) {
  function CastleAllianceDialogTreasuryBoosterItemTemp_TwoEffects(t, i) {
    return e.call(this, t, i, "CastleAlliance_Treasury_Item_Booster_TwoEffects") || this;
  }
  n.__extends(CastleAllianceDialogTreasuryBoosterItemTemp_TwoEffects, e);
  CastleAllianceDialogTreasuryBoosterItemTemp_TwoEffects.prototype.updateText = function () {
    e.prototype.updateText.call(this);
    c.CastleComponent.textFieldManager.registerTextField(this.itemMc.txt_name1, new s.LocalizedTextVO("value_colon", [s.Localize.text("dialog_alliance_temporaryBoost_" + r.CastleModel.allianceBuffData.getAllianceBuffVoBySeriesIDAndLevel(this.buffVO.seriesID, 1).boni[1].effect.name)]));
    c.CastleComponent.textFieldManager.registerTextField(this.itemMc.txt_amount1, this.getBoosterAmountText1());
  };
  CastleAllianceDialogTreasuryBoosterItemTemp_TwoEffects.prototype.getBoosterAmountText1 = function () {
    if (l.AllianceBuffData.CUSTOMIZABLE_BUFFS.indexOf(this.buffVO.seriesID) > -1 && !this.allianceInfoVO.isTemporaryBoosterActive(this.buffVO.seriesID)) {
      var t = r.CastleModel.allianceBuffData.getAllianceBuffVoBySeriesIDAndLevel(this.buffVO.seriesID, 1);
      var i = s.Localize.text(o.GenericTextIds.VALUE_PERCENTAGE_ADD, [this.allianceInfoVO.getBoostValue(this.buffVO.seriesID, 1, t.boni[1].effect.effectType.type)]);
      var n = s.Localize.text(o.GenericTextIds.VALUE_PERCENTAGE, [this.allianceInfoVO.getBoostValue(this.buffVO.seriesID, this.buffVO.maxLevel, t.boni[1].effect.effectType.type)]);
      return new s.LocalizedTextVO("value_dash_split_paragraph", [i, n]);
    }
    return e.prototype.getBoosterAmountText.call(this);
  };
  return CastleAllianceDialogTreasuryBoosterItemTemp_TwoEffects;
}(require("./1387.js").CastleAllianceDialogTreasuryBoosterItemTemp);
exports.CastleAllianceDialogTreasuryBoosterItemTemp_TwoEffects = u;
a.classImplementsInterfaces(u, "ICollectableRendererList");