Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./102.js");
var s = require("./4.js");
var r = require("./187.js");
var l = function (e) {
  function AllianceDecoBuildingVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(AllianceDecoBuildingVE, e);
  AllianceDecoBuildingVE.prototype.updateColorChange = function () {
    r.CastleAllianceCrestHelper.colorizeFlags(this.buildingClip.currentshownDisplayObject, r.CastleAllianceCrestHelper.getMyAllianceCrestVO().colors);
  };
  AllianceDecoBuildingVE.prototype.onMyAllianceInfoUpdated = function (e) {
    this.updateColorChange();
  };
  AllianceDecoBuildingVE.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    s.CastleModel.allianceData.addEventListener(a.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, this.bindFunction(this.onMyAllianceUpdate));
  };
  AllianceDecoBuildingVE.prototype.removeEventListener = function () {
    s.CastleModel.allianceData.removeEventListener(a.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, this.bindFunction(this.onMyAllianceUpdate));
    e.prototype.removeEventListener.call(this);
  };
  AllianceDecoBuildingVE.prototype.onMyAllianceUpdate = function (e) {
    this.updateColorChange();
  };
  return AllianceDecoBuildingVE;
}(require("./1556.js").DecoBuildingVE);
exports.AllianceDecoBuildingVE = l;
o.classImplementsInterfaces(l, "ICollectableRendererList", "IIngameUICapable");