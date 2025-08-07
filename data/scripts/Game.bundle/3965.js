Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./3.js");
var c = require("./26.js");
var u = require("./4.js");
var d = require("./670.js");
var p = require("./141.js");
var h = function (e) {
  function StatusIconFactionProtection() {
    var t = e.call(this, "Btn_FactionProtection", "txt_label", new l.TextVO("")) || this;
    t.setTooltip("panel_attackWarning_factionProtection");
    return t;
  }
  n.__extends(StatusIconFactionProtection, e);
  StatusIconFactionProtection.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    this.itxt_label.autoFitToBounds = true;
  };
  StatusIconFactionProtection.prototype.setVisibilityLoaded = function () {
    var e = !this.layoutManager.isInSpectatedCastle && !this.layoutManager.isInMyOccupiedCastle;
    var t = a.castAs(u.CastleModel.specialEventData.getActiveEventByEventId(s.EventConst.EVENTTYPE_FACTION), "FactionEventVO");
    if (t && u.CastleModel.kingdomData.activeKingdomID == r.FactionConst.KINGDOM_ID && e && t.factionProtectionStatus == g.FactionEventVO.FACTION_PROTECTION_STATUS_ACTIVE && t.remainingFactionProtectionTimeInSeconds > 0) {
      this.show();
    } else {
      this.hide();
    }
  };
  StatusIconFactionProtection.prototype.onClick = function () {
    e.prototype.onClick.call(this);
    if (this.layoutManager.currentState != _.CastleLayoutManager.STATE_WORLDMAP && u.CastleModel.kingdomData.activeKingdomID != r.FactionConst.KINGDOM_ID) {
      C.CastleDialogHandler.getInstance().registerDefaultDialogs(m.CastleManagementDialog, new d.CastleManagementDialogProperties(u.CastleModel.areaData.activeAreaInfo));
    }
  };
  StatusIconFactionProtection.prototype.addEventListenerForVisibility = function () {
    e.prototype.addEventListenerForVisibility.call(this);
    u.CastleModel.specialEventData.addEventListener(c.CastleSpecialEventEvent.FACTION_EVENT_FACTION_PROTECTION_UPDATED, this.bindFunction(this.onFactionProtectionUpdated));
  };
  StatusIconFactionProtection.prototype.removeEventListenerForVisibility = function () {
    e.prototype.removeEventListenerForVisibility.call(this);
    u.CastleModel.specialEventData.removeEventListener(c.CastleSpecialEventEvent.FACTION_EVENT_FACTION_PROTECTION_UPDATED, this.bindFunction(this.onFactionProtectionUpdated));
  };
  StatusIconFactionProtection.prototype.onFactionProtectionUpdated = function (e) {
    this.setVisibility();
  };
  StatusIconFactionProtection.prototype.addEventListenerForShowTime = function () {
    e.prototype.addEventListenerForShowTime.call(this);
    u.CastleModel.specialEventData.addEventListener(c.CastleSpecialEventEvent.FACTION_EVENT_FACTION_PROTECTION_TIMEUPDATE, this.bindFunction(this.onTimeUpdated));
  };
  StatusIconFactionProtection.prototype.removeEventListenerForShowTime = function () {
    e.prototype.removeEventListenerForShowTime.call(this);
    u.CastleModel.specialEventData.removeEventListener(c.CastleSpecialEventEvent.FACTION_EVENT_FACTION_PROTECTION_TIMEUPDATE, this.bindFunction(this.onTimeUpdated));
  };
  StatusIconFactionProtection.prototype.onTimeUpdated = function (e) {
    var t = a.castAs(u.CastleModel.specialEventData.getActiveEventByEventId(s.EventConst.EVENTTYPE_FACTION), "FactionEventVO");
    if (t) {
      this.itxt_label.textContentVO.stringValue = o.TimeStringHelper.getShortTimeStringBySeconds(t.remainingFactionProtectionTimeInSeconds, o.TimeStringHelper.ONE_TIME_FORMAT);
      p.CastleTextFieldHelper.restoreWidth(this.itxt_label);
    }
  };
  return StatusIconFactionProtection;
}(require("./305.js").ACastleLabeledStatusIcon);
exports.StatusIconFactionProtection = h;
var g = require("./202.js");
var C = require("./9.js");
var _ = require("./17.js");
var m = require("./671.js");