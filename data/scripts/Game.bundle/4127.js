Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./573.js");
var s = require("./4.js");
var r = require("./89.js");
var l = function (e) {
  function SeasonCampPanelButton() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(SeasonCampPanelButton, e);
  Object.defineProperty(SeasonCampPanelButton.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Btn_GoToCamp;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.APanelButton.prototype, "iconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  SeasonCampPanelButton.prototype.getButtonTooltip = function () {
    return "panel_action_camp";
  };
  SeasonCampPanelButton.prototype.isButtonVisible = function () {
    return u.CastleComponent.layoutManager.currentState == c.CastleLayoutManager.STATE_SEASON_WORLDMAP;
  };
  SeasonCampPanelButton.prototype.onButtonClicked = function () {
    s.CastleModel.smartfoxClient.sendCommandVO(new a.C2SJoinCampVO(s.CastleModel.specialEventData.activeSeasonVO.treasureMapVO.mapID));
  };
  return SeasonCampPanelButton;
}(r.APanelButton);
exports.SeasonCampPanelButton = l;
var c = require("./17.js");
var u = require("./14.js");
o.classImplementsInterfaces(l, "ICollectableRendererList");