Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1143.js");
var s = require("./4.js");
var r = require("./5.js");
var l = require("./28.js");
var c = require("./30.js");
var u = function (e) {
  function GlobalEffectBuffEventVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(GlobalEffectBuffEventVO, e);
  GlobalEffectBuffEventVO.prototype.parseParamObject = function (t) {
    e.prototype.parseParamObject.call(this, t);
    this.boostAbleEffects = t.GEB;
    var i = s.CastleModel.specialEventData.getActiveEventByEventId(r.EventConst.EVENTTYPE_GLOBAL_EFFECTS);
    this._endTimestamp = i ? i.remainingEventTimeInSeconds * l.ClientConstTime.SEC_2_MILLISEC + c.CachedTimer.getCachedTimer() : 0;
  };
  GlobalEffectBuffEventVO.prototype.getBoostValues = function (e) {
    for (var t = 0, i = this.boostAbleEffects; t < i.length; t++) {
      var n = i[t];
      if (n !== undefined && n.GEID == e) {
        return n;
      }
    }
    return null;
  };
  GlobalEffectBuffEventVO.prototype.getBoostC2CostForGlobalEffect = function (e) {
    if (this.getBoostValues(e)) {
      return this.getBoostValues(e).C2;
    } else {
      return 0;
    }
  };
  GlobalEffectBuffEventVO.prototype.getBoostValueForGlobalEffect = function (e) {
    if (this.getBoostValues(e)) {
      return this.getBoostValues(e).BV;
    } else {
      return 0;
    }
  };
  GlobalEffectBuffEventVO.prototype.isEffectBoostable = function (e) {
    return !!this.getBoostValues(e);
  };
  return GlobalEffectBuffEventVO;
}(a.ATriggerEventVO);
exports.GlobalEffectBuffEventVO = u;
o.classImplementsInterfaces(u, "IEventOverviewable");