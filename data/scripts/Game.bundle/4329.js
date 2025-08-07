Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function GeneralsXPItemVO(e = null) {
    if (e) {
      this.fillFromParamXml(e);
    }
  }
  GeneralsXPItemVO.prototype.fillFromParamXml = function (e) {
    this._currencyID = parseInt(e.currencyID || "0");
    this._xpAmount = parseInt(e.xpAmount || "0");
  };
  Object.defineProperty(GeneralsXPItemVO.prototype, "currencyID", {
    get: function () {
      return this._currencyID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralsXPItemVO.prototype, "xpAmount", {
    get: function () {
      return this._xpAmount;
    },
    enumerable: true,
    configurable: true
  });
  return GeneralsXPItemVO;
}();
exports.GeneralsXPItemVO = n;