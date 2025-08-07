Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function CastleAdvancedToolsSelectionScrollItem(t) {
    var i = e.call(this, t) || this;
    i.singleEffect = new r.ToolEffectView(t.mc_tool_info, 0, 28, 22);
    i.effect1 = new r.ToolEffectView(t.mc_tool_info_0, 0, 28, 18);
    i.effect2 = new r.ToolEffectView(t.mc_tool_info_1, 1, 28, 18);
    i.disp.btn_instantBuy.toolTipText = "dialog_fight_instantBuy";
    return i;
  }
  n.__extends(CastleAdvancedToolsSelectionScrollItem, e);
  CastleAdvancedToolsSelectionScrollItem.prototype.fillAdditionalComponents = function () {
    s.FightScreenHelper.initInstantBuyButton(this.disp.btn_instantBuy, this.troopSelectionScrollItemVO.unitVO, this.troopSelectionScrollItemVO.sourceArea);
    var e = this.troopSelectionScrollItemVO.unitVO;
    if (e.effectTypes.length > 1) {
      this.singleEffect.hide();
      this.effect1.update(e);
      this.effect2.update(e);
    } else {
      this.singleEffect.update(e);
      this.effect1.hide();
      this.effect2.hide();
    }
  };
  return CastleAdvancedToolsSelectionScrollItem;
}(require("./1245.js").ACastleAdvancedTroopSelectionScrollItem);
exports.CastleAdvancedToolsSelectionScrollItem = a;
var s = require("./510.js");
var r = require("./1247.js");
o.classImplementsInterfaces(a, "MovieClip");