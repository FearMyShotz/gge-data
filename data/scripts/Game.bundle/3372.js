Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SReturnSpeedBoosterStartVO(t) {
    var i = this;
    i.PO = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).PO = t;
    return i;
  }
  n.__extends(C2SReturnSpeedBoosterStartVO, e);
  C2SReturnSpeedBoosterStartVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_BOOST_RETURNSPEED_START;
  };
  return C2SReturnSpeedBoosterStartVO;
}(o.BasicCommandVO);
exports.C2SReturnSpeedBoosterStartVO = s;