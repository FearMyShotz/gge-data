Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./654.js");
var l = require("./26.js");
var c = require("./31.js");
var u = require("./19.js");
var d = require("./4.js");
var p = require("./1756.js");
var h = createjs.Point;
var g = function (e) {
  function CastleHandleSeasonDialog() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CastleHandleSeasonDialog, e);
  CastleHandleSeasonDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.sublayers.add(p.ACastleHandleSpaceDialog.SUBLAYER_SUPPORT, null, new _.CastleStartSeasonEventDialogSupport(this.dialogDisp.sublayer_support));
  };
  CastleHandleSeasonDialog.prototype.getSublayerProperties = function (t) {
    if (t == p.ACastleHandleSpaceDialog.SUBLAYER_SUPPORT) {
      return this.dialogProperties_0.seasonEventVO;
    } else {
      return e.prototype.getSublayerProperties.call(this, t);
    }
  };
  CastleHandleSeasonDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    d.CastleModel.specialEventData.addEventListener(l.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onEventUpdated));
    d.CastleModel.specialEventData.addEventListener(l.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventUpdated));
    d.CastleModel.smartfoxClient.sendCommandVO(new r.C2STreasureMapsVO(this.dialogProperties_0.getSpaceID()));
  };
  CastleHandleSeasonDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    d.CastleModel.specialEventData.removeEventListener(l.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onEventUpdated));
    d.CastleModel.specialEventData.removeEventListener(l.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventUpdated));
  };
  CastleHandleSeasonDialog.prototype.onBackgroundSkinLoaded = function (t) {
    e.prototype.onBackgroundSkinLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.backgroundDisp.mc_banner.txt_award, new s.LocalizedTextVO("reward"));
    this.updateReward(this.backgroundDisp.mc_banner.mc_rewardHolder);
  };
  CastleHandleSeasonDialog.prototype.updateReward = function (e) {
    var t = this.dialogProperties_0.getFirstSeasonReward();
    e.x = t && a.instanceOfClass(t, "CollectableItemBuildingVO") && t.buildingVO && t.buildingVO.type == "Seafight" ? -7 : 0;
    var i = new u.CollectableRenderOptions(u.CollectableRenderOptions.SET_ICON, new h(91, 91));
    i.tooltip.showEquipmentCountdown = false;
    C.CollectableRenderHelper.displaySingleItemComplete(this, new c.CollectableRenderClips(e).addIconMc(e), t, i);
  };
  CastleHandleSeasonDialog.prototype.onEventUpdated = function (e) {
    if (e.specialEventVO.eventId == this.dialogProperties_0.getEventId()) {
      this.showCurrentSublayer();
    }
  };
  Object.defineProperty(CastleHandleSeasonDialog.prototype, "dialogProperties_0", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleHandleSeasonDialog.NAME = "CastleSeason";
  return CastleHandleSeasonDialog;
}(p.ACastleHandleSpaceDialog);
exports.CastleHandleSeasonDialog = g;
var C = require("./25.js");
var _ = require("./3757.js");
o.classImplementsInterfaces(g, "ICollectableRendererList");