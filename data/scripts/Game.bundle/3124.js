Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./6.js");
var c = require("./18.js");
var u = require("./16.js");
var d = require("./427.js");
var p = require("./85.js");
var h = require("./4.js");
var g = require("./8.js");
var C = require("./141.js");
var _ = require("./524.js");
var m = require("./120.js");
var f = function (e) {
  function CastleListDetailOverviewItemMilitary(t) {
    var i = e.call(this, t) || this;
    i.itxt_units = i.textFieldManager.registerTextField(t.mc_units.txt_units, new p.CastleLocalizedNumberVO(0, {
      compactThreshold: 1000000
    }));
    i.itxt_foodConsumption = i.textFieldManager.registerTextField(t.mc_foodConsumption.txt_foodConsumption, new p.CastleLocalizedNumberVO(0, {
      compactThreshold: 1000000
    }));
    i.itxt_foodConsumption.autoFitToBounds = true;
    i.itxt_meadConsumption = i.textFieldManager.registerTextField(t.mc_meadConsumption.txt_foodConsumption, new p.CastleLocalizedNumberVO(0, {
      compactThreshold: 1000000
    }));
    i.itxt_meadConsumption.autoFitToBounds = true;
    i.itxt_beefConsumption = i.textFieldManager.registerTextField(t.mc_beefConsumption.txt_foodConsumption, new p.CastleLocalizedNumberVO(0, {
      compactThreshold: 1000000
    }));
    i.itxt_beefConsumption.autoFitToBounds = true;
    t.mc_units.toolTipText = "dialog_listOverview_tabMilitaryUnitInCastle_tt";
    t.mc_foodConsumption.toolTipText = "foodProductionPerHour";
    t.mc_meadConsumption.toolTipText = "meadProductionPerHour";
    t.mc_beefConsumption.toolTipText = "beefProductionPerHour";
    t.mc_units.mouseChildren = false;
    t.mc_foodConsumption.mouseChildren = false;
    g.ButtonHelper.initBasicButtons([t.mc_inventory.btn_rightArrow, t.mc_inventory.btn_leftArrow, t.btn_visitCastle, t.btn_sendTroops]);
    return i;
  }
  n.__extends(CastleListDetailOverviewItemMilitary, e);
  CastleListDetailOverviewItemMilitary.prototype.customFillItem = function () {
    e.prototype.customFillItem.call(this);
    this.updateSendTroopsButton();
    var t;
    var i = h.CastleModel.userCastleListDetailed.getVObyCastleID(this.wmo.objectId, this.wmo.kingdomID);
    if (s.instanceOfClass(this.wmo, "KingstowerMapobjectVO")) {
      t = this.wmo.unitInventory;
    } else if (s.instanceOfClass(this.wmo, "MonumentMapobjectVO") || s.instanceOfClass(this.wmo, "LaboratoryMapobjectVO")) {
      t = this.wmo.unitInventory;
    } else if (i) {
      (t = new E.UnitInventoryList()).addAll(i.unitInventory.getUnits(null));
      t.isStrongholdInventory = true;
      t.addAll(i.strongholdUnitInventory.getUnits(null));
    }
    if (t) {
      C.CastleTextFieldHelper.safeSetNumber(this.itxt_units, t.getSoldierCount());
      if (i && s.instanceOfClass(t, "UnitInventoryList") && i.areaID == h.CastleModel.userData.castleList.getHomeCastle().objectId) {
        t.isStrongholdInventory = false;
      }
      if (this._unitInventoryComponent) {
        this._unitInventoryComponent.updateInventory(this.getFilteredUnits(t), null);
      } else {
        var n = a.getDefinitionByName("CastleListDetailOverview_UnitContainer");
        this._unitInventoryComponent = new b.CastleInventoryComponent(this.disp.mc_inventory, 11, this.getFilteredUnits(t), n, 29, 32, true, null, 0, 0);
      }
    }
    this.disp.mc_inventory.addEventListener(d.CastleInventoryComponentEvent.CLICK_ITEM, this.bindFunction(this.onClickUnit));
    if (i) {
      var o = l.int(i.getEffectiveResourceProduction(O.CollectableEnum.FOOD));
      this.itxt_foodConsumption.textContentVO.numberValue = o;
      this.itxt_foodConsumption.color = h.CastleModel.userData.foodFrozen ? u.ClientConstColor.FONT_FROZEN : o < 0 ? u.ClientConstColor.FONT_INSUFFICIENT_COLOR : u.ClientConstColor.FONT_DEFAULT_COLOR;
      var r = l.int(i.getEffectiveResourceProduction(O.CollectableEnum.MEAD));
      this.itxt_meadConsumption.textContentVO.numberValue = r;
      this.itxt_meadConsumption.color = h.CastleModel.userData.foodFrozen ? u.ClientConstColor.FONT_FROZEN : r < 0 ? u.ClientConstColor.FONT_INSUFFICIENT_COLOR : u.ClientConstColor.FONT_DEFAULT_COLOR;
      var c = l.int(i.getEffectiveResourceProduction(O.CollectableEnum.BEEF));
      this.itxt_beefConsumption.textContentVO.numberValue = c;
      this.itxt_beefConsumption.color = h.CastleModel.userData.foodFrozen ? u.ClientConstColor.FONT_FROZEN : c < 0 ? u.ClientConstColor.FONT_INSUFFICIENT_COLOR : u.ClientConstColor.FONT_DEFAULT_COLOR;
      this.disp.mc_foodConsumption.mc_icon.gotoAndStop(h.CastleModel.userData.foodFrozen ? 2 : 1);
      this.disp.mc_meadConsumption.mc_icon.gotoAndStop(h.CastleModel.userData.foodFrozen ? 2 : 1);
      this.disp.mc_beefConsumption.mc_icon.gotoAndStop(h.CastleModel.userData.foodFrozen ? 2 : 1);
      this.disp.mc_foodConsumption.toolTipText = h.CastleModel.userData.foodFrozen ? "foodProductionPerHour_freeze" : "foodProductionPerHour";
      this.disp.mc_meadConsumption.toolTipText = h.CastleModel.userData.foodFrozen ? "meadProductionPerHour_freeze" : "meadProductionPerHour";
      this.disp.mc_beefConsumption.toolTipText = h.CastleModel.userData.foodFrozen ? "beefProductionPerHour_freeze" : "beefProductionPerHour";
      this.disp.mc_foodConsumption.visible = true;
      this.disp.mc_meadConsumption.visible = true;
      this.disp.mc_beefConsumption.visible = true;
    } else {
      this.disp.mc_foodConsumption.visible = false;
      this.disp.mc_meadConsumption.visible = false;
      this.disp.mc_beefConsumption.visible = false;
    }
  };
  CastleListDetailOverviewItemMilitary.prototype.onClickUnit = function (e) {
    y.CastleDialogHandler.getInstance().registerDefaultDialogs(I.CastleRecruitInfoDialog, new m.CastleRecruitInfoDialogProperties(e.unitVO));
  };
  CastleListDetailOverviewItemMilitary.prototype.updateSendTroopsButton = function () {
    var e = h.CastleModel.userData.laboratoryList.hasLaboratoryInKingdom(this.wmo.kingdomID);
    var t = !this.wmo.isUnderConquerControl && (h.CastleModel.userData.castleList.getFilteredList(this.wmo.kingdomID).length > 1 || h.CastleModel.userData.villageList.getAmountInKingdomID(this.wmo.kingdomID) > 0 || (h.CastleModel.userData.monumentList.amount > 0 || h.CastleModel.userData.kingstowerList.kingstowerAmount > 0) && this.wmo.kingdomID == r.WorldClassic.KINGDOM_ID || e);
    this.disp.btn_sendTroops.visible = t;
    this.disp.btn_sendTroops.toolTipText = "ringmenu_sendTroups";
  };
  CastleListDetailOverviewItemMilitary.prototype.getFilteredUnits = function (e) {
    var t;
    switch (this.castleDetailScrollItemVO.filter) {
      case T.CastleListDetailOverviewSublayerMilitary.FILTER_ALL:
        t = e.getUnits(null);
        break;
      case T.CastleListDetailOverviewSublayerMilitary.FILTER_UNITS_ATTACK:
        t = e.getOffensiveSoldiers(false);
        break;
      case T.CastleListDetailOverviewSublayerMilitary.FILTER_UNITS_DEFENCE:
        t = e.getDefensiveSoldiers(false);
        break;
      case T.CastleListDetailOverviewSublayerMilitary.FILTER_TOOLS_ATTACK:
        t = e.getUnitsByType(c.ClientConstCastle.UNIT_TYPE_TOOL_ATTACK);
        break;
      case T.CastleListDetailOverviewSublayerMilitary.FILTER_TOOLS_DEFENCE:
        t = e.getUnitsByType(c.ClientConstCastle.UNIT_TYPE_TOOL_DEFENCE);
    }
    return t;
  };
  CastleListDetailOverviewItemMilitary.prototype.onMouseClick = function (t) {
    e.prototype.onMouseClick.call(this, t);
    switch (t.target) {
      case this.disp.btn_sendTroops:
        this.onSendTroops();
    }
  };
  CastleListDetailOverviewItemMilitary.prototype.onSendTroops = function () {
    y.CastleDialogHandler.getInstance().registerDefaultDialogs(D.CastleStartAttackDialog, new _.CastleStartAttackDialogProperties(this.wmo, c.ClientConstCastle.ACTION_TYPE_SENDTROUPS));
  };
  CastleListDetailOverviewItemMilitary.prototype.hide = function () {
    e.prototype.hide.call(this);
    this.disp.mc_inventory.removeEventListener(d.CastleInventoryComponentEvent.CLICK_ITEM, this.bindFunction(this.onClickUnit));
  };
  return CastleListDetailOverviewItemMilitary;
}(require("./1041.js").CastleListDetailOverviewItem);
exports.CastleListDetailOverviewItemMilitary = f;
var O = require("./12.js");
var E = require("./586.js");
var y = require("./9.js");
var b = require("./378.js");
var D = require("./395.js");
var I = require("./115.js");
var T = require("./1601.js");
o.classImplementsInterfaces(f, "MovieClip");