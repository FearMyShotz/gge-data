Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleCrestSymbolDataEvent(t, i = false, n = false) {
    CONSTRUCTOR_HACK;
    return e.call(this, t, i, n) || this;
  }
  n.__extends(CastleCrestSymbolDataEvent, e);
  CastleCrestSymbolDataEvent.__initialize_static_members = function () {
    CastleCrestSymbolDataEvent.CREST_SYMBOL_DATA_UPDATED = "crest_symbols_updated";
  };
  return CastleCrestSymbolDataEvent;
}(createjs.Event);
exports.CastleCrestSymbolDataEvent = o;
o.__initialize_static_members();