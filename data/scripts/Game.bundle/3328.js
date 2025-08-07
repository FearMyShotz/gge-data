Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./3.js");
var c = require("./6.js");
var u = require("./18.js");
var d = require("./4.js");
var p = require("./141.js");
var h = require("./401.js");
var g = require("./800.js");
var C = require("./287.js");
var _ = function (e) {
  function ResourcePanelToolTipSeasonMilitary() {
    var t = this;
    t._wasSeasonOrFaction = false;
    CONSTRUCTOR_HACK;
    return t = e.call(this, O.ResourcePanelToolTipManager.TOOL_TIP_TYPE_SEASON_MILITARY) || this;
  }
  n.__extends(ResourcePanelToolTipSeasonMilitary, e);
  ResourcePanelToolTipSeasonMilitary.prototype.createItems = function () {
    this._title = new C.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextBold());
    this._attackCount = new C.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextBold());
    this._defenseCount = new C.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextBold());
    this._attackMeleeCount = new C.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._attackRangeCount = new C.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._defenseMeleeCount = new C.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._defenseRangeCount = new C.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._attackMeleePower = new g.ResourcePaneltoolTipIconWithText(new Library.CastleInterfaceElements.McToolTipDynamicIconWithText(), new Library.CastleInterfaceElements_Icons.Icon_UnitCombatPowerMelee());
    this._attackRangePower = new g.ResourcePaneltoolTipIconWithText(new Library.CastleInterfaceElements.McToolTipDynamicIconWithText(), new Library.CastleInterfaceElements_Icons.Icon_UnitCombatPowerRange());
    this._defenseMeleePower = new g.ResourcePaneltoolTipIconWithText(new Library.CastleInterfaceElements.McToolTipDynamicIconWithText(), new Library.CastleInterfaceElements_Icons.Icon_UnitCombatDefenceMelee());
    this._defenseRangePower = new g.ResourcePaneltoolTipIconWithText(new Library.CastleInterfaceElements.McToolTipDynamicIconWithText(), new Library.CastleInterfaceElements_Icons.Icon_UnitCombatDefenceRange());
    this._capacity = new C.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._items.push(this._title);
    this._items.push(this._attackCount);
    this._items.push(this._attackMeleeCount);
    this._items.push(this._attackMeleePower);
    this._items.push(this._attackRangeCount);
    this._items.push(this._attackRangePower);
    this._items.push(new Library.CastleInterfaceElements.divider());
    this._items.push(this._defenseCount);
    this._items.push(this._defenseMeleeCount);
    this._items.push(this._defenseMeleePower);
    this._items.push(this._defenseRangeCount);
    this._items.push(this._defenseRangePower);
    if (this.isSeason || this.isFaction) {
      this._items.push(new Library.CastleInterfaceElements.divider());
      this._items.push(this._capacity);
    }
    this._wasSeasonOrFaction = this.isSeason || this.isFaction;
  };
  ResourcePanelToolTipSeasonMilitary.prototype.setCapacity = function () {
    if (this._wasSeasonOrFaction != (this.isSeason || this.isFaction)) {
      if (this.isSeason || this.isFaction) {
        this._items.push(new Library.CastleInterfaceElements.divider());
        this._items.push(this._capacity);
      } else {
        this._items.splice(this._items.indexOf(this._capacity) - 1, 2);
      }
      this._wasSeasonOrFaction = this.isSeason || this.isFaction;
    }
  };
  ResourcePanelToolTipSeasonMilitary.prototype.updateContent = function () {
    var e;
    if (this.isSeason) {
      e = d.CastleModel.specialEventData.activeSeasonVO.treasureMapVO.unitInventory;
    } else {
      (e = new m.UnitInventoryDictionary()).addAll(d.CastleModel.militaryData.unitInventory.getSoldiers());
      e.addAll(d.CastleModel.militaryData.unitStrongholdInventory.getSoldiers());
    }
    var t = c.int(e.getUnitCount(ResourcePanelToolTipSeasonMilitary.nonAuxiliariesByUnitAndFightType("", u.ClientConstCastle.SOLDIER_FIGHTTYPE_SOLDIERS_OFFENSIVE)));
    var i = c.int(e.getUnitCount(ResourcePanelToolTipSeasonMilitary.nonAuxiliariesByUnitAndFightType("", u.ClientConstCastle.SOLDIER_FIGHTTYPE_SOLDIERS_DEFENSIVE)));
    var n = c.int(e.getUnitCount(ResourcePanelToolTipSeasonMilitary.nonAuxiliariesByUnitAndFightType(u.ClientConstCastle.UNIT_TYPE_SOLDIER_MELEE, u.ClientConstCastle.SOLDIER_FIGHTTYPE_SOLDIERS_OFFENSIVE)));
    var a = c.int(e.getUnitCount(ResourcePanelToolTipSeasonMilitary.nonAuxiliariesByUnitAndFightType(u.ClientConstCastle.UNIT_TYPE_SOLDIER_RANGE, u.ClientConstCastle.SOLDIER_FIGHTTYPE_SOLDIERS_OFFENSIVE)));
    var s = c.int(e.getUnitCount(ResourcePanelToolTipSeasonMilitary.nonAuxiliariesByUnitAndFightType(u.ClientConstCastle.UNIT_TYPE_SOLDIER_MELEE, u.ClientConstCastle.SOLDIER_FIGHTTYPE_SOLDIERS_DEFENSIVE)));
    var r = c.int(e.getUnitCount(ResourcePanelToolTipSeasonMilitary.nonAuxiliariesByUnitAndFightType(u.ClientConstCastle.UNIT_TYPE_SOLDIER_RANGE, u.ClientConstCastle.SOLDIER_FIGHTTYPE_SOLDIERS_DEFENSIVE)));
    var h = c.int(this.getPower(e.getUnits(ResourcePanelToolTipSeasonMilitary.nonAuxiliariesByUnitAndFightType(u.ClientConstCastle.UNIT_TYPE_SOLDIER_MELEE, u.ClientConstCastle.SOLDIER_FIGHTTYPE_SOLDIERS_OFFENSIVE))));
    var g = c.int(this.getPower(e.getUnits(ResourcePanelToolTipSeasonMilitary.nonAuxiliariesByUnitAndFightType(u.ClientConstCastle.UNIT_TYPE_SOLDIER_RANGE, u.ClientConstCastle.SOLDIER_FIGHTTYPE_SOLDIERS_OFFENSIVE))));
    var C = c.int(this.getPower(e.getUnits(ResourcePanelToolTipSeasonMilitary.nonAuxiliariesByUnitAndFightType(u.ClientConstCastle.UNIT_TYPE_SOLDIER_MELEE, u.ClientConstCastle.SOLDIER_FIGHTTYPE_SOLDIERS_DEFENSIVE))));
    var _ = c.int(this.getPower(e.getUnits(ResourcePanelToolTipSeasonMilitary.nonAuxiliariesByUnitAndFightType(u.ClientConstCastle.UNIT_TYPE_SOLDIER_RANGE, u.ClientConstCastle.SOLDIER_FIGHTTYPE_SOLDIERS_DEFENSIVE))));
    p.CastleTextFieldHelper.safeSetText(this._title.tf, "military");
    p.CastleTextFieldHelper.safeSetText(this._attackCount.tf, o.GenericTextIds.VALUE_ASSIGN_COLON, [l.Localize.text("attackunit"), t]);
    p.CastleTextFieldHelper.safeSetText(this._defenseCount.tf, o.GenericTextIds.VALUE_ASSIGN_COLON, [l.Localize.text("defenceunit"), i]);
    p.CastleTextFieldHelper.safeSetText(this._attackMeleeCount.tf, o.GenericTextIds.VALUE_ASSIGN_COLON, [l.Localize.text("melees"), n]);
    p.CastleTextFieldHelper.safeSetText(this._attackRangeCount.tf, o.GenericTextIds.VALUE_ASSIGN_COLON, [l.Localize.text("ranges"), a]);
    p.CastleTextFieldHelper.safeSetText(this._defenseMeleeCount.tf, o.GenericTextIds.VALUE_ASSIGN_COLON, [l.Localize.text("melees"), s]);
    p.CastleTextFieldHelper.safeSetText(this._defenseRangeCount.tf, o.GenericTextIds.VALUE_ASSIGN_COLON, [l.Localize.text("ranges"), r]);
    p.CastleTextFieldHelper.safeSetNumber(this._attackMeleePower.tf, h);
    p.CastleTextFieldHelper.safeSetNumber(this._attackRangePower.tf, g);
    p.CastleTextFieldHelper.safeSetNumber(this._defenseMeleePower.tf, C);
    p.CastleTextFieldHelper.safeSetNumber(this._defenseRangePower.tf, _);
    if (this.isSeason || this.isFaction) {
      p.CastleTextFieldHelper.safeSetText(this._capacity.tf, o.GenericTextIds.VALUE_ASSIGN_COLON, [l.Localize.text("capacity"), d.CastleModel.areaData.activeArea.morality.maxUnitStorage]);
    }
  };
  Object.defineProperty(ResourcePanelToolTipSeasonMilitary.prototype, "isSeason", {
    get: function () {
      return d.CastleModel.areaData.activeAreaInfo.areaType == r.WorldConst.AREA_TYPE_TREASURE_CAMP;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourcePanelToolTipSeasonMilitary.prototype, "isFaction", {
    get: function () {
      return d.CastleModel.areaData.activeAreaInfo.areaType == r.WorldConst.AREA_TYPE_FACTION_CAMP;
    },
    enumerable: true,
    configurable: true
  });
  ResourcePanelToolTipSeasonMilitary.prototype.getPower = function (e) {
    var t = 0;
    if (e != null) {
      for (var i = 0, n = e; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          t += o.role == f.SoldierUnitVO.ROLE_MELEE ? c.int((o.isOffensive ? o.meleeAttack : o.meleeDefence) * o.inventoryAmount) : c.int((o.isOffensive ? o.rangeAttack : o.rangeDefence) * o.inventoryAmount);
        }
      }
    }
    return t;
  };
  ResourcePanelToolTipSeasonMilitary.nonAuxiliariesByUnitAndFightType = function (e, t) {
    return function (i) {
      var n = a.castAs(i, "SoldierUnitVO");
      return !!n && (n.isDefensive && t == u.ClientConstCastle.SOLDIER_FIGHTTYPE_SOLDIERS_DEFENSIVE || n.isOffensive && t == u.ClientConstCastle.SOLDIER_FIGHTTYPE_SOLDIERS_OFFENSIVE) && (!e || i.unitType == e) && !i.isAuxiliary;
    };
  };
  return ResourcePanelToolTipSeasonMilitary;
}(h.AResourcePanelToolTip);
exports.ResourcePanelToolTipSeasonMilitary = _;
var m = require("./156.js");
var f = require("./347.js");
var O = require("./152.js");
s.classImplementsInterfaces(_, "Container");