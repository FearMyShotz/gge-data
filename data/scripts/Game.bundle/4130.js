Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./6.js");
var p = require("./655.js");
var h = require("./21.js");
var g = require("./427.js");
var C = require("./129.js");
var _ = require("./183.js");
var m = require("./71.js");
var f = require("./4.js");
var O = require("./8.js");
var E = require("./11.js");
var y = require("./120.js");
var b = function (e) {
  function CastleSeasonInventoryOverviewDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleSeasonInventoryOverviewDialog.NAME) || this;
  }
  n.__extends(CastleSeasonInventoryOverviewDialog, e);
  CastleSeasonInventoryOverviewDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.i_morality_txt_value = this.textFieldManager.registerTextField(this.dialogDisp.mc_morality.txt_value, new c.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE, []));
    this.i_stone_txt_value = this.textFieldManager.registerTextField(this.dialogDisp.mc_stone.txt_value, new u.TextVO(""));
    this.i_wood_txt_value = this.textFieldManager.registerTextField(this.dialogDisp.mc_wood.txt_value, new u.TextVO(""));
    this.i_food_txt_value = this.textFieldManager.registerTextField(this.dialogDisp.mc_food.txt_value, new u.TextVO(""));
    this.i_storage_txt_value = this.textFieldManager.registerTextField(this.dialogDisp.mc_storage.txt_value, new u.TextVO(""));
    this.i_units_txt_value = this.textFieldManager.registerTextField(this.dialogDisp.mc_units.txt_value, new c.LocalizedTextVO(""));
    O.ButtonHelper.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.mc_unitComponent.btn_leftArrow, this.dialogDisp.mc_unitComponent.btn_rightArrow]);
  };
  CastleSeasonInventoryOverviewDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new c.LocalizedTextVO("dialog_seasonInventory_title")).autoFitToBounds = true;
    this.dialogDisp.icon_wood.toolTipText = "wood";
    this.dialogDisp.icon_morality.toolTipText = "morality";
    this.dialogDisp.icon_stone.toolTipText = "stone";
    this.dialogDisp.icon_storage.toolTipText = "storage_capacity";
    this.dialogDisp.icon_units.toolTipText = "dialog_recuit_units";
    this.dialogDisp.icon_food.toolTipText = "food";
    this.onSomethingChanged();
    this.controller.addEventListener(m.AreaDataEvent.ON_RESOURCES_CHANGED, this.bindFunction(this.onSomethingChanged));
    this.controller.addEventListener(m.AreaDataEvent.ON_INFO_VALUES_CHANGED, this.bindFunction(this.onSomethingChanged));
    this.controller.addEventListener(C.CastleMilitaryDataEvent.INVENTORY_UPDATED, this.bindFunction(this.onMilitaryChanged));
    f.CastleModel.timerData.addEventListener(h.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onSomethingChanged));
    f.CastleModel.treasureMapData.addEventListener(_.CastleTreasureMapEvent.TREASUREMAP_DATA_UPDATED, this.bindFunction(this.onSomethingChanged));
    this.getUpdatedData();
  };
  CastleSeasonInventoryOverviewDialog.prototype.onSomethingChanged = function (e = null) {
    if (f.CastleModel.specialEventData.activeSeasonVO) {
      if (!s.instanceOfClass(e, "CastleTreasureMapEvent") || !!e.treasureMapVO) {
        this.i_morality_txt_value.textContentVO.textReplacements = [d.int(CastleSeasonInventoryOverviewDialog.morality * 100)];
        this.i_stone_txt_value.textContentVO.stringValue = String(f.CastleModel.specialEventData.activeSeasonVO.treasureMapVO.resStorageStone);
        this.i_wood_txt_value.textContentVO.stringValue = String(f.CastleModel.specialEventData.activeSeasonVO.treasureMapVO.resStorageWood);
        this.i_food_txt_value.textContentVO.stringValue = String(f.CastleModel.specialEventData.activeSeasonVO.treasureMapVO.resStorageFood);
        this.i_storage_txt_value.textContentVO.stringValue = String(f.CastleModel.specialEventData.activeSeasonVO.treasureMapVO.resStorageMaxMixedCapacity);
        this.i_units_txt_value.textContentVO.textId = o.GenericTextIds.VALUE_PROPORTIONAL_VALUE;
        this.i_units_txt_value.textContentVO.textReplacements = [String(f.CastleModel.specialEventData.activeSeasonVO.treasureMapVO.unitInventory.getSoldierCount()), String(f.CastleModel.specialEventData.activeSeasonVO.treasureMapVO.unitStorage)];
        this.i_units_txt_value.autoFitToBounds = true;
      }
    } else {
      this.hide();
    }
  };
  Object.defineProperty(CastleSeasonInventoryOverviewDialog, "morality", {
    get: function () {
      if (f.CastleModel.kingdomData.activeKingdomID == l.FactionConst.KINGDOM_ID) {
        return l.FactionConst.getMoraleModifier(f.CastleModel.areaData.activeArea.morality.morality);
      } else {
        return r.CombatConst.getMoralBonus(f.CastleModel.specialEventData.activeSeasonVO.treasureMapVO.morality);
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleSeasonInventoryOverviewDialog.prototype.onMilitaryChanged = function (e = null) {
    if (this.unitComponent) {
      this.unitComponent.destroy();
      this.unitComponent.disp.removeEventListener(g.CastleInventoryComponentEvent.CLICK_ITEM, this.bindFunction(this.onItemClick));
    }
    this.unitComponent = new D.CastleInventoryComponent(this.dialogDisp.mc_unitComponent, 11, f.CastleModel.specialEventData.activeSeasonVO.treasureMapVO.unitInventory.getUnits(null), Library.CastleSeasonInventoryOverviewExt.CastleSeasonInventoryUnitList_Item, 32, 40, true, null, 0, 4);
    this.unitComponent.disp.addEventListener(g.CastleInventoryComponentEvent.CLICK_ITEM, this.bindFunction(this.onItemClick));
  };
  CastleSeasonInventoryOverviewDialog.prototype.onItemClick = function (e) {
    E.CastleExternalDialog.dialogHandler.registerDefaultDialogs(I.CastleRecruitInfoDialog, new y.CastleRecruitInfoDialogProperties(e.unitVO, e.crestVO));
  };
  CastleSeasonInventoryOverviewDialog.prototype.onClick = function (e) {
    switch (e.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  CastleSeasonInventoryOverviewDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this.controller.removeEventListener(m.AreaDataEvent.ON_RESOURCES_CHANGED, this.bindFunction(this.onSomethingChanged));
    this.controller.removeEventListener(m.AreaDataEvent.ON_INFO_VALUES_CHANGED, this.bindFunction(this.onSomethingChanged));
    this.controller.removeEventListener(C.CastleMilitaryDataEvent.INVENTORY_UPDATED, this.bindFunction(this.onMilitaryChanged));
    f.CastleModel.timerData.removeEventListener(h.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onSomethingChanged));
    f.CastleModel.treasureMapData.removeEventListener(_.CastleTreasureMapEvent.TREASUREMAP_DATA_UPDATED, this.bindFunction(this.onSomethingChanged));
    if (this.unitComponent) {
      this.unitComponent.disp.removeEventListener(g.CastleInventoryComponentEvent.CLICK_ITEM, this.bindFunction(this.onItemClick));
    }
  };
  CastleSeasonInventoryOverviewDialog.prototype.getUpdatedData = function () {
    f.CastleModel.smartfoxClient.sendCommandVO(new p.C2STreasureMapsVO(f.CastleModel.specialEventData.activeSeasonVO.treasureMapVO.mapID));
  };
  CastleSeasonInventoryOverviewDialog.prototype.destroy = function () {
    if (this.unitComponent) {
      this.unitComponent.destroy();
    }
    e.prototype.destroy.call(this);
  };
  CastleSeasonInventoryOverviewDialog.__initialize_static_members = function () {
    CastleSeasonInventoryOverviewDialog.NAME = "CastleSeasonInventoryOverviewExt";
  };
  return CastleSeasonInventoryOverviewDialog;
}(E.CastleExternalDialog);
exports.CastleSeasonInventoryOverviewDialog = b;
var D = require("./378.js");
var I = require("./113.js");
a.classImplementsInterfaces(b, "ICollectableRendererList");
b.__initialize_static_members();