Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./114.js");
var s = require("./102.js");
var r = require("./18.js");
var o = require("./2.js");
var l = require("./3.js");
var u = o.getLogger("BasicLanguageData");
var c = createjs.EventDispatcher;
var _ = require("./5.js");
var d = function (e) {
  function BasicLanguageData(t, n, i) {
    var a = e.call(this) || this;
    a.versionInformation = t;
    a.pathProvider = n;
    a.locaModule = i;
    a._addPipeToEndOfString = true;
    a._worldAssignemnt = window.ggs.worldAssignment;
    return a;
  }
  i.__extends(BasicLanguageData, e);
  BasicLanguageData.prototype.checkSingleOrMultiText = function (e, t, n = null) {
    if (e === 1) {
      return this.getTextById(t + "_single", n);
    } else {
      return this.getTextById(t, n);
    }
  };
  BasicLanguageData.prototype.getTextById = function (e, t = null) {
    return this.locaModule.localizeService.text(e, t);
  };
  BasicLanguageData.prototype.onLanguageDataLoaded = function (e) {
    var t = this;
    u.debug("onLanguageDataLoaded " + this._languageCode + " version: " + e["@metadata"].versionNo);
    this.versionInformation.parseLanguageXml(e);
    var n = new r.LanguageVO(this._worldAssignemnt.facade.currentCountry.ggsCountryCode, this._languageCode, this.env.neverUseAbbreviations, this.env.abbreviationThreshold, this.env.fractionalDigits, this.env.leadingZero, this.env.trailingZeros);
    this.locaModule.setLanguageAsync(n, e).then(function () {
      a.BasicContextMenuController.instance.refreshVersionInfo();
      t._languageDataLoaded = true;
      t.dispatchEvent(new s.LanguageDataEvent(s.LanguageDataEvent.XML_LOAD_COMPLETE));
    }).catch(function (e) {
      u.error("Error in Globalize loader: " + e);
    });
  };
  Object.defineProperty(BasicLanguageData.prototype, "env", {
    get: function () {
      return _.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  BasicLanguageData.prototype.getLanguageFromUrl = function (e) {
    return e.match(/([^\/]+)(?=\.\w+$)/)[0];
  };
  BasicLanguageData.prototype.loadLanguage = function (e, t) {
    var n = this;
    if (e === undefined) {
      e = this.pathProvider.languageConfigURL;
    }
    if (t === undefined) {
      t = null;
    }
    u.debug("will load language from " + e);
    if (this._languageDataLoaded) {
      u.warn("load language not executed because it was already loaded.  if you want to change the language use BasicChangeLanguageCommand");
    } else {
      this._languageCode = t || this.getLanguageFromUrl(e);
      var i = new l.URLLoaderService(new l.URLRequest(e));
      i.load().then(function (e) {
        u.debug("language loaded successfully");
        n.onLanguageDataLoaded(JSON.parse(e));
        i.dispose();
      }).catch(function (e) {
        u.error("Error while loading/parsing json", e);
        i.dispose();
        n.dispatchEvent(new s.LanguageDataEvent(s.LanguageDataEvent.LANGUAGE_GENERIC_ERROR));
      });
    }
  };
  Object.defineProperty(BasicLanguageData.prototype, "languageXMLLoaded", {
    get: function () {
      return this._languageDataLoaded;
    },
    set: function (e) {
      this._languageDataLoaded = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicLanguageData.prototype, "addPipeToEndOfString", {
    get: function () {
      return this._addPipeToEndOfString;
    },
    set: function (e) {
      this._addPipeToEndOfString = e;
    },
    enumerable: true,
    configurable: true
  });
  BasicLanguageData.GAME_LANGUAGE_DICTIONARY = "gameLanguageDict";
  return BasicLanguageData;
}(c);
exports.BasicLanguageData = d;