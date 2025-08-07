Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleStartQuestDialogProperties(t) {
    var i = e.call(this) || this;
    if (!t) {
      throw new ReferenceError("CastleQuestVO must not be null!");
    }
    i.quest = t;
    return i;
  }
  n.__extends(CastleStartQuestDialogProperties, e);
  return CastleStartQuestDialogProperties;
}(require("./2.js").BasicProperties);
exports.CastleStartQuestDialogProperties = o;