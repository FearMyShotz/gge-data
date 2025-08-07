Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./16.js");
var o = require("./91.js");
var a = require("./693.js");
var s = require("./139.js");
var r = require("./15.js");
var l = require("./4.js");
var c = createjs.MovieClip;
var u = createjs.Event;
var d = require("./17.js");
var p = require("./41.js");
var h = function () {
  function CastleAttackAlertFrameComponent() {
    this.frameMc = new c();
    this.addListeners();
  }
  CastleAttackAlertFrameComponent.prototype.addListeners = function () {
    l.CastleModel.gfxData.addEventListener(a.GFXEvent.ALERT_FRAME_VISIBILITY_CHANGED, this.bindFunction(this.onAlertFrameVisibilityChanged));
    this.frameMc.addEventListener(u.ADDED_TO_STAGE, this.bindFunction(this.onAddedToStage));
    l.CastleModel.armyData.addEventListener(s.CastleArmyDataEvent.ATTACK_WARNINGS_UPDATED, this.bindFunction(this.onAttackWarningChanged));
    this.controller.addEventListener(o.CastleLayoutManagerEvent.ON_RESIZE, this.bindFunction(this.onStageResize));
  };
  CastleAttackAlertFrameComponent.prototype.removeListeners = function () {
    l.CastleModel.armyData.removeEventListener(s.CastleArmyDataEvent.ATTACK_WARNINGS_UPDATED, this.bindFunction(this.onAttackWarningChanged));
    this.controller.removeEventListener(o.CastleLayoutManagerEvent.ON_RESIZE, this.bindFunction(this.onStageResize));
    l.CastleModel.gfxData.removeEventListener(a.GFXEvent.ALERT_FRAME_VISIBILITY_CHANGED, this.bindFunction(this.onAlertFrameVisibilityChanged));
    this.frameMc.removeEventListener(u.ADDED_TO_STAGE, this.bindFunction(this.onAddedToStage));
  };
  CastleAttackAlertFrameComponent.prototype.destroy = function () {
    this.removeListeners();
    this.clearFrame();
  };
  CastleAttackAlertFrameComponent.prototype.drawFrame = function () {
    this.clearFrame();
    for (var e = 0; e < 12; e++) {
      this.panelDisp.graphics.lineStyle(2, n.ClientConstColor.ATTACK_ALERT_FRAME_COLOR, 1 - Math.pow(e, 0.5) * 0.288);
      this.panelDisp.graphics.drawRect(e + 1, e + 1, this.panelDisp.stage.stageWidth - 1 - e * 2, this.panelDisp.stage.stageHeight - 1 - e * 2);
    }
    this.panelDisp.doCache();
  };
  CastleAttackAlertFrameComponent.prototype.clearFrame = function () {
    this.panelDisp.graphics.clear();
    p.CastleMovieClipHelper.uncacheSafe(this.panelDisp);
  };
  CastleAttackAlertFrameComponent.prototype.checkAndSetVisibility = function () {
    if (this.isVisible) {
      this.drawFrame();
    } else {
      this.clearFrame();
    }
    d.CastleLayoutManager.getInstance().gamestage.update();
    d.CastleLayoutManager.getInstance().renderBGStage();
  };
  Object.defineProperty(CastleAttackAlertFrameComponent.prototype, "isVisible", {
    get: function () {
      return l.CastleModel.gfxData.alertFrameVisible && l.CastleModel.armyData.isAttackWarning && !!this.panelDisp.stage;
    },
    enumerable: true,
    configurable: true
  });
  CastleAttackAlertFrameComponent.prototype.onAlertFrameVisibilityChanged = function (e) {
    this.checkAndSetVisibility();
  };
  CastleAttackAlertFrameComponent.prototype.onAddedToStage = function (e) {
    this.checkAndSetVisibility();
  };
  CastleAttackAlertFrameComponent.prototype.onAttackWarningChanged = function (e) {
    this.checkAndSetVisibility();
  };
  CastleAttackAlertFrameComponent.prototype.onStageResize = function (e) {
    this.checkAndSetVisibility();
  };
  Object.defineProperty(CastleAttackAlertFrameComponent.prototype, "controller", {
    get: function () {
      return r.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAttackAlertFrameComponent.prototype, "panelDisp", {
    get: function () {
      return this.frameMc;
    },
    enumerable: true,
    configurable: true
  });
  return CastleAttackAlertFrameComponent;
}();
exports.CastleAttackAlertFrameComponent = h;