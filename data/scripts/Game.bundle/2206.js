Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SGeneralResetSkills(t) {
    var i = e.call(this) || this;
    i.GID = 0;
    i.GID = t;
    return i;
  }
  n.__extends(C2SGeneralResetSkills, e);
  C2SGeneralResetSkills.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_GENERAL_RESET_SKILLS;
  };
  return C2SGeneralResetSkills;
}(o.BasicCommandVO);
exports.C2SGeneralResetSkills = s;