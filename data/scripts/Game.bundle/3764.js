Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function PostAttackSelectBoosterDialogProperties(t, i, n, o) {
    var a = this;
    a.targetActionType = 0;
    CONSTRUCTOR_HACK;
    (a = e.call(this) || this).targetActionType = t;
    a.hideFunction = i;
    a.attackInfoVO = n;
    a.selectedLord = o;
    return a;
  }
  n.__extends(PostAttackSelectBoosterDialogProperties, e);
  return PostAttackSelectBoosterDialogProperties;
}(require("./2.js").BasicProperties);
exports.PostAttackSelectBoosterDialogProperties = o;