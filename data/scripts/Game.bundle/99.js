Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function AMessageVO() {
    this._messageID = -1;
    this._messageType = 0;
    this._playerID = 0;
    this.secondsSinceSent = NaN;
    this.arrivalTimestamp = NaN;
    this.read = false;
    this.archived = false;
    this.forwarded = false;
  }
  AMessageVO.prototype.loadFromParamArray = function (e, t) {
    this._messageID = e[0];
    this._messageType = r.int(e[1]);
    this._senderName = e[3];
    this._playerID = r.int(e[4]);
    this.secondsSinceSent = e[5];
    this.read = e[6] == 1;
    this.archived = e[7] == 1;
    this.forwarded = r.int(e[8]) == 1;
    this.arrivalTimestamp = t;
    var i = this.repairSpecialCharacters(e[2]);
    this.parseMessageHeader(i);
    this._subject = this.parseSubject();
    this._senderName = this.parseSender();
  };
  Object.defineProperty(AMessageVO.prototype, "isVisible", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  AMessageVO.prototype.parseMessageHeader = function (e) {
    throw new a.AbstractMethodError();
  };
  AMessageVO.prototype.parseSubject = function () {
    throw new a.AbstractMethodError();
  };
  AMessageVO.prototype.parseSender = function () {
    throw new a.AbstractMethodError();
  };
  Object.defineProperty(AMessageVO.prototype, "dialogInfo", {
    get: function () {
      throw new a.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AMessageVO.prototype, "additionalIconName", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  AMessageVO.prototype.repairSpecialCharacters = function (e) {
    var t = s.TextValide.parseChatJSONMessage(e);
    return t = (t = (t = (t = (t = t.replace(/&p.*\.\.\./g, "%...")).replace(/&q.*\.\.\./g, "\"...")).replace(/&1.*\.\.\./g, "'...")).replace(/<b.*\.\.\./g, "...")).replace(/%5.*\.\.\./g, "\\...");
  };
  AMessageVO.prototype.messageFitsFilter = function (e) {
    for (var t = 0; t < e.length; t++) {
      if (this._messageType == e[t] && !this.archived) {
        return true;
      }
    }
    return false;
  };
  AMessageVO.prototype.getCumulativeSecondsSinceSent = function () {
    return this.secondsSinceSent + (l.CachedTimer.getCachedTimer() - this.arrivalTimestamp) / 1000;
  };
  Object.defineProperty(AMessageVO.prototype, "messageID", {
    get: function () {
      return this._messageID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AMessageVO.prototype, "messageType", {
    get: function () {
      return this._messageType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AMessageVO.prototype, "playerID", {
    get: function () {
      return this._playerID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AMessageVO.prototype, "senderName", {
    get: function () {
      return this._senderName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AMessageVO.prototype, "subject", {
    get: function () {
      return this._subject;
    },
    enumerable: true,
    configurable: true
  });
  AMessageVO.prototype.canBeDeleted = function () {
    return true;
  };
  AMessageVO.prototype.canBeArchived = function () {
    return !this.archived;
  };
  Object.defineProperty(AMessageVO.prototype, "layoutManager", {
    get: function () {
      return o.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  AMessageVO.__initialize_static_members = function () {
    AMessageVO.FLAGNAME_ARCHIVED = "archived";
    AMessageVO.FLAGNAME_FORWARDED = "forwarded";
    AMessageVO.FLAGNAME_READ = "read";
  };
  AMessageVO.showOfferIDsInSubject = false;
  return AMessageVO;
}();
exports.AMessageVO = n;
var o = require("./17.js");
var a = require("./69.js");
var s = require("./2.js");
var r = require("./6.js");
var l = require("./30.js");
n.__initialize_static_members();