!(function (e) {
  var r = {};
  function __webpack_require__(_) {
    if (r[_]) return r[_].exports;
    var t = (r[_] = { i: _, l: !1, exports: {} });
    return (e[_].call(t.exports, t, t.exports, __webpack_require__), (t.l = !0), t.exports);
  }
  ((__webpack_require__.m = e),
    (__webpack_require__.c = r),
    (__webpack_require__.d = function (e, r, _) {
      __webpack_require__.o(e, r) || Object.defineProperty(e, r, { enumerable: !0, get: _ });
    }),
    (__webpack_require__.r = function (e) {
      ('undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 }));
    }),
    (__webpack_require__.t = function (e, r) {
      if ((1 & r && (e = __webpack_require__(e)), 8 & r)) return e;
      if (4 & r && 'object' == typeof e && e && e.__esModule) return e;
      var _ = Object.create(null);
      if (
        (__webpack_require__.r(_),
        Object.defineProperty(_, 'default', { enumerable: !0, value: e }),
        2 & r && 'string' != typeof e)
      )
        for (var t in e)
          __webpack_require__.d(
            _,
            t,
            function (r) {
              return e[r];
            }.bind(null, t),
          );
      return _;
    }),
    (__webpack_require__.n = function (e) {
      var r =
        e && e.__esModule
          ? function getDefault() {
              return e.default;
            }
          : function getModuleExports() {
              return e;
            };
      return (__webpack_require__.d(r, 'a', r), r);
    }),
    (__webpack_require__.o = function (e, r) {
      return Object.prototype.hasOwnProperty.call(e, r);
    }),
    (__webpack_require__.p = ''),
    __webpack_require__((__webpack_require__.s = 1975)));
})({
  126: function (e, r) {
    e.exports = ggs_lib;
  },
  1975: function (e, r, _) {
    'use strict';
    Object.defineProperty(r, '__esModule', { value: !0 });
    var t = _(2);
    (window.setLoadingScreenProgress(25), t.loadCacheBreaker());
  },
  2: function (e, r, _) {
    e.exports = _(126)(29);
  },
});
//# sourceMappingURL=https://s3-eu-west-1.amazonaws.com/com.ggs-unicorns.sourcemaps/CastleLoader.bundle.5b7ddd0ef2234b54ffa9.js.map
