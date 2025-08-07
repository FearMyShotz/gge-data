Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./1848.js");
var c = require("./91.js");
var u = require("./183.js");
var d = require("./4.js");
var p = require("./630.js");
var h = require("./363.js");
var g = function (e) {
  function StatusIconLeaveEvent() {
    return e.call(this, "Btn_LeaveEvent", null, h.AEventHubItemStatusIcon.PRIORITY_EVENT_LEAVESEASON) || this;
  }
  n.__extends(StatusIconLeaveEvent, e);
  StatusIconLeaveEvent.prototype.setVisibilityLoaded = function () {
    e.prototype.setVisibilityLoaded.call(this);
    if (d.CastleModel.specialEventData.activeSeasonVO && !!d.CastleModel.specialEventData.activeSeasonVO.treasureMapVO && d.CastleModel.specialEventData.activeSeasonVO.treasureMapVO.hasDefeatedEndNode && (this.layoutManager.currentState == m.CastleLayoutManager.STATE_SEASON_WORLDMAP || this.layoutManager.isInMyCastle && d.CastleModel.areaData.activeArea.isSeasonCamp)) {
      this.show();
    } else {
      this.hide();
    }
  };
  StatusIconLeaveEvent.prototype.addEventListenerForVisibility = function () {
    this.controller.addEventListener(c.CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE, this.bindFunction(this.onChangeLayoutState));
    d.CastleModel.treasureMapData.addEventListener(u.CastleTreasureMapEvent.TREASUREMAP_DATA_UPDATED, this.bindFunction(this.onTreasureMapChanged));
  };
  StatusIconLeaveEvent.prototype.onTreasureMapChanged = function (e) {
    this.setVisibility();
  };
  StatusIconLeaveEvent.prototype.onChangeLayoutState = function (e) {
    this.setVisibility();
  };
  StatusIconLeaveEvent.prototype.removeEventListenerForVisibility = function () {
    this.controller.removeEventListener(c.CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE, this.bindFunction(this.onChangeLayoutState));
    d.CastleModel.treasureMapData.removeEventListener(u.CastleTreasureMapEvent.TREASUREMAP_DATA_UPDATED, this.bindFunction(this.onTreasureMapChanged));
  };
  StatusIconLeaveEvent.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this);
    this.customizeInnerIconClip(this._innerIconClip);
    this.updateCache();
  };
  StatusIconLeaveEvent.prototype.onClick = function () {
    var e;
    var t;
    switch (d.CastleModel.specialEventData.activeSeasonVO.eventId) {
      case s.EventConst.EVENTTYPE_CRUSADE_THORNKING:
        e = d.CastleModel.specialEventData.activeSeasonVO.mapID == a.TreasureMapsConst.MAP_ID_THORNKING_EASY ? "dialog_yesNo_leaveNormalMode_thornking_copy" : "dialog_yesNo_leaveSeasonEventForever_copy";
        t = f.CastleLargeYesNoDialog;
        break;
      case s.EventConst.EVENTTYPE_CRUSADE_SEAQUEEN:
        e = "dialog_seasonEvent_" + d.CastleModel.specialEventData.activeSeasonVO.mapID + "_leave_copy";
        t = f.CastleLargeYesNoDialog;
        break;
      case s.EventConst.EVENTTYPE_CRUSADE_UNDERWORLD:
        e = d.CastleModel.specialEventData.activeSeasonVO.mapID == a.TreasureMapsConst.MAP_ID_UNDERWORLD_EASY ? "dialog_yesNo_leaveNormalMode_underworld_copy" : "dialog_yesNo_leaveSeasonEventForever_underworld_copy";
        t = O.CastleUnderworldFinishEasyModeDialog;
    }
    _.CastleDialogHandler.getInstance().registerDefaultDialogs(t, new p.CastleLargeYesNoDialogProperties(r.Localize.text("dialog_yesNo_leaveSeasonEventForever_title"), r.Localize.text(e), this.bindFunction(this.leaveSeasonForever)));
  };
  StatusIconLeaveEvent.prototype.leaveSeasonForever = function (e = null) {
    var t = this.activeSeasonVO.treasureMapVO;
    if (t) {
      d.CastleModel.smartfoxClient.sendCommandVO(new l.C2STreasureFinishMap(t.mapID));
      d.CastleModel.treasureMapData.clearTreasureMap(t.mapID);
    }
    o.CommandController.instance.executeCommand(C.IngameClientCommands.JOIN_MAIN_CASTLE_COMMAND);
  };
  StatusIconLeaveEvent.prototype.customizeInnerIconClip = function (e) {
    if (e && e.isLoaded && this.activeSeasonVO) {
      this.setTooltip("panel_actionSeason_leaveEvent");
      switch (this.activeSeasonVO.eventId) {
        case s.EventConst.EVENTTYPE_CRUSADE_THORNKING:
          e.gotoAndStop(1);
          break;
        case s.EventConst.EVENTTYPE_CRUSADE_SEAQUEEN:
          e.gotoAndStop(2);
          break;
        case s.EventConst.EVENTTYPE_CRUSADE_UNDERWORLD:
          e.gotoAndStop(3);
      }
    }
  };
  Object.defineProperty(StatusIconLeaveEvent.prototype, "activeSeasonVO", {
    get: function () {
      return d.CastleModel.specialEventData.activeSeasonVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(StatusIconLeaveEvent.prototype, "specialPriority", {
    get: function () {
      if (this.layoutManager.isInEventState) {
        return h.AEventHubItemStatusIcon.PRIORITY_EVENT_HIGH2;
      } else {
        return -1;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(StatusIconLeaveEvent.prototype, "eventID", {
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
  return StatusIconLeaveEvent;
}(h.AEventHubItemStatusIcon);
exports.StatusIconLeaveEvent = g;
var C = require("./29.js");
var _ = require("./9.js");
var m = require("./17.js");
var f = require("./449.js");
var O = require("./4031.js");