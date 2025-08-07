Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function EventOverviewEventConfig() {
    this._eventOverviewDetails = a.EventOverviewDetailEnum.DETAILS_NONE;
    this._showRemainingEventDuration = true;
    this._eventCurrency = o.CollectableEnum.UNKNOWN;
    this._hasAllianceMode = false;
  }
  Object.defineProperty(EventOverviewEventConfig.prototype, "eventOverviewDetails", {
    get: function () {
      return this._eventOverviewDetails;
    },
    set: function (e) {
      this._eventOverviewDetails = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventOverviewEventConfig.prototype, "showRemainingEventDuration", {
    get: function () {
      return this._showRemainingEventDuration;
    },
    set: function (e) {
      this._showRemainingEventDuration = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventOverviewEventConfig.prototype, "hasAllianceMode", {
    get: function () {
      return this._hasAllianceMode;
    },
    set: function (e) {
      this._hasAllianceMode = e;
    },
    enumerable: true,
    configurable: true
  });
  return EventOverviewEventConfig;
}();
exports.EventOverviewEventConfig = n;
var o = require("./12.js");
var a = require("./570.js");