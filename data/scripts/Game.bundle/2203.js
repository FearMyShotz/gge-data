Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SGeneralSelectAbilities(t, i = -1) {
    var n = e.call(this) || this;
    n.GID = 0;
    n.SAIDS = t;
    n.GID = i;
    return n;
  }
  n.__extends(C2SGeneralSelectAbilities, e);
  C2SGeneralSelectAbilities.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_GENERALS_SET_ABILITIES;
  };
  return C2SGeneralSelectAbilities;
}(o.BasicCommandVO);
exports.C2SGeneralSelectAbilities = s;