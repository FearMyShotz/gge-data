Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = function (e) {
  function CountrySelectComponentEvent(t, n = null, i = true, a = false) {
    var s = e.call(this, t, i, a) || this;
    s.selectedCountry = n;
    return s;
  }
  i.__extends(CountrySelectComponentEvent, e);
  CountrySelectComponentEvent.COUNTRY_VIEW_OPENED = "countryViewOpened";
  CountrySelectComponentEvent.COUNTRY_VIEW_CLOSED = "countryViewClosed";
  CountrySelectComponentEvent.COUNTRY_CHANGED = "countryChanged";
  return CountrySelectComponentEvent;
}(createjs.Event);
exports.CountrySelectComponentEvent = a;