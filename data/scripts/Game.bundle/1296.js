Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function AccountDeletionTrackingEvent(t) {
    return e.call(this, t) || this;
  }
  n.__extends(AccountDeletionTrackingEvent, e);
  AccountDeletionTrackingEvent.prototype.getVars = function () {
    var e = {
      playerId: this._playerId,
      date: this._date,
      actionType: this._actionType
    };
    return e;
  };
  Object.defineProperty(AccountDeletionTrackingEvent.prototype, "playerId", {
    set: function (e) {
      this._playerId = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AccountDeletionTrackingEvent.prototype, "date", {
    set: function (e) {
      this._date = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AccountDeletionTrackingEvent.prototype, "actionType", {
    set: function (e) {
      this._actionType = e;
    },
    enumerable: true,
    configurable: true
  });
  AccountDeletionTrackingEvent.__initialize_static_members = function () {
    AccountDeletionTrackingEvent.DELETION_INITIALIZATION = "deletion_initialization";
    AccountDeletionTrackingEvent.DELETION_INITIALIZATION_CONFIRM = "deletion_initialization_confirm";
    AccountDeletionTrackingEvent.DELETION_INITIALIZATION_CANCEL = "deletion_initialization_cancel";
    AccountDeletionTrackingEvent.ACCOUNT_DELETION_POPUP = "account_deletion_popup";
    AccountDeletionTrackingEvent.ACCOUNT_DELETION_OK = "account_deletion_ok";
    AccountDeletionTrackingEvent.ACCOUNT_DELETION_CANCEL = "account_deletion_cancel";
  };
  return AccountDeletionTrackingEvent;
}(require("./2.js").BasicTrackingEvent);
exports.AccountDeletionTrackingEvent = o;
o.__initialize_static_members();