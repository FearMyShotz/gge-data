Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./347.js");
var c = require("./1249.js");
var u = require("./348.js");
var d = require("./63.js");
var p = function (e) {
  function AttackDialogWaveHandlerSoldierPickInfiniteItem() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(AttackDialogWaveHandlerSoldierPickInfiniteItem, e);
  AttackDialogWaveHandlerSoldierPickInfiniteItem.prototype.onValueChange = function (t) {
    e.prototype.onValueChange.call(this, t);
    this.updateSlider();
  };
  AttackDialogWaveHandlerSoldierPickInfiniteItem.prototype.fill = function () {
    this._itxt_infoUnitLootPower = o.GoodgameTextFieldManager.getInstance().registerTextField(this.itemMc.mc_infoUnitLootPower.txt_value, new s.NumberVO(0));
    this._itxt_infoCombatValue = o.GoodgameTextFieldManager.getInstance().registerTextField(this.itemMc.mc_infoCombatValue.txt_value, new s.NumberVO(0));
    this.itemMc.mc_infoUnitLootPower.mouseChildren = false;
    this.itemMc.mc_infoCombatValue.mouseChildren = false;
    this.itemMc.mc_selection.btn_all.toolTipText = "dialog_addUnit_all";
    this.itemMc.mc_selection.btn_remove.toolTipText = "dialog_addUnit_remove";
    e.prototype.fill.call(this);
    this.updateSlider();
  };
  AttackDialogWaveHandlerSoldierPickInfiniteItem.prototype.updateSlider = function () {
    if (this._amountComponent && this._amountComponent.numberOfItems > 0) {
      this.itemMc.mc_selection.mc_slider.mc_line.scaleX = this._amountComponent.getSelectedAmount() / this._amountComponent.numberOfItems;
    } else {
      var e = this._amountComponent && this._amountComponent.numberOfItems == 0;
      if (e) {
        this._amountComponent.enableComponent(true);
      }
      this.itemMc.mc_selection.mc_slider.mc_line.scaleX = 0;
      if (e) {
        this._amountComponent.enableComponent(false);
      }
    }
  };
  AttackDialogWaveHandlerSoldierPickInfiniteItem.prototype.updateSelection = function () {
    e.prototype.updateSelection.call(this);
    this.updateSlider();
  };
  AttackDialogWaveHandlerSoldierPickInfiniteItem.prototype.fillAdditionalComponents = function () {
    var e = this.troopSelectionScrollItemVO.unitVO;
    var t = e.role == l.SoldierUnitVO.ROLE_MELEE;
    o.MovieClipHelper.clearMovieClip(this.itemMc.mc_infoCombatValue.mc_icon);
    if (this.itemMc.mc_infoUnitLootPower.mc_icon) {
      o.MovieClipHelper.clearMovieClip(this.itemMc.mc_infoUnitLootPower.mc_icon);
    }
    var i = 0;
    switch (this.troopSelectionScrollItemVO.fightDialogType) {
      case u.CastleAdvancedTroopSelectionComponent.TYPE_SUPPORT:
        this.itemMc.mc_infoUnitLootPower.gotoAndStop(3);
        this.setCombatInfo(this.itemMc.mc_infoCombatValue, this._itxt_infoCombatValue, e.meleeDefence, c.AdvancedCombatInfoEnum.DEFENCE_MELEE);
        this.setCombatInfo(this.itemMc.mc_infoUnitLootPower, this._itxt_infoUnitLootPower, e.rangeDefence, c.AdvancedCombatInfoEnum.DEFENCE_RANGED);
        break;
      case u.CastleAdvancedTroopSelectionComponent.TYPE_STATION:
        var n;
        if (e.foodSupply > 0) {
          this.itemMc.mc_infoUnitLootPower.gotoAndStop(2);
          this.itemMc.mc_infoUnitLootPower.toolTipText = "foodwastage";
        } else if (e.meadSupply > 0) {
          this.itemMc.mc_infoUnitLootPower.gotoAndStop(4);
          this.itemMc.mc_infoUnitLootPower.toolTipText = "meadwastage";
        } else if (e.beefSupply > 0) {
          this.itemMc.mc_infoUnitLootPower.gotoAndStop(5);
          this.itemMc.mc_infoUnitLootPower.toolTipText = "beefwastage";
        }
        if (t) {
          i = r.int(e.isOffensive ? e.buffedMeleeAttack : e.meleeDefence);
          n = e.isOffensive ? c.AdvancedCombatInfoEnum.ATTACK_MELEE : c.AdvancedCombatInfoEnum.DEFENCE_MELEE;
        } else {
          i = r.int(e.isOffensive ? e.buffedRangeAttack : e.rangeDefence);
          n = e.isOffensive ? c.AdvancedCombatInfoEnum.ATTACK_RANGED : c.AdvancedCombatInfoEnum.DEFENCE_RANGED;
        }
        this.setCombatInfo(this.itemMc.mc_infoCombatValue, this._itxt_infoCombatValue, i, n);
        this._itxt_infoUnitLootPower.textContentVO.numberValue = Math.max(this.troopSelectionScrollItemVO.unitVO.foodSupply, this.troopSelectionScrollItemVO.unitVO.meadSupply, this.troopSelectionScrollItemVO.unitVO.beefSupply);
        break;
      case u.CastleAdvancedTroopSelectionComponent.TYPE_ATTACK:
        this.itemMc.mc_infoUnitLootPower.gotoAndStop(1);
        this.itemMc.mc_infoUnitLootPower.toolTipText = "lootpower";
        i = r.int(t ? e.buffedMeleeAttack : e.buffedRangeAttack);
        this.setCombatInfo(this.itemMc.mc_infoCombatValue, this._itxt_infoCombatValue, i, t ? c.AdvancedCombatInfoEnum.ATTACK_MELEE : c.AdvancedCombatInfoEnum.ATTACK_RANGED);
        this._itxt_infoUnitLootPower.textContentVO.numberValue = this.troopSelectionScrollItemVO.unitVO.lootValue;
    }
  };
  AttackDialogWaveHandlerSoldierPickInfiniteItem.prototype.setCombatInfo = function (e, t, i, n) {
    d.WodPicHelper.addIcon(n.iconClass, e.mc_icon, 22, 22);
    t.textContentVO.numberValue = i;
    e.toolTipText = n.toolTip;
  };
  return AttackDialogWaveHandlerSoldierPickInfiniteItem;
}(require("./1799.js").ACastleAdvancedTroopSelectionInfiniteScrollItem);
exports.AttackDialogWaveHandlerSoldierPickInfiniteItem = p;
a.classImplementsInterfaces(p, "ICollectableRendererList");