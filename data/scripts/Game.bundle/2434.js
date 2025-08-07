Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SSetAutoWar(t) {
    var i = this;
    i.AW = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).AW = t;
    return i;
  }
  n.__extends(C2SSetAutoWar, e);
  C2SSetAutoWar.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_ALLIANCE_SET_AUTO_WAR;
  };
  return C2SSetAutoWar;
}(o.BasicCommandVO);
exports.C2SSetAutoWar = s;