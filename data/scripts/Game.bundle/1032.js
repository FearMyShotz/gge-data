Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function UnitPackageListEvent(t, i = false, n = false) {
    CONSTRUCTOR_HACK;
    return e.call(this, t, i, n) || this;
  }
  n.__extends(UnitPackageListEvent, e);
  UnitPackageListEvent.__initialize_static_members = function () {
    UnitPackageListEvent.PACKAGE_UPDATE = "packageUpdate";
  };
  return UnitPackageListEvent;
}(createjs.Event);
exports.UnitPackageListEvent = o;
o.__initialize_static_members();