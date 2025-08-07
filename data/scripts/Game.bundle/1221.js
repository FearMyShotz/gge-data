Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleFameDataEvent(t, i = false, n = false) {
    CONSTRUCTOR_HACK;
    return e.call(this, t, i, n) || this;
  }
  n.__extends(CastleFameDataEvent, e);
  CastleFameDataEvent.__initialize_static_members = function () {
    CastleFameDataEvent.UPDATE_DATA_FAME = "update_data_fame";
    CastleFameDataEvent.UPDATE_DATA_ALLY_FAME = "update_data_ally_fame";
    CastleFameDataEvent.UPDATE_DATA_HIGHESTFAMETITLE = "update_data_highestfametitle";
    CastleFameDataEvent.NEW_FAME_TITLE = "new_fame_title";
    CastleFameDataEvent.TITLE_CHANGED = "title_changed";
  };
  return CastleFameDataEvent;
}(createjs.Event);
exports.CastleFameDataEvent = o;
o.__initialize_static_members();