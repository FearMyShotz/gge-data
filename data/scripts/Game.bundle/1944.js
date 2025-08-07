Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleForwardMessageDialogProperties(t, i) {
    var n = this;
    n.messageID = 0;
    n.messageType = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this).messageID = t;
    n.messageType = i;
    return n;
  }
  n.__extends(CastleForwardMessageDialogProperties, e);
  return CastleForwardMessageDialogProperties;
}(require("./2.js").BasicProperties);
exports.CastleForwardMessageDialogProperties = o;