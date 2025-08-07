Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./2.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./16.js");
var c = require("./4.js");
var u = function () {
  function CastleJudgementHelper() {}
  CastleJudgementHelper.setConditionIconAndTooltipAndAmount = function (e, t, i, u, d) {
    var h = r.int(a.JudgementCitizenCalculation.calcCond(u, d, i));
    t.mouseChildren = false;
    var g = new e.collectable.dataClass();
    t.toolTipText = g.getTooltipTextId();
    t.mc_icon.gotoAndStop(CastleJudgementHelper.getIconFrame(e.collectable));
    var C = false;
    switch (e) {
      case p.JudgementConditionEnum.C1:
        C = c.CastleModel.currencyData.c1Amount < h;
        break;
      case p.JudgementConditionEnum.STONE:
      case p.JudgementConditionEnum.WOOD:
        C = c.CastleModel.areaData.getActiveStorageItem(e.collectable).amount < h;
        break;
      case p.JudgementConditionEnum.UNITS:
        t.toolTipText = "dialog_recuit_unitsAvialable";
        C = r.int(c.CastleModel.militaryData.unitInventory.getSoldierCount() + c.CastleModel.militaryData.unitStrongholdInventory.getSoldierCount()) < h;
    }
    var _ = n.GoodgameTextFieldManager.getInstance().registerTextField(t.txt_amount, new s.LocalizedNumberVO(h), new o.InternalGGSTextFieldConfigVO(true));
    _.visible = true;
    _.color = C ? l.ClientConstColor.FONT_INSUFFICIENT_COLOR : l.ClientConstColor.FONT_DEFAULT_COLOR;
    return C;
  };
  CastleJudgementHelper.setRewardIconAndTooltipAndAmount = function (e, t, i, l, c) {
    t.mouseChildren = false;
    var u = new e.dataClass();
    t.toolTipText = u.getTooltipTextId();
    t.mc_icon.gotoAndStop(CastleJudgementHelper.getIconFrame(e));
    var p = 0;
    switch (e) {
      case d.CollectableEnum.C1:
        p = r.int(a.JudgementCitizenCalculation.rewardC1(l, c, i));
        break;
      case d.CollectableEnum.STONE:
      case d.CollectableEnum.WOOD:
        p = r.int(a.JudgementCitizenCalculation.rewardWoodStone(l, c, i));
    }
    n.GoodgameTextFieldManager.getInstance().registerTextField(t.txt_amount, new s.LocalizedNumberVO(p), new o.InternalGGSTextFieldConfigVO(true)).visible = true;
  };
  CastleJudgementHelper.getIconFrame = function (e) {
    switch (e) {
      case d.CollectableEnum.UNITS:
        return 5;
      case d.CollectableEnum.C1:
        return 4;
      case d.CollectableEnum.FOOD:
        return 3;
      case d.CollectableEnum.STONE:
        return 2;
      case d.CollectableEnum.WOOD:
        return 1;
    }
    return 1;
  };
  return CastleJudgementHelper;
}();
exports.CastleJudgementHelper = u;
var d = require("./12.js");
var p = require("./1076.js");