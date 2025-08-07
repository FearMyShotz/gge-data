Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function AdvisorAttackOverviewEvent(t, i = null, n = false, o = false) {
    var a = e.call(this, t, n, o) || this;
    a._advisorAttackOverviewVO = i;
    return a;
  }
  n.__extends(AdvisorAttackOverviewEvent, e);
  Object.defineProperty(AdvisorAttackOverviewEvent.prototype, "advisorAttackOverviewVO", {
    get: function () {
      return this._advisorAttackOverviewVO;
    },
    enumerable: true,
    configurable: true
  });
  AdvisorAttackOverviewEvent.ADVISOR_ATTACK_OVERVIEW_UPDATE = "ADVISOR_ATTACK_OVERVIEW_UPDATE";
  return AdvisorAttackOverviewEvent;
}(createjs.Event);
exports.AdvisorAttackOverviewEvent = o;