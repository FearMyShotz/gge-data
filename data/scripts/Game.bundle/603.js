Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function AdvisorAttackOverviewCancelDialogProperties(t, i = null) {
    var n = e.call(this) || this;
    n._movements = t;
    n._yesCallBack = i;
    return n;
  }
  n.__extends(AdvisorAttackOverviewCancelDialogProperties, e);
  Object.defineProperty(AdvisorAttackOverviewCancelDialogProperties.prototype, "movements", {
    get: function () {
      return this._movements;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AdvisorAttackOverviewCancelDialogProperties.prototype, "advisorType", {
    get: function () {
      if (this._movements.length > 0) {
        return this._movements[0].advisorType;
      } else {
        return 1;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AdvisorAttackOverviewCancelDialogProperties.prototype, "yesCallBack", {
    get: function () {
      return this._yesCallBack;
    },
    enumerable: true,
    configurable: true
  });
  return AdvisorAttackOverviewCancelDialogProperties;
}(require("./2.js").BasicProperties);
exports.AdvisorAttackOverviewCancelDialogProperties = o;