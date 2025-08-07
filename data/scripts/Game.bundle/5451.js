Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./4.js");
var c = require("./83.js");
var u = require("./99.js");
var d = function (e) {
  function MessageEventAnnouncementVO() {
    var t = this;
    t._eventId = 0;
    t._durationTS = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(MessageEventAnnouncementVO, e);
  Object.defineProperty(MessageEventAnnouncementVO.prototype, "dialogInfo", {
    get: function () {
      return new c.DialogInfoVO(null, null, p.IngameClientCommands.OPEN_EVENT_ANNOUNCEMENT_TEASER_DIALOG, this);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.AMessageVO.prototype, "dialogInfo").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  MessageEventAnnouncementVO.prototype.parseSubject = function () {
    return s.Localize.text("dialog_eventAnnouncement_title");
  };
  MessageEventAnnouncementVO.prototype.parseMessageHeader = function (e) {
    var t = e.split(a.MessageConst.SUBTYPE_META_DATA_SPLITTER);
    this._eventId = r.int(t[1]);
    this._durationTS = t[2];
  };
  MessageEventAnnouncementVO.prototype.parseSender = function () {
    return s.Localize.text("system");
  };
  Object.defineProperty(MessageEventAnnouncementVO.prototype, "additionalIconName", {
    get: function () {
      if (this._eventId == o.EventConst.EVENTTYPE_ALIEN_INVASION_ALLIANCE) {
        return "CastleMessageIconsAlien";
      } else {
        return "";
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.AMessageVO.prototype, "additionalIconName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageEventAnnouncementVO.prototype, "eventId", {
    get: function () {
      return this._eventId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageEventAnnouncementVO.prototype, "durationTS", {
    get: function () {
      return this._durationTS;
    },
    enumerable: true,
    configurable: true
  });
  MessageEventAnnouncementVO.prototype.canBeDeleted = function () {
    var e = l.CastleModel.eventAnnouncementData.isClaimed(this.durationTS);
    var t = l.CastleModel.eventAnnouncementData.isAvailable(this.durationTS);
    return e || !t;
  };
  MessageEventAnnouncementVO.prototype.canBeArchived = function () {
    return false;
  };
  return MessageEventAnnouncementVO;
}(u.AMessageVO);
exports.MessageEventAnnouncementVO = d;
var p = require("./29.js");