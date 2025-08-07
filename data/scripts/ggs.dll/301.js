Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = function (e) {
  function FacebookUserDataTrackingEvent(t) {
    return e.call(this, t) || this;
  }
  i.__extends(FacebookUserDataTrackingEvent, e);
  FacebookUserDataTrackingEvent.prototype.getVars = function () {
    var e = {
      playerId: this._playerId,
      timestamp: this._timestamp,
      facebook_id: this._facebookId,
      is_account_verified: this._isAccountVerified,
      full_name: this._fullName
    };
    if (this._firstName) {
      e.first_name = this._firstName;
    }
    if (this._lastName) {
      e.last_name = this._lastName;
    }
    if (this._profileLink) {
      e.profile_link = this._profileLink;
    }
    if (this._gender) {
      e.gender_name = this._gender;
    }
    if (this._locale) {
      e.locale_code = this._locale;
    }
    if (this._ageRange) {
      e.facebook_age_range = this._ageRange;
    }
    if (!isNaN(this._utcOffset)) {
      e.utc_offset = this._utcOffset;
    }
    if (this._birthday) {
      e.birthday = this._birthday;
    }
    if (this._email) {
      e.email = this._email;
    }
    if (this._facebookBusinessToken) {
      e.facebook_business_token = this._facebookBusinessToken;
    }
    return e;
  };
  Object.defineProperty(FacebookUserDataTrackingEvent.prototype, "playerId", {
    set: function (e) {
      this._playerId = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FacebookUserDataTrackingEvent.prototype, "timestamp", {
    set: function (e) {
      this._timestamp = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FacebookUserDataTrackingEvent.prototype, "facebookId", {
    set: function (e) {
      this._facebookId = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FacebookUserDataTrackingEvent.prototype, "isAccountVerified", {
    set: function (e) {
      this._isAccountVerified = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FacebookUserDataTrackingEvent.prototype, "fullName", {
    set: function (e) {
      this._fullName = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FacebookUserDataTrackingEvent.prototype, "firstName", {
    set: function (e) {
      this._firstName = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FacebookUserDataTrackingEvent.prototype, "lastName", {
    set: function (e) {
      this._lastName = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FacebookUserDataTrackingEvent.prototype, "profileLink", {
    set: function (e) {
      this._profileLink = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FacebookUserDataTrackingEvent.prototype, "gender", {
    set: function (e) {
      this._gender = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FacebookUserDataTrackingEvent.prototype, "locale", {
    set: function (e) {
      this._locale = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FacebookUserDataTrackingEvent.prototype, "ageRange", {
    set: function (e) {
      this._ageRange = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FacebookUserDataTrackingEvent.prototype, "utcOffset", {
    set: function (e) {
      this._utcOffset = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FacebookUserDataTrackingEvent.prototype, "birthday", {
    set: function (e) {
      this._birthday = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FacebookUserDataTrackingEvent.prototype, "email", {
    set: function (e) {
      this._email = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FacebookUserDataTrackingEvent.prototype, "facebookBusinessToken", {
    set: function (e) {
      this._facebookBusinessToken = e;
    },
    enumerable: true,
    configurable: true
  });
  return FacebookUserDataTrackingEvent;
}(require("./13.js").BasicTrackingEvent);
exports.FacebookUserDataTrackingEvent = a;