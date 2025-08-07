Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./4.js");
var l = function (e) {
  function RingMenuButtonConstructor() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(RingMenuButtonConstructor, e);
  RingMenuButtonConstructor.prototype.init = function (t, i, n) {
    e.prototype.init.call(this, t, i, n);
    this._disp = i.btn_constructor;
    this._disp.visible = a.instanceOfClass(n, "ConstructorBuildingVE") && n.buildingVO.buildingState.isFunctionally && n.buildingVO.requiredLevel <= r.CastleModel.userData.level;
  };
  RingMenuButtonConstructor.prototype.onClick = function (e, t) {
    c.CastleDialogHandler.getInstance().registerDefaultDialogs(u.CastleConstructionItemsMainDialog, new d.CastleConstructionItemsMainDialogProperties());
    this.parent.hide();
  };
  RingMenuButtonConstructor.prototype.getInfoText = function () {
    return s.Localize.text("ringmenu_building_constructor");
  };
  return RingMenuButtonConstructor;
}(require("./98.js").ARingMenuButton);
exports.RingMenuButtonConstructor = l;
var c = require("./9.js");
var u = require("./323.js");
var d = require("./357.js");
o.classImplementsInterfaces(l, "IRingMenuButton");