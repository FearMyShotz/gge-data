Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./58.js");
var l = require("./4.js");
var c = require("./1200.js");
var u = function (e) {
  function RingMenuButtonOverseer() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(RingMenuButtonOverseer, e);
  RingMenuButtonOverseer.prototype.init = function (t, i, n) {
    e.prototype.init.call(this, t, i, n);
    this._disp = i.btn_overseer;
    if (a.instanceOfClass(n, "AProductionBuildingVE")) {
      var o = n;
      this._disp.visible = o.productionBuildingVO.isBoostableBuilding && l.CastleModel.userData.userLevel >= r.ClientConstLevelRestrictions.MIN_LEVEL_OVERSEER;
    } else {
      this._disp.visible = false;
    }
    this._disp.enableButton = this.isOutOfTutorial();
    var s = n instanceof h.RelicBreweryBuildingVE ? RingMenuButtonOverseer.POS_BREWERY : RingMenuButtonOverseer.POS_DEFAULT;
    this._disp.x = s[0];
    this._disp.y = s[1];
  };
  RingMenuButtonOverseer.prototype.onClick = function (e, t) {
    d.CastleDialogHandler.getInstance().registerDefaultDialogs(p.CastleResourceBoostDialog, new c.CastleRessourcesBoostDialogProperties());
  };
  RingMenuButtonOverseer.prototype.getInfoText = function () {
    return s.Localize.text("overseer");
  };
  RingMenuButtonOverseer.POS_DEFAULT = [0, 95];
  RingMenuButtonOverseer.POS_BREWERY = [60, 78];
  return RingMenuButtonOverseer;
}(require("./98.js").ARingMenuButton);
exports.RingMenuButtonOverseer = u;
var d = require("./9.js");
var p = require("./874.js");
var h = require("./1560.js");
o.classImplementsInterfaces(u, "IRingMenuButton");