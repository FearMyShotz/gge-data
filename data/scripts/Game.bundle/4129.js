Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./89.js");
var s = function (e) {
  function SeasonOverviewPanelButton() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(SeasonOverviewPanelButton, e);
  Object.defineProperty(SeasonOverviewPanelButton.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Btn_UnitList;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.APanelButton.prototype, "iconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  SeasonOverviewPanelButton.prototype.getButtonTooltip = function () {
    return "dialog_seasonInventory_title";
  };
  SeasonOverviewPanelButton.prototype.onButtonClicked = function () {
    r.CastleComponent.dialogHandler.registerDefaultDialogs(l.CastleSeasonInventoryOverviewDialog);
  };
  return SeasonOverviewPanelButton;
}(a.APanelButton);
exports.SeasonOverviewPanelButton = s;
var r = require("./14.js");
var l = require("./4130.js");
o.classImplementsInterfaces(s, "ICollectableRendererList");