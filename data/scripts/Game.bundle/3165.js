Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./32.js");
var s = require("./4.js");
var r = require("./1379.js");
var l = require("./1377.js");
var c = require("./194.js");
var u = function (e) {
  function AllianceCrestSurroundingsVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(AllianceCrestSurroundingsVE, e);
  AllianceCrestSurroundingsVE.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    d.CastleComponent.controller.addEventListener(a.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onLevelUp));
  };
  AllianceCrestSurroundingsVE.prototype.removeEventListener = function () {
    e.prototype.removeEventListener.call(this);
    d.CastleComponent.controller.removeEventListener(a.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onLevelUp));
  };
  AllianceCrestSurroundingsVE.prototype.createAdditionalClips = function () {
    e.prototype.createAdditionalClips.call(this);
  };
  Object.defineProperty(AllianceCrestSurroundingsVE.prototype, "hasBuildingPlaceHolder", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.ASurroundingBuildingVE.prototype, "hasBuildingPlaceHolder").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  AllianceCrestSurroundingsVE.prototype.onLevelUp = function (e) {
    this.updateAdditionalClips();
  };
  AllianceCrestSurroundingsVE.prototype.onMouseClick = function () {
    d.CastleComponent.dialogHandler.registerDefaultDialogs(r.AllianceCrestCreationDialog, new l.CastleAllianceMessageToallDialogProperties(s.CastleModel.allianceData.myAllianceVO));
  };
  return AllianceCrestSurroundingsVE;
}(c.ASurroundingBuildingVE);
exports.AllianceCrestSurroundingsVE = u;
var d = require("./14.js");
o.classImplementsInterfaces(u, "ICollectableRendererList", "IIngameUICapable");