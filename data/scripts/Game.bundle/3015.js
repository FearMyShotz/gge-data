Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./26.js");
var r = require("./4.js");
var l = require("./145.js");
var c = function (e) {
  function EventBuildingVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(EventBuildingVE, e);
  EventBuildingVE.prototype.openEventDialog = function () {
    a.CommandController.instance.executeCommand(u.IngameClientCommands.OPEN_EVENT_DIALOG_COMMAND, this.eventBuildingVO.eventVO);
  };
  EventBuildingVE.prototype.createDisp = function () {
    this.dispComponent.addClip(this.loadExternalClip(this.assetClipName));
  };
  EventBuildingVE.prototype.createAdditionalClips = function () {
    this.additionalClips.addClips(l.IsoAdditionalClipEnum.CAMP_FIRE);
    if (!this.eventBuildingVO.eventVO.hasUserSolvedEvent) {
      this.additionalClips.addClips(l.IsoAdditionalClipEnum.EXCLAMATION_MARK);
    }
  };
  EventBuildingVE.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    r.CastleModel.specialEventData.addEventListener(s.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onEventChanged));
  };
  EventBuildingVE.prototype.removeEventListener = function () {
    e.prototype.removeEventListener.call(this);
    r.CastleModel.specialEventData.removeEventListener(s.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onEventChanged));
  };
  EventBuildingVE.prototype.onMouseClick = function () {
    this.openEventDialog();
  };
  EventBuildingVE.prototype.onEventChanged = function (e) {
    if (this.eventBuildingVO.eventVO == e.specialEventVO) {
      this.updateAdditionalClips();
    }
  };
  Object.defineProperty(EventBuildingVE.prototype, "eventBuildingVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  return EventBuildingVE;
}(require("./1032.js").AEventBuildingVE);
exports.EventBuildingVE = c;
var u = require("./29.js");
o.classImplementsInterfaces(c, "ICollectableRendererList", "IIngameUICapable");