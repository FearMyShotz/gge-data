Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleBattleLogDialogProperties(t, i, n, o, a = -1) {
    var s = this;
    s.messageID = 0;
    s.areaType = 0;
    s.setRead = false;
    s.isForwarded = false;
    CONSTRUCTOR_HACK;
    (s = e.call(this) || this).messageID = t;
    s.setRead = i;
    s.isForwarded = n;
    s.forwardSender = o;
    s.areaType = a;
    return s;
  }
  n.__extends(CastleBattleLogDialogProperties, e);
  return CastleBattleLogDialogProperties;
}(require("./2.js").BasicProperties);
exports.CastleBattleLogDialogProperties = o;