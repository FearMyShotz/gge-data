Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./60.js");
var s = require("./5321.js");
var r = function (e) {
  function OfferQuestConditionIntegerPlayerLevel() {
    return e.call(this) || this;
  }
  n.__extends(OfferQuestConditionIntegerPlayerLevel, e);
  Object.defineProperty(OfferQuestConditionIntegerPlayerLevel.prototype, "registerName", {
    get: function () {
      return a.ClientConstOffer.QUEST_CONDITION_INTEGER_PLAYER_LEVEL;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.OfferQuestConditionInteger.prototype, "registerName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return OfferQuestConditionIntegerPlayerLevel;
}(s.OfferQuestConditionInteger);
exports.OfferQuestConditionIntegerPlayerLevel = r;
o.classImplementsInterfaces(r, "IOfferQuestCondition");