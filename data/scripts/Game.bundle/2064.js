Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./6.js");
var r = require("./4.js");
var l = function (e) {
  function IsoStatusIconProgressBarRubyWishWell() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(IsoStatusIconProgressBarRubyWishWell, e);
  IsoStatusIconProgressBarRubyWishWell.prototype.getBarText = function () {
    var e = s.int(r.CastleModel.rubyWishingWellData.getRemainingSecondsCalculated());
    if (e < 0) {
      r.CastleModel.rubyWishingWellData.requestFreshWishingWellData();
    }
    return o.TimeStringHelper.getShortTimeStringBySeconds(e);
  };
  IsoStatusIconProgressBarRubyWishWell.prototype.getBarFillFactor = function () {
    return r.CastleModel.rubyWishingWellData.getPercentageFinished();
  };
  return IsoStatusIconProgressBarRubyWishWell;
}(require("./696.js").AIsoStatusIconProgressBar);
exports.IsoStatusIconProgressBarRubyWishWell = l;
a.classImplementsInterfaces(l, "ICollectableRendererList");