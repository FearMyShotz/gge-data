Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleForumVisibilityDialogProperties(t, i = -1) {
    var n = this;
    n.changingTopicId = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this).visibleRanks = t;
    n.changingTopicId = i;
    return n;
  }
  n.__extends(CastleForumVisibilityDialogProperties, e);
  return CastleForumVisibilityDialogProperties;
}(require("./2.js").BasicProperties);
exports.CastleForumVisibilityDialogProperties = o;