Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./5.js");
var s = require("./26.js");
var r = require("./32.js");
var l = require("./4.js");
var c = require("./9.js");
var u = require("./461.js");
var d = require("./543.js");
var p = require("./363.js");
var h = function (e) {
  function StatusIconFactionEvent() {
    return e.call(this, "FactionEventButton", null, p.AEventHubItemStatusIcon.PRIORITY_EVENT_BERIMOND) || this;
  }
  n.__extends(StatusIconFactionEvent, e);
  StatusIconFactionEvent.prototype.setVisibilityLoaded = function () {
    var e = l.CastleModel.specialEventData.getActiveEventByEventId(a.EventConst.EVENTTYPE_FACTION);
    if (e && e.remainingEventTimeInSeconds > 5) {
      this.setTooltip("kingdomName_Faction");
      this.show();
    } else {
      this.hide();
    }
  };
  StatusIconFactionEvent.prototype.onClick = function () {
    var e = l.CastleModel.specialEventData.getActiveEventByEventId(a.EventConst.EVENTTYPE_FACTION);
    if (e) {
      var t = l.CastleModel.questData.getActiveStarterQuestByEventID(e.eventId);
      if (t && t.requiredQuestID <= 0 && t.isStarterQuest) {
        c.CastleDialogHandler.getInstance().registerDefaultDialogs(u.CastleStartQuestDialog, new d.CastleStartQuestDialogProperties(t));
      } else {
        o.CommandController.instance.executeCommand(g.IngameClientCommands.OPEN_FACTION_EVENT_MAIN_DIALOG);
      }
    } else {
      this.hide();
    }
  };
  StatusIconFactionEvent.prototype.addEventListenerForVisibility = function () {
    l.CastleModel.specialEventData.addEventListener(s.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onChangePosibilityToShowMe));
    l.CastleModel.specialEventData.addEventListener(s.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onChangePosibilityToShowMe));
    this.controller.addEventListener(r.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onChangePosibilityToShowMe));
  };
  StatusIconFactionEvent.prototype.removeEventListenerForVisibility = function () {
    l.CastleModel.specialEventData.removeEventListener(s.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onChangePosibilityToShowMe));
    l.CastleModel.specialEventData.removeEventListener(s.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onChangePosibilityToShowMe));
    this.controller.removeEventListener(r.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onChangePosibilityToShowMe));
  };
  StatusIconFactionEvent.prototype.onChangePosibilityToShowMe = function (e) {
    this.setVisibility();
  };
  Object.defineProperty(StatusIconFactionEvent.prototype, "specialPriority", {
    get: function () {
      if (l.CastleModel.kingdomData.activeKingdomID == a.FactionConst.KINGDOM_ID) {
        return p.AEventHubItemStatusIcon.PRIORITY_EVENT_HIGH1;
      } else if (l.CastleModel.kingdomData.activeKingdomID == C.WorldIsland.KINGDOM_ID) {
        return p.AEventHubItemStatusIcon.PRIORITY_EVENT_HIGH2;
      } else {
        return -1;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(StatusIconFactionEvent.prototype, "eventID", {
    get: function () {
      return a.EventConst.EVENTTYPE_FACTION;
    },
    enumerable: true,
    configurable: true
  });
  return StatusIconFactionEvent;
}(p.AEventHubItemStatusIcon);
exports.StatusIconFactionEvent = h;
var g = require("./29.js");
var C = require("./5.js");