Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = function (e) {
  function OfferQuestConditionLogicEnum(t) {
    CONSTRUCTOR_HACK;
    return e.call(this, t, o.BasicEnum.instantiationKey) || this;
  }
  n.__extends(OfferQuestConditionLogicEnum, e);
  OfferQuestConditionLogicEnum.getConditionLogicByName = function (e) {
    return this.getByProperty(OfferQuestConditionLogicEnum, "name", e, null);
  };
  OfferQuestConditionLogicEnum.__initialize_static_members = function () {
    OfferQuestConditionLogicEnum.AND = new OfferQuestConditionLogicEnum("AND");
    OfferQuestConditionLogicEnum.OR = new OfferQuestConditionLogicEnum("OR");
    OfferQuestConditionLogicEnum.XOR = new OfferQuestConditionLogicEnum("XOR");
    OfferQuestConditionLogicEnum.NOT = new OfferQuestConditionLogicEnum("NOT");
  };
  return OfferQuestConditionLogicEnum;
}(o.BasicEnum);
exports.OfferQuestConditionLogicEnum = a;
a.__initialize_static_members();