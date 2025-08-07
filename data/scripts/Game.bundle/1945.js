Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SGetCastleListVO(t) {
    var i = this;
    i.PID = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).PID = t;
    return i;
  }
  n.__extends(C2SGetCastleListVO, e);
  C2SGetCastleListVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_GET_CASTLELIST;
  };
  C2SGetCastleListVO.MY_CASTLELIST = -1;
  return C2SGetCastleListVO;
}(o.BasicCommandVO);
exports.C2SGetCastleListVO = s;