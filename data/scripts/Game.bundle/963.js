Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./710.js");
var s = function (e) {
  function SupportOverviewDialogProperties(t) {
    var i = e.call(this) || this;
    i.mapObjectVO = t;
    return i;
  }
  n.__extends(SupportOverviewDialogProperties, e);
  Object.defineProperty(SupportOverviewDialogProperties.prototype, "capacity", {
    get: function () {
      if (r.instanceOfClass(this.mapObjectVO, "ABGAllianceTowerMapobjectVO")) {
        return -1;
      } else if (a.instanceOf_ISupportCapacityVO(this.mapObjectVO)) {
        return this.mapObjectVO.supportCapacity;
      } else {
        return -1;
      }
    },
    enumerable: true,
    configurable: true
  });
  return SupportOverviewDialogProperties;
}(o.BasicProperties);
exports.SupportOverviewDialogProperties = s;
var r = require("./1.js");