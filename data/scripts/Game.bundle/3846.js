Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function AdvisorAttackInfoDialogProperties(t) {
    var i = e.call(this) || this;
    i._advisorType = t;
    return i;
  }
  n.__extends(AdvisorAttackInfoDialogProperties, e);
  Object.defineProperty(AdvisorAttackInfoDialogProperties.prototype, "advisorType", {
    get: function () {
      return this._advisorType;
    },
    enumerable: true,
    configurable: true
  });
  return AdvisorAttackInfoDialogProperties;
}(require("./2.js").BasicProperties);
exports.AdvisorAttackInfoDialogProperties = o;