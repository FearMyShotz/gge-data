Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./5.js");
var s = require("./26.js");
var r = require("./4.js");
var l = require("./109.js");
var c = require("./363.js");
var u = require("./175.js");
var d = function (e) {
  function StatusIconCollectorEvent() {
    CONSTRUCTOR_HACK;
    return e.call(this, "Btn_CollectorEvent", null, c.AEventHubItemStatusIcon.PRIORITY_EVENT_COLLECTOR) || this;
  }
  n.__extends(StatusIconCollectorEvent, e);
  StatusIconCollectorEvent.prototype.addEventListenerForVisibility = function () {
    r.CastleModel.specialEventData.addEventListener(s.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.updateStatusIcon));
    r.CastleModel.specialEventData.addEventListener(s.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.updateStatusIcon));
  };
  StatusIconCollectorEvent.prototype.removeEventListenerForVisibility = function () {
    r.CastleModel.specialEventData.removeEventListener(s.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.updateStatusIcon));
    r.CastleModel.specialEventData.removeEventListener(s.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.updateStatusIcon));
  };
  StatusIconCollectorEvent.prototype.onClick = function () {
    if (this.collectorEvent) {
      this.collectorEvent.openDialog();
    } else if (this.collectorShopEvent) {
      this.collectorShopEvent.openDialog();
    }
  };
  StatusIconCollectorEvent.prototype.updateStatusIcon = function (e) {
    this.setVisibilityLoaded();
  };
  StatusIconCollectorEvent.prototype.setVisibilityLoaded = function () {
    if (this.icon.visible != this.isVisible) {
      if (this.isVisible) {
        this.customizeInnerIconClip(this._innerIconClip);
        this.setTooltip("panel_action_collector_overview_header_" + (this.collectorEvent ? this.collectorEvent : this.collectorShopEvent).collectInfoVO.collectorEventSkinName);
        this.show();
      } else {
        this.hide();
      }
      if (this._changedVisibilityCallback != null) {
        this._changedVisibilityCallback();
      }
    }
  };
  Object.defineProperty(StatusIconCollectorEvent.prototype, "isVisible", {
    get: function () {
      return !!this.collectorEvent || !!this.collectorShopEvent && this.collectorShopEvent.kingdomIDs.indexOf(r.CastleModel.kingdomData.activeKingdomID) != -1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(StatusIconCollectorEvent.prototype, "collectorEvent", {
    get: function () {
      return r.CastleModel.specialEventData.getActiveEventByEventId(a.EventConst.EVENTTYPE_COLLECTOR);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(StatusIconCollectorEvent.prototype, "collectorShopEvent", {
    get: function () {
      return r.CastleModel.specialEventData.getActiveEventByEventId(a.EventConst.EVENTTYPE_COLLECTOR_SHOP);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(StatusIconCollectorEvent.prototype, "eventEndTimestamp", {
    get: function () {
      var e = this.collectorEvent ? this.collectorEvent.endTimestamp : 0;
      var t = this.collectorShopEvent ? this.collectorShopEvent.endTimestamp : 0;
      return Math.max(e, t);
    },
    enumerable: true,
    configurable: true
  });
  StatusIconCollectorEvent.prototype.customizeInnerIconClip = function (e) {
    if (e && e.isLoaded && (this.collectorEvent || this.collectorShopEvent)) {
      o.MovieClipHelper.clearMovieClip(e.currentshownDisplayObject);
      var t = l.ACastleStatusIcon.getAsExternalClip("CollectorIcon_" + (this.collectorEvent ? this.collectorEvent : this.collectorShopEvent).collectInfoVO.collectorEventSkinName);
      e.currentshownDisplayObject.addChild(t);
      t.doWhenLoaded(function (e) {
        o.MovieClipHelper.scaleDownToFit(e.currentshownDisplayObject, u.AOfferHubBaseStatusIcon.INNER_ICON_SIZE, u.AOfferHubBaseStatusIcon.INNER_ICON_SIZE);
      });
    }
  };
  return StatusIconCollectorEvent;
}(c.AEventHubItemStatusIcon);
exports.StatusIconCollectorEvent = d;