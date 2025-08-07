Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SShowConstructionListVO() {
    return e.call(this) || this;
  }
  n.__extends(C2SShowConstructionListVO, e);
  C2SShowConstructionListVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_SHOW_CONSTRUCTION_LIST;
  };
  return C2SShowConstructionListVO;
}(o.BasicCommandVO);
exports.C2SShowConstructionListVO = s;