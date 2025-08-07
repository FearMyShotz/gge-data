Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./26.js");
var l = require("./53.js");
var c = require("./4.js");
var u = require("./9.js");
var d = require("./461.js");
var p = require("./543.js");
var h = require("./363.js");
var g = require("./5.js");
var C = function (e) {
  function StatusIconAllianceBattleGroundEvent() {
    var t = e.call(this, StatusIconAllianceBattleGroundEvent.NAME, null, h.AEventHubItemStatusIcon.PRIORITY_EVENT_BATTLEGROUNDS) || this;
    t._tooltipId = "event_title_113_tt";
    return t;
  }
  n.__extends(StatusIconAllianceBattleGroundEvent, e);
  StatusIconAllianceBattleGroundEvent.prototype.addEventListenerForVisibility = function () {
    c.CastleModel.specialEventData.addEventListener(r.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.updateStatusIcon));
    c.CastleModel.specialEventData.addEventListener(r.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.updateStatusIcon));
  };
  StatusIconAllianceBattleGroundEvent.prototype.removeEventListenerForVisibility = function () {
    c.CastleModel.specialEventData.removeEventListener(r.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.updateStatusIcon));
    c.CastleModel.specialEventData.removeEventListener(r.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.updateStatusIcon));
  };
  StatusIconAllianceBattleGroundEvent.prototype.onClick = function () {
    if (l.ABGHelper.abgEvent) {
      var e = c.CastleModel.questData.getActiveStarterQuestByEventID(l.ABGHelper.abgEvent.eventId);
      if (e && e.requiredQuestID <= 0 && e.isStarterQuest) {
        u.CastleDialogHandler.getInstance().registerDefaultDialogs(d.CastleStartQuestDialog, new p.CastleStartQuestDialogProperties(e));
      } else {
        l.ABGHelper.abgEvent.openDialog();
      }
    }
  };
  StatusIconAllianceBattleGroundEvent.prototype.updateStatusIcon = function (e) {
    this.setVisibilityLoaded();
  };
  StatusIconAllianceBattleGroundEvent.prototype.setVisibilityLoaded = function () {
    if (this.icon.visible == 1 && this.isVisible == 0 && l.ABGHelper.isOnABGServer && s.ExternalInterface.available) {
      try {
        s.ExternalInterface.call("function refresh(){location.reload();}");
      } catch (e) {
        a.error("ExternalInterface call failed.");
      }
    }
    if (this.icon.visible != this.isVisible) {
      if (this.isVisible) {
        this.show();
      } else {
        this.hide();
      }
      if (this._changedVisibilityCallback != null) {
        this._changedVisibilityCallback();
      }
    }
    this.setTooltip(this._tooltipId);
  };
  Object.defineProperty(StatusIconAllianceBattleGroundEvent.prototype, "isVisible", {
    get: function () {
      return !!l.ABGHelper.abgEvent && !this.env.isClosedBeta && this.env.networkId == 1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(StatusIconAllianceBattleGroundEvent.prototype, "env", {
    get: function () {
      return o.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(StatusIconAllianceBattleGroundEvent.prototype, "specialPriority", {
    get: function () {
      if (l.ABGHelper.isOnABGServer) {
        return h.AEventHubItemStatusIcon.PRIORITY_EVENT_HIGH1;
      } else {
        return -1;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(StatusIconAllianceBattleGroundEvent.prototype, "eventID", {
    get: function () {
      return g.EventConst.EVENTTYPE_ALLIANCE_BATTLEGROUND;
    },
    enumerable: true,
    configurable: true
  });
  StatusIconAllianceBattleGroundEvent.NAME = "Btn_AllianceBattleground_Event";
  return StatusIconAllianceBattleGroundEvent;
}(h.AEventHubItemStatusIcon);
exports.StatusIconAllianceBattleGroundEvent = C;