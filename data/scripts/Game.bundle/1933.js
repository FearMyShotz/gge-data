Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./4.js");
var u = function (e) {
  function AutoRecruitmentBuyRecruitmentSlotsProperties(t, i) {
    var n = this;
    n._slotCount = 0;
    n._listId = 0;
    n._c2Costs = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this)._listId = t;
    n._slotCount = i;
    n._c2Costs = c.CastleModel.costsData.getFinalCostsC2(s.UnitProductionConst.UNLOCK_C2) * n._slotCount;
    var o = l.int(s.UnitProductionConst.UNLOCK_DURATION);
    n._unlockDurationStr = a.TimeStringHelper.getTimeToString(o, a.TimeStringHelper.TWO_TIME_FORMAT, r.Localize.text);
    return n;
  }
  n.__extends(AutoRecruitmentBuyRecruitmentSlotsProperties, e);
  Object.defineProperty(AutoRecruitmentBuyRecruitmentSlotsProperties.prototype, "slotCount", {
    get: function () {
      return this._slotCount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoRecruitmentBuyRecruitmentSlotsProperties.prototype, "listId", {
    get: function () {
      return this._listId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoRecruitmentBuyRecruitmentSlotsProperties.prototype, "c2Costs", {
    get: function () {
      return this._c2Costs;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoRecruitmentBuyRecruitmentSlotsProperties.prototype, "unlockDurationStr", {
    get: function () {
      return this._unlockDurationStr;
    },
    enumerable: true,
    configurable: true
  });
  return AutoRecruitmentBuyRecruitmentSlotsProperties;
}(o.BasicProperties);
exports.AutoRecruitmentBuyRecruitmentSlotsProperties = u;