Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./1408.js");
var u = require("./2569.js");
var d = require("./758.js");
var p = require("./15.js");
var h = createjs.Point;
var g = function (e) {
  function SkippableCooldownMinuteSkipProperties(t, i = false) {
    var n = e.call(this) || this;
    n.useSubscription = false;
    n.mapobjectVO = t;
    n.useSubscription = i;
    p.CastleBasicController.getInstance().addEventListener(d.SkipCooldownEvent.UPDATE, n.bindFunction(n.onMapobjectVOUpdated));
    return n;
  }
  n.__extends(SkippableCooldownMinuteSkipProperties, e);
  SkippableCooldownMinuteSkipProperties.prototype.onMapobjectVOUpdated = function (e) {
    var t = this.mapobjectVO.ownerInfo;
    if (e.mapObjectVO) {
      this.mapobjectVO = e.mapObjectVO;
      this.mapobjectVO.ownerInfo = t;
    }
  };
  SkippableCooldownMinuteSkipProperties.prototype.isSkipAppliable = function () {
    return this.mapobjectVO.isVisibleOnMap && this.mapobjectVO.remainingCooldownTimeInSeconds > 0;
  };
  SkippableCooldownMinuteSkipProperties.prototype.isFreeSkipActive = function () {
    return false;
  };
  SkippableCooldownMinuteSkipProperties.prototype.isPrimeSaleActive = function () {
    return false;
  };
  SkippableCooldownMinuteSkipProperties.prototype.getNameText = function () {
    return new s.TextVO(this.mapobjectVO.areaNameString);
  };
  SkippableCooldownMinuteSkipProperties.prototype.getAdditionalInfo = function () {
    return new r.LocalizedTextVO("Coldown_timer_header");
  };
  SkippableCooldownMinuteSkipProperties.prototype.getIconFrame = function () {
    return l.int(_.CastleMinuteSkipDialog.ICONFRAME_ATTACK_COOLDOWN);
  };
  SkippableCooldownMinuteSkipProperties.prototype.getIconToolTipText = function () {
    return "dialog_timeSkip_attackCooldown_tooltip";
  };
  SkippableCooldownMinuteSkipProperties.prototype.displayPicture = function (e) {
    var t;
    var i = new h(_.CastleMinuteSkipDialog.PICTURE_WIDTH, _.CastleMinuteSkipDialog.PICTURE_HEIGHT);
    t = m.instanceOfClass(this.mapobjectVO, "TreasureDungeonMapObjectVO") ? C.WorldmapObjectIconHelper.drawMapObjectIcon(this.mapobjectVO, i, true, false, false, "", this.mapobjectVO.tMapNode) : C.WorldmapObjectIconHelper.drawMapObjectIcon(this.mapobjectVO, i, true, false, false);
    return e.addChild(t);
  };
  SkippableCooldownMinuteSkipProperties.prototype.getTotalTime = function () {
    return this.mapobjectVO.totalCooldownTime;
  };
  SkippableCooldownMinuteSkipProperties.prototype.getRemainingTime = function () {
    return this.mapobjectVO.remainingCooldownTimeInSeconds;
  };
  SkippableCooldownMinuteSkipProperties.prototype.getSkipCost = function () {
    return this.mapobjectVO.skipCooldownCostC2 >> 0;
  };
  SkippableCooldownMinuteSkipProperties.prototype.getFullSkipCommand = function () {
    if (m.instanceOfClass(this.mapobjectVO, "TreasureDungeonMapObjectVO")) {
      return new c.C2SSkipDungeonCooldownVO(this.mapobjectVO.absAreaPos, this.mapobjectVO.kingdomID, this.mapobjectVO.tMapNode);
    } else {
      return new c.C2SSkipDungeonCooldownVO(this.mapobjectVO.absAreaPos, this.mapobjectVO.kingdomID, null);
    }
  };
  SkippableCooldownMinuteSkipProperties.prototype.getMinuteSkipCommand = function (e) {
    if (m.instanceOfClass(this.mapobjectVO, "TreasureDungeonMapObjectVO")) {
      return new u.C2SMinuteSkipDungeonVO(e, this.mapobjectVO.kingdomID, this.mapobjectVO.absAreaPos.x, this.mapobjectVO.absAreaPos.y, this.mapobjectVO.tMapNode);
    } else {
      return new u.C2SMinuteSkipDungeonVO(e, this.mapobjectVO.kingdomID, this.mapobjectVO.absAreaPos.x, this.mapobjectVO.absAreaPos.y, null);
    }
  };
  SkippableCooldownMinuteSkipProperties.prototype.getPrimeSaleDiscount = function () {
    return 0;
  };
  SkippableCooldownMinuteSkipProperties.prototype.getRemainingTimeUntilFreeSkip = function () {
    return 0;
  };
  SkippableCooldownMinuteSkipProperties.prototype.getRemainingPrimeSaleTime = function () {
    return 0;
  };
  return SkippableCooldownMinuteSkipProperties;
}(o.BasicProperties);
exports.SkippableCooldownMinuteSkipProperties = g;
var C = require("./70.js");
var _ = require("./208.js");
a.classImplementsInterfaces(g, "IMinuteSkipProperties");
var m = require("./1.js");