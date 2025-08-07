Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function SubscriptionDialogProperties(t = "", i = null) {
    var n = e.call(this) || this;
    n._preselectedTab = "";
    n._preselectedTab = t;
    n._infoTabTopic = i;
    return n;
  }
  n.__extends(SubscriptionDialogProperties, e);
  Object.defineProperty(SubscriptionDialogProperties.prototype, "preselectedTab", {
    get: function () {
      return this._preselectedTab;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SubscriptionDialogProperties.prototype, "infoTabTopic", {
    get: function () {
      return this._infoTabTopic;
    },
    enumerable: true,
    configurable: true
  });
  return SubscriptionDialogProperties;
}(require("./2.js").BasicProperties);
exports.SubscriptionDialogProperties = o;