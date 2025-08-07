Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = function () {
  function BrowserInfo() {
    this._name = "";
    this._version = "";
    this._isChrome = false;
    this._isFireFox = false;
    this._isSafari = false;
    this._isIE = false;
    this._isEdge = false;
    this._isPhantom = false;
    this._isIOS = false;
    this._isAndroid = false;
    this._isWindows = false;
    this._isSurface = false;
    this._isMobile = false;
    this._hasTouch = false;
    this._ua = window.navigator.userAgent;
    if (/edg([ea]|ios)/i.test(this._ua)) {
      this._isEdge = true;
      this._name = "Edge";
      this._version = this._getSecondMatch(/edg([ea]|ios)\/(\d+(\.\d+)?)/i);
    } else if (/chrome|crios|crmo/i.test(this._ua)) {
      this._name = "Chrome";
      this._version = this._getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i);
      this._isChrome = true;
    } else if (/firefox|iceweasel|fxios/i.test(this._ua)) {
      this._name = "FireFox";
      this._isFireFox = true;
      this._version = this._getFirstMatch(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i);
    } else if (/safari|applewebkit/i.test(this._ua)) {
      this._isSafari = true;
      this._name = "Safari";
      this._version = this._getFirstMatch(/version\/(\d+(\.\d+)?)/i) || "";
    } else if (/msie|trident/i.test(this._ua)) {
      this._isIE = true;
      this._name = "IE";
      this._version = this._getFirstMatch(/(?:msie |rv:)(\d+(\.\d+)?)/i);
    }
    if (/phantomjs/i.test(this._ua)) {
      this._isPhantom = true;
      this._name = "PhantomJS";
      this._version = this._getFirstMatch(/phantomjs\/(\d+(\.\d+)?)/i);
    }
    if ("maxTouchPoints" in navigator) {
      this._hasTouch = navigator.maxTouchPoints > 0;
    } else if ("msMaxTouchPoints" in navigator) {
      this._hasTouch = navigator.msMaxTouchPoints > 0;
    } else {
      var e = window.matchMedia && matchMedia("(pointer:coarse)");
      if (e && e.media === "(pointer:coarse)") {
        this._hasTouch = !!e.matches;
      } else if ("orientation" in window) {
        this._hasTouch = true;
      }
    }
    this._isIOS = !!navigator.platform && /iPad|iPhone|iPod/.test(this._ua);
    this._isAndroid = /android/i.test(this._ua);
    this._isWindows = /Windows/.test(this._ua);
    this._isSurface = this._isWindows && this._hasTouch;
    this._isMobile = this._hasTouch && (/Mobi/.test(this._ua) || this._isAndroid);
  }
  BrowserInfo.prototype._getFirstMatch = function (e) {
    var t = this._ua.match(e);
    return t && t.length > 1 && t[1] || "";
  };
  BrowserInfo.prototype._getSecondMatch = function (e) {
    var t = this._ua.match(e);
    return t && t.length > 1 && t[2] || "";
  };
  BrowserInfo.prototype.isTouchEvent = function (e) {
    return window.TouchEvent && (e instanceof TouchEvent || e.nativeEvent instanceof TouchEvent);
  };
  BrowserInfo.prototype.getTouchEvent = function (e) {
    if (window.TouchEvent) {
      if (e instanceof TouchEvent) {
        return e;
      } else if (e.nativeEvent instanceof TouchEvent) {
        return e.nativeEvent;
      } else {
        return null;
      }
    } else {
      return null;
    }
  };
  Object.defineProperty(BrowserInfo.prototype, "name", {
    get: function () {
      return this._name;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BrowserInfo.prototype, "version", {
    get: function () {
      return this._version;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BrowserInfo.prototype, "isChrome", {
    get: function () {
      return this._isChrome;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BrowserInfo.prototype, "isFireFox", {
    get: function () {
      return this._isFireFox;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BrowserInfo.prototype, "isSafari", {
    get: function () {
      return this._isSafari;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BrowserInfo.prototype, "isIE", {
    get: function () {
      return this._isIE;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BrowserInfo.prototype, "isEdge", {
    get: function () {
      return this._isEdge;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BrowserInfo.prototype, "isPhantom", {
    get: function () {
      return this._isPhantom;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BrowserInfo.prototype, "isIOS", {
    get: function () {
      return this._isIOS;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BrowserInfo.prototype, "isMobile", {
    get: function () {
      return this._isMobile;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BrowserInfo.prototype, "isAndroid", {
    get: function () {
      return this._isAndroid;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BrowserInfo.prototype, "isWindows", {
    get: function () {
      return this._isWindows;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BrowserInfo.prototype, "isSurface", {
    get: function () {
      return this._isSurface;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BrowserInfo.prototype, "hasTouch", {
    get: function () {
      return this._hasTouch;
    },
    enumerable: true,
    configurable: true
  });
  return BrowserInfo;
}();
exports.currentBrowserInfo = window.currentBrowserInfo = new i();