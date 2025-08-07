Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./1245.js");
var u = require("./1249.js");
var d = function (e) {
  function CastleAdvancedUnitSelectionScrollItem(t) {
    var i = e.call(this, t) || this;
    i._itxt_infoUnitLootPower = o.GoodgameTextFieldManager.getInstance().registerTextField(t.mc_infoUnitLootPower.txt_value, new r.NumberVO(0));
    i._itxt_infoCombatValue = o.GoodgameTextFieldManager.getInstance().registerTextField(t.mc_infoCombatValue.txt_value, new r.NumberVO(0));
    t.mc_infoUnitLootPower.mouseChildren = false;
    t.mc_infoCombatValue.mouseChildren = false;
    t.mc_selection.btn_all.toolTipText = "dialog_addUnit_all";
    t.mc_selection.btn_remove.toolTipText = "dialog_addUnit_remove";
    return i;
  }
  n.__extends(CastleAdvancedUnitSelectionScrollItem, e);
  CastleAdvancedUnitSelectionScrollItem.prototype.fillAdditionalComponents = function () {
    var e = this.troopSelectionScrollItemVO.unitVO;
    var t = e.role == p.SoldierUnitVO.ROLE_MELEE;
    a.MovieClipHelper.clearMovieClip(this.disp.mc_infoCombatValue.mc_icon);
    a.MovieClipHelper.clearMovieClip(this.disp.mc_infoUnitLootPower.mc_icon);
    var i = 0;
    switch (this.troopSelectionScrollItemVO.fightDialogType) {
      case g.CastleAdvancedTroopSelectionComponent.TYPE_SUPPORT:
        this.disp.mc_infoUnitLootPower.gotoAndStop(3);
        this.setCombatInfo(this.disp.mc_infoCombatValue, this._itxt_infoCombatValue, e.meleeDefence, u.AdvancedCombatInfoEnum.DEFENCE_MELEE);
        this.setCombatInfo(this.disp.mc_infoUnitLootPower, this._itxt_infoUnitLootPower, e.rangeDefence, u.AdvancedCombatInfoEnum.DEFENCE_RANGED);
        break;
      case g.CastleAdvancedTroopSelectionComponent.TYPE_STATION:
        var n;
        if (e.foodSupply > 0) {
          this.disp.mc_infoUnitLootPower.gotoAndStop(2);
          this.disp.mc_infoUnitLootPower.toolTipText = "foodwastage";
        } else if (e.meadSupply > 0) {
          this.disp.mc_infoUnitLootPower.gotoAndStop(4);
          this.disp.mc_infoUnitLootPower.toolTipText = "meadwastage";
        } else if (e.beefSupply > 0) {
          this.disp.mc_infoUnitLootPower.gotoAndStop(5);
          this.disp.mc_infoUnitLootPower.toolTipText = "beefwastage";
        }
        if (t) {
          i = l.int(e.isOffensive ? e.buffedMeleeAttack : e.meleeDefence);
          n = e.isOffensive ? u.AdvancedCombatInfoEnum.ATTACK_MELEE : u.AdvancedCombatInfoEnum.DEFENCE_MELEE;
        } else {
          i = l.int(e.isOffensive ? e.buffedRangeAttack : e.rangeDefence);
          n = e.isOffensive ? u.AdvancedCombatInfoEnum.ATTACK_RANGED : u.AdvancedCombatInfoEnum.DEFENCE_RANGED;
        }
        this.setCombatInfo(this.disp.mc_infoCombatValue, this._itxt_infoCombatValue, i, n);
        this._itxt_infoUnitLootPower.textContentVO.numberValue = Math.max(this.troopSelectionScrollItemVO.unitVO.foodSupply, this.troopSelectionScrollItemVO.unitVO.meadSupply, this.troopSelectionScrollItemVO.unitVO.beefSupply);
        break;
      case g.CastleAdvancedTroopSelectionComponent.TYPE_ATTACK:
        this.disp.mc_infoUnitLootPower.gotoAndStop(1);
        this.disp.mc_infoUnitLootPower.toolTipText = "lootpower";
        i = l.int(t ? e.buffedMeleeAttack : e.buffedRangeAttack);
        this.setCombatInfo(this.disp.mc_infoCombatValue, this._itxt_infoCombatValue, i, t ? u.AdvancedCombatInfoEnum.ATTACK_MELEE : u.AdvancedCombatInfoEnum.ATTACK_RANGED);
        this._itxt_infoUnitLootPower.textContentVO.numberValue = this.troopSelectionScrollItemVO.unitVO.lootValue;
    }
  };
  CastleAdvancedUnitSelectionScrollItem.prototype.setCombatInfo = function (e, t, i, n) {
    h.WodPicHelper.addIcon(n.iconClass, e.mc_icon, 22, 22);
    t.textContentVO.numberValue = i;
    e.toolTipText = n.toolTip;
  };
  return CastleAdvancedUnitSelectionScrollItem;
}(c.ACastleAdvancedTroopSelectionScrollItem);
exports.CastleAdvancedUnitSelectionScrollItem = d;
var p = require("./347.js");
var h = require("./63.js");
var g = require("./348.js");
s.classImplementsInterfaces(d, "MovieClip");