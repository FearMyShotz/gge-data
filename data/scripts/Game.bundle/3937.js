Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./6.js");
var a = require("./21.js");
var s = require("./4.js");
var r = function (e) {
  function StatusIconBoosterSaleLabeled() {
    var t = e.call(this, "Btn_BoosterSale", null, d.AOfferHubBaseStatusIcon.PRIORITY_PRIMESALE_BOOSTER) || this;
    t.setTooltip("dialog_specialOfferDeco_title");
    return t;
  }
  n.__extends(StatusIconBoosterSaleLabeled, e);
  StatusIconBoosterSaleLabeled.prototype.onClick = function () {
    c.CastleDialogHandler.getInstance().registerDefaultDialogs(u.CastlePrimeSaleBoosterDialog);
  };
  StatusIconBoosterSaleLabeled.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.onTimerUpdate();
  };
  StatusIconBoosterSaleLabeled.prototype.setVisibilityLoaded = function () {
    if (s.CastleModel.boosterSaleData.isAnyBoosterOnSale() && s.CastleModel.boosterSaleData.anyTimeLeft() > 0) {
      this.show();
    } else {
      this.hide();
    }
  };
  StatusIconBoosterSaleLabeled.prototype.onSaleUpdate = function (e) {
    this.setVisibilityLoaded();
  };
  StatusIconBoosterSaleLabeled.prototype.addEventListenerForVisibility = function () {
    s.CastleModel.boosterSaleData.addEventListener(l.CastleBoosterSaleData.BOOSTER_SALE_UPDATE, this.bindFunction(this.onSaleUpdate));
  };
  StatusIconBoosterSaleLabeled.prototype.removeEventListenerForVisibility = function () {
    s.CastleModel.boosterSaleData.removeEventListener(l.CastleBoosterSaleData.BOOSTER_SALE_UPDATE, this.bindFunction(this.onSaleUpdate));
  };
  StatusIconBoosterSaleLabeled.prototype.addEventListenerForShowTime = function () {
    e.prototype.addEventListenerForShowTime.call(this);
    this.timerData.addEventListener(a.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconBoosterSaleLabeled.prototype.removeEventListenerForShowTime = function () {
    e.prototype.removeEventListenerForShowTime.call(this);
    this.timerData.removeEventListener(a.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconBoosterSaleLabeled.prototype.onTimerUpdate = function (e = null) {
    var t = o.int(s.CastleModel.boosterSaleData.anyTimeLeft());
    if (t < 0) {
      this.hide();
    } else {
      this.itxt_label.textContentVO.stringValue = p.CastleTimeStringHelper.getEventTimeString(t);
    }
  };
  return StatusIconBoosterSaleLabeled;
}(require("./134.js").AOfferHubItemStatusIcon);
exports.StatusIconBoosterSaleLabeled = r;
var l = require("./269.js");
var c = require("./9.js");
var u = require("./1120.js");
var d = require("./175.js");
var p = require("./27.js");