Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleEquipmentEvent(t, i = null, n = true, o = false) {
    var a = e.call(this, t, n, o) || this;
    a.equipmentInventory = i;
    return a;
  }
  n.__extends(CastleEquipmentEvent, e);
  CastleEquipmentEvent.__initialize_static_members = function () {
    CastleEquipmentEvent.INVENTORY_UPDATED = "INVENTORY_UPDATED";
    CastleEquipmentEvent.EQUIPMENT_CRAFTED = "EQUIPMENT_CRAFTED";
    CastleEquipmentEvent.EQUIPMENT_CRAFTED_FAILED = "EQUIPMENT_CRAFTED_FAILED";
    CastleEquipmentEvent.LORDS_UPDATED = "LORDS_UPDATED";
    CastleEquipmentEvent.INVENTORY_SPACE_LEFT = "INVENTORY_SPACE_LEFT";
    CastleEquipmentEvent.EQUIPMENT_ENCHANTED = "EQUIPMENT_ENCHANTED";
    CastleEquipmentEvent.EQUIPMENT_ENCHANTING_FAILED = "EQUIPMENT_ENCHANTING_FAILED";
    CastleEquipmentEvent.EQUIPMENT_ENCHANTING_INVALID = "EQUIPMENT_ENCHANTING_INVALID";
    CastleEquipmentEvent.FORGE_DATA_RECEIVED = "FORGE_DATA_RECEIVED";
    CastleEquipmentEvent.FORGE_CRAFT_EXECUTED = "FORGE_CRAFT_EXECUTED";
    CastleEquipmentEvent.EQUIP_SUCCESSFUL = "EQUIP_SUCCESSFULL";
    CastleEquipmentEvent.EQUIP_FAILED = "EQUIP_FAILED";
  };
  CastleEquipmentEvent.INVENTORY_UPDATED = "INVENTORY_UPDATED";
  CastleEquipmentEvent.EQUIPMENT_CRAFTED = "EQUIPMENT_CRAFTED";
  CastleEquipmentEvent.EQUIPMENT_CRAFTED_FAILED = "EQUIPMENT_CRAFTED_FAILED";
  CastleEquipmentEvent.LORDS_UPDATED = "LORDS_UPDATED";
  CastleEquipmentEvent.INVENTORY_SPACE_LEFT = "INVENTORY_SPACE_LEFT";
  CastleEquipmentEvent.EQUIPMENT_ENCHANTED = "EQUIPMENT_ENCHANTED";
  CastleEquipmentEvent.EQUIPMENT_ENCHANTING_FAILED = "EQUIPMENT_ENCHANTING_FAILED";
  CastleEquipmentEvent.EQUIPMENT_ENCHANTING_INVALID = "EQUIPMENT_ENCHANTING_INVALID";
  CastleEquipmentEvent.FORGE_DATA_RECEIVED = "FORGE_DATA_RECEIVED";
  CastleEquipmentEvent.FORGE_CRAFT_EXECUTED = "FORGE_CRAFT_EXECUTED";
  CastleEquipmentEvent.EQUIP_SUCCESSFUL = "EQUIP_SUCCESSFULL";
  CastleEquipmentEvent.EQUIP_FAILED = "EQUIP_FAILED";
  CastleEquipmentEvent.NEW_RELICS_UPDATED = "newRelicsUpdated";
  CastleEquipmentEvent.OVERALL_NEW_RELICS_UPDATED = "overallNewRelicsUpdated";
  CastleEquipmentEvent.RELIC_UPGRADE_RECEIVED = "relicUpgradeReceived";
  CastleEquipmentEvent.GENERAL_ASSIGNED = "generalAssigned";
  return CastleEquipmentEvent;
}(createjs.Event);
exports.CastleEquipmentEvent = o;
o.__initialize_static_members();