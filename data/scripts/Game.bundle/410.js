Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleTitleDataEvent(t, i = false, n = false) {
    CONSTRUCTOR_HACK;
    return e.call(this, t, i, n) || this;
  }
  n.__extends(CastleTitleDataEvent, e);
  CastleTitleDataEvent.__initialize_static_members = function () {
    CastleTitleDataEvent.TITLE_DATA_UPDATED = "title_data_updated";
  };
  return CastleTitleDataEvent;
}(createjs.Event);
exports.CastleTitleDataEvent = o;
o.__initialize_static_members();