Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./4.js");
var a = function (e) {
  function StatusIconBoosterSale() {
    var t = e.call(this, "Btn_BoosterSale", null, l.AOfferHubBaseStatusIcon.PRIORITY_PRIMESALE_BOOSTER) || this;
    t.setTooltip("dialog_specialOfferDeco_title");
    return t;
  }
  n.__extends(StatusIconBoosterSale, e);
  StatusIconBoosterSale.prototype.onClick = function () {
    s.CastleDialogHandler.getInstance().registerDefaultDialogs(r.CastlePrimeSaleBoosterDialog);
  };
  StatusIconBoosterSale.prototype.setVisibilityLoaded = function () {
    if (o.CastleModel.boosterSaleData.isAnyBoosterOnSale() && o.CastleModel.boosterSaleData.anyTimeLeft() == -1) {
      this.show();
    } else {
      this.hide();
    }
  };
  return StatusIconBoosterSale;
}(require("./134.js").AOfferHubItemStatusIcon);
exports.StatusIconBoosterSale = a;
var s = require("./9.js");
var r = require("./1120.js");
var l = require("./175.js");