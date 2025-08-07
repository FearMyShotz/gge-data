Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./1.js");
var l = require("./6.js");
var c = require("./60.js");
var u = require("./5287.js");
var d = require("./5288.js");
var p = require("./5289.js");
var h = require("./5290.js");
var g = require("./1290.js");
var C = require("./26.js");
var _ = require("./15.js");
var m = require("./54.js");
var f = require("./4.js");
var O = require("./5291.js");
var E = require("./5292.js");
var y = require("./5293.js");
var b = require("./5294.js");
var D = require("./5295.js");
var I = require("./5296.js");
var T = require("./5297.js");
var v = require("./5298.js");
var S = require("./5299.js");
var A = require("./5300.js");
var L = require("./5301.js");
var P = require("./5302.js");
var M = require("./5303.js");
var R = require("./5304.js");
var V = require("./130.js");
var x = require("./226.js");
var w = function (e) {
  function BasicPrivateOfferData() {
    var t = this;
    t.offerMultiRewardChoice = new Map();
    CONSTRUCTOR_HACK;
    (t = e.call(this) || this).reset();
    return t;
  }
  n.__extends(BasicPrivateOfferData, e);
  BasicPrivateOfferData.prototype.reset = function () {
    if (this._activeOffers != null) {
      for (var e = 0, t = this._activeOffers; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          this.dispatchEvent(new V.PrivateOfferDataEvent(V.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, i));
          i.dispose();
        }
      }
    }
    this._activeOffers = [];
    this._hiddenEvents = [];
    this._failedVisualExecutions = [];
    this._offerDescriptions = new E.OfferDescriptionDictionary();
    this._offerQuestConditions = new M.OfferQuestConditionDictionary();
    this._offerDescriptionRewardParameter = new y.OfferDescriptionRewardDictionary();
    this._offerDescriptionVisualParameter = new L.OfferDescriptionVisualDictionary();
    this._offerDescriptionAdditionalParameter = new O.OfferDescriptionAdditionalDictionary();
    this.initOfferQuestConditions();
    this.initOfferDescriptions();
  };
  BasicPrivateOfferData.prototype.executeUpdate = function (e) {
    if (this._activeOffers != null) {
      for (var t = 0, i = this._activeOffers; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          if (!n.hasInfiniteTime && n.remainingSeconds <= 0 && n.secondsOverTime % 5 == 0) {
            this.sendCheckDuration(n.id);
          }
          if (n.statusEndTimeStamp <= 0 && n.shouldRequestStatusCheck) {
            this.sendCheckStatus(n.id);
            n.shouldRequestStatusCheck = false;
          }
        }
      }
    }
    var o = -1;
    if (this._failedVisualExecutions != null) {
      for (var a = 0, s = this._failedVisualExecutions; a < s.length; a++) {
        var r = s[a];
        if (r !== undefined) {
          if (r.tries > 5) {
            o = l.int(this._failedVisualExecutions.indexOf(r));
          } else if (r.visualParameter.execute(r.offerVO)) {
            this._failedVisualExecutions.splice(this._failedVisualExecutions.indexOf(r), 1);
          } else {
            r.tries = r.tries + 1;
          }
        }
      }
    }
    if (o > -1) {
      this._failedVisualExecutions.splice(o, 1);
    }
  };
  BasicPrivateOfferData.prototype.onKingdomSwitched = function () {
    if (this._activeOffers != null) {
      for (var e = 0, t = this._activeOffers; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          this.checkVisualExecution(i);
        }
      }
    }
  };
  BasicPrivateOfferData.prototype.sendCheckStatus = function (e) {
    f.CastleModel.smartfoxClient.sendCommandVO(new h.C2SOfferStatusCheck(e));
  };
  BasicPrivateOfferData.prototype.destroy = function () {
    if (this._activeOffers != null) {
      for (var t = 0, i = this._activeOffers; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          this.dispatchEvent(new V.PrivateOfferDataEvent(V.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, n));
          n.dispose();
        }
      }
    }
    this._offerDescriptions = null;
    this._offerQuestConditions = null;
    this._offerDescriptionRewardParameter = null;
    this._offerDescriptionVisualParameter = null;
    this._offerDescriptionAdditionalParameter = null;
    this._failedVisualExecutions = null;
    this._hiddenEvents = null;
    e.prototype.destroy.call(this);
  };
  BasicPrivateOfferData.prototype.initOfferDescriptions = function () {
    this.registerOfferDescription(new S.OfferDescriptionRewards());
    this.registerOfferDescription(new A.OfferDescriptionVisuals());
    this.registerOfferDescription(new b.OfferDescriptionAdditionals());
    this.registerOfferDescription(new I.OfferDescriptionCostC1());
    this.registerOfferDescription(new T.OfferDescriptionCostC2());
    this.registerOfferDescription(new D.OfferDescriptionAutoAccept());
    this.registerOfferDescription(new v.OfferDescriptionEuroAmount());
  };
  BasicPrivateOfferData.prototype.initOfferQuestConditions = function () {
    this.registerOfferQuestCondition(new R.OfferQuestConditionContainer());
  };
  BasicPrivateOfferData.prototype.registerOfferQuestCondition = function (e) {
    e.registerOfferCondition(this._offerQuestConditions);
  };
  BasicPrivateOfferData.prototype.registerOfferDescription = function (e) {
    e.registerOfferDescription(this._offerDescriptions);
  };
  BasicPrivateOfferData.prototype.registerOfferRewardParameter = function (e) {
    e.registerRewardParameter(this._offerDescriptionRewardParameter);
  };
  BasicPrivateOfferData.prototype.registerOfferVisualParameter = function (e) {
    e.registerVisualParameter(this._offerDescriptionVisualParameter);
  };
  BasicPrivateOfferData.prototype.registerOfferAdditionalParameter = function (e) {
    e.registerRewardParameter(this._offerDescriptionAdditionalParameter);
  };
  BasicPrivateOfferData.prototype.parse_POL = function (e) {
    for (var t = 0; t < e.length; ++t) {
      var i = this.getOfferById(e[t].OID);
      if (i) {
        if (i.offerState == x.PrivateOfferStateEnum.PRECONDITION) {
          i.loadFromParamObject(e[t]);
        }
        if (this.isPrimeDayPrivateOfferSmsAndInvalid(i)) {
          continue;
        }
        if (i.offerState === x.PrivateOfferStateEnum.getEnumByStateId(e[t].OS)) {
          i.updateDuration(e[t].RS == null ? -1 : parseInt(e[t].RS));
          i.parseQuestProgress(e[t].PC);
          this.dispatchEvent(new V.PrivateOfferDataEvent(V.PrivateOfferDataEvent.PRIVATE_OFFER_UPDATED, i));
        } else {
          i.changeState(x.PrivateOfferStateEnum.getEnumByStateId(e[t].OS));
          i.updateDuration(e[t].RS == null ? -1 : parseInt(e[t].RS));
          i.parseQuestProgress(e[t].PC);
          this.dispatchEvent(new V.PrivateOfferDataEvent(V.PrivateOfferDataEvent.PRIVATE_OFFER_STATE_CHANGED, i));
        }
      } else {
        i = this.createOfferFromParams(e[t]);
        if (this.isPrimeDayPrivateOfferSmsAndInvalid(i)) {
          continue;
        }
        this._activeOffers.push(i);
        this.updateHiddenEvents();
        this.dispatchEvent(new V.PrivateOfferDataEvent(V.PrivateOfferDataEvent.PRIVATE_OFFER_CREATED, i));
      }
      if (x.PrivateOfferStateEnum.isFinishedState(i.offerState)) {
        var n = l.int(this._activeOffers.indexOf(i));
        if (n > -1) {
          this._activeOffers.splice(n, 1);
          this.updateHiddenEvents();
          this.dispatchEvent(new V.PrivateOfferDataEvent(V.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, i));
        }
      }
      this.checkVisualExecution(i);
      var o = a.castAs(i.getAdditionalComponentByName(c.ClientConstOffer.OFFER_ADDITIONAL_AB_TEST), "OfferDescriptionAdditionalABTestDependency");
      if (o) {
        o.satisfyDependency();
        this._abTestRefreshEvent ||= new g.ABTest_Refresh_Event(g.ABTest_Refresh_Event.REFRESH_ABTESTS_EVENT, null);
        _.CastleBasicController.getInstance().dispatchEvent(this._abTestRefreshEvent);
      }
    }
  };
  BasicPrivateOfferData.prototype.isPrimeDayPrivateOfferSmsAndInvalid = function (e) {
    return e.id == 1805 && e.premiumSmsVO == null;
  };
  BasicPrivateOfferData.prototype.checkVisualExecution = function (e) {
    var t = a.castAs(e.getDescriptionByName(c.ClientConstOffer.VISUAL_COMPONENT_CONTAINER), "OfferDescriptionVisuals");
    if (t) {
      for (var i = 0, n = Array.from(t.visuals.values()); i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && o.toExecuteInState(e.offerState)) {
          if (!o.execute(e)) {
            this._failedVisualExecutions.push(new P.OfferFailedVisualExecution(1, e, o));
          }
        }
      }
    }
  };
  BasicPrivateOfferData.prototype.checkedBlockedEvents = function (e) {
    var t = a.castAs(e.getVisualComponentByName(c.ClientConstOffer.OFFER_VISUAL_HIDE_EVENT), "OfferDescriptionVisualHideEvent");
    if (t) {
      var i = t.eventIDs;
      var n = f.CastleModel.specialEventData.activeEvents;
      if (i != null) {
        for (var s = 0, r = i; s < r.length; s++) {
          var l = r[s];
          if (l !== undefined && n != null) {
            for (var u = 0, d = Array.from(n.values()); u < d.length; u++) {
              var p = d[u];
              if (p !== undefined && p && p.eventId == l) {
                if (p.openWithLogin) {
                  o.CommandController.instance.executeCommand(B.IngameClientCommands.OPEN_EVENT_DIALOG_COMMAND, [p, false]);
                }
                f.CastleModel.specialEventData.dispatchEvent(new C.CastleSpecialEventEvent(C.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, p));
                f.CastleModel.specialEventData.updateEvents();
              }
            }
          }
        }
      }
    }
  };
  BasicPrivateOfferData.prototype.parse_ODC = function (e) {
    if (e) {
      var t = this.getOfferById(parseInt(e.OID));
      if (t) {
        var i = e.RS == null ? -1 : parseInt(e.RS);
        t.updateDuration(i);
      }
    }
  };
  BasicPrivateOfferData.prototype.sendOfferQuestAccept = function (e, t) {
    f.CastleModel.smartfoxClient.sendCommandVO(new p.C2SOfferQuestAcceptVO(e, t));
  };
  BasicPrivateOfferData.prototype.sendOfferPay = function (e, t = 0) {
    f.CastleModel.smartfoxClient.sendCommandVO(new d.C2SOfferOfferPayVO(e, [t]));
    this.offerMultiRewardChoice.set(e, [t]);
  };
  BasicPrivateOfferData.prototype.sendOfferPayAll = function (e) {
    f.CastleModel.smartfoxClient.sendCommandVO(new d.C2SOfferOfferPayVO(e, BasicPrivateOfferData.BUY_ALL_IDS));
    this.offerMultiRewardChoice.set(e, BasicPrivateOfferData.BUY_ALL_IDS);
  };
  BasicPrivateOfferData.prototype.sendCheckDuration = function (e) {
    f.CastleModel.smartfoxClient.sendCommandVO(new u.C2SOfferDurationCheckVO(e));
  };
  BasicPrivateOfferData.prototype.createOfferDescriptionObject = function (e, t) {
    var i = this._offerDescriptions.getEntry(e);
    if (i) {
      var n = new i();
      n.parseFromObjectParam(t);
      return n;
    }
    return null;
  };
  BasicPrivateOfferData.prototype.createQuestCondition = function (e, t, i, n = null) {
    var o = this._offerQuestConditions.getEntry(e);
    if (o) {
      var a = new o();
      if (r.instanceOfClass(a, "OfferQuestConditionContainer")) {
        a.setLogic(n);
      }
      a.parseFromObjectParam(e, t, i);
      return a;
    }
    return null;
  };
  BasicPrivateOfferData.prototype.createOfferDescriptionRewardObject = function (e, t) {
    var i = this._offerDescriptionRewardParameter.getEntry(e);
    if (i) {
      var n = new i();
      n.parseFromObjectParam(t);
      return n;
    }
    return null;
  };
  BasicPrivateOfferData.prototype.createOfferDescriptionVisualObject = function (e, t) {
    var i = this._offerDescriptionVisualParameter.getEntry(e);
    if (!i) {
      throw new Error("Unknown visualComponent name \"" + e + "\"");
    }
    var n = new i();
    n.parseFromObjectParam(t);
    return n;
  };
  BasicPrivateOfferData.prototype.createOfferDescriptionAdditionalObject = function (e, t) {
    var i = this._offerDescriptionAdditionalParameter.getEntry(e);
    if (i) {
      var n = new i();
      n.parseFromObjectParam(t);
      return n;
    }
    return null;
  };
  BasicPrivateOfferData.prototype.createOfferFromParams = function (e) {
    var t = new F.PrivateOfferVO();
    t.loadFromParamObject(e);
    return t;
  };
  BasicPrivateOfferData.prototype.getOfferById = function (e) {
    if (this._activeOffers != null) {
      for (var t = 0, i = this._activeOffers; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && e == n.id) {
          return n;
        }
      }
    }
    return null;
  };
  BasicPrivateOfferData.prototype.getActivePrivateOffersByDescription = function (e) {
    var t = [];
    if (this._activeOffers != null) {
      for (var i = 0, n = this._activeOffers; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          if (o.getDescriptionByName(e) && o.offerState == x.PrivateOfferStateEnum.OFFER_PENDING) {
            t.push(o);
          }
        }
      }
    }
    return t;
  };
  BasicPrivateOfferData.prototype.getPrivateOffersWithVisualParamter = function (e) {
    var t = [];
    if (this._activeOffers != null) {
      for (var i = 0, n = this._activeOffers; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          var s = a.castAs(o.getDescriptionByName(c.ClientConstOffer.VISUAL_COMPONENT_CONTAINER), "OfferDescriptionVisuals");
          if (s && s.visuals.get(e) !== undefined) {
            t.push(o);
          }
        }
      }
    }
    return t;
  };
  BasicPrivateOfferData.prototype.updateHiddenEvents = function () {
    this._hiddenEvents = [];
    for (var e = this._activeOffers.length, t = 0; t < e; ++t) {
      var i = a.castAs(this._activeOffers[t].getVisualComponentByName(c.ClientConstOffer.OFFER_VISUAL_HIDE_EVENT), "OfferDescriptionVisualHideEvent");
      if (i) {
        var n = i.eventIDs;
        if (n != null) {
          for (var o = 0, s = n; o < s.length; o++) {
            var r = s[o];
            if (r !== undefined && this._hiddenEvents.indexOf(r) == -1) {
              this._hiddenEvents.push(r);
            }
          }
        }
      }
    }
  };
  BasicPrivateOfferData.prototype.getListOfHiddenEvents = function () {
    return this._hiddenEvents;
  };
  BasicPrivateOfferData.prototype.isHiddenEvent = function (e) {
    return this._hiddenEvents.indexOf(e) >= 0;
  };
  BasicPrivateOfferData.BUY_ALL_IDS = [0, 1, 2];
  return BasicPrivateOfferData;
}(m.CastleBasicData);
exports.BasicPrivateOfferData = w;
var B = require("./29.js");
var F = require("./5305.js");
s.classImplementsInterfaces(w, "IUpdatable");