Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./113.js");
var s = require("./162.js");
var r = require("./482.js");
var o = require("./55.js");
var l = function (e) {
  function AccountCookie(t) {
    var n = e.call(this, "ac") || this;
    n._accountId = null;
    n._isNewAccount = false;
    n._journeyHash = t;
    return n;
  }
  i.__extends(AccountCookie, e);
  AccountCookie.prototype.readLocalStorage = function () {
    if (this.hasAttribute(AccountCookie.ATTRIBUTE_ACCOUNT_ID)) {
      this._accountId = this.getAttributeAsString(AccountCookie.ATTRIBUTE_ACCOUNT_ID);
      if (this.stringIsValid(this._journeyHash) && this._accountId !== this._journeyHash) {
        this._accountId = this._journeyHash;
        this.setAttribute(AccountCookie.ATTRIBUTE_ACCOUNT_ID, this._accountId, false);
      }
    } else {
      this._isNewAccount = true;
      if (this.stringIsValid(this._journeyHash)) {
        this._accountId = this._journeyHash;
      } else {
        this._accountId = Date.now().toString() + (Math.random() * 999999).toFixed();
      }
      this.setAttribute(AccountCookie.ATTRIBUTE_ACCOUNT_ID, this._accountId, false);
    }
    this._accountId = this.getAttributeAsString(AccountCookie.ATTRIBUTE_ACCOUNT_ID);
    this.writeLocalStorage();
  };
  AccountCookie.prototype.stringIsValid = function (e) {
    return e !== null && e !== undefined && e.length > 0;
  };
  AccountCookie.prototype.newSession = function () {
    if (this._isNewAccount) {
      this._sessionType = s.SessionTypes.FIRST_SESSION;
      this._sessionCount = 1;
    } else {
      this._sessionType = s.SessionTypes.REGULAR_SESSION;
      if (this.hasAttribute(AccountCookie.ATTRIBUTE_SESSION_COUNT)) {
        this._sessionCount = this.getAttributeAsInt(AccountCookie.ATTRIBUTE_SESSION_COUNT) + 1;
      } else {
        this._sessionCount = 2;
      }
    }
    this.setAttribute(AccountCookie.ATTRIBUTE_SESSION_TYPE, this._sessionType, false);
    this.setAttribute(AccountCookie.ATTRIBUTE_SESSION_COUNT, this._sessionCount, false);
    this.writeLocalStorage();
  };
  AccountCookie.prototype.updateSessionWithNewData = function (e, t) {
    if (!this._isNewAccount) {
      if (t !== null && t !== undefined && t !== e) {
        this._sessionType = s.SessionTypes.FIRST_SESSION_AFTER_UPDATE;
        this.setAttribute(AccountCookie.ATTRIBUTE_SESSION_TYPE, this._sessionType, false);
      }
    }
  };
  Object.defineProperty(AccountCookie.prototype, "accountId", {
    get: function () {
      return this._accountId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AccountCookie.prototype, "isNewAccount", {
    get: function () {
      return this._isNewAccount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AccountCookie.prototype, "cdn", {
    get: function () {
      if (this.hasAttribute(AccountCookie.ATTRIBUTE_CDN)) {
        return this.getAttributeAsNumber(AccountCookie.ATTRIBUTE_CDN);
      } else {
        return o.CDN.None;
      }
    },
    set: function (e) {
      this.setAttribute(AccountCookie.ATTRIBUTE_CDN, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AccountCookie.prototype, "ageGateData", {
    get: function () {
      if (this.hasAttribute(AccountCookie.ATTRIBUTE_AGE_GATE_DATA)) {
        return r.StringUtils.decrypt(this.getAttributeAsString(AccountCookie.ATTRIBUTE_AGE_GATE_DATA));
      } else {
        return null;
      }
    },
    set: function (e) {
      this.setAttribute(AccountCookie.ATTRIBUTE_AGE_GATE_DATA, r.StringUtils.encrypt(e));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AccountCookie.prototype, "sessionType", {
    get: function () {
      return this.getAttributeAsNumber(AccountCookie.ATTRIBUTE_SESSION_TYPE);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AccountCookie.prototype, "sessionCount", {
    get: function () {
      return this.getAttributeAsNumber(AccountCookie.ATTRIBUTE_SESSION_COUNT);
    },
    enumerable: true,
    configurable: true
  });
  AccountCookie.NAME = "GGSAccount";
  AccountCookie.ATTRIBUTE_ACCOUNT_ID = "accountId";
  AccountCookie.ATTRIBUTE_AGE_GATE_DATA = "agd";
  AccountCookie.ATTRIBUTE_CDN = "cdn";
  AccountCookie.ATTRIBUTE_SESSION_TYPE = "sessionType";
  AccountCookie.ATTRIBUTE_SESSION_COUNT = "sessionCount";
  AccountCookie.ATTRIBUTES = [AccountCookie.ATTRIBUTE_ACCOUNT_ID, AccountCookie.ATTRIBUTE_AGE_GATE_DATA, AccountCookie.ATTRIBUTE_CDN, AccountCookie.ATTRIBUTE_SESSION_TYPE, AccountCookie.ATTRIBUTE_SESSION_COUNT];
  return AccountCookie;
}(a.AbstractCookie);
exports.AccountCookie = l;