Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = function () {
  function DownloadRateVO() {}
  DownloadRateVO.prototype.toString = function () {
    return "DownloadRateVO{timeInS=" + String(this.timeInS) + ",sizeInKB=" + String(this.sizeInKB) + ",name=" + String(this.name) + ",sourceLocation=" + String(this.sourceLocation.name) + "}";
  };
  return DownloadRateVO;
}();
exports.DownloadRateVO = i;