Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./5.js");
var s = function (e) {
  function SubscriptionPackageEnum(t, i, n, a = "") {
    var s = this;
    s._serverId = 0;
    CONSTRUCTOR_HACK;
    (s = e.call(this, t, o.BasicEnum.instantiationKey) || this)._serverId = i;
    s._shopId = n;
    s._nameTextId = a;
    return s;
  }
  n.__extends(SubscriptionPackageEnum, e);
  SubscriptionPackageEnum.getTypeByServerId = function (e) {
    return this.getByProperty(SubscriptionPackageEnum, "serverId", e, SubscriptionPackageEnum.UNKNOWN);
  };
  SubscriptionPackageEnum.getTypeByShopId = function (e) {
    return this.getByProperty(SubscriptionPackageEnum, "shopId", e, SubscriptionPackageEnum.UNKNOWN);
  };
  Object.defineProperty(SubscriptionPackageEnum.prototype, "serverId", {
    get: function () {
      return this._serverId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SubscriptionPackageEnum.prototype, "shopId", {
    get: function () {
      return this._shopId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SubscriptionPackageEnum.prototype, "nameTextId", {
    get: function () {
      return this._nameTextId;
    },
    enumerable: true,
    configurable: true
  });
  SubscriptionPackageEnum.__initialize_static_members = function () {
    SubscriptionPackageEnum.UNKNOWN = new SubscriptionPackageEnum("unknown", -1, "");
    SubscriptionPackageEnum.PLAYER = new SubscriptionPackageEnum("player", a.SubscriptionConst.PLAYER_SUBSCRIPTION_PACKAGE_TYPE_ID, "individualSubscription", "dialog_subscriptionOverview_singleSub_1_title");
    SubscriptionPackageEnum.PREMIUM = new SubscriptionPackageEnum("premium", a.SubscriptionConst.PLAYER_SUBSCRIPTION_PREMIUM_PACKAGE_TYPE_ID, "premiumIndividualSubscription", "dialog_subscriptionOverview_singleSub_2_title");
    SubscriptionPackageEnum.ALLIANCE = new SubscriptionPackageEnum("alliance", a.SubscriptionConst.ALLIANCE_SUBSCRIPTION_PACKAGE_TYPE_ID, "allianceSubscription", "dialog_subscriptionOverview_allianceSub_1_title");
  };
  return SubscriptionPackageEnum;
}(require("./84.js").CastleEnum);
exports.SubscriptionPackageEnum = s;
s.__initialize_static_members();