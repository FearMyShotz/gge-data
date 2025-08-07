Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleLuckyWheelSalesDayMediator(t, i) {
    return e.call(this, t, i) || this;
  }
  n.__extends(CastleLuckyWheelSalesDayMediator, e);
  CastleLuckyWheelSalesDayMediator.prototype.stopWheel = function () {
    if (this.luckyWheelData.winningCategory != -1) {
      this.destroyTimer();
      var e = NaN;
      var t = NaN;
      if (this.luckyWheelData.winningCategory == 0) {
        t = 45;
        e = 22.5;
      } else {
        t = 78.75;
        e = -22.5 - (this.luckyWheelData.winningCategory - 1) * t;
      }
      e -= Math.random() * (t - 15) + 7.5;
      e += 360;
      this._spinningWheel.accelerateWheel(0, e);
      if (this._spinningWheel.currentSpeedInDegrees > 0) {
        this.startBreakingCallback();
      }
    } else {
      this.onServerFailed();
    }
  };
  CastleLuckyWheelSalesDayMediator.prototype.showTooltips = function (e) {
    if (e) {
      this.componentDisp.component_wheel.icon_jackpot.toolTipText = "dialog_luckyWheel_jackpot";
      this.componentDisp.component_wheel.icon_units.toolTipText = "dialog_luckyWheel_saleDays_units";
      this.componentDisp.component_wheel.icon_relicEquipment.toolTipText = "dialog_luckyWheel_saleDays_relicEquipment";
      this.componentDisp.component_wheel.icon_boosterTools.toolTipText = "dialog_luckyWheel_saleDays_boosterTools";
      this.componentDisp.component_wheel.icon_tickets.toolTipText = "dialog_luckyWheel_saleDays_tickets_saleDays";
    } else {
      this.componentDisp.component_wheel.icon_jackpot.toolTipText = null;
      this.componentDisp.component_wheel.icon_units.toolTipText = null;
      this.componentDisp.component_wheel.icon_relicEquipment.toolTipText = null;
      this.componentDisp.component_wheel.icon_boosterTools.toolTipText = null;
      this.componentDisp.component_wheel.icon_tickets.toolTipText = null;
    }
  };
  return CastleLuckyWheelSalesDayMediator;
}(require("./1913.js").CastleLuckyWheelMediator);
exports.CastleLuckyWheelSalesDayMediator = o;