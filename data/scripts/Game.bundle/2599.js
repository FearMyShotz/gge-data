Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SChangeEmblemVO(t) {
    var i = e.call(this) || this;
    i.CAE = t;
    return i;
  }
  n.__extends(C2SChangeEmblemVO, e);
  C2SChangeEmblemVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_CHANGE_EMBLEM;
  };
  return C2SChangeEmblemVO;
}(o.BasicCommandVO);
exports.C2SChangeEmblemVO = s;