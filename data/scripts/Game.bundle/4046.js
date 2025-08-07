Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./26.js");
var c = require("./137.js");
var u = require("./4.js");
var d = require("./9.js");
var p = require("./461.js");
var h = require("./544.js");
var g = require("./363.js");
var C = function (e) {
  function StatusIconTemporaryServerEvent() {
    var t = e.call(this, StatusIconTemporaryServerEvent.NAME, null, g.AEventHubItemStatusIcon.PRIORITY_EVENT_TEMPSERVER) || this;
    t._tooltipId = "temp_server_name_tooltip";
    return t;
  }
  n.__extends(StatusIconTemporaryServerEvent, e);
  StatusIconTemporaryServerEvent.prototype.addEventListenerForVisibility = function () {
    u.CastleModel.specialEventData.addEventListener(l.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.updateStatusIcon));
    u.CastleModel.specialEventData.addEventListener(l.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.updateStatusIcon));
  };
  StatusIconTemporaryServerEvent.prototype.removeEventListenerForVisibility = function () {
    u.CastleModel.specialEventData.removeEventListener(l.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.updateStatusIcon));
    u.CastleModel.specialEventData.removeEventListener(l.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.updateStatusIcon));
  };
  StatusIconTemporaryServerEvent.prototype.onClick = function () {
    if (c.TempServerHelper.tmpServerEvent) {
      var e = u.CastleModel.questData.getActiveStarterQuestByEventID(c.TempServerHelper.tmpServerEvent.eventId);
      if (e && e.requiredQuestID <= 0 && e.isStarterQuest) {
        d.CastleDialogHandler.getInstance().registerDefaultDialogs(p.CastleStartQuestDialog, new h.CastleStartQuestDialogProperties(e));
      } else {
        c.TempServerHelper.tmpServerEvent.openDialog();
      }
    }
  };
  StatusIconTemporaryServerEvent.prototype.updateStatusIcon = function (e) {
    this.setVisibilityLoaded();
  };
  StatusIconTemporaryServerEvent.prototype.setVisibilityLoaded = function () {
    if (this.icon.visible == 1 && this.isVisible == 0 && this.env.isOnTemporaryServer && s.ExternalInterface.available) {
      try {
        s.ExternalInterface.call("function refresh(){location.reload();}");
      } catch (e) {
        a.error("ExternalInterface call failed.");
      }
    }
    if (this.icon.visible != this.isVisible) {
      if (this.isVisible) {
        this.customizeInnerIconClip(this._innerIconClip);
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
  Object.defineProperty(StatusIconTemporaryServerEvent.prototype, "isVisible", {
    get: function () {
      return !!c.TempServerHelper.tmpServerEvent && !this.env.isClosedBeta && this.env.networkId == 1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(StatusIconTemporaryServerEvent.prototype, "env", {
    get: function () {
      return o.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(StatusIconTemporaryServerEvent.prototype, "specialPriority", {
    get: function () {
      if (c.TempServerHelper.isOnTempServer) {
        return g.AEventHubItemStatusIcon.PRIORITY_EVENT_HIGH1;
      } else {
        return -1;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(StatusIconTemporaryServerEvent.prototype, "eventID", {
    get: function () {
      return r.EventConst.EVENTTYPE_TEMPSERVER;
    },
    enumerable: true,
    configurable: true
  });
  StatusIconTemporaryServerEvent.prototype.customizeInnerIconClip = function (e) {
    if (e && e.isLoaded && c.TempServerHelper.tmpServerEvent) {
      var t = c.TempServerHelper.getAssetFrame();
      e.currentshownDisplayObject.gotoAndStop(t);
    }
  };
  StatusIconTemporaryServerEvent.NAME = "Btn_TempServerEvent";
  return StatusIconTemporaryServerEvent;
}(g.AEventHubItemStatusIcon);
exports.StatusIconTemporaryServerEvent = C;