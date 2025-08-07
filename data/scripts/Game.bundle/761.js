Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SGetContructionItemsInventoryVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(C2SGetContructionItemsInventoryVO, e);
  C2SGetContructionItemsInventoryVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_GET_CONSTRUCTION_ITEMS_INVENTORY;
  };
  return C2SGetContructionItemsInventoryVO;
}(o.BasicCommandVO);
exports.C2SGetContructionItemsInventoryVO = s;