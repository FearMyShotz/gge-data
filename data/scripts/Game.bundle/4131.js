Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./89.js");
var s = function (e) {
  function SeasonWorldmapPanelButton() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(SeasonWorldmapPanelButton, e);
  Object.defineProperty(SeasonWorldmapPanelButton.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Btn_WorldMap;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.APanelButton.prototype, "iconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  SeasonWorldmapPanelButton.prototype.getButtonTooltip = function () {
    return "panel_action_worldmap";
  };
  SeasonWorldmapPanelButton.prototype.isButtonVisible = function () {
    return l.CastleComponent.layoutManager.currentState == r.CastleLayoutManager.STATE_ISO;
  };
  SeasonWorldmapPanelButton.prototype.onButtonClicked = function () {
    l.CastleComponent.layoutManager.state = r.CastleLayoutManager.STATE_SEASON_WORLDMAP;
  };
  return SeasonWorldmapPanelButton;
}(a.APanelButton);
exports.SeasonWorldmapPanelButton = s;
var r = require("./17.js");
var l = require("./14.js");
o.classImplementsInterfaces(s, "ICollectableRendererList");