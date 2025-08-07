Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastleTradeInfoVO() {}
  CastleTradeInfoVO.prototype.fillCastleList = function (e) {
    if (e && (this.castleList = [], e != null)) {
      for (var t = 0, i = e; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          var a = new o.CastleTradeVO();
          a.fillFromParamObject(n);
          this.castleList.push(a);
        }
      }
    }
  };
  CastleTradeInfoVO.prototype.getCastleInfoById = function (e) {
    if (this.castleList != null) {
      for (var t = 0, i = this.castleList; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.startCastleID == e) {
          return n;
        }
      }
    }
    return null;
  };
  return CastleTradeInfoVO;
}();
exports.CastleTradeInfoVO = n;
var o = require("./5601.js");