Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./4.js");
var c = require("./73.js");
var u = function () {
  function FillCraftingEquipmentStrategy() {}
  FillCraftingEquipmentStrategy.prototype.fillCraftingSlots = function (e, t, i) {
    var n = i.filteredInventory;
    var o = [];
    var s = 0;
    var l = 0;
    for (var c = 0; c < e.length; c++) {
      var u = e[c].slotVO;
      if (u.equipmentVO != null) {
        s = r.int(u.equipmentVO.rareID);
        l++;
      } else if (s != a.EquipmentConst.RARENESS_LEGENDARY || o.length + l < a.EquipmentConst.NORMAL_CRAFT_COUNT) {
        o.push(e[c]);
      }
    }
    this.fillFreeSlots(o, n, s);
  };
  FillCraftingEquipmentStrategy.prototype.fillFreeSlots = function (e, t, i, n = false) {
    if (i == 0) {
      this.fillFreeSlots(e, t, ++i, true);
    } else if (!this.tryFillingWithRarity(e, t, i)) {
      if (n && i < a.EquipmentConst.RARENESS_LEGENDARY) {
        this.fillFreeSlots(e, t, ++i, true);
      } else {
        this.showError();
      }
    }
  };
  FillCraftingEquipmentStrategy.prototype.tryFillingWithRarity = function (e, t, i) {
    if (i == a.EquipmentConst.RARENESS_LEGENDARY && e.length > a.EquipmentConst.NORMAL_CRAFT_COUNT) {
      e.splice(a.EquipmentConst.NORMAL_CRAFT_COUNT, e.length - a.EquipmentConst.NORMAL_CRAFT_COUNT);
    }
    var n = t.filter(this.getFilterByRareID(i));
    if (n.length >= e.length) {
      for (var o = 0; o < e.length; o++) {
        this.fillSlot(e[o], n[n.length - (1 + o)]);
      }
      return true;
    }
    if (n.length >= e.length - a.EquipmentConst.NORMAL_CRAFT_COUNT && i != a.EquipmentConst.RARENESS_LEGENDARY) {
      for (var s = 0; s < e.length - a.EquipmentConst.NORMAL_CRAFT_COUNT; s++) {
        this.fillSlot(e[s], n[n.length - (1 + s)]);
      }
      return true;
    }
    return false;
  };
  FillCraftingEquipmentStrategy.prototype.fillSlot = function (e, t) {
    e.slotVO.equipmentVO = t;
    e.mc_itemHolder.addChild(c.EquipmentIconHelper.addEquipmentIcon(t, null, FillCraftingEquipmentStrategy.MAX_WIDTH, FillCraftingEquipmentStrategy.MAX_HEIGHT, null, true, false, false, true, true));
    l.CastleModel.equipData.moveItem(t, l.CastleModel.equipData.playerInventory, l.CastleModel.equipData.craftingInventory);
  };
  FillCraftingEquipmentStrategy.prototype.getFilterByRareID = function (e) {
    return function (t) {
      var i = [];
      for (var n = 1; n < arguments.length; n++) {
        i[n - 1] = arguments[n];
      }
      return t.rareID == e && !t.isFavorite;
    };
  };
  FillCraftingEquipmentStrategy.prototype.showError = function () {
    d.CastleDialogHandler.getInstance().registerDefaultDialogs(p.CastleStandardOkDialog, new n.BasicStandardOkDialogProperties(s.Localize.text("generic_alert_information"), s.Localize.text("dialog_equipmentCrafting_autofillError")));
  };
  FillCraftingEquipmentStrategy.__initialize_static_members = function () {
    FillCraftingEquipmentStrategy.MAX_WIDTH = 57;
    FillCraftingEquipmentStrategy.MAX_HEIGHT = 57;
  };
  return FillCraftingEquipmentStrategy;
}();
exports.FillCraftingEquipmentStrategy = u;
var d = require("./9.js");
var p = require("./38.js");
o.classImplementsInterfaces(u, "IFillCraftingStrategy");
u.__initialize_static_members();