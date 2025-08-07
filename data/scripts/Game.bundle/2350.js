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
  function RenderSupportDefence() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(RenderSupportDefence, e);
  RenderSupportDefence.prototype.renderData = function (e, t) {
    var i = t;
    l.AMovementRenderStrategy.setDecoFrame(e, l.AMovementRenderStrategy.FRAME_SUPPORT_DEFENSE);
    e.btn_armyInfo.visible = true;
    var n;
    var c = r.int(i.inventory.getSoldierCount());
    var u = r.int(i.inventory.getToolCount());
    e.fieldUnitCount = this.textFieldManager.registerTextField(e.btn_armyInfo.txt_units, new a.LocalizedNumberVO(c), new o.InternalGGSTextFieldConfigVO(true));
    e.fieldToolCount = this.textFieldManager.registerTextField(e.btn_armyInfo.txt_tools, new a.LocalizedNumberVO(u), new o.InternalGGSTextFieldConfigVO(true));
    if (i.movementProgress < 1) {
      n = "dialog_moveOverview_wayToSupport";
    } else {
      n = "dialog_moveOverview_supporting";
      e.fieldDestination = this.textFieldManager.registerTextField(e.txt_destination, new s.LocalizedTextVO("dialog_moveOverview_loaction"), new o.InternalGGSTextFieldConfigVO(true));
      e.fieldArrival = this.textFieldManager.registerTextField(e.txt_arival, new s.LocalizedTextVO("dialog_moveOverview_waitTime"), new o.InternalGGSTextFieldConfigVO(true));
    }
    e.fieldAction = this.textFieldManager.registerTextField(e.txt_action, new s.LocalizedTextVO(n), new o.InternalGGSTextFieldConfigVO(true));
  };
  return RenderSupportDefence;
}(l.AMovementRenderStrategy);
exports.RenderSupportDefence = c;