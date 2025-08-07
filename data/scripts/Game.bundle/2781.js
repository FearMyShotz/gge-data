Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./4.js");
var r = function (e) {
  function RingMenuButtonInstantBuild() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(RingMenuButtonInstantBuild, e);
  RingMenuButtonInstantBuild.prototype.init = function (t, i, n) {
    e.prototype.init.call(this, t, i, n);
    this._disp = i.btn_instantBuild;
    var o = this._disp.visible;
    this._disp.visible = this.isBuildingInProgress();
    if (this._disp.visible) {
      if (!o) {
        this._disp.delayEnableButton(true, 1000);
      }
      this.timerUpdate(null);
    }
  };
  RingMenuButtonInstantBuild.prototype.timerUpdate = function (e) {
    var t = a.int(s.CastleModel.specialEventData.getSkipCosts(this.targetBuilding, s.CastleModel.skipDiscountData.getBoostedSkipDiscount()));
    this._disp.toolTipText = "";
    var i = s.CastleModel.skipDiscountData.getBestDiscount();
    if (t == 0) {
      this._disp.gotoAndStop(2);
    } else if (s.CastleModel.skipDiscountData.hasBoostedSkipDiscount(i)) {
      this._disp.gotoAndStop(3);
      this._disp.toolTipText = s.CastleModel.skipDiscountData.getSkipBoostTooltip(i);
    } else {
      this._disp.gotoAndStop(1);
    }
  };
  RingMenuButtonInstantBuild.prototype.onClick = function (e, t) {
    l.Iso.controller.server.fastCompleteBuilding(this.targetBuilding);
    this.parent.hide();
  };
  RingMenuButtonInstantBuild.prototype.getAction = function () {
    return a.int(c.RingMenuBuilding.ACTION_INSTANT_BUILD);
  };
  return RingMenuButtonInstantBuild;
}(require("./98.js").ARingMenuButton);
exports.RingMenuButtonInstantBuild = r;
var l = require("./34.js");
var c = require("./369.js");
o.classImplementsInterfaces(r, "IRingMenuButton");