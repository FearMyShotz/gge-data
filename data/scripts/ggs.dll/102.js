Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = function (e) {
  function LanguageDataEvent(t, n = "", i = false, a = false) {
    var s = e.call(this, t, i, a) || this;
    s.selectedLanguage = n;
    return s;
  }
  i.__extends(LanguageDataEvent, e);
  LanguageDataEvent.XML_LOAD_COMPLETE = "xml_load_complete";
  LanguageDataEvent.FONT_LOAD_COMPLETE = "font_load_complete";
  LanguageDataEvent.SELECT_LANGUAGE_COMPLETE = "selectlanguage_complete";
  LanguageDataEvent.FONT_LOAD_START = "font_load_start";
  LanguageDataEvent.LANGUAGE_GENERIC_ERROR = "soemthing_wrong_happened_while_loading_parsing_language_json";
  return LanguageDataEvent;
}(createjs.Event);
exports.LanguageDataEvent = a;