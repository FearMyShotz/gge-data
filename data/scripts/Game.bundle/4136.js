Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./3.js");
var c = require("./6.js");
var u = require("./87.js");
var d = require("./92.js");
var p = require("./4.js");
var h = require("./1569.js");
var g = createjs.MouseEvent;
var C = function (e) {
  function CastleBuildingListItem(t) {
    var i = e.call(this, t) || this;
    i.itemSize = 64;
    i.itemSpace = 12;
    i.itemSlotSize = i.itemSize + i.itemSpace;
    i.targetMcSize = i.itemSize * 0.8;
    i.buildingListItemMC.addEventListener(g.MOUSE_OVER, i.bindFunction(i.onMouseOver));
    i.buildingListItemMC.addEventListener(g.CLICK, i.bindFunction(i.onClick));
    i.itxt_info = i.textFieldManager.registerTextField(i.buildingListItemMC.content.txt_info, new l.TextVO(""), new a.InternalGGSTextFieldConfigVO(true));
    return i;
  }
  n.__extends(CastleBuildingListItem, e);
  CastleBuildingListItem.prototype.setIcons = function () {
    this.buildingListItemMC.icon_Lock.visible = this.isLocked;
    this.buildingListItemMC.content.visible = !this.isLocked && !this.isFree;
    this.buildingListItemMC.icon_wait.visible = this.constructionSlotVO.isWaitingSlot() && !this.constructionSlotVO.isFree && !this.constructionSlotVO.isLocked;
    this.buildingListItemMC.mc_building.visible = !this.constructionSlotVO.isWaitingSlot();
    this._disp.actLikeButton = !this.buildingListItemMC.icon_Lock.visible;
  };
  Object.defineProperty(CastleBuildingListItem.prototype, "targetBuilding", {
    get: function () {
      return this._target;
    },
    set: function (e) {
      if (this._target && this._target.disp) {
        this._target.vo.removeEventListener(d.IsoEvent.ON_BUILDING_BUILD_PROGRESS, this.bindFunction(this.onProgress));
      }
      this._target = e;
      this.buildingListItemMC.mc_statusIcon.visible = false;
      if (this._target) {
        if (!this._target.buildingVO) {
          console.error("BuildingListItem, target VO is undefined: " + r.getQualifiedClassName(this._target));
          return;
        }
        this.onProgress();
        this.showTarget();
        this._target.vo.addEventListener(d.IsoEvent.ON_BUILDING_BUILD_PROGRESS, this.bindFunction(this.onProgress));
        this.buildingListItemMC.content.visible = true;
      } else {
        this.buildingListItemMC.icon_Lock.visible = false;
        this.buildingListItemMC.icon_wait.visible = false;
        this.buildingListItemMC.content.visible = false;
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleBuildingListItem.prototype.onClick = function (e) {
    if (this.targetBuilding) {
      this._target = _.Iso.renderer.objects.provider.getObjectById(this.targetBuilding.vo.objectId);
      if (this.targetBuilding) {
        this.targetBuilding.hasRingMenu = false;
        switch (this.targetBuilding.buildingVO.buildingState) {
          case u.IsoBuildingStateEnum.BUILD_COMPLETED:
            _.Iso.renderer.mouse.changeSelectedTarget(this.targetBuilding);
            break;
          case u.IsoBuildingStateEnum.BUILD_STOPPED:
          case u.IsoBuildingStateEnum.DISASSEMBLE_STOPPED:
          case u.IsoBuildingStateEnum.UPGRADE_STOPPED:
          case u.IsoBuildingStateEnum.REPAIR_STOPPED:
          case u.IsoBuildingStateEnum.DISASSEMBLE_IN_PROGRESS:
          case u.IsoBuildingStateEnum.BUILD_IN_PROGRESS:
          case u.IsoBuildingStateEnum.UPGRADE_IN_PROGRESS:
          case u.IsoBuildingStateEnum.REPAIR_IN_PROGRESS:
            _.Iso.renderer.mouse.changeSelectedTarget(this.targetBuilding);
            if (r.instanceOfClass(this.targetBuilding, "BasicMoatVE") || r.instanceOfClass(this.targetBuilding, "PremiumMoatVE")) {
              _.Iso.renderer.camera.scrollToGridPos(this.targetBuilding.moatVO.positions.gate.pos);
            } else {
              _.Iso.renderer.camera.scrollToGridPos(this.targetBuilding.vo.pos);
            }
            this.targetBuilding.hasRingMenu = true;
        }
        _.Iso.renderer.mouse.changeSelectedTarget(this.targetBuilding);
      } else if (!m.CastleLayoutManager.getInstance().isInMyCastleBuildMode && !this.buildingListItemMC.icon_Lock.visible) {
        m.CastleLayoutManager.getInstance().hideAllIngameUIComponents();
        _.Iso.controller.viewUpdater.switchBuildModeInOwnCastle(true);
      }
    }
  };
  CastleBuildingListItem.prototype.onMouseOver = function (e) {
    if (!this._slotVO.isLocked && this._slotVO.isFree) {
      this.buildingListItemMC.toolTipText = "panel_action_build";
    } else if (this._slotVO.isWaitingSlot()) {
      this.initQueueTooltip();
    } else {
      this.initProductionSlotTooltip();
    }
  };
  CastleBuildingListItem.prototype.initProductionSlotTooltip = function () {
    var e;
    if (p.CastleModel.areaData.activeConstructionList) {
      e = c.int(p.CastleModel.areaData.activeConstructionList.nextAllowedBuildersLevelRequirement);
    }
    if (p.CastleModel.areaData.activeConstructionList.isBuildersQuartersUnderConstruction) {
      this.buildingListItemMC.toolTipText = "panel_buildinglist_SlotBuildConstruction ";
    } else if (p.CastleModel.areaData.activeConstructionList.isBuildersQuartersBuilt) {
      if (this._slotVO.isLocked) {
        if (p.CastleModel.userData.userLevel < e) {
          this.buildingListItemMC.toolTipText = {
            t: "panel_buildinglist_SlotBuildUpgradeCap",
            p: [e]
          };
        } else {
          this.buildingListItemMC.toolTipText = "panel_buildinglist_SlotUpgrade";
        }
      } else {
        this.buildingListItemMC.toolTipText = this.getBuildingTooltip();
      }
    } else if (p.CastleModel.userData.userLevel < e) {
      this.buildingListItemMC.toolTipText = {
        t: "panel_buildinglist_SlotLevelCap",
        p: [e]
      };
    } else if (this._slotVO.isLocked) {
      this.buildingListItemMC.toolTipText = "panel_buildinglist_SlotBuild";
    } else {
      this.buildingListItemMC.toolTipText = this.getBuildingTooltip();
    }
  };
  CastleBuildingListItem.prototype.initQueueTooltip = function () {
    var e;
    if (p.CastleModel.areaData.activeConstructionList) {
      e = c.int(p.CastleModel.areaData.activeConstructionList.nextAllowedCraneLevelRequirement);
    }
    if (p.CastleModel.areaData.activeConstructionList.isCraneUnderConstruction) {
      this.buildingListItemMC.toolTipText = "panel_buildinglist_SlotConstruction";
    } else if (p.CastleModel.areaData.activeConstructionList.isCraneBuilt) {
      if (this._slotVO.isLocked) {
        if (p.CastleModel.userData.userLevel < e) {
          this.buildingListItemMC.toolTipText = {
            t: "panel_buildinglist_SlotUpgradeCap",
            p: [e]
          };
        } else {
          this.buildingListItemMC.toolTipText = "panel_buildinglist_SlotUpgrade";
        }
      } else {
        this.buildingListItemMC.toolTipText = this.getBuildingTooltip();
      }
    } else if (p.CastleModel.userData.userLevel < e) {
      this.buildingListItemMC.toolTipText = {
        t: "panel_buildinglist_SlotLevelCap",
        p: [e]
      };
    } else if (!p.CastleModel.areaData.activeConstructionList.allSlotsBought() && this._slotVO.isLocked) {
      this.buildingListItemMC.toolTipText = "panel_buildinglist_SlotQueue";
    } else {
      this.buildingListItemMC.toolTipText = this.getBuildingTooltip();
    }
  };
  CastleBuildingListItem.prototype.getBuildingTooltip = function () {
    if (!this._target || !this._target.buildingVO) {
      return null;
    }
    var e = c.int(this._target.buildingVO.level);
    if (e != 1 || this._target.buildingVO.hasUpgrade) {
      if (this._target.buildingVO.buildingState == u.IsoBuildingStateEnum.UPGRADE_IN_PROGRESS || this._target.buildingVO.buildingState == u.IsoBuildingStateEnum.UPGRADE_STOPPED || this._target.buildingVO.buildingState == u.IsoBuildingStateEnum.UPGRADE_COMPLETED) {
        e++;
      }
      return {
        t: "building_with_level",
        p: [this._target.buildingVO.getNameString(), e]
      };
    } else {
      return {
        t: this._target.buildingVO.getNameString()
      };
    }
  };
  CastleBuildingListItem.prototype.onProgress = function (e = null) {
    if (this._target) {
      this.itxt_info.textContentVO.stringValue = s.TimeStringHelper.getShortTimeStringBySeconds(this._target.buildingVO.getTimeLeftForBuilding());
    }
    this.buildingListItemMC.content.progressBar.scaleX = this._target.buildingVO.getPercentCompletedForBuilding();
    this.buildingListItemMC.content.progressBar.visible = this.showProgressbar;
    m.CastleLayoutManager.getInstance().getPanel(O.CastleBuildingListPanel).updateCache();
  };
  CastleBuildingListItem.prototype.showTarget = function () {
    var e;
    switch (this._target.buildingVO.buildingState) {
      case u.IsoBuildingStateEnum.UPGRADE_STOPPED:
      case u.IsoBuildingStateEnum.UPGRADE_IN_PROGRESS:
      case u.IsoBuildingStateEnum.UPGRADE_COMPLETED:
        e = this._target.buildingVO.getUpgradeVO() ? this._target.buildingVO.getUpgradeVO() : this._target.buildingVO;
        break;
      default:
        e = this._target.buildingVO;
    }
    f.WodPicHelper.addWodPic(e, this.buildingListItemMC.content.mc_container, this.targetMcSize, this.targetMcSize);
    switch (this._target.buildingVO.buildingState) {
      case u.IsoBuildingStateEnum.BUILD_IN_PROGRESS:
      case u.IsoBuildingStateEnum.BUILD_STOPPED:
        this.buildingListItemMC.mc_statusIcon.visible = false;
        this.buildingListItemMC.mc_statusIcon.gotoAndStop(1);
        break;
      case u.IsoBuildingStateEnum.UPGRADE_IN_PROGRESS:
      case u.IsoBuildingStateEnum.UPGRADE_STOPPED:
        this.buildingListItemMC.mc_statusIcon.visible = true;
        this.buildingListItemMC.mc_statusIcon.gotoAndStop(2);
        break;
      case u.IsoBuildingStateEnum.DISASSEMBLE_STOPPED:
      case u.IsoBuildingStateEnum.DISASSEMBLE_IN_PROGRESS:
        this.buildingListItemMC.mc_statusIcon.visible = true;
        this.buildingListItemMC.mc_statusIcon.gotoAndStop(3);
        break;
      case u.IsoBuildingStateEnum.REPAIR_STOPPED:
      case u.IsoBuildingStateEnum.REPAIR_IN_PROGRESS:
        this.buildingListItemMC.mc_statusIcon.visible = true;
        this.buildingListItemMC.mc_statusIcon.gotoAndStop(4);
    }
  };
  CastleBuildingListItem.prototype.remove = function () {
    this.buildingListItemMC.removeEventListener(g.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this.buildingListItemMC.removeEventListener(g.CLICK, this.bindFunction(this.onClick));
    if (this._target && this._target.disp) {
      this._target.vo.removeEventListener(d.IsoEvent.ON_BUILDING_BUILD_PROGRESS, this.bindFunction(this.onProgress));
    }
    e.prototype.remove.call(this);
  };
  Object.defineProperty(CastleBuildingListItem.prototype, "constructionSlotVO", {
    get: function () {
      return this.slotVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBuildingListItem.prototype, "buildingListItemMC", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBuildingListItem.prototype, "textFieldManager", {
    get: function () {
      return o.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return CastleBuildingListItem;
}(h.BasicBuildListItem);
exports.CastleBuildingListItem = C;
var _ = require("./33.js");
var m = require("./17.js");
var f = require("./63.js");
var O = require("./1861.js");