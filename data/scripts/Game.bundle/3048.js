Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./4.js");
var r = require("./293.js");
var l = require("./122.js");
var c = require("./62.js");
var u = createjs.Point;
var d = createjs.Container;
var p = function (e) {
  function KeepBuildingVE() {
    var t = this;
    t._isHovered = false;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(KeepBuildingVE, e);
  KeepBuildingVE.prototype.init = function (t) {
    e.prototype.init.call(this, t);
    this.elementContainer.mouseChildren = true;
    this.updateSpotDisp();
  };
  KeepBuildingVE.prototype.destroy = function () {
    this.destroySpotDisp();
    e.prototype.destroy.call(this);
  };
  KeepBuildingVE.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    s.CastleModel.taxData.onTaxChanged.add(this.bindFunction(this.onTaxChanged));
  };
  KeepBuildingVE.prototype.removeEventListener = function () {
    e.prototype.removeEventListener.call(this);
    s.CastleModel.taxData.onTaxChanged.remove(this.bindFunction(this.onTaxChanged));
  };
  KeepBuildingVE.prototype.destroySpotDisp = function () {
    if (this._spotDisp && this._spotDisp.parent) {
      this._spotDisp.parent.removeChild(this._spotDisp);
    }
    this._spotDisp = null;
    this.isoRenderer.objects.judgements.updateSpots();
  };
  KeepBuildingVE.prototype.updateRotation = function () {
    e.prototype.updateRotation.call(this);
    this.updateSpotDisp();
  };
  KeepBuildingVE.prototype.onTaxChanged = function (e) {
    this.updateStatusIcon();
  };
  KeepBuildingVE.prototype.createStatusIcons = function () {
    e.prototype.createStatusIcons.call(this);
    if (!!this.keepBuildingVO.buildingState.isFunctionally && !this.keepBuildingVO.buildingState.isInProgress && !this.isoRenderer.strategies.currentStrategy.isActive(l.IsoRenderStrategyEnum.BUILDING_GROUND_VIEW) && !this.statusIcons.isUpgradeIconActive) {
      if (this.keepBuildingVO.canCollectTax) {
        this.statusIcons.addIcon(g.IsoStatusIconEnum.TAX_COLLECTABLE);
      } else if (this._isHovered && this.keepBuildingVO.taxInfoVO.isCollecting) {
        this.statusIcons.addIcon(g.IsoStatusIconEnum.PROGRESS_BAR_TAX);
      }
    }
  };
  Object.defineProperty(KeepBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_Keep;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.ABasicBuildingVE.prototype, "buildingGroundIconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  KeepBuildingVE.prototype.getDispClipColor = function () {
    var t = e.prototype.getDispClipColor.call(this);
    var i = [];
    i.push(C.IsoHelper.view.getIsoColorsByKingdomId(this.vo.isoData.areaData.areaInfo.kingdomID).buildingGroundColor);
    t.push(new o.ClipColor("buildingground", i));
    return t;
  };
  KeepBuildingVE.prototype.getRingMenuButtons = function () {
    var t = e.prototype.getRingMenuButtons.call(this);
    t.push(new h.RingMenuButtonTax());
    return t;
  };
  KeepBuildingVE.prototype.getInteractionDisps = function () {
    return [this.layers.getLayer(r.IsoObjectLayerEnum.DISP), this.layers.getLayer(r.IsoObjectLayerEnum.ADDITIONAL_CLIPS), this.layers.getLayer(r.IsoObjectLayerEnum.STATUS_ICONS), this.layers.getLayer(r.IsoObjectLayerEnum.BUILDING_GROUND)];
  };
  KeepBuildingVE.prototype.updateSpotDisp = function () {
    if (!this._spotDisp) {
      this.elementContainer.addChild(this._spotDisp = new d());
    }
    var e = this.isoRenderer.camera.getScreenPosByGridPosDelta(this.getJudgementSpotGridOffset());
    this.spotDisp.x = e.x;
    this.spotDisp.y = e.y;
    this.isoRenderer.objects.judgements.updateSpots();
  };
  KeepBuildingVE.prototype.getJudgementSpotGridOffset = function () {
    var e = new u();
    if (this.keepBuildingVO.appearanceItem) {
      if (this.keepBuildingVO.appearanceItem.name == "alienKeep") {
        e.x = -6;
        e.y = -1;
      }
      if (this.keepBuildingVO.appearanceItem.name == "elvenKeep") {
        e.x = -1;
        e.y = 2;
      }
      if (this.keepBuildingVO.appearanceItem.name == "witchesManor") {
        e.x = -1;
        e.y = 2;
      }
      if (this.keepBuildingVO.appearanceItem.name == "roseKeep") {
        e.x = -12;
        e.y = -8.6;
      }
      if (this.keepBuildingVO.appearanceItem.name == "winterKeep") {
        e.x = -1;
        e.y = 2;
      }
    } else {
      switch (this.keepBuildingVO.level) {
        case 8:
          e.x = 2;
          e.y = 1.3;
          break;
        case 7:
          e.x = 1.9;
          e.y = 1;
          break;
        case 6:
          e.x = -11.95;
          e.y = -9;
          break;
        case 5:
          e.x = -12;
          e.y = -8.6;
          break;
        case 4:
        case 3:
          e.x = -10;
          e.y = -6.5;
          break;
        case 2:
        case 1:
          e.x = -1;
          e.y = 3;
      }
    }
    if (this.keepBuildingVO.rotation % 2 == 1) {
      var t = e.x;
      e.x = e.y;
      e.y = t;
    }
    return e;
  };
  KeepBuildingVE.prototype.onAllDispClipsLoaded = function () {
    e.prototype.onAllDispClipsLoaded.call(this);
    this.updateSpotDisp();
  };
  KeepBuildingVE.prototype.onMouseClick = function () {
    if (this.keepBuildingVO.taxInfoVO.isTaxReadyForCollection && this.vo.isoData.areaData.isMyArea && !this.vo.isoData.areaData.isUnderConquerProcess) {
      _.Iso.controller.server.collectTax();
    }
  };
  KeepBuildingVE.prototype.onHoverTarget = function () {
    this._isHovered = true;
    if (!this.keepBuildingVO.canCollectTax && !this.buildingVO.buildingState.isInProgress && !this.buildingVO.buildingState.isUnderConstruction && !!this.keepBuildingVO.taxInfoVO.isCollecting && !this.isoRenderer.strategies.currentStrategy.isActive(l.IsoRenderStrategyEnum.BUILDING_GROUND_VIEW) && !this.statusIcons.isUpgradeIconActive) {
      this.statusIcons.addIcon(g.IsoStatusIconEnum.PROGRESS_BAR_TAX);
    }
  };
  KeepBuildingVE.prototype.onUnHoverTarget = function () {
    this._isHovered = false;
    this.updateStatusIcon();
  };
  Object.defineProperty(KeepBuildingVE.prototype, "keepBuildingVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(KeepBuildingVE.prototype, "spotDisp", {
    get: function () {
      return this._spotDisp;
    },
    enumerable: true,
    configurable: true
  });
  return KeepBuildingVE;
}(c.ABasicBuildingVE);
exports.KeepBuildingVE = p;
var h = require("./3049.js");
var g = require("./177.js");
var C = require("./46.js");
var _ = require("./33.js");
a.classImplementsInterfaces(p, "ICollectableRendererList", "IIngameUICapable");