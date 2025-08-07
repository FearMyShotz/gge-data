Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SVisitedShopVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(C2SVisitedShopVO, e);
  C2SVisitedShopVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_VISITED_SHOP;
  };
  return C2SVisitedShopVO;
}(o.BasicCommandVO);
exports.C2SVisitedShopVO = s;