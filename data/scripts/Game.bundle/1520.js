Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./868.js");
var c = require("./2782.js");
var u = require("./87.js");
var d = require("./4.js");
var p = function (e) {
  function BuildingMinuteSkipProperties(t) {
    var i = this;
    i.buildingObjectId = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).buildingObjectId = t;
    return i;
  }
  n.__extends(BuildingMinuteSkipProperties, e);
  Object.defineProperty(BuildingMinuteSkipProperties.prototype, "basicBuilding", {
    get: function () {
      return h.Iso.renderer.objects.provider.getObjectById(this.buildingObjectId);
    },
    enumerable: true,
    configurable: true
  });
  BuildingMinuteSkipProperties.prototype.getMinuteSkipCommand = function (e) {
    return new c.C2SMinuteSkipBuildingVO(e, this.basicBuilding.vo.objectId);
  };
  BuildingMinuteSkipProperties.prototype.getFullSkipCommand = function () {
    return new l.C2SIsoFastCompleteObjectVO(this.basicBuilding.vo.objectId, this.isFreeSkipActive() ? 1 : 0);
  };
  BuildingMinuteSkipProperties.prototype.isSkipAppliable = function () {
    return !!this.basicBuilding && this.basicBuilding.buildingVO && (this.basicBuilding.buildingVO.buildingState.isInProgress || this.basicBuilding.buildingVO.buildingState.isStopped);
  };
  BuildingMinuteSkipProperties.prototype.isFreeSkipActive = function () {
    return this.getSkipCost() == 0;
  };
  BuildingMinuteSkipProperties.prototype.isPrimeSaleActive = function () {
    return d.CastleModel.skipDiscountData.hasBoostedSkipDiscount();
  };
  BuildingMinuteSkipProperties.prototype.getPrimeSaleDiscount = function () {
    return r.int(d.CastleModel.skipDiscountData.getBoostedSkipDiscount());
  };
  BuildingMinuteSkipProperties.prototype.getNameText = function () {
    return new s.LocalizedTextVO(this.showBuildingVO.getNameString());
  };
  BuildingMinuteSkipProperties.prototype.getAdditionalInfo = function () {
    return new s.LocalizedTextVO("building_level", [this.showBuildingVO.level]);
  };
  BuildingMinuteSkipProperties.prototype.getIconFrame = function () {
    switch (this.basicBuilding.buildingVO.buildingState) {
      case u.IsoBuildingStateEnum.DISASSEMBLE_STOPPED:
      case u.IsoBuildingStateEnum.DISASSEMBLE_IN_PROGRESS:
        return r.int(_.CastleMinuteSkipDialog.ICONFRAME_DEMOLISH);
      case u.IsoBuildingStateEnum.REPAIR_STOPPED:
      case u.IsoBuildingStateEnum.REPAIR_IN_PROGRESS:
        return r.int(_.CastleMinuteSkipDialog.ICONFRAME_REPAIR);
      default:
        return r.int(_.CastleMinuteSkipDialog.ICONFRAME_BUILDING);
    }
  };
  BuildingMinuteSkipProperties.prototype.getIconToolTipText = function () {
    switch (this.basicBuilding.buildingVO.buildingState) {
      case u.IsoBuildingStateEnum.DISASSEMBLE_STOPPED:
      case u.IsoBuildingStateEnum.DISASSEMBLE_IN_PROGRESS:
        return "destroy";
      case u.IsoBuildingStateEnum.REPAIR_STOPPED:
      case u.IsoBuildingStateEnum.REPAIR_IN_PROGRESS:
        return "repair";
      case u.IsoBuildingStateEnum.UPGRADE_STOPPED:
      case u.IsoBuildingStateEnum.UPGRADE_IN_PROGRESS:
        return "upgrade";
      default:
        return "build";
    }
  };
  BuildingMinuteSkipProperties.prototype.displayPicture = function (e) {
    return g.WodPicHelper.addWodPic(this.showBuildingVO, e, _.CastleMinuteSkipDialog.PICTURE_WIDTH, _.CastleMinuteSkipDialog.PICTURE_HEIGHT);
  };
  BuildingMinuteSkipProperties.prototype.getTotalTime = function () {
    return this.basicBuilding.buildingVO.currentBuildingStateTime;
  };
  BuildingMinuteSkipProperties.prototype.getRemainingTime = function () {
    return this.basicBuilding.buildingVO.getTimeLeftForBuilding();
  };
  BuildingMinuteSkipProperties.prototype.getSkipCost = function () {
    return r.int(d.CastleModel.specialEventData.getSkipCosts(this.basicBuilding, d.CastleModel.skipDiscountData.getBoostedSkipDiscount()));
  };
  Object.defineProperty(BuildingMinuteSkipProperties.prototype, "showBuildingVO", {
    get: function () {
      return C.CastleSkipBuildingDialog.getBuildingVOToShow(this.basicBuilding);
    },
    enumerable: true,
    configurable: true
  });
  BuildingMinuteSkipProperties.prototype.getRemainingPrimeSaleTime = function () {
    return d.CastleModel.skipDiscountData.getBoostedSkipDiscountTime();
  };
  return BuildingMinuteSkipProperties;
}(o.BasicProperties);
exports.BuildingMinuteSkipProperties = p;
var h = require("./33.js");
var g = require("./63.js");
var C = require("./638.js");
var _ = require("./208.js");
a.classImplementsInterfaces(p, "IMinuteSkipProperties");