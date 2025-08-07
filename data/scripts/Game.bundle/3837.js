Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./18.js");
var a = require("./55.js");
var s = function () {
  function AFillWaveStrategy() {
    this.relevantFilteredUnits = [];
  }
  AFillWaveStrategy.prototype.fillYardContainer = function (e, t, i, n) {
    var a = this.createFilteredInventory(e.unitInventory, t);
    this.relevantFilteredUnits = this.extractUnitWodIdsFromInventory(a);
    this.flankFillStrategy.fillFlankWithSoldiers(i, null, n.getDefenderFlankEffects(o.ClientConstCastle.FLANK_YARD), a, t);
    this.applyInventoryChanges(a, e.unitInventory);
    return true;
  };
  AFillWaveStrategy.prototype.fillWave = function (e, t, i, n, a) {
    var s = this.createFilteredInventory(e.unitInventory, t);
    this.relevantFilteredUnits = this.extractUnitWodIdsFromInventory(s);
    if (!t || !!t.fillLeftFlank) {
      this.flankFillStrategy.fillToolStrategyPool();
      this.flankFillStrategy.fillFlankWithTools(i.itemsLeftWall_tools, n.getAttackerFlankEffects(o.ClientConstCastle.FLANK_LEFT), a.getDefenderFlankEffects(o.ClientConstCastle.FLANK_LEFT), s, a.spaceID, a.defenderArea, i);
      this.flankFillStrategy.fillFlankWithSoldiers(i.itemsLeftWall_units, n.getAttackerFlankEffects(o.ClientConstCastle.FLANK_LEFT), a.getDefenderFlankEffects(o.ClientConstCastle.FLANK_LEFT), s, t);
      this.flankFillStrategy.checkFlank(i.itemsLeftWall_tools, i.itemsLeftWall_units, s);
    }
    if (!t || !!t.fillRightFlank) {
      this.flankFillStrategy.fillToolStrategyPool();
      this.flankFillStrategy.fillFlankWithTools(i.itemsRightWall_tools, n.getAttackerFlankEffects(o.ClientConstCastle.FLANK_RIGHT), a.getDefenderFlankEffects(o.ClientConstCastle.FLANK_RIGHT), s, a.spaceID, a.defenderArea, i);
      this.flankFillStrategy.fillFlankWithSoldiers(i.itemsRightWall_units, n.getAttackerFlankEffects(o.ClientConstCastle.FLANK_RIGHT), a.getDefenderFlankEffects(o.ClientConstCastle.FLANK_RIGHT), s, t);
      this.flankFillStrategy.checkFlank(i.itemsRightWall_tools, i.itemsRightWall_units, s);
    }
    if (!t || !!t.fillMiddleFlank) {
      this.flankFillStrategy.fillToolStrategyPool();
      this.flankFillStrategy.fillFlankWithTools(i.itemsMiddleWall_tools, n.getAttackerFlankEffects(o.ClientConstCastle.FLANK_MIDDLE), a.getDefenderFlankEffects(o.ClientConstCastle.FLANK_MIDDLE), s, a.spaceID, a.defenderArea, i);
      this.flankFillStrategy.fillFlankWithSoldiers(i.itemsMiddleWall_units, n.getAttackerFlankEffects(o.ClientConstCastle.FLANK_MIDDLE), a.getDefenderFlankEffects(o.ClientConstCastle.FLANK_MIDDLE), s, t);
      this.flankFillStrategy.checkFlank(i.itemsMiddleWall_tools, i.itemsMiddleWall_units, s);
    }
    this.applyInventoryChanges(s, e.unitInventory);
    return true;
  };
  AFillWaveStrategy.prototype.extractUnitWodIdsFromInventory = function (e) {
    var t = [];
    for (var i = 0, n = e.getUnits(null); i < n.length; i++) {
      var o = n[i];
      t.push(o.wodId);
    }
    return t;
  };
  AFillWaveStrategy.prototype.applyInventoryChanges = function (e, t) {
    if (this.relevantFilteredUnits != null) {
      for (var i = 0, n = this.relevantFilteredUnits; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          var a = e.getUnit(o);
          var s = t.getUnit(o);
          if (s) {
            if (a && a.inventoryAmount > 0) {
              s.inventoryAmount = a.inventoryAmount;
            } else {
              t.removeUnit(o);
            }
          }
        }
      }
    }
  };
  AFillWaveStrategy.prototype.createFilteredInventory = function (e, t) {
    var i = new (a.ClientConstUtils.getClassFromObject(e))();
    var n = e.getUnits(null);
    if (n != null) {
      for (var o = 0, s = n; o < s.length; o++) {
        var r = s[o];
        if (r !== undefined) {
          if (!t || r.toolCategory == "" || !!t.isToolFilterActive(r.toolCategory)) {
            i.addUnitReference(r);
          }
        }
      }
    }
    return i;
  };
  AFillWaveStrategy.prototype.loadFlankFillStrategy = function (e) {
    this.flankFillStrategy = e;
  };
  return AFillWaveStrategy;
}();
exports.AFillWaveStrategy = s;
n.classImplementsInterfaces(s, "IFillWaveStrategy");