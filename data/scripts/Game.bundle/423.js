Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function LaboratoryEvent(t, i = false, n = false) {
    CONSTRUCTOR_HACK;
    return e.call(this, t, i, n) || this;
  }
  n.__extends(LaboratoryEvent, e);
  LaboratoryEvent.__initialize_static_members = function () {
    LaboratoryEvent.LABORATORY_RESET_WARNING = "laboratory_reset_warning";
    LaboratoryEvent.LABORATORY_UPDATED = "laboratory_updated";
    LaboratoryEvent.LABORATORIES_ALLIANCE_UPDATED = "laboratories_alliance_updated";
  };
  return LaboratoryEvent;
}(require("./366.js").CastleEvent);
exports.LaboratoryEvent = o;
o.__initialize_static_members();