Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = function (e) {
  function CountryInstanceMappingEvent(t, n = false, i = false) {
    return e.call(this, t, n, i) || this;
  }
  i.__extends(CountryInstanceMappingEvent, e);
  CountryInstanceMappingEvent.PROCESS_COMPLETE = "processComplete";
  return CountryInstanceMappingEvent;
}(createjs.Event);
exports.CountryInstanceMappingEvent = a;