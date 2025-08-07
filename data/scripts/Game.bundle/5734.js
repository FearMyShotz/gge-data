Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SBindGem(t, i, n, o, a) {
    var s = this;
    s.GID = NaN;
    s.EID = NaN;
    s.LID = 0;
    s.M = 0;
    s.RGEM = 0;
    CONSTRUCTOR_HACK;
    (s = e.call(this) || this).GID = t;
    s.EID = i;
    s.LID = n;
    s.M = o ? 1 : 0;
    s.RGEM = a ? 1 : 0;
    return s;
  }
  n.__extends(C2SBindGem, e);
  C2SBindGem.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_BIND_GEM;
  };
  return C2SBindGem;
}(o.BasicCommandVO);
exports.C2SBindGem = s;