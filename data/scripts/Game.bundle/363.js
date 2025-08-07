Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./134.js");
var a = require("./8.js");
var s = require("./4.js");
var r = require("./463.js");
var l = require("./21.js");
var c = require("./30.js");
var u = require("./28.js");
var d = require("./27.js");
var p = require("./3932.js");
var h = createjs.MouseEvent;
var g = function (e) {
  function AEventHubItemStatusIcon() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(AEventHubItemStatusIcon, e);
  AEventHubItemStatusIcon.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    a.ButtonHelper.initButtons([this.icon.btn_favourite], p.TwoStateButtonHover);
    this.icon.btn_favourite.visible = true;
    this.onEventBookmarkChanged(null);
  };
  AEventHubItemStatusIcon.prototype.addEventListenerForShowTime = function () {
    e.prototype.addEventListenerForShowTime.call(this);
    this.icon.addEventListener(h.CLICK, this.bindFunction(this.onMouseClick));
    this.controller.addEventListener(r.SettingsEvent.EVENT_BOOKMARK_CHANGED, this.bindFunction(this.onEventBookmarkChanged));
    s.CastleModel.timerData.addEventListener(l.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  AEventHubItemStatusIcon.prototype.removeEventListenerForShowTime = function () {
    e.prototype.removeEventListenerForShowTime.call(this);
    this.icon.removeEventListener(h.CLICK, this.bindFunction(this.onMouseClick));
    this.controller.removeEventListener(r.SettingsEvent.EVENT_BOOKMARK_CHANGED, this.bindFunction(this.onEventBookmarkChanged));
    s.CastleModel.timerData.removeEventListener(l.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  AEventHubItemStatusIcon.prototype.onTimerUpdate = function (e = null) {
    if (this.icon) {
      var t = (this.eventEndTimestamp - c.CachedTimer.getCachedTimer()) / u.ClientConstTime.SEC_2_MILLISEC;
      this.itxt_label.textContentVO.stringValue = d.CastleTimeStringHelper.getEventTimeString(t);
    }
  };
  AEventHubItemStatusIcon.prototype.onMouseClick = function (e) {
    if (e.target == this.icon.btn_favourite) {
      this.onBookmarkEvent();
    }
  };
  AEventHubItemStatusIcon.prototype.onEventBookmarkChanged = function (e) {
    if (this.isBookmarked) {
      a.ButtonHelper.getBasicButton(this.icon.btn_favourite).selected();
      this.icon.btn_favourite.toolTipText = "starred_tt";
    } else {
      a.ButtonHelper.getBasicButton(this.icon.btn_favourite).deselected();
      this.icon.btn_favourite.toolTipText = "notStarred_tt";
    }
  };
  AEventHubItemStatusIcon.prototype.onBookmarkEvent = function () {
    if (this.isBookmarked) {
      s.CastleModel.settingsData.deleteEventBookmark();
    } else {
      s.CastleModel.settingsData.setEventBookmark(this._innerIconClassName, this.eventEndTimestamp);
    }
  };
  Object.defineProperty(AEventHubItemStatusIcon.prototype, "isBookmarked", {
    get: function () {
      return s.CastleModel.settingsData.getEventBookmark().buttonName == this.innerIconClassName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AEventHubItemStatusIcon.prototype, "priority", {
    get: function () {
      if (this.isBookmarked) {
        return AEventHubItemStatusIcon.PRIORITY_EVENT_BOOKMARKED;
      } else if (this.specialPriority > -1) {
        return this.specialPriority;
      } else {
        return this._priority;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AEventHubItemStatusIcon.prototype, "eventEndTimestamp", {
    get: function () {
      var e = s.CastleModel.specialEventData.getActiveEventByEventId(this.eventID);
      if (e) {
        return e.endTimestamp;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AEventHubItemStatusIcon.prototype, "specialPriority", {
    get: function () {
      return -1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AEventHubItemStatusIcon.prototype, "eventID", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  AEventHubItemStatusIcon.PRIORITY_EVENT_BOOKMARKED = 2;
  AEventHubItemStatusIcon.PRIORITY_EVENT_HIGH1 = 3;
  AEventHubItemStatusIcon.PRIORITY_EVENT_HIGH2 = 4;
  AEventHubItemStatusIcon.PRIORITY_EVENT_TEMPSERVER = 12;
  AEventHubItemStatusIcon.PRIORITY_EVENT_BATTLEGROUNDS = 13;
  AEventHubItemStatusIcon.PRIORITY_EVENT_SEASONLEAGUE = 14;
  AEventHubItemStatusIcon.PRIORITY_EVENT_COLLECTOR = 15;
  AEventHubItemStatusIcon.PRIORITY_EVENT_BERIMOND = 16;
  AEventHubItemStatusIcon.PRIORITY_EVENT_SEASON = 17;
  AEventHubItemStatusIcon.PRIORITY_EVENT_LEAVESEASON = 18;
  return AEventHubItemStatusIcon;
}(o.AOfferHubItemStatusIcon);
exports.AEventHubItemStatusIcon = g;