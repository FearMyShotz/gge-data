(function (e) {
  var r = {};
  function __webpack_require__(_) {
    if (r[_]) {
      return r[_].exports;
    }
    var t = r[_] = {
      i: _,
      l: false,
      exports: {}
    };
    e[_].call(t.exports, t, t.exports, __webpack_require__);
    t.l = true;
    return t.exports;
  }
  __webpack_require__.m = e;
  __webpack_require__.c = r;
  __webpack_require__.d = function (e, r, _) {
    if (!__webpack_require__.o(e, r)) {
      Object.defineProperty(e, r, {
        enumerable: true,
        get: _
      });
    }
  };
  __webpack_require__.r = function (e) {
    if (typeof Symbol != "undefined" && Symbol.toStringTag) {
      Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      });
    }
    Object.defineProperty(e, "__esModule", {
      value: true
    });
  };
  __webpack_require__.t = function (e, r) {
    if (r & 1) {
      e = __webpack_require__(e);
    }
    if (r & 8) {
      return e;
    }
    if (r & 4 && typeof e == "object" && e && e.__esModule) {
      return e;
    }
    var _ = Object.create(null);
    __webpack_require__.r(_);
    Object.defineProperty(_, "default", {
      enumerable: true,
      value: e
    });
    if (r & 2 && typeof e != "string") {
      for (var t in e) {
        __webpack_require__.d(_, t, function (r) {
          return e[r];
        }.bind(null, t));
      }
    }
    return _;
  };
  __webpack_require__.n = function (e) {
    var r = e && e.__esModule ? function getDefault() {
      return e.default;
    } : function getModuleExports() {
      return e;
    };
    __webpack_require__.d(r, "a", r);
    return r;
  };
  __webpack_require__.o = function (e, r) {
    return Object.prototype.hasOwnProperty.call(e, r);
  };
  __webpack_require__.p = "";
  __webpack_require__(__webpack_require__.s = 1976);
})({
  126: function (e, r) {
    e.exports = ggs_lib;
  },
  1976: function (e, r, _) {
    'use strict';

    Object.defineProperty(r, "__esModule", {
      value: true
    });
    var t = _(2);
    window.setLoadingScreenProgress(25);
    t.loadCacheBreaker();
  },
  2: function (e, r, _) {
    e.exports = _(126)(29);
  }
}); //# sourceMappingURL=https://s3-eu-west-1.amazonaws.com/com.ggs-unicorns.sourcemaps/CastleLoader.bundle.1f3ba2b89d9e01d64a52.js.map