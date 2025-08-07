Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function EventAnnouncementVO() {
    this._eventAnnouncementID = 0;
    this._eventID = 0;
    this._leaguetypeID = 0;
    this._messageRewardID = 0;
  }
  EventAnnouncementVO.prototype.parseXML = function (e) {
    this._eventAnnouncementID = parseInt(e.eventAnnouncementID || "");
    this._eventID = parseInt(e.eventID || "");
    this._leaguetypeID = parseInt(e.leaguetypeID || "");
    this._teaserRewardIDs = (e.teaserRewardIDs || "").toString();
    this._messageRewardID = parseInt(e.messageRewardID || "");
  };
  Object.defineProperty(EventAnnouncementVO.prototype, "eventAnnouncementID", {
    get: function () {
      return this._eventAnnouncementID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventAnnouncementVO.prototype, "eventID", {
    get: function () {
      return this._eventID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventAnnouncementVO.prototype, "leaguetypeID", {
    get: function () {
      return this._leaguetypeID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventAnnouncementVO.prototype, "teaserRewardIDs", {
    get: function () {
      return this._teaserRewardIDs;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventAnnouncementVO.prototype, "messageRewardID", {
    get: function () {
      return this._messageRewardID;
    },
    enumerable: true,
    configurable: true
  });
  return EventAnnouncementVO;
}();
exports.EventAnnouncementVO = n;