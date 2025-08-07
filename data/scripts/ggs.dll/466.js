Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./467.js");
var a = require("./468.js");
var s = function () {
  function BasicOfferQuestConditionFactory(e) {
    this.modelData = e;
  }
  BasicOfferQuestConditionFactory.prototype.createOfferQuestCondition = function (e, t) {
    return new i.OfferQuestConditionInteger(e, t);
  };
  BasicOfferQuestConditionFactory.prototype.createOfferQuestContainer = function (e) {
    return new a.OfferQuestConditionContainer(e, this.modelData);
  };
  BasicOfferQuestConditionFactory.prototype.dispose = function () {
    this.modelData = null;
  };
  return BasicOfferQuestConditionFactory;
}();
exports.BasicOfferQuestConditionFactory = s;