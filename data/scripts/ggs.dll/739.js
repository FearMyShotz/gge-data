Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./320.js");
var a = require("./321.js");
var s = require("./50.js");
var r = require("./97.js");
var o = require("./322.js");
var l = require("./747.js");
var u = require("./748.js");
var c = require("./2.js");
var _ = require("./749.js");
var d = c.getLogger("LocalizationJS.GlobalizeTextProcessor");
var m = require("./750.js");
function h() {}
m.pluralGenerator = m.prototype.pluralGenerator = function (e) {
  return h;
};
var p = function () {
  function GlobalizeTextProcessor(e, t = true) {
    this._cldrURL = e;
    this._isCaseSensitive = t;
    this._initialized = false;
    this._localizeReplacements = false;
    this.loadedLocales = new Set(["en", "de"]);
    this.cachedTranslations = new u.LeastRecentUsedCache();
    this._isCaseSensitive = t;
  }
  Object.defineProperty(GlobalizeTextProcessor.prototype, "languageVO", {
    set: function (e) {
      this._languageVO = e;
    },
    enumerable: true,
    configurable: true
  });
  GlobalizeTextProcessor.prototype.initialize = function (e, t, n) {
    this._initialized = true;
    this.languageVO = e;
    m.load(n || o.CLDRJSONData);
    m.locale(this._languageVO.locale);
    if (!this.loadedLocales.has(this._languageVO.locale)) {
      this.loadedLocales.add(this._languageVO.locale);
    }
    this.changeNumberFormatters();
    if (t != null) {
      this.setTexts(t);
    } else {
      d.warn("the json translations file is empty");
    }
    this.clearCaches();
  };
  GlobalizeTextProcessor.prototype.setLanguageAsync = function (e, t) {
    var n = this;
    this.languageVO = e;
    return new Promise(function (e, i) {
      if (!n._initialized) {
        i("the default CLDR data is not loaded : en, de, supplemental");
      }
      n.setLocaleAsync(n._languageVO.locale).then(function () {
        if (t) {
          n.setTexts(t);
        }
        n.changeNumberFormatters();
        e();
      }).catch(function (e) {
        i("The CLDR JSON failed: " + e);
      });
    });
  };
  GlobalizeTextProcessor.prototype.setLocaleAsync = function (e) {
    var t = this;
    this.clearCaches();
    return new Promise(function (n, i) {
      if (t.loadedLocales.has(e)) {
        m.locale(e);
        n();
      } else {
        t.downloadCLDRAsync(e).then(n).catch(i);
      }
    });
  };
  GlobalizeTextProcessor.prototype.finalize = function () {
    if (this._initialized) {
      this._initialized = false;
      this.languageVO = null;
      this.clearCaches();
    }
  };
  GlobalizeTextProcessor.prototype.getLocale = function () {
    d.debug("this.languageVO.locale ", this._languageVO.locale, "  Globalize.locale ", m.locale().locale);
    return this._languageVO.locale;
  };
  GlobalizeTextProcessor.prototype.getTimeZone = function () {
    d.warn("getTimeZone: not implemented");
    return "";
  };
  GlobalizeTextProcessor.prototype.objectToLowerCase = function (e) {
    return Object.keys(e).reduce(function (t, n) {
      t[n.toLowerCase()] = e[n];
      return t;
    }, {});
  };
  GlobalizeTextProcessor.prototype.setTexts = function (e) {
    this._textsVersionNo = a.TextsParser.parseVersionNo(e);
    this._textsDeployTime = a.TextsParser.parseDeployTime(e);
    e = this._isCaseSensitive ? e : this.objectToLowerCase(e);
    var t = JSON.stringify(e);
    if (this._languageVO.isLanguageWrittenRightToLeft) {
      t = _.reversePunctuation(t);
    }
    var n = JSON.parse(t);
    delete n["@metadata"];
    var i = {
      [this._languageVO.locale]: n
    };
    m.loadMessages(i);
  };
  GlobalizeTextProcessor.prototype.setData = function (e) {};
  GlobalizeTextProcessor.prototype.hasText = function (e) {
    if (typeof e != "string") {
      return false;
    }
    var t = this._isCaseSensitive ? e : e.toLowerCase();
    return !!m.cldr.get(["globalize-messages/" + this._languageVO.locale, t]);
  };
  GlobalizeTextProcessor.prototype.getText = function (e, n = null) {
    if (typeof e != "string") {
      return e;
    }
    var i = this._isCaseSensitive ? e : e.toLowerCase();
    var a = this.cachedTranslations.get(i);
    if (!a) {
      if (a = m.cldr.get(["globalize-messages/" + this._languageVO.locale, i]) || "") {
        this.cachedTranslations.put(i, a);
      }
    }
    return exports.doReplacements(n, a, this._languageVO.isLanguageWrittenRightToLeft);
  };
  GlobalizeTextProcessor.prototype.isEmpty = function (e) {
    return e === null || Object.keys(e).length === 0;
  };
  GlobalizeTextProcessor.prototype.text = function (e, t, n) {
    var i;
    if (t === undefined) {
      t = null;
    }
    if (n === undefined) {
      n = true;
    }
    var a = {};
    if (!this.isEmpty(t)) {
      var r;
      var o = undefined;
      for (r in t) {
        if (r.length !== 0) {
          if ((o = t[r]) instanceof s.AbstractTextContentVO) {
            a[r] = o.compose();
          } else if (this._localizeReplacements && o !== "") {
            if (isNaN(Number(o))) {
              a[r] = this.getText(o) || o;
            } else {
              a[r] = this.number(Number(o), !this._languageVO.isLanguageWrittenRightToLeft, -1, this._languageVO.isLanguageWrittenRightToLeft, n);
            }
          } else {
            a[r] = o;
          }
        } else {
          a[r] = "";
        }
      }
    }
    if (typeof e == "string" && e !== "") {
      if (!(i = this.getText(e, t ? a : null))) {
        i = e;
      }
    } else {
      i = "";
    }
    return i;
  };
  GlobalizeTextProcessor.prototype.number = function (e, t, n, i, a) {
    var s;
    var r;
    if (t === undefined) {
      t = false;
    }
    if (n === undefined) {
      n = -1;
    }
    if (i === undefined) {
      i = false;
    }
    if (a === undefined) {
      a = true;
    }
    var o = e.toString().substring(e.toString().indexOf(".") + 1).length;
    r = o === e.toString().length ? 0 : o;
    var l = t && !this._languageVO.neverUseAbbreviations;
    var u = r;
    if (n > -1) {
      u = n;
    } else if (this._languageVO.fractionalDigits > -1) {
      u = this._languageVO.fractionalDigits;
    }
    var c = this._languageVO.trailingZeros ? u : 0;
    this._numberFormatter = m.numberFormatter({
      maximumFractionDigits: u,
      minimumFractionDigits: c,
      useGrouping: a
    });
    s = l ? this.shortenLargeNumber(e, i) : this._numberFormatter(e);
    if (!this._languageVO.leadingZero) {
      s = s.replace(/^0+/, "");
    }
    return s;
  };
  GlobalizeTextProcessor.prototype.integer = function (e) {
    return this._integerFormatter(e);
  };
  GlobalizeTextProcessor.prototype.decimal = function (e) {
    return this._decimalFormatter(e);
  };
  GlobalizeTextProcessor.prototype.updateCurrencyFormatter = function (e, t) {
    if (e !== this._currencyCode || t !== this._currencySymbol) {
      var n = !/^[A-Z]{3}$/.test(t);
      this._currencyFormatter = m.currencyFormatter(e, {
        style: n ? "symbol" : "code",
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
      });
    }
  };
  GlobalizeTextProcessor.prototype.formateCurrency = function (e, t = false) {
    return this._currencyFormatter(e);
  };
  GlobalizeTextProcessor.prototype.datetime = function (e, t = r.DateTimeStyle.SHORT, n = r.DateTimeStyle.SHORT) {
    if (!e) {
      (e = new Date()).setTime(0);
    }
    var i = "";
    if (t !== r.DateTimeStyle.NONE) {
      i = m.formatDate(e, {
        date: this.dateTimeStyleMapping(t)
      });
    }
    if (n !== r.DateTimeStyle.NONE) {
      if (i.length > 0) {
        i = i + " " + m.formatDate(e, {
          time: this.timeStyleMapping(n)
        });
      } else {
        i += m.formatDate(e, {
          time: this.timeStyleMapping(n)
        });
      }
    }
    return i;
  };
  GlobalizeTextProcessor.prototype.digitalClock = function (e) {
    if (this._languageVO.isLanguageWrittenRightToLeft) {
      return g(e, this._integerFormatter);
    } else {
      return e;
    }
  };
  GlobalizeTextProcessor.prototype.downloadCLDRAsync = function (e) {
    var t = this;
    var n = this._cldrURL + "/" + e + ".json";
    return new Promise(function (i, a) {
      new l.URLLoaderService(n).load().then(JSON.parse).then(function (n) {
        m.load(n);
        m.locale(e);
        t.loadedLocales.add(e);
        i();
      }).catch(a);
    });
  };
  GlobalizeTextProcessor.prototype.dateTimeStyleMapping = function (e) {
    var t = "none";
    switch (e) {
      case r.DateTimeStyle.FULL:
        t = "full";
        break;
      case r.DateTimeStyle.LONG:
        t = "long";
        break;
      case r.DateTimeStyle.MEDIUM:
        t = "medium";
        break;
      case r.DateTimeStyle.SHORT:
        t = "short";
        break;
      case r.DateTimeStyle.CUSTOM:
        t = "custom";
        break;
      default:
        t = e;
    }
    return t;
  };
  GlobalizeTextProcessor.prototype.shortenLargeNumber = function (e, t) {
    var n = ["generic_kForThousand", "generic_mForMillion"];
    var i = e.toString();
    var a = 0;
    if (e < this._languageVO.abbreviationThreshold && e > -this._languageVO.abbreviationThreshold) {
      i = this._numberFormatter(e);
    } else {
      for (var s = n.length - 1; s >= 0; s--) {
        if (e <= -(a = Math.pow(1000, s + 1)) || e >= a) {
          i = this._numberFormatter(e / a) + (t ? " " : "") + this.getText(n[s]);
          break;
        }
      }
    }
    return i;
  };
  GlobalizeTextProcessor.prototype.clearCaches = function () {
    this.cachedTranslations.clear();
  };
  GlobalizeTextProcessor.prototype.changeNumberFormatters = function () {
    this._integerFormatter = m.numberFormatter({
      maximumFractionDigits: 0,
      minimumFractionDigits: 0,
      useGrouping: true
    });
    this._decimalFormatter = m.numberFormatter({
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
      useGrouping: false
    });
  };
  GlobalizeTextProcessor.prototype.timeStyleMapping = function (e) {
    var t = "none";
    switch (e) {
      case r.DateTimeStyle.FULL:
        t = "full";
        break;
      case r.DateTimeStyle.LONG:
        t = "long";
        break;
      case r.DateTimeStyle.MEDIUM:
        t = "medium";
        break;
      case r.DateTimeStyle.SHORT:
        t = "short";
        break;
      case r.DateTimeStyle.CUSTOM:
        t = "custom";
        break;
      case r.DateTimeStyle.FULL:
        t = "medium";
        break;
      default:
        t = e;
    }
    return t;
  };
  Object.defineProperty(GlobalizeTextProcessor.prototype, "isArabic", {
    get: function () {
      return this._languageVO.isLanguageWrittenRightToLeft;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GlobalizeTextProcessor.prototype, "processorType", {
    get: function () {
      return i.ProcessorTypeConstants.PROCESSOR_GLOBALIZE;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GlobalizeTextProcessor.prototype, "initialized", {
    get: function () {
      return this._initialized;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GlobalizeTextProcessor.prototype, "localizeReplacements", {
    get: function () {
      return this._localizeReplacements;
    },
    set: function (e) {
      this._localizeReplacements = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GlobalizeTextProcessor.prototype, "textsVersionNo", {
    get: function () {
      return this._textsVersionNo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GlobalizeTextProcessor.prototype, "textsDeployTime", {
    get: function () {
      return this._textsDeployTime;
    },
    enumerable: true,
    configurable: true
  });
  return GlobalizeTextProcessor;
}();
exports.GlobalizeTextProcessor = p;
function g(e, t, n = true) {
  return e.split(":").map(function (e) {
    return t(parseInt(e));
  }).join(":");
}
exports.doReplacements = function (e, t, n = true) {
  if (t) {
    var i = e && Object.keys(e);
    if (i) {
      if (n && i.length == 1 && t) {
        var a = i[0];
        if (e[a] && /^[A-Za-z0-9]*$/.test(e[a])) {
          t = _.reverseSinglePlaceholder(t);
        }
      }
      i.forEach(function (n) {
        var i = e[n];
        var a = new RegExp("\\{" + n + "}", "ig");
        t = t.replace(a, i);
      });
    }
  }
  return t;
};