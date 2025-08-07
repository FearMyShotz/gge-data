Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./4.js");
var r = require("./24.js");
var l = require("./14.js");
var c = require("./71.js");
var u = require("./111.js");
var d = require("./293.js");
var p = require("./177.js");
var h = require("./62.js");
var g = function (e) {
  function ADistrictBuildingVE() {
    return e.call(this) || this;
  }
  n.__extends(ADistrictBuildingVE, e);
  ADistrictBuildingVE.prototype.init = function (t) {
    e.prototype.init.call(this, t);
    this.interationIndicator = new r.CastleGoodgameExternalClip(ADistrictBuildingVE.INDICATOR_CLASS_NAME, o.BasicModel.basicLoaderData.getVersionedItemAssetUrl(ADistrictBuildingVE.INDICATOR_CLASS_NAME), null, 0, false);
  };
  ADistrictBuildingVE.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    l.CastleComponent.controller.addEventListener(c.AreaDataEvent.ON_BURNING_CASTLE_UPDATED, this.bindFunction(this.onBurningUpdated));
  };
  ADistrictBuildingVE.prototype.removeEventListener = function () {
    e.prototype.removeEventListener.call(this);
    l.CastleComponent.controller.removeEventListener(c.AreaDataEvent.ON_BURNING_CASTLE_UPDATED, this.bindFunction(this.onBurningUpdated));
  };
  ADistrictBuildingVE.prototype.onBurningUpdated = function (e) {
    this.updateStatusIcon();
  };
  ADistrictBuildingVE.prototype.createStatusIcons = function () {
    e.prototype.createStatusIcons.call(this);
    if (s.CastleModel.areaData && s.CastleModel.areaData.activeArea && s.CastleModel.areaData.activeCommonInfo.isDistrictBuring(this.districtVO.districtTypeID)) {
      this.statusIcons.addIcon(p.IsoStatusIconEnum.BUILDING_DISTRICT_BURNING);
    }
  };
  ADistrictBuildingVE.prototype.setCollisionFloor = function (t) {
    e.prototype.setCollisionFloor.call(this, t);
    if (this.interationIndicator.parent == this.isoRenderer.layers.getIsoLayer(u.IsoLayerEnum.INTERACTION)) {
      this.isoRenderer.layers.getIsoLayer(u.IsoLayerEnum.INTERACTION).removeChild(this.interationIndicator);
    }
    if (m.Iso.renderer.mouse.draggedTarget && m.Iso.renderer.mouse.draggedTarget != this) {
      this.updateDistrictFloorEffect(false);
      if (t) {
        this.isoRenderer.layers.getIsoLayer(u.IsoLayerEnum.INTERACTION).addChild(this.interationIndicator);
        this.interationIndicator.x = this.elementContainer.x;
        this.interationIndicator.y = this.elementContainer.y;
      }
    }
  };
  ADistrictBuildingVE.prototype.updateDistrictFloorEffect = function (e) {
    var t = m.Iso.renderer.mouse.draggedTarget.interactiveVO;
    var i = this.districtVO.canAddBuilding(t);
    if (this.layers.getLayer(d.IsoObjectLayerEnum.FLOOR)) {
      if (e) {
        this.layers.getLayer(d.IsoObjectLayerEnum.FLOOR).filters = i ? [_.IsoConst.DRAG_VALID_FILTER] : [_.IsoConst.DRAG_INVALID_FILTER];
        this.interationIndicator.gotoAndStop(i ? 3 : 1);
      } else {
        this.layers.getLayer(d.IsoObjectLayerEnum.FLOOR).filters = i ? [_.IsoConst.DRAG_VALID_DISTRICT_FILTER] : null;
        this.interationIndicator.gotoAndStop(i ? 2 : 1);
      }
    }
  };
  ADistrictBuildingVE.prototype.getRingMenuButtons = function () {
    var t = e.prototype.getRingMenuButtons.call(this);
    t.push(new C.RingMenuButtonBuildingDistrict());
    return t;
  };
  Object.defineProperty(ADistrictBuildingVE.prototype, "districtVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ADistrictBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_BuildingDistrict;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(h.ABasicBuildingVE.prototype, "buildingGroundIconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  ADistrictBuildingVE.INDICATOR_CLASS_NAME = "FX_DistrictIndicator";
  return ADistrictBuildingVE;
}(h.ABasicBuildingVE);
exports.ADistrictBuildingVE = g;
var C = require("./2998.js");
var _ = require("./144.js");
var m = require("./34.js");
a.classImplementsInterfaces(g, "ICollectableRendererList", "IIngameUICapable");