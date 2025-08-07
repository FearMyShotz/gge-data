Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./3.js");
var s = require("./6.js");
var r = require("./4.js");
var l = require("./5529.js");
var c = createjs.Event;
var u = createjs.MouseEvent;
var d = function (e) {
  function ButtonRepairAllComponentExternal(t) {
    return e.call(this, t) || this;
  }
  n.__extends(ButtonRepairAllComponentExternal, e);
  ButtonRepairAllComponentExternal.prototype.initRepairAllButton = function (e, t) {
    this._toolTipMC = t;
    this._button.addEventListener(c.REMOVED_FROM_STAGE, this.bindFunction(this.onRemovedFromStage));
    this._button.addEventListener(u.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this._button.addEventListener(u.MOUSE_OUT, this.bindFunction(this.onMouseOut));
    this._button.visible = this.layoutManager.isInMyCastle && r.CastleModel.areaData.activeCommonInfo.isCastleBurning && e == r.CastleModel.areaData.activeArea.areaId;
    this._toolTipMC.txt_name.text = a.Localize.text("repairAll");
    this._toolTipMC.visible = false;
    if (this.layoutManager.isInMyCastle) {
      this._toolTipMC.txt_cost0.mc_icon.gotoAndStop(5);
      var i = s.int(r.CastleModel.costsData.getFinalCostsC2(r.CastleModel.areaData.activeArea.getTotalRepairCostC2(), false, r.CastleModel.boostData.premiumAccountVO.isActive ? o.ConstructionConst.PREMIUM_FACTOR_REPAIR_ALL : 0));
      this._toolTipMC.txt_cost0.txt_cost.text = i;
    }
  };
  ButtonRepairAllComponentExternal.prototype.onMouseOver = function (e) {
    this._toolTipMC.visible = true;
  };
  ButtonRepairAllComponentExternal.prototype.onMouseOut = function (e) {
    this._toolTipMC.visible = false;
  };
  ButtonRepairAllComponentExternal.prototype.onRemovedFromStage = function (e) {
    this._button.removeEventListener(c.REMOVED_FROM_STAGE, this.bindFunction(this.onRemovedFromStage));
    this._button.removeEventListener(u.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this._button.removeEventListener(u.MOUSE_OUT, this.bindFunction(this.onMouseOut));
  };
  return ButtonRepairAllComponentExternal;
}(l.ButtonBasicComponentExternal);
exports.ButtonRepairAllComponentExternal = d;