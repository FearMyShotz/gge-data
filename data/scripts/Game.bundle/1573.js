Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleRecruitSelectUnitEvent(t, i = false, n = false) {
    CONSTRUCTOR_HACK;
    return e.call(this, t, i, n) || this;
  }
  n.__extends(CastleRecruitSelectUnitEvent, e);
  CastleRecruitSelectUnitEvent.__initialize_static_members = function () {
    CastleRecruitSelectUnitEvent.SHOW_UNIT_SELECTION = "SHOW_UNIT_SELECTION";
  };
  return CastleRecruitSelectUnitEvent;
}(createjs.Event);
exports.CastleRecruitSelectUnitEvent = o;
o.__initialize_static_members();