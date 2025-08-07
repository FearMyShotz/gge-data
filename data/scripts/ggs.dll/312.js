Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./157.js");
var a = require("./2.js").getLogger("LocalizationJS.Localization");
var s = function () {
  function Localization() {}
  Localization.assertServiceAlreadyInstalled = function () {
    if (Localization._service == null) {
      throw new i.LocalizationModuleError(Localization.MESSAGE_LOCALIZATION_SERVICE_NOT_ASSIGNED, Localization.CODE_LOCALIZATION_SERVICE_NOT_ASSIGNED);
    }
  };
  Localization.setService = function (e) {
    if (Localization._service != null) {
      a.warn("LocalizeService was already setup for static Localize - it is going to be overridden!  hopefully you know what you are doing");
    }
    Localization._service = e;
  };
  Localization.initialize = function (e, t, n, a = false) {
    if (Localization._service == null) {
      throw new i.LocalizationModuleError(Localization.MESSAGE_LOCALIZATION_SERVICE_NOT_ASSIGNED, Localization.CODE_LOCALIZATION_SERVICE_NOT_ASSIGNED);
    }
    Localization._service.initialize(e, t, n, a);
  };
  Localization.finalize = function () {
    Localization.assertServiceAlreadyInstalled();
    Localization._service.finalize();
  };
  Localization.setTexts = function (e) {
    Localization.assertServiceAlreadyInstalled();
    Localization._service.setTexts(e);
  };
  Object.defineProperty(Localization, "installed", {
    get: function () {
      return Localization._service != null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Localization, "initialized", {
    get: function () {
      Localization.assertServiceAlreadyInstalled();
      return Localization._service.initialized;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Localization, "usePipe", {
    get: function () {
      Localization.assertServiceAlreadyInstalled();
      return Localization._service.usePipe;
    },
    set: function (e) {
      Localization.assertServiceAlreadyInstalled();
      Localization._service.usePipe = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Localization, "pipe", {
    get: function () {
      Localization.assertServiceAlreadyInstalled();
      return Localization._service.pipe;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Localization, "localizeReplacements", {
    get: function () {
      Localization.assertServiceAlreadyInstalled();
      return Localization._service.localizeReplacements;
    },
    set: function (e) {
      Localization.assertServiceAlreadyInstalled();
      Localization._service.localizeReplacements = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Localization, "locale", {
    get: function () {
      Localization.assertServiceAlreadyInstalled();
      return Localization._service.locale;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Localization, "language", {
    get: function () {
      Localization.assertServiceAlreadyInstalled();
      return Localization._service.language;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Localization, "timeZone", {
    get: function () {
      Localization.assertServiceAlreadyInstalled();
      return Localization._service.timeZone;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Localization, "languageXMLVersion", {
    get: function () {
      Localization.assertServiceAlreadyInstalled();
      return Localization._service.languageDataVersion;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Localization, "languageXMLTimeStamp", {
    get: function () {
      Localization.assertServiceAlreadyInstalled();
      return Localization._service.languageDataTimestamp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Localization, "processorType", {
    get: function () {
      Localization.assertServiceAlreadyInstalled();
      return Localization._service.processorType;
    },
    enumerable: true,
    configurable: true
  });
  Localization.CODE_LOCALIZATION_SERVICE_NOT_ASSIGNED = "001";
  Localization.MESSAGE_LOCALIZATION_SERVICE_NOT_ASSIGNED = "Localization Service was not assigned to Static Localization Helper (use setService to do so)";
  return Localization;
}();
exports.Localization = s;