Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function PrivateOfferVO() {
    this._id = 0;
    this._endTimestamp = 0;
    this._statusEndTimeStamp = 0;
    this._hasInfiniteTime = false;
    this._descriptions = [];
    this._shouldRequestStatusCheck = false;
    this._isTimeDisplayedInPercentage = false;
    this._isInvitationOffer = false;
    this._startTimestamp = 0;
    this._duration = 0;
    this._isOneTimeOffer = false;
  }
  PrivateOfferVO.prototype.dispose = function () {
    this._id = -1;
    this._questConditions = null;
    this._descriptions = null;
    this._offerState = null;
  };
  PrivateOfferVO.prototype.loadFromParamObject = function (e) {
    var t;
    var i;
    var n;
    this._id = parseInt(e.OID);
    this._offerState = E.PrivateOfferStateEnum.getEnumByStateId(parseInt(e.OS));
    this._descriptions = [];
    this._isTimeDisplayedInPercentage = false;
    if (e.RS) {
      this._endTimestamp = C.CachedTimer.getCachedTimer() + parseInt(e.RS) * g.ClientConstTime.SEC_2_MILLISEC;
      this._hasInfiniteTime = false;
    } else {
      this._endTimestamp = -1;
      this._hasInfiniteTime = true;
    }
    if (e.D) {
      this._duration = parseInt(e.D);
    }
    this._startTimestamp = -1;
    this._statusEndTimeStamp = 1;
    this._shouldRequestStatusCheck = false;
    if (e.SNC) {
      this._statusEndTimeStamp = C.CachedTimer.getCachedTimer() + parseInt(e.SNC) * g.ClientConstTime.SEC_2_MILLISEC;
      this._shouldRequestStatusCheck = this._statusEndTimeStamp > 0;
    }
    if (e.OD) {
      for (var o = 0; o < e.OD.length; ++o) {
        n = new Map();
        for (t in e.OD[o]) {
          i = e.OD[o][t];
          var a = m.CastleModel.privateOfferData.createOfferDescriptionObject(t, i);
          if (a) {
            n.set(t, a);
          }
        }
        this._descriptions.push(n);
      }
    }
    if (e.QD) {
      this._questConditions = m.CastleModel.privateOfferData.createQuestCondition(c.ClientConstOffer.QUEST_CONDITION_CONTAINER, e.QD, e.QD.publicID, f.OfferQuestConditionLogicEnum.getConditionLogicByName(e.QD.logic));
    }
    this.parseQuestProgress(e.PC);
    if (e.SMS) {
      this._premiumSmsVO = new O.PremiumSmsVO();
      this._premiumSmsVO.loadFromParamObject(e.SMS);
    }
    this.checkTimelessData();
    this.checkOneTimeOffer();
    this.checkInvitationData();
  };
  PrivateOfferVO.prototype.checkOneTimeOffer = function () {
    var e = p.castAs(this.getAdditionalComponentByName(c.ClientConstOffer.OFFER_ADDITIONAL_IS_ONE_TIME_OFFER), "OfferDescriptionAdditionalIsOneTimeOffer");
    if (e) {
      this._isOneTimeOffer = e.isOneTimeOffer;
    }
  };
  PrivateOfferVO.prototype.checkTimelessData = function () {
    var e = p.castAs(this.getAdditionalComponentByName(c.ClientConstOffer.OFFER_ADDITIONAL_IS_TIMELESS), "OfferDescriptionAdditionalIsTimeless");
    if (e && e.isTimeless) {
      this._startTimestamp = h.int(this._endTimestamp - (isNaN(this._duration) ? e.totalSeconds : this._duration) * g.ClientConstTime.SEC_2_MILLISEC);
      this._isTimeDisplayedInPercentage = true;
    }
  };
  PrivateOfferVO.prototype.checkInvitationData = function () {
    var e = p.castAs(this.getAdditionalComponentByName(c.ClientConstOffer.OFFER_ADDITIONAL_IS_INVITATION), "OfferDescriptionAdditionalIsInviteeConversionOffer");
    if (e && e.isInvitation) {
      this._isInvitationOffer = true;
    }
  };
  Object.defineProperty(PrivateOfferVO.prototype, "remainingSeconds", {
    get: function () {
      return Math.max(0, (this._endTimestamp - C.CachedTimer.getCachedTimer()) * g.ClientConstTime.MILLISEC_2_SEC);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrivateOfferVO.prototype, "secondsOverTime", {
    get: function () {
      return (C.CachedTimer.getCachedTimer() - this._endTimestamp) * g.ClientConstTime.MILLISEC_2_SEC;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrivateOfferVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrivateOfferVO.prototype, "hasInfiniteTime", {
    get: function () {
      return this._hasInfiniteTime;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrivateOfferVO.prototype, "offerState", {
    get: function () {
      return this._offerState;
    },
    enumerable: true,
    configurable: true
  });
  PrivateOfferVO.prototype.changeState = function (e) {
    this._offerState = e;
  };
  Object.defineProperty(PrivateOfferVO.prototype, "premiumSmsVO", {
    get: function () {
      return this._premiumSmsVO;
    },
    enumerable: true,
    configurable: true
  });
  PrivateOfferVO.prototype.updateDuration = function (e) {
    if (e != -1) {
      this._endTimestamp = h.int(C.CachedTimer.getCachedTimer() + e * g.ClientConstTime.SEC_2_MILLISEC);
      this._hasInfiniteTime = false;
    } else {
      this._endTimestamp = -1;
      this._hasInfiniteTime = true;
    }
  };
  PrivateOfferVO.prototype.parseQuestProgress = function (e) {
    if (e) {
      for (var t = 0; t < e.length; ++t) {
        var i = this.getQuestConditionByPublicId(e[t].name);
        if (i) {
          i.parseProgress(e[t].params);
        } else {
          d.info("Questcondtion with publicID: " + e[t].name + " not found!");
        }
      }
    }
  };
  PrivateOfferVO.prototype.getOfferDescriptionByIndex = function (e) {
    if (this._descriptions && e < this._descriptions.length && this._descriptions[e]) {
      return this._descriptions[e];
    } else {
      return null;
    }
  };
  PrivateOfferVO.prototype.getDescriptionByName = function (e, t = PrivateOfferVO.DEFAULT_OFFER_DESCRIPTION_INDEX) {
    var i = this.getOfferDescriptionByIndex(t);
    if (i) {
      return i.get(e);
    } else {
      return null;
    }
  };
  PrivateOfferVO.prototype.getVisualComponentByName = function (e, t = PrivateOfferVO.DEFAULT_OFFER_DESCRIPTION_INDEX) {
    var i = this.getOfferDescriptionByIndex(t);
    if (!i) {
      return null;
    }
    var n = p.castAs(i.get(c.ClientConstOffer.VISUAL_COMPONENT_CONTAINER), "OfferDescriptionVisuals");
    if (n && n.visuals.get(e)) {
      return n.visuals.get(e);
    } else {
      return null;
    }
  };
  PrivateOfferVO.prototype.getRewardComponentByName = function (e, t = PrivateOfferVO.DEFAULT_OFFER_DESCRIPTION_INDEX) {
    var i = this.getOfferDescriptionByIndex(t);
    if (!i) {
      return null;
    }
    var n = p.castAs(i.get(c.ClientConstOffer.REWARD_COMPONENT_CONTAINER), "OfferDescriptionRewards");
    if (n && n.rewards.get(e)) {
      return n.rewards.get(e);
    } else {
      return null;
    }
  };
  PrivateOfferVO.prototype.getAdditionalComponentByName = function (e, t = PrivateOfferVO.DEFAULT_OFFER_DESCRIPTION_INDEX) {
    var i = this.getOfferDescriptionByIndex(t);
    if (!i) {
      return null;
    }
    var n = p.castAs(i.get(c.ClientConstOffer.ADDITIONAL_COMPONENT_CONTAINER), "OfferDescriptionAdditionals");
    if (n) {
      var o = n.additionals.get(e);
      if (o) {
        return o;
      }
    }
    return null;
  };
  PrivateOfferVO.prototype.getTotalRewardListFromOfferVO = function (e = PrivateOfferVO.DEFAULT_OFFER_DESCRIPTION_INDEX) {
    var t = this.getOfferDescriptionByIndex(e);
    var i = new a.CollectableList();
    if (t) {
      var n = t.get(c.ClientConstOffer.REWARD_COMPONENT_CONTAINER).rewards;
      if (n != null) {
        for (var o = 0, s = Array.from(n.values()); o < s.length; o++) {
          var r = s[o];
          if (r !== undefined) {
            i.addList(r.getRewardsList());
          }
        }
      }
    }
    return i;
  };
  PrivateOfferVO.prototype.getCostsForOfferAcception = function (e = PrivateOfferVO.DEFAULT_OFFER_DESCRIPTION_INDEX) {
    var t = this.getOfferDescriptionByIndex(e);
    var i = 0;
    var n = 0;
    if (t) {
      if (t.get(c.ClientConstOffer.OFFER_COST_C1) !== undefined) {
        i = h.int(t.get(c.ClientConstOffer.OFFER_COST_C1).costC1);
      }
      if (t.get(c.ClientConstOffer.OFFER_COST_C2) !== undefined) {
        n = h.int(t.get(c.ClientConstOffer.OFFER_COST_C2).costC2);
      }
    }
    return o.CollectableManager.parser.createGoodsListSave(new s.CollectableItemC1VO(i), new r.CollectableItemC2VO(n));
  };
  PrivateOfferVO.prototype.getQuestConditions = function () {
    return this._questConditions.questConditions;
  };
  PrivateOfferVO.prototype.allQuestConditionsPassed = function () {
    return this._questConditions.conditionPassed;
  };
  PrivateOfferVO.prototype.getQuestConditionByName = function (e, t = true) {
    var i;
    for (var n = this._questConditions; n != null;) {
      if ((i = n.questConditions.get(e)) || !t) {
        return i;
      }
      n = n.questConditions.get(c.ClientConstOffer.QUEST_CONDITION_CONTAINER);
    }
    return null;
  };
  PrivateOfferVO.prototype.getQuestConditionByPublicId = function (e, t = true) {
    for (var i = this._questConditions; i != null;) {
      for (var n = 0, o = Array.from(i.questConditions.values()); n < o.length; n++) {
        var a = o[n];
        if (a !== undefined && a.publicID == e) {
          return a;
        }
      }
      i = t ? i.questConditions.get(c.ClientConstOffer.QUEST_CONDITION_CONTAINER) : null;
    }
    return null;
  };
  PrivateOfferVO.prototype.hasAutoAccept = function (e = PrivateOfferVO.DEFAULT_OFFER_DESCRIPTION_INDEX) {
    return this.getOfferDescriptionByIndex(e).get(c.ClientConstOffer.OFFER_AUTO_ACCEPT) !== undefined && !!this.getDescriptionByName(c.ClientConstOffer.OFFER_AUTO_ACCEPT).autoAccept;
  };
  PrivateOfferVO.prototype.amountOfDescriptions = function () {
    return h.int(this._descriptions.length);
  };
  Object.defineProperty(PrivateOfferVO.prototype, "descriptions", {
    get: function () {
      return this._descriptions;
    },
    enumerable: true,
    configurable: true
  });
  PrivateOfferVO.prototype.getPopupType = function () {
    var e = h.int(_.CastleDialogConsts.DIALOG_TYPE_PAYMENT_DEFAULT);
    if (this.getAdditionalComponentByName(c.ClientConstOffer.OFFER_ADDITIONAL_PRIME_SALE) || this.getAdditionalComponentByName(c.ClientConstOffer.OFFER_ADDITIONAL_PRIME_SALE_SKIP) || this.getAdditionalComponentByName(c.ClientConstOffer.OFFER_ADDITIONAL_PRIME_SALE_UPGRADE)) {
      e = h.int(_.CastleDialogConsts.DIALOG_TYPE_PAYMENT_PRIVATE_PRIME_SALE);
    } else {
      var t = p.castAs(this.getVisualComponentByName(c.ClientConstOffer.OFFER_VISUAL_QUEST_DIALOG), "OfferDescriptionVisualQuestDialog");
      if (t && t.dialogName == l.CastlePrimeDayPODialog.NAME) {
        e = h.int(_.CastleDialogConsts.DIALOG_TYPE_PAYMENT_PRIVATE_PRIME_DAY);
      }
    }
    return e;
  };
  PrivateOfferVO.prototype.traceOffer = function () {
    var e = this.getOfferDescriptionByIndex(PrivateOfferVO.DEFAULT_OFFER_DESCRIPTION_INDEX);
    u.debug("---- PrivateOffer ----");
    u.debug("OfferID: " + this._id);
    u.debug("EndtimeStamp: " + this._endTimestamp + " --> remaining: " + (this._endTimestamp - C.CachedTimer.getCachedTimer()) * g.ClientConstTime.MILLISEC_2_SEC);
    u.debug("OfferState: " + this._offerState.toString() + " - " + this._offerState.stateId);
    u.debug("OfferDescription --->");
    if (e != null) {
      for (var t = 0, i = Array.from(e.keys()); t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          var o = e.get(n);
          u.debug("   " + n + " --> " + o);
        }
      }
    }
    u.debug("---- PrivateOfferEnd ----");
  };
  PrivateOfferVO.prototype.toString = function () {
    var e = this.getOfferDescriptionByIndex(PrivateOfferVO.DEFAULT_OFFER_DESCRIPTION_INDEX);
    var t = "---- PrivateOffer ----";
    t += "\nOfferID: " + this._id;
    t += "\nEndtimeStamp: " + this._endTimestamp + " --> remaining: " + (this._endTimestamp - C.CachedTimer.getCachedTimer()) * g.ClientConstTime.MILLISEC_2_SEC;
    t += "\nOfferState: " + (this._offerState ? this._offerState.toString() : "") + " - " + (this._offerState ? this._offerState.stateId : "");
    if (this._questConditions) {
      t += "\nQuestConditions --->" + this._questConditions.toString();
    }
    u.debug("OfferDescription --->");
    if (e != null) {
      for (var i = 0, n = Array.from(e.keys()); i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          t += "\n   " + o + " --> " + e.get(o);
        }
      }
    }
    return t += "---- PrivateOfferEnd ----";
  };
  Object.defineProperty(PrivateOfferVO.prototype, "statusEndTimeStamp", {
    get: function () {
      return Math.max(0, (this._statusEndTimeStamp - C.CachedTimer.getCachedTimer()) * g.ClientConstTime.MILLISEC_2_SEC);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrivateOfferVO.prototype, "shouldRequestStatusCheck", {
    get: function () {
      return this._shouldRequestStatusCheck;
    },
    set: function (e) {
      this._shouldRequestStatusCheck = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrivateOfferVO.prototype, "isTimeDisplayedInPercentage", {
    get: function () {
      return this._isTimeDisplayedInPercentage;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrivateOfferVO.prototype, "endTimestamp", {
    get: function () {
      return this._endTimestamp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrivateOfferVO.prototype, "startTimestamp", {
    get: function () {
      return this._startTimestamp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrivateOfferVO.prototype, "isOneTimeOffer", {
    get: function () {
      return this._isOneTimeOffer;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrivateOfferVO.prototype, "isInvitationOffer", {
    get: function () {
      return this._isInvitationOffer;
    },
    enumerable: true,
    configurable: true
  });
  PrivateOfferVO.__initialize_static_members = function () {
    PrivateOfferVO.DEFAULT_OFFER_DESCRIPTION_INDEX = 0;
    PrivateOfferVO.ADDITIONAL_COMPONENTS = "additionalComponents";
  };
  return PrivateOfferVO;
}();
exports.PrivateOfferVO = n;
var o = require("./50.js");
var a = require("./48.js");
var s = require("./234.js");
var r = require("./128.js");
var l = require("./1081.js");
var c = require("./60.js");
var u = require("./2.js");
var d = require("./2.js");
var p = require("./1.js");
var h = require("./6.js");
var g = require("./28.js");
var C = require("./30.js");
var _ = require("./43.js");
var m = require("./4.js");
var f = require("./1949.js");
var O = require("./5306.js");
var E = require("./226.js");
n.__initialize_static_members();