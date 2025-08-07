Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SCraftingQueueMoveVO(t, i, n, o, a) {
    var s = e.call(this) || this;
    s.KID = 0;
    s.AID = 0;
    s.OID = 0;
    s.OS = 0;
    s.NS = 0;
    s.KID = t;
    s.AID = i;
    s.OID = n;
    s.OS = o;
    s.NS = a;
    return s;
  }
  n.__extends(C2SCraftingQueueMoveVO, e);
  C2SCraftingQueueMoveVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_CRAFTING_QUEUE_MOVE;
  };
  return C2SCraftingQueueMoveVO;
}(o.BasicCommandVO);
exports.C2SCraftingQueueMoveVO = s;