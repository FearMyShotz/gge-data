Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2012.js");
var o = require("./2013.js");
var a = function () {
  function ClientConstCollectable() {}
  ClientConstCollectable._getRendererDic = function () {
    var e = new Map();
    e.set(f.CollectableRenderOptions.ICON, u.CollectableRendererIcon);
    e.set(f.CollectableRenderOptions.TOOLTIP, m.CollectableRendererTooltip);
    e.set(f.CollectableRenderOptions.TEXTFIELD, _.CollectableRendererTextfield);
    e.set(f.CollectableRenderOptions.TEXT_BACKGROUND, C.CollectableRendererTextBackground);
    e.set(f.CollectableRenderOptions.INFO_BUTTON, p.CollectableRendererInfoButton);
    e.set(f.CollectableRenderOptions.ICON_TRANSFORM, d.CollectableRendererIconTransform);
    e.set(f.CollectableRenderOptions.COLOR_BACKGROUND, r.CollectableRendererColorBackground);
    e.set(f.CollectableRenderOptions.EQUIPMENT_BACKGROUND, c.CollectableRendererEquipmentBackground);
    e.set(f.CollectableRenderOptions.COST_TEXTFIELD, l.CollectableRendererCostTextfield);
    e.set(f.CollectableRenderOptions.MINUTESKIP_BACKGROUND, h.CollectableRendererMinuteSkipBackground);
    e.set(f.CollectableRenderOptions.BUILDING_LEVEL_MC, o.CollectableRendererBuildingLevelMC);
    e.set(f.CollectableRenderOptions.DYNAMIC_LEVEL_INDICATOR, O.CollectableRendererLevelIndicatorMC);
    e.set(f.CollectableRenderOptions.ALLIANCE_REWARD_BACKGROUND, n.CollectableRendererAllianceRewardBackground);
    e.set(f.CollectableRenderOptions.STORAGE_BAR, g.CollectableRendererStoragebar);
    return e;
  };
  ClientConstCollectable.__initialize_static_members = function () {
    ClientConstCollectable.GROUP_LIST_REPAIR_COST_RESOURCES = [s.CollectableEnum.WOOD, s.CollectableEnum.STONE, s.CollectableEnum.FOOD];
    ClientConstCollectable.GROUP_LIST_RESOURCES = [s.CollectableEnum.WOOD, s.CollectableEnum.STONE, s.CollectableEnum.FOOD, s.CollectableEnum.COAL, s.CollectableEnum.OIL, s.CollectableEnum.GLASS, s.CollectableEnum.IRON, s.CollectableEnum.AQUAMARINE, s.CollectableEnum.HONEY, s.CollectableEnum.MEAD, s.CollectableEnum.BEEF];
    ClientConstCollectable.GROUP_LIST_BASIC_CURRENCY = [s.CollectableEnum.C1, s.CollectableEnum.C2];
    ClientConstCollectable.GROUP_LIST_GOODS = ClientConstCollectable.GROUP_LIST_RESOURCES.concat(ClientConstCollectable.GROUP_LIST_BASIC_CURRENCY);
    ClientConstCollectable.GROUP_LIST_EQUIPMENT = [s.CollectableEnum.EQUIPMENT_RARENESS, s.CollectableEnum.EQUIPMENT_UNIQUE, s.CollectableEnum.HERO_RANDOM, s.CollectableEnum.EQUIPMENT_UNIQUE_ENCHANTED];
    ClientConstCollectable.GROUP_LIST_COMBINED_EVENT_REWARDS = [s.CollectableEnum.AQUAMARINE, s.CollectableEnum.IRON, s.CollectableEnum.GLASS, s.CollectableEnum.OIL, s.CollectableEnum.COAL, s.CollectableEnum.FOOD, s.CollectableEnum.STONE, s.CollectableEnum.WOOD, s.CollectableEnum.PERMANENT_TOOL_SLOT, s.CollectableEnum.GEM_RANDOM, s.CollectableEnum.GEM, s.CollectableEnum.CONSTRUCTION_ITEM, s.CollectableEnum.EQUIPMENT_UNIQUE, s.CollectableEnum.EQUIPMENT_RARENESS, s.CollectableEnum.EQUIPMENT_UNIQUE_ENCHANTED, s.CollectableEnum.HERO_RANDOM, s.CollectableEnum.C1, s.CollectableEnum.C2, s.CollectableEnum.UNITS, s.CollectableEnum.BUILDING];
    ClientConstCollectable.RENDERER_CLASS_DIC = ClientConstCollectable._getRendererDic();
    ClientConstCollectable.COLLECTABLES_WITHOUT_TEXTFIELD = [s.CollectableEnum.EQUIPMENT_RARENESS, s.CollectableEnum.EQUIPMENT_UNIQUE, s.CollectableEnum.HERO_RANDOM, s.CollectableEnum.GEM, s.CollectableEnum.GEM_RANDOM, s.CollectableEnum.BOOSTER, s.CollectableEnum.BUILDING, s.CollectableEnum.EXTINGUISH_FIRE, s.CollectableEnum.ALLIANCE_GIFT, s.CollectableEnum.DUNGEON_PROTECTION, s.CollectableEnum.RELIC_EQUIPMENT];
  };
  ClientConstCollectable.XML_PREFIX_COST = "cost";
  ClientConstCollectable.XML_PREFIX_ADD = "add";
  ClientConstCollectable.XML_PREFIX_AMOUNT = "amount";
  ClientConstCollectable.XML_PREFIX_SELL = "sell";
  return ClientConstCollectable;
}();
exports.ClientConstCollectable = a;
var s = require("./12.js");
var r = require("./2014.js");
var l = require("./2015.js");
var c = require("./2016.js");
var u = require("./2017.js");
var d = require("./2018.js");
var p = require("./2020.js");
var h = require("./2021.js");
var g = require("./2022.js");
var C = require("./2023.js");
var _ = require("./2024.js");
var m = require("./2025.js");
var f = require("./19.js");
var O = require("./1169.js");
a.__initialize_static_members();