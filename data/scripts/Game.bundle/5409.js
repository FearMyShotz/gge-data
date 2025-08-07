Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function AdvisorAttackSummaryDialogProperties(t, i) {
    var n = e.call(this) || this;
    n._messageID = t;
    n._advisorType = i;
    return n;
  }
  n.__extends(AdvisorAttackSummaryDialogProperties, e);
  Object.defineProperty(AdvisorAttackSummaryDialogProperties.prototype, "messageID", {
    get: function () {
      return this._messageID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AdvisorAttackSummaryDialogProperties.prototype, "advisorType", {
    get: function () {
      return this._advisorType;
    },
    enumerable: true,
    configurable: true
  });
  return AdvisorAttackSummaryDialogProperties;
}(require("./2.js").BasicProperties);
exports.AdvisorAttackSummaryDialogProperties = o;