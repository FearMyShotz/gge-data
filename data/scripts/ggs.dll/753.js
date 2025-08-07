var i;
var a;
var s;
/*!
 * Globalize v1.7.0 2021-08-02T11:53Z Released under the MIT license
 * http://git.io/TrdQbw
 */
a = [require("./42.js"), require("./57.js"), require("./98.js"), require("./66.js"), require("./99.js")];
if ((s = typeof (i = function (e, t) {
  var n = t._createError;
  var i = t._createErrorUnsupportedFeature;
  var a = t._formatMessage;
  var s = t._isPlainObject;
  var r = t._looseMatching;
  var o = t._numberNumberingSystemDigitsMap;
  var l = t._numberSymbol;
  var u = t._partsJoin;
  var c = t._partsPush;
  var _ = t._regexpEscape;
  var d = t._removeLiteralQuotes;
  var m = t._runtimeBind;
  var h = t._stringPad;
  var p = t._validate;
  var g = t._validateCldr;
  var E = t._validateDefaultLocale;
  var C = t._validateParameterPresence;
  var f = t._validateParameterType;
  var T = t._validateParameterTypePlainObject;
  var S = t._validateParameterTypeString;
  function y(e, t) {
    f(e, t, e === undefined || e instanceof Date, "Date");
  }
  var I = "GyYuUrQqMLlwWEecdDFghHKkmsSAzZOvVXx".split("").reduce(function (e, t, n) {
    e[t] = n;
    return e;
  }, {});
  function v(e, t) {
    t = t || function (e, t, n) {
      e[n] = t;
      return e;
    };
    return Object.keys(e).reduce(function (n, i) {
      return t(n, i, e[i]);
    }, {});
  }
  var A = v({
    e: "eEc",
    L: "ML"
  }, function (e, t, n) {
    n.split("").forEach(function (n) {
      e[n] = t;
    });
    return e;
  });
  function O(e) {
    return A[e] || e;
  }
  var L = /([a-z])\1*|'([^']|'')+'|''|./gi;
  function D(e, t) {
    var n;
    var i = "";
    for (n = 0; n < t; n++) {
      i += e;
    }
    return i;
  }
  function b(e, t, n) {
    var i;
    var a;
    var s;
    var r;
    a = e.match(/S/g);
    i = a ? a.length : 0;
    r = e.replace(/S/g, "");
    t = function expandBestMatchFormat(e, t) {
      var n;
      var i;
      var a;
      var s;
      var r;
      var o;
      var l;
      var u;
      var c = O;
      u = e.match(L);
      a = t.match(L);
      n = 0;
      for (; n < a.length; n++) {
        s = a[n].charAt(0);
        r = a[n].length;
        i = 0;
        for (; i < u.length; i++) {
          o = u[i].charAt(0);
          l = u[i].length;
          if (c(s) === c(o) && r < l) {
            a[n] = D(s, l);
          }
        }
      }
      return a.join("");
    }(r, t);
    if ((s = t.lastIndexOf("s")) !== -1 && i !== 0) {
      t = t.slice(0, s + 1) + n + D("S", i) + t.slice(s + 1);
    }
    return t;
  }
  function N(e, t) {
    var n;
    var i;
    var a;
    var s;
    var r;
    var o;
    var l;
    var u;
    var c;
    var _ = O;
    if (e === t) {
      return 0;
    }
    e = e.match(L);
    t = t.match(L);
    if (e.length !== t.length) {
      return -1;
    }
    a = 1;
    u = 0;
    for (; u < e.length; u++) {
      n = e[u].charAt(0);
      o = _(n);
      l = null;
      c = 0;
      for (; c < t.length && (i = t[c].charAt(0), l = _(i), o !== l); c++) {
        l = null;
      }
      if (l === null) {
        return -1;
      }
      s = e[u].length;
      r = t[c].length;
      a += Math.abs(s - r);
      if (n !== i) {
        a += 1;
      }
      if (s < 3 && r >= 3 || s >= 3 && r < 3) {
        a += 20;
      }
    }
    return a;
  }
  function R(e, t) {
    var n;
    var i;
    var a;
    var s;
    var r;
    var o = "dates/calendars/gregorian/dateTimeFormats/availableFormats";
    var u = b;
    var c = N;
    a = e.main([o, t]);
    if (t && !a) {
      n = e.main([o]);
      s = [];
      for (r in n) {
        s.push({
          skeleton: r,
          pattern: n[r],
          rate: c(t, r)
        });
      }
      if ((s = s.filter(function (e) {
        return e.rate > -1;
      }).sort(function (e, t) {
        return e.rate - t.rate;
      })).length) {
        i = l("decimal", e);
        a = u(t, s[0].pattern, i);
      }
    }
    return a;
  }
  function P(e, t) {
    var i;
    var s;
    var r;
    var o;
    var l;
    var u;
    var c = R;
    function combineDateTime(e, n, i) {
      return a(t.main(["dates/calendars/gregorian/dateTimeFormats", e]), [i, n]);
    }
    switch (true) {
      case "skeleton" in e:
        (function validateSkeleton(e) {
          var t;
          var i = I;
          e.replace(/[^GyYuUrQqMLlwWEecdDFghHKkmsSAzZOvVXx]/, function (t) {
            throw n("E_INVALID_OPTIONS", "Invalid field `{invalidField}` of skeleton `{value}`", {
              invalidField: t,
              type: "skeleton",
              value: e
            });
          });
          e.split("").every(function (a) {
            if (i[a] < t) {
              throw n("E_INVALID_OPTIONS", "Invalid order `{invalidField}` of skeleton `{value}`", {
                invalidField: a,
                type: "skeleton",
                value: e
              });
            }
            t = i[a];
            return true;
          });
        })(r = (r = e.skeleton).replace(/j/g, function () {
          return t.supplemental.timeData.preferred();
        }));
        if (s = c(t, r)) {
          break;
        }
        o = r.split(/[^hHKkmsSAzZOvVXx]/).slice(-1)[0];
        i = r.split(/[^GyYuUrQqMLlwWdDFgEec]/)[0];
        i = c(t, i);
        o = c(t, o);
        l = /(MMMM|LLLL).*[Ec]/.test(i) ? "full" : /MMMM|LLLL/.test(i) ? "long" : /MMM|LLL/.test(i) ? "medium" : "short";
        s = i && o ? combineDateTime(l, i, o) : i || o;
        break;
      case "date" in e:
      case "time" in e:
        s = t.main(["dates/calendars/gregorian", "date" in e ? "dateFormats" : "timeFormats", e.date || e.time]);
        break;
      case "datetime" in e:
        s = combineDateTime(e.datetime, t.main(["dates/calendars/gregorian/dateFormats", e.datetime]), t.main(["dates/calendars/gregorian/timeFormats", e.datetime]));
        break;
      case "raw" in e:
        s = e.raw;
        break;
      default:
        throw n("E_INVALID_PAR_VALUE", "Invalid `{name}` value ({value}).", {
          name: {
            name: "options",
            value: e
          },
          value: u
        });
    }
    return s;
  }
  var B = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  function M(e) {
    return B.indexOf(e.supplemental.weekData.firstDay());
  }
  function F(e, t, n, i) {
    var a;
    var s;
    if (n) {
      if (s = i.main(["dates/timeZoneNames/zone", n, e < 4 ? "short" : "long", t])) {
        return s;
      } else {
        a = i.supplemental(["metaZones/metazoneInfo/timezone", n, 0, "usesMetazone/_mzone"]);
        return i.main(["dates/timeZoneNames/metazone", a, e < 4 ? "short" : "long", t]);
      }
    }
  }
  function U(e) {
    return e.split(";").map(function (e) {
      return e.slice(0, e.indexOf("H") + 1);
    }).join(";");
  }
  function G(e, t) {
    return e.split(";").map(function (e) {
      var n = e.split(/H+/);
      n.splice(1, 0, t);
      return n.join("");
    }).join(";");
  }
  function w(e, t) {
    function n() {
      return t;
    }
    n.dataCacheKey = e;
    return n;
  }
  var k = function () {
    function definePrivateProperty(e, t, n) {
      Object.defineProperty(e, t, {
        value: n
      });
    }
    function getUntilsIndex(e, t) {
      for (var n = 0, i = e.getTime(); n < t.length - 1 && i >= t[n];) {
        n++;
      }
      return n;
    }
    function setWrap(e) {
      var t = this.getTimezoneOffset();
      var n = e();
      this.original.setTime(new Date(this.getTime()));
      var i = this.getTimezoneOffset();
      if (i - t) {
        this.original.setMinutes(this.original.getMinutes() + i - t);
      }
      return n;
    }
    function e(e, t) {
      definePrivateProperty(this, "original", new Date(e.getTime()));
      definePrivateProperty(this, "local", new Date(e.getTime()));
      definePrivateProperty(this, "timeZoneData", t);
      definePrivateProperty(this, "setWrap", setWrap);
      if (!t.untils || !t.offsets || !t.isdsts) {
        throw new Error("Invalid IANA data");
      }
      this.setTime(this.local.getTime() - this.getTimezoneOffset() * 60 * 1000);
    }
    e.prototype.clone = function () {
      return new e(this.original, this.timeZoneData);
    };
    ["getFullYear", "getMonth", "getDate", "getDay", "getHours", "getMinutes", "getSeconds", "getMilliseconds"].forEach(function (t) {
      var n = "getUTC" + t.substr(3);
      e.prototype[t] = function () {
        return this.local[n]();
      };
    });
    e.prototype.valueOf = e.prototype.getTime = function () {
      return this.local.getTime() + this.getTimezoneOffset() * 60 * 1000;
    };
    e.prototype.getTimezoneOffset = function () {
      var e = getUntilsIndex(this.original, this.timeZoneData.untils);
      return this.timeZoneData.offsets[e];
    };
    ["setFullYear", "setMonth", "setDate", "setHours", "setMinutes", "setSeconds", "setMilliseconds"].forEach(function (t) {
      var n = "setUTC" + t.substr(3);
      e.prototype[t] = function (e) {
        var t = this.local;
        return this.setWrap(function () {
          return t[n](e);
        });
      };
    });
    e.prototype.setTime = function (e) {
      return this.local.setTime(e);
    };
    e.prototype.isDST = function () {
      var e = getUntilsIndex(this.original, this.timeZoneData.untils);
      return Boolean(this.timeZoneData.isdsts[e]);
    };
    e.prototype.inspect = function () {
      var e = getUntilsIndex(this.original, this.timeZoneData.untils);
      var t = this.timeZoneData.abbrs;
      return this.local.toISOString().replace(/Z$/, "") + " " + (t && t[e] + " " || this.getTimezoneOffset() * -1 + " ") + (this.isDST() ? "(daylight savings)" : "");
    };
    e.prototype.toDate = function () {
      return new Date(this.getTime());
    };
    ["toISOString", "toJSON", "toUTCString"].forEach(function (t) {
      e.prototype[t] = function () {
        return this.toDate()[t]();
      };
    });
    return e;
  }();
  function x(e, t) {
    e = e instanceof k ? e.clone() : new Date(e.getTime());
    switch (t) {
      case "year":
        e.setMonth(0);
      case "month":
        e.setDate(1);
      case "day":
        e.setHours(0);
      case "hour":
        e.setMinutes(0);
      case "minute":
        e.setSeconds(0);
      case "second":
        e.setMilliseconds(0);
    }
    return e;
  }
  function W(e, t, n) {
    return e < t || e > n;
  }
  function V(e, t) {
    var n;
    var i = {};
    for (n in e) {
      if (t.test(n)) {
        i[n] = e[n];
      }
    }
    return i;
  }
  function H(e, t) {
    return (e.getDay() - t + 7) % 7;
  }
  function j(e) {
    return Math.floor((t = x(e, "year"), (e.getTime() - t.getTime()) / 86400000));
    var t;
  }
  var q = v({
    era: "G",
    year: "yY",
    quarter: "qQ",
    month: "ML",
    week: "wW",
    day: "dDF",
    weekday: "ecE",
    dayperiod: "a",
    hour: "hHkK",
    minute: "m",
    second: "sSA",
    zone: "zvVOxX"
  }, function (e, t, n) {
    n.split("").forEach(function (n) {
      e[n] = t;
    });
    return e;
  });
  function K(e, t, n, i) {
    var a;
    var s = e.getTimezoneOffset();
    a = Math.abs(s);
    i = i || {
      1: function (e) {
        return h(e, 1);
      },
      2: function (e) {
        return h(e, 2);
      }
    };
    return t.split(";")[s > 0 ? 1 : 0].replace(":", n).replace(/HH?/, function (e) {
      return i[e.length](Math.floor(a / 60));
    }).replace(/mm/, function () {
      return i[2](Math.floor(a % 60));
    }).replace(/ss/, function () {
      return i[2](Math.floor(a % 1 * 60));
    });
  }
  function optionsHasStyle(e) {
    return e.skeleton !== undefined || e.date !== undefined || e.time !== undefined || e.datetime !== undefined || e.raw !== undefined;
  }
  function validateRequiredCldr(e, t) {
    g(e, t, {
      skip: [/dates\/calendars\/gregorian\/dateTimeFormats\/availableFormats/, /dates\/calendars\/gregorian\/days\/.*\/short/, /dates\/timeZoneNames\/zone/, /dates\/timeZoneNames\/metazone/, /globalize-iana/, /supplemental\/metaZones/, /supplemental\/timeData\/(?!001)/, /supplemental\/weekData\/(?!001)/]
    });
  }
  function validateOptionsPreset(e) {
    validateOptionsPresetEach("date", e);
    validateOptionsPresetEach("time", e);
    validateOptionsPresetEach("datetime", e);
  }
  function validateOptionsPresetEach(e, t) {
    var n = t[e];
    p("E_INVALID_OPTIONS", "Invalid `{{type}: \"{value}\"}`.", n === undefined || ["short", "medium", "long", "full"].indexOf(n) !== -1, {
      type: e,
      value: n
    });
  }
  function validateOptionsSkeleton(e, t) {
    p("E_INVALID_OPTIONS", "Invalid `{skeleton: \"{value}\"}` based on provided CLDR.", t === undefined || typeof e == "string" && e, {
      type: "skeleton",
      value: t
    });
  }
  function validateRequiredIana(e) {
    return function (t, n) {
      if (/globalize-iana/.test(t)) {
        p("E_MISSING_IANA_TZ", "Missing required IANA timezone content for `{timeZone}`: `{path}`.", n, {
          path: t.replace(/globalize-iana\//, ""),
          timeZone: e
        });
      }
    };
  }
  t.loadTimeZone = function (t) {
    var n = {
      "globalize-iana": t
    };
    C(t, "json");
    T(t, "json");
    e.load(n);
  };
  t.dateFormatter = t.prototype.dateFormatter = function (e) {
    var t;
    var n;
    var i;
    T(e, "options");
    if (!optionsHasStyle(e = e || {})) {
      e.skeleton = "yMd";
    }
    t = [e];
    i = function (e) {
      return function dateFormatter(t) {
        return u(e(t));
      };
    }(n = this.dateToPartsFormatter(e));
    m(t, this.cldr, i, [n]);
    return i;
  };
  t.dateToPartsFormatter = t.prototype.dateToPartsFormatter = function (e) {
    var t;
    var n;
    var s;
    var r;
    var o;
    var u;
    var _;
    var p;
    var g;
    T(e, "options");
    n = this.cldr;
    if (!optionsHasStyle(e = e || {})) {
      e.skeleton = "yMd";
    }
    validateOptionsPreset(e);
    E(n);
    p = e.timeZone;
    S(p, "options.timeZone");
    t = [e];
    n.on("get", validateRequiredCldr);
    if (p) {
      g = validateRequiredIana(p);
      n.on("get", g);
    }
    try {
      validateOptionsSkeleton(o = P(e, n), e.skeleton);
      u = function (e, t, n) {
        var s = {
          numberFormatters: {},
          pattern: e,
          timeSeparator: l("timeSeparator", t)
        };
        var r = ["abbreviated", "wide", "narrow"];
        function setNumberFormatterPattern(e) {
          s.numberFormatters[e] = h("", e);
        }
        if (n) {
          s.timeZoneData = w("iana/" + n, {
            offsets: t.get(["globalize-iana/zoneData", n, "offsets"]),
            untils: t.get(["globalize-iana/zoneData", n, "untils"]),
            isdsts: t.get(["globalize-iana/zoneData", n, "isdsts"])
          });
        }
        e.replace(L, function (o) {
          var l;
          var u;
          var c;
          var _;
          var d;
          var m;
          var h;
          u = o.charAt(0);
          m = o.length;
          if (u === "j") {
            s.preferredTime = u = t.supplemental.timeData.preferred();
          }
          if (u === "Z" && m === 4) {
            u = "O";
            m = 4;
          }
          if (u === "z") {
            h = F(m, "standard", n, t);
            c = F(m, "daylight", n, t);
            if (h) {
              s.standardTzName = h;
            }
            if (c) {
              s.daylightTzName = c;
            }
            if (!h || !c) {
              u = "O";
              if (m < 4) {
                m = 1;
              }
            }
          }
          if (u === "v") {
            if (!(d = F(m, "generic", n, t))) {
              u = "V";
              m = 4;
            }
          }
          switch (u) {
            case "G":
              s.eras = t.main(["dates/calendars/gregorian/eras", m <= 3 ? "eraAbbr" : m === 4 ? "eraNames" : "eraNarrow"]);
              break;
            case "y":
              _ = true;
              break;
            case "Y":
              s.firstDay = M(t);
              s.minDays = t.supplemental.weekData.minDays();
              _ = true;
              break;
            case "u":
            case "U":
              throw i({
                feature: "year pattern `" + u + "`"
              });
            case "Q":
            case "q":
              if (m > 2) {
                s.quarters ||= {};
                s.quarters[u] ||= {};
                s.quarters[u][m] = t.main(["dates/calendars/gregorian/quarters", u === "Q" ? "format" : "stand-alone", r[m - 3]]);
              } else {
                _ = true;
              }
              break;
            case "M":
            case "L":
              if (m > 2) {
                s.months ||= {};
                s.months[u] ||= {};
                s.months[u][m] = t.main(["dates/calendars/gregorian/months", u === "M" ? "format" : "stand-alone", r[m - 3]]);
              } else {
                _ = true;
              }
              break;
            case "w":
            case "W":
              s.firstDay = M(t);
              s.minDays = t.supplemental.weekData.minDays();
              _ = true;
              break;
            case "d":
            case "D":
            case "F":
              _ = true;
              break;
            case "g":
              throw i({
                feature: "Julian day pattern `g`"
              });
            case "e":
            case "c":
              if (m <= 2) {
                s.firstDay = M(t);
                _ = true;
                break;
              }
            case "E":
              s.days ||= {};
              s.days[u] ||= {};
              s.days[u][m] = m === 6 ? t.main(["dates/calendars/gregorian/days", u === "c" ? "stand-alone" : "format", "short"]) || t.main(["dates/calendars/gregorian/days", u === "c" ? "stand-alone" : "format", "abbreviated"]) : t.main(["dates/calendars/gregorian/days", u === "c" ? "stand-alone" : "format", r[m < 3 ? 0 : m - 3]]);
              break;
            case "a":
              s.dayPeriods = {
                am: t.main("dates/calendars/gregorian/dayPeriods/format/wide/am"),
                pm: t.main("dates/calendars/gregorian/dayPeriods/format/wide/pm")
              };
              break;
            case "h":
            case "H":
            case "K":
            case "k":
            case "m":
            case "s":
            case "S":
            case "A":
              _ = true;
              break;
            case "v":
              if (m !== 1 && m !== 4) {
                throw i({
                  feature: "timezone pattern `" + e + "`"
                });
              }
              s.genericTzName = d;
              break;
            case "V":
              if (m === 1) {
                throw i({
                  feature: "timezone pattern `" + e + "`"
                });
              }
              if (n) {
                if (m === 2) {
                  s.timeZoneName = n;
                  break;
                }
                var p;
                var g = t.main(["dates/timeZoneNames/zone", n, "exemplarCity"]);
                if (m === 3) {
                  g ||= t.main(["dates/timeZoneNames/zone/Etc/Unknown/exemplarCity"]);
                  p = g;
                }
                if (g && m === 4) {
                  p = a(t.main("dates/timeZoneNames/regionFormat"), [g]);
                }
                if (p) {
                  s.timeZoneName = p;
                  break;
                }
              }
              if (o === "v") {
                m = 1;
              }
            case "O":
              s.gmtFormat = t.main("dates/timeZoneNames/gmtFormat");
              s.gmtZeroFormat = t.main("dates/timeZoneNames/gmtZeroFormat");
              l = t.main("dates/timeZoneNames/hourFormat");
              s.hourFormat = m < 4 ? [U(l), G(l, "H")] : G(l, "HH");
            case "Z":
            case "X":
            case "x":
              setNumberFormatterPattern(1);
              setNumberFormatterPattern(2);
          }
          if (_) {
            setNumberFormatterPattern(m);
          }
        });
        return s;
      }(o, n, p);
    } finally {
      n.off("get", validateRequiredCldr);
      if (g) {
        n.off("get", g);
      }
    }
    s = u.numberFormatters;
    delete u.numberFormatters;
    for (r in s) {
      s[r] = this.numberFormatter({
        raw: s[r]
      });
    }
    _ = function (e, t) {
      return function dateToPartsFormatter(n) {
        C(n, "value");
        y(n, "value");
        return function (e, t, n) {
          var i = [];
          var a = n.timeSeparator;
          if (n.timeZoneData) {
            e = new k(e, n.timeZoneData());
          }
          n.pattern.replace(L, function (s) {
            var r;
            var o;
            var l;
            var u = s.charAt(0);
            var _ = s.length;
            if (u === "j") {
              u = n.preferredTime;
            }
            if (u === "Z") {
              if (_ < 4) {
                u = "x";
                _ = 4;
              } else if (_ < 5) {
                u = "O";
                _ = 4;
              } else {
                u = "X";
                _ = 5;
              }
            }
            if (u === "z") {
              if (e.isDST) {
                l = e.isDST() ? n.daylightTzName : n.standardTzName;
              }
              if (!l) {
                u = "O";
                if (_ < 4) {
                  _ = 1;
                }
              }
            }
            switch (u) {
              case "G":
                l = n.eras[e.getFullYear() < 0 ? 0 : 1];
                break;
              case "y":
                l = e.getFullYear();
                if (_ === 2) {
                  l = +(l = String(l)).substr(l.length - 2);
                }
                break;
              case "Y":
                (l = new Date(e.getTime())).setDate(l.getDate() + 7 - H(e, n.firstDay) - n.firstDay - n.minDays);
                l = l.getFullYear();
                if (_ === 2) {
                  l = +(l = String(l)).substr(l.length - 2);
                }
                break;
              case "Q":
              case "q":
                l = Math.ceil((e.getMonth() + 1) / 3);
                if (_ > 2) {
                  l = n.quarters[u][_][l];
                }
                break;
              case "M":
              case "L":
                l = e.getMonth() + 1;
                if (_ > 2) {
                  l = n.months[u][_][l];
                }
                break;
              case "w":
                l = H(x(e, "year"), n.firstDay);
                l = Math.ceil((j(e) + l) / 7) - (7 - l >= n.minDays ? 0 : 1);
                break;
              case "W":
                l = H(x(e, "month"), n.firstDay);
                l = Math.ceil((e.getDate() + l) / 7) - (7 - l >= n.minDays ? 0 : 1);
                break;
              case "d":
                l = e.getDate();
                break;
              case "D":
                l = j(e) + 1;
                break;
              case "F":
                l = Math.floor(e.getDate() / 7) + 1;
                break;
              case "e":
              case "c":
                if (_ <= 2) {
                  l = H(e, n.firstDay) + 1;
                  break;
                }
              case "E":
                l = B[e.getDay()];
                l = n.days[u][_][l];
                break;
              case "a":
                l = n.dayPeriods[e.getHours() < 12 ? "am" : "pm"];
                break;
              case "h":
                l = e.getHours() % 12 || 12;
                break;
              case "H":
                l = e.getHours();
                break;
              case "K":
                l = e.getHours() % 12;
                break;
              case "k":
                l = e.getHours() || 24;
                break;
              case "m":
                l = e.getMinutes();
                break;
              case "s":
                l = e.getSeconds();
                break;
              case "S":
                l = Math.round(e.getMilliseconds() * Math.pow(10, _ - 3));
                break;
              case "A":
                l = Math.round(function (e) {
                  return e - x(e, "day");
                }(e) * Math.pow(10, _ - 3));
                break;
              case "z":
                break;
              case "v":
                if (n.genericTzName) {
                  l = n.genericTzName;
                  break;
                }
              case "V":
                if (n.timeZoneName) {
                  l = n.timeZoneName;
                  break;
                }
                if (s === "v") {
                  _ = 1;
                }
              case "O":
                if (e.getTimezoneOffset() === 0) {
                  l = n.gmtZeroFormat;
                } else {
                  if (_ < 4) {
                    r = e.getTimezoneOffset();
                    r = n.hourFormat[r % 60 - r % 1 == 0 ? 0 : 1];
                  } else {
                    r = n.hourFormat;
                  }
                  l = K(e, r, a, t);
                  l = n.gmtFormat.replace(/\{0\}/, l);
                }
                break;
              case "X":
                if (e.getTimezoneOffset() === 0) {
                  l = "Z";
                  break;
                }
              case "x":
                r = e.getTimezoneOffset();
                if (_ === 1 && r % 60 - r % 1 != 0) {
                  _ += 1;
                }
                if ((_ === 4 || _ === 5) && r % 1 == 0) {
                  _ -= 2;
                }
                l = K(e, l = ["+HH;-HH", "+HHmm;-HHmm", "+HH:mm;-HH:mm", "+HHmmss;-HHmmss", "+HH:mm:ss;-HH:mm:ss"][_ - 1], ":");
                break;
              case ":":
                l = a;
                break;
              case "'":
                l = d(s);
                break;
              default:
                l = s;
            }
            if (typeof l == "number") {
              l = t[_](l);
            }
            o = q[u];
            c(i, o || "literal", l);
          });
          return i;
        }(n, e, t);
      };
    }(s, u);
    m(t, n, _, [s, u]);
    return _;
  };
  t.dateParser = t.prototype.dateParser = function (e) {
    var t;
    var n;
    var u;
    var c;
    var h;
    var p;
    var g;
    var f;
    T(e, "options");
    n = this.cldr;
    if (!optionsHasStyle(e = e || {})) {
      e.skeleton = "yMd";
    }
    validateOptionsPreset(e);
    E(n);
    g = e.timeZone;
    S(g, "options.timeZone");
    t = [e];
    try {
      n.on("get", validateRequiredCldr);
      if (g) {
        n.on("get", validateRequiredIana(g));
      }
      validateOptionsSkeleton(h = P(e, n), e.skeleton);
      f = function (e, t, n) {
        var u;
        var c = {
          pattern: r(e)
        };
        var d = l("timeSeparator", t);
        var m = ["abbreviated", "wide", "narrow"];
        function hourFormatRe(e, t, n, i) {
          var a;
          n ||= "\\d";
          t ||= "{0}";
          a = e.replace("+", "\\+").replace(/HH|mm|ss/g, "((" + n + "){2})").replace(/H|m/g, "((" + n + "){1,2})");
          if (i) {
            a = a.replace(/:/g, i);
          }
          a = a.split(";").map(function (e) {
            return t.replace("{0}", e);
          }).join("|");
          return new RegExp("^" + a);
        }
        function populateProperties(e, t) {
          if (!/(timeZoneNames\/zone|supplemental\/metaZones|timeZoneNames\/metazone|timeZoneNames\/regionFormat|timeZoneNames\/gmtFormat)/.test(e)) {
            if (t) {
              if ((e = e.replace(/^.*\/dates\//, "").replace(/calendars\//, "")) === "gregorian/dayPeriods/format/wide") {
                t = V(t, /^am|^pm/);
              }
              t = s(t) ? Object.keys(t).map(function (e) {
                return [e, new RegExp("^" + _(r(t[e])))];
              }).sort(function (e, t) {
                return t[1].source.length - e[1].source.length;
              }) : r(t);
              c[e] = t;
            }
          }
        }
        u = (u = o(t)) ? "[" + u + "]" : "\\d";
        c.digitsRe = new RegExp(u);
        t.on("get", populateProperties);
        e.match(L).forEach(function (s) {
          var o;
          var l;
          var h;
          var p;
          var g;
          var E;
          l = s.charAt(0);
          g = s.length;
          if (l === "Z") {
            if (g < 5) {
              l = "O";
              g = 4;
            } else {
              l = "X";
              g = 5;
            }
          }
          if (l === "z") {
            E = F(g, "standard", n, t);
            h = F(g, "daylight", n, t);
            E &&= _(r(E));
            h &&= _(r(h));
            if (E || h) {
              c.standardOrDaylightTzName = new RegExp("^" + function regexpSourceSomeTerm(e) {
                return "(" + e.filter(function (e) {
                  return e;
                }).reduce(function (e, t) {
                  return e + "|" + t;
                }) + ")";
              }([E, h]));
            }
            if (!E || !h) {
              l = "O";
              if (g < 4) {
                g = 1;
              }
            }
          }
          if (l === "v") {
            if (g !== 1 && g !== 4) {
              throw i({
                feature: "timezone pattern `" + e + "`"
              });
            }
            var C = F(g, "generic", n, t);
            if (C) {
              c.genericTzName = new RegExp("^" + _(r(C)));
              l = "O";
            } else {
              l = "V";
              g = 4;
            }
          }
          switch (l) {
            case "G":
              t.main(["dates/calendars/gregorian/eras", g <= 3 ? "eraAbbr" : g === 4 ? "eraNames" : "eraNarrow"]);
              break;
            case "u":
            case "U":
              throw i({
                feature: "year pattern `" + l + "`"
              });
            case "Q":
            case "q":
              if (g > 2) {
                t.main(["dates/calendars/gregorian/quarters", l === "Q" ? "format" : "stand-alone", m[g - 3]]);
              }
              break;
            case "M":
            case "L":
              if (g > 2) {
                t.main(["dates/calendars/gregorian/months", l === "M" ? "format" : "stand-alone", m[g - 3]]);
              }
              break;
            case "g":
              throw i({
                feature: "Julian day pattern `g`"
              });
            case "e":
            case "c":
              if (g <= 2) {
                break;
              }
            case "E":
              if (g === 6) {
                if (!t.main(["dates/calendars/gregorian/days", [l === "c" ? "stand-alone" : "format"], "short"])) {
                  t.main(["dates/calendars/gregorian/days", [l === "c" ? "stand-alone" : "format"], "abbreviated"]);
                }
              } else {
                t.main(["dates/calendars/gregorian/days", [l === "c" ? "stand-alone" : "format"], m[g < 3 ? 0 : g - 3]]);
              }
              break;
            case "a":
              t.main("dates/calendars/gregorian/dayPeriods/format/wide");
              break;
            case "V":
              if (g === 1) {
                throw i({
                  feature: "timezone pattern `" + e + "`"
                });
              }
              if (n) {
                if (g === 2) {
                  c.timeZoneName = n;
                  c.timeZoneNameRe = new RegExp("^" + _(n));
                  break;
                }
                var f;
                var T = t.main(["dates/timeZoneNames/zone", n, "exemplarCity"]);
                if (g === 3) {
                  T ||= t.main(["dates/timeZoneNames/zone/Etc/Unknown/exemplarCity"]);
                  f = T;
                }
                if (T && g === 4) {
                  f = a(t.main("dates/timeZoneNames/regionFormat"), [T]);
                }
                if (f) {
                  f = r(f);
                  c.timeZoneName = f;
                  c.timeZoneNameRe = new RegExp("^" + _(f));
                }
              }
              if (s === "v") {
                g = 1;
              }
            case "z":
            case "O":
              p = t.main("dates/timeZoneNames/gmtFormat");
              t.main("dates/timeZoneNames/gmtZeroFormat");
              t.main("dates/timeZoneNames/hourFormat");
              c["timeZoneNames/gmtZeroFormatRe"] = new RegExp("^" + _(c["timeZoneNames/gmtZeroFormat"]));
              o = c["timeZoneNames/hourFormat"];
              c["timeZoneNames/hourFormat"] = (g < 4 ? [G(o, "H"), U(o)] : [G(o, "HH")]).map(function (e) {
                return hourFormatRe(e, p, u, d);
              });
            case "X":
            case "x":
              c.x = [["+HHmm;-HHmm", "+HH;-HH"], ["+HHmm;-HHmm"], ["+HH:mm;-HH:mm"], ["+HHmmss;-HHmmss", "+HHmm;-HHmm"], ["+HH:mm:ss;-HH:mm:ss", "+HH:mm;-HH:mm"]][g - 1].map(function (e) {
                return hourFormatRe(e);
              });
          }
        });
        t.off("get", populateProperties);
        return c;
      }(h, n, g);
      c = function (e, t) {
        var n = {
          preferredTimeData: e.supplemental.timeData.preferred()
        };
        if (t) {
          n.timeZoneData = w("iana/" + t, {
            offsets: e.get(["globalize-iana/zoneData", t, "offsets"]),
            untils: e.get(["globalize-iana/zoneData", t, "untils"]),
            isdsts: e.get(["globalize-iana/zoneData", t, "isdsts"])
          });
        }
        return n;
      }(n, g);
    } finally {
      n.off("get", validateRequiredCldr);
      if (g) {
        n.off("get", validateRequiredIana(g));
      }
    }
    p = function (e, t, n) {
      return function dateParser(a) {
        C(a, "value");
        S(a, "value");
        return function (e, t, n) {
          var a;
          var s;
          var r;
          var o;
          var l;
          var u;
          var c;
          var _;
          var d;
          var m = new Date();
          var h = [];
          if (n.timeZoneData) {
            m = new k(m, n.timeZoneData());
          }
          if (!t.length) {
            return null;
          }
          if (!t.every(function (e) {
            var t;
            var d;
            var p;
            if (e.type === "literal") {
              return true;
            }
            t = e.type.charAt(0);
            p = e.type.length;
            if (t === "j") {
              t = n.preferredTimeData;
            }
            switch (t) {
              case "G":
                h.push(0);
                l = +e.value;
                break;
              case "y":
                d = e.value;
                if (p === 2) {
                  if (W(d, 0, 99)) {
                    return false;
                  }
                  if ((d += Math.floor(m.getFullYear() / 100) * 100) > m.getFullYear() + 20) {
                    d -= 100;
                  }
                }
                m.setFullYear(d);
                h.push(0);
                break;
              case "Y":
                throw i({
                  feature: "year pattern `" + t + "`"
                });
              case "Q":
              case "q":
                break;
              case "M":
              case "L":
                d = p <= 2 ? e.value : +e.value;
                if (W(d, 1, 12)) {
                  return false;
                }
                o = d;
                h.push(1);
                break;
              case "w":
              case "W":
                break;
              case "d":
                s = e.value;
                h.push(2);
                break;
              case "D":
                r = e.value;
                h.push(2);
                break;
              case "F":
                break;
              case "e":
              case "c":
              case "E":
                break;
              case "a":
                a = e.value;
                break;
              case "h":
                d = e.value;
                if (W(d, 1, 12)) {
                  return false;
                }
                u = c = true;
                m.setHours(d === 12 ? 0 : d);
                h.push(3);
                break;
              case "K":
                d = e.value;
                if (W(d, 0, 11)) {
                  return false;
                }
                u = c = true;
                m.setHours(d);
                h.push(3);
                break;
              case "k":
                d = e.value;
                if (W(d, 1, 24)) {
                  return false;
                }
                u = true;
                m.setHours(d === 24 ? 0 : d);
                h.push(3);
                break;
              case "H":
                d = e.value;
                if (W(d, 0, 23)) {
                  return false;
                }
                u = true;
                m.setHours(d);
                h.push(3);
                break;
              case "m":
                d = e.value;
                if (W(d, 0, 59)) {
                  return false;
                }
                m.setMinutes(d);
                h.push(4);
                break;
              case "s":
                d = e.value;
                if (W(d, 0, 59)) {
                  return false;
                }
                m.setSeconds(d);
                h.push(5);
                break;
              case "A":
                m.setHours(0);
                m.setMinutes(0);
                m.setSeconds(0);
              case "S":
                d = Math.round(e.value * Math.pow(10, 3 - p));
                m.setMilliseconds(d);
                h.push(6);
                break;
              case "z":
              case "Z":
              case "O":
              case "v":
              case "V":
              case "X":
              case "x":
                if (typeof e.value == "number") {
                  _ = e.value;
                }
            }
            return true;
          })) {
            return null;
          }
          if (u && !(!a ^ c)) {
            return null;
          }
          if (l === 0) {
            m.setFullYear(m.getFullYear() * -1 + 1);
          }
          if (o !== undefined) {
            (function (e, t) {
              var n = e.getDate();
              e.setDate(1);
              e.setMonth(t);
              (function (e, t) {
                var n = new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate();
                e.setDate(t < 1 ? 1 : t < n ? t : n);
              })(e, n);
            })(m, o - 1);
          }
          if (s !== undefined) {
            if (W(s, 1, function (e) {
              return new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate();
            }(m))) {
              return null;
            }
            m.setDate(s);
          } else if (r !== undefined) {
            if (W(r, 1, (d = m.getFullYear(), new Date(d, 1, 29).getMonth() === 1 ? 366 : 365))) {
              return null;
            }
            m.setMonth(0);
            m.setDate(r);
          }
          if (c && a === "pm") {
            m.setHours(m.getHours() + 12);
          }
          if (_ !== undefined) {
            m.setMinutes(m.getMinutes() + _ - m.getTimezoneOffset());
          }
          h = Math.max.apply(null, h);
          if ((m = x(m, ["year", "month", "day", "hour", "minute", "second", "milliseconds"][h])) instanceof k) {
            m = m.toDate();
          }
          return m;
        }(0, function (e, t, n) {
          var i;
          var a;
          var s = [];
          var o = ["abbreviated", "wide", "narrow"];
          i = n.digitsRe;
          e = r(e);
          a = n.pattern.match(L).every(function (a) {
            var r;
            var l;
            var u;
            var c;
            var m = {};
            function hourFormatParse(t, n) {
              var i;
              var a;
              var s = e.match(t);
              n = n || function (e) {
                return +e;
              };
              return !!s && (a = s[1], s.length < 6 ? (i = a ? 1 : 3, m.value = n(s[i]) * 60) : s.length < 10 ? (i = a ? [1, 3] : [5, 7], m.value = n(s[i[0]]) * 60 + n(s[i[1]])) : (i = a ? [1, 3, 5] : [7, 9, 11], m.value = n(s[i[0]]) * 60 + n(s[i[1]]) + n(s[i[2]]) / 60), a && (m.value *= -1), true);
            }
            function oneDigitIfLengthOne() {
              if (l === 1) {
                u = true;
                return c = i;
              }
            }
            function oneOrTwoDigitsIfLengthOneOrTwo() {
              if (l === 1 || l === 2) {
                u = true;
                return c = new RegExp("^(" + i.source + "){1,2}");
              }
            }
            function twoDigitsIfLengthTwo() {
              if (l === 2) {
                u = true;
                return c = new RegExp("^(" + i.source + "){2}");
              }
            }
            function lookup(t) {
              var i = n[t.join("/")];
              if (i) {
                i.some(function (t) {
                  if (t[1].test(e)) {
                    m.value = t[0];
                    c = t[1];
                    return true;
                  }
                });
                return null;
              } else {
                return null;
              }
            }
            m.type = a;
            r = a.charAt(0);
            l = a.length;
            if (r === "Z") {
              if (l < 4) {
                r = "x";
                l = 4;
              } else if (l < 5) {
                r = "O";
                l = 4;
              } else {
                r = "X";
                l = 5;
              }
            }
            if (r === "z" && n.standardOrDaylightTzName) {
              m.value = null;
              c = n.standardOrDaylightTzName;
            }
            if (r === "v") {
              if (n.genericTzName) {
                m.value = null;
                c = n.genericTzName;
              } else {
                r = "V";
                l = 4;
              }
            }
            if (r === "V" && n.timeZoneName) {
              m.value = l === 2 ? n.timeZoneName : null;
              c = n.timeZoneNameRe;
            }
            switch (r) {
              case "G":
                lookup(["gregorian/eras", l <= 3 ? "eraAbbr" : l === 4 ? "eraNames" : "eraNarrow"]);
                break;
              case "y":
              case "Y":
                u = true;
                c = l === 1 ? new RegExp("^(" + i.source + ")+") : l === 2 ? new RegExp("^(" + i.source + "){1,2}") : new RegExp("^(" + i.source + "){" + l + ",}");
                break;
              case "Q":
              case "q":
                if (!oneDigitIfLengthOne() && !twoDigitsIfLengthTwo()) {
                  lookup(["gregorian/quarters", r === "Q" ? "format" : "stand-alone", o[l - 3]]);
                }
                break;
              case "M":
              case "L":
                if (!oneOrTwoDigitsIfLengthOneOrTwo()) {
                  lookup(["gregorian/months", r === "M" ? "format" : "stand-alone", o[l - 3]]);
                }
                break;
              case "D":
                if (l <= 3) {
                  u = true;
                  c = new RegExp("^(" + i.source + "){" + l + ",3}");
                }
                break;
              case "W":
              case "F":
                oneDigitIfLengthOne();
                break;
              case "e":
              case "c":
                if (l <= 2) {
                  if (!oneDigitIfLengthOne()) {
                    twoDigitsIfLengthTwo();
                  }
                  break;
                }
              case "E":
                if (l === 6) {
                  if (!lookup(["gregorian/days", [r === "c" ? "stand-alone" : "format"], "short"])) {
                    lookup(["gregorian/days", [r === "c" ? "stand-alone" : "format"], "abbreviated"]);
                  }
                } else {
                  lookup(["gregorian/days", [r === "c" ? "stand-alone" : "format"], o[l < 3 ? 0 : l - 3]]);
                }
                break;
              case "a":
                lookup(["gregorian/dayPeriods/format/wide"]);
                break;
              case "w":
                if (!function oneOrTwoDigitsIfLengthOne() {
                  if (l === 1) {
                    u = true;
                    return c = new RegExp("^(" + i.source + "){1,2}");
                  }
                }()) {
                  twoDigitsIfLengthTwo();
                }
                break;
              case "d":
              case "h":
              case "H":
              case "K":
              case "k":
              case "j":
              case "m":
              case "s":
                oneOrTwoDigitsIfLengthOneOrTwo();
                break;
              case "S":
                u = true;
                c = new RegExp("^(" + i.source + "){" + l + "}");
                break;
              case "A":
                u = true;
                c = new RegExp("^(" + i.source + "){" + (l + 5) + "}");
                break;
              case "v":
              case "V":
              case "z":
                if (c && c.test(e)) {
                  break;
                }
                if (r === "V" && l === 2) {
                  break;
                }
              case "O":
                if (e === n["timeZoneNames/gmtZeroFormat"]) {
                  m.value = 0;
                  c = n["timeZoneNames/gmtZeroFormatRe"];
                } else if (!n["timeZoneNames/hourFormat"].some(function (e) {
                  if (hourFormatParse(e, t)) {
                    c = e;
                    return true;
                  }
                })) {
                  return null;
                }
                break;
              case "X":
                if (e === "Z") {
                  m.value = 0;
                  c = /^Z/;
                  break;
                }
              case "x":
                if (!n.x.some(function (e) {
                  if (hourFormatParse(e)) {
                    c = e;
                    return true;
                  }
                })) {
                  return null;
                }
                break;
              case "'":
                m.type = "literal";
                c = new RegExp("^" + _(d(a)));
                break;
              default:
                m.type = "literal";
                c = new RegExp("^" + _(a));
            }
            return !!c && !(e = e.replace(c, function (e) {
              m.lexeme = e;
              if (u) {
                m.value = t(e);
              }
              return "";
            }), !m.lexeme || u && isNaN(m.value) || (s.push(m), 0));
          });
          if (e !== "") {
            a = false;
          }
          if (a) {
            return s;
          } else {
            return [];
          }
        }(a, e, n), t) || null;
      };
    }(u = this.numberParser({
      raw: "0"
    }), c, f);
    m(t, n, p, [u, c, f]);
    return p;
  };
  t.formatDate = t.prototype.formatDate = function (e, t) {
    C(e, "value");
    y(e, "value");
    return this.dateFormatter(t)(e);
  };
  t.formatDateToParts = t.prototype.formatDateToParts = function (e, t) {
    C(e, "value");
    y(e, "value");
    return this.dateToPartsFormatter(t)(e);
  };
  t.parseDate = t.prototype.parseDate = function (e, t) {
    C(e, "value");
    S(e, "value");
    return this.dateParser(t)(e);
  };
  return t;
}) == "function" ? i.apply(exports, a) : i) !== undefined) {
  module.exports = s;
}