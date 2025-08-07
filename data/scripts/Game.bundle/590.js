Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./5.js");
var c = require("./6.js");
var u = require("./28.js");
var d = require("./255.js");
var p = require("./30.js");
var h = require("./54.js");
var g = require("./2151.js");
var C = require("./2152.js");
var _ = require("./2153.js");
var m = function (e) {
  function CastleGlobalOfferData() {
    var t = this;
    t._activeGlobalOffers = 0;
    t._activePrivateOffers = 0;
    t._activeIngameDiscounts = 0;
    t._highestActiveIngameDiscount = 0;
    t._webShopOffersAmount = 0;
    t._showPrivatePrimeTimeOffersOnLogin = true;
    CONSTRUCTOR_HACK;
    (t = e.call(this) || this).reset();
    return t;
  }
  n.__extends(CastleGlobalOfferData, e);
  CastleGlobalOfferData.prototype.reset = function () {
    this._offerVOs = [];
    this._activeGlobalOffers = 0;
    this._activePrivateOffers = 0;
    this._activeIngameDiscounts = 0;
    this._highestActiveIngameDiscount = 0;
    this._webShopOffersAmount = 0;
    this._showPrivatePrimeTimeOffersOnLogin = true;
  };
  CastleGlobalOfferData.prototype.executeUpdate = function (e) {
    if (this._offerVOs.length > 0 && this._offerVOs[0].isOfferExpired(e)) {
      this.removeOffer(this._offerVOs[0]);
    }
  };
  CastleGlobalOfferData.prototype.addOffer = function (e) {
    if (!this.hasGlobalSpecialOfferRunning(e)) {
      if (this.isPrimeTimeOffer(e)) {
        if (this.isPrioritisedPrimeTime(e)) {
          this.showOfferDialog(e);
        }
      } else {
        this.showOfferDialog(e);
      }
      if (e.offerScope === g.GlobalOfferScopeEnum.GLOBAL) {
        ++this._activeGlobalOffers;
      }
      if (e.offerScope === g.GlobalOfferScopeEnum.PRIVATE) {
        ++this._activePrivateOffers;
      }
      if (this.isOfferWithIngameDiscount(e)) {
        ++this._activeIngameDiscounts;
        this.calculateHighestIngameDiscount();
      }
      this._offerVOs.push(e);
      a.VectorSortHelper.sort(this._offerVOs, this.bindFunction(this.sortOnTime));
      o.info("Offer Added!");
      this.traceAllOffers();
      this.dispatchEvent(new d.CastleOfferDataEvent(d.CastleOfferDataEvent.OFFER_ADDED, e));
    }
  };
  CastleGlobalOfferData.prototype.showOfferDialog = function (e) {
    if (e.hasPopup) {
      s.CommandController.instance.executeCommand(f.IngameClientCommands.OPEN_OFFER_DIALOG_COMMAND, e);
    }
  };
  CastleGlobalOfferData.prototype.isPrimeTimeOffer = function (e) {
    return e.offerScope == g.GlobalOfferScopeEnum.GLOBAL && e.offerType == CastleGlobalOfferData.EVENT_SPECIALOFFER || e.offerScope == g.GlobalOfferScopeEnum.PRIVATE && e.offerType == CastleGlobalOfferData.PRIME_TIME;
  };
  CastleGlobalOfferData.prototype.isPrioritisedPrimeTime = function (e) {
    var t;
    if (e.offerScope == g.GlobalOfferScopeEnum.PRIVATE) {
      for (var i = 0, n = this._offerVOs; i < n.length; i++) {
        if ((t = n[i]).offerScope == g.GlobalOfferScopeEnum.GLOBAL && t.offerType == CastleGlobalOfferData.EVENT_SPECIALOFFER) {
          return e.cashDiscount > t.goldDiscount;
        }
      }
      return true;
    }
    if (e.offerScope == g.GlobalOfferScopeEnum.GLOBAL) {
      for (var o = 0, a = this._offerVOs; o < a.length; o++) {
        if ((t = a[o]).offerScope == g.GlobalOfferScopeEnum.PRIVATE && t.offerType == CastleGlobalOfferData.PRIME_TIME) {
          return e.goldDiscount > t.cashDiscount;
        }
      }
      return true;
    }
    return true;
  };
  CastleGlobalOfferData.prototype.removeOffer = function (e) {
    if (e) {
      this._offerVOs.splice(this._offerVOs.indexOf(e), 1);
      a.VectorSortHelper.sort(this._offerVOs, this.bindFunction(this.sortOnTime));
      if (e.offerScope === g.GlobalOfferScopeEnum.GLOBAL) {
        this._activeGlobalOffers = c.int(Math.max(this._activeGlobalOffers - 1, 0));
      }
      if (e.offerScope === g.GlobalOfferScopeEnum.PRIVATE) {
        this._activePrivateOffers = c.int(Math.max(this._activePrivateOffers - 1, 0));
      }
      if (this.isOfferWithIngameDiscount(e)) {
        this._activeIngameDiscounts = c.int(Math.max(this._activeIngameDiscounts - 1, 0));
        this.calculateHighestIngameDiscount();
      }
      o.info("OFFER REMOVED");
      this.traceAllOffers();
      this.dispatchEvent(new d.CastleOfferDataEvent(d.CastleOfferDataEvent.OFFER_ENDED, e));
      if (e.offerScope == g.GlobalOfferScopeEnum.GLOBAL && e.offerType == CastleGlobalOfferData.EVENT_SPECIALOFFER && this.hasGlobalSpecialOfferRunning(e)) {
        this._offerVOs.splice(this._offerVOs.indexOf(e), 1);
        a.VectorSortHelper.sort(this._offerVOs, this.bindFunction(this.sortOnTime));
      }
    }
  };
  CastleGlobalOfferData.prototype.hasGlobalSpecialOfferRunning = function (e) {
    if (this._offerVOs != null) {
      for (var t = 0, i = this._offerVOs; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n && n.remainingDuration(Date.now()) > 0 && n.offerScope == g.GlobalOfferScopeEnum.GLOBAL && e.offerScope == g.GlobalOfferScopeEnum.GLOBAL && n.offerType == CastleGlobalOfferData.EVENT_SPECIALOFFER && e.offerType == CastleGlobalOfferData.EVENT_SPECIALOFFER) {
          return true;
        }
      }
    }
    return false;
  };
  CastleGlobalOfferData.prototype.calculateHighestIngameDiscount = function () {
    this._highestActiveIngameDiscount = 0;
    if (this._offerVOs != null) {
      for (var e = 0, t = this._offerVOs; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined && this.isOfferWithIngameDiscount(i)) {
          if (this.isGlobalOfferActive && i.offerScope === g.GlobalOfferScopeEnum.PRIVATE || this.isPrivateOfferActive && i.offerScope === g.GlobalOfferScopeEnum.GLOBAL) {
            continue;
          }
          this._highestActiveIngameDiscount = c.int(Math.max(this._highestActiveIngameDiscount, i.cashDiscount));
        }
      }
    }
  };
  CastleGlobalOfferData.prototype.isOfferWithIngameDiscount = function (e) {
    return e.offerType == CastleGlobalOfferData.EVENT_SPECIALINGAMEOFFER;
  };
  CastleGlobalOfferData.prototype.isOfferActive = function (e) {
    if (this._offerVOs != null) {
      for (var t = 0, i = this._offerVOs; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.offerType == e) {
          return true;
        }
      }
    }
    return false;
  };
  CastleGlobalOfferData.prototype.getActiveOffer = function (e) {
    if (this._offerVOs != null) {
      for (var t = 0, i = this._offerVOs; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.offerType == e && (!n.isOfferExpired(p.CachedTimer.getCachedTimer()) || n.isTimeless)) {
          return n;
        }
      }
    }
    return null;
  };
  CastleGlobalOfferData.prototype.isAnyIngameDiscountActive = function () {
    return this._activeIngameDiscounts > 0;
  };
  CastleGlobalOfferData.prototype.sortOnTime = function (e, t) {
    if (e.offerEndTimeStamp > t.offerEndTimeStamp) {
      return 1;
    } else {
      return 0;
    }
  };
  CastleGlobalOfferData.prototype.isAnyOfferActive = function () {
    return this._offerVOs.length > 0;
  };
  Object.defineProperty(CastleGlobalOfferData.prototype, "isGlobalOfferActive", {
    get: function () {
      return this._activeGlobalOffers > 0;
    },
    enumerable: true,
    configurable: true
  });
  CastleGlobalOfferData.prototype.getActivePrivatePrimeTimeOffer = function () {
    var e = this.getActiveOffer(CastleGlobalOfferData.PRIME_TIME);
    if (e && this.isPrioritisedPrimeTime(e)) {
      return e;
    } else {
      return null;
    }
  };
  CastleGlobalOfferData.prototype.getActiveGlobalPrimeTimeOffer = function () {
    var e = this.getActiveOffer(CastleGlobalOfferData.EVENT_SPECIALOFFER);
    if (e && this.isPrioritisedPrimeTime(e)) {
      return e;
    } else {
      return null;
    }
  };
  Object.defineProperty(CastleGlobalOfferData.prototype, "isPrivateOfferActive", {
    get: function () {
      return this._activePrivateOffers > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGlobalOfferData.prototype, "highestActiveIngameDiscount", {
    get: function () {
      return this._highestActiveIngameDiscount;
    },
    enumerable: true,
    configurable: true
  });
  CastleGlobalOfferData.prototype.parse_POE = function (e) {
    switch (parseInt(e.type)) {
      case CastleGlobalOfferData.PRIME_EVENT_TYPE_PPT:
        this.parse_PPT(e);
        break;
      case CastleGlobalOfferData.PRIME_EVENT_TYPE_SOE:
        this.parse_SOE(e);
        break;
      case CastleGlobalOfferData.PRIME_EVENT_TYPE_SIO:
        this.parse_SIO(e);
    }
  };
  CastleGlobalOfferData.prototype.parse_SOE = function (e) {
    if (e) {
      var t = parseInt(e.bonusPremium);
      var i = parseInt(e.bonusStandard);
      var n = parseInt(e.remainingTime);
      var o = e.isTimeless == 1;
      var a = e.duration ? parseInt(e.duration) : n;
      if (n <= 0) {
        this.removeOffer(this.getActiveOffer(CastleGlobalOfferData.EVENT_SPECIALOFFER));
      } else {
        this.addOffer(new C.GlobalOfferVO(CastleGlobalOfferData.EVENT_SPECIALOFFER, p.CachedTimer.getCachedTimer() + n * u.ClientConstTime.SEC_2_MILLISEC, g.GlobalOfferScopeEnum.GLOBAL, new _.GlobalOfferVOAdditionalParams(i, t), true, o, p.CachedTimer.getCachedTimer() - (a - n) * u.ClientConstTime.SEC_2_MILLISEC));
      }
    }
  };
  CastleGlobalOfferData.prototype.parse_PPT = function (e) {
    if (e) {
      var t = parseInt(e.bonusStandard);
      var i = parseInt(e.bonusPremium);
      var n = parseInt(e.typeId);
      var o = parseInt(e.remainingTime);
      var a = e.isTimeless == CastleGlobalOfferData.TEXT_TRUE;
      var s = parseInt(e.duration);
      if (!(o <= 0)) {
        var r = p.CachedTimer.getCachedTimer() + o * u.ClientConstTime.SEC_2_MILLISEC;
        this.addOffer(new C.GlobalOfferVO(CastleGlobalOfferData.PRIME_TIME, r, g.GlobalOfferScopeEnum.PRIVATE, new _.GlobalOfferVOAdditionalParams(i, t, n), this._showPrivatePrimeTimeOffersOnLogin, a, r - s * u.ClientConstTime.SEC_2_MILLISEC));
        this._showPrivatePrimeTimeOffersOnLogin &&= false;
      }
    }
  };
  CastleGlobalOfferData.prototype.parse_SIO = function (e) {
    if (e) {
      var t = parseInt(e.bonusPremium);
      var i = parseInt(e.remainingTime);
      this.addOffer(new C.GlobalOfferVO(CastleGlobalOfferData.EVENT_SPECIALINGAMEOFFER, p.CachedTimer.getCachedTimer() + i * u.ClientConstTime.SEC_2_MILLISEC, g.GlobalOfferScopeEnum.GLOBAL, new _.GlobalOfferVOAdditionalParams(t), false));
    }
  };
  CastleGlobalOfferData.prototype.parse_DIO = function (e) {
    if (e) {
      this.addOffer(new C.GlobalOfferVO(e.T, p.CachedTimer.getCachedTimer() + parseInt(e.RT) * u.ClientConstTime.SEC_2_MILLISEC, g.GlobalOfferScopeEnum.PRIVATE, new _.GlobalOfferVOAdditionalParams(parseInt(e.DP)), false));
    }
  };
  CastleGlobalOfferData.prototype.activateDecoOffer = function () {
    this.addOffer(new C.GlobalOfferVO(CastleGlobalOfferData.DECORATION_OFFER, p.CachedTimer.getCachedTimer() + u.ClientConstTime.SEC_2_MILLISEC * 30, g.GlobalOfferScopeEnum.RETENTION, null, false));
  };
  CastleGlobalOfferData.prototype.activateBrandOffer = function () {
    this.addOffer(new C.GlobalOfferVO(CastleGlobalOfferData.BRAND_OFFER, p.CachedTimer.getCachedTimer() + u.ClientConstTime.SEC_2_MILLISEC * 30, g.GlobalOfferScopeEnum.RETENTION, null, false));
  };
  CastleGlobalOfferData.prototype.activateTimeOffer = function () {
    this.addOffer(new C.GlobalOfferVO(CastleGlobalOfferData.TIME_CHALLENGE_OFFER, p.CachedTimer.getCachedTimer() + u.ClientConstTime.SEC_2_MILLISEC * 30, g.GlobalOfferScopeEnum.RETENTION, null, false));
  };
  CastleGlobalOfferData.prototype.activatePrimeTime = function () {
    this.addOffer(new C.GlobalOfferVO(CastleGlobalOfferData.EVENT_SPECIALOFFER, p.CachedTimer.getCachedTimer() + u.ClientConstTime.SEC_2_MILLISEC * 30, g.GlobalOfferScopeEnum.GLOBAL, new _.GlobalOfferVOAdditionalParams(0, 200), false));
  };
  CastleGlobalOfferData.prototype.activatePrimeAction = function () {
    this.addOffer(new C.GlobalOfferVO(CastleGlobalOfferData.EVENT_SPECIALINGAMEOFFER, p.CachedTimer.getCachedTimer() + u.ClientConstTime.SEC_2_MILLISEC * 25, g.GlobalOfferScopeEnum.GLOBAL, new _.GlobalOfferVOAdditionalParams(75), false));
  };
  CastleGlobalOfferData.prototype.traceAllOffers = function () {
    o.info("-------- Active Offers --------");
    if (this._offerVOs != null) {
      for (var e = 0, t = this._offerVOs; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          o.info("Offer: type:" + i.offerType + " remaining: " + i.remainingDuration(p.CachedTimer.getCachedTimer()));
        }
      }
    }
    o.info("Highest Ingame Discount: " + this._highestActiveIngameDiscount);
  };
  Object.defineProperty(CastleGlobalOfferData.prototype, "webShopOffersAmount", {
    get: function () {
      return this._webShopOffersAmount;
    },
    set: function (e) {
      this._webShopOffersAmount = e;
    },
    enumerable: true,
    configurable: true
  });
  CastleGlobalOfferData.__initialize_static_members = function () {
    CastleGlobalOfferData.EVENT_SPECIALOFFER = l.PremiumConst.EVENT_SPECIALOFFER;
    CastleGlobalOfferData.EVENT_SPECIALINGAMEOFFER = l.PremiumConst.EVENT_SPECIALINGAMEOFFER;
    CastleGlobalOfferData.EVENT_REGISTERBONUS = l.PremiumConst.EVENT_REGISTERBONUS;
  };
  CastleGlobalOfferData.PRIME_EVENT_TYPE_PPT = 0;
  CastleGlobalOfferData.PRIME_EVENT_TYPE_SOE = 1;
  CastleGlobalOfferData.PRIME_EVENT_TYPE_SIO = 2;
  CastleGlobalOfferData.TIME_CHALLENGE_OFFER = 10;
  CastleGlobalOfferData.DECORATION_OFFER = 11;
  CastleGlobalOfferData.BRAND_OFFER = 12;
  CastleGlobalOfferData.PRIME_TIME = 13;
  CastleGlobalOfferData.SKIP_DISCOUNT = 14;
  CastleGlobalOfferData.TEXT_TRUE = "true";
  return CastleGlobalOfferData;
}(h.CastleBasicData);
exports.CastleGlobalOfferData = m;
r.classImplementsInterfaces(m, "IUpdatable", "ICastleBasicData");
var f = require("./29.js");
m.__initialize_static_members();