Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = function () {
  function OfferQuestConditionLogicEnum(e) {
    this._operation = e;
  }
  OfferQuestConditionLogicEnum.getConditionLogicByName = function (e) {
    switch (e) {
      case "AND":
        return OfferQuestConditionLogicEnum.AND;
      case "OR":
        return OfferQuestConditionLogicEnum.OR;
      case "XOR":
        return OfferQuestConditionLogicEnum.XOR;
      case "NOT":
        return OfferQuestConditionLogicEnum.NOT;
    }
    return null;
  };
  OfferQuestConditionLogicEnum.prototype.toString = function () {
    return this._operation;
  };
  OfferQuestConditionLogicEnum.AND = new OfferQuestConditionLogicEnum("AND");
  OfferQuestConditionLogicEnum.OR = new OfferQuestConditionLogicEnum("OR");
  OfferQuestConditionLogicEnum.XOR = new OfferQuestConditionLogicEnum("XOR");
  OfferQuestConditionLogicEnum.NOT = new OfferQuestConditionLogicEnum("NOT");
  return OfferQuestConditionLogicEnum;
}();
exports.OfferQuestConditionLogicEnum = i;