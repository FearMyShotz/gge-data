Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./437.js");
var s = function (e) {
  function FilterSpy() {
    CONSTRUCTOR_HACK;
    return e.call(this) || this;
  }
  n.__extends(FilterSpy, e);
  FilterSpy.prototype.filterFunction = function (e, t, i) {
    return o.instanceOfClass(e, "SpyMapmovementVO") || o.instanceOfClass(e, "PlaguemonkMapmovementVO");
  };
  Object.defineProperty(FilterSpy.prototype, "name", {
    get: function () {
      return FilterSpy.NAME;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.AMovementFilterStrategy.prototype, "name").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  FilterSpy.__initialize_static_members = function () {
    FilterSpy.NAME = "FilterSpy";
  };
  return FilterSpy;
}(a.AMovementFilterStrategy);
exports.FilterSpy = s;
s.__initialize_static_members();