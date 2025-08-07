Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function RewardHubDialogProperties(t = false, i = null) {
    var n = e.call(this) || this;
    n.openOnGameStart = false;
    n.openStartTab = null;
    n.openOnGameStart = t;
    n.openStartTab = i;
    return n;
  }
  n.__extends(RewardHubDialogProperties, e);
  return RewardHubDialogProperties;
}(require("./2.js").BasicProperties);
exports.RewardHubDialogProperties = o;