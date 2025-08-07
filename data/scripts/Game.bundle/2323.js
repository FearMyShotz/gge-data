Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./6.js");
var r = require("./1309.js");
var l = require("./1311.js");
var c = createjs.Point;
var u = function (e) {
  function AutoSellDialogEquipments(t) {
    var i = this;
    i.NUMBER_OF_ACTIVE_STATE_CHECKBOXES = new c(4, 5);
    CONSTRUCTOR_HACK;
    (i = e.call(this, t) || this).init();
    return i;
  }
  n.__extends(AutoSellDialogEquipments, e);
  AutoSellDialogEquipments.prototype.init = function () {
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_selectAll, new a.LocalizedTextVO("selectAll")).autoFitToBounds = true;
    this.subLayerDisp.mc_icon_hero.toolTipText = "equipment_slotType_hero_heroine";
    this.subLayerDisp.mc_icon_helmet.toolTipText = "equipment_slotType_helmet";
    this.subLayerDisp.mc_icon_armor.toolTipText = "equipment_slotType_armor";
    this.subLayerDisp.mc_icon_weapon.toolTipText = "equipment_slotType_weapon";
    this.subLayerDisp.mc_icon_artifact.toolTipText = "equipment_slotType_artifact";
    this.subLayerDisp.mc_icon_common.toolTipText = "equipment_rarity_common";
    this.subLayerDisp.mc_icon_rare.toolTipText = "equipment_rarity_rare";
    this.subLayerDisp.mc_icon_epic.toolTipText = "equipment_rarity_epic";
    this.subLayerDisp.mc_icon_legendary.toolTipText = "equipment_rarity_legendary";
    this._selectAllCheckbox = new h.AutoSellDialogSelectAllCheckbox(this.subLayerDisp.btn_selectAll);
    this._activeStateCheckboxes = [];
    for (var e = 0; e < this.NUMBER_OF_ACTIVE_STATE_CHECKBOXES.y; ++e) {
      this._activeStateCheckboxes[e] = [];
      for (var t = 0; t < this.NUMBER_OF_ACTIVE_STATE_CHECKBOXES.x; ++t) {
        this._activeStateCheckboxes[e][t] = new p.AutoSellDialogActiveStateCheckbox(this.subLayerDisp.getChildByName("mc_active_" + t + "_" + e), t, e);
      }
    }
  };
  AutoSellDialogEquipments.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this._selectAllCheckbox.onStateChanged.add(this.bindFunction(this.onSelectAllCheckboxChanged));
    this._selectAllCheckbox.onShow();
    for (var i = 0; i < this.NUMBER_OF_ACTIVE_STATE_CHECKBOXES.y; ++i) {
      for (var n = 0; n < this.NUMBER_OF_ACTIVE_STATE_CHECKBOXES.x; ++n) {
        var o = this._activeStateCheckboxes[i][n];
        o.onShow();
        o.onStateChanged.add(this.bindFunction(this.onActiveStateCheckboxChanged));
      }
    }
    this.updateSelectAllCheckbox();
    this.updateActiveCheckboxes();
  };
  AutoSellDialogEquipments.prototype.hide = function () {
    this._selectAllCheckbox.onHide();
    for (var t = 0; t < this.NUMBER_OF_ACTIVE_STATE_CHECKBOXES.y; ++t) {
      for (var i = 0; i < this.NUMBER_OF_ACTIVE_STATE_CHECKBOXES.x; ++i) {
        var n = this._activeStateCheckboxes[t][i];
        n.onStateChanged.remove(this.bindFunction(this.onActiveStateCheckboxChanged));
        n.onHide();
      }
    }
    this._selectAllCheckbox.onStateChanged.remove(this.bindFunction(this.onSelectAllCheckboxChanged));
    e.prototype.hide.call(this);
  };
  AutoSellDialogEquipments.prototype.updateActiveCheckboxes = function () {
    for (var e = 0; e < this.NUMBER_OF_ACTIVE_STATE_CHECKBOXES.y; ++e) {
      for (var t = 0; t < this.NUMBER_OF_ACTIVE_STATE_CHECKBOXES.x; ++t) {
        this._activeStateCheckboxes[e][t].setState(this.getActiveStateFromData(t, e), false);
      }
    }
  };
  AutoSellDialogEquipments.prototype.updateSelectAllCheckbox = function () {
    var e = s.int(this.autoSellVO.equipments.getCurrentActiveStatesCount());
    var t = -1;
    t = e <= 0 ? s.int(d.AAutoSellDialogCheckbox.STATE_UNSELECTED) : e >= r.AutoSellEquipmentsVO.NUMBER_OF_ACTIVE_STATES ? s.int(d.AAutoSellDialogCheckbox.STATE_SELECTED) : s.int(d.AAutoSellDialogCheckbox.STATE_MIXED);
    this._selectAllCheckbox.setState(t, false);
  };
  AutoSellDialogEquipments.prototype.getActiveStateFromData = function (e, t) {
    return s.int(this.autoSellVO.equipments.isActive(r.AutoSellEquipmentsVO.SLOT_ORDER[t], r.AutoSellEquipmentsVO.RARITY_ORDER[e]) ? d.AAutoSellDialogCheckbox.STATE_SELECTED : d.AAutoSellDialogCheckbox.STATE_UNSELECTED);
  };
  AutoSellDialogEquipments.prototype.setActiveStateInData = function (e, t, i) {
    this.autoSellVO.equipments.setActive(r.AutoSellEquipmentsVO.SLOT_ORDER[t], r.AutoSellEquipmentsVO.RARITY_ORDER[e], i);
  };
  AutoSellDialogEquipments.prototype.onSelectAllCheckboxChanged = function (e) {
    switch (e.currentState) {
      case d.AAutoSellDialogCheckbox.STATE_UNSELECTED:
      case d.AAutoSellDialogCheckbox.STATE_MIXED:
        this.autoSellVO.equipments.setAllActiveStates(false);
        break;
      case d.AAutoSellDialogCheckbox.STATE_SELECTED:
        this.autoSellVO.equipments.setAllActiveStates(true);
    }
    this.updateActiveCheckboxes();
  };
  AutoSellDialogEquipments.prototype.onActiveStateCheckboxChanged = function (e) {
    var t = e;
    this.setActiveStateInData(t.row, t.column, e.currentState == d.AAutoSellDialogCheckbox.STATE_SELECTED);
    this.updateSelectAllCheckbox();
  };
  return AutoSellDialogEquipments;
}(l.AAutoSellDialogSublayer);
exports.AutoSellDialogEquipments = u;
var d = require("./924.js");
var p = require("./2325.js");
var h = require("./2326.js");
o.classImplementsInterfaces(u, "ICollectableRendererList", "ISublayer");