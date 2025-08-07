Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function EventOverviewDetailsPointEventDefault() {
    var t = e.call(this) || this;
    t.dispClassName = "list_rewards_points_event";
    t.init();
    return t;
  }
  n.__extends(EventOverviewDetailsPointEventDefault, e);
  return EventOverviewDetailsPointEventDefault;
}(require("./571.js").EventOverviewDetailedEventView);
exports.EventOverviewDetailsPointEventDefault = a;
o.classImplementsInterfaces(a, "ICollectableRendererList");