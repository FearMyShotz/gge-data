Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SSpySpyUnits(t, i) {
    var n = this;
    n.TX = 0;
    n.TY = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this).TX = t;
    n.TY = i;
    return n;
  }
  n.__extends(C2SSpySpyUnits, e);
  C2SSpySpyUnits.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_SPY_SPY_UNITS;
  };
  return C2SSpySpyUnits;
}(o.BasicCommandVO);
exports.C2SSpySpyUnits = s;