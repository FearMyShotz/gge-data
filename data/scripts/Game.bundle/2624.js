Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SGetNextExpiringConstructionItemVO() {
    CONSTRUCTOR_HACK;
    return e.call(this) || this;
  }
  n.__extends(C2SGetNextExpiringConstructionItemVO, e);
  C2SGetNextExpiringConstructionItemVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_GET_NEXT_EXPIRING_CONSTRUCTION_ITEM_EVENT;
  };
  return C2SGetNextExpiringConstructionItemVO;
}(o.BasicCommandVO);
exports.C2SGetNextExpiringConstructionItemVO = s;