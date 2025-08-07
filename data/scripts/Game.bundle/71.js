Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function AreaDataEvent(t, i = null, n = true, o = false) {
    var a = e.call(this, t, n, o) || this;
    a.params = i;
    return a;
  }
  n.__extends(AreaDataEvent, e);
  AreaDataEvent.__initialize_static_members = function () {
    AreaDataEvent.ON_CONSTRUCTION_LIST_CHANGED = "onConstructionListChanged";
    AreaDataEvent.ON_RESOURCES_CHANGED = "onResourcesChanged";
    AreaDataEvent.ON_INFO_VALUES_CHANGED = "onCommonInfoChanged";
    AreaDataEvent.ON_SLUM_LEVEL_CHANGED = "onSlumLevelChanged";
    AreaDataEvent.ON_CONSTRUCTION_ITEMS_UPDATED = "onConstructionItemsUpdated";
    AreaDataEvent.ON_BURNING_CASTLE_UPDATED = "onBurningCastleUpdated";
    AreaDataEvent.ON_HUNTER_BUILDING_DATA_SET = "onHunterBuildingDataSet";
    AreaDataEvent.ON_SPY_DATA_CHANGED = "onSpyDataChanged";
  };
  return AreaDataEvent;
}(createjs.Event);
exports.AreaDataEvent = o;
o.__initialize_static_members();