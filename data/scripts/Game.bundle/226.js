Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = function (e) {
  function PrivateOfferStateEnum(t, i) {
    var n = this;
    n._stateId = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this, t, o.BasicEnum.instantiationKey) || this)._stateId = i;
    return n;
  }
  n.__extends(PrivateOfferStateEnum, e);
  PrivateOfferStateEnum.getEnumByStateId = function (e) {
    return this.getByProperty(PrivateOfferStateEnum, "stateId", e, null);
  };
  PrivateOfferStateEnum.isFinishedState = function (e) {
    return !e || PrivateOfferStateEnum.isFailedState(e) || e === PrivateOfferStateEnum.OFFER_SUCCEEDED || e === PrivateOfferStateEnum.ITERATION_SUCCEEDED;
  };
  PrivateOfferStateEnum.isFailedState = function (e) {
    switch (e) {
      case PrivateOfferStateEnum.PRECONDITION_FAILED:
      case PrivateOfferStateEnum.QUEST_REJECTED:
      case PrivateOfferStateEnum.QUEST_FAILED:
      case PrivateOfferStateEnum.QUEST_EXPIRED:
      case PrivateOfferStateEnum.OFFER_REJECTED:
      case PrivateOfferStateEnum.OFFER_FAILED:
      case PrivateOfferStateEnum.OFFER_EXPIRED:
      case PrivateOfferStateEnum.CANCELED_BY_ABTEST:
      case PrivateOfferStateEnum.OFFER_CANCELED:
      case PrivateOfferStateEnum.ITERATION_FAILED:
        return true;
      default:
        return false;
    }
  };
  PrivateOfferStateEnum.isVisualFailedState = function (e) {
    switch (e) {
      case PrivateOfferStateEnum.QUEST_REJECTED:
      case PrivateOfferStateEnum.QUEST_FAILED:
      case PrivateOfferStateEnum.QUEST_EXPIRED:
      case PrivateOfferStateEnum.OFFER_REJECTED:
      case PrivateOfferStateEnum.OFFER_FAILED:
      case PrivateOfferStateEnum.OFFER_CANCELED:
        return true;
      default:
        return false;
    }
  };
  Object.defineProperty(PrivateOfferStateEnum.prototype, "stateId", {
    get: function () {
      return this._stateId;
    },
    enumerable: true,
    configurable: true
  });
  PrivateOfferStateEnum.__initialize_static_members = function () {
    PrivateOfferStateEnum.PRECONDITION = new PrivateOfferStateEnum("precondition", 10);
    PrivateOfferStateEnum.PRECONDITION_FAILED = new PrivateOfferStateEnum("preconditionFailed", 410);
    PrivateOfferStateEnum.QUEST_PENDING = new PrivateOfferStateEnum("questPending", 21);
    PrivateOfferStateEnum.QUEST_STARTED = new PrivateOfferStateEnum("questStarted", 22);
    PrivateOfferStateEnum.OFFER_READY = new PrivateOfferStateEnum("offerReady", 40);
    PrivateOfferStateEnum.OFFER_PENDING = new PrivateOfferStateEnum("offerPending", 41);
    PrivateOfferStateEnum.QUEST_REJECTED = new PrivateOfferStateEnum("questRejected", 421);
    PrivateOfferStateEnum.QUEST_FAILED = new PrivateOfferStateEnum("questFailed", 422);
    PrivateOfferStateEnum.QUEST_EXPIRED = new PrivateOfferStateEnum("questExpired", 423);
    PrivateOfferStateEnum.OFFER_REJECTED = new PrivateOfferStateEnum("offerRejected", 441);
    PrivateOfferStateEnum.OFFER_FAILED = new PrivateOfferStateEnum("offerFailed", 442);
    PrivateOfferStateEnum.OFFER_EXPIRED = new PrivateOfferStateEnum("offerExpired", 443);
    PrivateOfferStateEnum.OFFER_ACCEPTED = new PrivateOfferStateEnum("offerAccepted", 240);
    PrivateOfferStateEnum.OFFER_SUCCEEDED = new PrivateOfferStateEnum("offerSucceeded", 200);
    PrivateOfferStateEnum.OFFER_CANCELED = new PrivateOfferStateEnum("offerCanceled", 400);
    PrivateOfferStateEnum.CANCELED_BY_ABTEST = new PrivateOfferStateEnum("canceledByABTest", 401);
    PrivateOfferStateEnum.ITERATION_SUCCEEDED = new PrivateOfferStateEnum("iterationSucceeded", 50);
    PrivateOfferStateEnum.ITERATION_FAILED = new PrivateOfferStateEnum("iterationFailed", 51);
    PrivateOfferStateEnum.REWARD_FAILED = new PrivateOfferStateEnum("rewardFailed", 444);
  };
  return PrivateOfferStateEnum;
}(o.BasicEnum);
exports.PrivateOfferStateEnum = a;
a.__initialize_static_members();