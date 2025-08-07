Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SGeneralAssignLord(t, i = -1) {
    var n = e.call(this) || this;
    n.LID = 0;
    n.GID = -1;
    n.LID = t;
    n.GID = i;
    return n;
  }
  n.__extends(C2SGeneralAssignLord, e);
  C2SGeneralAssignLord.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_GENERAL_ASSIGN_LORD;
  };
  return C2SGeneralAssignLord;
}(o.BasicCommandVO);
exports.C2SGeneralAssignLord = s;