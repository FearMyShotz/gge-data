Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./3.js");
var s = require("./6.js");
var r = require("./1065.js");
var l = require("./1704.js");
var c = require("./5534.js");
var u = require("./5535.js");
var d = require("./5536.js");
var p = require("./222.js");
var h = require("./4.js");
var g = require("./83.js");
var C = require("./99.js");
var _ = function (e) {
  function MessageSubscriptionVO() {
    var t = this;
    t._subType = -1;
    t._subscriptionTypeId = -1;
    t._allianceSubscribersAtThatTime = -1;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(MessageSubscriptionVO, e);
  MessageSubscriptionVO.prototype.parseMessageHeader = function (e) {
    var t = e.split("#");
    this._subType = s.int(t[0]);
    t = t[1].split("+");
    this._subscriptionTypeId = s.int(t[0]);
    switch (this._subType) {
      case o.MessageConst.SUBTYPE_SUBSCRIPTION_ENABLED:
      case o.MessageConst.SUBTYPE_SUBSCRIPTION_EXPIRED:
        if (t.length > 1) {
          this._allianceSubscribersAtThatTime = s.int(t[1]);
        }
    }
  };
  MessageSubscriptionVO.prototype.parseSubject = function () {
    switch (this._subType) {
      case o.MessageConst.SUBTYPE_SUBSCRIPTION_ENABLED:
        return a.Localize.text("dialog_subscriptionConfirmation_header");
      case o.MessageConst.SUBTYPE_SUBSCRIPTION_EXPIRED:
        return a.Localize.text("dialog_subscriptionExpired_header");
      case o.MessageConst.SUBTYPE_SUBSCRIPTION_REWARD:
        return a.Localize.text("dialog_subscription_monthlyGift_title");
    }
    return "";
  };
  MessageSubscriptionVO.prototype.parseSender = function () {
    return a.Localize.text("system");
  };
  Object.defineProperty(MessageSubscriptionVO.prototype, "dialogInfo", {
    get: function () {
      switch (this._subType) {
        case o.MessageConst.SUBTYPE_SUBSCRIPTION_ENABLED:
          return new g.DialogInfoVO(c.SubscriptionConfirmationDialog, new d.SubscriptionMessageDialogProperties(this));
        case o.MessageConst.SUBTYPE_SUBSCRIPTION_EXPIRED:
          return new g.DialogInfoVO(u.SubscriptionExpiredDialog, new d.SubscriptionMessageDialogProperties(this));
        case o.MessageConst.SUBTYPE_SUBSCRIPTION_REWARD:
          var e = h.CastleModel.subscriptionData.getSubscriptionRewardsByTypeID(this.subscriptionTypeId);
          var t = a.Localize.text("dialog_subscription_monthlyGift_singleSubscription_desc", [a.Localize.text(this.getPackageType().nameTextId)]);
          var i = new l.ModernGenericRewardDialogProperties("dialog_subscription_monthlyGift_title", t, e);
          return new g.DialogInfoVO(r.ModernGenericRewardDialog, i);
      }
      return null;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(C.AMessageVO.prototype, "dialogInfo").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  MessageSubscriptionVO.prototype.getPackageType = function () {
    return p.SubscriptionPackageEnum.getTypeByServerId(this.subscriptionTypeId);
  };
  Object.defineProperty(MessageSubscriptionVO.prototype, "subscriptionTypeId", {
    get: function () {
      return this._subscriptionTypeId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageSubscriptionVO.prototype, "allianceSubscribersAtThatTime", {
    get: function () {
      return this._allianceSubscribersAtThatTime;
    },
    enumerable: true,
    configurable: true
  });
  return MessageSubscriptionVO;
}(C.AMessageVO);
exports.MessageSubscriptionVO = _;