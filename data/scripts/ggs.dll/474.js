Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./30.js");
var a = require("./37.js");
var s = require("./22.js");
var r = function () {
  function BasicPrivateOfferVO() {
    this._hasRequestedNewTime = false;
  }
  BasicPrivateOfferVO.prototype.dispose = function () {
    this._id = -1;
    this._questConditions.dispose();
    this._questConditions = null;
    this._description = null;
    this._offerState = null;
  };
  BasicPrivateOfferVO.prototype.loadFromParamObject = function (e, t, n = -1, i = true, a = null, s = null) {
    if (e > 0) {
      this._id = e;
    }
    if (t) {
      this._offerState = t;
    }
    this._endTimestamp = n;
    this._hasInfiniteTime = i;
    this._description = a || new Map();
    this._questConditions = s;
  };
  Object.defineProperty(BasicPrivateOfferVO.prototype, "remainingSeconds", {
    get: function () {
      return Math.max(0, (this._endTimestamp - Date.now()) * 0.001);
    },
    enumerable: true,
    configurable: true
  });
  BasicPrivateOfferVO.prototype.getRemainingTimeInMS = function () {
    return Math.max(0, this._endTimestamp - Date.now());
  };
  Object.defineProperty(BasicPrivateOfferVO.prototype, "secondsOverTime", {
    get: function () {
      return (Date.now() - this._endTimestamp) * 0.001;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicPrivateOfferVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicPrivateOfferVO.prototype, "hasInfiniteTime", {
    get: function () {
      return this._hasInfiniteTime;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicPrivateOfferVO.prototype, "offerState", {
    get: function () {
      return this._offerState;
    },
    enumerable: true,
    configurable: true
  });
  BasicPrivateOfferVO.prototype.changeState = function (e) {
    this._offerState = e;
  };
  BasicPrivateOfferVO.prototype.updateDuration = function (e) {
    if (e != -1) {
      this._endTimestamp = Date.now() + e * 1000;
      this._hasInfiniteTime = false;
    } else {
      this._endTimestamp = -1;
      this._hasInfiniteTime = true;
    }
    this._hasRequestedNewTime = false;
  };
  BasicPrivateOfferVO.prototype.getDescriptionByName = function (e) {
    return this._description.get(e);
  };
  BasicPrivateOfferVO.prototype.hasDescription = function (e) {
    return this._description.get(e) !== undefined;
  };
  BasicPrivateOfferVO.prototype.getVisualComponentByName = function (e) {
    var t = this._description.get(s.Constants_Offer.VISUAL_COMPONENT_CONTAINER);
    if (t && t.visuals[e]) {
      return t.visuals[e];
    } else {
      return null;
    }
  };
  BasicPrivateOfferVO.prototype.getRewardComponentByName = function (e) {
    var t = this._description.get(s.Constants_Offer.REWARD_COMPONENT_CONTAINER);
    if (t && t.rewards[e]) {
      return t.rewards[e];
    } else {
      return null;
    }
  };
  BasicPrivateOfferVO.prototype.getQuestConditions = function () {
    return this._questConditions.questConditions;
  };
  BasicPrivateOfferVO.prototype.allQuestConditionsPassed = function () {
    return this._questConditions.conditionPassed;
  };
  BasicPrivateOfferVO.prototype.getQuestConditionByName = function (e) {
    return this._questConditions.questConditions[e];
  };
  BasicPrivateOfferVO.prototype.hasAutoAccept = function () {
    return this._description.get(s.Constants_Offer.OFFER_AUTO_ACCEPT) !== undefined && this.getDescriptionByName(s.Constants_Offer.OFFER_AUTO_ACCEPT).autoAccept;
  };
  BasicPrivateOfferVO.prototype.tracefOffer = function () {
    i.debug("---- PrivateOffer ----");
    i.debug("OfferID: " + this._id);
    i.debug("EndtimeStamp: " + this._endTimestamp + " --> remaining: " + (this._endTimestamp - Date.now()) * 0.001);
    i.debug("OfferState: " + this._offerState.toString());
    i.debug("QuestConditions --->" + this._questConditions.toString());
    i.debug("OfferDescription --->");
    for (var e = 0, t = Array.from(this._description.keys()); e < t.length; e++) {
      var n = t[e];
      var a = this._description.get(n);
      i.debug("   " + n + " --> " + a);
    }
    i.debug("---- PrivateOfferEnd ----");
  };
  BasicPrivateOfferVO.prototype.toString = function () {
    var e = "---- PrivateOffer ----";
    e += "\nOfferID: " + this._id;
    e += "\nEndtimeStamp: " + this._endTimestamp + " --> remaining: " + (this._endTimestamp - Date.now()) * 0.001;
    e += "\nOfferState: " + this._offerState.toString();
    if (this._questConditions) {
      e += "\nQuestConditions --->" + this._questConditions.toString();
    }
    a.info("OfferDescription --->");
    for (var t = 0, n = Array.from(this._description.keys()); t < n.length; t++) {
      var i = n[t];
      e += "\n   " + i + " --> " + this._description.get(i);
    }
    return e += "---- PrivateOfferEnd ----";
  };
  Object.defineProperty(BasicPrivateOfferVO.prototype, "hasRequestedNewTime", {
    get: function () {
      return this._hasRequestedNewTime;
    },
    set: function (e) {
      this._hasRequestedNewTime = e;
    },
    enumerable: true,
    configurable: true
  });
  return BasicPrivateOfferVO;
}();
exports.BasicPrivateOfferVO = r;