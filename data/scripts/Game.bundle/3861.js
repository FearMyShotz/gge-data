Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./18.js");
var c = require("./711.js");
var u = require("./129.js");
var d = require("./15.js");
var p = require("./4.js");
var h = require("./181.js");
var g = require("./9.js");
var C = require("./348.js");
var _ = require("./376.js");
var m = require("./617.js");
var f = require("./614.js");
var O = require("./115.js");
var E = require("./471.js");
var y = require("./344.js");
var b = require("./3862.js");
var D = require("./3866.js");
var I = require("./3867.js");
var T = function (e) {
  function AttackDialogUnitPicker(t) {
    var i = e.call(this, t) || this;
    i.onParentDialogShow();
    return i;
  }
  n.__extends(AttackDialogUnitPicker, e);
  AttackDialogUnitPicker.prototype.onParentDialogShow = function () {
    this.controller.onSelectedWaveInfoSlotContainerChanged.add(this.bindFunction(this.onSlotSelectionChanged));
    this.controller.onOpenUnitPicker.add(this.bindFunction(this.openUnitPickerList));
    this.controller.onAutoFillAllWaves.add(this.bindFunction(this.hide));
    d.CastleBasicController.getInstance().addEventListener(c.CastleFightDataEvent.NEW_TOOL_BOUGHT, this.bindFunction(this.onNewToolBought));
    this.disp.visible = false;
    this._unitMixedInventory = this.attackInfoVO.unitInventory;
    this._unitMixedInventory.addAll(this.attackInfoVO.strongholdUnitInventory.getUnits(null));
    d.CastleBasicController.getInstance().addEventListener(u.CastleMilitaryDataEvent.UNIT_UPDATED, this.bindFunction(this.onUnitUpdated));
  };
  AttackDialogUnitPicker.prototype.onUnitUpdated = function (e) {
    this._unitMixedInventory = this.attackInfoVO.unitInventory;
    this._unitMixedInventory.addAll(this.attackInfoVO.strongholdUnitInventory.getUnits(null));
  };
  AttackDialogUnitPicker.prototype.showCurrentList = function (t, i) {
    var n;
    if (t === undefined) {
      t = 0;
    }
    if (i === undefined) {
      i = -1;
    }
    e.prototype.showCurrentList.call(this, t, i);
    n = this._currentUnitCategory == l.ClientConstCastle.UNIT_CATEGORY_SOLDIERS ? "dialog_attack_rework2022_noUnits_desc" : "dialog_attack_rework2022_noTools_desc";
    o.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.txt_empty, new s.LocalizedTextVO(n)).visible = this.currentList.dataList.length == 0;
  };
  AttackDialogUnitPicker.prototype.getStartScrollValue = function () {
    return r.int(this.currentList ? this.currentList.scrollComponent.currentValue : -1);
  };
  AttackDialogUnitPicker.prototype.onSlotSelectionChanged = function () {
    this.hide();
  };
  Object.defineProperty(AttackDialogUnitPicker.prototype, "unitScrollItemClass", {
    get: function () {
      return D.AttackDialogWaveHandlerSoldierPickItem;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackDialogUnitPicker.prototype, "toolScrollItemClass", {
    get: function () {
      return I.AttackDialogWaveHandlerToolPickItem;
    },
    enumerable: true,
    configurable: true
  });
  AttackDialogUnitPicker.prototype.openUnitPickerList = function (e) {
    var t;
    var i;
    var n = this.controller.selectedWaveInfoSlotContainer.items[0].slotType == h.ToolUnitVO.SLOTTYPE_SOLDIER;
    var o = this.controller.selectedWaveInfoSlotContainer.items[0].slotType == h.ToolUnitVO.SLOTTYPE_TOOL_SUPPORT_OFFENSE;
    i = n ? _.CastleFightDialog.SHOP_CATEGORY_UNITS : o ? _.CastleFightDialog.SHOP_CATEGORY_SUPPORT_TOOLS : _.CastleFightDialog.SHOP_CATEGORY_TOOLS;
    t = E.AttackDialogHelper.getFilteredArray(i);
    y.AttackDialogTrackingHelper.getInstance().trackDetailCounter(y.AttackDialogTrackingHelper.TRACK_MANUAL_CLICK);
    if (n) {
      this.showUnitList(t, this.containerVO, this.attackInfoVO.sourceArea, this, -1, e);
    } else {
      this.showToolList(t, this.containerVO, this.attackInfoVO.sourceArea, this, -1, e);
    }
  };
  AttackDialogUnitPicker.prototype.getFightDialogType = function () {
    return C.CastleAdvancedTroopSelectionComponent.TYPE_ATTACK;
  };
  AttackDialogUnitPicker.prototype.isMaxAmountPerWaveReached = function (e) {
    return e.amountPerWave <= (this.attackInfoVO.army.getWaveByID(this.controller.selectedWaveIndex) ? this.attackInfoVO.army.getWaveByID(this.controller.selectedWaveIndex).getSumOfToolsByTool(e) : 0) + (this.attackInfoVO.supportItemContainer ? this.attackInfoVO.supportItemContainer.getAmountOfToolInContainer(e) : 0);
  };
  AttackDialogUnitPicker.prototype.changeItemAmount = function (e, t, i) {
    E.AttackDialogHelper.changeUnitItemAmount(this._unitMixedInventory, e, t, i);
  };
  AttackDialogUnitPicker.prototype.onNewToolBought = function (e) {
    var t = e.params[0];
    if (t) {
      var i = r.int(t.W);
      var n = r.int(t.A);
      this._unitMixedInventory.changeUnitAmount(i, n);
      if (this.disp.visible && this.currentUnitCategory == l.ClientConstCastle.UNIT_CATEGORY_TOOLS) {
        this.addToMergedInventory(i, n);
      }
    }
  };
  AttackDialogUnitPicker.prototype.showInstantBuyDialog = function (e) {
    var t = -1;
    if (a.instanceOfClass(this.attackInfoVO.sourceArea, "EventCampMapobjectVO")) {
      t = r.int(p.CastleModel.specialEventData.activeSeasonVO.treasureMapVO.mapID);
    }
    g.CastleDialogHandler.getInstance().registerDefaultDialogs(m.CastleDefenceBuyUnitsDialog, new f.CastleDefenceBuyUnitsDialogProperties(e, this.attackInfoVO.sourceArea, t));
  };
  Object.defineProperty(AttackDialogUnitPicker.prototype, "containerVO", {
    get: function () {
      return this.controller.selectedWaveInfoSlotContainer;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackDialogUnitPicker.prototype, "attackInfoVO", {
    get: function () {
      return this.controller.attackVO;
    },
    enumerable: true,
    configurable: true
  });
  AttackDialogUnitPicker.prototype.destroy = function () {
    this.controller.onSelectedWaveInfoSlotContainerChanged.remove(this.bindFunction(this.onSlotSelectionChanged));
    this.controller.onOpenUnitPicker.remove(this.bindFunction(this.openUnitPickerList));
    this.controller.onAutoFillAllWaves.remove(this.bindFunction(this.hide));
    d.CastleBasicController.getInstance().removeEventListener(u.CastleMilitaryDataEvent.UNIT_UPDATED, this.bindFunction(this.onUnitUpdated));
    d.CastleBasicController.getInstance().removeEventListener(c.CastleFightDataEvent.NEW_TOOL_BOUGHT, this.bindFunction(this.onNewToolBought));
  };
  Object.defineProperty(AttackDialogUnitPicker.prototype, "controller", {
    get: function () {
      return O.AttackDialogController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  AttackDialogUnitPicker.__initialize_static_members = function () {};
  return AttackDialogUnitPicker;
}(b.AAdvancedTroopSelectionComponent);
exports.AttackDialogUnitPicker = T;
a.classImplementsInterfaces(T, "ICollectableRendererList");
T.__initialize_static_members();