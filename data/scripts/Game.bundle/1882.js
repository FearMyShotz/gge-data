Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function DonationEventTrackingEvent(t) {
    return e.call(this, t) || this;
  }
  n.__extends(DonationEventTrackingEvent, e);
  DonationEventTrackingEvent.prototype.getVars = function () {
    var e = {
      playerId: this._playerId,
      date: this._date,
      actionType: this._actionType
    };
    return e;
  };
  Object.defineProperty(DonationEventTrackingEvent.prototype, "playerId", {
    set: function (e) {
      this._playerId = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DonationEventTrackingEvent.prototype, "date", {
    set: function (e) {
      this._date = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DonationEventTrackingEvent.prototype, "actionType", {
    set: function (e) {
      this._actionType = e;
    },
    enumerable: true,
    configurable: true
  });
  DonationEventTrackingEvent.__initialize_static_members = function () {
    DonationEventTrackingEvent.OPENED_DONATION_MAIN_DIALOG = "opened_donation_main_dialog";
  };
  return DonationEventTrackingEvent;
}(require("./2.js").BasicTrackingEvent);
exports.DonationEventTrackingEvent = o;
o.__initialize_static_members();