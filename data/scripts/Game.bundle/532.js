Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SGetCastleResourcesVO(t, i) {
    var n = this;
    n.AID = 0;
    n.KID = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this).AID = t;
    n.KID = i;
    return n;
  }
  n.__extends(C2SGetCastleResourcesVO, e);
  C2SGetCastleResourcesVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_GET_CASTLE_RESOURCES;
  };
  return C2SGetCastleResourcesVO;
}(o.BasicCommandVO);
exports.C2SGetCastleResourcesVO = s;