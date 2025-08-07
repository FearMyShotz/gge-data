Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./87.js");
var l = require("./4.js");
var c = require("./35.js");
var u = require("./185.js");
var d = function () {
  function RingmenuBuildingProgressInfo(e) {
    this._disp = e;
    this.itxt_time = n.GoodgameTextFieldManager.getInstance().registerTextField(e.statusBar.txt_time, new s.TextVO(""));
    e.mc_textInfo.visible = false;
    e.txt_cost0.visible = false;
  }
  RingmenuBuildingProgressInfo.prototype.init = function (e) {
    this.targetBuilding = e;
  };
  RingmenuBuildingProgressInfo.prototype.update = function () {
    if (this.targetBuilding) {
      this._disp.visible = this.isBuildingInProgress() || this.isChargingMineBuilding() || this.isCollectingTaxKeepBuilding();
      if (this._disp.visible) {
        this._disp.statusBar.mc_icon.gotoAndStop(this.statusBarIconFrame);
        if (this.isCollectingTaxKeepBuilding()) {
          this.itxt_time.textContentVO.stringValue = l.CastleModel.taxData.taxInfoVO.taxAmountString;
          this.itxt_time.autoFitToBounds = true;
          this._disp.statusBar.progressbar.scaleX = this.targetBuilding.keepBuildingVO.taxCollectProgressAsFactor;
        } else if (this.isBuildingInProgress()) {
          this.itxt_time.textContentVO.stringValue = o.TimeStringHelper.getShortTimeStringBySeconds(this.targetBuilding.buildingVO.getTimeLeftForBuilding());
          this.itxt_time.autoFitToBounds = true;
          this._disp.statusBar.progressbar.scaleX = this.targetBuilding.buildingVO.getPercentCompletedForBuilding();
          u.SubscriptionHelper.showSubscriptionStarToTextField(this.itxt_time, l.CastleModel.specialEventData.hasSkipForFree(this.targetBuilding) && l.CastleModel.subscriptionData.isEffectTypeActive(c.EffectTypeEnum.EFFECT_TYPE_FREE_SKIP_BONUS), 0, null, false, 16246743);
        } else if (this.isChargingMineBuilding()) {
          this.itxt_time.textContentVO.stringValue = o.TimeStringHelper.getShortTimeStringBySeconds(this.targetBuilding.mineBuildingVO.getTimeLeftForCollect());
          this.itxt_time.autoFitToBounds = true;
          this._disp.statusBar.progressbar.scaleX = this.targetBuilding.buildingVO.getPercentCompletedForBuilding();
        }
      }
    }
  };
  Object.defineProperty(RingmenuBuildingProgressInfo.prototype, "statusBarIconFrame", {
    get: function () {
      if (this.isChargingMineBuilding() || this.isCollectingTaxKeepBuilding()) {
        return 5;
      }
      switch (this.targetBuilding.buildingVO.buildingState) {
        case r.IsoBuildingStateEnum.DISASSEMBLE_IN_PROGRESS:
        case r.IsoBuildingStateEnum.DISASSEMBLE_STOPPED:
          return 3;
        case r.IsoBuildingStateEnum.BUILD_IN_PROGRESS:
        case r.IsoBuildingStateEnum.BUILD_STOPPED:
          return 1;
        case r.IsoBuildingStateEnum.REPAIR_IN_PROGRESS:
        case r.IsoBuildingStateEnum.REPAIR_STOPPED:
          return 4;
        case r.IsoBuildingStateEnum.UPGRADE_IN_PROGRESS:
        case r.IsoBuildingStateEnum.UPGRADE_STOPPED:
          return 2;
      }
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  RingmenuBuildingProgressInfo.prototype.isBuildingInProgress = function () {
    switch (this.targetBuilding.buildingVO.buildingState) {
      case r.IsoBuildingStateEnum.BUILD_COMPLETED:
      case r.IsoBuildingStateEnum.DISASSEMBLED_COMPLETED:
      case r.IsoBuildingStateEnum.UPGRADE_COMPLETED:
        return false;
      default:
        return true;
    }
  };
  RingmenuBuildingProgressInfo.prototype.isChargingMineBuilding = function () {
    return !!a.instanceOfClass(this.targetBuilding.buildingVO, "AMineBuildingVO") && this.targetBuilding.buildingVO.isCharging;
  };
  RingmenuBuildingProgressInfo.prototype.isCollectingTaxKeepBuilding = function () {
    return !!a.instanceOfClass(this.targetBuilding, "KeepBuildingVE") && !!l.CastleModel.tutorialData.isTutorialFinished() && this.targetBuilding.keepBuildingVO.canCollectTax;
  };
  return RingmenuBuildingProgressInfo;
}();
exports.RingmenuBuildingProgressInfo = d;