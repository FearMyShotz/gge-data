Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./6.js");
var r = require("./4.js");
var l = require("./52.js");
var c = function (e) {
  function CollectableRendererMinuteSkipBackground() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CollectableRendererMinuteSkipBackground, e);
  CollectableRendererMinuteSkipBackground.prototype.reset = function () {
    if (this.clips.minuteSkipBackgroundMc) {
      o.MovieClipHelper.clearMovieClip(this.clips.minuteSkipBackgroundMc);
    }
  };
  CollectableRendererMinuteSkipBackground.prototype.update = function () {
    var e = this.itemVO;
    if (this.clips.minuteSkipBackgroundMc && e && e.isInIdRange(r.CastleModel.currencyData.getCurrencyRangeByID(l.ClientConstCurrency.ID_RANGE_MINUTE_SKIP))) {
      var t = new (s.int(e.xmlCurrencyVO.minutesSkipValue) >= 60 ? Library.CastleInterfaceElements_Icons.Icon_HourClock_background : Library.CastleInterfaceElements_Icons.Icon_MinuteClock_background)();
      this.clips.minuteSkipBackgroundMc.addChild(t);
      t.width = this.renderer.options.icon.dimension.x * 1.3;
      t.height = this.renderer.options.icon.dimension.y * 1.3;
    }
  };
  CollectableRendererMinuteSkipBackground.prototype.setVisibility = function (e) {
    if (this.clips.minuteSkipBackgroundMc) {
      this.clips.minuteSkipBackgroundMc.visible = e;
    }
  };
  return CollectableRendererMinuteSkipBackground;
}(require("./242.js").ACollectableRenderComponent);
exports.CollectableRendererMinuteSkipBackground = c;
a.classImplementsInterfaces(c, "ICollectableRendererList");