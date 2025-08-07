Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = createjs.MouseEvent;
var o = function () {
  function CastleToggleWallViewButton(e) {
    this._buttonDisp = e;
    p.ButtonHelper.initTwoStateButton(this._buttonDisp);
  }
  CastleToggleWallViewButton.prototype.show = function () {
    this._buttonDisp.addEventListener(n.CLICK, this.bindFunction(this.onClick));
    u.CastleBasicController.getInstance().addEventListener(c.IsoEvent.ON_RENDER_STRATEGY_CHANGED, this.bindFunction(this.onRenderStrategyChanged));
    this.update();
  };
  CastleToggleWallViewButton.prototype.onRenderStrategyChanged = function (e) {
    this.update();
  };
  CastleToggleWallViewButton.prototype.onClick = function (e) {
    if (p.ButtonHelper.isButtonEnabled(e.target)) {
      this.toggle();
    }
  };
  CastleToggleWallViewButton.prototype.update = function () {
    var e = !this.layoutManager.isInTreasureCamp && d.CastleModel.kingdomData.activeKingdomID != l.FactionConst.KINGDOM_ID;
    if (e) {
      p.ButtonHelper.setButtonSelected(this._buttonDisp, !this.isStrategyActive);
      this._buttonDisp.toolTipText = this.isStrategyActive ? "constructionMode_showWalls" : "constructionMode_hideWalls";
    } else {
      p.ButtonHelper.setButtonSelected(this._buttonDisp, false);
      this._buttonDisp.toolTipText = "constructionMode_hideWalls_notAvailable";
    }
    p.ButtonHelper.enableButton(this._buttonDisp, e);
  };
  CastleToggleWallViewButton.prototype.toggle = function () {
    a.Iso.renderer.strategies.toggle(r.IsoRenderStrategyEnum.TRANSPARENT_DEFENCE_VIEW);
  };
  CastleToggleWallViewButton.prototype.hide = function () {
    this._buttonDisp.removeEventListener(n.CLICK, this.bindFunction(this.onClick));
    u.CastleBasicController.getInstance().removeEventListener(c.IsoEvent.ON_RENDER_STRATEGY_CHANGED, this.bindFunction(this.onRenderStrategyChanged));
  };
  Object.defineProperty(CastleToggleWallViewButton.prototype, "layoutManager", {
    get: function () {
      return s.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleToggleWallViewButton.prototype, "isStrategyActive", {
    get: function () {
      return a.Iso.renderer.strategies.currentStrategy.isActive(r.IsoRenderStrategyEnum.TRANSPARENT_DEFENCE_VIEW);
    },
    enumerable: true,
    configurable: true
  });
  return CastleToggleWallViewButton;
}();
exports.CastleToggleWallViewButton = o;
var a = require("./33.js");
var s = require("./17.js");
var r = require("./122.js");
var l = require("./5.js");
var c = require("./92.js");
var u = require("./15.js");
var d = require("./4.js");
var p = require("./8.js");