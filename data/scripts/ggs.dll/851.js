Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./22.js");
var s = require("./45.js");
var r = require("./461.js");
var o = require("./462.js");
var l = require("./463.js");
var u = require("./464.js");
var c = require("./465.js");
var _ = require("./466.js");
var d = require("./469.js");
var m = require("./473.js");
var h = require("./460.js");
var p = require("./12.js");
var g = require("./37.js");
var E = function (e) {
  function BasicPrivateOfferData() {
    var t = e.call(this) || this;
    t._activeOffers = [];
    t._failedVisualExecutions = [];
    t.initOfferFactory();
    return t;
  }
  i.__extends(BasicPrivateOfferData, e);
  BasicPrivateOfferData.prototype.initOfferFactory = function () {
    this._offerFactory = new m.BasicPrivateOfferVOFactory(this);
    this._offerDescriptionFactory = new d.BasicOfferDescriptionFactory(this);
    this._offerQuestConditionFactory = new _.BasicOfferQuestConditionFactory(this);
    this._offerRewardFactory = new c.BasicOfferRewardFactory(this);
    this._offerDescriptionVisualFactory = new u.BasicOfferDescriptionVisualFactory(this);
  };
  BasicPrivateOfferData.prototype.executeUpdate = function (e) {
    if (this._activeOffers.length > 0) {
      for (var t = 0, n = this._activeOffers; t < n.length; t++) {
        var i = n[t];
        if (!i.hasInfiniteTime && !i.hasRequestedNewTime && i.remainingSeconds <= 0 && i.secondsOverTime % 5 == 0) {
          this.sendCheckDuration(i.id);
          i.hasRequestedNewTime = true;
        }
      }
    }
    if (this._failedVisualExecutions.length > 0) {
      var a = -1;
      for (var s = 0, r = this._failedVisualExecutions; s < r.length; s++) {
        var o = r[s];
        if (o.tries > 5) {
          a = this._failedVisualExecutions.indexOf(o);
        } else if (o.visualParameter.execute(o.offerVO)) {
          this._failedVisualExecutions.splice(this._failedVisualExecutions.indexOf(o), 1);
        } else {
          o.tries = o.tries + 1;
        }
      }
      if (a > -1) {
        this._failedVisualExecutions.splice(a, 1);
      }
    }
  };
  BasicPrivateOfferData.prototype.onStartCycleReady = function () {
    if (this._activeOffers.length > 0) {
      var e = function (e) {
        var t = e.getDescriptionByName(a.Constants_Offer.VISUAL_COMPONENT_CONTAINER);
        if (t) {
          t.visuals.forEach(function (t, n, i) {
            if (t instanceof l.OfferDescriptionVisualIsoObject) {
              g.info("got a " + t.name + " here");
            } else if (t instanceof o.OfferDescriptionVisualQuestAcceptDialog && t.autoShow) {
              t.execute(e);
            }
          });
        }
      };
      for (var t = 0, n = this._activeOffers; t < n.length; t++) {
        e(n[t]);
      }
    }
  };
  BasicPrivateOfferData.prototype.destroy = function () {
    for (var t = 0, n = this._activeOffers; t < n.length; t++) {
      var i = n[t];
      this.dispatchEvent(new r.PrivateOfferDataEvent(r.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, i));
      i.dispose();
    }
    this._failedVisualExecutions = null;
    this._offerFactory.dispose();
    this._offerDescriptionFactory.dispose();
    this._offerQuestConditionFactory.dispose();
    this._offerRewardFactory.dispose();
    this._offerDescriptionVisualFactory.dispose();
    e.prototype.destroy.call(this);
  };
  BasicPrivateOfferData.prototype.offerFinished = function (e, t) {
    var n = this.getOfferById(e);
    if (n && (n.changeState(s.PrivateOfferStateEnum.getEnumByServerEventID(t)), this.checkVisualExecution(n), s.PrivateOfferStateEnum.isFinishedState(n.offerState))) {
      var i = this._activeOffers.indexOf(n);
      if (i > -1) {
        this.offerFinishedHook(n);
        this._activeOffers.splice(i, 1);
        this.dispatchEvent(new r.PrivateOfferDataEvent(r.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, n));
      }
    }
  };
  BasicPrivateOfferData.prototype.offerFinishedHook = function (e) {};
  BasicPrivateOfferData.prototype.checkVisualExecution = function (e) {
    var t = e.getDescriptionByName(a.Constants_Offer.VISUAL_COMPONENT_CONTAINER);
    if (t) {
      t.visuals.forEach(function (t, n, i) {
        if (t.toExecuteInState(e.offerState) && t.execute(e)) {
          p.CommandController.instance.executeCommand(t.getCommandName(), e);
        }
      });
    }
  };
  BasicPrivateOfferData.prototype.sendOfferQuestAccept = function (e, t) {};
  BasicPrivateOfferData.prototype.sendOfferPay = function (e, t) {};
  BasicPrivateOfferData.prototype.sendCheckDuration = function (e) {};
  BasicPrivateOfferData.prototype.createOfferDescriptionObject = function (e, t) {
    if (e) {
      return this._offerDescriptionFactory.createOfferDescriptionObject(e, t);
    } else {
      return null;
    }
  };
  BasicPrivateOfferData.prototype.createQuestCondition = function (e, t) {
    if (e) {
      return this._offerQuestConditionFactory.createOfferQuestCondition(e, t);
    } else {
      return null;
    }
  };
  BasicPrivateOfferData.prototype.createOfferDescriptionRewardObject = function (e, t) {
    return this._offerRewardFactory.createOfferRewardObject(e, t);
  };
  BasicPrivateOfferData.prototype.createOfferDescriptionVisualObject = function (e, t) {
    return this._offerDescriptionVisualFactory.createOfferDescriptionVisualObject(e, t);
  };
  BasicPrivateOfferData.prototype.getOfferById = function (e) {
    for (var t = 0, n = this._activeOffers; t < n.length; t++) {
      var i = n[t];
      if (e == i.id) {
        return i;
      }
    }
    return null;
  };
  BasicPrivateOfferData.prototype.getPrivateOffersWithVisualParamter = function (e) {
    var t = [];
    for (var n = 0, i = this._activeOffers; n < i.length; n++) {
      var s = i[n];
      var r = s.getDescriptionByName(a.Constants_Offer.VISUAL_COMPONENT_CONTAINER);
      if (r && r.visuals[e] !== undefined) {
        t.push(s);
      }
    }
    return t;
  };
  BasicPrivateOfferData.prototype.traceAllDefinitions = function () {};
  BasicPrivateOfferData.prototype.createQuestConditionContainer = function (e, t = null) {
    var n = this._offerQuestConditionFactory.createOfferQuestContainer(e);
    if (n) {
      n.setLogic(t);
    }
    return n;
  };
  return BasicPrivateOfferData;
}(h.BasicData);
exports.BasicPrivateOfferData = E;