Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./4515.js");
var r = require("./1144.js");
var l = require("./4.js");
var c = require("./52.js");
var u = require("./1909.js");
var d = function (e) {
  function SaleDaysLuckyWheelEventVO() {
    return e.call(this) || this;
  }
  n.__extends(SaleDaysLuckyWheelEventVO, e);
  Object.defineProperty(SaleDaysLuckyWheelEventVO.prototype, "luckyWheelData", {
    get: function () {
      return l.CastleModel.saleDaysLuckyWheelData;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.LuckyWheelEventVO.prototype, "luckyWheelData").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SaleDaysLuckyWheelEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return "eventBuilding_luckyWheel_saleDays";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.LuckyWheelEventVO.prototype, "eventBuildingNameId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  SaleDaysLuckyWheelEventVO.prototype.openDialog = function (e = true) {
    this.executeOpenDialog(e, s.CastleLuckWheelSalesDaysDialog, new r.CastleLuckyWheelDialogProperties(this));
  };
  Object.defineProperty(SaleDaysLuckyWheelEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return SaleDaysLuckyWheelEventVO.EVENT_BUILDING_WOD_0;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.LuckyWheelEventVO.prototype, "eventBuildingWOD").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SaleDaysLuckyWheelEventVO.prototype, "ticketCost", {
    get: function () {
      return a.LuckyWheelConst.SPIN_TICKET_COST_SALE_DAYS;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.LuckyWheelEventVO.prototype, "ticketCost").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SaleDaysLuckyWheelEventVO.prototype, "currencyID", {
    get: function () {
      return c.ClientConstCurrency.ID_SALES_DAYS_LUCKY_WHEEL_TICKET;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.LuckyWheelEventVO.prototype, "currencyID").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SaleDaysLuckyWheelEventVO.prototype, "textIDString", {
    get: function () {
      return "luckyWheel_saleDays";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.LuckyWheelEventVO.prototype, "textIDString").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  SaleDaysLuckyWheelEventVO.EVENT_BUILDING_WOD_0 = 1897;
  return SaleDaysLuckyWheelEventVO;
}(u.LuckyWheelEventVO);
exports.SaleDaysLuckyWheelEventVO = d;
o.classImplementsInterfaces(d, "IEventOverviewable", "IDiscountableEventPackagesVO", "IEventPackagesVO", "IScoreUpdatable");