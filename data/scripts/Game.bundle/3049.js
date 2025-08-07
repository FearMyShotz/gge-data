Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./3.js");
var l = function (e) {
  function RingMenuButtonTax() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(RingMenuButtonTax, e);
  RingMenuButtonTax.prototype.init = function (t, i, n) {
    e.prototype.init.call(this, t, i, n);
    this._disp = i.btn_tax;
    this._disp.enableButton = true;
    this._disp.visible = s.instanceOfClass(n, "KeepBuildingVE") && n.buildingVO.buildingState.isFunctionally;
  };
  RingMenuButtonTax.prototype.onClick = function (e, t) {
    o.CommandController.instance.executeCommand(c.IngameClientCommands.OPEN_ACTIVE_TAX_DIALOG_COMMAND);
    this.parent.hide();
  };
  RingMenuButtonTax.prototype.getInfoText = function () {
    return r.Localize.text("panel_action_tax");
  };
  return RingMenuButtonTax;
}(require("./98.js").ARingMenuButton);
exports.RingMenuButtonTax = l;
var c = require("./29.js");
a.classImplementsInterfaces(l, "IRingMenuButton");