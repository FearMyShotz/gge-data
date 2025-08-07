Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./6.js");
var r = require("./28.js");
var l = require("./30.js");
var c = require("./4.js");
var u = function (e) {
  function CollectorEventEventVO() {
    var t = this;
    t._nextPayoutTimestamp = NaN;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(CollectorEventEventVO, e);
  CollectorEventEventVO.prototype.parseData = function (t, i, n) {
    e.prototype.parseData.call(this, t, i, n);
    this._collectInfoVO = c.CastleModel.collectEventData.getCollectInfoVOByID(n.EOID);
    this._nextPayoutTimestamp = l.CachedTimer.getCachedTimer() + n.SDP * r.ClientConstTime.SEC_2_MILLISEC;
  };
  CollectorEventEventVO.prototype.openDialog = function (e = true) {
    this.executeOpenDialog(e, d.CollectorEventDialog, new o.BasicProperties());
  };
  CollectorEventEventVO.prototype.getTimeUntilNextPayout = function () {
    return s.int(Math.max(0, (this._nextPayoutTimestamp - l.CachedTimer.getCachedTimer()) * r.ClientConstTime.MILLISEC_2_SEC));
  };
  Object.defineProperty(CollectorEventEventVO.prototype, "collectInfoVO", {
    get: function () {
      return this._collectInfoVO;
    },
    enumerable: true,
    configurable: true
  });
  return CollectorEventEventVO;
}(require("./79.js").ASpecialEventVO);
exports.CollectorEventEventVO = u;
var d = require("./1141.js");
a.classImplementsInterfaces(u, "IEventOverviewable");