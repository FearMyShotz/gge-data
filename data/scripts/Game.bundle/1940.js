Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleSpyinfoDetailsDialogProperties(t, i, n) {
    var o = this;
    o.forwarded = false;
    o.messageId = -1;
    CONSTRUCTOR_HACK;
    (o = e.call(this) || this).spyInfoVO = t;
    o.hideParentDialog = n;
    o.forwarded = i.forwarded;
    o.messageId = i.messageID;
    o.messageVO = i;
    o.forwardSender = i.senderName;
    return o;
  }
  n.__extends(CastleSpyinfoDetailsDialogProperties, e);
  return CastleSpyinfoDetailsDialogProperties;
}(require("./2.js").BasicProperties);
exports.CastleSpyinfoDetailsDialogProperties = o;