Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SMarkBuildingInStorageVO(t) {
    var i = this;
    i.SID = -1;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).SID = t;
    return i;
  }
  n.__extends(C2SMarkBuildingInStorageVO, e);
  C2SMarkBuildingInStorageVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_MARK_BUILDING_IN_STORAGE;
  };
  return C2SMarkBuildingInStorageVO;
}(o.BasicCommandVO);
exports.C2SMarkBuildingInStorageVO = s;