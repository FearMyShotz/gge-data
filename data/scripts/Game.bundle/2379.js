Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./437.js");
var s = function (e) {
  function FilterTrade() {
    CONSTRUCTOR_HACK;
    return e.call(this) || this;
  }
  n.__extends(FilterTrade, e);
  FilterTrade.prototype.filterFunction = function (e, t, i) {
    return o.instanceOfClass(e, "MarketMapmovementVO");
  };
  Object.defineProperty(FilterTrade.prototype, "name", {
    get: function () {
      return FilterTrade.NAME;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.AMovementFilterStrategy.prototype, "name").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  FilterTrade.__initialize_static_members = function () {
    FilterTrade.NAME = "FilterTrade";
  };
  return FilterTrade;
}(a.AMovementFilterStrategy);
exports.FilterTrade = s;
s.__initialize_static_members();