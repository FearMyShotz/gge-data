Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SGetAllExpiredConstructionItemsVO() {
    CONSTRUCTOR_HACK;
    return e.call(this) || this;
  }
  n.__extends(C2SGetAllExpiredConstructionItemsVO, e);
  C2SGetAllExpiredConstructionItemsVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_GET_ALL_EXPIRED_CONSTRUCTION_ITEM_EVENT;
  };
  return C2SGetAllExpiredConstructionItemsVO;
}(o.BasicCommandVO);
exports.C2SGetAllExpiredConstructionItemsVO = s;