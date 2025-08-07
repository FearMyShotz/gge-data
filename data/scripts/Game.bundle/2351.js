Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./384.js");
var c = function (e) {
  function RenderTreasureHunt() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(RenderTreasureHunt, e);
  RenderTreasureHunt.prototype.renderData = function (e, t) {
    var i = t;
    l.AMovementRenderStrategy.setDecoFrame(e, l.AMovementRenderStrategy.FRAME_MY_ATTACK);
    e.btn_armyInfo.visible = true;
    var n = r.int(i.attackArmyVO.unitAmount);
    var c = r.int(i.attackArmyVO.toolAmount);
    this.textFieldManager.registerTextField(e.btn_armyInfo.txt_units, new a.LocalizedNumberVO(n), new o.InternalGGSTextFieldConfigVO(true));
    this.textFieldManager.registerTextField(e.btn_armyInfo.txt_tools, new a.LocalizedNumberVO(c), new o.InternalGGSTextFieldConfigVO(true));
    this.textFieldManager.registerTextField(e.txt_action, new s.LocalizedTextVO("dialog_moveOverview_TreasureHuntAttack"), new o.InternalGGSTextFieldConfigVO(true));
  };
  RenderTreasureHunt.prototype.getKingdomID = function (e) {
    return r.int(e.treasureMapID);
  };
  return RenderTreasureHunt;
}(l.AMovementRenderStrategy);
exports.RenderTreasureHunt = c;