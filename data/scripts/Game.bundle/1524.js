Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SKingdomGetVillageListVO() {
    return e.call(this) || this;
  }
  n.__extends(C2SKingdomGetVillageListVO, e);
  C2SKingdomGetVillageListVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_KINGDOM_GET_VILLAGE_LIST;
  };
  return C2SKingdomGetVillageListVO;
}(o.BasicCommandVO);
exports.C2SKingdomGetVillageListVO = s;