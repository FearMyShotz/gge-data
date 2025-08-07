Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./188.js");
var s = require("./4057.js");
var r = require("./410.js");
var l = require("./4.js");
var c = function (e) {
  function GloryHUDAnimationController() {
    var t = e.call(this) || this;
    t.addEventListeners();
    return t;
  }
  n.__extends(GloryHUDAnimationController, e);
  GloryHUDAnimationController.prototype.addEventListeners = function () {
    l.CastleModel.titleData.addEventListener(r.CastleTitleDataEvent.TITLE_DATA_UPDATED, this.bindFunction(this.updateProgress));
  };
  GloryHUDAnimationController.prototype._destroy = function () {
    e.prototype._destroy.call(this);
    l.CastleModel.titleData.removeEventListener(r.CastleTitleDataEvent.TITLE_DATA_UPDATED, this.bindFunction(this.updateProgress));
  };
  GloryHUDAnimationController.prototype.updateProgress = function (e = null) {
    this.setGloryProgress();
    this.startAnimation();
    this.setCurrentTooltip();
  };
  GloryHUDAnimationController.prototype.setCurrentTooltip = function () {
    this._model.currentTooltip = {
      t: this._model.userReachedHighestRank ? "panel_state_yourTitle" : "panel_state_yourTitle_progress",
      p: [l.CastleModel.titleData.getProgressPointsForNextTitleInSystem(a.ClientConstTitle.GLORY_TITLE)]
    };
  };
  GloryHUDAnimationController.prototype.setModel = function (t) {
    e.prototype.setModel.call(this, t);
    this.updateProgress();
  };
  GloryHUDAnimationController.prototype.setGloryProgress = function () {
    if (this._model) {
      this._model.progress = l.CastleModel.titleData.getProgressForNextTitleInSystem(a.ClientConstTitle.GLORY_TITLE);
    }
  };
  GloryHUDAnimationController.prototype.startAnimation = function () {
    if (this._model) {
      this._model.startAnimation();
    }
  };
  GloryHUDAnimationController.prototype.stopAnimation = function () {
    if (this._model) {
      this._model.stopAnimation();
    }
  };
  return GloryHUDAnimationController;
}(s.ASingleController);
exports.GloryHUDAnimationController = c;
o.classImplementsInterfaces(c, "IController", "IGloryHUDAnimationController");