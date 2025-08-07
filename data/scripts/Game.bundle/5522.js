Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleSabotageMessageDialogProperties(t, i, n, o) {
    var a = this;
    a.messageType = 0;
    a.castleID = 0;
    a.messageID = 0;
    a.isMessageUnread = false;
    CONSTRUCTOR_HACK;
    (a = e.call(this) || this).messageType = t;
    a.castleID = i;
    a.messageID = n;
    a.isMessageUnread = o;
    return a;
  }
  n.__extends(CastleSabotageMessageDialogProperties, e);
  return CastleSabotageMessageDialogProperties;
}(require("./2.js").BasicProperties);
exports.CastleSabotageMessageDialogProperties = o;