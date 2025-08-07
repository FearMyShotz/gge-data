Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./558.js");
var a = function () {
  function RuntimeType() {}
  RuntimeType.WEB = "web";
  RuntimeType.NATIVE = "native";
  RuntimeType.UNKNOWN = "Unknown";
  return RuntimeType;
}();
exports.RuntimeType = a;
var s = function () {
  function OperatingSystemType() {}
  OperatingSystemType.IOS = "iOS";
  OperatingSystemType.ANDROID = "Android";
  OperatingSystemType.WINDOWS_PHONE = "Windows Phone";
  OperatingSystemType.WINDOWS_PC = "Windows PC";
  OperatingSystemType.MAC_OS = "Mac OS";
  OperatingSystemType.LINUX = "Linux";
  OperatingSystemType.UNKNOW = "Unknown";
  return OperatingSystemType;
}();
exports.OperatingSystemType = s;
var r = function () {
  function Capabilities() {}
  Object.defineProperty(Capabilities, "language", {
    get: function () {
      return Capabilities.$language;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Capabilities, "isMobile", {
    get: function () {
      return Capabilities.$isMobile;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Capabilities, "os", {
    get: function () {
      return Capabilities.$os;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Capabilities, "runtimeType", {
    get: function () {
      return Capabilities.$runtimeType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Capabilities, "supportVersion", {
    get: function () {
      return Capabilities.$supportVersion;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Capabilities, "engineVersion", {
    get: function () {
      return "5.0.15";
    },
    enumerable: true,
    configurable: true
  });
  Capabilities.$setNativeCapabilities = function (e) {
    var t = e.split("-");
    if (t.length <= 4) {
      var n = t[0];
      switch (n) {
        case "android":
          n = "Android";
          break;
        case "ios":
          n = "iOS";
      }
      Capabilities.$os = n;
      var i = t[2].substring(1, t[2].length);
      Capabilities.$supportVersion = i;
    }
  };
  Object.defineProperty(Capabilities, "renderMode", {
    get: function () {
      return Capabilities.$renderMode;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Capabilities, "boundingClientWidth", {
    get: function () {
      return Capabilities.$boundingClientWidth;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Capabilities, "boundingClientHeight", {
    get: function () {
      return Capabilities.$boundingClientHeight;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Capabilities, "screenResolutionX", {
    get: function () {
      return window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName("body")[0].clientWidth;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Capabilities, "screenResolutionY", {
    get: function () {
      return window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName("body")[0].clientHeight;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Capabilities, "version", {
    get: function () {
      return navigator.userAgent;
    },
    enumerable: true,
    configurable: true
  });
  Capabilities.$language = "en-US";
  Capabilities.$os = s.UNKNOW;
  Capabilities.$runtimeType = a.UNKNOWN;
  Capabilities.$supportVersion = "Unknown";
  Capabilities.$renderMode = "Unknown";
  Capabilities.$boundingClientWidth = 0;
  Capabilities.$boundingClientHeight = 0;
  return Capabilities;
}();
exports.Capabilities = r;
r.$isMobile = function () {
  if (!window.navigator) {
    return true;
  }
  var e = navigator.userAgent.toLowerCase();
  return e.includes("mobile") || e.includes("android");
}();
r.$runtimeType = window.navigator ? a.WEB : a.NATIVE;
r.$os = function () {
  var e = navigator.userAgent.toLowerCase();
  if (r.$isMobile) {
    if (!e.includes("windows") && (e.includes("iphone") || e.includes("ipad") || e.includes("ipod"))) {
      return s.IOS;
    }
    if (e.includes("android") && e.includes("linux")) {
      return s.ANDROID;
    }
    if (e.includes("windows")) {
      return s.WINDOWS_PHONE;
    }
  } else {
    if (e.includes("windows nt")) {
      return s.WINDOWS_PC;
    }
    if (e.includes("mac os")) {
      return s.MAC_OS;
    }
    if (e.includes("linux")) {
      return s.LINUX;
    }
  }
  return s.UNKNOW;
}();
r.$language = typeof i == "function" ? i() : i;