Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./31.js");
var s = require("./81.js");
var r = require("./6.js");
var o = require("./5.js");
var l = require("./8.js");
var u = require("./365.js");
var c = require("./160.js");
var _ = require("./102.js");
var d = require("./4.js");
var m = require("./174.js");
var h = require("./25.js");
var p = require("./173.js");
var g = require("./29.js");
var E = require("./2.js").getLogger(g.TEXT_FIELDS_LOGGER + ".BasicChangeLanguageCommand");
var C = function (e) {
  function BasicChangeLanguageCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i.__extends(BasicChangeLanguageCommand, e);
  BasicChangeLanguageCommand.prototype.execute = function (e = null) {
    E.debug(": load language XML", e);
    if (d.BasicModel.languageData.hasEventListener(_.LanguageDataEvent.XML_LOAD_COMPLETE)) {
      d.BasicModel.languageData.removeEventListener(_.LanguageDataEvent.XML_LOAD_COMPLETE, this.bindFunction(this.onLanguageXMLComplete));
    }
    d.BasicModel.languageData.languageXMLLoaded = false;
    d.BasicModel.languageData.addEventListener(_.LanguageDataEvent.XML_LOAD_COMPLETE, this.bindFunction(this.onLanguageXMLComplete));
    this.env.currentCountryLanguageCode = a.GGSCountryController.instance.currentCountry.ggsLanguageCode;
    this.env.currentCountryLanguageVersion = p.ConfigFilesVersionsModel.instance.languageVersion(this.env.currentCountryLanguageCode);
    d.BasicModel.languageData.loadLanguage(undefined, this.env.currentCountryLanguageCode);
  };
  BasicChangeLanguageCommand.prototype.onLanguageXMLComplete = function (e) {
    d.BasicModel.languageData.removeEventListener(_.LanguageDataEvent.XML_LOAD_COMPLETE, this.bindFunction(this.onLanguageXMLComplete));
    var t = m.BasicLanguageFontManager.getInstance();
    t.addEventListener(_.LanguageDataEvent.FONT_LOAD_COMPLETE, this.bindFunction(this.onFontLoadComplete));
    E.debug(": onLanguageXMLComplete() -> Load font SWF");
    t.loadFontsByLanguage();
  };
  BasicChangeLanguageCommand.prototype.onFontLoadComplete = function (e) {
    m.BasicLanguageFontManager.getInstance().removeEventListener(_.LanguageDataEvent.FONT_LOAD_COMPLETE, this.bindFunction(this.onFontLoadComplete));
    E.debug(": onFontLoadComplete()");
    s.GoodgameTextFieldManager.getInstance().updateTextInAllTextFields();
    l.BasicController.getInstance().dispatchEvent(new c.IdleScreenEvent(c.IdleScreenEvent.HIDE));
    l.BasicController.getInstance().dispatchEvent(new u.CountryInstanceMappingEvent(u.CountryInstanceMappingEvent.PROCESS_COMPLETE));
    h.BasicLayoutManager.getInstance().showServerAndClientVersion();
  };
  Object.defineProperty(BasicChangeLanguageCommand.prototype, "env", {
    get: function () {
      return o.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  BasicChangeLanguageCommand.NAME = "BasicChangeLanguageCommand";
  return BasicChangeLanguageCommand;
}(r.SimpleCommand);
exports.BasicChangeLanguageCommand = C;