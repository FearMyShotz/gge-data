Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SShowInventoryVO() {
    return e.call(this) || this;
  }
  n.__extends(C2SShowInventoryVO, e);
  C2SShowInventoryVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_SHOW_INVENTORY;
  };
  return C2SShowInventoryVO;
}(o.BasicCommandVO);
exports.C2SShowInventoryVO = s;