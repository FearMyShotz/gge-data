Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./6.js");
var r = require("./5389.js");
var l = require("./5390.js");
var c = require("./5391.js");
var u = require("./5392.js");
var d = require("./5393.js");
var p = require("./5394.js");
var h = require("./1952.js");
var g = require("./608.js");
var C = require("./5395.js");
var _ = require("./140.js");
var m = require("./30.js");
var f = require("./15.js");
var O = require("./54.js");
var E = require("./4.js");
var y = require("./5396.js");
var b = function (e) {
  function CastleMessageData(t) {
    var i = e.call(this) || this;
    i._battleLogs = [];
    i._ignoredPlayer = [];
    i._mostRecentPOMessages = new Map();
    i.parseRestrictions(t);
    return i;
  }
  n.__extends(CastleMessageData, e);
  CastleMessageData.prototype.reset = function () {
    this._incomingMails = [];
    this._battleLogs = [];
    this._ignoredPlayer = [];
    this._mostRecentPOMessages = new Map();
    this._restrictions.forEach(function (e) {
      e.currentPlayerAmount = 0;
    });
  };
  CastleMessageData.prototype.parseRestrictions = function (e) {
    this._restrictions = new Map();
    var t = e.messageRestrictions;
    if (t != null) {
      for (var i = 0, n = t; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          var a = new T.MessageRestrictionVO();
          a.fillFromParamXML(o);
          this._restrictions.set(a.id, a);
        }
      }
    }
  };
  CastleMessageData.prototype.getMessageRestrictionVOByMessageType = function (e) {
    if (this._restrictions != null) {
      for (var t = 0, i = Array.from(this._restrictions.values()); t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.messageType == e) {
          return n;
        }
      }
    }
    return null;
  };
  CastleMessageData.prototype.getBattleLogShort = function (e) {
    E.CastleModel.smartfoxClient.sendCommandVO(new u.C2SBattleLogShortVO(e, false));
  };
  CastleMessageData.prototype.getBattleLogMiddle = function (e) {
    E.CastleModel.smartfoxClient.sendCommandVO(new c.C2SBattleLogMiddleVO(e));
  };
  CastleMessageData.prototype.getBattleLogDetailed = function (e) {
    E.CastleModel.smartfoxClient.sendCommandVO(new l.C2SBattleLogDetailVO(e));
  };
  CastleMessageData.prototype.getBodyForTextMessage = function (e) {
    E.CastleModel.smartfoxClient.sendCommandVO(new g.C2SReadMessagesVO(e));
  };
  CastleMessageData.prototype.getLogByMessageId = function (e) {
    for (var t = 0; t < this._battleLogs.length; t++) {
      for (var i = 0; i < this._battleLogs[t].messageIDs.length; ++i) {
        if (this._battleLogs[t].messageIDs[i] == e) {
          this._battleLogs[t].currentMessageID = e;
          return this._battleLogs[t];
        }
      }
    }
    return null;
  };
  CastleMessageData.prototype.getBattleLogById = function (e) {
    for (var t = 0; t < this._battleLogs.length; t++) {
      if (this._battleLogs[t].logID == e) {
        return this._battleLogs[t];
      }
    }
    return null;
  };
  CastleMessageData.prototype.countMessagesByFilterAndFlags = function (e, t, i) {
    if (t.length != i.length) {
      throw new Error("CastleMessageData.countMessagesByFilterAndFlags says: amount of flagNames and flagValues must be the same :/");
    }
    var n = 0;
    var o = false;
    if (this._incomingMails != null) {
      for (var a = 0, s = this._incomingMails; a < s.length; a++) {
        var r = s[a];
        if (r !== undefined && (e.length == 0 || e.indexOf(r.messageType) != -1)) {
          o = true;
          for (var l = 0; l < t.length; l++) {
            if (r[t[l]] != i[l]) {
              o = false;
              break;
            }
          }
          if (o) {
            n++;
          }
        }
      }
    }
    return n;
  };
  CastleMessageData.prototype.countForwardedMessages = function (e) {
    return s.int(this.countMessagesByFilterAndFlags(e, [v.AMessageVO.FLAGNAME_FORWARDED, v.AMessageVO.FLAGNAME_ARCHIVED], [true, false]));
  };
  CastleMessageData.prototype.countUnforwardedMessages = function (e) {
    return s.int(this.countMessagesByFilterAndFlags(e, [v.AMessageVO.FLAGNAME_FORWARDED, v.AMessageVO.FLAGNAME_ARCHIVED], [false, false]));
  };
  CastleMessageData.prototype.countAllUnarchivedMessages = function (e) {
    return s.int(this.countMessagesByFilterAndFlags(e, [v.AMessageVO.FLAGNAME_ARCHIVED], [false]));
  };
  CastleMessageData.prototype.countUnreadUnarchivedMessages = function (e) {
    return s.int(this.countMessagesByFilterAndFlags(e, [v.AMessageVO.FLAGNAME_READ, v.AMessageVO.FLAGNAME_ARCHIVED], [false, false]));
  };
  CastleMessageData.prototype.countUnreadMessages = function (e) {
    return s.int(this.countMessagesByFilterAndFlags(e, [v.AMessageVO.FLAGNAME_READ], [false]));
  };
  CastleMessageData.prototype.countUnreadUnforwardedMessages = function (e) {
    return s.int(this.countMessagesByFilterAndFlags(e, [v.AMessageVO.FLAGNAME_FORWARDED, v.AMessageVO.FLAGNAME_READ, v.AMessageVO.FLAGNAME_ARCHIVED], [false, false, false]));
  };
  CastleMessageData.prototype.countUnreadForwardedMessages = function (e) {
    return s.int(this.countMessagesByFilterAndFlags(e, [v.AMessageVO.FLAGNAME_FORWARDED, v.AMessageVO.FLAGNAME_READ, v.AMessageVO.FLAGNAME_ARCHIVED], [true, false, false]));
  };
  CastleMessageData.prototype.countArchivedMessages = function () {
    return s.int(this.countMessagesByFilterAndFlags([], [v.AMessageVO.FLAGNAME_ARCHIVED], [true]));
  };
  CastleMessageData.prototype.getMessagesByPageAndFilterAndFlag = function (e, t, i = "", n = false) {
    var o = [];
    this._incomingMails.sort(this.bindFunction(this.sortMessages));
    for (var a = 0; a < this._incomingMails.length; a++) {
      if (!!this._incomingMails[a].messageFitsFilter(t) && (i == "" || this._incomingMails[a][i] == n)) {
        o.push(this._incomingMails[a]);
      }
    }
    if (e < 0) {
      return o;
    } else {
      return this.trimMessagesByPage(o, e);
    }
  };
  CastleMessageData.prototype.getMessagesByPageAndFilter = function (e, t) {
    return this.getMessagesByPageAndFilterAndFlag(e, t);
  };
  CastleMessageData.prototype.getForwardedMessagesByPageAndFilter = function (e, t) {
    return this.getMessagesByPageAndFilterAndFlag(e, t, "forwarded", true);
  };
  CastleMessageData.prototype.getUnforwardedMessagesByPageAndFilter = function (e, t) {
    return this.getMessagesByPageAndFilterAndFlag(e, t, "forwarded", false);
  };
  CastleMessageData.prototype.trimMessagesByPage = function (e, t) {
    var i = s.int(t * a.MessageConst.MESSAGES_PER_PAGE);
    if (i < e.length) {
      var n = s.int(Math.min(a.MessageConst.MESSAGES_PER_PAGE, e.length - i));
      return e = e.slice(i, i + n);
    }
    return null;
  };
  CastleMessageData.prototype.sortMessages = function (e, t) {
    if (e.getCumulativeSecondsSinceSent() < t.getCumulativeSecondsSinceSent()) {
      return -1;
    } else if (e.getCumulativeSecondsSinceSent() > t.getCumulativeSecondsSinceSent()) {
      return 1;
    } else if (e.messageID > t.messageID) {
      return -1;
    } else if (e.messageID < t.messageID) {
      return 1;
    } else {
      return 0;
    }
  };
  CastleMessageData.prototype.parseMessageInfoArray = function (e) {
    if (e) {
      this._incomingMails ||= [];
      var t = m.CachedTimer.getCachedTimer();
      for (var i = 0; i < e.length; i++) {
        this.parseMessageInfo(e[i], t);
      }
      this._incomingMails.sort(this.bindFunction(this.sortMessages));
      this.castleController.dispatchEvent(new _.CastleMessageDataEvent(_.CastleMessageDataEvent.UPDATE_MESSAGELIST));
    }
  };
  CastleMessageData.prototype.parse_SNE = function (e) {
    this.parseMessageInfoArray(e.MSG);
  };
  CastleMessageData.prototype.parseAMS = function (e) {
    var t = this.getMessageVOById(e.MID);
    t.archived = true;
    this.castleController.dispatchEvent(new _.CastleMessageDataEvent(_.CastleMessageDataEvent.MESSAGE_ARCHIVED, [t.messageID]));
    this.castleController.dispatchEvent(new _.CastleMessageDataEvent(_.CastleMessageDataEvent.UPDATE_MESSAGELIST));
  };
  CastleMessageData.prototype.parse_MCD = function (e) {
    var t = this;
    if (e && e.MTC) {
      e.MTC.forEach(function (e) {
        var i = t.getMessageRestrictionVOByMessageType(e[0]);
        if (i) {
          i.currentPlayerAmount = e[1];
        }
      });
      this.castleController.dispatchEvent(new _.CastleMessageDataEvent(_.CastleMessageDataEvent.MESSAGE_RESTRICTIONS_UPDATED));
    }
  };
  Object.defineProperty(CastleMessageData.prototype, "minLevelForSendingP2PMessages", {
    get: function () {
      if (this.getMessageRestrictionVOByMessageType(a.MessageConst.MESSAGE_TYPE_USER_OUT)) {
        return this.getMessageRestrictionVOByMessageType(a.MessageConst.MESSAGE_TYPE_USER_OUT).minLevel;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleMessageData.prototype.getArchivedMessages = function (e) {
    var t = [];
    this._incomingMails.sort(this.bindFunction(this.sortMessages));
    for (var i = 0; i < this._incomingMails.length; i++) {
      if (this._incomingMails[i].archived) {
        t.push(this._incomingMails[i]);
      }
    }
    if (e < 0) {
      return t;
    } else {
      return this.trimMessagesByPage(t, e);
    }
  };
  CastleMessageData.prototype.isArchiveFull = function () {
    return this.countMessagesByFilterAndFlags([], [v.AMessageVO.FLAGNAME_ARCHIVED], [true]) >= a.MessageConst.MAX_MAILBOX_ARCHIVE_SIZE;
  };
  CastleMessageData.prototype.parseMessageInfo = function (e, t) {
    var i = D.CastleMessageFactory.parseMessage(e, t);
    for (var n = 0; n < this._incomingMails.length; n++) {
      if (i.messageID == this._incomingMails[n].messageID) {
        this._incomingMails[n] = i;
        return i;
      }
    }
    if (i.isVisible) {
      this._incomingMails.push(i);
    }
    return i;
  };
  CastleMessageData.prototype.getMessageVOById = function (e) {
    if (!this._incomingMails) {
      return null;
    }
    for (var t = 0; t < this._incomingMails.length; t++) {
      if (this._incomingMails[t].messageID == e) {
        return this._incomingMails[t];
      }
    }
    return null;
  };
  CastleMessageData.prototype.sendNewMessage = function (e, t, i) {
    E.CastleModel.smartfoxClient.sendCommandVO(new C.C2SSendMessageVO(e, t, i));
  };
  CastleMessageData.prototype.deleteMessage = function (e) {
    if (e) {
      E.CastleModel.smartfoxClient.sendCommandVO(new d.C2SDeleteMessageVO(e.messageID));
      this.deleteMessageFromClientList(e);
    }
  };
  CastleMessageData.prototype.archiveMessage = function (e) {
    E.CastleModel.smartfoxClient.sendCommandVO(new r.C2SArchiveMessageVO(e.messageID));
  };
  CastleMessageData.prototype.deleteMessageFromClientList = function (e) {
    if (e) {
      for (var t = 0; t < this._incomingMails.length; t++) {
        if (this._incomingMails[t].messageID == e.messageID) {
          this._incomingMails.splice(t, 1);
          this.castleController.dispatchEvent(new _.CastleMessageDataEvent(_.CastleMessageDataEvent.UPDATE_MESSAGELIST));
          return;
        }
      }
    }
  };
  CastleMessageData.prototype.parseBattleLogShort = function (e) {
    if (e) {
      this._battleLogs ||= [];
      if (this.hasAlreadyLogId(e.LID)) {
        var t = this.getBattleLogById(e.LID);
        t.messageIDs.push(e.MID);
        t.addMetadataFromMessage(e.MID, e.MS);
      } else {
        var i = new I.BattleLogVO();
        i.fillFromParamObject(e);
        this._battleLogs.push(i);
      }
    }
  };
  CastleMessageData.prototype.hasAlreadyLogId = function (e) {
    for (var t = 0; t < this._battleLogs.length; t++) {
      if (this._battleLogs[t].logID == e) {
        return true;
      }
    }
    return false;
  };
  CastleMessageData.prototype.clearBattleLogs = function () {
    this._battleLogs = [];
  };
  CastleMessageData.prototype.parseBattleLogMiddle = function (e) {
    if (e) {
      var t = this.getBattleLogById(e.LID);
      if (t) {
        t.parseMiddle(e);
      }
    }
  };
  CastleMessageData.prototype.parseBattleLogDetail = function (e) {
    if (e) {
      var t = this.getBattleLogById(e.LID);
      if (t) {
        t.parseDetails(e);
      }
    }
  };
  CastleMessageData.prototype.ignorePlayer = function (e, t) {
    E.CastleModel.smartfoxClient.sendCommandVO(new h.C2SIgnorePlayerVO(e, t));
  };
  CastleMessageData.prototype.getIgnoredPlayer = function () {
    E.CastleModel.smartfoxClient.sendCommandVO(new p.C2SGetIgnoredPlayersVO());
  };
  Object.defineProperty(CastleMessageData.prototype, "ignoredPlayer", {
    get: function () {
      return this._ignoredPlayer;
    },
    enumerable: true,
    configurable: true
  });
  CastleMessageData.prototype.parse_IPS = function (e) {
    this._ignoredPlayer = [];
    for (var t = 0; t < e.length; ++t) {
      var i = new y.IgnoredPlayerVO();
      i.playerID = s.int(e[t].PID);
      i.playerName = e[t].N;
      this._ignoredPlayer.push(i);
    }
    this.dispatchEvent(new _.CastleMessageDataEvent(_.CastleMessageDataEvent.GET_IGNORED_PLAYER));
  };
  Object.defineProperty(CastleMessageData.prototype, "castleController", {
    get: function () {
      return f.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMessageData.prototype, "incomingMails", {
    get: function () {
      return this._incomingMails;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMessageData.prototype, "mostRecentPOMessages", {
    get: function () {
      return this._mostRecentPOMessages;
    },
    enumerable: true,
    configurable: true
  });
  return CastleMessageData;
}(O.CastleBasicData);
exports.CastleMessageData = b;
var D = require("./5397.js");
var I = require("./5554.js");
var T = require("./5562.js");
var v = require("./99.js");
o.classImplementsInterfaces(b, "IUpdatable");