Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./5.js");
var s = require("./55.js");
var r = function (e) {
  function AutoRecruitmentPriceEnum(t) {
    CONSTRUCTOR_HACK;
    return e.call(this, t, o.BasicEnum.instantiationKey) || this;
  }
  n.__extends(AutoRecruitmentPriceEnum, e);
  AutoRecruitmentPriceEnum.getTypeByName = function (e) {
    return this.getByProperty(AutoRecruitmentPriceEnum, "name", s.ClientConstUtils.lowercaseFirstLetter(e), AutoRecruitmentPriceEnum.SOLDIERS);
  };
  AutoRecruitmentPriceEnum.getTypeByListId = function (e) {
    switch (e) {
      case a.UnitProductionConst.UNIT_LIST:
        return AutoRecruitmentPriceEnum.SOLDIERS;
      case a.UnitProductionConst.TOOLS_LIST:
        return AutoRecruitmentPriceEnum.TOOLS;
      case a.UnitProductionConst.AUXILIARY_LIST:
        return AutoRecruitmentPriceEnum.AUXILIARIES;
      default:
        return AutoRecruitmentPriceEnum.SOLDIERS;
    }
  };
  AutoRecruitmentPriceEnum.__initialize_static_members = function () {
    AutoRecruitmentPriceEnum.SOLDIERS = new AutoRecruitmentPriceEnum("soldiers");
    AutoRecruitmentPriceEnum.TOOLS = new AutoRecruitmentPriceEnum("tools");
    AutoRecruitmentPriceEnum.AUXILIARIES = new AutoRecruitmentPriceEnum("auxiliaries");
  };
  return AutoRecruitmentPriceEnum;
}(require("./84.js").CastleEnum);
exports.AutoRecruitmentPriceEnum = r;
r.__initialize_static_members();