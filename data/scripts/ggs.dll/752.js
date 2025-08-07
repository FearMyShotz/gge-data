var i;
var a;
var s;
/*!
 * Globalize v1.7.0
 *
 * https://github.com/globalizejs/globalize
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2021-08-02T11:53Z
 */
a = [require("./42.js"), require("./57.js"), require("./98.js"), require("./66.js"), require("./99.js")];
if ((s = typeof (i = function (e, t) {
  var n = t._alwaysArray;
  var i = t._createError;
  var a = t._formatMessageToParts;
  var s = t._numberNumberingSystem;
  var r = t._numberPattern;
  var o = t._partsJoin;
  var l = t._partsPush;
  var u = t._runtimeBind;
  var c = t._stringPad;
  var _ = t._validateCldr;
  var d = t._validateDefaultLocale;
  var m = t._validateParameterPresence;
  var h = t._validateParameterType;
  var p = t._validateParameterTypeNumber;
  var g = t._validateParameterTypePlainObject;
  function E() {
    return i("E_MISSING_PLURAL_MODULE", "Plural module not loaded.");
  }
  function C(e, t) {
    h(e, t, e === undefined || typeof e == "string" && /^[A-Za-z]{3}$/.test(e), "3-letter currency code string as defined by ISO 4217");
  }
  function f(e, t, n) {
    var i;
    var a = "";
    var s = n.supplemental(["currencyData/fractions", e]) || n.supplemental("currencyData/fractions/DEFAULT");
    if (i = +s._digits) {
      a = "." + c("0", i).slice(0, -1) + s._rounding;
    }
    return t.replace(/\.(#+|0*[0-9]|0+[0-9]?)/g, a);
  }
  function T(e, t) {
    var n;
    var i = {};
    for (n in e) {
      if (t.test(n)) {
        i[n] = e[n];
      }
    }
    return i;
  }
  var S = /[\0-#%-\*,-;\?-\]_a-\{\}\x7F-\xA1\xA7\xAA\xAB\xAD\xB2\xB3\xB5-\xB7\xB9-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376-\u0383\u0386-\u03F5\u03F7-\u0481\u0483-\u058C\u0590-\u0605\u0609\u060A\u060C\u060D\u0610-\u06DD\u06DF-\u06E8\u06EA-\u06FC\u06FF-\u07F5\u07F7-\u07FD\u0800-\u09F1\u09F4-\u09F9\u09FC-\u0AF0\u0AF2-\u0B6F\u0B71-\u0BF2\u0BFB-\u0C7E\u0C80-\u0D4E\u0D50-\u0D78\u0D7A-\u0E3E\u0E40-\u0F00\u0F04-\u0F12\u0F14\u0F18\u0F19\u0F20-\u0F33\u0F35\u0F37\u0F39-\u0FBD\u0FC6\u0FCD\u0FD0-\u0FD4\u0FD9-\u109D\u10A0-\u138F\u139A-\u166C\u166E-\u17DA\u17DC-\u193F\u1941-\u19DD\u1A00-\u1B60\u1B6B-\u1B73\u1B7D-\u1FBC\u1FBE\u1FC2-\u1FCC\u1FD0-\u1FDC\u1FE0-\u1FEC\u1FF0-\u1FFC\u1FFF-\u2043\u2045-\u2051\u2053-\u2079\u207D-\u2089\u208D-\u209F\u20C0-\u20FF\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u218C-\u218F\u2308-\u230B\u2329\u232A\u2427-\u243F\u244B-\u249B\u24EA-\u24FF\u2768-\u2793\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2B74\u2B75\u2B96\u2C00-\u2CE4\u2CEB-\u2E4F\u2E52-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u2FEF\u2FFC-\u3003\u3005-\u3011\u3014-\u301F\u3021-\u3035\u3038-\u303D\u3040-\u309A\u309D-\u318F\u3192-\u3195\u31A0-\u31BF\u31E4-\u31FF\u321F-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48F\uA4C7-\uA6FF\uA717-\uA71F\uA722-\uA788\uA78B-\uA827\uA82C-\uA835\uA83A-\uAA76\uAA7A-\uAB5A\uAB5C-\uAB69\uAB6C-\uD7FF\uE000-\uFB28\uFB2A-\uFBB1\uFBC2-\uFDFB\uFDFE-\uFE61\uFE63\uFE67\uFE68\uFE6A-\uFF03\uFF05-\uFF0A\uFF0C-\uFF1B\uFF1F-\uFF3D\uFF3F\uFF41-\uFF5B\uFF5D\uFF5F-\uFFDF\uFFE7\uFFEF-\uFFFB\uFFFE\uFFFF]|\uD800[\uDC00-\uDD36\uDD40-\uDD78\uDD8A\uDD8B\uDD8F\uDD9D-\uDD9F\uDDA1-\uDDCF\uDDFD-\uDFFF]|[\uD801\uD803\uD804\uD806\uD808-\uD819\uD81B-\uD82E\uD830-\uD833\uD837\uD839\uD83A\uD83F-\uDBFF][\uDC00-\uDFFF]|\uD802[\uDC00-\uDC76\uDC79-\uDEC7\uDEC9-\uDFFF]|\uD805[\uDC00-\uDF3E\uDF40-\uDFFF]|\uD807[\uDC00-\uDFD4\uDFF2-\uDFFF]|\uD81A[\uDC00-\uDF3B\uDF40-\uDF44\uDF46-\uDFFF]|\uD82F[\uDC00-\uDC9B\uDC9D-\uDFFF]|\uD834[\uDCF6-\uDCFF\uDD27\uDD28\uDD65-\uDD69\uDD6D-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDDE9-\uDDFF\uDE42-\uDE44\uDE46-\uDEFF\uDF57-\uDFFF]|\uD835[\uDC00-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE87-\uDFFF]|\uD838[\uDC00-\uDD4E\uDD50-\uDEFE\uDF00-\uDFFF]|\uD83B[\uDC00-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDD2D\uDD2F-\uDEEF\uDEF2-\uDFFF]|\uD83C[\uDC2C-\uDC2F\uDC94-\uDC9F\uDCAF\uDCB0\uDCC0\uDCD0\uDCF6-\uDD0C\uDDAE-\uDDE5\uDE03-\uDE0F\uDE3C-\uDE3F\uDE49-\uDE4F\uDE52-\uDE5F\uDE66-\uDEFF]|\uD83D[\uDED8-\uDEDF\uDEED-\uDEEF\uDEFD-\uDEFF\uDF74-\uDF7F\uDFD9-\uDFDF\uDFEC-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE\uDCAF\uDCB2-\uDCFF\uDD79\uDDCC\uDE54-\uDE5F\uDE6E\uDE6F\uDE75-\uDE77\uDE7B-\uDE7F\uDE87-\uDE8F\uDEA9-\uDEAF\uDEB7-\uDEBF\uDEC3-\uDECF\uDED7-\uDEFF\uDF93\uDFCB-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
  var y = /[\0-\x1F!-#%-\*,-;\?-\]_a-\{\}\x7F-\x9F\xA1\xA7\xAA\xAB\xAD\xB2\xB3\xB5-\xB7\xB9-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376-\u0383\u0386-\u03F5\u03F7-\u0481\u0483-\u058C\u0590-\u0605\u0609\u060A\u060C\u060D\u0610-\u06DD\u06DF-\u06E8\u06EA-\u06FC\u06FF-\u07F5\u07F7-\u07FD\u0800-\u09F1\u09F4-\u09F9\u09FC-\u0AF0\u0AF2-\u0B6F\u0B71-\u0BF2\u0BFB-\u0C7E\u0C80-\u0D4E\u0D50-\u0D78\u0D7A-\u0E3E\u0E40-\u0F00\u0F04-\u0F12\u0F14\u0F18\u0F19\u0F20-\u0F33\u0F35\u0F37\u0F39-\u0FBD\u0FC6\u0FCD\u0FD0-\u0FD4\u0FD9-\u109D\u10A0-\u138F\u139A-\u166C\u166E-\u167F\u1681-\u17DA\u17DC-\u193F\u1941-\u19DD\u1A00-\u1B60\u1B6B-\u1B73\u1B7D-\u1FBC\u1FBE\u1FC2-\u1FCC\u1FD0-\u1FDC\u1FE0-\u1FEC\u1FF0-\u1FFC\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u2043\u2045-\u2051\u2053-\u205E\u2060-\u2079\u207D-\u2089\u208D-\u209F\u20C0-\u20FF\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u218C-\u218F\u2308-\u230B\u2329\u232A\u2427-\u243F\u244B-\u249B\u24EA-\u24FF\u2768-\u2793\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2B74\u2B75\u2B96\u2C00-\u2CE4\u2CEB-\u2E4F\u2E52-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u2FEF\u2FFC-\u2FFF\u3001-\u3003\u3005-\u3011\u3014-\u301F\u3021-\u3035\u3038-\u303D\u3040-\u309A\u309D-\u318F\u3192-\u3195\u31A0-\u31BF\u31E4-\u31FF\u321F-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48F\uA4C7-\uA6FF\uA717-\uA71F\uA722-\uA788\uA78B-\uA827\uA82C-\uA835\uA83A-\uAA76\uAA7A-\uAB5A\uAB5C-\uAB69\uAB6C-\uD7FF\uE000-\uFB28\uFB2A-\uFBB1\uFBC2-\uFDFB\uFDFE-\uFE61\uFE63\uFE67\uFE68\uFE6A-\uFF03\uFF05-\uFF0A\uFF0C-\uFF1B\uFF1F-\uFF3D\uFF3F\uFF41-\uFF5B\uFF5D\uFF5F-\uFFDF\uFFE7\uFFEF-\uFFFB\uFFFE\uFFFF]|\uD800[\uDC00-\uDD36\uDD40-\uDD78\uDD8A\uDD8B\uDD8F\uDD9D-\uDD9F\uDDA1-\uDDCF\uDDFD-\uDFFF]|[\uD801\uD803\uD804\uD806\uD808-\uD819\uD81B-\uD82E\uD830-\uD833\uD837\uD839\uD83A\uD83F-\uDBFF][\uDC00-\uDFFF]|\uD802[\uDC00-\uDC76\uDC79-\uDEC7\uDEC9-\uDFFF]|\uD805[\uDC00-\uDF3E\uDF40-\uDFFF]|\uD807[\uDC00-\uDFD4\uDFF2-\uDFFF]|\uD81A[\uDC00-\uDF3B\uDF40-\uDF44\uDF46-\uDFFF]|\uD82F[\uDC00-\uDC9B\uDC9D-\uDFFF]|\uD834[\uDCF6-\uDCFF\uDD27\uDD28\uDD65-\uDD69\uDD6D-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDDE9-\uDDFF\uDE42-\uDE44\uDE46-\uDEFF\uDF57-\uDFFF]|\uD835[\uDC00-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE87-\uDFFF]|\uD838[\uDC00-\uDD4E\uDD50-\uDEFE\uDF00-\uDFFF]|\uD83B[\uDC00-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDD2D\uDD2F-\uDEEF\uDEF2-\uDFFF]|\uD83C[\uDC2C-\uDC2F\uDC94-\uDC9F\uDCAF\uDCB0\uDCC0\uDCD0\uDCF6-\uDD0C\uDDAE-\uDDE5\uDE03-\uDE0F\uDE3C-\uDE3F\uDE49-\uDE4F\uDE52-\uDE5F\uDE66-\uDEFF]|\uD83D[\uDED8-\uDEDF\uDEED-\uDEEF\uDEFD-\uDEFF\uDF74-\uDF7F\uDFD9-\uDFDF\uDFEC-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE\uDCAF\uDCB2-\uDCFF\uDD79\uDDCC\uDE54-\uDE5F\uDE6E\uDE6F\uDE75-\uDE77\uDE7B-\uDE7F\uDE87-\uDE8F\uDEA9-\uDEAF\uDEB7-\uDEBF\uDEC3-\uDECF\uDED7-\uDEFF\uDF93\uDFCB-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
  function I(e, t, n) {
    var i;
    var a;
    var r;
    var o;
    var l = {
      "[:digit:]": /\d/,
      "[:^S:]": S,
      "[[:^S:]&[:^Z:]]": y
    };
    if (n.style === "code") {
      r = e;
    } else {
      o = ["symbol"];
      if (n.symbolForm === "narrow") {
        o.unshift("symbol-alt-narrow");
      }
      o.some(function (n) {
        return r = t.main(["numbers/currencies", e, n]);
      });
    }
    i = ["beforeCurrency", "afterCurrency"].map(function (e) {
      return t.main(["numbers", "currencyFormats-numberSystem-" + s(t), "currencySpacing", e]);
    });
    a = t.main(["numbers", "currencyFormats-numberSystem-" + s(t), n.style === "accounting" ? "accounting" : "standard"]);
    return {
      pattern: a = f(e, a, t).split(";").map(function (e) {
        return e.split("¤").map(function (e, t) {
          var n = l[i[t].currencyMatch];
          var a = l[i[t].surroundingMatch];
          var s = "";
          n = n.test(r.charAt(t ? r.length - 1 : 0));
          a = a.test(e.charAt(t ? 0 : e.length - 1).replace(/[#@,.]/g, "0"));
          if (n && e && a) {
            s = i[t].insertBetween;
          }
          return (t ? s : "") + e + (t ? "" : s);
        }).join("¤");
      }).join(";"),
      symbol: r
    };
  }
  function v(e, t, n) {
    if (t && n) {
      return function currencyToPartsFormatter(i) {
        m(i, "value");
        p(i, "value");
        return function (e, t, n) {
          var i;
          var s;
          var r = [];
          var o = n.displayNames || {};
          var u = n.unitPatterns;
          i = o["displayName-count-" + t] || o["displayName-count-other"] || o.displayName || n.currency;
          s = u["unitPattern-count-" + t] || u["unitPattern-count-other"];
          a(s, [e, i]).forEach(function (e) {
            if (e.type === "variable" && e.name === "0") {
              e.value.forEach(function (e) {
                l(r, e.type, e.value);
              });
            } else if (e.type === "variable" && e.name === "1") {
              l(r, "currency", e.value);
            } else {
              l(r, "literal", e.value);
            }
          });
          return r;
        }(e(i), t(i), n);
      };
    } else {
      return function currencyToPartsFormatter(n) {
        i = e(n);
        a = t;
        i.forEach(function (e) {
          if (e.type === "currency") {
            e.value = a;
          }
        });
        return i;
        var i;
        var a;
      };
    }
  }
  function validateRequiredCldr(e, t) {
    _(e, t, {
      skip: [/numbers\/currencies\/[^/]+\/symbol-alt-/, /supplemental\/currencyData\/fractions\/[A-Za-z]{3}$/]
    });
  }
  t.currencyFormatter = t.prototype.currencyFormatter = function (e, t) {
    var n;
    var i;
    var a;
    m(e, "currency");
    C(e, "currency");
    g(t, "options");
    n = [e, t = t || {}];
    a = function (e) {
      return function currencyFormatter(t) {
        return o(e(t));
      };
    }(i = this.currencyToPartsFormatter(e, t));
    u(n, this.cldr, a, [i]);
    return a;
  };
  t.currencyToPartsFormatter = t.prototype.currencyToPartsFormatter = function (e, t) {
    var i;
    var a;
    var o;
    var l;
    var c;
    var _;
    var h;
    m(e, "currency");
    C(e, "currency");
    g(t, "options");
    a = this.cldr;
    i = [e, t = t || {}];
    h = t.style || "symbol";
    d(a);
    a.on("get", validateRequiredCldr);
    try {
      c = {
        accounting: I,
        code: I,
        name: function (e, t) {
          var n = r("decimal", t);
          n = f(e, n, t);
          return {
            displayNames: T(t.main(["numbers/currencies", e]), /^displayName/),
            pattern: n,
            unitPatterns: function (e) {
              return T(e.main(["numbers", "currencyFormats-numberSystem-" + s(e)]), /^unitPattern/);
            }(t)
          };
        },
        symbol: I
      }[h](e, a, t);
    } finally {
      a.off("get", validateRequiredCldr);
    }
    (t = function (e, t) {
      var i;
      var a = {};
      t = n(t);
      for (i in e) {
        if (t.indexOf(i) === -1) {
          a[i] = e[i];
        }
      }
      return a;
    }(t, "style")).raw = c.pattern;
    if (h === "symbol" || h === "accounting" || h === "code") {
      o = this.numberToPartsFormatter(t);
      _ = v(o, c.symbol);
      u(i, a, _, [o, c.symbol]);
    } else {
      o = this.numberToPartsFormatter(t);
      l = this.plural !== undefined ? this.pluralGenerator() : E;
      _ = v(o, l, c);
      u(i, a, _, [o, l, c]);
    }
    return _;
  };
  t.currencyParser = t.prototype.currencyParser = function () {};
  t.formatCurrency = t.prototype.formatCurrency = function (e, t, n) {
    m(e, "value");
    p(e, "value");
    return this.currencyFormatter(t, n)(e);
  };
  t.formatCurrencyToParts = t.prototype.formatCurrencyToParts = function (e, t, n) {
    m(e, "value");
    p(e, "value");
    return this.currencyToPartsFormatter(t, n)(e);
  };
  t.parseCurrency = t.prototype.parseCurrency = function () {};
  return t;
}) == "function" ? i.apply(exports, a) : i) !== undefined) {
  module.exports = s;
}