Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./764.js");
var l = function (e) {
  function RingMenuButtonSell() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(RingMenuButtonSell, e);
  RingMenuButtonSell.prototype.init = function (t, i, n) {
    e.prototype.init.call(this, t, i, n);
    this._disp = i.btn_sell;
    this._disp.visible = n.buildingVO.objectType == c.IsoObjectEnum.DECO && !n.buildingVO.buildingState.isInProgress && !n.buildingVO.buildingState.isStopped && n.buildingVO.sellCostC1 > 0 && !o.EnvGlobalsHandler.globals.isCrossplay;
  };
  RingMenuButtonSell.prototype.onClick = function (e, t) {
    this.parent.hide();
    u.CastleDialogHandler.getInstance().registerDefaultDialogs(d.CastleConstructionSellDialog, new r.CastleConstructionSellDialogProperties(this.targetBuilding.buildingVO, this.targetBuilding));
  };
  RingMenuButtonSell.prototype.getInfoText = function () {
    return s.Localize.text("constructionMode_sellDeco");
  };
  return RingMenuButtonSell;
}(require("./98.js").ARingMenuButton);
exports.RingMenuButtonSell = l;
var c = require("./80.js");
var u = require("./9.js");
var d = require("./765.js");
a.classImplementsInterfaces(l, "IRingMenuButton");