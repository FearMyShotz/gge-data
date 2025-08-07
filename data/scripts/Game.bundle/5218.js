Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function TeaserVO() {
    this._id = 0;
    this._timestamp = 0;
  }
  TeaserVO.prototype.fillFromParamObject = function (e) {
    this.id = o.int(e.FID);
    this.timestamp = e.FTS;
  };
  Object.defineProperty(TeaserVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    set: function (e) {
      this._id = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TeaserVO.prototype, "timestamp", {
    get: function () {
      return this._timestamp;
    },
    set: function (e) {
      this._timestamp = e;
    },
    enumerable: true,
    configurable: true
  });
  return TeaserVO;
}();
exports.TeaserVO = n;
var o = require("./6.js");