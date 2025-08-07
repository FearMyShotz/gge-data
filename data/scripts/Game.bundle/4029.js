Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./6.js");
var c = require("./26.js");
var u = require("./4.js");
var d = require("./1846.js");
var p = require("./109.js");
var h = function (e) {
  function StatusIconLastManStanding(t) {
    var i = this;
    i._factionID = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this, StatusIconLastManStanding.getIconName(t), StatusIconLastManStanding.getPriority(t)) || this)._factionID = t;
    i.setTooltip(i.getTooltip(t));
    return i;
  }
  n.__extends(StatusIconLastManStanding, e);
  StatusIconLastManStanding.getIconName = function (e) {
    if (e == r.FactionConst.BLUE_FACTION) {
      return "Btn_LMS_Blue";
    } else {
      return "Btn_LMS_Red";
    }
  };
  StatusIconLastManStanding.getPriority = function (e) {
    return l.int(p.ACastleStatusIcon.PRIORITY_MIDDLE + (e == r.FactionConst.BLUE_FACTION ? 1 : 2));
  };
  StatusIconLastManStanding.prototype.getTooltip = function (e) {
    if (e == r.FactionConst.BLUE_FACTION) {
      return "hud_lms_blue";
    } else {
      return "hud_lms_red";
    }
  };
  StatusIconLastManStanding.prototype.addEventListenerForVisibility = function () {
    u.CastleModel.specialEventData.addEventListener(c.CastleSpecialEventEvent.FACTION_EVENT_LAST_MAN_STANDING_UPDATE, this.bindFunction(this.onLMSUpdate));
  };
  StatusIconLastManStanding.prototype.removeEventListenerForVisibility = function () {
    u.CastleModel.specialEventData.removeEventListener(c.CastleSpecialEventEvent.FACTION_EVENT_LAST_MAN_STANDING_UPDATE, this.bindFunction(this.onLMSUpdate));
  };
  StatusIconLastManStanding.prototype.addEventListenerForShowTime = function () {
    u.CastleModel.specialEventData.addEventListener(c.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
  };
  StatusIconLastManStanding.prototype.removeEventListenerForShowTime = function () {
    u.CastleModel.specialEventData.removeEventListener(c.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
  };
  StatusIconLastManStanding.prototype.onClick = function () {
    var e = o.castAs(u.CastleModel.specialEventData.getActiveEventByEventId(s.EventConst.EVENTTYPE_FACTION), "FactionEventVO");
    if (e) {
      g.CastleDialogHandler.getInstance().registerDefaultDialogs(_.CastleFactionEventLMSDialog, new d.CastleFactionEventLMSDialogProperties(this._factionID, e.ownFaction));
    }
  };
  StatusIconLastManStanding.prototype.setVisibilityLoaded = function () {
    var e = o.castAs(u.CastleModel.specialEventData.getActiveEventByEventId(s.EventConst.EVENTTYPE_FACTION), "FactionEventVO");
    if (e && u.CastleModel.kingdomData.activeKingdomID == r.FactionConst.KINGDOM_ID && this.layoutManager.currentState != C.CastleLayoutManager.STATE_KINGDOMMAP) {
      if (this._factionID == r.FactionConst.BLUE_FACTION && e.lastManStandingBlueActive) {
        this.show();
      } else if (this._factionID == r.FactionConst.RED_FACTION && e.lastManStandingRedActive) {
        this.show();
      } else {
        this.hide();
      }
    } else {
      this.hide();
    }
  };
  StatusIconLastManStanding.prototype.onLMSUpdate = function (e) {
    if (a.instanceOfClass(e.specialEventVO, "FactionEventVO")) {
      this.setVisibility();
    }
  };
  StatusIconLastManStanding.prototype.onRemoveEvent = function (e) {
    if (a.instanceOfClass(e.specialEventVO, "FactionEventVO")) {
      this.setVisibility();
    }
  };
  return StatusIconLastManStanding;
}(p.ACastleStatusIcon);
exports.StatusIconLastManStanding = h;
var g = require("./9.js");
var C = require("./17.js");
var _ = require("./1847.js");