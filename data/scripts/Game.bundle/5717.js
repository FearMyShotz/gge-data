Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SSellEquipmentVO(t, i, n) {
    var o = this;
    o.EID = NaN;
    o.LID = 0;
    o.EX = 0;
    o.LFID = 0;
    CONSTRUCTOR_HACK;
    (o = e.call(this) || this).EID = t;
    o.LID = i;
    o.LFID = n;
    return o;
  }
  n.__extends(C2SSellEquipmentVO, e);
  C2SSellEquipmentVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_SELL_EQUIPMENT;
  };
  return C2SSellEquipmentVO;
}(o.BasicCommandVO);
exports.C2SSellEquipmentVO = s;