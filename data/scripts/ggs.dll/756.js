Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./757.js");
var a = require("./759.js");
var s = require("./41.js");
var r = require("./312.js");
var o = function () {
  function LocalizationModule(e, t = false) {
    this._processor = e;
    this.setupGlobalHelpers = t;
    this._localizationService = new i.LocalizationService(e);
    this._localizeService = new a.LocalizeService(e, this._localizationService);
    if (t) {
      s.Localize.setService(this._localizeService);
      r.Localization.setService(this._localizationService);
    }
  }
  LocalizationModule.prototype.initialize = function (e, t, n, i = false) {
    this._localizationService.initialize(e, t, n, i);
  };
  LocalizationModule.prototype.setLanguageAsync = function (e, t) {
    return this._localizationService.setLanguageAsync(e, t);
  };
  LocalizationModule.prototype.setTexts = function (e) {
    this._localizationService.setTexts(e);
  };
  Object.defineProperty(LocalizationModule.prototype, "localizationService", {
    get: function () {
      return this._localizationService;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LocalizationModule.prototype, "localizeService", {
    get: function () {
      return this._localizeService;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LocalizationModule.prototype, "processorType", {
    get: function () {
      return this._processor.processorType;
    },
    enumerable: true,
    configurable: true
  });
  return LocalizationModule;
}();
exports.LocalizationModule = o;