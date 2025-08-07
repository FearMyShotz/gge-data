Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./40.js");
var u = createjs.MouseEvent;
var d = function (e) {
  function BuildingDistrictSlot(t, i, n, o, a) {
    var s = this;
    s._index = 0;
    CONSTRUCTOR_HACK;
    (s = e.call(this, t) || this)._building = i;
    s._districtBuildingVO = n;
    s._index = o;
    s._ciInteractionData = a;
    t.mc_tooltip.mouseEnabled = false;
    t.mc_tooltip.mouseChildren = false;
    t.mc_locked.mouseChildren = false;
    t.mc_locked.txt_unlockLevel.mouseEnabled = false;
    s._itxt_tooltip1 = p.CastleComponent.textFieldManager.registerTextField(t.mc_tooltip.txt_line1, new r.TextVO(""));
    s._itxt_tooltip2 = p.CastleComponent.textFieldManager.registerTextField(t.mc_tooltip.txt_line2, new r.TextVO(""));
    s._itxt_tooltip3 = p.CastleComponent.textFieldManager.registerTextField(t.mc_tooltip.txt_line3, new r.TextVO(""));
    s.updatePosition();
    return s;
  }
  n.__extends(BuildingDistrictSlot, e);
  BuildingDistrictSlot.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    if (this.disp) {
      this.disp.addEventListener(u.MOUSE_UP, this.bindFunction(this.onMouseUp));
    }
  };
  BuildingDistrictSlot.prototype.removeEventListener = function () {
    e.prototype.removeEventListener.call(this);
    if (this.disp) {
      this.disp.removeEventListener(u.MOUSE_UP, this.bindFunction(this.onMouseUp));
    }
  };
  BuildingDistrictSlot.prototype.updatePosition = function () {
    this.disp.x = 150 + this._index % h.BuildingDistrictDialog.ITEMS_PER_ROW * BuildingDistrictSlot.X_OFFSET;
    this.disp.y = 110 + Math.floor(this._index / h.BuildingDistrictDialog.ITEMS_PER_ROW) * BuildingDistrictSlot.Y_OFFSET;
  };
  BuildingDistrictSlot.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    this.showLock();
    this.showBuilding();
    this.setToolTip();
  };
  BuildingDistrictSlot.prototype.showBuilding = function () {
    a.MovieClipHelper.clearMovieClip(this.disp.buildingHolder);
    if (this._building) {
      this.disp.buildingHolder.scaleX = this.disp.buildingHolder.scaleY = this._districtBuildingVO.buildingScaleFactor;
      this.disp.buildingHolder.addChild(this._building.elementContainer);
      this._building.updateDisp();
      this.disp.mc_placeholder.visible = false;
    }
  };
  BuildingDistrictSlot.prototype.showLock = function () {
    if (this._index > this._districtBuildingVO.districtSlots - 1) {
      this.disp.mc_locked.visible = true;
      var e = this.getUnlockLevel();
      p.CastleComponent.textFieldManager.registerTextField(this.disp.mc_locked.txt_unlockLevel, new s.LocalizedTextVO("building_level", [e]));
    } else {
      this.disp.mc_locked.visible = false;
    }
  };
  BuildingDistrictSlot.prototype.getUnlockLevel = function () {
    for (var e = this._districtBuildingVO.getUpgradeVO(); e;) {
      if (e.districtSlots > this._index) {
        return l.int(e.level);
      }
      e = e.getUpgradeVO();
    }
    return -1;
  };
  BuildingDistrictSlot.prototype.setToolTip = function () {
    this.disp.mc_locked.toolTipText = this.disp.mc_locked.visible ? "dialog_district_slot_locked_tt" : null;
    this.disp.mc_placeholder.toolTipText = this._building || this.disp.mc_locked.visible ? null : "dialog_district_slot_empty_tt";
  };
  BuildingDistrictSlot.prototype.onMouseOver = function (e) {
    if (this._building && !this._building.hasRingMenu) {
      this._itxt_tooltip1.textContentVO.stringValue = this._building.vo.getInfoTooltipLine1();
      this._itxt_tooltip2.textContentVO.stringValue = this._building.vo.getInfoTooltipLine2();
      this._itxt_tooltip3.textContentVO.stringValue = this._building.vo.getInfoTooltipLine3();
      this.disp.mc_tooltip.visible = true;
    }
  };
  BuildingDistrictSlot.prototype.onMouseOut = function (e) {
    this.disp.mc_tooltip.visible = false;
  };
  BuildingDistrictSlot.prototype.onMouseUp = function (e) {
    this.disp.mc_tooltip.visible = false;
    if (this._building && this._ciInteractionData.selectedBuilding != this._building.vo) {
      this._ciInteractionData.setSelectedBuilding(this._building.vo);
    }
  };
  Object.defineProperty(BuildingDistrictSlot.prototype, "building", {
    get: function () {
      return this._building;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BuildingDistrictSlot.prototype, "index", {
    get: function () {
      return this._index;
    },
    enumerable: true,
    configurable: true
  });
  BuildingDistrictSlot.X_OFFSET = 224;
  BuildingDistrictSlot.Y_OFFSET = 214;
  return BuildingDistrictSlot;
}(c.CastleItemRenderer);
exports.BuildingDistrictSlot = d;
o.classImplementsInterfaces(d, "ICollectableRendererList");
var p = require("./14.js");
var h = require("./695.js");