Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SFindNextTowerVO() {
    return e.call(this) || this;
  }
  n.__extends(C2SFindNextTowerVO, e);
  C2SFindNextTowerVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_FIND_NEXT_TOWER;
  };
  return C2SFindNextTowerVO;
}(o.BasicCommandVO);
exports.C2SFindNextTowerVO = s;