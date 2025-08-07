Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function ResourcePanelToolTipManager() {
    throw new Error("ResourcePanelToolTipManager is static class");
  }
  ResourcePanelToolTipManager.initialize = function () {
    ResourcePanelToolTipManager._toolTipClasses = new Map();
    ResourcePanelToolTipManager._toolTipClasses.set(ResourcePanelToolTipManager.TOOL_TIP_TYPE_FOOD, a.ResourcePanelToolTipFood);
    ResourcePanelToolTipManager._toolTipClasses.set(ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_POPULATION, l.ResourcePanelToolTipPopulation);
    ResourcePanelToolTipManager._toolTipClasses.set(ResourcePanelToolTipManager.TOOL_TIP_TYPE_LAW_AND_ORDER, s.ResourcePanelToolTipLawAndOrder);
    ResourcePanelToolTipManager._toolTipClasses.set(ResourcePanelToolTipManager.TOOL_TIP_TYPE_SEASON_MILITARY, _.ResourcePanelToolTipSeasonMilitary);
    ResourcePanelToolTipManager._toolTipClasses.set(ResourcePanelToolTipManager.TOOL_TIP_TYPE_SEASON_MORALE, r.ResourcePanelToolTipMorale);
    ResourcePanelToolTipManager._toolTipClasses.set(ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_WOOD, C.ResourcePanelToolTipResourceWood);
    ResourcePanelToolTipManager._toolTipClasses.set(ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_STONE, g.ResourcePanelToolTipResourceStone);
    ResourcePanelToolTipManager._toolTipClasses.set(ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_AQUAMARINE, c.ResourcePanelToolTipResourceAquamarine);
    ResourcePanelToolTipManager._toolTipClasses.set(ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_COAL, u.ResourcePanelToolTipResourceCoal);
    ResourcePanelToolTipManager._toolTipClasses.set(ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_OIL, h.ResourcePanelToolTipResourceOil);
    ResourcePanelToolTipManager._toolTipClasses.set(ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_GLASS, d.ResourcePanelToolTipResourceGlass);
    ResourcePanelToolTipManager._toolTipClasses.set(ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_IRON, p.ResourcePanelToolTipResourceIron);
    ResourcePanelToolTipManager._toolTipClasses.set(ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_HONEY, y.ResourcePanelToolTipResourceHoney);
    ResourcePanelToolTipManager._toolTipClasses.set(ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_MEAD, O.ResourcePanelToolTipResourceMead);
    ResourcePanelToolTipManager._toolTipClasses.set(ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_BEEF, E.ResourcePanelToolTipResourceBeef);
    ResourcePanelToolTipManager._toolTipClasses.set(ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_SPECIAL_CONTAINER_BUTTON, m.ResourcePanelToolTipSpecialButton);
    ResourcePanelToolTipManager._toolTipClasses.set(ResourcePanelToolTipManager.TOOL_TIP_TYPE_SEASON_AUXILIARIES, o.ResourcePanelToolTipFactionAuxiliary);
    ResourcePanelToolTipManager._tooltips = new Map();
    ResourcePanelToolTipManager._initialized = true;
  };
  ResourcePanelToolTipManager.hideAllToolTips = function () {
    if (ResourcePanelToolTipManager._tooltips != null) {
      for (var e = 0, t = Array.from(ResourcePanelToolTipManager._tooltips.values()); e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          i.hide();
        }
      }
    }
  };
  ResourcePanelToolTipManager.getToolTip = function (e) {
    if (!ResourcePanelToolTipManager._initialized || f.GGSCountryController.instance.currentCountry.ggsLanguageCode != ResourcePanelToolTipManager._currentLanguageCode) {
      ResourcePanelToolTipManager._currentLanguageCode = f.GGSCountryController.instance.currentCountry.ggsLanguageCode;
      ResourcePanelToolTipManager.initialize();
    }
    var t = ResourcePanelToolTipManager._tooltips.get(e);
    if (t == null) {
      var i = ResourcePanelToolTipManager._toolTipClasses.get(e);
      if (i != null) {
        t = new i();
        ResourcePanelToolTipManager._tooltips.set(e, t);
      }
    }
    return t;
  };
  Object.defineProperty(ResourcePanelToolTipManager, "toolTipContainer", {
    get: function () {
      return ResourcePanelToolTipManager._toolTipContainer;
    },
    set: function (e) {
      ResourcePanelToolTipManager._toolTipContainer = e;
    },
    enumerable: true,
    configurable: true
  });
  ResourcePanelToolTipManager.__initialize_static_members = function () {
    ResourcePanelToolTipManager.TOOL_TIP_TYPE_FOOD = 0;
    ResourcePanelToolTipManager.TOOL_TIP_TYPE_LAW_AND_ORDER = 1;
    ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_POPULATION = 2;
    ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_WOOD = 3;
    ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_STONE = 4;
    ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_AQUAMARINE = 5;
    ResourcePanelToolTipManager.TOOL_TIP_TYPE_SEASON_MILITARY = 6;
    ResourcePanelToolTipManager.TOOL_TIP_TYPE_SEASON_MORALE = 7;
    ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_COAL = 8;
    ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_OIL = 9;
    ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_GLASS = 10;
    ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_IRON = 11;
    ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_SPECIAL_CONTAINER_BUTTON = 12;
    ResourcePanelToolTipManager.TOOL_TIP_TYPE_SEASON_AUXILIARIES = 13;
    ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_HONEY = 14;
    ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_MEAD = 15;
    ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_BEEF = 16;
    ResourcePanelToolTipManager._currentLanguageCode = "";
  };
  ResourcePanelToolTipManager._initialized = false;
  return ResourcePanelToolTipManager;
}();
exports.ResourcePanelToolTipManager = n;
var o = require("./3315.js");
var a = require("./3317.js");
var s = require("./3318.js");
var r = require("./3319.js");
var l = require("./3320.js");
var c = require("./3321.js");
var u = require("./3322.js");
var d = require("./3323.js");
var p = require("./3324.js");
var h = require("./3325.js");
var g = require("./3326.js");
var C = require("./3327.js");
var _ = require("./3328.js");
var m = require("./3329.js");
var f = require("./2.js");
var O = require("./3330.js");
var E = require("./3331.js");
var y = require("./3332.js");
n.__initialize_static_members();