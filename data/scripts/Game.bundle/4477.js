Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function CastleLuckyWheelTicketSliderBuyDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleLuckyWheelTicketSliderBuyDialog.NAME) || this;
  }
  n.__extends(CastleLuckyWheelTicketSliderBuyDialog, e);
  CastleLuckyWheelTicketSliderBuyDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.onChangePackageAmount();
  };
  CastleLuckyWheelTicketSliderBuyDialog.prototype.onChangePackageAmount = function (t = null) {
    e.prototype.onChangePackageAmount.call(this, t);
    var i = this.amountPicker.selectedValue + 1;
    this.setDescriptionText("dialog_luckyWheel_buyTicketsNumber", [this.dialogProperties.eventPackageVO.reward.amount * i]);
  };
  CastleLuckyWheelTicketSliderBuyDialog.__initialize_static_members = function () {
    CastleLuckyWheelTicketSliderBuyDialog.NAME = "CastleLuckyWheelTicketSliderBuy";
  };
  return CastleLuckyWheelTicketSliderBuyDialog;
}(require("./168.js").CastleGenericSliderBuyDialog);
exports.CastleLuckyWheelTicketSliderBuyDialog = a;
o.classImplementsInterfaces(a, "ICollectableRendererList");
a.__initialize_static_members();