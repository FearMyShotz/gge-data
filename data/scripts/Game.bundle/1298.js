Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./28.js");
var l = require("./30.js");
var c = require("./72.js");
var u = require("./15.js");
var d = require("./37.js");
var p = require("./4.js");
var h = function (e) {
  function PlayerEmailData() {
    var t = e.call(this) || this;
    t._newEmail = "";
    t._pending_mail_change_status = 0;
    t._mail_change_timestamp = 0;
    t._hasNewsletterSubscription = false;
    t._gotNewsletterReward = false;
    t._remainingTimeTillAutomaticChangeTimeStamp = -1;
    return t;
  }
  n.__extends(PlayerEmailData, e);
  PlayerEmailData.prototype.parse_MNS = function (e) {
    this._newEmail = e.PMA;
    this._pending_mail_change_status = e.PMCS;
    this._mail_change_timestamp = parseFloat(e.T);
    this._hasNewsletterSubscription = e.SFN == 1;
    this._gotNewsletterReward = e.CGNR == 0;
    u.CastleBasicController.getInstance().dispatchEvent(new d.CastleServerMessageArrivedEvent(d.CastleServerMessageArrivedEvent.MNS_ARRIVED, [this._hasNewsletterSubscription, this._gotNewsletterReward]));
  };
  PlayerEmailData.prototype.setTimestamp = function (e) {
    this._mail_change_timestamp = e;
  };
  Object.defineProperty(PlayerEmailData.prototype, "isMailState_Unregistered", {
    get: function () {
      return p.CastleModel.userData.email.length <= 0 && !p.CastleModel.userData.hasValidatedEmail;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PlayerEmailData.prototype, "isMailState_Unverified", {
    get: function () {
      return p.CastleModel.userData.email.length > 0 && !p.CastleModel.userData.hasValidatedEmail;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PlayerEmailData.prototype, "isMailState_Verified", {
    get: function () {
      return p.CastleModel.userData.email.length > 0 && p.CastleModel.userData.hasValidatedEmail;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PlayerEmailData.prototype, "isMailState_MailChangePending_ToOldMail", {
    get: function () {
      return this.isMailState_Verified && this._newEmail != "" && this._pending_mail_change_status == a.PlayerConst.MAIL_CHANGE_FIRST_EXPIRATION_TIME_STATE;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PlayerEmailData.prototype, "isMailState_MailChangePending_ToNewMail", {
    get: function () {
      return this.isMailState_Verified && this._newEmail != "" && this._pending_mail_change_status == a.PlayerConst.MAIL_CHANGE_SECOND_EXPIRATION_TIME_STATE;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PlayerEmailData.prototype, "isMailState_MailChangePending", {
    get: function () {
      return this.isMailState_MailChangePending_ToNewMail || this.isMailState_MailChangePending_ToOldMail;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PlayerEmailData.prototype, "newEmail", {
    get: function () {
      return this._newEmail;
    },
    set: function (e) {
      this._newEmail = e;
    },
    enumerable: true,
    configurable: true
  });
  PlayerEmailData.prototype.getDateForAutoEmailChange = function () {
    return s.Localize.datetime(new Date(this._mail_change_timestamp * r.ClientConstTime.SEC_2_MILLISEC), s.DateTimeStyle.LONG, s.DateTimeStyle.NONE);
  };
  PlayerEmailData.prototype.getRemainingTimeForAutoChange = function () {
    return o.TimeStringHelper.getShortTimeString(this._mail_change_timestamp * r.ClientConstTime.SEC_2_MILLISEC - l.CachedTimer.getCachedTimer());
  };
  Object.defineProperty(PlayerEmailData.prototype, "pending_mail_change_status", {
    get: function () {
      return this._pending_mail_change_status;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PlayerEmailData.prototype, "mail_change_timestamp", {
    get: function () {
      return this._mail_change_timestamp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PlayerEmailData.prototype, "api_unavailable_in_process", {
    get: function () {
      return this._pending_mail_change_status == a.PlayerConst.MAIL_CHANGE_STARTED || this._pending_mail_change_status == a.PlayerConst.MAIL_CHANGE_CANCEL_STARTED;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PlayerEmailData.prototype, "hasNewsletterSubscription", {
    get: function () {
      return this._hasNewsletterSubscription;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PlayerEmailData.prototype, "gotNewsletterReward", {
    get: function () {
      return this._gotNewsletterReward;
    },
    enumerable: true,
    configurable: true
  });
  PlayerEmailData.prototype.getDateForAutomaticEmailChange = function () {
    return s.Localize.datetime(new Date(Date.now() + this._remainingTimeTillAutomaticChangeTimeStamp * r.ClientConstTime.SEC_2_MILLISEC), s.DateTimeStyle.LONG, s.DateTimeStyle.NONE);
  };
  PlayerEmailData.EMAIL_MAX_LENGTH = 254;
  return PlayerEmailData;
}(c.CastleEventDispatcher);
exports.PlayerEmailData = h;