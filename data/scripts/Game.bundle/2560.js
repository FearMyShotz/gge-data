Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SCreatePlagueMonkMovementVO(t, i, n, o, a) {
    var s = this;
    s.TX = 0;
    s.TY = 0;
    s.TK = 0;
    s.C = 0;
    s.E = 0;
    CONSTRUCTOR_HACK;
    (s = e.call(this) || this).TX = t;
    s.TY = i;
    s.TK = n;
    s.C = o;
    s.E = a;
    return s;
  }
  n.__extends(C2SCreatePlagueMonkMovementVO, e);
  C2SCreatePlagueMonkMovementVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_CREATE_PLAGUEMONK_MOVEMENT;
  };
  return C2SCreatePlagueMonkMovementVO;
}(o.BasicCommandVO);
exports.C2SCreatePlagueMonkMovementVO = s;