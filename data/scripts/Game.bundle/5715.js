Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./6.js");
var s = require("./7.js");
var r = function (e) {
  function C2SCraftEquipmentVO(t, i) {
    var n = this;
    n.EX = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this).I = t;
    n.EX = a.int(i ? 1 : 0);
    return n;
  }
  n.__extends(C2SCraftEquipmentVO, e);
  C2SCraftEquipmentVO.prototype.getCmdId = function () {
    return s.ClientConstSF.C2S_CRAFT_EQUIPMENT;
  };
  return C2SCraftEquipmentVO;
}(o.BasicCommandVO);
exports.C2SCraftEquipmentVO = r;