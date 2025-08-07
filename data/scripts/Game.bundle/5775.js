Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./3.js");
var o = require("./28.js");
var a = require("./1847.js");
var s = require("./30.js");
var r = require("./15.js");
var l = require("./4.js");
var c = function () {
  function DeleteAccountData() {
    this._remainingTimeTillDeleteTimeStamp = -1;
  }
  Object.defineProperty(DeleteAccountData.prototype, "isAccountDeletionStarted", {
    get: function () {
      return this._remainingTimeTillDeleteTimeStamp && this._remainingTimeTillDeleteTimeStamp != -1 && this.remainingTimeTillDeleteTimeStamp > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DeleteAccountData.prototype, "remainingTimeTillDeleteTimeStamp", {
    get: function () {
      return this._remainingTimeTillDeleteTimeStamp - s.CachedTimer.getCachedTimer() * o.ClientConstTime.MILLISEC_2_SEC;
    },
    set: function (e) {
      this._remainingTimeTillDeleteTimeStamp = e;
      r.CastleBasicController.getInstance().dispatchEvent(new a.CastleAccountDeletionEvent(a.CastleAccountDeletionEvent.ACCOUNT_DELETION_TIMER_UPDATED));
    },
    enumerable: true,
    configurable: true
  });
  DeleteAccountData.prototype.getDateForDelete = function () {
    return n.Localize.datetime(new Date(Date.now() + l.CastleModel.deleteAccountData.remainingTimeTillDeleteTimeStamp * o.ClientConstTime.SEC_2_MILLISEC), n.DateTimeStyle.LONG, n.DateTimeStyle.NONE);
  };
  return DeleteAccountData;
}();
exports.DeleteAccountData = c;