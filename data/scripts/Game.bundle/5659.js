Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./6.js");
var o = function () {
  function SamuraiDaimyoContractProgressVO(e = null) {
    this._id = 0;
    this._points = 0;
    if (e) {
      this.parseServerData(e);
    }
  }
  SamuraiDaimyoContractProgressVO.prototype.parseServerData = function (e) {
    var t = e;
    if (t) {
      this._id = n.int(t[0]);
      this._points = n.int(t[1]);
    }
  };
  Object.defineProperty(SamuraiDaimyoContractProgressVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SamuraiDaimyoContractProgressVO.prototype, "points", {
    get: function () {
      return this._points;
    },
    enumerable: true,
    configurable: true
  });
  return SamuraiDaimyoContractProgressVO;
}();
exports.SamuraiDaimyoContractProgressVO = o;