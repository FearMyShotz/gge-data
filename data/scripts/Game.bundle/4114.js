Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./89.js");
var r = function (e) {
  function LegendHallPanelButton() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(LegendHallPanelButton, e);
  Object.defineProperty(LegendHallPanelButton.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_LegendTemple;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.APanelButton.prototype, "iconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  LegendHallPanelButton.prototype.getButtonTooltip = function () {
    return a.Localize.text("legendtemple_name");
  };
  LegendHallPanelButton.prototype.onButtonClicked = function () {
    u.CastleDialogHandler.getInstance().registerDefaultDialogs(p.CastleLegendSkillDialog);
  };
  LegendHallPanelButton.prototype.isButtonEnabled = function () {
    return d.CastleComponent.layoutManager.isInMyCastle;
  };
  LegendHallPanelButton.prototype.isButtonVisible = function () {
    return !!c.Iso.data && !d.CastleComponent.layoutManager.isInMyOccupiedCastle && c.Iso.data.objects.provider.hasFunctionalBuildingByType(l.IsoObjectEnum.LEGEND_TEMPLE);
  };
  return LegendHallPanelButton;
}(s.APanelButton);
exports.LegendHallPanelButton = r;
var l = require("./80.js");
var c = require("./34.js");
var u = require("./9.js");
var d = require("./14.js");
var p = require("./448.js");
o.classImplementsInterfaces(r, "ICollectableRendererList");