Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function RewardHubErrorsDialogProperties(t) {
    var i = e.call(this) || this;
    i._listItemVOs = t;
    return i;
  }
  n.__extends(RewardHubErrorsDialogProperties, e);
  Object.defineProperty(RewardHubErrorsDialogProperties.prototype, "listItemVOs", {
    get: function () {
      return this._listItemVOs;
    },
    enumerable: true,
    configurable: true
  });
  return RewardHubErrorsDialogProperties;
}(require("./2.js").BasicProperties);
exports.RewardHubErrorsDialogProperties = o;