Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function PrivateResourceVillageVO(e, t) {
    this._uniqueID = 0;
    this._uniqueID = e;
    this._villageInfo = t;
  }
  Object.defineProperty(PrivateResourceVillageVO.prototype, "uniqueID", {
    get: function () {
      return this._uniqueID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrivateResourceVillageVO.prototype, "villageInfo", {
    get: function () {
      return this._villageInfo;
    },
    enumerable: true,
    configurable: true
  });
  return PrivateResourceVillageVO;
}();
exports.PrivateResourceVillageVO = n;