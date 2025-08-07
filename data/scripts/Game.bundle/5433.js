Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleChangelistDialogProperties(t) {
    var i = e.call(this) || this;
    i.rewards = new a.CollectableList();
    i.messageVO = t;
    return i;
  }
  n.__extends(CastleChangelistDialogProperties, e);
  return CastleChangelistDialogProperties;
}(require("./2.js").BasicProperties);
exports.CastleChangelistDialogProperties = o;
var a = require("./48.js");