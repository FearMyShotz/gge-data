Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastlePaymentRewardSpecialOfferFinishDialogProperties(t) {
    var i = this;
    i.rewardCount = 0;
    i.rewardId = 0;
    i.wonRubies = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).rewardCount = t.RC;
    i.rewardId = t.RID ? t.RID : -1;
    i.definedRarenessEquipmentList = a.CollectableManager.parser.s2cParamList.createList(t.RW);
    i.finalRewardList = a.CollectableManager.parser.s2cParamList.createList(t.RW);
    i.wonRubies = t.WR;
    if (t.R) {
      i.parseReward(t.R);
    }
    return i;
  }
  n.__extends(CastlePaymentRewardSpecialOfferFinishDialogProperties, e);
  CastlePaymentRewardSpecialOfferFinishDialogProperties.prototype.parseReward = function (e) {
    this.randomEquipmentRewardList = a.CollectableManager.parser.s2cParamList.createList(e);
  };
  return CastlePaymentRewardSpecialOfferFinishDialogProperties;
}(require("./2.js").BasicProperties);
exports.CastlePaymentRewardSpecialOfferFinishDialogProperties = o;
var a = require("./50.js");