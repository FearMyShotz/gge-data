Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./760.js");
var a = require("./763.js");
var s = require("./764.js");
var r = require("./97.js");
var o = function () {
  function LocalizeService(e, t) {
    this._processor = e;
    this._localizationService = t;
    this._htmlTextComposer = new s.HTMLTextComposer();
    this._simpleDurationFormat = new a.SimpleDurationFormat(this._processor);
    this._dynamicDurationFormat = new i.DynamicDurationFormat(this._processor);
  }
  LocalizeService.prototype.text = function (e, t = null, n = true) {
    if (this._localizationService.initialized) {
      var i = this._processor.text(e, t, n);
      if (this._localizationService.usePipe && this._localizationService.pipe && !i.endsWith(this._localizationService.pipe)) {
        return i + this._localizationService.pipe;
      } else {
        return i;
      }
    }
    return e;
  };
  LocalizeService.prototype.hasText = function (e) {
    var t = false;
    if (this._localizationService.initialized) {
      t = this._processor.hasText(e);
    }
    return t;
  };
  LocalizeService.prototype.number = function (e, t = false, n = -1, i = false, a = true) {
    var s = e.toString();
    if (this._localizationService.initialized) {
      s = this._processor.number(e, t, n, i, a) + this._localizationService.pipe;
    }
    return s;
  };
  LocalizeService.prototype.integer = function (e) {
    if (this._localizationService.initialized) {
      return this._processor.integer(e) + this._localizationService.pipe;
    }
  };
  LocalizeService.prototype.decimal = function (e) {
    if (this._localizationService.initialized) {
      return this._processor.decimal(e) + this._localizationService.pipe;
    }
  };
  LocalizeService.prototype.datetime = function (e, t = r.DateTimeStyle.SHORT, n = r.DateTimeStyle.SHORT) {
    var i = e ? e.toString() : "";
    if (this._localizationService.initialized) {
      i = this._processor.datetime(e, t, n) + this._localizationService.pipe;
    }
    return i;
  };
  LocalizeService.prototype.digitalClock = function (e) {
    return this._processor.digitalClock(e);
  };
  LocalizeService.prototype.numberForArabic = function (e) {
    if (this._processor.isArabic) {
      return this._processor.number(e);
    } else {
      return e.toString();
    }
  };
  LocalizeService.prototype.time = function (e, t = 2, n = true, i = null) {
    var a = e.toString();
    if (this._localizationService.initialized) {
      a = this._dynamicDurationFormat.apply(e, t, n, i);
    }
    return a;
  };
  LocalizeService.prototype.timeCustom = function (e, t, n = null) {
    var i = t.toString();
    if (this._localizationService.initialized) {
      i = this._simpleDurationFormat.apply(e, t);
    }
    return i;
  };
  LocalizeService.prototype.htmlText = function (e) {
    var t = "";
    if (this._localizationService.initialized) {
      t = this._htmlTextComposer.by(e);
    }
    return t;
  };
  Object.defineProperty(LocalizeService.prototype, "processorType", {
    get: function () {
      return this._processor.processorType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LocalizeService.prototype, "localizeReplacements", {
    get: function () {
      return this._processor.localizeReplacements;
    },
    set: function (e) {
      this._processor.localizeReplacements = e;
    },
    enumerable: true,
    configurable: true
  });
  LocalizeService.prototype.updateCurrencyFormatter = function (e, t) {
    this._processor.updateCurrencyFormatter(e, t);
  };
  LocalizeService.prototype.formatCurrency = function (e, t = false) {
    return this._processor.formateCurrency(e, t);
  };
  return LocalizeService;
}();
exports.LocalizeService = o;