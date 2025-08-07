Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleResearchEvent(t, i = false, n = false) {
    CONSTRUCTOR_HACK;
    return e.call(this, t, i, n) || this;
  }
  n.__extends(CastleResearchEvent, e);
  CastleResearchEvent.__initialize_static_members = function () {
    CastleResearchEvent.RESEARCH_INFO_UPDATE = "research_info_update";
  };
  return CastleResearchEvent;
}(createjs.Event);
exports.CastleResearchEvent = o;
o.__initialize_static_members();