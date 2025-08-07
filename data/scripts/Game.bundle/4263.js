Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SCraftingInfoVO() {
    return e.call(this) || this;
  }
  n.__extends(C2SCraftingInfoVO, e);
  C2SCraftingInfoVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_GET_CRAFTING_INFO;
  };
  return C2SCraftingInfoVO;
}(o.BasicCommandVO);
exports.C2SCraftingInfoVO = s;