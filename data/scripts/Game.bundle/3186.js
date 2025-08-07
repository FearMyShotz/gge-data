Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./58.js");
var s = require("./4.js");
var r = function (e) {
  function OutpostSurroundingsVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(OutpostSurroundingsVE, e);
  OutpostSurroundingsVE.prototype.onMouseClick = function () {
    if (!s.CastleModel.tutorialData.isTutorialActive && s.CastleModel.userData.hasLevelFor(a.ClientConstLevelRestrictions.MIN_LEVEL_EVENTBUILDINGS)) {
      l.CastleComponent.dialogHandler.registerDefaultDialogs(c.CastleOutpostTeaserDialog);
    }
  };
  return OutpostSurroundingsVE;
}(require("./194.js").ASurroundingBuildingVE);
exports.OutpostSurroundingsVE = r;
var l = require("./14.js");
var c = require("./3187.js");
o.classImplementsInterfaces(r, "ICollectableRendererList", "IIngameUICapable");