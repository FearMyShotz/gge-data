Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleBattleLogDetailAdvancedDialogProperties(t, i, n, o, a) {
    var s = this;
    s.forwarded = false;
    s.messageId = 0;
    CONSTRUCTOR_HACK;
    (s = e.call(this) || this).logVO = t;
    s.forwarded = n;
    s.messageId = i;
    s.forwardSender = o;
    s.onClose = a;
    return s;
  }
  n.__extends(CastleBattleLogDetailAdvancedDialogProperties, e);
  return CastleBattleLogDetailAdvancedDialogProperties;
}(require("./2.js").BasicProperties);
exports.CastleBattleLogDetailAdvancedDialogProperties = o;