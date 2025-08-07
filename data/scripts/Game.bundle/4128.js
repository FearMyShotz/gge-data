Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./89.js");
var r = function (e) {
  function SeasonHomeCastlePanelButton() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(SeasonHomeCastlePanelButton, e);
  Object.defineProperty(SeasonHomeCastlePanelButton.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Btn_GoToCastle;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.APanelButton.prototype, "iconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  SeasonHomeCastlePanelButton.prototype.getButtonTooltip = function () {
    return "panel_action_mainKingdom";
  };
  SeasonHomeCastlePanelButton.prototype.onButtonClicked = function () {
    a.CommandController.instance.executeCommand(l.IngameClientCommands.JOIN_MAIN_CASTLE_COMMAND);
  };
  return SeasonHomeCastlePanelButton;
}(s.APanelButton);
exports.SeasonHomeCastlePanelButton = r;
var l = require("./29.js");
o.classImplementsInterfaces(r, "ICollectableRendererList");