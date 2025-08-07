Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./3.js");
var c = require("./58.js");
var u = require("./39.js");
var d = require("./4.js");
var p = require("./89.js");
var h = createjs.Point;
var g = function (e) {
  function WorldmapPanelButton() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(WorldmapPanelButton, e);
  WorldmapPanelButton.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    this.listenOnXPChanged();
  };
  Object.defineProperty(WorldmapPanelButton.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Btn_WorldMap;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.APanelButton.prototype, "iconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  WorldmapPanelButton.prototype.isButtonEnabled = function () {
    return d.CastleModel.userData.userLevel >= c.ClientConstLevelRestrictions.MIN_LEVEL_TO_THE_WORLD_MAP;
  };
  WorldmapPanelButton.prototype.isButtonVisible = function () {
    return m.CastleComponent.layoutManager.currentState == _.CastleLayoutManager.STATE_ISO;
  };
  WorldmapPanelButton.prototype.getButtonTooltip = function () {
    if (this.isButtonEnabled()) {
      return "panel_action_worldmap";
    } else {
      return l.Localize.text(u.ClientConstTextIds.LEVEL_NEEDED, [c.ClientConstLevelRestrictions.MIN_LEVEL_TO_THE_WORLD_MAP]);
    }
  };
  Object.defineProperty(WorldmapPanelButton.prototype, "iconDimension", {
    get: function () {
      return new h(40, 40);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.APanelButton.prototype, "iconDimension").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  WorldmapPanelButton.prototype.onButtonClicked = function () {
    if (d.CastleModel.kingdomData.activeKingdomID != r.FactionConst.KINGDOM_ID || d.CastleModel.specialEventData.getActiveEventByEventId(s.EventConst.EVENTTYPE_FACTION)) {
      a.CommandController.instance.executeCommand(C.IngameClientCommands.SWITCH_TO_WORLDMAP_COMMAND);
    } else {
      a.CommandController.instance.executeCommand(C.IngameClientCommands.JOIN_MAIN_CASTLE_COMMAND);
    }
  };
  return WorldmapPanelButton;
}(p.APanelButton);
exports.WorldmapPanelButton = g;
var C = require("./29.js");
var _ = require("./17.js");
var m = require("./14.js");
o.classImplementsInterfaces(g, "ICollectableRendererList");