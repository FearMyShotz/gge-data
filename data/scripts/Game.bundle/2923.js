Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./3.js");
var r = function (e) {
  function RingMenuButtonBrewery() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(RingMenuButtonBrewery, e);
  RingMenuButtonBrewery.prototype.init = function (t, i, n) {
    e.prototype.init.call(this, t, i, n);
    this._disp = i.btn_mead;
    this._disp.enableButton = true;
    this._disp.visible = a.instanceOfClass(n, "RelicBreweryBuildingVE") && n.buildingVO.buildingState.isFunctionally;
  };
  RingMenuButtonBrewery.prototype.onClick = function (e, t) {
    l.CastleDialogHandler.getInstance().registerDialogs(c.CastleBreweryDialog);
    this.parent.hide();
  };
  RingMenuButtonBrewery.prototype.getInfoText = function () {
    return s.Localize.text("dialog_relicBrewery_insufficientResources_toBreweryButton");
  };
  return RingMenuButtonBrewery;
}(require("./98.js").ARingMenuButton);
exports.RingMenuButtonBrewery = r;
var l = require("./9.js");
var c = require("./1022.js");
o.classImplementsInterfaces(r, "IRingMenuButton");