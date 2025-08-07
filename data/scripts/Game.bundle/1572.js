Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleRecruitSelectUnitsDialogProperties(t, i, n = null, o = true, a = false) {
    var s = this;
    s.maxUnits = 0;
    s.updateCompleteComponent = false;
    s.isHospitalDialog = false;
    CONSTRUCTOR_HACK;
    (s = e.call(this) || this).unitVO = t;
    s.maxUnits = i;
    s.confirmCallback = n;
    s.updateCompleteComponent = o;
    s.isHospitalDialog = a;
    return s;
  }
  n.__extends(CastleRecruitSelectUnitsDialogProperties, e);
  return CastleRecruitSelectUnitsDialogProperties;
}(require("./2.js").BasicProperties);
exports.CastleRecruitSelectUnitsDialogProperties = o;