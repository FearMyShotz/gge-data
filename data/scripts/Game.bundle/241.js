Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SPointEventGetPointsVO(t) {
    var i = this;
    i.EID = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).EID = t;
    return i;
  }
  n.__extends(C2SPointEventGetPointsVO, e);
  C2SPointEventGetPointsVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_POINT_EVENT_POINTS;
  };
  return C2SPointEventGetPointsVO;
}(o.BasicCommandVO);
exports.C2SPointEventGetPointsVO = s;