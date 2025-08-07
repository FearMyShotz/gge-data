Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./26.js");
var s = require("./4.js");
var r = require("./174.js");
var l = require("./363.js");
var c = function (e) {
  function StatusIconSeasonLeagueEvent() {
    return e.call(this, "SeasonLeagueEventButton", null, l.AEventHubItemStatusIcon.PRIORITY_EVENT_SEASONLEAGUE) || this;
  }
  n.__extends(StatusIconSeasonLeagueEvent, e);
  StatusIconSeasonLeagueEvent.prototype.addEventListenerForVisibility = function () {
    s.CastleModel.specialEventData.addEventListener(a.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
    s.CastleModel.specialEventData.addEventListener(a.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onEventDataChanged));
    this.controller.addEventListener(r.SeasonLeagueEvent.ON_INFO_UPDATED, this.bindFunction(this.onSeasonInfoUpdated));
  };
  StatusIconSeasonLeagueEvent.prototype.removeEventListenerForVisibility = function () {
    s.CastleModel.specialEventData.removeEventListener(a.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
    s.CastleModel.specialEventData.removeEventListener(a.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onEventDataChanged));
    this.controller.removeEventListener(r.SeasonLeagueEvent.ON_INFO_UPDATED, this.bindFunction(this.onSeasonInfoUpdated));
  };
  StatusIconSeasonLeagueEvent.prototype.setVisibilityLoaded = function () {
    if (this.getEventVO()) {
      this.show();
      if (this._innerIconClip) {
        this.customizeInnerIconClip(this._innerIconClip);
      }
      if (s.CastleModel.seasonLeagueData.server.seasonStartDialogSeen) {
        if (!s.CastleModel.seasonLeagueData.server.seasonEventStartDialogSeen && s.CastleModel.seasonLeagueData.isAnySeasonEventActive()) {
          this.setTooltip("dialog_seasonLeague_HUD_newDivision_tt");
        } else {
          this.setTooltip("dialog_seasonLeague_HUD_name");
        }
      } else {
        this.setTooltip("dialog_seasonLeague_HUD_newSeason_tt");
      }
    } else {
      this.hide();
    }
  };
  StatusIconSeasonLeagueEvent.prototype.setLabelVisibility = function (e) {
    this.itxt_label.visible = e;
  };
  StatusIconSeasonLeagueEvent.prototype.getEventVO = function () {
    return s.CastleModel.specialEventData.getActiveEventByEventId(o.EventConst.EVENTTYPE_KINGDOMS_LEAGUE);
  };
  StatusIconSeasonLeagueEvent.prototype.onClick = function () {
    s.CastleModel.seasonLeagueData.openEventDialog();
  };
  StatusIconSeasonLeagueEvent.prototype.onSeasonInfoUpdated = function (e) {
    this.setVisibilityLoaded();
  };
  StatusIconSeasonLeagueEvent.prototype.onEventDataChanged = function (e) {
    this.setVisibility();
  };
  StatusIconSeasonLeagueEvent.prototype.onRemoveSpecialEvent = function (e) {
    if (!this.getEventVO()) {
      this.hide();
    }
  };
  Object.defineProperty(StatusIconSeasonLeagueEvent.prototype, "eventID", {
    get: function () {
      return o.EventConst.EVENTTYPE_KINGDOMS_LEAGUE;
    },
    enumerable: true,
    configurable: true
  });
  StatusIconSeasonLeagueEvent.prototype.customizeInnerIconClip = function (e) {
    if (e && e.isLoaded) {
      var t = s.CastleModel.seasonLeagueData.isAnySeasonEventActive();
      e.currentshownDisplayObject.mc_background.gotoAndStop(t ? 1 : 2);
    }
  };
  return StatusIconSeasonLeagueEvent;
}(l.AEventHubItemStatusIcon);
exports.StatusIconSeasonLeagueEvent = c;