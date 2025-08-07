Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function AdvisorAttackActivationDialogProperties(t) {
    var i = e.call(this) || this;
    i._advisorType = t;
    return i;
  }
  n.__extends(AdvisorAttackActivationDialogProperties, e);
  Object.defineProperty(AdvisorAttackActivationDialogProperties.prototype, "advisorType", {
    get: function () {
      return this._advisorType;
    },
    enumerable: true,
    configurable: true
  });
  return AdvisorAttackActivationDialogProperties;
}(require("./2.js").BasicProperties);
exports.AdvisorAttackActivationDialogProperties = o;