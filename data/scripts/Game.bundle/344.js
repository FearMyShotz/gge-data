Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./1.js");
var a = require("./15.js");
var s = function () {
  function AttackDialogTrackingHelper() {
    this._startTime = 0;
    this.detailCounters = {};
    this.isTracked = false;
  }
  AttackDialogTrackingHelper.getInstance = function () {
    AttackDialogTrackingHelper.instance ||= new AttackDialogTrackingHelper();
    return AttackDialogTrackingHelper.instance;
  };
  AttackDialogTrackingHelper.prototype.startAndResetSession = function () {
    this._startTime = Math.round(new Date().getTime() / 1000);
    this.detailCounters = {};
    this.isTracked = false;
  };
  AttackDialogTrackingHelper.prototype.trackDetailCounter = function (e) {
    this.detailCounters[e] ||= 0;
    this.detailCounters[e]++;
  };
  AttackDialogTrackingHelper.prototype.getDetailCounterJSON = function () {
    return JSON.stringify(this.detailCounters);
  };
  AttackDialogTrackingHelper.prototype.endSessionAndTrack = function (e) {
    if (!this.isTracked) {
      this.isTracked = true;
      n.CommandController.instance.executeCommand(a.CastleBasicController.TRACK_GENERALS_ATTACK_SCREEN, [this._startTime, this.getDetailCounterJSON(), e]);
    }
  };
  AttackDialogTrackingHelper.TRACK_AUTOFILL_ALL = "autofill_all";
  AttackDialogTrackingHelper.TRACK_PRESET_1ST_WAVE = "preset_1st_wave";
  AttackDialogTrackingHelper.TRACK_PRESET_NEXT_WAVE = "preset_next_wave";
  AttackDialogTrackingHelper.TRACK_PRESET_SELECTED = "preset_selected";
  AttackDialogTrackingHelper.TRACK_MANUAL_CLICK = "manual_click";
  AttackDialogTrackingHelper.TRACK_MANUAL_FILLING = "manual_filling";
  return AttackDialogTrackingHelper;
}();
exports.AttackDialogTrackingHelper = s;
o.classImplementsInterfaces(s, "ICollectableRendererList");