Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = function () {
  function PerformanceMonitoringVO() {}
  PerformanceMonitoringVO.prototype.toString = function () {
    return "PerformanceMonitoringVO { " + ["averageFPS=" + this.averageFPS, "maxFps=" + this.maxFps, "averageTotalMemoryUsageInMB=" + this.averageTotalMemoryUsageInMB, "averagePrivateMemoryUsageInMB=" + this.averagePrivateMemoryUsageInMB, "freeSpaceOnDeviceInMB=" + this.freeSpaceOnDeviceInMB, "loginTime=" + this.loginTime, "loginTimeMs=" + this.loginTimeMs, "downloadRateInKBs=" + this.downloadRateInKBs, "downloadContentSizeExternalInKB=" + this.downloadContentSizeExternalInKB, "downloadContentSizeLocalInKB=" + this.downloadContentSizeLocalInKB, "downloadContentAmountExternal=" + this.downloadContentAmountExternal, "downloadContentAmountLocal=" + this.downloadContentAmountLocal, "geoIpRequestTimeInMS=" + this.geoIpRequestTimeInMS].join(", ") + " }";
  };
  Object.defineProperty(PerformanceMonitoringVO.prototype, "averageFPS", {
    get: function () {
      return this._averageFPS || 0;
    },
    set: function (e) {
      this._averageFPS = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PerformanceMonitoringVO.prototype, "maxFps", {
    get: function () {
      return this._maxFps || 0;
    },
    set: function (e) {
      this._maxFps = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PerformanceMonitoringVO.prototype, "averageTotalMemoryUsageInMB", {
    get: function () {
      return this._averageTotalMemoryUsageInMB || 0;
    },
    set: function (e) {
      this._averageTotalMemoryUsageInMB = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PerformanceMonitoringVO.prototype, "averagePrivateMemoryUsageInMB", {
    get: function () {
      return this._averagePrivateMemoryUsageInMB || 0;
    },
    set: function (e) {
      this._averagePrivateMemoryUsageInMB = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PerformanceMonitoringVO.prototype, "freeSpaceOnDeviceInMB", {
    get: function () {
      return this._freeSpaceOnDeviceInMB || 0;
    },
    set: function (e) {
      this._freeSpaceOnDeviceInMB = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PerformanceMonitoringVO.prototype, "loginTime", {
    get: function () {
      return this._loginTime || 0;
    },
    set: function (e) {
      this._loginTime = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PerformanceMonitoringVO.prototype, "loginTimeMs", {
    get: function () {
      return this._loginTimeMs || 0;
    },
    set: function (e) {
      this._loginTimeMs = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PerformanceMonitoringVO.prototype, "downloadRateInKBs", {
    get: function () {
      return this._downloadRateInKBs || 0;
    },
    set: function (e) {
      this._downloadRateInKBs = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PerformanceMonitoringVO.prototype, "downloadContentSizeExternalInKB", {
    get: function () {
      return this._downloadContentSizeExternalInKB || 0;
    },
    set: function (e) {
      this._downloadContentSizeExternalInKB = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PerformanceMonitoringVO.prototype, "downloadContentSizeLocalInKB", {
    get: function () {
      return this._downloadContentSizeLocalInKB || 0;
    },
    set: function (e) {
      this._downloadContentSizeLocalInKB = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PerformanceMonitoringVO.prototype, "downloadContentAmountExternal", {
    get: function () {
      return this._downloadContentAmountExternal || 0;
    },
    set: function (e) {
      this._downloadContentAmountExternal = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PerformanceMonitoringVO.prototype, "downloadContentAmountLocal", {
    get: function () {
      return this._downloadContentAmountLocal || 0;
    },
    set: function (e) {
      this._downloadContentAmountLocal = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PerformanceMonitoringVO.prototype, "geoIpRequestTimeInMS", {
    get: function () {
      return this._geoIpRequestTimeInMS || 0;
    },
    set: function (e) {
      this._geoIpRequestTimeInMS = e;
    },
    enumerable: true,
    configurable: true
  });
  return PerformanceMonitoringVO;
}();
exports.PerformanceMonitoringVO = i;