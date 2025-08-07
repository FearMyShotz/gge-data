Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./6.js");
var c = require("./4.js");
var u = require("./14.js");
var d = require("./293.js");
var p = require("./122.js");
var h = require("./482.js");
var g = createjs.Shape;
var C = createjs.Container;
var _ = createjs.Point;
var m = function (e) {
  function IsoBuildingGroundManager() {
    CONSTRUCTOR_HACK;
    return e.call(this) || this;
  }
  n.__extends(IsoBuildingGroundManager, e);
  IsoBuildingGroundManager.prototype.init = function (e) {
    this._ve = e;
    this.setVisibility(false);
  };
  IsoBuildingGroundManager.prototype.destroy = function () {
    e.prototype.destroy.call(this);
    this.getLayer().removeChildren();
  };
  IsoBuildingGroundManager.prototype.reset = function () {
    this.getLayer().removeChildren();
    this.setVisibility(false);
  };
  IsoBuildingGroundManager.prototype.updateDisp = function () {
    if (this.ve && this.ve.vo && this.ve.vo instanceof h.ABasicBuildingVO && this.ve.vo.isBuildingGroundViewAvailable) {
      if (this.getLayer()) {
        this.getLayer().removeChildren();
      }
      var e;
      var t = this.ve.buildingVO.buildingGroundType;
      if (o.DictionaryUtil.containsKey(f.IsoConst.BUILDING_GROUND_COLORS, t)) {
        e = f.IsoConst.BUILDING_GROUND_COLORS.get(t);
      } else {
        console.warn("invalid buildingGroundType ", this.ve.buildingVO.getVisualClassName(), this.ve.buildingVO.buildingGroundType);
        e = f.IsoConst.BUILDING_GROUND_COLORS.get("INVALID");
      }
      this.addShapesToLayer(e[0], e[1], e[2]);
      this.addIconToLayer();
    }
  };
  IsoBuildingGroundManager.prototype.addShapesToLayer = function (e, t, i) {
    var n = l.int(this.ve.buildingVO.rotatedWidth * f.IsoConst.GRID_TILE_DIMENSION_UNTRANSLATED.x);
    var o = l.int(this.ve.buildingVO.rotatedHeight * f.IsoConst.GRID_TILE_DIMENSION_UNTRANSLATED.y);
    var a = new g();
    a.graphics.beginFill(e, i);
    a.graphics.drawRect(0, 0, n, o);
    a.graphics.endFill();
    a.setBounds(0, 0, n, o);
    var s = new g();
    s.graphics.lineStyle(f.IsoConst.BUILDING_GROUND_BORDER_THICKNESS, t, f.IsoConst.BUILDING_GROUND_BORDER_ALPHA);
    s.graphics.moveTo(0, 0);
    s.graphics.lineTo(n, 0);
    s.graphics.lineTo(n, o);
    s.graphics.lineTo(0, o);
    s.graphics.lineTo(0, 0);
    s.graphics.endFill();
    s.setBounds(0, 0, n, o);
    var r = new C();
    var c = new C();
    r.addChild(a);
    r.addChild(s);
    c.addChild(r);
    if (this.getLayer()) {
      this.getLayer().addChild(c);
    }
    r.rotation = 45;
    c.scaleX = 2;
    c.x = 0;
    c.y = 0;
  };
  IsoBuildingGroundManager.prototype.addIconToLayer = function () {
    var e = new C();
    if (this.ve.buildingGroundIconClass) {
      var t;
      var i = new Library.CastleInterfaceElements.BuildingGroundBg();
      e.addChild(i);
      a.MovieClipHelper.scaleToFit(i, IsoBuildingGroundManager.ICON_BG_DIMENSION.x, IsoBuildingGroundManager.ICON_BG_DIMENSION.y);
      t = this.ve.buildingVO.isDamaged ? this.ve.buildingVO.damageType == r.ConstructionConst.DAMAGE_TYPE_FIRE ? new Library.CastleInterfaceElements.Icon_BuildingGround_Fire() : new Library.CastleInterfaceElements_Icons.Icon_BuildingGround_Plague() : new this.ve.buildingGroundIconClass();
      e.addChild(t);
      a.MovieClipHelper.scaleToFit(t, IsoBuildingGroundManager.ICON_DIMENSION.x, IsoBuildingGroundManager.ICON_DIMENSION.y);
      if (this.ve.isoRenderer.strategies.currentStrategy.isActive(p.IsoRenderStrategyEnum.UPGRADE_VIEW) && this.ve.buildingVO.canUpgrade()) {
        var n = c.CastleModel.primeSaleData.getBestDiscountPrimeSaleComponentByShopVO(this.ve.buildingVO, true) ? new Library.CastleInterfaceElements_Icons.Icon_UpgradePrimeSale() : new Library.CastleInterfaceElements_Icons.Icon_Upgrade();
        e.addChild(n);
        a.MovieClipHelper.scaleToFit(n, IsoBuildingGroundManager.ICON_BG_DIMENSION.x * 0.5, IsoBuildingGroundManager.ICON_BG_DIMENSION.y * 0.5);
        n.x = 35;
        n.y = -35;
      }
    }
    var o = this.getLayer();
    if (o) {
      var s = o.getBounds(null);
      o.addChild(e);
      e.x = s.x + s.width / 2 + IsoBuildingGroundManager.ICON_OFFSET.x;
      e.y = s.y + s.height / 2 + IsoBuildingGroundManager.ICON_OFFSET.y;
      this._iconDisp = e;
    }
  };
  IsoBuildingGroundManager.prototype.setVisibility = function (e) {
    this.getLayer().visible = e;
  };
  IsoBuildingGroundManager.prototype.setIconVisibility = function (e) {
    if (this._iconDisp) {
      this._iconDisp.visible = e;
    }
  };
  IsoBuildingGroundManager.prototype.updateIcon = function () {
    if (this._iconDisp) {
      if (this._iconDisp.parent) {
        this._iconDisp.parent.removeChild(this._iconDisp);
      }
      this._iconDisp = null;
    }
    this.addIconToLayer();
  };
  IsoBuildingGroundManager.prototype.getLayer = function () {
    return this.ve.layers.getLayer(d.IsoObjectLayerEnum.BUILDING_GROUND);
  };
  Object.defineProperty(IsoBuildingGroundManager.prototype, "ve", {
    get: function () {
      return this._ve;
    },
    enumerable: true,
    configurable: true
  });
  IsoBuildingGroundManager.__initialize_static_members = function () {
    IsoBuildingGroundManager.ICON_BG_DIMENSION = new _(f.IsoConst.GRID_TILE_DIMENSION_UNTRANSLATED.x * 3, f.IsoConst.GRID_TILE_DIMENSION_UNTRANSLATED.y * 3);
    IsoBuildingGroundManager.ICON_DIMENSION = new _(f.IsoConst.GRID_TILE_DIMENSION_UNTRANSLATED.x * 2, f.IsoConst.GRID_TILE_DIMENSION_UNTRANSLATED.y * 2);
    IsoBuildingGroundManager.ICON_OFFSET = new _(-5, -5);
  };
  return IsoBuildingGroundManager;
}(u.CastleComponent);
exports.IsoBuildingGroundManager = m;
var f = require("./144.js");
s.classImplementsInterfaces(m, "ICollectableRendererList");
m.__initialize_static_members();