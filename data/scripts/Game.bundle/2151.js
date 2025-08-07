Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = function (e) {
  function GlobalOfferScopeEnum(t) {
    CONSTRUCTOR_HACK;
    return e.call(this, t, o.BasicEnum.instantiationKey) || this;
  }
  n.__extends(GlobalOfferScopeEnum, e);
  GlobalOfferScopeEnum.__initialize_static_members = function () {
    GlobalOfferScopeEnum.GLOBAL = new GlobalOfferScopeEnum("global");
    GlobalOfferScopeEnum.PRIVATE = new GlobalOfferScopeEnum("private");
    GlobalOfferScopeEnum.RETENTION = new GlobalOfferScopeEnum("retention");
  };
  return GlobalOfferScopeEnum;
}(o.BasicEnum);
exports.GlobalOfferScopeEnum = a;
a.__initialize_static_members();