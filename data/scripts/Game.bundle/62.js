Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./4.js");
var c = require("./1515.js");
var u = require("./1516.js");
var d = require("./1517.js");
var p = require("./145.js");
var h = require("./87.js");
var g = require("./113.js");
var C = require("./293.js");
var _ = require("./122.js");
var m = require("./489.js");
var f = createjs.Point;
var O = function (e) {
  function ABasicBuildingVE() {
    var t = this;
    t._scaffoldRenderer = new H.IsoScaffoldRenderer();
    t._buildingGroundManager = new G.IsoBuildingGroundManager();
    t._isCollisionFloorVisible = false;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(ABasicBuildingVE, e);
  ABasicBuildingVE.prototype.init = function (t) {
    e.prototype.init.call(this, t);
    this.scaffoldRenderer.init(this.dispComponent.dispContainer, this.vo);
    this.buildingGroundManager.init(this);
  };
  ABasicBuildingVE.prototype.updateInteractionVisibility = function () {
    if (this.elementContainer) {
      e.prototype.updateInteractionVisibility.call(this);
      var t = this.buildingVO.isBuildingGroundViewAvailable && this.isoRenderer.strategies.currentStrategy.isActive(_.IsoRenderStrategyEnum.BUILDING_GROUND_VIEW);
      this.isoRenderer.mouse.hoveredTarget;
      var i = this.isoRenderer.mouse.focusedTarget == this;
      var n = this.isoRenderer.mouse.selectedTarget == this;
      var o = this.isoRenderer.mouse.draggedTarget == this;
      var a = i || n && t ? B.IsoConst.BUILDING_FOCUS_ALPHA : 1;
      this.buildingGroundManager.setVisibility(t && !o);
      this.buildingGroundManager.setIconVisibility(!n);
      this.layers.getLayer(C.IsoObjectLayerEnum.DISP).visible = !t || n || o;
      this.layers.getLayer(C.IsoObjectLayerEnum.DISP).alpha = a;
      this.additionalClips.setVisibility(!t || o || n);
      this.layers.getLayer(C.IsoObjectLayerEnum.ADDITIONAL_CLIPS).alpha = a;
      this.statusIcons.setVisibility(!t && !n && !o);
      this.updateDispBounds();
      this.statusIcons.updatePosition();
    }
  };
  ABasicBuildingVE.prototype.createDisp = function () {
    switch (this.buildingVO.buildingState) {
      case h.IsoBuildingStateEnum.BUILD_IN_PROGRESS:
      case h.IsoBuildingStateEnum.BUILD_STOPPED:
        this.addConstructionSiteClip();
    }
    switch (this.buildingVO.buildingState) {
      case h.IsoBuildingStateEnum.WAIT_FOR_SERVER:
      case h.IsoBuildingStateEnum.INITIAL:
      case h.IsoBuildingStateEnum.BUILD_STOPPED:
      case h.IsoBuildingStateEnum.BUILD_IN_PROGRESS:
        break;
      default:
        this.addBuildingClip();
    }
    this.addScaffoldClip();
  };
  ABasicBuildingVE.prototype.updateDisp = function () {
    e.prototype.updateDisp.call(this);
    this.buildingGroundManager.updateDisp();
    this.updateInteractionVisibility();
  };
  ABasicBuildingVE.prototype.destroyDisp = function () {
    this._buildingClip = null;
    this.scaffoldRenderer.destroy();
    this.setCollisionFloor(false);
    e.prototype.destroyDisp.call(this);
  };
  ABasicBuildingVE.prototype.addBuildingClip = function () {
    this.dispComponent.addClip(this._buildingClip = this.loadExternalClip(this.assetClipName, this.assetFileName, this.getDispClipColor(), 0, false, N.IsoHelper.view.getBuildingPlaceHolderClass(this.vo.width, this.vo.height)));
  };
  ABasicBuildingVE.prototype.addConstructionSiteClip = function () {
    var e = "Constructionsite_" + this.vo.width + "_" + this.vo.height;
    this.dispComponent.addClip(this.loadExternalClip(e, e));
  };
  ABasicBuildingVE.prototype.addScaffoldClip = function () {
    switch (this.buildingVO.buildingState) {
      case h.IsoBuildingStateEnum.DISASSEMBLE_STOPPED:
      case h.IsoBuildingStateEnum.REPAIR_STOPPED:
      case h.IsoBuildingStateEnum.UPGRADE_STOPPED:
      case h.IsoBuildingStateEnum.REPAIR_IN_PROGRESS:
      case h.IsoBuildingStateEnum.UPGRADE_IN_PROGRESS:
      case h.IsoBuildingStateEnum.DISASSEMBLE_IN_PROGRESS:
        this.scaffoldRenderer.render();
    }
  };
  ABasicBuildingVE.prototype.updateRotation = function () {
    e.prototype.updateRotation.call(this);
    this.buildingGroundManager.updateDisp();
  };
  ABasicBuildingVE.prototype.setCollisionFloorVisibility = function (e) {
    if (this.isCollisionFloorVisible != e) {
      this.setCollisionFloor(e);
    }
  };
  ABasicBuildingVE.prototype.setCollisionFloor = function (e) {
    var t = this.layers.getLayer(C.IsoObjectLayerEnum.FLOOR);
    t.removeChildren();
    t.useFilters([]);
    this._isCollisionFloorVisible = e;
    if (this.isCollisionFloorVisible) {
      t.addChild(N.IsoHelper.view.createFloorDisp(new f(this.vo.rotatedWidth, this.vo.rotatedHeight), 0, 0.2));
    }
  };
  ABasicBuildingVE.prototype.updateDragCollisionFloorEffect = function (e) {
    var t = this.layers.getLayer(C.IsoObjectLayerEnum.FLOOR);
    if (t) {
      t.useFilters(e ? [B.IsoConst.DRAG_VALID_FILTER] : [B.IsoConst.DRAG_INVALID_FILTER], true);
    }
  };
  ABasicBuildingVE.prototype.renewCollisionFloor = function () {
    this.setCollisionFloor(this.isCollisionFloorVisible);
  };
  Object.defineProperty(ABasicBuildingVE.prototype, "damageScale", {
    get: function () {
      var e = 1 + this.buildingVO.damageFactor;
      switch (Math.min(this.buildingVO.width, this.buildingVO.height)) {
        case 4:
          e *= 0.75;
          break;
        case 3:
          e *= 0.5;
          break;
        case 2:
          e *= 0.25;
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  ABasicBuildingVE.prototype.createAdditionalClips = function () {
    this.additionalClips.addClips(p.IsoAdditionalClipEnum.FLAG, 12, 1, true);
    if (this.buildingVO.damageFactor > 0) {
      if (this.buildingVO.damageType == r.ConstructionConst.DAMAGE_TYPE_FIRE) {
        this.additionalClips.addClips(p.IsoAdditionalClipEnum.DAMAGE, 12, this.damageScale / 2);
      } else {
        this.additionalClips.addClips(p.IsoAdditionalClipEnum.PLAGUE, 24, this.damageScale);
      }
    } else {
      this.additionalClips.removeClips(p.IsoAdditionalClipEnum.DAMAGE);
      this.additionalClips.removeClips(p.IsoAdditionalClipEnum.PLAGUE);
    }
  };
  ABasicBuildingVE.prototype.createStatusIcons = function () {
    if (this.isoRenderer.strategies.currentStrategy.isActive(_.IsoRenderStrategyEnum.UPGRADE_VIEW) && (!this.isoRenderer.strategies.currentStrategy.isActive(_.IsoRenderStrategyEnum.BUILDING_GROUND_VIEW) || this.showUpgradeableIconInBuildingGroundView()) && this.buildingVO.upgradeAvailable) {
      this.statusIcons.setVisibility(true);
      if (l.CastleModel.primeSaleData.getBestDiscountPrimeSaleComponentByShopVO(this.buildingVO, true)) {
        this.statusIcons.addIcon(F.IsoStatusIconEnum.UPGRADE_PRIME_SALE);
      } else {
        this.statusIcons.addIcon(F.IsoStatusIconEnum.UPGRADE);
      }
    } else if (this.buildingVO.buildingState.isWaitingForServerRequest) {
      this.statusIcons.addIcon(F.IsoStatusIconEnum.WAIT);
    } else if (this.buildingVO.buildingState.isInProgress) {
      this.statusIcons.addIcon(F.IsoStatusIconEnum.PROGRESS_BAR_BUILDING);
    }
    if (this.buildingVO.canShowConstructionHelpIcon()) {
      this.statusIcons.addIcon(F.IsoStatusIconEnum.CONSTRUCTION_HELP);
    }
  };
  ABasicBuildingVE.prototype.showUpgradeableIconInBuildingGroundView = function () {
    return false;
  };
  Object.defineProperty(ABasicBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  ABasicBuildingVE.prototype.getRingMenuButtons = function () {
    var e = [];
    e.push(new v.RingMenuButtonInstantBuild());
    e.push(new x.RingMenuButtonUpgradeBuilding());
    e.push(new R.RingMenuButtonSell());
    e.push(new D.RingMenuButtonDisassemble());
    e.push(new M.RingMenuButtonRotate());
    e.push(new L.RingMenuButtonRepair());
    e.push(new T.RingMenuButtonInfo());
    e.push(new P.RingMenuButtonRepairHelpRequest());
    e.push(new y.RingMenuButtonConstructionHelpRequest());
    e.push(new w.RingMenuButtonVillage());
    e.push(new b.RingMenuButtonDefence());
    e.push(new A.RingMenuButtonMove());
    e.push(new S.RingMenuButtonMinuteSkip());
    e.push(new I.RingMenuButtonEquip());
    e.push(new j.RingMenuButtonBuildingDistrictAdd());
    e.push(new u.RingMenuButtonGeneralsHub());
    e.push(new d.RingMenuButtonGeneralsOverview());
    e.push(new c.RingMenuButtonGacha());
    if (!o.EnvGlobalsHandler.globals.isOnSpecialServer) {
      e.push(new V.RingMenuButtonStore());
    }
    return e;
  };
  ABasicBuildingVE.prototype.getVELayerType = function () {
    return g.IsoLayerEnum.ISO_OBJECTS;
  };
  Object.defineProperty(ABasicBuildingVE.prototype, "uiDisp", {
    get: function () {
      if (this.isoRenderer.strategies.currentStrategy.isActive(_.IsoRenderStrategyEnum.BUILDING_GROUND_VIEW) && this.buildingVO.isBuildingGroundViewAvailable && !this.hasRingMenu) {
        return this.layers.getLayer(C.IsoObjectLayerEnum.BUILDING_GROUND);
      } else {
        return Object.getOwnPropertyDescriptor(U.AIsoObjectVE.prototype, "uiDisp").get.call(this);
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(m.AInteractiveIsoObjectVE.prototype, "uiDisp").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  ABasicBuildingVE.prototype.onAllDispClipsLoaded = function () {
    e.prototype.onAllDispClipsLoaded.call(this);
    this.invalidateGlowCache();
    if (this._buildingClip && !this._buildingClip.running) {
      this.disp.cacheAsBitmap = true;
    }
  };
  ABasicBuildingVE.prototype.onRenderStrategyChanged = function (e) {
    this.updateInteractionVisibility();
    this.updateStatusIcon();
    if (k.Iso.renderer.strategies.hasModeChanged(_.IsoRenderStrategyEnum.UPGRADE_VIEW)) {
      this.buildingGroundManager.updateIcon();
    }
  };
  ABasicBuildingVE.prototype.onAllianceHelpUpdated = function (e) {
    if (e.requestVO && E.instanceOfClass(e.requestVO.optionalParams, "AllianceHelpRequestConstructionParamsVO")) {
      var t = e.requestVO.optionalParams;
      if (t.objectID == this.vo.objectId && t.areaID == this.isoRenderer.isoData.areaData.areaId && t.kingdomID == this.isoRenderer.isoData.areaData.areaInfo.kingdomID) {
        this.updateStatusIcon();
      }
    }
  };
  Object.defineProperty(ABasicBuildingVE.prototype, "buildingVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicBuildingVE.prototype, "scaffoldRenderer", {
    get: function () {
      return this._scaffoldRenderer;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicBuildingVE.prototype, "buildingGroundManager", {
    get: function () {
      return this._buildingGroundManager;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicBuildingVE.prototype, "buildingClip", {
    get: function () {
      return this._buildingClip;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicBuildingVE.prototype, "isCollisionFloorVisible", {
    get: function () {
      return this._isCollisionFloorVisible;
    },
    enumerable: true,
    configurable: true
  });
  ABasicBuildingVE.prototype.onSpecialEventUpdated = function (e) {
    if (e.specialEventVO.eventId == s.EventConst.EVENTTYPE_EVENT_SKIN) {
      this.updateDisp();
    }
  };
  return ABasicBuildingVE;
}(m.AInteractiveIsoObjectVE);
exports.ABasicBuildingVE = O;
a.classImplementsInterfaces(O, "ICollectableRendererList", "IIngameUICapable");
var E = require("./1.js");
var y = require("./1518.js");
var b = require("./2777.js");
var D = require("./2778.js");
var I = require("./2779.js");
var T = require("./1519.js");
var v = require("./2780.js");
var S = require("./2781.js");
var A = require("./2783.js");
var L = require("./2784.js");
var P = require("./2785.js");
var M = require("./2786.js");
var R = require("./2787.js");
var V = require("./2788.js");
var x = require("./1522.js");
var w = require("./2789.js");
var B = require("./144.js");
var F = require("./177.js");
var N = require("./46.js");
var k = require("./33.js");
var U = require("./313.js");
var G = require("./2803.js");
var H = require("./2804.js");
var j = require("./2805.js");