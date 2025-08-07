Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleFacebookEvent(t, i = false, n = false) {
    CONSTRUCTOR_HACK;
    return e.call(this, t, i, n) || this;
  }
  n.__extends(CastleFacebookEvent, e);
  CastleFacebookEvent.__initialize_static_members = function () {
    CastleFacebookEvent.FACEBOOK_MAPPING_UPDATED = "facebookMappingUpdated";
    CastleFacebookEvent.FACEBOOK_ACTION_CANCELED = "facebookActionCanceled";
    CastleFacebookEvent.FACEBOOK_MAPPING_ERROR = "facebookMappingError";
  };
  return CastleFacebookEvent;
}(createjs.Event);
exports.CastleFacebookEvent = o;
o.__initialize_static_members();