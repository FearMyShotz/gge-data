Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./21.js");
var s = require("./26.js");
var r = require("./4.js");
var l = function (e) {
  function StatusIconSeasonPassSale() {
    var t = e.call(this, "Btn_EventPackagePrimeSales", null, d.AOfferHubBaseStatusIcon.PRIORITY_PRIMESALE_KL_SEASON_PASS) || this;
    t.setTooltip("dialog_primeday_primesale_kingdomsLeague_seasonPass_HudIcon_tooltip");
    return t;
  }
  n.__extends(StatusIconSeasonPassSale, e);
  StatusIconSeasonPassSale.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
  };
  StatusIconSeasonPassSale.prototype.addEventListenerForShowTime = function () {
    e.prototype.addEventListenerForShowTime.call(this);
    r.CastleModel.timerData.addEventListener(a.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconSeasonPassSale.prototype.removeEventListenerForShowTime = function () {
    e.prototype.removeEventListenerForShowTime.call(this);
    r.CastleModel.timerData.removeEventListener(a.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconSeasonPassSale.prototype.addEventListenerForVisibility = function () {
    r.CastleModel.specialEventData.addEventListener(s.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onEventsUpdated));
    r.CastleModel.specialEventData.addEventListener(s.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventsUpdated));
  };
  StatusIconSeasonPassSale.prototype.removeEventListenerForVisibility = function () {
    r.CastleModel.specialEventData.removeEventListener(s.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onEventsUpdated));
    r.CastleModel.specialEventData.removeEventListener(s.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventsUpdated));
  };
  StatusIconSeasonPassSale.prototype.setVisibilityLoaded = function () {
    if (r.CastleModel.specialEventData.isEventActive(o.EventConst.EVENTTYPE_PRIME_SALES_KINGDOM_LEAGUE_PASS)) {
      this.show();
    } else {
      this.hide();
    }
  };
  StatusIconSeasonPassSale.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.onTimerUpdate();
  };
  StatusIconSeasonPassSale.prototype.onClick = function () {
    c.CastleDialogHandler.getInstance().registerDefaultDialogs(u.CastlePrimeSaleSeasonPassDialog);
  };
  StatusIconSeasonPassSale.prototype.onTimerUpdate = function (e = null) {
    if (this.icon && this.icon.txt_label) {
      var t = r.CastleModel.specialEventData.getActiveEventByEventId(o.EventConst.EVENTTYPE_PRIME_SALES_KINGDOM_LEAGUE_PASS);
      this.itxt_label.textContentVO.stringValue = t ? p.CastleTimeStringHelper.getEventTimeString(t.remainingEventTimeInSeconds) : "-";
    }
  };
  StatusIconSeasonPassSale.prototype.onEventsUpdated = function (e = null) {
    this.setVisibility();
  };
  return StatusIconSeasonPassSale;
}(require("./134.js").AOfferHubItemStatusIcon);
exports.StatusIconSeasonPassSale = l;
var c = require("./9.js");
var u = require("./3939.js");
var d = require("./175.js");
var p = require("./27.js");