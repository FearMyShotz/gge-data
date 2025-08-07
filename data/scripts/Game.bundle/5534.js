Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function SubscriptionMessageDialogProperties(t) {
    var i = e.call(this) || this;
    i._messageVO = t;
    return i;
  }
  n.__extends(SubscriptionMessageDialogProperties, e);
  Object.defineProperty(SubscriptionMessageDialogProperties.prototype, "messageVO", {
    get: function () {
      return this._messageVO;
    },
    enumerable: true,
    configurable: true
  });
  return SubscriptionMessageDialogProperties;
}(require("./2.js").BasicProperties);
exports.SubscriptionMessageDialogProperties = o;