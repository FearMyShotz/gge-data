Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./3.js");
var a = require("./16.js");
var s = require("./4.js");
var r = require("./1146.js");
var l = require("./1915.js");
var c = function () {
  function CastleLuckyWheelSpinComponent(e, t) {
    this._eventID = 0;
    this.disp = e;
    this._eventID = t;
    this._spinButton = new l.CastleLuckyWheelSpinButton(e.btn_spin, t);
    this._autoPlayButton = new r.CastleLuckyWheelCheckboxWrapper(e.checkbox_autospin, "mc_box", "dialog_luckyWheel_fastSpinBox_checked", "dialog_luckyWheel_fastStopBox_empty");
    e.checkbox_autospin.mc_spin.mouseChildren = false;
    e.checkbox_autospin.mc_spin.toolTipText = "dialog_luckyWheel_fastSpinIcon";
    e.box_ticketCount.toolTipText = "tooltip_tickets";
    e.box_ticketCount.mouseChildren = false;
  }
  CastleLuckyWheelSpinComponent.prototype.updateTicketCount = function (e) {
    var t = s.CastleModel.specialEventData.getActiveEventByEventId(this._eventID);
    if (this._itxt_TicketCount) {
      this._itxt_TicketCount.textContentVO.textReplacements = [e];
    } else {
      this._itxt_TicketCount = n.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.box_ticketCount.txt_amt, new o.LocalizedTextVO("generic_amount_times", [e]));
    }
    if (e > s.CastleModel.currencyData.getAmountById(t.currencyID)) {
      this._itxt_TicketCount.color = a.ClientConstColor.GENERIC_RED;
    } else {
      this._itxt_TicketCount.color = a.ClientConstColor.GENERIC_BLACK;
    }
  };
  Object.defineProperty(CastleLuckyWheelSpinComponent.prototype, "spinButton", {
    get: function () {
      return this._spinButton;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLuckyWheelSpinComponent.prototype, "isAutoSpin", {
    get: function () {
      return this._autoPlayButton.isEnabled;
    },
    enumerable: true,
    configurable: true
  });
  CastleLuckyWheelSpinComponent.prototype.addEventListenerOnShow = function () {
    this._autoPlayButton.addEventListenerOnShow();
  };
  CastleLuckyWheelSpinComponent.prototype.removeEventListenersOnHide = function () {
    this._autoPlayButton.removeEventListenersOnHide();
  };
  return CastleLuckyWheelSpinComponent;
}();
exports.CastleLuckyWheelSpinComponent = c;