Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./1.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./6.js");
var h = require("./28.js");
var g = require("./868.js");
var C = require("./71.js");
var _ = require("./87.js");
var m = require("./92.js");
var f = require("./4.js");
var O = require("./11.js");
var E = function (e) {
  function CastleSkipBuildingDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleSkipBuildingDialog.NAME) || this;
  }
  n.__extends(CastleSkipBuildingDialog, e);
  CastleSkipBuildingDialog.prototype.initLoaded = function (t = null) {
    this.initBasicButtons([this.dialogDisp.btnClose, this.dialogDisp.btnMinuteSkip, this.dialogDisp.btnFullSkip]);
    this.textFieldManager.registerTextField(this.dialogDisp.tfTitle, new u.LocalizedTextVO("instandBuild_skipBuilding_header"));
    this.textFieldManager.registerTextField(this.dialogDisp.tfCopy, new u.LocalizedTextVO("instandBuild_skipBuilding_text"));
    this.textRemainingTime = this.textFieldManager.registerTextField(this.dialogDisp.resttime_mask.tfRemainingTime, new d.TextVO("-"));
    this.dialogDisp.resttime_mask.tfRemainingTime.mouseEnabled = false;
    this.dialogDisp.buildingHolder.mouseChildren = false;
    this.dialogDisp.btnFullSkip.gotoAndStop(CastleSkipBuildingDialog.FRAME_RUBYSKIP);
    this.dialogDisp.btnMinuteSkip.toolTipText = "timeSkipButton_tooltip";
    e.prototype.initLoaded.call(this);
  };
  CastleSkipBuildingDialog.prototype.onProgress = function (e) {
    var t = this.basicBuilding.buildingVO ? p.int(this.basicBuilding.buildingVO.getTimeLeftForBuilding()) : 0;
    var i = f.CastleModel.specialEventData.getSkipCosts(this.basicBuilding, f.CastleModel.skipDiscountData.getBoostedSkipDiscount());
    this.textRemainingTime.textContentVO.stringValue = s.TimeStringHelper.getShortTimeStringBySeconds(t);
    this.dialogDisp.resttime_mask.buildingProgress.scaleX = this.basicBuilding.buildingVO ? this.basicBuilding.buildingVO.getPercentCompletedForBuilding() : 1;
    this.textFieldManager.registerTextField(this.dialogDisp.tfDesc, new u.LocalizedTextVO("instantBuild_skipBuilding_text_v2", [i]));
    this.updateSkipButton(i);
  };
  CastleSkipBuildingDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    var i;
    var n = f.CastleModel.areaData.activeConstructionList.getSlotByArrayPos(0);
    if (n.isFree) {
      f.CastleModel.areaData.activeConstructionList.setQueuedBuildingConstructionCommand(this.dialogProperties.buildingConstructionCommandVO, this.dialogProperties.wodID);
      this.hide();
      return;
    }
    this.basicBuilding = y.Iso.renderer.objects.provider.getObjectById(n.objectId);
    if (this.basicBuilding) {
      i = CastleSkipBuildingDialog.getBuildingVOToShow(this.basicBuilding);
      b.WodPicHelper.addWodPic(i, this.dialogDisp.buildingHolder, CastleSkipBuildingDialog.TARGET_MC_SIZE, CastleSkipBuildingDialog.TARGET_MC_SIZE);
      if (l.instanceOfClass(i, "DecoBuildingVO")) {
        this.dialogDisp.buildingHolder.toolTipText = {
          t: "questCondition_BuildBuildings",
          p: [i.getNameString()]
        };
      } else {
        this.dialogDisp.buildingHolder.toolTipText = {
          t: "building_with_level",
          p: [i.getNameString(), i.level]
        };
      }
      if (this.basicBuilding.vo) {
        this.basicBuilding.vo.addEventListener(m.IsoEvent.ON_BUILDING_BUILD_PROGRESS, this.bindFunction(this.onProgress));
      }
    }
    this.dialogDisp.resttime_mask.mouseChildren = false;
    this.dialogDisp.resttime_mask.toolTipText = "resttime";
    this.controller.addEventListener(C.AreaDataEvent.ON_CONSTRUCTION_LIST_CHANGED, this.bindFunction(this.onConstructionCompleted));
  };
  CastleSkipBuildingDialog.prototype.updateSkipButton = function (e) {
    if (e == 0) {
      this.dialogDisp.btnFullSkip.gotoAndStop(CastleSkipBuildingDialog.FRAME_FREESKIP);
      this.dialogDisp.btnFullSkip.toolTipText = "freeSkipButton_tooltip";
    } else if (f.CastleModel.skipDiscountData.hasBoostedSkipDiscount()) {
      this.dialogDisp.btnFullSkip.gotoAndStop(CastleSkipBuildingDialog.FRAME_DISCOUNTEDSKIP);
      var t = p.int(f.CastleModel.skipDiscountData.getBoostedSkipDiscountTime());
      var i = p.int(f.CastleModel.skipDiscountData.getBoostedSkipDiscount());
      var n = c.Localize.text("fullSkipButton_tooltip", [e]) + "\n";
      if (t >= h.ClientConstTime.HOURES_2_SEC) {
        if (h.ClientConstTime.isOneHour(t)) {
          n += c.Localize.text("dialog_timeSkip_discountedFullSkip_tooltipHours_singular", [new u.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE, [i])]);
        } else {
          n += c.Localize.text("dialog_timeSkip_discountedFullSkip_tooltipHours_plural", [new u.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE, [i]), (t * h.ClientConstTime.SEC_2_HOURES).toFixed(1)]);
        }
      } else if (h.ClientConstTime.isOneMinute(t)) {
        n += c.Localize.text("dialog_timeSkip_discountedFullSkip_tooltipHours_singular", [new u.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE, [i])]);
      } else {
        n += c.Localize.text("dialog_timeSkip_discountedFullSkip_tooltipMinutes_plural", [new u.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE, [i]), (t / h.ClientConstTime.MINUTES_2_SEC).toFixed(0)]);
      }
      this.dialogDisp.btnFullSkip.toolTipText = n;
    } else {
      this.dialogDisp.btnFullSkip.gotoAndStop(CastleSkipBuildingDialog.FRAME_RUBYSKIP);
      this.dialogDisp.btnFullSkip.toolTipText = {
        t: "fullSkipButton_tooltip",
        p: [e]
      };
    }
  };
  CastleSkipBuildingDialog.getBuildingVOToShow = function (e) {
    var t;
    switch (e.buildingVO.buildingState) {
      case _.IsoBuildingStateEnum.UPGRADE_STOPPED:
      case _.IsoBuildingStateEnum.UPGRADE_IN_PROGRESS:
      case _.IsoBuildingStateEnum.UPGRADE_COMPLETED:
        t = e.buildingVO.getUpgradeVO();
        break;
      default:
        t = e.buildingVO;
    }
    return t;
  };
  CastleSkipBuildingDialog.prototype.onConstructionCompleted = function (e) {
    if (f.CastleModel.areaData.activeConstructionList.hasFreeSlots()) {
      f.CastleModel.areaData.activeConstructionList.setQueuedBuildingConstructionCommand(this.dialogProperties.buildingConstructionCommandVO, this.dialogProperties.wodID);
      this.hide();
    }
  };
  CastleSkipBuildingDialog.prototype.hideLoaded = function (t = null) {
    a.MovieClipHelper.clearMovieClip(this.dialogDisp.buildingHolder);
    if (this.basicBuilding && this.basicBuilding.disp) {
      if (this.basicBuilding.vo) {
        this.basicBuilding.vo.removeEventListener(m.IsoEvent.ON_BUILDING_BUILD_PROGRESS, this.bindFunction(this.onProgress));
      }
      this.basicBuilding = null;
    }
    this.controller.removeEventListener(C.AreaDataEvent.ON_CONSTRUCTION_LIST_CHANGED, this.bindFunction(this.onConstructionCompleted));
    e.prototype.hideLoaded.call(this);
  };
  CastleSkipBuildingDialog.prototype.onClick = function (e) {
    switch (e.target) {
      case this.dialogDisp.btnClose:
        this.hide();
        break;
      case this.dialogDisp.btnFullSkip:
        if (this.basicBuilding) {
          if (this.basicBuilding.buildingVO && f.CastleModel.currencyData.c2Amount >= f.CastleModel.specialEventData.getSkipCosts(this.basicBuilding, f.CastleModel.skipDiscountData.getBoostedSkipDiscount())) {
            f.CastleModel.areaData.activeConstructionList.setQueuedBuildingConstructionCommand(this.dialogProperties.buildingConstructionCommandVO, this.dialogProperties.wodID);
          }
          if (this.basicBuilding.vo) {
            f.CastleModel.smartfoxClient.sendCommandVO(new g.C2SIsoFastCompleteObjectVO(this.basicBuilding.vo.objectId, f.CastleModel.specialEventData.hasSkipForFree(this.basicBuilding) ? 1 : 0));
          }
        }
        this.hide();
        break;
      case this.dialogDisp.btnMinuteSkip:
        this.minuteSkip();
    }
  };
  CastleSkipBuildingDialog.prototype.minuteSkip = function () {
    var e = f.CastleModel.areaData.activeConstructionList.getSlotByArrayPos(0);
    O.CastleExternalDialog.dialogHandler.registerDefaultDialogs(D.CastleMinuteSkipDialog, new I.BuildingMinuteSkipProperties(e.objectId));
  };
  Object.defineProperty(CastleSkipBuildingDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleSkipBuildingDialog.__initialize_static_members = function () {
    CastleSkipBuildingDialog.NAME = "CastleSkipBuilding";
    CastleSkipBuildingDialog.FRAME_RUBYSKIP = 1;
    CastleSkipBuildingDialog.FRAME_DISCOUNTEDSKIP = 2;
    CastleSkipBuildingDialog.FRAME_FREESKIP = 3;
    CastleSkipBuildingDialog.TARGET_MC_SIZE = 100;
  };
  return CastleSkipBuildingDialog;
}(O.CastleExternalDialog);
exports.CastleSkipBuildingDialog = E;
var y = require("./33.js");
var b = require("./63.js");
var D = require("./208.js");
var I = require("./1520.js");
r.classImplementsInterfaces(E, "ICollectableRendererList");
E.__initialize_static_members();