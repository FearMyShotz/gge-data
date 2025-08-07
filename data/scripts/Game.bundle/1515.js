Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./4.js");
var l = require("./8.js");
var c = function (e) {
  function RingMenuButtonGacha() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(RingMenuButtonGacha, e);
  RingMenuButtonGacha.prototype.init = function (t, i, n) {
    e.prototype.init.call(this, t, i, n);
    this._disp = i.btn_gacha;
    l.ButtonHelper.initBasicButton(this._disp);
    this._disp.visible = a.instanceOfClass(this.targetBuilding, "DecoDistrict2x2BuildingVE");
    l.ButtonHelper.enableButton(this._disp, this.isGachaAvailable());
  };
  RingMenuButtonGacha.prototype.onClick = function (e, t) {
    var i = this.getGachaEventVO();
    if (i) {
      i.openDialog();
    }
    this.parent.hide();
  };
  RingMenuButtonGacha.prototype.isGachaAvailable = function () {
    return !!this.getGachaEventVO();
  };
  RingMenuButtonGacha.prototype.getGachaEventVO = function () {
    return r.CastleModel.specialEventData.getActiveEventByEventId(this.targetBuilding.buildingVO.gachaEventID);
  };
  RingMenuButtonGacha.prototype.getInfoText = function () {
    return s.Localize.text("tooltip_gachaName_GachaDeco2x2");
  };
  return RingMenuButtonGacha;
}(require("./98.js").ARingMenuButton);
exports.RingMenuButtonGacha = c;
o.classImplementsInterfaces(c, "IRingMenuButton");