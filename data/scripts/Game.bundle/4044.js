Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./21.js");
var s = require("./26.js");
var r = require("./32.js");
var l = require("./4.js");
var c = require("./461.js");
var u = require("./543.js");
var d = require("./363.js");
var p = function (e) {
  function StatusIconSeasonEvent() {
    return e.call(this, "SeasonEventButton", null, d.AEventHubItemStatusIcon.PRIORITY_EVENT_SEASON) || this;
  }
  n.__extends(StatusIconSeasonEvent, e);
  StatusIconSeasonEvent.prototype.setVisibilityLoaded = function () {
    var e = l.CastleModel.specialEventData.activeSeasonVO;
    if (e) {
      if (e.requiresAdditionalEventLib && !e.isAdditionalLibLoaded) {
        l.CastleModel.specialEventData.addEventListener(s.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onChangePosibilityToShowMe));
        this.hide();
        return;
      }
      l.CastleModel.specialEventData.removeEventListener(s.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onChangePosibilityToShowMe));
      if (e.isActive && !e.finished) {
        if (this._innerIconClip.isLoaded) {
          this.customizeInnerIconClip(this._innerIconClip);
        }
        this.setTooltip("event_title_" + this.activeSeasonVO.eventId);
        this.onTimerUpdate(null);
        this.show();
      } else {
        this.hide();
      }
    } else {
      this.hide();
    }
  };
  StatusIconSeasonEvent.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.customizeInnerIconClip(this._innerIconClip);
  };
  StatusIconSeasonEvent.prototype.onClick = function () {
    var e = l.CastleModel.questData.getActiveStarterQuestByEventID(this.activeSeasonVO.eventId);
    if (e && e.requiredQuestID <= 0 && e.isStarterQuest) {
      h.CastleDialogHandler.getInstance().registerDefaultDialogs(c.CastleStartQuestDialog, new u.CastleStartQuestDialogProperties(e));
    } else {
      l.CastleModel.kingdomData.tempTargetSpaceID = this.activeSeasonVO.mapID;
      h.CastleDialogHandler.getInstance().registerDefaultDialogs(g.CastleHandleSeasonDialog, new C.CastleHandleSeasonDialogProperties(this.activeSeasonVO));
    }
  };
  StatusIconSeasonEvent.prototype.addEventListenerForVisibility = function () {
    l.CastleModel.specialEventData.addEventListener(s.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSeasonEventEvent));
    l.CastleModel.specialEventData.addEventListener(s.CastleSpecialEventEvent.REMOVE_PRIVATEEVENT, this.bindFunction(this.onRemoveSeasonEventEvent));
    l.CastleModel.specialEventData.addEventListener(s.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onChangePosibilityToShowMe));
    this.controller.addEventListener(r.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onChangePosibilityToShowMe));
    this.timerData.addEventListener(a.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconSeasonEvent.prototype.removeEventListenerForVisibility = function () {
    l.CastleModel.specialEventData.removeEventListener(s.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSeasonEventEvent));
    l.CastleModel.specialEventData.removeEventListener(s.CastleSpecialEventEvent.REMOVE_PRIVATEEVENT, this.bindFunction(this.onRemoveSeasonEventEvent));
    l.CastleModel.specialEventData.removeEventListener(s.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onChangePosibilityToShowMe));
    this.controller.removeEventListener(r.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onChangePosibilityToShowMe));
  };
  StatusIconSeasonEvent.prototype.onChangePosibilityToShowMe = function (e) {
    this.setVisibility();
  };
  StatusIconSeasonEvent.prototype.onRemoveSeasonEventEvent = function (e) {
    if (!this.activeSeasonVO || !!this.activeSeasonVO.finished) {
      this.hide();
    }
  };
  StatusIconSeasonEvent.prototype.customizeInnerIconClip = function (e) {
    if (e && e.isLoaded) {
      e.gotoAndStop(this.buttonFrame);
    }
  };
  Object.defineProperty(StatusIconSeasonEvent.prototype, "buttonFrame", {
    get: function () {
      if (this.activeSeasonVO) {
        switch (this.activeSeasonVO.eventId) {
          case o.EventConst.EVENTTYPE_CRUSADE_THORNKING:
            return 1;
          case o.EventConst.EVENTTYPE_CRUSADE_SEAQUEEN:
            return 2;
          case o.EventConst.EVENTTYPE_CRUSADE_UNDERWORLD:
            return 3;
        }
      }
      return 1;
    },
    enumerable: true,
    configurable: true
  });
  StatusIconSeasonEvent.prototype.hide = function () {
    if (this._innerIconClip) {
      this._innerIconClip.gotoAndStop(1);
    }
    e.prototype.hide.call(this);
  };
  Object.defineProperty(StatusIconSeasonEvent.prototype, "activeSeasonVO", {
    get: function () {
      return l.CastleModel.specialEventData.activeSeasonVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(StatusIconSeasonEvent.prototype, "specialPriority", {
    get: function () {
      if (this.layoutManager.isInEventState) {
        return d.AEventHubItemStatusIcon.PRIORITY_EVENT_HIGH1;
      } else {
        return -1;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(StatusIconSeasonEvent.prototype, "eventID", {
    get: function () {
      if (this.activeSeasonVO) {
        return this.activeSeasonVO.eventId;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  return StatusIconSeasonEvent;
}(d.AEventHubItemStatusIcon);
exports.StatusIconSeasonEvent = p;
var h = require("./9.js");
var g = require("./1097.js");
var C = require("./1099.js");