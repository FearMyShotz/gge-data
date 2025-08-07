Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SGetConstructionCraftingInfoVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(C2SGetConstructionCraftingInfoVO, e);
  C2SGetConstructionCraftingInfoVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_GET_CONSTRUCTION_CRAFTING_INFO;
  };
  return C2SGetConstructionCraftingInfoVO;
}(o.BasicCommandVO);
exports.C2SGetConstructionCraftingInfoVO = s;