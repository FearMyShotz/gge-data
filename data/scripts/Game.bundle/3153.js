Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./145.js");
var r = require("./111.js");
var l = require("./122.js");
var c = require("./490.js");
var u = createjs.Point;
var d = function (e) {
  function EventJudgementVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(EventJudgementVE, e);
  EventJudgementVE.prototype.createDisp = function () {
    if (!this.isoRenderer.strategies.currentStrategy.isActive(l.IsoRenderStrategyEnum.BUILD_MODE) && !this.isoRenderer.strategies.currentStrategy.isActive(l.IsoRenderStrategyEnum.BUILDING_GROUND_VIEW)) {
      this.dispComponent.addClip(this.loadExternalClip(this.assetClipName, (e = this.assetFileName).substr(0, 1).toUpperCase() + e.slice(1)));
    }
    var e;
  };
  EventJudgementVE.prototype.getVELayerType = function () {
    return r.IsoLayerEnum.UNKNOWN;
  };
  EventJudgementVE.prototype.getScreenPos = function () {
    return new u();
  };
  EventJudgementVE.prototype.createAdditionalClips = function () {
    this.additionalClips.addClips(s.IsoAdditionalClipEnum.EXCLAMATION_MARK);
  };
  EventJudgementVE.prototype.onMouseClick = function () {
    o.CommandController.instance.executeCommand(p.IngameClientCommands.OPEN_JUDGEMENT_SPOT_DIALOG_COMMAND);
  };
  EventJudgementVE.prototype.onRenderStrategyChanged = function (e) {
    this.updateDisp();
  };
  Object.defineProperty(EventJudgementVE.prototype, "judgementEventVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  return EventJudgementVE;
}(c.AInteractiveIsoObjectVE);
exports.EventJudgementVE = d;
var p = require("./29.js");
a.classImplementsInterfaces(d, "ICollectableRendererList", "IIngameUICapable");