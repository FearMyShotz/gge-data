Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./437.js");
var a = function (e) {
  function FilterAll() {
    CONSTRUCTOR_HACK;
    return e.call(this) || this;
  }
  n.__extends(FilterAll, e);
  FilterAll.prototype.filterFunction = function (e, t, i) {
    return true;
  };
  Object.defineProperty(FilterAll.prototype, "name", {
    get: function () {
      return FilterAll.NAME;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(o.AMovementFilterStrategy.prototype, "name").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  FilterAll.__initialize_static_members = function () {
    FilterAll.NAME = "FilterAll";
  };
  return FilterAll;
}(o.AMovementFilterStrategy);
exports.FilterAll = a;
a.__initialize_static_members();