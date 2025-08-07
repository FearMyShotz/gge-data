Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleFactionEventLMSDialogProperties(t, i) {
    var n = this;
    n.ownFaction = 0;
    n.lmsFaction = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this).ownFaction = i;
    n.lmsFaction = t;
    return n;
  }
  n.__extends(CastleFactionEventLMSDialogProperties, e);
  return CastleFactionEventLMSDialogProperties;
}(require("./2.js").BasicProperties);
exports.CastleFactionEventLMSDialogProperties = o;