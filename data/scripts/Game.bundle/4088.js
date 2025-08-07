Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SCollectLostAndFoundItemVO(t) {
    var i = this;
    i.LFID = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).LFID = t;
    return i;
  }
  n.__extends(C2SCollectLostAndFoundItemVO, e);
  C2SCollectLostAndFoundItemVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_COLLECT_LOST_AND_FOUND;
  };
  return C2SCollectLostAndFoundItemVO;
}(o.BasicCommandVO);
exports.C2SCollectLostAndFoundItemVO = s;