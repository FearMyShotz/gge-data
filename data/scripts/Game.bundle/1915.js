Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./6.js");
var l = function (e) {
  function CastleLuckyWheelSpinButton(t, i) {
    var n = e.call(this, t, true) || this;
    n._allStates = [CastleLuckyWheelSpinButton.STATE_FREE_SPIN, CastleLuckyWheelSpinButton.STATE_START_SPIN, CastleLuckyWheelSpinButton.STATE_STOP_SPIN, CastleLuckyWheelSpinButton.STATE_NOT_ENOUGH_TICKETS];
    n._currentState = 0;
    n._autoSpinEnabled = false;
    n._textIDs = ["dialog_luckyWheel_freeSpin", "dialog_luckyWheel_spin", "dialog_luckyWheel_stop", "dialog_luckyWheel_buyTickets"];
    n._eventID = 0;
    n._eventID = i;
    if (n._eventID == a.EventConst.EVENTTYPE_LUCKYWHEEL_SD) {
      n._textIDs = ["dialog_luckyWheel_freeSpin", "dialog_luckyWheel_spin", "dialog_luckyWheel_stop", "dialog_luckyWheel_spin"];
    }
    if (n._eventID = r.int(a.EventConst.EVENTTYPE_LUCKYWHEEL_SD)) {
      n._textIDs = ["dialog_luckyWheel_freeSpin", "dialog_luckyWheel_spin", "dialog_luckyWheel_stop", "dialog_luckyWheel_spin"];
    }
    t.changeTextFieldCacheScale(2);
    n._tfLabel = t.tf_label;
    n._tfLabel.mouseEnabled = false;
    return n;
  }
  n.__extends(CastleLuckyWheelSpinButton, e);
  Object.defineProperty(CastleLuckyWheelSpinButton.prototype, "state", {
    get: function () {
      return this._currentState;
    },
    set: function (e) {
      if (this._allStates.indexOf(e) != -1) {
        this._currentState = e;
        o.GoodgameTextFieldManager.getInstance().registerTextField(this._tfLabel, new s.LocalizedTextVO(this._textIDs[this._currentState]));
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleLuckyWheelSpinButton.STATE_FREE_SPIN = 0;
  CastleLuckyWheelSpinButton.STATE_START_SPIN = 1;
  CastleLuckyWheelSpinButton.STATE_STOP_SPIN = 2;
  CastleLuckyWheelSpinButton.STATE_NOT_ENOUGH_TICKETS = 3;
  return CastleLuckyWheelSpinButton;
}(require("./36.js").ClickFeedbackButton);
exports.CastleLuckyWheelSpinButton = l;