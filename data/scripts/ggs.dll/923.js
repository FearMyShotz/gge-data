Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./122.js");
var s = function (e) {
  function DownloadedContentSourceLocationEnum(t, n) {
    return e.call(this, t, n) || this;
  }
  i.__extends(DownloadedContentSourceLocationEnum, e);
  Object.defineProperty(DownloadedContentSourceLocationEnum, "values", {
    get: function () {
      return DownloadedContentSourceLocationEnum._values.concat();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DownloadedContentSourceLocationEnum, "External", {
    get: function () {
      return DownloadedContentSourceLocationEnum._external;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DownloadedContentSourceLocationEnum, "Local", {
    get: function () {
      return DownloadedContentSourceLocationEnum._local;
    },
    enumerable: true,
    configurable: true
  });
  DownloadedContentSourceLocationEnum._values = [];
  DownloadedContentSourceLocationEnum._external = new DownloadedContentSourceLocationEnum("External", a.instantiationKey);
  DownloadedContentSourceLocationEnum._local = new DownloadedContentSourceLocationEnum("Local", a.instantiationKey);
  return DownloadedContentSourceLocationEnum;
}(a.BasicEnum);
exports.DownloadedContentSourceLocationEnum = s;