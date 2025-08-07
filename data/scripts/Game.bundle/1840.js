Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function AdvisorAttackOverviewDialogProperties(t) {
    var i = e.call(this) || this;
    i._advisorType = t;
    return i;
  }
  n.__extends(AdvisorAttackOverviewDialogProperties, e);
  Object.defineProperty(AdvisorAttackOverviewDialogProperties.prototype, "advisorType", {
    get: function () {
      return this._advisorType;
    },
    enumerable: true,
    configurable: true
  });
  return AdvisorAttackOverviewDialogProperties;
}(require("./2.js").BasicProperties);
exports.AdvisorAttackOverviewDialogProperties = o;