Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./6.js");
var r = function (e) {
  function CastlePostSpyHorseDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastlePostSpyHorseDialog.NAME) || this;
  }
  n.__extends(CastlePostSpyHorseDialog, e);
  CastlePostSpyHorseDialog.prototype.showLoaded = function (t = null) {
    this.hideAttackDisplayElements();
    e.prototype.showLoaded.call(this, t);
  };
  CastlePostSpyHorseDialog.prototype.getTravelTime = function (t = null) {
    if (t && t.isInstantSpyHorse) {
      return s.int(a.TravelConst.getInstantSpyHorseTravelTime(this.distance));
    } else {
      return s.int(e.prototype.getTravelTime.call(this, t));
    }
  };
  CastlePostSpyHorseDialog.__initialize_static_members = function () {
    CastlePostSpyHorseDialog.NAME = "CastlePostActionHorse_S";
  };
  return CastlePostSpyHorseDialog;
}(require("./1105.js").CastlePostSpyDialog);
exports.CastlePostSpyHorseDialog = r;
o.classImplementsInterfaces(r, "ICollectableRendererList");
r.__initialize_static_members();