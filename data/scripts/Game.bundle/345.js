Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = function (e) {
  function UnitBaseLocationEnum(t) {
    CONSTRUCTOR_HACK;
    return e.call(this, t, o.BasicEnum.instantiationKey) || this;
  }
  n.__extends(UnitBaseLocationEnum, e);
  UnitBaseLocationEnum.__initialize_static_members = function () {
    UnitBaseLocationEnum.HOME_CASTLE = new UnitBaseLocationEnum("home_castle");
    UnitBaseLocationEnum.KINGDOM_CASTLE = new UnitBaseLocationEnum("kingdom_castle");
    UnitBaseLocationEnum.CONTROLLER = new UnitBaseLocationEnum("controller");
    UnitBaseLocationEnum.DEFAULT = UnitBaseLocationEnum.CONTROLLER;
  };
  return UnitBaseLocationEnum;
}(o.BasicEnum);
exports.UnitBaseLocationEnum = a;
a.__initialize_static_members();