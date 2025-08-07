Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./7.js");
var a = function (e) {
  function C2SChangePlayerName(t) {
    var i = e.call(this) || this;
    i.PN = t;
    return i;
  }
  n.__extends(C2SChangePlayerName, e);
  C2SChangePlayerName.prototype.getCmdId = function () {
    return o.ClientConstSF.C2S_CHANGE_PLAYER_NAME_EVENT;
  };
  return C2SChangePlayerName;
}(require("./2.js").BasicCommandVO);
exports.C2SChangePlayerName = a;