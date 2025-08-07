Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SMoveConstructionItemVO(t, i) {
    var n = this;
    n.OID = 0;
    n.NS = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this).OID = t;
    n.NS = i;
    return n;
  }
  n.__extends(C2SMoveConstructionItemVO, e);
  C2SMoveConstructionItemVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_MOVE_CONSTRUCTION_ITEM;
  };
  return C2SMoveConstructionItemVO;
}(o.BasicCommandVO);
exports.C2SMoveConstructionItemVO = s;