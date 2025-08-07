Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = function (e) {
  function StatusBarExpansionDirectionEnum(t) {
    CONSTRUCTOR_HACK;
    return e.call(this, t, o.BasicEnum.instantiationKey) || this;
  }
  n.__extends(StatusBarExpansionDirectionEnum, e);
  StatusBarExpansionDirectionEnum.__initialize_static_members = function () {
    StatusBarExpansionDirectionEnum.EXPAND_LEFT = new StatusBarExpansionDirectionEnum("expandLeft");
    StatusBarExpansionDirectionEnum.EXPAND_RIGHT = new StatusBarExpansionDirectionEnum("expandRight");
    StatusBarExpansionDirectionEnum.EXPAND_UP = new StatusBarExpansionDirectionEnum("expandUp");
    StatusBarExpansionDirectionEnum.EXPAND_DOWN = new StatusBarExpansionDirectionEnum("expandDown");
  };
  return StatusBarExpansionDirectionEnum;
}(o.BasicEnum);
exports.StatusBarExpansionDirectionEnum = a;
a.__initialize_static_members();