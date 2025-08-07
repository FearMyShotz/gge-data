Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleForumDeleteDialogProperties(t, i, n = -1) {
    var o = this;
    o.topicId = 0;
    o.postId = 0;
    CONSTRUCTOR_HACK;
    (o = e.call(this) || this).topicId = i;
    o.postId = n;
    o.dialogType = t;
    return o;
  }
  n.__extends(CastleForumDeleteDialogProperties, e);
  return CastleForumDeleteDialogProperties;
}(require("./2.js").BasicProperties);
exports.CastleForumDeleteDialogProperties = o;