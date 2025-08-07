Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SRemovePrivateResourceVillageVO(t) {
    var i = this;
    i.VID = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).VID = t;
    return i;
  }
  n.__extends(C2SRemovePrivateResourceVillageVO, e);
  C2SRemovePrivateResourceVillageVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_REMOVE_PRIVATE_RESOURCE_VILLAGE;
  };
  return C2SRemovePrivateResourceVillageVO;
}(o.BasicCommandVO);
exports.C2SRemovePrivateResourceVillageVO = s;