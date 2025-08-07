Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastlePackageEvent(t, i = true, n = false) {
    CONSTRUCTOR_HACK;
    return e.call(this, t, i, n) || this;
  }
  n.__extends(CastlePackageEvent, e);
  CastlePackageEvent.__initialize_static_members = function () {
    CastlePackageEvent.PACKAGEINFO_UPDATED = "PACKAGEINFO_UPDATED";
    CastlePackageEvent.PACKAGEPRICE_GOT = "PACKAGEPRICE_GOT";
  };
  return CastlePackageEvent;
}(createjs.Event);
exports.CastlePackageEvent = o;
o.__initialize_static_members();