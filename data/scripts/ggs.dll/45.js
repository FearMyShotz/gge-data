Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = function () {
  function PrivateOfferStateEnum(e) {
    this._serverEventId = e;
  }
  PrivateOfferStateEnum.getEnumByServerEventID = function (e) {
    switch (e) {
      case 21:
        return PrivateOfferStateEnum.QUEST_PENDING;
      case 22:
        return PrivateOfferStateEnum.QUEST_STARTED;
      case 40:
        return PrivateOfferStateEnum.OFFER_READY;
      case 41:
        return PrivateOfferStateEnum.OFFER_PENDING;
      case 10:
        return PrivateOfferStateEnum.PRECONDITION;
      case 410:
        return PrivateOfferStateEnum.PRECONDITION_FAILED;
      case 421:
        return PrivateOfferStateEnum.QUEST_REJECTED;
      case 422:
        return PrivateOfferStateEnum.QUEST_FAILED;
      case 423:
        return PrivateOfferStateEnum.QUEST_EXPIRED;
      case 441:
        return PrivateOfferStateEnum.OFFER_REJECTED;
      case 442:
        return PrivateOfferStateEnum.OFFER_FAILED;
      case 443:
        return PrivateOfferStateEnum.OFFER_EXPIRED;
      case 240:
        return PrivateOfferStateEnum.OFFER_ACCEPTED;
      case 200:
        return PrivateOfferStateEnum.OFFER_SUCCEEDED;
      case 400:
        return PrivateOfferStateEnum.OFFER_CANCELED;
      case 401:
        return PrivateOfferStateEnum.CANCELED_BY_ABTEST;
    }
    return null;
  };
  PrivateOfferStateEnum.prototype.toString = function () {
    return "StateID: " + this._serverEventId;
  };
  PrivateOfferStateEnum.isFinishedState = function (e) {
    return !e || PrivateOfferStateEnum.isFailedState(e) || e === PrivateOfferStateEnum.OFFER_SUCCEEDED;
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
        return true;
      default:
        return false;
    }
  };
  PrivateOfferStateEnum.PRECONDITION = new PrivateOfferStateEnum(10);
  PrivateOfferStateEnum.PRECONDITION_FAILED = new PrivateOfferStateEnum(410);
  PrivateOfferStateEnum.QUEST_PENDING = new PrivateOfferStateEnum(21);
  PrivateOfferStateEnum.QUEST_STARTED = new PrivateOfferStateEnum(22);
  PrivateOfferStateEnum.OFFER_READY = new PrivateOfferStateEnum(40);
  PrivateOfferStateEnum.OFFER_PENDING = new PrivateOfferStateEnum(41);
  PrivateOfferStateEnum.QUEST_REJECTED = new PrivateOfferStateEnum(421);
  PrivateOfferStateEnum.QUEST_FAILED = new PrivateOfferStateEnum(422);
  PrivateOfferStateEnum.QUEST_EXPIRED = new PrivateOfferStateEnum(423);
  PrivateOfferStateEnum.OFFER_REJECTED = new PrivateOfferStateEnum(441);
  PrivateOfferStateEnum.OFFER_FAILED = new PrivateOfferStateEnum(442);
  PrivateOfferStateEnum.OFFER_EXPIRED = new PrivateOfferStateEnum(443);
  PrivateOfferStateEnum.OFFER_ACCEPTED = new PrivateOfferStateEnum(240);
  PrivateOfferStateEnum.OFFER_SUCCEEDED = new PrivateOfferStateEnum(200);
  PrivateOfferStateEnum.OFFER_CANCELED = new PrivateOfferStateEnum(400);
  PrivateOfferStateEnum.CANCELED_BY_ABTEST = new PrivateOfferStateEnum(401);
  return PrivateOfferStateEnum;
}();
exports.PrivateOfferStateEnum = i;