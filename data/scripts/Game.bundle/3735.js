Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./6.js");
var o = function () {
  function SamuraiInvasionContractVO(e = null) {
    this.rank = 0;
    this.points = 0;
    if (e) {
      this.parseServerObject(e);
    }
  }
  SamuraiInvasionContractVO.prototype.parseServerObject = function (e) {
    var t = e;
    if (t) {
      this.rank = n.int(t[0]);
      this.points = n.int(t[1]);
    }
  };
  return SamuraiInvasionContractVO;
}();
exports.SamuraiInvasionContractVO = o;