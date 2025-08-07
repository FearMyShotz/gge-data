Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./6.js");
var l = require("./1.js");
var c = require("./18.js");
var u = require("./129.js");
var d = require("./71.js");
var p = require("./4.js");
var h = require("./1117.js");
var g = require("./1817.js");
var C = require("./840.js");
var _ = function (e) {
  function CastleResourcePanel_Season() {
    CONSTRUCTOR_HACK;
    return e.call(this, new Library.CastleInterfaceElements.ResourcePanel()) || this;
  }
  n.__extends(CastleResourcePanel_Season, e);
  CastleResourcePanel_Season.prototype.initResourceItems = function () {
    this._moralBar = new g.ResourcePanelBar(new Library.CastleInterfaceElements.ResourcePanelMoral());
    this._woodContainer = new C.ResourcePanelItem(C.ResourcePanelItem.ICON_FRAME_WOOD);
    this._stoneContainer = new C.ResourcePanelItem(C.ResourcePanelItem.ICON_FRAME_STONE);
    this._foodContainer = new C.ResourcePanelItem(C.ResourcePanelItem.ICON_FRAME_FOOD);
    this._unitContainer = new C.ResourcePanelItem(C.ResourcePanelItem.ICON_FRAME_UNITCOUNT);
    this._auxUnitsContainer = new C.ResourcePanelItem(C.ResourcePanelItem.ICON_FRAME_AUXCOUNT);
    this._unitContainer.isBoosted = false;
    this._unitContainer.isStorageBarVisible = false;
    this._auxUnitsContainer.isBoosted = false;
    this._auxUnitsContainer.isStorageBarVisible = false;
    this._woodContainer.isBoosted = false;
    this._stoneContainer.isBoosted = false;
    this._foodContainer.isBoosted = false;
    this.setPanelBar(this._moralBar);
    this.addResource(this._woodContainer);
    this.addResource(this._stoneContainer);
    this.addResource(this._foodContainer);
    this.addResource(this._unitContainer);
  };
  CastleResourcePanel_Season.prototype.destroy = function () {
    this.controller.removeEventListener(d.AreaDataEvent.ON_RESOURCES_CHANGED, this.bindFunction(this.onSomethingChanged));
    this.controller.removeEventListener(d.AreaDataEvent.ON_INFO_VALUES_CHANGED, this.bindFunction(this.onSomethingChanged));
    this.controller.removeEventListener(u.CastleMilitaryDataEvent.INVENTORY_UPDATED, this.bindFunction(this.onSomethingChanged));
    this.removeResource(this._woodContainer);
    this.removeResource(this._stoneContainer);
    this.removeResource(this._foodContainer);
    this.removeResource(this._unitContainer);
    this.removeResource(this._auxUnitsContainer);
    this.setPanelBar(null);
    this._woodContainer.dispose();
    this._stoneContainer.dispose();
    this._foodContainer.dispose();
    this._unitContainer.dispose();
    this._auxUnitsContainer.dispose();
    e.prototype.destroy.call(this);
  };
  CastleResourcePanel_Season.prototype.show = function () {
    e.prototype.show.call(this);
    this.controller.addEventListener(d.AreaDataEvent.ON_RESOURCES_CHANGED, this.bindFunction(this.onSomethingChanged));
    this.controller.addEventListener(d.AreaDataEvent.ON_INFO_VALUES_CHANGED, this.bindFunction(this.onSomethingChanged));
    this.controller.addEventListener(u.CastleMilitaryDataEvent.INVENTORY_UPDATED, this.bindFunction(this.onSomethingChanged));
    this.onSomethingChanged();
    this.checkForAuxResourcePanel();
    this.allowCaching = true;
  };
  CastleResourcePanel_Season.prototype.checkForAuxResourcePanel = function () {
    if (p.CastleModel.areaData.activeArea.isFactionCamp) {
      this.addResource(this._auxUnitsContainer);
    } else {
      this.removeResource(this._auxUnitsContainer);
    }
  };
  CastleResourcePanel_Season.prototype.hide = function () {
    this.controller.removeEventListener(d.AreaDataEvent.ON_RESOURCES_CHANGED, this.bindFunction(this.onSomethingChanged));
    this.controller.removeEventListener(d.AreaDataEvent.ON_INFO_VALUES_CHANGED, this.bindFunction(this.onSomethingChanged));
    this.controller.removeEventListener(u.CastleMilitaryDataEvent.INVENTORY_UPDATED, this.bindFunction(this.onSomethingChanged));
    e.prototype.hide.call(this);
  };
  CastleResourcePanel_Season.prototype.onSomethingChanged = function (e = null) {
    CastleResourcePanel_Season.initResourceContainer(this._woodContainer, m.CollectableEnum.WOOD);
    CastleResourcePanel_Season.initResourceContainer(this._foodContainer, m.CollectableEnum.FOOD);
    CastleResourcePanel_Season.initResourceContainer(this._stoneContainer, m.CollectableEnum.STONE);
    this._foodContainer.isValueRed = p.CastleModel.areaData.activeCommonInfo.foodProduction < 0;
    var t = 0;
    var i = 0;
    if (p.CastleModel.areaData.activeAreaInfo.areaType == s.WorldConst.AREA_TYPE_TREASURE_CAMP) {
      if (p.CastleModel.specialEventData.activeSeasonVO && p.CastleModel.specialEventData.activeSeasonVO.treasureMapVO) {
        t = r.int(p.CastleModel.specialEventData.activeSeasonVO.treasureMapVO.unitInventory.getSoldierCount());
      }
    } else {
      t = r.int(p.CastleModel.militaryData.unitInventory.getUnitCount(CastleResourcePanel_Season.onlyNonAuxiliarySoldiers));
      i = r.int(p.CastleModel.militaryData.unitInventory.getUnitCount(CastleResourcePanel_Season.onlyAuxiliaries));
    }
    var n = p.CastleModel.areaData.activeMorality;
    if (n) {
      this._unitContainer.setValue(Math.max(0, t));
      this._unitContainer.isValueRed = t >= n.maxUnitStorage;
      this._unitContainer.setStorageBar(Math.min(t / Math.min(n.maxUnitStorage, 1), 1));
      var o = n.maxUnitStorage;
      if (p.CastleModel.areaData.activeArea.isFactionCamp) {
        o = n.maxAuxiliariesStorage;
      }
      this._auxUnitsContainer.setValue(i);
      this._auxUnitsContainer.isValueRed = i >= o;
      this._auxUnitsContainer.setStorageBar(Math.min(i / Math.min(n.maxUnitStorage, 1), 1));
      this._moralBar.setValue(this.getCalculateMoralityFactor);
      this.updateCache();
    }
  };
  CastleResourcePanel_Season.initResourceContainer = function (e, t) {
    e.setValue(p.CastleModel.areaData.getActiveStorageItem(t).amount);
    e.setStorageBar(p.CastleModel.areaData.getActiveStorageItem(t).filledInPercent);
  };
  CastleResourcePanel_Season.onlyAuxiliaries = function (e) {
    return e.unitCategory == c.ClientConstCastle.UNIT_CATEGORY_SOLDIERS && e.isAuxiliary;
  };
  CastleResourcePanel_Season.onlyNonAuxiliarySoldiers = function (e) {
    return e.unitCategory == c.ClientConstCastle.UNIT_CATEGORY_SOLDIERS && !e.isAuxiliary;
  };
  Object.defineProperty(CastleResourcePanel_Season.prototype, "getCalculateMoralityFactor", {
    get: function () {
      return this.morality * 0.5;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleResourcePanel_Season.prototype, "morality", {
    get: function () {
      if (p.CastleModel.kingdomData.activeKingdomID == a.FactionConst.KINGDOM_ID) {
        return a.FactionConst.getMoraleModifier(p.CastleModel.areaData.activeMorality.morality);
      } else {
        return o.CombatConst.getMoralBonus(p.CastleModel.areaData.activeMorality.morality);
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleResourcePanel_Season.prototype.onMouseOver = function (e) {
    switch (e.target) {
      case this._woodContainer.disp:
        this.showToolTip(f.ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_WOOD, this._woodContainer.disp);
        break;
      case this._stoneContainer.disp:
        this.showToolTip(f.ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_STONE, this._stoneContainer.disp);
        break;
      case this._foodContainer.disp:
        this.showToolTip(f.ResourcePanelToolTipManager.TOOL_TIP_TYPE_FOOD, this._foodContainer.disp);
        break;
      case this._unitContainer.disp:
        this.showToolTip(f.ResourcePanelToolTipManager.TOOL_TIP_TYPE_SEASON_MILITARY, this._unitContainer.disp);
        break;
      case this._auxUnitsContainer.disp:
        this.showToolTip(f.ResourcePanelToolTipManager.TOOL_TIP_TYPE_SEASON_AUXILIARIES, this._auxUnitsContainer.disp);
        break;
      case this._moralBar.disp:
        this.showToolTip(f.ResourcePanelToolTipManager.TOOL_TIP_TYPE_SEASON_MORALE, this._moralBar.disp);
    }
  };
  CastleResourcePanel_Season.prototype.onMouseOut = function (e) {
    f.ResourcePanelToolTipManager.hideAllToolTips();
  };
  CastleResourcePanel_Season.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (l.currentBrowserInfo.isTouchEvent(t)) {
      f.ResourcePanelToolTipManager.hideAllToolTips();
      this.onMouseOver(t);
    }
  };
  CastleResourcePanel_Season.__initialize_static_members = function () {
    CastleResourcePanel_Season.NAME = "CastleResourcePanel_Season";
  };
  return CastleResourcePanel_Season;
}(h.CastleBaseResourcePanel);
exports.CastleResourcePanel_Season = _;
var m = require("./12.js");
var f = require("./152.js");
_.__initialize_static_members();