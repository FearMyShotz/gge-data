Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./49.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./18.js");
var u = require("./16.js");
var d = require("./706.js");
var p = require("./129.js");
var h = require("./4.js");
var g = require("./8.js");
var C = function (e) {
  function CastleRecruitDialogStronghold(t) {
    var i = this;
    CONSTRUCTOR_HACK;
    (i = e.call(this, t) || this)._inventoryListComponent = new f.CastleInventoryStrongholdListComponent(i.dialogDisp.itemSelection);
    i._strongholdInventoryListComponent = new O.StrongholdInventoryListComponent(i.dialogDisp.strongholdItemSelection);
    i.initButtons();
    i.dialogDisp.btn_filter_melee.toolTipText = "melees";
    i.dialogDisp.btn_filter_range.toolTipText = "ranges";
    i.dialogDisp.btn_filter_mead_melee.toolTipText = "meleeMeadUnits";
    i.dialogDisp.btn_filter_mead_range.toolTipText = "rangedMeadUnits";
    i.dialogDisp.btn_filter_all.toolTipText = "allUnits";
    i.dialogDisp.btn_filter_eventUnits.toolTipText = "eventUnits";
    i.dialogDisp.iconStronghold.toolTipText = "stronghold_UnitInside";
    i.textFieldManager.registerTextField(i.dialogDisp.txt_title, new l.LocalizedTextVO("stronghold_name"));
    i.i_strongholdcap_txt_value = i.textFieldManager.registerTextField(i.dialogDisp.tfCapacity, new l.LocalizedTextVO(a.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [0, 0]));
    return i;
  }
  n.__extends(CastleRecruitDialogStronghold, e);
  CastleRecruitDialogStronghold.prototype.initButtons = function () {
    g.ButtonHelper.initButtons([this.dialogDisp.btn_filter_melee, this.dialogDisp.btn_filter_range, this.dialogDisp.btn_filter_mead_melee, this.dialogDisp.btn_filter_mead_range, this.dialogDisp.btn_filter_all, this.dialogDisp.btn_filter_eventUnits], o.TwoStateIconZoomButton);
  };
  CastleRecruitDialogStronghold.prototype.destroy = function () {
    e.prototype.destroy.call(this);
    this._inventoryListComponent.destroy();
    this._strongholdInventoryListComponent.destroy();
  };
  CastleRecruitDialogStronghold.prototype.show = function (t) {
    this.controller.addEventListener(p.CastleMilitaryDataEvent.INVENTORY_UPDATED, this.bindFunction(this.onInventoryUpdated));
    this.currentFilter = t[1] ? t[1] : CastleRecruitDialogStronghold.FILTER_UNITS_ALL;
    CastleRecruitDialogStronghold.refreshInventory();
    this.onInventoryUpdated(null);
    this._inventoryListComponent.show();
    this._strongholdInventoryListComponent.show();
    e.prototype.show.call(this, t);
  };
  CastleRecruitDialogStronghold.prototype.hide = function () {
    this.controller.removeEventListener(p.CastleMilitaryDataEvent.INVENTORY_UPDATED, this.bindFunction(this.onInventoryUpdated));
    e.prototype.hide.call(this);
  };
  CastleRecruitDialogStronghold.prototype.showHelp = function () {
    m.CastleDialogHandler.getInstance().showHelper(r.Localize.text("dialog_recruit_stronghold"), r.Localize.text("help_strongholdWindow"));
  };
  CastleRecruitDialogStronghold.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (g.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_filter_melee:
          this.currentFilter = CastleRecruitDialogStronghold.FILTER_UNITS_MELEE;
          break;
        case this.dialogDisp.btn_filter_range:
          this.currentFilter = CastleRecruitDialogStronghold.FILTER_UNITS_RANGE;
          break;
        case this.dialogDisp.btn_filter_mead_melee:
          this.currentFilter = CastleRecruitDialogStronghold.FILTER_UNITS_MELEE_MEAD;
          break;
        case this.dialogDisp.btn_filter_mead_range:
          this.currentFilter = CastleRecruitDialogStronghold.FILTER_UNITS_RANGE_MEAD;
          break;
        case this.dialogDisp.btn_filter_all:
          this.currentFilter = CastleRecruitDialogStronghold.FILTER_UNITS_ALL;
          break;
        case this.dialogDisp.btn_filter_eventUnits:
          this.currentFilter = CastleRecruitDialogStronghold.FILTER_EVENTUNIT;
      }
    }
  };
  Object.defineProperty(CastleRecruitDialogStronghold.prototype, "currentFilter", {
    get: function () {
      return this._currentFilter;
    },
    set: function (e) {
      if (e != this._currentFilter) {
        this._currentFilter = e;
        this._inventoryListComponent.currentPage = 0;
        this.initFilterButtons();
        this.fillActiveUnitItemsByGroup();
        this.fillStrongholdUnitItemsByGroup();
        this.fillInfoTextFields();
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleRecruitDialogStronghold.prototype.initFilterButtons = function () {
    g.ButtonHelper.setButtonSelected(this.dialogDisp.btn_filter_melee, this._currentFilter == CastleRecruitDialogStronghold.FILTER_UNITS_MELEE);
    g.ButtonHelper.setButtonSelected(this.dialogDisp.btn_filter_range, this._currentFilter == CastleRecruitDialogStronghold.FILTER_UNITS_RANGE);
    g.ButtonHelper.setButtonSelected(this.dialogDisp.btn_filter_mead_melee, this._currentFilter == CastleRecruitDialogStronghold.FILTER_UNITS_MELEE_MEAD);
    g.ButtonHelper.setButtonSelected(this.dialogDisp.btn_filter_mead_range, this._currentFilter == CastleRecruitDialogStronghold.FILTER_UNITS_RANGE_MEAD);
    g.ButtonHelper.setButtonSelected(this.dialogDisp.btn_filter_all, this._currentFilter == CastleRecruitDialogStronghold.FILTER_UNITS_ALL);
    g.ButtonHelper.setButtonSelected(this.dialogDisp.btn_filter_eventUnits, this._currentFilter == CastleRecruitDialogStronghold.FILTER_EVENTUNIT);
    this.dialogDisp.btn_filter_mead_melee.visible = h.CastleModel.legendSkillData.meadUnitsUnlocked;
    this.dialogDisp.btn_filter_mead_range.visible = h.CastleModel.legendSkillData.meadUnitsUnlocked;
  };
  CastleRecruitDialogStronghold.refreshInventory = function () {
    h.CastleModel.smartfoxClient.sendCommandVO(new d.C2SGetUnitInventoryVO());
  };
  CastleRecruitDialogStronghold.prototype.fillInfoTextFields = function () {
    this.i_strongholdcap_txt_value.textContentVO.textReplacements = [String(h.CastleModel.militaryData.strongholdUnitCount), String(h.CastleModel.militaryData.currentHiddenSoldierCapacity)];
    if (h.CastleModel.militaryData.strongholdUnitCount == h.CastleModel.militaryData.currentHiddenSoldierCapacity) {
      this.dialogDisp.hitAreaStrongholdCap.toolTipText = "dialog_stronghold_full";
      this.i_strongholdcap_txt_value.color = u.ClientConstColor.GENERIC_BRIGHT_RED;
    } else {
      this.dialogDisp.hitAreaStrongholdCap.toolTipText = "dialog_stronghold_capacity";
      this.i_strongholdcap_txt_value.color = u.ClientConstColor.FONT_DEFAULT_COLOR;
    }
  };
  CastleRecruitDialogStronghold.prototype.onInventoryUpdated = function (e) {
    this.fillActiveUnitItemsByGroup();
    this.fillStrongholdUnitItemsByGroup();
    this.fillInfoTextFields();
  };
  CastleRecruitDialogStronghold.prototype.fillActiveUnitItemsByGroup = function () {
    var e = this.getFilteredArray();
    e.sort(_.ClientConstSort.sortByUnitSortOrder);
    this._inventoryListComponent.changeUnitInventory(e);
  };
  CastleRecruitDialogStronghold.prototype.fillStrongholdUnitItemsByGroup = function () {
    var e = h.CastleModel.militaryData.unitStrongholdInventory.getSoldiers();
    e.sort(_.ClientConstSort.sortByUnitSortOrder);
    this._strongholdInventoryListComponent.changeUnitInventory(e);
  };
  CastleRecruitDialogStronghold.prototype.getFilteredArray = function (e = null) {
    var t;
    var i;
    var n = h.CastleModel.militaryData.unitInventory;
    var o = e || this._currentFilter;
    var a = 0;
    switch (o) {
      case CastleRecruitDialogStronghold.FILTER_UNITS_ALL:
        t = n.getSoldiers();
        break;
      case CastleRecruitDialogStronghold.FILTER_UNITS_MELEE_MEAD:
      case CastleRecruitDialogStronghold.FILTER_UNITS_MELEE:
        t = n.getUnitsByType(CastleRecruitDialogStronghold.FILTER_UNITS_MELEE);
        break;
      case CastleRecruitDialogStronghold.FILTER_UNITS_RANGE_MEAD:
      case CastleRecruitDialogStronghold.FILTER_UNITS_RANGE:
        t = n.getUnitsByType(CastleRecruitDialogStronghold.FILTER_UNITS_RANGE);
        break;
      case CastleRecruitDialogStronghold.FILTER_EVENTUNIT:
        t = n.getEventUnits();
        break;
      default:
        return [];
    }
    if (o == CastleRecruitDialogStronghold.FILTER_UNITS_MELEE || o == CastleRecruitDialogStronghold.FILTER_UNITS_RANGE) {
      for (i = []; a < t.length; a++) {
        if (t[a].foodSupply > 0) {
          i.push(t[a]);
        }
      }
    }
    if (o == CastleRecruitDialogStronghold.FILTER_UNITS_MELEE_MEAD || o == CastleRecruitDialogStronghold.FILTER_UNITS_RANGE_MEAD) {
      for (i = []; a < t.length; a++) {
        if (t[a].meadSupply > 0 || t[a].beefSupply > 0) {
          i.push(t[a]);
        }
      }
    }
    return i || t;
  };
  Object.defineProperty(CastleRecruitDialogStronghold.prototype, "dialogDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleRecruitDialogStronghold.__initialize_static_members = function () {
    CastleRecruitDialogStronghold.NAME = "CastleRecruitDialogStronghold";
    CastleRecruitDialogStronghold.FILTER_UNITS_MELEE = c.ClientConstCastle.UNIT_TYPE_SOLDIER_MELEE;
    CastleRecruitDialogStronghold.FILTER_UNITS_RANGE = c.ClientConstCastle.UNIT_TYPE_SOLDIER_RANGE;
    CastleRecruitDialogStronghold.FILTER_UNITS_MELEE_MEAD = c.ClientConstCastle.UNIT_TYPE_SOLDIER_MELEE_MEAD;
    CastleRecruitDialogStronghold.FILTER_UNITS_RANGE_MEAD = c.ClientConstCastle.UNIT_TYPE_SOLDIER_RANGE_MEAD;
    CastleRecruitDialogStronghold.FILTER_UNITS_ALL = "allUnits";
    CastleRecruitDialogStronghold.FILTER_EVENTUNIT = c.ClientConstCastle.UNIT_TYPE_EVENTUNIT;
  };
  return CastleRecruitDialogStronghold;
}(require("./34.js").CastleDialogSubLayer);
exports.CastleRecruitDialogStronghold = C;
var _ = require("./75.js");
var m = require("./9.js");
var f = require("./2973.js");
var O = require("./2976.js");
s.classImplementsInterfaces(C, "ICollectableRendererList", "ISublayer");
C.__initialize_static_members();