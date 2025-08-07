Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function SubscriptionInfoTopicEnum(t, i = a.SubscriptionDialogInfo.PAGE_TEXT) {
    return e.call(this, t, i) || this;
  }
  n.__extends(SubscriptionInfoTopicEnum, e);
  SubscriptionInfoTopicEnum.__initialize_static_members = function () {
    SubscriptionInfoTopicEnum.TOPIC_GENERAL = new SubscriptionInfoTopicEnum("general");
    SubscriptionInfoTopicEnum.TOPIC_GETTING_SUBSCRIPTION = new SubscriptionInfoTopicEnum("gettingSubscription");
    SubscriptionInfoTopicEnum.TOPIC_MONTHLY_PAYMENT = new SubscriptionInfoTopicEnum("monthlyPayment");
    SubscriptionInfoTopicEnum.TOPIC_MULTI_SUBSCRIPTIONS = new SubscriptionInfoTopicEnum("multiSubscriptions");
    SubscriptionInfoTopicEnum.TOPIC_LOGIN_ONE_MONTH = new SubscriptionInfoTopicEnum("loginOneMonth");
    SubscriptionInfoTopicEnum.TOPIC_CANCEL_SUBSCRIPTION = new SubscriptionInfoTopicEnum("cancelSubscription");
    SubscriptionInfoTopicEnum.TOPIC_PLAYER_SUBSCRIPTION = new SubscriptionInfoTopicEnum("playerSubscription");
    SubscriptionInfoTopicEnum.TOPIC_AUTO_SPY = new SubscriptionInfoTopicEnum("autoSpy");
    SubscriptionInfoTopicEnum.TOPIC_AUTO_SALE = new SubscriptionInfoTopicEnum("autoSale");
    SubscriptionInfoTopicEnum.TOPIC_ALLIANCE_SUBSCRIPTION = new SubscriptionInfoTopicEnum("allianceSubscription");
    SubscriptionInfoTopicEnum.TOPIC_NO_ALLIANCE_SUBSCRIPTION = new SubscriptionInfoTopicEnum("noAllianceSubscription");
    SubscriptionInfoTopicEnum.TOPIC_LOYALTY = new SubscriptionInfoTopicEnum("loyaltyGift", a.SubscriptionDialogInfo.PAGE_LOYALTY);
    SubscriptionInfoTopicEnum.TOPIC_MONTHLY_GIFT = new SubscriptionInfoTopicEnum("monthlyGift");
    SubscriptionInfoTopicEnum.TOPIC_SUBSCRIBED_ALLIANCE_MEMBERS = new SubscriptionInfoTopicEnum("subscribedAllianceMembers", a.SubscriptionDialogInfo.PAGE_EFFECTS);
  };
  return SubscriptionInfoTopicEnum;
}(require("./958.js").InfoCatalogTopicEnum);
exports.SubscriptionInfoTopicEnum = o;
var a = require("./1389.js");
o.__initialize_static_members();