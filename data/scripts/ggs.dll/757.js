Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./157.js");
var a = require("./758.js");
var s = require("./2.js").getLogger("LocalizationJS.LocalizationService");
var r = function () {
  function LocalizationService(e) {
    this._processor = e;
    this._usePipe = false;
  }
  LocalizationService.prototype.initialize = function (e, t, n, r = false) {
    if (!e) {
      throw new i.LocalizationModuleError(a.LocalizationModuleErrorConstants.MESSAGE_LANGUAGE_VO_IS_MANDATORY, a.LocalizationModuleErrorConstants.CODE_LANGUAGE_VO_IS_MANDATORY);
    }
    this._usePipe = r;
    s.debug("initializing service with lang ", e.locale);
    this._processor.initialize(e, t, n);
  };
  LocalizationService.prototype.finalize = function () {
    s.debug("finalize service");
  };
  LocalizationService.prototype.setTexts = function (e) {
    this._processor.setTexts(e);
  };
  LocalizationService.prototype.setLanguageAsync = function (e, t) {
    return this._processor.setLanguageAsync(e, t);
  };
  Object.defineProperty(LocalizationService.prototype, "initialized", {
    get: function () {
      return this._processor.initialized;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LocalizationService.prototype, "usePipe", {
    get: function () {
      return this._usePipe;
    },
    set: function (e) {
      this._usePipe = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LocalizationService.prototype, "pipe", {
    get: function () {
      if (this._usePipe) {
        return LocalizationService.PIPE_CHAR;
      } else {
        return "";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LocalizationService.prototype, "localizeReplacements", {
    get: function () {
      return this._processor.localizeReplacements;
    },
    set: function (e) {
      this._processor.localizeReplacements = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LocalizationService.prototype, "locale", {
    get: function () {
      return this._processor.getLocale();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LocalizationService.prototype, "language", {
    get: function () {
      return this.locale;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LocalizationService.prototype, "timeZone", {
    get: function () {
      return this._processor.getTimeZone();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LocalizationService.prototype, "languageDataVersion", {
    get: function () {
      return this._processor.textsVersionNo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LocalizationService.prototype, "languageDataTimestamp", {
    get: function () {
      return this._processor.textsDeployTime;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LocalizationService.prototype, "processorType", {
    get: function () {
      return this._processor.processorType;
    },
    enumerable: true,
    configurable: true
  });
  LocalizationService.PIPE_CHAR = "|";
  return LocalizationService;
}();
exports.LocalizationService = r;