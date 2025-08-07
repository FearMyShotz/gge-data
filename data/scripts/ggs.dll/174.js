Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./102.js");
var s = require("./2.js");
var r = require("./29.js");
var o = require("./773.js");
var l = require("./3.js");
var u = createjs.EventDispatcher;
var c = s.getLogger(r.TEXT_FIELDS_LOGGER + ".BasicLanguageFontManager");
var _ = function (e) {
  function BasicLanguageFontManager() {
    var t = e !== null && e.apply(this, arguments) || this;
    t.onlyKeepOneCCSActive = false;
    t._fontsLoaded = false;
    return t;
  }
  i.__extends(BasicLanguageFontManager, e);
  BasicLanguageFontManager.getInstance = function () {
    return d;
  };
  BasicLanguageFontManager.prototype.loadFontsByLanguage = function () {
    var e = this;
    var t = window.ggs.fontConfigResolver ? window.ggs.fontConfigResolver() : m();
    c.warn("will load custom webfonts ", t);
    this._fontsLoaded = false;
    this.onlyKeepOneCCSActive = l.currentBrowserInfo.isFireFox;
    o.load.call(this, {
      loading: function () {
        return c.debug("webfont loader started loading css and fonts");
      },
      active: function () {
        if (document && e.onlyKeepOneCCSActive) {
          if (e.lastLoadedCSSDoc) {
            e.lastLoadedCSSDoc.disabled = true;
          }
          e.lastLoadedCSSDoc = document.styleSheets.item(document.styleSheets.length - 1);
          e.lastLoadedCSSDoc.disabled = false;
        }
        e._fontsLoaded = true;
        c.info("All fonts were loaded successfully");
        e.dispatchEvent(new a.LanguageDataEvent(a.LanguageDataEvent.FONT_LOAD_COMPLETE));
      },
      inactive: function () {
        c.error("Something went wrong with Font loading (it was not possible to load one or more fonts)");
        e._fontsLoaded = true;
        e.dispatchEvent(new a.LanguageDataEvent(a.LanguageDataEvent.FONT_LOAD_COMPLETE));
      },
      fontactive: function (e, t) {
        return c.info(e + " was successfully loaded");
      },
      fontinactive: function (e, t) {
        return c.warn(e + "  could not be loaded");
      },
      custom: t
    });
  };
  Object.defineProperty(BasicLanguageFontManager.prototype, "fontsLoaded", {
    get: function () {
      return this._fontsLoaded;
    },
    enumerable: true,
    configurable: true
  });
  return BasicLanguageFontManager;
}(u);
exports.BasicLanguageFontManager = _;
var d = new _();
function m() {
  return {
    urls: ["./css/" + window.ggs.worldAssignment.facade.currentCountry.ggsLanguageCode + ".css"],
    families: ["_BodyFont", "_HeaderFont"]
  };
}