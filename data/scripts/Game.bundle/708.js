Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SGetUnitInventoryVO() {
    return e.call(this) || this;
  }
  n.__extends(C2SGetUnitInventoryVO, e);
  C2SGetUnitInventoryVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_GET_UNIT_INVENTORY;
  };
  return C2SGetUnitInventoryVO;
}(o.BasicCommandVO);
exports.C2SGetUnitInventoryVO = s;