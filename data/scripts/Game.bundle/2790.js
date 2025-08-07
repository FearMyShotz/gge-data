Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./3.js");
var r = function (e) {
  function RingMenuButtonVillage() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(RingMenuButtonVillage, e);
  RingMenuButtonVillage.prototype.init = function (t, i, n) {
    e.prototype.init.call(this, t, i, n);
    this._disp = i.btn_village;
    this._disp.visible = a.instanceOfClass(n, "ContorBuildingVE");
    this._disp.enableButton = this.isOutOfTutorial();
  };
  RingMenuButtonVillage.prototype.onClick = function (e, t) {
    this.parent.hide();
    l.CastleDialogHandler.getInstance().registerDefaultDialogs(c.CastleResourceVillageOverviewDialog);
  };
  RingMenuButtonVillage.prototype.getInfoText = function () {
    return s.Localize.text("dialog_villageListOverview_title");
  };
  return RingMenuButtonVillage;
}(require("./98.js").ARingMenuButton);
exports.RingMenuButtonVillage = r;
var l = require("./9.js");
var c = require("./1523.js");
o.classImplementsInterfaces(r, "IRingMenuButton");