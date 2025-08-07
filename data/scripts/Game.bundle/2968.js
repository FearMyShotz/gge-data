Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./49.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./1.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./18.js");
var h = require("./16.js");
var g = require("./708.js");
var C = require("./129.js");
var _ = require("./85.js");
var m = require("./4.js");
var f = require("./8.js");
var O = function (e) {
  function CastleRecruitDialogInventory(t) {
    var i = this;
    i.mcInfoKnightsX = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this, t) || this)._inventoryListComponent = new T.CastleInventoryListComponent(i.dialogDisp.itemSelection);
    i.dialogDisp.infoBarons.toolTipText = "dialog_startAttack_availableBarons";
    I.CastleRecruitDialogUnits.setIconInInfoArea(I.CastleRecruitDialogUnits.ICON_BARONS, i.dialogDisp.infoBarons);
    i.dialogDisp.infoKnights.toolTipText = "dialog_startAttack_availableGenerals";
    I.CastleRecruitDialogUnits.setIconInInfoArea(I.CastleRecruitDialogUnits.ICON_KNIGHTS, i.dialogDisp.infoKnights);
    i.dialogDisp.infoFood.toolTipText = "foodproduction";
    i.dialogDisp.infoUnitCount.toolTipText = "amount";
    i.dialogDisp.btn_filter_melee.toolTipText = "melees";
    i.dialogDisp.btn_filter_range.toolTipText = "ranges";
    i.dialogDisp.btn_filter_mead_melee.toolTipText = "meleeMeadUnits";
    i.dialogDisp.btn_filter_mead_range.toolTipText = "rangedMeadUnits";
    i.dialogDisp.btn_filter_all.toolTipText = "allUnits";
    i.dialogDisp.btn_filter_attacktools.toolTipText = "attackTools";
    i.dialogDisp.btn_filter_defencetools.toolTipText = "defenceTools";
    i.dialogDisp.btn_filter_stronghold.toolTipText = "stronghold_name";
    i.dialogDisp.btn_filter_eventUnits.toolTipText = "eventUnits";
    i.dialogDisp.btn_filter_berimond_auxiliaries.toolTipText = "auxiliaries";
    i.dialogDisp.infoAuxiliariesCount.toolTipText = "auxiliaries";
    i.dialogDisp.infoMead.toolTipText = "meadproduction";
    i.dialogDisp.infoBeef.toolTipText = "beefproduction";
    i.textFieldManager.registerTextField(i.dialogDisp.txt_title, new d.LocalizedTextVO("dialog_recuit_inventory")).autoFitToBounds = true;
    i.i_barons_txt_value = i.textFieldManager.registerTextField(i.dialogDisp.infoBarons.txt_value, new d.LocalizedTextVO(a.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [0]));
    i.i_knights_txt_value = i.textFieldManager.registerTextField(i.dialogDisp.infoKnights.txt_value, new d.LocalizedTextVO(a.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [0]));
    i.i_ucount_txt_value = i.textFieldManager.registerTextField(i.dialogDisp.infoUnitCount.txt_value, new _.CastleLocalizedNumberVO(0, {
      compactThreshold: 1000000,
      compactFractionalDigits: 1
    }, 1));
    i.i_food_txt_value = i.textFieldManager.registerTextField(i.dialogDisp.infoFood.txt_value, new u.LocalizedNumberVO(0));
    i.i_mead_txt_value = i.textFieldManager.registerTextField(i.dialogDisp.infoMead.txt_value, new u.LocalizedNumberVO(0));
    i.i_beef_txt_value = i.textFieldManager.registerTextField(i.dialogDisp.infoBeef.txt_value, new u.LocalizedNumberVO(0));
    i.i_auxcount_txt_value = i.textFieldManager.registerTextField(i.dialogDisp.infoAuxiliariesCount.txt_value, new u.LocalizedNumberVO(0));
    return i;
  }
  n.__extends(CastleRecruitDialogInventory, e);
  CastleRecruitDialogInventory.prototype.destroy = function () {
    e.prototype.destroy.call(this);
    this._inventoryListComponent.destroy();
  };
  CastleRecruitDialogInventory.prototype.show = function (t) {
    var i = b.Iso.data.objects.provider.hasFunctionalBuildingByType(y.IsoObjectEnum.STRONGHOLD);
    f.ButtonHelper.enableButton(this.dialogDisp.btn_filter_stronghold, i);
    this.controller.addEventListener(C.CastleMilitaryDataEvent.INVENTORY_UPDATED, this.bindFunction(this.onInventoryUpdated));
    this.controller.addEventListener(v.CastleUserDataEvent.DOWNTIME_STATUS_UPDATED, this.bindFunction(this.onDowntimeStatusUpdated));
    this.dialogDisp.itemSelection.mc_unitTooltip.visible = false;
    this.i_barons_txt_value.textContentVO.textReplacements = [m.CastleModel.lordData.numAvailableBarons, m.CastleModel.lordData.numAllBarons];
    this.i_knights_txt_value.textContentVO.textReplacements = [m.CastleModel.lordData.numAvailableCommanders, m.CastleModel.lordData.numAllCommanders];
    if (!this.currentFilter || this.currentFilter == CastleRecruitDialogInventory.FILTER_UNITS_STRONGHOLD && !i) {
      this.currentFilter = CastleRecruitDialogInventory.FILTER_UNITS_ALL;
    }
    this.refreshInventory();
    this.onInventoryUpdated(null);
    this._inventoryListComponent.show();
    this.initFilterButtons();
    e.prototype.show.call(this, t);
  };
  CastleRecruitDialogInventory.prototype.onDowntimeStatusUpdated = function (e) {
    this.fillInfoTextFields();
  };
  CastleRecruitDialogInventory.prototype.setElementsVisibility = function () {
    this.dialogDisp.btn_filter_stronghold.visible = !m.CastleModel.areaData.activeArea.isFactionCamp;
    this.dialogDisp.btn_filter_berimond_auxiliaries.visible = m.CastleModel.areaData.activeArea.isFactionCamp;
  };
  CastleRecruitDialogInventory.prototype.hide = function () {
    this.controller.removeEventListener(C.CastleMilitaryDataEvent.INVENTORY_UPDATED, this.bindFunction(this.onInventoryUpdated));
    this.controller.removeEventListener(v.CastleUserDataEvent.DOWNTIME_STATUS_UPDATED, this.bindFunction(this.onDowntimeStatusUpdated));
    e.prototype.hide.call(this);
  };
  CastleRecruitDialogInventory.prototype.showHelp = function () {
    D.CastleDialogHandler.getInstance().showHelper(c.Localize.text("dialog_recuit_inventory"), c.Localize.text("help_unitList"));
  };
  CastleRecruitDialogInventory.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (f.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_filter_melee:
          this.currentFilter = CastleRecruitDialogInventory.FILTER_UNITS_MELEE;
          break;
        case this.dialogDisp.btn_filter_range:
          this.currentFilter = CastleRecruitDialogInventory.FILTER_UNITS_RANGE;
          break;
        case this.dialogDisp.btn_filter_mead_melee:
          this.currentFilter = CastleRecruitDialogInventory.FILTER_UNITS_MELEE_MEAD;
          break;
        case this.dialogDisp.btn_filter_mead_range:
          this.currentFilter = CastleRecruitDialogInventory.FILTER_UNITS_RANGE_MEAD;
          break;
        case this.dialogDisp.btn_filter_all:
          this.currentFilter = CastleRecruitDialogInventory.FILTER_UNITS_ALL;
          break;
        case this.dialogDisp.btn_filter_attacktools:
          this.currentFilter = CastleRecruitDialogInventory.FILTER_TOOLS_ATTACK;
          break;
        case this.dialogDisp.btn_filter_defencetools:
          this.currentFilter = CastleRecruitDialogInventory.FILTER_TOOLS_DEFENCE;
          break;
        case this.dialogDisp.btn_filter_stronghold:
          this.currentFilter = CastleRecruitDialogInventory.FILTER_UNITS_STRONGHOLD;
          break;
        case this.dialogDisp.btn_filter_eventUnits:
          this.currentFilter = CastleRecruitDialogInventory.FILTER_EVENTUNIT;
          break;
        case this.dialogDisp.btn_filter_berimond_auxiliaries:
          this.currentFilter = CastleRecruitDialogInventory.FILTER_FACTION;
      }
    }
  };
  Object.defineProperty(CastleRecruitDialogInventory.prototype, "currentFilter", {
    get: function () {
      return this._currentFilter;
    },
    set: function (e) {
      if (e != this._currentFilter) {
        this._currentFilter = e;
        this._inventoryListComponent.currentPage = 0;
        this.initFilterButtons();
        this.fillUnitItemsByGroup();
        this.fillInfoTextFields();
        this.initItemSelectionEnablement();
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleRecruitDialogInventory.prototype.initItemSelectionEnablement = function () {
    if (this._currentFilter == CastleRecruitDialogInventory.FILTER_TOOLS_ATTACK || this._currentFilter == CastleRecruitDialogInventory.FILTER_TOOLS_DEFENCE) {
      this.dialogDisp.itemSelection.i0.enabled = false;
      this.dialogDisp.itemSelection.i1.enabled = false;
      this.dialogDisp.itemSelection.i2.enabled = false;
      this.dialogDisp.itemSelection.i3.enabled = false;
      this.dialogDisp.itemSelection.i4.enabled = false;
    } else {
      this.dialogDisp.itemSelection.i0.enabled = true;
      this.dialogDisp.itemSelection.i1.enabled = true;
      this.dialogDisp.itemSelection.i2.enabled = true;
      this.dialogDisp.itemSelection.i3.enabled = true;
      this.dialogDisp.itemSelection.i4.enabled = true;
    }
  };
  CastleRecruitDialogInventory.prototype.initBaronCommanderInfo = function () {
    var e = m.CastleModel.areaData.activeArea.isFactionCamp;
    this.dialogDisp.infoBarons.visible = !e;
    this.mcInfoKnightsX ||= this.dialogDisp.infoKnights.x;
    this.dialogDisp.infoKnights.x = e ? 0 : this.mcInfoKnightsX;
  };
  CastleRecruitDialogInventory.prototype.initFilterButtons = function () {
    f.ButtonHelper.initButtons([this.dialogDisp.btn_filter_melee, this.dialogDisp.btn_filter_range, this.dialogDisp.btn_filter_mead_melee, this.dialogDisp.btn_filter_mead_range, this.dialogDisp.btn_filter_all, this.dialogDisp.btn_filter_attacktools, this.dialogDisp.btn_filter_defencetools, this.dialogDisp.btn_filter_stronghold, this.dialogDisp.btn_filter_eventUnits, this.dialogDisp.btn_filter_berimond_auxiliaries], o.TwoStateIconZoomButton);
    this.dialogDisp.btn_filter_melee.basicButton.selectButton = this._currentFilter == CastleRecruitDialogInventory.FILTER_UNITS_MELEE;
    this.dialogDisp.btn_filter_range.basicButton.selectButton = this._currentFilter == CastleRecruitDialogInventory.FILTER_UNITS_RANGE;
    this.dialogDisp.btn_filter_mead_melee.basicButton.selectButton = this._currentFilter == CastleRecruitDialogInventory.FILTER_UNITS_MELEE_MEAD;
    this.dialogDisp.btn_filter_mead_range.basicButton.selectButton = this._currentFilter == CastleRecruitDialogInventory.FILTER_UNITS_RANGE_MEAD;
    this.dialogDisp.btn_filter_all.basicButton.selectButton = this._currentFilter == CastleRecruitDialogInventory.FILTER_UNITS_ALL;
    this.dialogDisp.btn_filter_attacktools.basicButton.selectButton = this._currentFilter == CastleRecruitDialogInventory.FILTER_TOOLS_ATTACK;
    this.dialogDisp.btn_filter_defencetools.basicButton.selectButton = this._currentFilter == CastleRecruitDialogInventory.FILTER_TOOLS_DEFENCE;
    this.dialogDisp.btn_filter_stronghold.basicButton.selectButton = this._currentFilter == CastleRecruitDialogInventory.FILTER_UNITS_STRONGHOLD;
    this.dialogDisp.btn_filter_eventUnits.basicButton.selectButton = this._currentFilter == CastleRecruitDialogInventory.FILTER_EVENTUNIT;
    this.dialogDisp.btn_filter_berimond_auxiliaries.basicButton.selectButton = this._currentFilter == CastleRecruitDialogInventory.FILTER_FACTION;
    var e = b.Iso.data.objects.provider.getObjectByType(y.IsoObjectEnum.BARRACKS);
    var t = m.CastleModel.areaData.activeArea.isFactionCamp;
    this.dialogDisp.btn_filter_mead_range.visible = !t && e && e.level >= 14;
    this.dialogDisp.btn_filter_mead_melee.visible = !t && e && e.level >= 14;
  };
  CastleRecruitDialogInventory.prototype.refreshInventory = function () {
    m.CastleModel.smartfoxClient.sendCommandVO(new g.C2SGetUnitInventoryVO());
  };
  CastleRecruitDialogInventory.prototype.fillInfoTextFields = function () {
    var e = s.MathBase.floor(m.CastleModel.areaData.activeCommonInfo.foodProduction, 1);
    var t = s.MathBase.floor(m.CastleModel.areaData.activeCommonInfo.meadProduction, 1);
    var i = s.MathBase.floor(m.CastleModel.areaData.activeCommonInfo.beefProduction, 1);
    this.i_food_txt_value.color = m.CastleModel.userData.foodFrozen ? h.ClientConstColor.FONT_FROZEN : m.CastleModel.areaData.activeCommonInfo.foodProduction < 0 ? h.ClientConstColor.FONT_INSUFFICIENT_COLOR : h.ClientConstColor.FONT_DEFAULT_COLOR;
    this.i_food_txt_value.textContentVO.numberValue = e;
    this.i_mead_txt_value.color = m.CastleModel.userData.foodFrozen ? h.ClientConstColor.FONT_FROZEN : m.CastleModel.areaData.activeCommonInfo.meadProduction < 0 ? h.ClientConstColor.FONT_INSUFFICIENT_COLOR : h.ClientConstColor.FONT_DEFAULT_COLOR;
    this.i_mead_txt_value.textContentVO.numberValue = t;
    this.i_beef_txt_value.color = m.CastleModel.userData.foodFrozen ? h.ClientConstColor.FONT_FROZEN : m.CastleModel.areaData.activeCommonInfo.beefProduction < 0 ? h.ClientConstColor.FONT_INSUFFICIENT_COLOR : h.ClientConstColor.FONT_DEFAULT_COLOR;
    this.i_beef_txt_value.textContentVO.numberValue = i;
    this.i_ucount_txt_value.textContentVO.numberValue = CastleRecruitDialogInventory.getSoldierCountWithoutAuxiliaries(this._inventoryListComponent.unitInventory);
    this.dialogDisp.infoFood.gotoAndStop(1);
    this.dialogDisp.infoAuxiliariesCount.visible = m.CastleModel.areaData.activeArea.isFactionCamp;
    var n = this.getFilteredArray(CastleRecruitDialogInventory.FILTER_UNITS_RANGE_MEAD).length > 0 || this.getFilteredArray(CastleRecruitDialogInventory.FILTER_UNITS_MELEE_MEAD).length > 0;
    switch (this._currentFilter) {
      case CastleRecruitDialogInventory.FILTER_FACTION:
      case CastleRecruitDialogInventory.FILTER_UNITS_ALL:
      case CastleRecruitDialogInventory.FILTER_UNITS_MELEE:
      case CastleRecruitDialogInventory.FILTER_UNITS_RANGE:
      case CastleRecruitDialogInventory.FILTER_UNITS_MELEE_MEAD:
      case CastleRecruitDialogInventory.FILTER_UNITS_RANGE_MEAD:
      case CastleRecruitDialogInventory.FILTER_UNITS_STRONGHOLD:
        this.dialogDisp.infoUnitCount.toolTipText = "dialog_recuit_unitsAvialable";
        this.dialogDisp.infoFood.visible = true;
        this.dialogDisp.infoMead.visible = n;
        this.dialogDisp.infoBeef.visible = n;
        this.dialogDisp.infoUnitCount.gotoAndStop(1);
        break;
      case CastleRecruitDialogInventory.FILTER_EVENTUNIT:
        this.dialogDisp.infoUnitCount.toolTipText = "amount";
        this.dialogDisp.infoFood.visible = true;
        this.dialogDisp.infoMead.visible = n;
        this.dialogDisp.infoBeef.visible = n;
        this.dialogDisp.infoUnitCount.gotoAndStop(1);
        break;
      default:
        this.dialogDisp.infoFood.visible = false;
        this.dialogDisp.infoMead.visible = false;
        this.dialogDisp.infoBeef.visible = false;
        this.dialogDisp.infoUnitCount.toolTipText = "dialog_recuit_toolsavailable";
        this.dialogDisp.infoUnitCount.gotoAndStop(2);
    }
    this.dialogDisp.infoFood.mc_frozen.visible = m.CastleModel.userData.foodFrozen;
    this.dialogDisp.infoMead.mc_frozen.visible = m.CastleModel.userData.foodFrozen;
    this.dialogDisp.infoBeef.mc_frozen.visible = m.CastleModel.userData.foodFrozen;
    this.dialogDisp.infoFood.toolTipText = m.CastleModel.userData.foodFrozen ? "foodProductionPerHour_freeze" : "foodproduction";
    this.dialogDisp.infoMead.toolTipText = m.CastleModel.userData.foodFrozen ? "meadProductionPerHour_freeze" : "meadproduction";
    this.dialogDisp.infoBeef.toolTipText = m.CastleModel.userData.foodFrozen ? "beefProductionPerHour_freeze" : "beefproduction";
  };
  CastleRecruitDialogInventory.getSoldierCountWithoutAuxiliaries = function (e) {
    var t = 0;
    if (e != null) {
      for (var i = 0, n = e; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          if (!o.isAuxiliary) {
            t += o.inventoryAmount;
          }
        }
      }
    }
    return t;
  };
  CastleRecruitDialogInventory.prototype.onInventoryUpdated = function (e) {
    this.fillUnitItemsByGroup();
    this.fillInfoTextFields();
    this.setElementsVisibility();
    this.initBaronCommanderInfo();
  };
  CastleRecruitDialogInventory.prototype.fillUnitItemsByGroup = function () {
    var e = this.getFilteredArray();
    e.sort(E.ClientConstSort.sortByUnitSortOrder);
    this._inventoryListComponent.changeUnitInventory(e);
  };
  CastleRecruitDialogInventory.prototype.getFilteredArray = function (e = null) {
    var t;
    var i = m.CastleModel.militaryData.unitInventory;
    var n = m.CastleModel.militaryData.unitStrongholdInventory;
    var o = e || this._currentFilter;
    switch (o) {
      case CastleRecruitDialogInventory.FILTER_UNITS_ALL:
        t = (t = i.getSoldiers()).concat(n.getSoldiers());
        break;
      case CastleRecruitDialogInventory.FILTER_FACTION:
        t = (t = i.getUnits(CastleRecruitDialogInventory.onlyAuxiliaries)).concat(n.getUnits(CastleRecruitDialogInventory.onlyAuxiliaries));
        break;
      case CastleRecruitDialogInventory.FILTER_UNITS_MELEE:
      case CastleRecruitDialogInventory.FILTER_UNITS_MELEE_MEAD:
        t = (t = i.getUnitsByType(CastleRecruitDialogInventory.FILTER_UNITS_MELEE)).concat(n.getUnitsByType(CastleRecruitDialogInventory.FILTER_UNITS_MELEE));
        break;
      case CastleRecruitDialogInventory.FILTER_UNITS_RANGE:
      case CastleRecruitDialogInventory.FILTER_UNITS_RANGE_MEAD:
        t = (t = i.getUnitsByType(CastleRecruitDialogInventory.FILTER_UNITS_RANGE)).concat(n.getUnitsByType(CastleRecruitDialogInventory.FILTER_UNITS_RANGE));
        break;
      case CastleRecruitDialogInventory.FILTER_TOOLS_ATTACK:
        t = (t = i.getUnitsByType(CastleRecruitDialogInventory.FILTER_TOOLS_ATTACK)).concat(n.getUnitsByType(CastleRecruitDialogInventory.FILTER_TOOLS_ATTACK));
        break;
      case CastleRecruitDialogInventory.FILTER_TOOLS_DEFENCE:
        t = (t = i.getUnitsByType(CastleRecruitDialogInventory.FILTER_TOOLS_DEFENCE)).concat(n.getUnitsByType(CastleRecruitDialogInventory.FILTER_TOOLS_DEFENCE));
        break;
      case CastleRecruitDialogInventory.FILTER_UNITS_STRONGHOLD:
        t = n.getUnits(null);
        break;
      case CastleRecruitDialogInventory.FILTER_EVENTUNIT:
        t = (t = i.getEventUnits()).concat(n.getEventUnits());
        break;
      default:
        t = [];
    }
    if (o == CastleRecruitDialogInventory.FILTER_UNITS_MELEE_MEAD || o == CastleRecruitDialogInventory.FILTER_UNITS_RANGE_MEAD) {
      var a = [];
      for (var s = 0; s < t.length; s++) {
        if (t[s].meadSupply > 0 || t[s].beefSupply > 0) {
          a.push(t[s]);
        }
      }
      return a;
    }
    if (o == CastleRecruitDialogInventory.FILTER_UNITS_MELEE || o == CastleRecruitDialogInventory.FILTER_UNITS_RANGE) {
      a = [];
      s = 0;
      for (; s < t.length; s++) {
        if (t[s].foodSupply > 0) {
          a.push(t[s]);
        }
      }
      return a;
    }
    if (r.castAs(b.Iso.data.objects.provider.getObjectByType(y.IsoObjectEnum.FACTION_UNIT_CAMP), "FactionUnitCampBuildingVO")) {
      this.i_auxcount_txt_value.textContentVO.numberValue = m.CastleModel.militaryData.unitInventory.getUnitCount(CastleRecruitDialogInventory.onlyAuxiliaries);
    }
    return t;
  };
  CastleRecruitDialogInventory.onlyAuxiliaries = function (e) {
    return e.isAuxiliary;
  };
  Object.defineProperty(CastleRecruitDialogInventory.prototype, "dialogDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleRecruitDialogInventory.__initialize_static_members = function () {
    CastleRecruitDialogInventory.NAME = "CastleRecruitDialogInventory";
    CastleRecruitDialogInventory.FILTER_UNITS_MELEE = p.ClientConstCastle.UNIT_TYPE_SOLDIER_MELEE;
    CastleRecruitDialogInventory.FILTER_UNITS_RANGE = p.ClientConstCastle.UNIT_TYPE_SOLDIER_RANGE;
    CastleRecruitDialogInventory.FILTER_UNITS_MELEE_MEAD = p.ClientConstCastle.UNIT_TYPE_SOLDIER_MELEE_MEAD;
    CastleRecruitDialogInventory.FILTER_UNITS_RANGE_MEAD = p.ClientConstCastle.UNIT_TYPE_SOLDIER_RANGE_MEAD;
    CastleRecruitDialogInventory.FILTER_UNITS_ALL = "allUnits";
    CastleRecruitDialogInventory.FILTER_TOOLS_ATTACK = p.ClientConstCastle.UNIT_TYPE_TOOL_ATTACK;
    CastleRecruitDialogInventory.FILTER_TOOLS_DEFENCE = p.ClientConstCastle.UNIT_TYPE_TOOL_DEFENCE;
    CastleRecruitDialogInventory.FILTER_UNITS_STRONGHOLD = p.ClientConstCastle.UNIT_TYPE_STRONGHOLD;
    CastleRecruitDialogInventory.FILTER_EVENTUNIT = p.ClientConstCastle.UNIT_TYPE_EVENTUNIT;
    CastleRecruitDialogInventory.FILTER_FACTION = "allAuxiliaries";
  };
  return CastleRecruitDialogInventory;
}(require("./35.js").CastleDialogSubLayer);
exports.CastleRecruitDialogInventory = O;
var E = require("./75.js");
var y = require("./80.js");
var b = require("./34.js");
var D = require("./9.js");
var I = require("./644.js");
var T = require("./2969.js");
var v = require("./32.js");
l.classImplementsInterfaces(O, "ICollectableRendererList", "ISublayer");
O.__initialize_static_members();