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
  function RenderArmyTravel() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(RenderArmyTravel, e);
  RenderArmyTravel.prototype.renderData = function (e, t) {
    var i = t;
    l.AMovementRenderStrategy.setDecoFrame(e, l.AMovementRenderStrategy.FRAME_TRAVEL);
    e.btn_armyInfo.visible = true;
    var n = r.int(i.inventory.getSoldierCount());
    var c = r.int(i.inventory.getToolCount());
    e.fieldUnitCount = this.textFieldManager.registerTextField(e.btn_armyInfo.txt_units, new a.LocalizedNumberVO(n), new o.InternalGGSTextFieldConfigVO(true));
    e.fieldToolCount = this.textFieldManager.registerTextField(e.btn_armyInfo.txt_tools, new a.LocalizedNumberVO(c), new o.InternalGGSTextFieldConfigVO(true));
    var u = "";
    if (t.targetArea.isOwnMapobject) {
      u = "dialog_moveOverview_wayHome";
      if (t.sourceArea.isOwnMapobject && !t.isReturnHome) {
        u = "dialog_sendTroups_title";
      }
    }
    e.fieldAction = this.textFieldManager.registerTextField(e.txt_action, new s.LocalizedTextVO(u), new o.InternalGGSTextFieldConfigVO(true));
  };
  return RenderArmyTravel;
}(l.AMovementRenderStrategy);
exports.RenderArmyTravel = c;