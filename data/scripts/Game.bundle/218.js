Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SGetDetailedCastleListVO(t = 1) {
    var i = this;
    i.CD = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).CD = t;
    return i;
  }
  n.__extends(C2SGetDetailedCastleListVO, e);
  C2SGetDetailedCastleListVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_GET_DETAILEDCASTLELIST;
  };
  return C2SGetDetailedCastleListVO;
}(o.BasicCommandVO);
exports.C2SGetDetailedCastleListVO = s;