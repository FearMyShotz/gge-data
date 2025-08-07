Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function ATriggerEventVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ATriggerEventVO, e);
  ATriggerEventVO.prototype.parseBasicsFromParamObject = function (t) {
    e.prototype.parseBasicsFromParamObject.call(this, t);
    this._eventId = t.TRID;
  };
  return ATriggerEventVO;
}(require("./79.js").ASpecialEventVO);
exports.ATriggerEventVO = a;
o.classImplementsInterfaces(a, "IEventOverviewable");