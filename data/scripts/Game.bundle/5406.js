Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function AdvisorAttackFailDialogProperties(t, i, n) {
    var o = e.call(this) || this;
    o._advisorType = t;
    o._commanderId = i;
    o._failureId = n;
    return o;
  }
  n.__extends(AdvisorAttackFailDialogProperties, e);
  Object.defineProperty(AdvisorAttackFailDialogProperties.prototype, "advisorType", {
    get: function () {
      return this._advisorType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AdvisorAttackFailDialogProperties.prototype, "commanderId", {
    get: function () {
      return this._commanderId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AdvisorAttackFailDialogProperties.prototype, "failureId", {
    get: function () {
      return this._failureId;
    },
    enumerable: true,
    configurable: true
  });
  return AdvisorAttackFailDialogProperties;
}(require("./2.js").BasicProperties);
exports.AdvisorAttackFailDialogProperties = o;