Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./23.js");
var u = require("./23.js");
var d = require("./4.js");
var p = require("./150.js");
var h = createjs.Event;
var g = createjs.MouseEvent;
var C = function (e) {
  function ButtonRepairAllComponent(t) {
    return e.call(this, o.instanceOfClass(t, "BasicButton") ? t : t.basicButton) || this;
  }
  n.__extends(ButtonRepairAllComponent, e);
  ButtonRepairAllComponent.prototype.initRepairAllButton = function (e, t) {
    this._toolTipMC = t;
    this._button.addEventListener(h.REMOVED_FROM_STAGE, this.bindFunction(this.onRemovedFromStage));
    this._button.addEventListener(g.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this._button.addEventListener(g.MOUSE_OUT, this.bindFunction(this.onMouseOut));
    this._button.visible = this.layoutManager.isInMyCastle && d.CastleModel.areaData.activeCommonInfo.isCastleBurning && e == d.CastleModel.areaData.activeArea.areaId;
    this._button.enableButton = true;
    this.textFieldManager.registerTextField(this._toolTipMC.txt_name, new r.LocalizedTextVO("repairAll"));
    this._toolTipMC.visible = false;
    if (this.layoutManager.isInMyCastle) {
      this._toolTipMC.txt_cost0.mc_icon.gotoAndStop(5);
      var i = l.int(d.CastleModel.costsData.getFinalCostsC2(d.CastleModel.areaData.activeArea.getTotalRepairCostC2(), false, d.CastleModel.boostData.premiumAccountVO.isActive ? a.ConstructionConst.PREMIUM_FACTOR_REPAIR_ALL : 0));
      this.textFieldManager.registerTextField(this._toolTipMC.txt_cost0.txt_cost, new s.LocalizedNumberVO(i));
    }
  };
  ButtonRepairAllComponent.prototype.onMouseOver = function (e) {
    u.TweenMax.fromTo(this._toolTipMC, 0.2, {
      alpha: 0
    }, {
      alpha: 1,
      ease: c.Linear.easeIn
    });
  };
  ButtonRepairAllComponent.prototype.onMouseOut = function (e) {
    this._toolTipMC.visible = false;
  };
  ButtonRepairAllComponent.prototype.onRemovedFromStage = function (e) {
    this._button.removeEventListener(h.REMOVED_FROM_STAGE, this.bindFunction(this.onRemovedFromStage));
    this._button.removeEventListener(g.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this._button.removeEventListener(g.MOUSE_OUT, this.bindFunction(this.onMouseOut));
  };
  return ButtonRepairAllComponent;
}(p.ButtonBasicComponent);
exports.ButtonRepairAllComponent = C;